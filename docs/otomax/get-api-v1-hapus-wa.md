# Hapus nomor WA
```http
GET /api/v1/hapus-wa
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nomor</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Hapus nomor WA
GET http://localhost/api/v1/hapus-wa?pengirim=%2B6281935155404&nomor=087758437457&pin=1234
```
