# Allows transfer balance across the membership network
```http
POST /api/v1/transfer-saldo-lintas
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
Allows transfer balance across the membership network
POST http://localhost/api/v1/transfer-saldo-lintas
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
