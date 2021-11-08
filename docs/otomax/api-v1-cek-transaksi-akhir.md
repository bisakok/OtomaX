# Cek status N (lihat Setting.LimitCekTransaksiAkhir) transaksi terakhir
```http
POST /api/v1/cek-transaksi-akhir
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
Cek status N (lihat Setting.LimitCekTransaksiAkhir) transaksi terakhir
POST http://localhost/api/v1/cek-transaksi-akhir
Content-Type: application/json

{"pengirim":"+6281935155404"}
```
