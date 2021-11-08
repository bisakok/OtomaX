# Ubah nama
```http
POST /api/v1/ubah-nama
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nama</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/ubah-nama
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nama": "Ridho",
    "pin": "1234"
}


```
