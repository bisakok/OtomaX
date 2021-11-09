# Change product markup
```http
POST /api/v1/ubah-markup-produk
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
<code>markup</code> | ? | ?

## Contoh

### Request
```http
Change product markup
POST http://localhost/api/v1/ubah-markup-produk
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "pin": "1234",
    "kodeproduk": "test5",
    "markup": "500"
}
```
