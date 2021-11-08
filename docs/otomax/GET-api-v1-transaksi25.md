# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi25
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
<code>trxid</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/transaksi25?pengirim=%2B6281935155404&kodeproduk=test5&tujuan=087758437457&pin=1234&trxid=123456


```
