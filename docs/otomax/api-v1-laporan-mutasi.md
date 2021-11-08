# Cek laporan mutasi saldo per tanggal
```http
POST /api/v1/laporan-mutasi
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tanggal</code> | String | null | null
## Contoh
### Request
```http
Cek laporan mutasi saldo per tanggal
POST http://localhost/api/v1/laporan-mutasi
Content-Type: application/json

{"pengirim":"+6281935155404","tanggal":"20"}
```
