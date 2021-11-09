# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi7
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>nominal</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi7
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nominal": "50"
}
```
