# Hapus nomor WA
```http
POST /api/v1/hapus-wa
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nomor</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Hapus nomor WA
POST http://localhost/api/v1/hapus-wa
Content-Type: application/json

{"pengirim":"+6281935155404","nomor":"087758437457","pin":"1234"}
```
