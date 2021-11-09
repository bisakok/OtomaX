# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi4
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>nominal</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?
<code>enduser</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/v1/transaksi4?pengirim=%2B6281935155404&kodeproduk=test5&nominal=50&tujuan=087758437457&pin=1234&enduser=087758437457
```
