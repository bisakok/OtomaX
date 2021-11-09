# Cek harga produk
```http
POST /api/v1/cek-harga
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?

## Contoh

### Request
```http
Cek harga produk
POST http://localhost/api/v1/cek-harga
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5"
}
```
