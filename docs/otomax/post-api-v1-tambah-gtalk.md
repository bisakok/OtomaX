# Tambah pengirim tipe GTalk
```http
POST /api/v1/tambah-gtalk
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>email</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Tambah pengirim tipe GTalk
POST http://localhost/api/v1/tambah-gtalk
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "email": "nxxxxx.inc@gmail.com",
    "pin": "1234"
}
```
