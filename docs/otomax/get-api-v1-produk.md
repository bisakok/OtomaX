# Produk
```http
GET /api/v1/produk
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kode_operator</code> | ? | ?
<code>kode_reseller</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/v1/produk?pengirim=%2B6281935155404&kode_operator=TEST&kode_reseller=ox0004
```

### Request
```http
GET http://localhost/api/v1/produk?pengirim=%2B6281935155404&kode_operator=TESTS
```
