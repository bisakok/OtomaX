# Send
```http
POST /api/jabber/v1/send
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>penerima</code> | ? | ?
<code>pesan</code> | ? | ?
<code>kode_terminal</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/jabber/v1/send
Content-Type: application/json

{
    "penerima": "nxxxxx2@jabb.im",
    "pesan": "pesan"
}
```

### Request
```http
POST http://localhost/api/jabber/v1/send
Content-Type: application/json

{
    "penerima": "nxxxxx2@jabb.im",
    "pesan": "pesan",
    "kode_terminal": 1
}
```
