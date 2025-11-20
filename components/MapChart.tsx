"use client";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Feature, Geometry } from 'geojson';

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
  NAMA_PROV: string;
}

interface GeoJSONData {
  type: "FeatureCollection";
  features: Feature<Geometry, GeoJSONFeatureProperties>[];
}

interface MapChartProps {
  data: Student[];
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
    const provinceName = feature.properties.NAMA_PROV;
    const studentCount = data.filter(student => student.provinsi === provinceName).length;

    layer.on({
      mouseover: (e) => {
        const target = e.target;
        target.setStyle({
          weight: 2.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
        });
        layer.bindPopup(`<b>${provinceName}</b><br/>Jumlah Mahasiswa: ${studentCount}`).openPopup();
      },
      mouseout: (e) => {
        const target = e.target;
        target.setStyle(style);
        layer.closePopup();
      }
    });

    layer.bindTooltip(provinceName, { permanent: true, direction: 'center', className: 'province-label' });
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

