# Lihat daftar pengirim tipe SMS dari downline
```http
GET /api/v1/list-pengirim-sms2
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null

## Contoh

### Request
```http
Lihat daftar pengirim tipe SMS dari downline
GET http://localhost/api/v1/list-pengirim-sms2?pengirim=%2B6281935155404&kodereseller=ox0004
```
