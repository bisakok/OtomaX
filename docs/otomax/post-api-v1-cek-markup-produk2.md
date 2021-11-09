# Check all product markups
```http
POST /api/v1/cek-markup-produk2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Check all product markups
POST http://localhost/api/v1/cek-markup-produk2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "pin": "1234"
}
```
