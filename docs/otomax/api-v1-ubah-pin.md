# Ubah PIN
```http
POST /api/v1/ubah-pin
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
<code>pinlama</code> | String | null | null
<code>pinbaru</code> | String | null | null
## Contoh
### Request
```http
Ubah PIN
POST http://localhost/api/v1/ubah-pin
Content-Type: application/json

{"pengirim":"+6281935155404","pinlama":"1234","pinbaru":"1234"}
```
