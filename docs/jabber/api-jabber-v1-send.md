# Send
```http
POST /api/jabber/v1/send
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>penerima</code> | String | null | null
<code>pesan</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/jabber/v1/send
Content-Type: application/json

{
    "penerima": "ndiing2@jabb.im",
    "pesan": "pesan"
}
```
