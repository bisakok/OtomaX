# Lihat daftar pengirim tipe SMS dari downline
```http
POST /api/v1/list-pengirim-sms2
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
Lihat daftar pengirim tipe SMS dari downline
POST http://localhost/api/v1/list-pengirim-sms2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004"
}
```
