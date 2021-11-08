# Tambah nomor WA
```http
POST /api/v1/tambah-wa
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
<code>number</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Tambah nomor WA
POST http://localhost/api/v1/tambah-wa
Content-Type: application/json

{"pengirim":"+6281935155404","number":"087758437457","pin":"1234"}
```
