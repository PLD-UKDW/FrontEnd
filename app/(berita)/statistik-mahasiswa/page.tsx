"use client";
import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, LineChart, BarChart, XAxis, YAxis, CartesianGrid, Line, Bar } from 'recharts';
// import Map from './map';

const disabilityData = [
  { name: 'Tuna Netra', value: 12 },
  { name: 'Tuna Rungu', value: 8 },
  { name: 'Tuna Daksa', value: 15 },
  { name: 'Tuna Grahita', value: 5 },
  { name: 'Spektrum Austisme', value: 10 },
];

const statusData = [
  { name: 'Aktif', value: 40 },
  { name: 'Cuti', value: 5 },
  { name: 'Undur Diri', value: 3 },
  { name: 'DO', value: 4 },
  { name: 'Lulus', value: 3 },
];

const facultyData = [
    { value: 'all', label: 'Semua Fakultas' },
    { value: 'Teologi', label: 'Teologi' },
    { value: 'Bisnis', label: 'Bisnis' },
    { value: 'Arsitektur dan Desain', label: 'Arsitektur dan Desain' },
    { value: 'Kedokteran', label: 'Kedokteran' },
    { value: 'Bioteknologi', label: 'Bioteknologi' },
    { value: 'Teknologi Informasi', label: 'Teknologi Informasi' },
    { value: 'Kependidikan dan Humaniora', label: 'Kependidikan dan Humaniora' },
];

const ipkData = [
    { value: 'all', label: 'Semua IPK' },
    { value: '4', label: '> 3.5' },
    { value: '3', label: '3.0 - 3.5' },
    { value: '2', label: '2.5 - 3.0' },
    { value: '1', label: '< 2.5' },
];

const provinsiData = [
    { value: 'all', label: 'Semua Provinsi' },
    { value: 'Jawa Tengah', label: 'Jawa Tengah' },
    { value: 'Jawa Timur', label: 'Jawa Timur' },
    { value: 'Jawa Barat', label: 'Jawa Barat' },
    { value: 'DKI Jakarta', label: 'DKI Jakarta' },
];

