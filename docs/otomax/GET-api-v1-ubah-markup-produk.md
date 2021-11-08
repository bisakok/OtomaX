# Change product markup
```http
GET /api/v1/ubah-markup-produk
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>pin</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>markup</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/ubah-markup-produk?pengirim=%2B6281935155404&kodereseller=ox0004&pin=1234&kodeproduk=test5&markup=500


```
