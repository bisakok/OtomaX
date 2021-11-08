# Hapus pengirim tipe YM
```http
POST /api/v1/hapus-ym
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>yahooid</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Hapus pengirim tipe YM
POST http://localhost/api/v1/hapus-ym
Content-Type: application/json

{"pengirim":"+6281935155404","yahooid":"ndiing.inc@yahoo.co.id","pin":"1234"}
```
