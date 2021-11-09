# Ubah nama
```http
POST /api/v1/ubah-nama
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>nama</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Ubah nama
POST http://localhost/api/v1/ubah-nama
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nama": "Ridho",
    "pin": "1234"
}
```
