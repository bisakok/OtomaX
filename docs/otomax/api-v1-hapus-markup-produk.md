# Delete product markup
```http
POST /api/v1/hapus-markup-produk
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>pin</code> | String | null | null
<code>kodeproduk</code> | String | null | null
## Contoh
### Request
```http
Delete product markup
POST http://localhost/api/v1/hapus-markup-produk
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","pin":"1234","kodeproduk":"test5"}
```
