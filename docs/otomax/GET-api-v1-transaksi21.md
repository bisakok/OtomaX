# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi21
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>nominal</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/transaksi21?pengirim=%2B6281935155404&pin=1234&tujuan=087758437457&nominal=50


```
