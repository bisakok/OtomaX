# Hapus pengirim tipe GTalk
```http
POST /api/v1/hapus-gtalk
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>email</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Hapus pengirim tipe GTalk
POST http://localhost/api/v1/hapus-gtalk
Content-Type: application/json

{"pengirim":"+6281935155404","email":"ndiing.inc@gmail.com","pin":"1234"}
```
