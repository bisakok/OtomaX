# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi10
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>tujuan</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi10
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234",
    "kodeproduk": "test5",
    "tujuan": "087758437457"
}
```
