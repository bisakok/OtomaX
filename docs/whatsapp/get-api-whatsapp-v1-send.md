# Send
```http
GET /api/whatsapp/v1/send
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
GET http://localhost/api/whatsapp/v1/send?penerima=6281935155404&pesan=pesan&kode_terminal=1
```
