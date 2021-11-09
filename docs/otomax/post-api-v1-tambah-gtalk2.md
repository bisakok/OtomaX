# Tambah pengirim tipe GTalk untuk downline
```http
POST /api/v1/tambah-gtalk2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>email</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/tambah-gtalk2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "email": "nxxxxx.inc@gmail.com",
    "pin": "1234"
}
```
