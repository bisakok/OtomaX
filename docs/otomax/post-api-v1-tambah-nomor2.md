# Tambah pengirim tipe SMS untuk downline
```http
POST /api/v1/tambah-nomor2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/tambah-nomor2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "tujuan": "087758437457",
    "pin": "1234"
}
```
