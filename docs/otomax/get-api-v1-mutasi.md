# Mutasi
```http
GET /api/v1/mutasi
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tanggal_awal</code> | ? | ?
<code>tanggal_akhir</code> | ? | ?
<code>jenis</code> | ? | ?
<code>kode_reseller</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/v1/mutasi?pengirim=%2B6281935155404&tanggal_awal=2021-10-01+00%3A00%3A00&tanggal_akhir=2021-10-31+23%3A59%3A59&jenis=T&kode_reseller=ox0004
```

### Request
```http
GET http://localhost/api/v1/mutasi?pengirim=%2B6281935155404&tanggal_awal=2021-10-01+00%3A00%3A00&tanggal_akhir=2021-10-31+23%3A59%3A59&jenis=T
```
