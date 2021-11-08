# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi14
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>counter</code> | String | null | null
<code>tujuan</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/transaksi14
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234",
    "kodeproduk": "test5",
    "counter": "1",
    "tujuan": "087758437457"
}


```
