# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi8
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodeproduk</code> | String | null | null
## Contoh
### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi8
Content-Type: application/json

{"pengirim":"+6281935155404","kodeproduk":"test5"}
```
