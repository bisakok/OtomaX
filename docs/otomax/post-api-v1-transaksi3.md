# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi3
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>counter</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>qty</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi3
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "counter": "1",
    "kodeproduk": "test5",
    "qty": "1",
    "tujuan": "087758437457",
    "pin": "1234"
}
```
