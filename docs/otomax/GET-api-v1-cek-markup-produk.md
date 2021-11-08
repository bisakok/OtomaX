# Check product markup
```http
GET /api/v1/cek-markup-produk
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/cek-markup-produk?pengirim=%2B6281935155404&kodereseller=ox0004&kodeproduk=test5&pin=1234


```
