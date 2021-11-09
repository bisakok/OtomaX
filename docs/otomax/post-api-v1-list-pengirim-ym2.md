# Lihat daftar pengirim tipe YM dari downline
```http
POST /api/v1/list-pengirim-ym2
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
POST http://localhost/api/v1/list-pengirim-ym2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004"
}
```
