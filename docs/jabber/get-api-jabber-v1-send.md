# Send
```http
GET /api/jabber/v1/send
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>penerima</code> | ? | ?
<code>pesan</code> | ? | ?
<code>kode_terminal</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/jabber/v1/send?penerima=nxxxxx2%40jabb.im&pesan=pesan&kode_terminal=1
```
