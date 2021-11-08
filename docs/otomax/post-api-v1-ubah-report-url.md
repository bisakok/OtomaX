# Change Report URL
```http
POST /api/v1/ubah-report-url
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>newurl</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/ubah-report-url
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "newurl": "http://localhost/api/v1/report",
    "pin": "1234"
}


```
