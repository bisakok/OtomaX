# Lihat daftar pengirim tipe SMS
```http
POST /api/v1/list-pengirim-sms
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
POST http://localhost/api/v1/list-pengirim-sms
Content-Type: application/json

{"pengirim":"+6281935155404"}


```
