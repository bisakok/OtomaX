# Tukar semua komisi tunda dalam bentuk deposit
```http
POST /api/v1/tukar-komisi2
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
POST http://localhost/api/v1/tukar-komisi2
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}


```