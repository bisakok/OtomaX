# Allows transfer balance across the membership network
```http
POST /api/v1/transfer-saldo-lintas
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/transfer-saldo-lintas
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}


```
