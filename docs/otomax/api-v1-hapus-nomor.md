# Hapus pengirim tipe SMS
```http
POST /api/v1/hapus-nomor
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
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Hapus pengirim tipe SMS
POST http://localhost/api/v1/hapus-nomor
Content-Type: application/json

{"pengirim":"+6281935155404","tujuan":"087758437457","pin":"1234"}
```
