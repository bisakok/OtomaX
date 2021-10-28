# [List Produk]()

<!-- @category Common -->

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
{
  "code": 200,
  "message": "OK",
  "data": [
    {
      "kode": "TEST1",
      "nama": "TEST 1000",
      "harga_jual": 1400
    },
    {
      "kode": "TEST10",
      "nama": "TEST 10000",
      "harga_jual": 10400
    },
    {
      "kode": "TEST5",
      "nama": "TEST 5000",
      "harga_jual": 5050
    }
  ]
}
```