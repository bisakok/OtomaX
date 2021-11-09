# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi8
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodeproduk</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi8
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5"
}
```
