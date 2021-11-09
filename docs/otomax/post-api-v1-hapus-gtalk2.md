# Hapus pengirim tipe GTalk untuk downline
```http
POST /api/v1/hapus-gtalk2
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
Hapus pengirim tipe GTalk untuk downline
POST http://localhost/api/v1/hapus-gtalk2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "email": "nxxxxx.inc@gmail.com",
    "pin": "1234"
}
```
