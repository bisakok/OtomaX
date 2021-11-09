# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi18
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>kodeproduk</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi18?pengirim=%2B6281935155404&pin=1234&tujuan=087758437457&kodeproduk=test5
```
