# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi23
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>qty</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/transaksi23?pengirim=%2B6281935155404&tujuan=087758437457&pin=1234&kodeproduk=test5&qty=1


```