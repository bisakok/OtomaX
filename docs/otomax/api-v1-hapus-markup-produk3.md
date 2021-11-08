# Delete product markup
```http
POST /api/v1/hapus-markup-produk3
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Delete product markup
POST http://localhost/api/v1/hapus-markup-produk3
Content-Type: application/json

{"pengirim":"+6281935155404","kodeproduk":"test5","pin":"1234"}
```
