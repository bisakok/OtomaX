# Cek saldo akhir
```http
POST /api/v1/cek-saldo
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Cek saldo akhir
POST http://localhost/api/v1/cek-saldo
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234"
}
```
