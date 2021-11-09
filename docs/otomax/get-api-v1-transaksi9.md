# Transaksi pengisian pulsa
```http
GET /api/v1/transaksi9
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nominal</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Transaksi pengisian pulsa
GET http://localhost/api/v1/transaksi9?pengirim=%2B6281935155404&nominal=50&pin=1234
```
