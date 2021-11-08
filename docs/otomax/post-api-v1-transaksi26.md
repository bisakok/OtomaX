# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi26
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
<code>enduser</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/transaksi26
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodeproduk": "test5",
    "tujuan": "087758437457",
    "pin": "1234",
    "enduser": "087758437457"
}


```
