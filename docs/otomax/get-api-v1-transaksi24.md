# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi24
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>qty</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?
<code>counter</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi24?pengirim=%2B6281935155404&kodeproduk=test5&qty=1&tujuan=087758437457&pin=1234&counter=1
```
