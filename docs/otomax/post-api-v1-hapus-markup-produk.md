# Delete product markup
```http
POST /api/v1/hapus-markup-produk
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>pin</code> | ? | ?
<code>kodeproduk</code> | ? | ?

## Contoh

### Request
```http
Delete product markup
POST http://localhost/api/v1/hapus-markup-produk
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "pin": "1234",
    "kodeproduk": "test5"
}
```
