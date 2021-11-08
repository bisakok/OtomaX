# Cek harga produk
```http
POST /api/v1/cek-harga
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodeproduk</code> | String | null | null
## Contoh
### Request
```http
Cek harga produk
POST http://localhost/api/v1/cek-harga
Content-Type: application/json

{"pengirim":"+6281935155404","kodeproduk":"test5"}
```
