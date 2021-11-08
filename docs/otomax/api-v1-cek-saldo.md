# Cek saldo akhir
```http
POST /api/v1/cek-saldo
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Cek saldo akhir
POST http://localhost/api/v1/cek-saldo
Content-Type: application/json

{"pengirim":"+6281935155404","pin":"1234"}
```
