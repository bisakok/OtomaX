# Lihat daftar pengirim tipe SMS
```http
POST /api/v1/list-pengirim-sms
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
Lihat daftar pengirim tipe SMS
POST http://localhost/api/v1/list-pengirim-sms
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
