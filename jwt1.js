const jwt = require("jsonwebtoken");
const secretKey = "bazma"

function buatTokenPendaftaran(namaLengkap, alamatRumah, nomorKontak) {
 
  const waktuKadaluarsa = Math.floor(Date.now() / 1000) + 60 * 60 * 24; 


  const dataPendaftaran = {
    nama_lengkap: namaLengkap,
    alamat_rumah: alamatRumah,
    nomor_kontak: nomorKontak,
    exp: waktuKadaluarsa, 
  };


  const tokenPendaftaran = jwt.sign(dataPendaftaran, secretKey);
  return tokenPendaftaran;
}

// Contoh penggunaan:
const namaLengkap = "Adli ";
const alamatRumah = "Jl.jalan No. 123";
const nomorKontak = "081234567890";

const tokenPendaftaran = buatTokenPendaftaran(
  namaLengkap,
  alamatRumah,
  nomorKontak
);
console.log("Token Pendaftaran Libur Lebaran:", tokenPendaftaran);

// no2 
function verifikasiTokenPendaftaran(token) {
  try {
   
    const decodedToken = jwt.verify(token, secretKey);
   
    const { nama_lengkap, alamat_rumah } = decodedToken;
   
    return { nama_lengkap, alamat_rumah };
  } catch (error) {
    
    return null;
  }
}

// Contoh penggunaan:
const tokenPendaftaran2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hX2xlbmdrYXAiOiJBZGxpICIsImFsYW1hdF9ydW1haCI6IkpsLmphbGFuIE5vLiAxMjMiLCJub21vcl9rb250YWsiOiIwODEyMzQ1Njc4OTAiLCJleHAiOjE3MTQ3MjQyMTQsImlhdCI6MTcxNDYzNzgxNH0.-WfeiIux4y8C776UtpFaEdeRon0_MCUoleh97zgH0qY"; 
const infoPendaftaran = verifikasiTokenPendaftaran(tokenPendaftaran2);

if (infoPendaftaran) {
  console.log("Informasi Pendaftaran Libur Lebaran:", infoPendaftaran);
} else {
  console.log("Token tidak valid atau telah kedaluwarsa.");
}

// no3
function buatTokenJadwalKegiatan(jadwalKegiatan) {
  const waktuKadaluarsa = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // Dalam detik

  
  const dataJadwal = {
    jadwal_kegiatan: jadwalKegiatan,
    exp: waktuKadaluarsa, // Menambahkan waktu kedaluwarsa ke dalam data
  };

 
  const tokenJadwal = jwt.sign(dataJadwal, secretKey);
  return tokenJadwal;
}

// Contoh penggunaan:
const jadwalKegiatan = {
  waktu_shalat: '12:00',
  waktu_makan_bersama: "13:00",
  waktu_bermain_bersama: "13:30",
};

const tokenJadwal = buatTokenJadwalKegiatan(jadwalKegiatan);
console.log("Token Jadwal Kegiatan Libur Lebaran:", tokenJadwal);

// no4
function verifikasiTokenPendaftaranLebaran(token) {
  try {
   
    const decodedToken = jwt.verify(token, secretKey);
   
    const { jadwal_kegiatan } = decodedToken;
   
    return { jadwal_kegiatan };
  } catch (error) {
    
    return null;
  }
}

const pendaftaranLebaran =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqYWR3YWxfa2VnaWF0YW4iOnsid2FrdHVfc2hhbGF0IjoiMTI6MDAiLCJ3YWt0dV9tYWthbl9iZXJzYW1hIjoiMTM6MDAiLCJ3YWt0dV9iZXJtYWluX2JlcnNhbWEiOiIxMzozMCJ9LCJleHAiOjE3MTQ3MjUxOTYsImlhdCI6MTcxNDYzODc5Nn0._XdaKW3AJQjCVvPYpLwC3nxFNJYAJSUCgFEOTTMK7L8";
const infoPendaftaranLebaran = verifikasiTokenPendaftaranLebaran(pendaftaranLebaran)
  
if (infoPendaftaranLebaran) {
  console.log("Informasi Pendaftaran Libur Lebaran:", infoPendaftaranLebaran);
} else {
  console.log("Token tidak valid atau telah kedaluwarsa.");
}


