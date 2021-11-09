# Lihat daftar pengirim semua tipe
```http
POST /api/v1/list-pengirim
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/list-pengirim
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
