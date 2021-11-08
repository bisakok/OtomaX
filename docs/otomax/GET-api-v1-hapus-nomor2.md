# Hapus pengirim tipe SMS
```http
GET /api/v1/hapus-nomor2
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/hapus-nomor2?pengirim=%2B6281935155404&kodereseller=ox0004&tujuan=087758437457&pin=1234


```
