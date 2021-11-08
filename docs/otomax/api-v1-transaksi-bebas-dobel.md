# Transaksi pengisian pulsa TANPA pengecekan dobel
```http
POST /api/v1/transaksi-bebas-dobel
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
## Contoh
### Request
```http
Transaksi pengisian pulsa TANPA pengecekan dobel
POST http://localhost/api/v1/transaksi-bebas-dobel
Content-Type: application/json

{"pengirim":"+6281935155404"}
```
