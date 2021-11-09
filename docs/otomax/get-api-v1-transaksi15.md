# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi15
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>nominal</code> | ? | ?
<code>counter</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/v1/transaksi15?pengirim=%2B6281935155404&tujuan=087758437457&nominal=50&counter=1&pin=1234
```
