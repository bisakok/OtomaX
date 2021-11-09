# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi17
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>nominal</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi17
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234",
    "tujuan": "087758437457",
    "nominal": "50"
}
```
