# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi4
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>nominal</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?
<code>enduser</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi4
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5",
    "nominal": "50",
    "tujuan": "087758437457",
    "pin": "1234",
    "enduser": "087758437457"
}
```
