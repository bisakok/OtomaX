# Cek status N (lihat Setting.LimitCekTransaksiAkhir) transaksi terakhir
```http
GET /api/v1/cek-transaksi-akhir
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/cek-transaksi-akhir?pengirim=%2B6281935155404


```
