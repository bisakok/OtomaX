# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi25
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?
<code>trxid</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi25
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5",
    "tujuan": "087758437457",
    "pin": "1234",
    "trxid": "123456"
}
```
