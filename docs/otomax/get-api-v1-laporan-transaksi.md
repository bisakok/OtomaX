# Cek laporan transaksi per tanggal
```http
GET /api/v1/laporan-transaksi
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tanggal</code> | ? | ?

## Contoh

### Request
```http
Cek laporan transaksi per tanggal
GET http://localhost/api/v1/laporan-transaksi?pengirim=%2B6281935155404&tanggal=20
```
