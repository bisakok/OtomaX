# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi4
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodeproduk</code> | String | null | null
<code>nominal</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
<code>enduser</code> | String | null | null
## Contoh
### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi4
Content-Type: application/json

{"pengirim":"+6281935155404","kodeproduk":"test5","nominal":"50","tujuan":"087758437457","pin":"1234","enduser":"087758437457"}
```
