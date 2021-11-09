# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi29
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>qty</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi29
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5",
    "qty": "1",
    "tujuan": "087758437457",
    "pin": "1234"
}
```
