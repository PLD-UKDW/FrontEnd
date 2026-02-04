"use client";
import { Feature, Geometry } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';

interface Student {
  id: number;
  nama: string;
  provinsi: string;
  lat: number;
  lng: number;
  fakultas: string;
  ragamDisabilitas: string;
  angkatan: string;
  jalurMasuk: string;
  status: string;
  jenjang: string;
  jenisKelamin: string;
  jenisAsalSekolah: string;
  ipk: number;
}

interface GeoJSONFeatureProperties {
  // The upstream data may use different keys; make all optional
  NAMA_PROV?: string;
  Propinsi?: string;
  PROPINSI?: string;
  Provinsi?: string;
  PROVINSI?: string;
  provinsi?: string;
  NAME_1?: string;
  name?: string;
}

interface GeoJSONData {
  type: "FeatureCollection";
  features: Feature<Geometry, GeoJSONFeatureProperties>[];
}

interface MapChartProps {
  data: Student[];
}

function normalizeProvince(name: string): string {
  const n = (name || '').trim().toLowerCase();
  const map: Record<string, string> = {
    // Aceh variations
    'nanggroe aceh darussalam': 'aceh',
    'aceh': 'aceh',
    'ntb': 'nusa tenggara barat',
    'nusa tenggara barat': 'nusa tenggara barat',
    'ntt': 'nusa tenggara timur',
    'nusa tenggara timur': 'nusa tenggara timur',
    'di yogyakarta': 'di yogyakarta',
    'd.i yogyakarta': 'di yogyakarta',
    'daerah istimewa yogyakarta': 'di yogyakarta',
    'dki jakarta': 'dki jakarta',
    'jakarta': 'dki jakarta',
    'bangka belitung': 'bangka belitung',
    'kep. bangka belitung': 'bangka belitung',
    'kepulauan bangka belitung': 'bangka belitung',
    'kepulauan riau': 'riau',
    'papua barat daya': 'papua barat',
    'papua selatan': 'papua',
    'papua tengah': 'papua',
    'papua pegunungan': 'papua',
  };
  return map[n] ?? n;
}

function getProvinceName(feature: Feature<Geometry, GeoJSONFeatureProperties>): string {
  const p = feature.properties || {};
  const rawName = p.NAMA_PROV || p.Propinsi || p.PROPINSI || p.Provinsi || p.PROVINSI || p.provinsi || p.NAME_1 || p.name || '';
  return typeof rawName === 'string' ? rawName : '';
}
  
const MapChart: React.FC<MapChartProps> = ({ data }) => {
  const [geoJsonData, setGeoJsonData] = useState<GeoJSONData | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json')
      .then(response => response.json())
      .then((data: GeoJSONData) => setGeoJsonData(data));
  }, []);

  const style = {
    fillColor: 'green',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  };

  const onEachFeature = (feature: Feature<Geometry, GeoJSONFeatureProperties>, layer: L.Layer) => {
    const provinceName = getProvinceName(feature);
    const provNorm = normalizeProvince(provinceName);
    const studentCount = data.filter(student => normalizeProvince(student.provinsi) === provNorm).length;
    const content = `<b>${provinceName || 'Tidak diketahui'}</b><br/>Jumlah Mahasiswa Disabilitas: ${studentCount}`;

    layer.on({
      mouseover: (e: L.LeafletMouseEvent) => {
        const target = e.target as L.Path;
        target.setStyle({
          weight: 2.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
        });
        // Bind and open popup at cursor position to ensure visibility
        layer.bindPopup(content);
        (layer as any).openPopup(e.latlng);
      },
      mouseout: (e: L.LeafletMouseEvent) => {
        const target = e.target as L.Path;
        target.setStyle(style);
        layer.closePopup();
      },
      click: (e: L.LeafletMouseEvent) => {
        // Fallback: open popup on click as well
        layer.bindPopup(content);
        (layer as any).openPopup(e.latlng);
      }
    });

    const label = provinceName || '';
    if (label) {
      layer.bindTooltip(label, { permanent: true, direction: 'center', className: 'province-label' });
    }
  };

  return (
    <>
      <style>{`
        .province-label {
          background: transparent;
          border: none;
          box-shadow: none;
          font-weight: normal; /* Set font back to normal weight */
          color: black;
          font-size: 12px; /* Set font size back to 12px */
          text-align: center;
          pointer-events: none;
          z-index: 1000; /* Ensure labels are on top */
          text-shadow: 1px 1px 2px rgba(255,255,255,0.7); /* Keep text shadow for contrast */
        }
      `}</style>
      <MapContainer center={[-2.548926, 118.0148634]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={style}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </>
  );
};

export default MapChart;

