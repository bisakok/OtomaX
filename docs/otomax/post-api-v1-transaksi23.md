# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi23
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>qty</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi23
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tujuan": "087758437457",
    "pin": "1234",
    "kodeproduk": "test5",
    "qty": "1"
}
```
