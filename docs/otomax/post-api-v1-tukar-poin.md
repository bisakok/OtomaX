# Menukar poin
```http
POST /api/v1/tukar-poin
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kode</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Menukar poin
POST http://localhost/api/v1/tukar-poin
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kode": "test5",
    "pin": "1234"
}
```
