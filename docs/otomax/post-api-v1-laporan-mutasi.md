# Cek laporan mutasi saldo per tanggal
```http
POST /api/v1/laporan-mutasi
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
Cek laporan mutasi saldo per tanggal
POST http://localhost/api/v1/laporan-mutasi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tanggal": "20"
}
```
