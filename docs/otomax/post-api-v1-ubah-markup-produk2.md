# Change product markup for all downlines
```http
POST /api/v1/ubah-markup-produk2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>markup</code> | ? | ?

## Contoh

### Request
```http
Change product markup for all downlines
POST http://localhost/api/v1/ubah-markup-produk2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234",
    "kodeproduk": "test5",
    "markup": "500"
}
```
