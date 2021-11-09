# Change product markup
```http
GET /api/v1/ubah-markup-produk
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>pin</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>markup</code> | ? | ?

## Contoh

### Request
```http
Change product markup
GET http://localhost/api/v1/ubah-markup-produk?pengirim=%2B6281935155404&kodereseller=ox0004&pin=1234&kodeproduk=test5&markup=500
```
