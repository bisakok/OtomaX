# Tambah nomor WA
```http
POST /api/v1/tambah-wa
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>number</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/tambah-wa
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "number": "087758437457",
    "pin": "1234"
}
```
