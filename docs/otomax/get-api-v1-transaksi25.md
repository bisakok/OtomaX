# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi25
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
<code>trxid</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi25?pengirim=%2B6281935155404&kodeproduk=test5&tujuan=087758437457&pin=1234&trxid=123456
```
