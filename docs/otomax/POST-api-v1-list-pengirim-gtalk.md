# Lihat daftar pengirim tipe GTalk
```http
POST /api/v1/list-pengirim-gtalk
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/list-pengirim-gtalk
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}


```
