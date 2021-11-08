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
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36

{
"pengirim": "+6281935155404",
"pesan": "sal.1234"
}


```
