# Inbox
```http
POST /api/v1/inbox
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pesan</code> | ? | ?

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
