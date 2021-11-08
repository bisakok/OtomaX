# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi15
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>nominal</code> | String | null | null
<code>counter</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/transaksi15?pengirim=%2B6281935155404&tujuan=087758437457&nominal=50&counter=1&pin=1234


```
