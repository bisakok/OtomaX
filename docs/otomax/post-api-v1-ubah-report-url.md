# Change Report URL
```http
POST /api/v1/ubah-report-url
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>newurl</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Change Report URL
POST http://localhost/api/v1/ubah-report-url
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "newurl": "http://localhost/api/v1/report",
    "pin": "1234"
}
```
