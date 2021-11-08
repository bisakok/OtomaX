# Cek status transaksi
```http
POST /api/v1/cek-status-transaksi2
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
<code>tujuan</code> | String | null | null
## Contoh
### Request
```http
Cek status transaksi
POST http://localhost/api/v1/cek-status-transaksi2
Content-Type: application/json

{"pengirim":"+6281935155404","tujuan":"087758437457"}
```
