# Change product markup for all downlines
```http
GET /api/v1/ubah-markup-produk2
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>markup</code> | String | null | null

## Contoh

### Request
```http
Change product markup for all downlines
GET http://localhost/api/v1/ubah-markup-produk2?pengirim=%2B6281935155404&pin=1234&kodeproduk=test5&markup=500
```
