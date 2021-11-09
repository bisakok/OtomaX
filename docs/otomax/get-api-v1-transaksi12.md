# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi12
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>nominal</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi12?pengirim=%2B6281935155404&pin=1234&tujuan=087758437457&nominal=50
```
