# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/v1/transaksi?pengirim=%2B6281935155404&kodeproduk=test5&tujuan=087758437457&pin=1234
```
