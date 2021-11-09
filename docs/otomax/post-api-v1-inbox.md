# Inbox
```http
POST /api/v1/inbox
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pesan</code> | String | null | null

## Contoh

### Request
```http
POST http://localhost/api/v1/inbox
Content-Type: application/json

{
"pengirim": "+6281935155404",
"pesan": "sal.1234"
}
```
