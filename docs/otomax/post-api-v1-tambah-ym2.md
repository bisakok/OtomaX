# Tambah pengirim tipe YM untuk downline
```http
POST /api/v1/tambah-ym2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>yahooid</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/tambah-ym2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "yahooid": "nxxxxx.inc@yahoo.co.id",
    "pin": "1234"
}
```
