# Cek laporan mutasi saldo per tanggal
```http
GET /api/v1/laporan-mutasi
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tanggal</code> | String | null | null

## Contoh

### Request
```http
Cek laporan mutasi saldo per tanggal
GET http://localhost/api/v1/laporan-mutasi?pengirim=%2B6281935155404&tanggal=20
```
