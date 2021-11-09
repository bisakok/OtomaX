# Cek status transaksi
```http
GET /api/v1/cek-status-transaksi
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nomor tujuan</code> | String | null | null

## Contoh

### Request
```http
Cek status transaksi
GET http://localhost/api/v1/cek-status-transaksi?pengirim=%2B6281935155404&nomor+tujuan=087758437457
```
