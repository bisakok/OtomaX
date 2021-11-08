# Cek laporan transaksi per tanggal
```http
POST /api/v1/laporan-transaksi
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tanggal</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/laporan-transaksi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tanggal": "20"
}


```
