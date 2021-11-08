# Cek laporan transaksi per tanggal
```http
GET /api/v1/laporan-transaksi
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
GET http://localhost/api/v1/laporan-transaksi?pengirim=%2B6281935155404&tanggal=20


```
