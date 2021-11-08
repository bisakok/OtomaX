# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi18
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>kodeproduk</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/transaksi18
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234",
    "tujuan": "087758437457",
    "kodeproduk": "test5"
}


```
