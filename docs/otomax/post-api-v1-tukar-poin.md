# Menukar poin
```http
POST /api/v1/tukar-poin
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kode</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/tukar-poin
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kode": "test5",
    "pin": "1234"
}


```
