# Tambah pengirim tipe YM
```http
POST /api/v1/tambah-ym
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>yahooid</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Tambah pengirim tipe YM
POST http://localhost/api/v1/tambah-ym
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "yahooid": "nxxxxx.inc@yahoo.co.id",
    "pin": "1234"
}
```
