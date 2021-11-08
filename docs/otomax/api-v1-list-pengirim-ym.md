# Lihat daftar pengirim tipe YM
```http
POST /api/v1/list-pengirim-ym
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
Lihat daftar pengirim tipe YM
POST http://localhost/api/v1/list-pengirim-ym
Content-Type: application/json

{"pengirim":"+6281935155404"}
```