const angkatanData = [
    { value: 'all', label: 'Semua Angkatan' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
];

const jalurMasukData = [
    { value: 'all', label: 'Semua Jalur Masuk' },
    { value: 'SNMPTN', label: 'SNMPTN' },
    { value: 'SBMPTN', label: 'SBMPTN' },
    { value: 'Mandiri', label: 'Mandiri' },
];

const jenjangData = [
    { value: 'all', label: 'Semua Jenjang' },
    { value: 'S1', label: 'S1' },
    { value: 'S2', label: 'S2' },
    { value: 'S3', label: 'S3' },
];

const jenisKelaminData = [
    { value: 'all', label: 'Semua Jenis Kelamin' },
    { value: 'Laki-laki', label: 'Laki-laki' },
    { value: 'Perempuan', label: 'Perempuan' },
];

const jenisAsalSekolahData = [
    { value: 'all', label: 'Semua Jenis Asal Sekolah' },
    { value: 'SMA', label: 'SMA' },
    { value: 'SMK', label: 'SMK' },
    { value: 'MA', label: 'MA' },
];

const studentData = [
    { id: 1, nama: 'Student 1', provinsi: 'Jawa Tengah', lat: -7.150975, lng: 110.140259, fakultas: 'Teknologi Informasi', ragamDisabilitas: 'Tuna Netra', angkatan: '2021', jalurMasuk: 'SNMPTN', status: 'Aktif', jenjang: 'S1', jenisKelamin: 'Laki-laki', jenisAsalSekolah: 'SMA', ipk: 3.8 },
    { id: 2, nama: 'Student 2', provinsi: 'Jawa Timur', lat: -7.536098, lng: 112.238402, fakultas: 'Bisnis', ragamDisabilitas: 'Tuna Rungu', angkatan: '2020', jalurMasuk: 'SBMPTN', status: 'Aktif', jenjang: 'S1', jenisKelamin: 'Perempuan', jenisAsalSekolah: 'SMK', ipk: 3.5 },
    { id: 3, nama: 'Student 3', provinsi: 'Jawa Barat', lat: -6.917464, lng: 107.619123, fakultas: 'Kedokteran', ragamDisabilitas: 'Tuna Daksa', angkatan: '2022', jalurMasuk: 'Mandiri', status: 'Aktif', jenjang: 'S1', jenisKelamin: 'Laki-laki', jenisAsalSekolah: 'SMA', ipk: 3.9 },
    { id: 4, nama: 'Student 4', provinsi: 'DKI Jakarta', lat: -6.208763, lng: 106.845599, fakultas: 'Teologi', ragamDisabilitas: 'Spektrum Austisme', angkatan: '2021', jalurMasuk: 'SNMPTN', status: 'Cuti', jenjang: 'S2', jenisKelamin: 'Perempuan', jenisAsalSekolah: 'MA', ipk: 3.2 },
    { id: 5, nama: 'Student 5', provinsi: 'Jawa Tengah', lat: -6.966667, lng: 110.416664, fakultas: 'Bioteknologi', ragamDisabilitas: 'Tuna Grahita', angkatan: '2023', jalurMasuk: 'Mandiri', status: 'Aktif', jenjang: 'S1', jenisKelamin: 'Laki-laki', jenisAsalSekolah: 'SMK', ipk: 2.8 },
];

const COLORS_DISABILITY = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
const COLORS_STATUS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a4de6c'];

const totalActiveStudents = disabilityData.reduce((acc, curr) => acc + curr.value, 0);

export default function StatistikMahasiswaPage() {
  const MapChart = useMemo(() => dynamic(() => import('@/components/MapChart'), { ssr: false }), []);
  const [selectedFaculty, setSelectedFaculty] = useState('all');
  const [selectedDisability, setSelectedDisability] = useState('all');
  const [selectedIpk, setSelectedIpk] = useState('all');
  const [selectedProvinsi, setSelectedProvinsi] = useState('all');
  const [selectedAngkatan, setSelectedAngkatan] = useState('all');
  const [selectedJalurMasuk, setSelectedJalurMasuk] = useState('all');
  const [selectedJenjang, setSelectedJenjang] = useState('all');
  const [selectedJenisKelamin, setSelectedJenisKelamin] = useState('all');
  const [selectedJenisAsalSekolah, setSelectedJenisAsalSekolah] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredData = studentData.filter(student => {
    const ipkCategory = student.ipk > 3.5 ? '4' : student.ipk >= 3.0 ? '3' : student.ipk >= 2.5 ? '2' : '1';
    return (selectedFaculty === 'all' || student.fakultas === selectedFaculty) &&
            (selectedDisability === 'all' || student.ragamDisabilitas === selectedDisability) &&
            (selectedIpk === 'all' || ipkCategory === selectedIpk) &&
            (selectedProvinsi === 'all' || student.provinsi === selectedProvinsi) &&
            (selectedAngkatan === 'all' || student.angkatan === selectedAngkatan) &&
            (selectedJalurMasuk === 'all' || student.jalurMasuk === selectedJalurMasuk) &&
            (selectedJenjang === 'all' || student.jenjang === selectedJenjang) &&
            (selectedJenisKelamin === 'all' || student.jenisKelamin === selectedJenisKelamin) &&
            (selectedJenisAsalSekolah === 'all' || student.jenisAsalSekolah === selectedJenisAsalSekolah) &&
            (selectedStatus === 'all' || student.status === selectedStatus);
  });

  // Data for Line Chart (Jumlah Mahasiswa Disabilitas per Angkatan)
  const studentsPerAngkatan = filteredData.reduce((acc: { [key: string]: number }, student) => {
    acc[student.angkatan] = (acc[student.angkatan] || 0) + 1;
    return acc;
  }, {});
  const angkatanChartData = Object.keys(studentsPerAngkatan).sort().map(angkatan => ({
    angkatan,
    jumlah: studentsPerAngkatan[angkatan],
  }));

  // Data for Jenis Asal Sekolah Pie Chart
  const studentsPerAsalSekolah = filteredData.reduce((acc: { [key: string]: number }, student) => {
    acc[student.jenisAsalSekolah] = (acc[student.jenisAsalSekolah] || 0) + 1;
    return acc;
  }, {});
  const asalSekolahChartData = Object.keys(studentsPerAsalSekolah).map(asalSekolah => ({
    name: asalSekolah,
    value: studentsPerAsalSekolah[asalSekolah],
  }));

  // Data for Bar Chart (Jumlah Mahasiswa Disabilitas per Fakultas)
  const studentsPerFakultas = filteredData.reduce((acc: { [key: string]: number }, student) => {
    acc[student.fakultas] = (acc[student.fakultas] || 0) + 1;
    return acc;
  }, {});
  const fakultasChartData = Object.keys(studentsPerFakultas).sort().map(fakultas => ({
    fakultas,
    jumlah: studentsPerFakultas[fakultas],
  }));

  // Data for Jenis Kelamin Pie Chart
  const studentsPerJenisKelamin = filteredData.reduce((acc: { [key: string]: number }, student) => {
    acc[student.jenisKelamin] = (acc[student.jenisKelamin] || 0) + 1;
    return acc;
  }, {});
  const jenisKelaminChartData = Object.keys(studentsPerJenisKelamin).map(jenisKelamin => ({
    name: jenisKelamin,
    value: studentsPerJenisKelamin[jenisKelamin],
  }));

  // Data for Jenjang Studi Pie Chart
  const studentsPerJenjang = filteredData.reduce((acc: { [key: string]: number }, student) => {
    acc[student.jenjang] = (acc[student.jenjang] || 0) + 1;
    return acc;
  }, {});
  const jenjangChartData = Object.keys(studentsPerJenjang).map(jenjang => ({
    name: jenjang,
    value: studentsPerJenjang[jenjang],
  }));
    // Data for IPK Distribution Pie Chart
    const studentsPerIpkCategory = filteredData.reduce((acc: { [key: string]: number }, student) => {
      const ipkCategory = student.ipk > 3.5 ? '> 3.5' : student.ipk >= 3.0 ? '3.0 - 3.5' : student.ipk >= 2.5 ? '2.5 - 3.0' : '< 2.5';
      acc[ipkCategory] = (acc[ipkCategory] || 0) + 1;
      return acc;
    }, {});
    const ipkDistributionChartData = Object.keys(studentsPerIpkCategory).map(category => ({
      name: category,
      value: studentsPerIpkCategory[category],
    }));
    return (
      <section className="relative min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-green-300/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <header className="text-center mb-8 mt-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3e4095]">
              Statistik <span className="text-[#02a502]">Mahasiswa</span>
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Data terkini mengenai mahasiswa disabilitas di lingkungan universitas.
            </p>
          </header>
          {/* Filters Section */}
          <div className="mb-12 bg-white shadow-md rounded-xl p-4 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <label htmlFor="faculty-filter" className="block text-sm font-medium text-gray-700 mb-1">Fakultas</label>
                      <select
                          id="faculty-filter"
                          value={selectedFaculty}
                          onChange={(e) => setSelectedFaculty(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {facultyData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="disability-filter" className="block text-sm font-medium text-gray-700 mb-1">Ragam Disabilitas</label>
                      <select
                          id="disability-filter"
                          value={selectedDisability}
                          onChange={(e) => setSelectedDisability(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          <option value="all">Semua Disabilitas</option>
                          {disabilityData.map(option => (
                              <option key={option.name} value={option.name}>{option.name}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="ipk-filter" className="block text-sm font-medium text-gray-700 mb-1">IPK</label>
                      <select
                          id="ipk-filter"
                          value={selectedIpk}
                          onChange={(e) => setSelectedIpk(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {ipkData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="provinsi-filter" className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                      <select
                          id="provinsi-filter"
                          value={selectedProvinsi}
                          onChange={(e) => setSelectedProvinsi(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {provinsiData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="angkatan-filter" className="block text-sm font-medium text-gray-700 mb-1">Angkatan</label>
                      <select
                          id="angkatan-filter"
                          value={selectedAngkatan}
                          onChange={(e) => setSelectedAngkatan(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {angkatanData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="jalurMasuk-filter" className="block text-sm font-medium text-gray-700 mb-1">Jalur Masuk</label>
                      <select
                          id="jalurMasuk-filter"
                          value={selectedJalurMasuk}
                          onChange={(e) => setSelectedJalurMasuk(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {jalurMasukData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="jenjang-filter" className="block text-sm font-medium text-gray-700 mb-1">Jenjang</label>
                      <select
                          id="jenjang-filter"
                          value={selectedJenjang}
                          onChange={(e) => setSelectedJenjang(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {jenjangData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="jenisKelamin-filter" className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                      <select
                          id="jenisKelamin-filter"
                          value={selectedJenisKelamin}
                          onChange={(e) => setSelectedJenisKelamin(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {jenisKelaminData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="jenisAsalSekolah-filter" className="block text-sm font-medium text-gray-700 mb-1">Jenis Asal Sekolah</label>
                      <select
                          id="jenisAsalSekolah-filter"
                          value={selectedJenisAsalSekolah}
                          onChange={(e) => setSelectedJenisAsalSekolah(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          {jenisAsalSekolahData.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                      </select>
                  </div>
                  <div>
                      <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                          id="status-filter"
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                          <option value="all">Semua Status</option>
                          {statusData.map(option => (
                              <option key={option.name} value={option.name}>{option.name}</option>
                          ))}
                      </select>
                  </div>
              </div>
          </div>
          {/* Total Active Students Card */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                Total Mahasiswa Disabilitas Aktif
                </h2>
                <p className="text-5xl font-extrabold text-[#3e4095]">
                {totalActiveStudents}
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                Total Ragam Disabilitas
                </h2>
                <p className="text-5xl font-extrabold text-[#02a502]">
                {disabilityData.length}
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                Total Alumni Disabilitas
                </h2>
                <p className="text-5xl font-extrabold text-[#ffc658]">
                {statusData.find(s => s.name === 'Lulus')?.value || 0}
                </p>
              </div>
            </div>
          </div>
          {/* <Map /> */}
          {/* Map Section */}
          <div className="mb-12 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Peta Sebaran Mahasiswa
              </h2>
              <div className="h-96 w-full">
                  <MapChart data={filteredData} />
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Line Chart: Jumlah Mahasiswa Disabilitas per Angkatan */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Jumlah Mahasiswa Disabilitas per Angkatan
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <LineChart
                    data={angkatanChartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="angkatan" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="jumlah" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Bar Chart: Jumlah Mahasiswa Disabilitas per Fakultas */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Jumlah Mahasiswa Disabilitas per Fakultas
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <BarChart
                    data={fakultasChartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fakultas" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="jumlah" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Ragam Disabilitas Section */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Ragam Disabilitas
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={disabilityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    >
                      {disabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS_DISABILITY[index % COLORS_DISABILITY.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Status Mahasiswa Section */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Status Mahasiswa
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS_STATUS[index % COLORS_STATUS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Jenis Kelamin Pie Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Jenis Kelamin
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={jenisKelaminChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    >
                      {jenisKelaminChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d'][index % 2]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Jenjang Studi Pie Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Jenjang Studi
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={jenjangChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    >
                      {jenjangChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#ffc658', '#ff7f50', '#a4de6c'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Jenis Asal Sekolah Pie Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Jenis Asal Sekolah
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={asalSekolahChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    >
                      {asalSekolahChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* IPK Distribution Pie Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Distribusi IPK
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={ipkDistributionChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    >
                      {ipkDistributionChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }