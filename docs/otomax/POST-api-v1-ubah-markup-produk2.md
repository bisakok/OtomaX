# Change product markup for all downlines
```http
POST /api/v1/ubah-markup-produk2
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>markup</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/ubah-markup-produk2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234",
    "kodeproduk": "test5",
    "markup": "500"
}


```
