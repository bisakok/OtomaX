# Connect
```http
POST /api/telegram/v1/connect
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>label</code> | String | null | null
<code>password</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/telegram/v1/connect
Content-Type: application/json

{
    "label": "api_otomax_bot",
    "password": "2049367740:AAFl5EPPT9D-EBFhuzxqlbf67Yn6tdQAfms"
}


```
