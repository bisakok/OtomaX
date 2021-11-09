# Ubah level downline
```http
POST /api/v1/ubah-level
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>kodelevel</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Ubah level downline
POST http://localhost/api/v1/ubah-level
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "kodelevel": "R",
    "pin": "1234"
}
```
