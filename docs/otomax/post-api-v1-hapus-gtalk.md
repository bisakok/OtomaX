# Hapus pengirim tipe GTalk
```http
POST /api/v1/hapus-gtalk
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>email</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Hapus pengirim tipe GTalk
POST http://localhost/api/v1/hapus-gtalk
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "email": "nxxxxx.inc@gmail.com",
    "pin": "1234"
}
```
