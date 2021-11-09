# Lihat daftar pengirim tipe GTalk
```http
POST /api/v1/list-pengirim-gtalk
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
Lihat daftar pengirim tipe GTalk
POST http://localhost/api/v1/list-pengirim-gtalk
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
