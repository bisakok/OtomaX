# Check product markup
```http
POST /api/v1/cek-markup-produk
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Check product markup
POST http://localhost/api/v1/cek-markup-produk
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","kodeproduk":"test5","pin":"1234"}
```
