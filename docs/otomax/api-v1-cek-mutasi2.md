# Cek mutasi saldo terakhir, khusus manual, tiket, dan transfer saldo
```http
POST /api/v1/cek-mutasi2
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
Cek mutasi saldo terakhir, khusus manual, tiket, dan transfer saldo
POST http://localhost/api/v1/cek-mutasi2
Content-Type: application/json

{"pengirim":"+6281935155404"}
```
