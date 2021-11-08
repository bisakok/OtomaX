# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi22
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
<code>pin</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>kodeproduk</code> | String | null | null
## Contoh
### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi22
Content-Type: application/json

{"pengirim":"+6281935155404","pin":"1234","tujuan":"087758437457","kodeproduk":"test5"}
```
