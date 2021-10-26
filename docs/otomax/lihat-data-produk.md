# [Lihat Data Produk]()

```bash
GET /api/otomax/v1/produk
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`kode_operator` | null | Isi kode operator
`kode_reseller` | null | Isi kode reseller untuk melihat data downline

## [Example]()

### [Request]()

```bash
GET http://localhost/api/otomax/v1/produk?kode_operator=TEST
```

### [Response]()

```json
{"code":200,"message":"OK","data":[]}
```