# Hapus pengirim tipe SMS
```http
GET /api/v1/hapus-nomor2
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>tujuan</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Hapus pengirim tipe SMS
GET http://localhost/api/v1/hapus-nomor2?pengirim=%2B6281935155404&kodereseller=ox0004&tujuan=087758437457&pin=1234
```
