# Send
```http
GET /api/jabber/v1/send
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>penerima</code> | String | null | null
<code>pesan</code> | String | null | null
<code>kode_terminal</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/jabber/v1/send?penerima=nxxxxx2%40jabb.im&pesan=pesan&kode_terminal=1


```
