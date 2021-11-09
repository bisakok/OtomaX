# Ubah level downline
```http
GET /api/v1/ubah-level
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>kodelevel</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Ubah level downline
GET http://localhost/api/v1/ubah-level?pengirim=%2B6281935155404&kodereseller=ox0004&kodelevel=R&pin=1234
```
