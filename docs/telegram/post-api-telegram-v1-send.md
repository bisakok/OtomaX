# Send
```http
POST /api/telegram/v1/send
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
POST http://localhost/api/telegram/v1/send
Content-Type: application/json

{
    "penerima": "1344008938",
    "pesan": "pesan"
}
```

### Request
```http
POST http://localhost/api/telegram/v1/send
Content-Type: application/json

{
    "penerima": "1344008938",
    "pesan": "pesan",
    "kode_terminal": 1
}
```
