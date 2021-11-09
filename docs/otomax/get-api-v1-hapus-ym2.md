# Hapus pengirim tipe YM dari downline
```http
GET /api/v1/hapus-ym2
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>yahooid</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Hapus pengirim tipe YM dari downline
GET http://localhost/api/v1/hapus-ym2?pengirim=%2B6281935155404&kodereseller=ox0004&yahooid=nxxxxx.inc%40yahoo.co.id&pin=1234
```
