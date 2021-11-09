# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi28
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>nominal</code> | ? | ?
<code>counter</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi28
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nominal": "50",
    "counter": "1",
    "tujuan": "087758437457",
    "pin": "1234"
}
```
