# Tambah pengirim tipe SMS
```http
POST /api/v1/tambah-nomor
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Tambah pengirim tipe SMS
POST http://localhost/api/v1/tambah-nomor
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tujuan": "087758437457",
    "pin": "1234"
}
```
