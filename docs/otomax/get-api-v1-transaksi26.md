# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi26
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
<code>enduser</code> | String | null | null

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi26?pengirim=%2B6281935155404&kodeproduk=test5&tujuan=087758437457&pin=1234&enduser=087758437457
```
