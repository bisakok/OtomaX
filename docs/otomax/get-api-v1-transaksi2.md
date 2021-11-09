# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi2
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>tujuan</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi2?pengirim=%2B6281935155404&pin=1234&kodeproduk=test5&tujuan=087758437457
```
