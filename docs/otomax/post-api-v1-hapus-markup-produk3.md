# Delete product markup
```http
POST /api/v1/hapus-markup-produk3
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/hapus-markup-produk3
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5",
    "pin": "1234"
}
```
