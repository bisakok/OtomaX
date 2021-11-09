# Tambah pengirim tipe SMS
```http
GET /api/v1/tambah-nomor
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Tambah pengirim tipe SMS
GET http://localhost/api/v1/tambah-nomor?pengirim=%2B6281935155404&tujuan=087758437457&pin=1234
```
