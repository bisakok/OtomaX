# Lihat daftar pengirim tipe GTalk untuk downline
```http
POST /api/v1/list-pengirim-gtalk2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/list-pengirim-gtalk2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004"
}
```
