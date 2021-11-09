# Cek laporan transaksi per tanggal
```http
POST /api/v1/laporan-transaksi
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tanggal</code> | ? | ?

## Contoh

### Request
```http
Cek laporan transaksi per tanggal
POST http://localhost/api/v1/laporan-transaksi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tanggal": "20"
}
```
