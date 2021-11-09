# Send
```http
POST /api/jabber/v1/send
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>penerima</code> | String | null | null
<code>pesan</code> | String | null | null
<code>kode_terminal</code> | String | null | null

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
