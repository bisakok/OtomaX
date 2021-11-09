# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi9
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>nominal</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi9
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nominal": "50",
    "pin": "1234"
}
```
