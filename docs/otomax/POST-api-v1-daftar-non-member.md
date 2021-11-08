# Registration of non member
```http
POST /api/v1/daftar-non-member
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>name</code> | String | null | null
<code>address</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/daftar-non-member
Content-Type: application/json

{"pengirim":"+6281935155501","name":"Ridho","address":"Pacitan","pin":"1234"}


```
