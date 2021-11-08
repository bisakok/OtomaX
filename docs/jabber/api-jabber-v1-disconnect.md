# Disconnect
```http
POST /api/jabber/v1/disconnect
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>kode_terminal</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/jabber/v1/disconnect
Content-Type: application/json

{
    "kode_terminal": 25
}
```
