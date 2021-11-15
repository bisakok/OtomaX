# Registration of non member
```http
POST /api/v1/daftar-non-member
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>name</code> | ? | ?
<code>address</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://nxxxxx.myddns.me/api/v1/daftar-non-member
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "name": "Ridho",
    "address": "Pacitan",
    "pin": "1234"
}
```
