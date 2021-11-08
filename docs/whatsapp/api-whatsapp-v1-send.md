# Send
```http
POST /api/whatsapp/v1/send
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>penerima</code> | String | null | null
<code>pesan</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/whatsapp/v1/send
Content-Type: application/json

{
    "penerima": "6281935155404",
    "pesan": "pesan"
}
```
