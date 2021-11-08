# Mutasi
```http
GET /api/v1/mutasi
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tanggal_awal</code> | String | null | null
<code>tanggal_akhir</code> | String | null | null
<code>jenis</code> | String | null | null
<code>kode_reseller</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/mutasi?pengirim=%2B6281935155404&tanggal_awal=2021-10-01+00%3A00%3A00&tanggal_akhir=2021-10-31+23%3A59%3A59&jenis=T&kode_reseller=ox0004
```
