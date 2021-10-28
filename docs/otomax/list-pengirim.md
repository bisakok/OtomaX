# [List Pengirim]()

<!-- @category Common -->

```bash
GET /api/v1/pengirim
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`kode_reseller` | null | Isi kode reseller untuk melihat data downline

## [Example]()

### [Request]()

```bash
GET http://localhost/api/v1/pengirim
```

### [Response]()

```json
{
  "code": 200,
  "message": "OK",
  "data": [
    {
      "pengirim": "",
      "tipe_pengirim": "W",
      "kode_reseller": "OX0001"
    },
    {
      "pengirim": "+6281935155404",
      "tipe_pengirim": "S",
      "kode_reseller": "OX0001"
    },
    {
      "pengirim": "1344008938",
      "tipe_pengirim": "Y",
      "kode_reseller": "OX0001"
    },
    {
      "pengirim": "6281935155404",
      "tipe_pengirim": "W",
      "kode_reseller": "OX0001"
    },
    {
      "pengirim": "ndiing2@jabb.im",
      "tipe_pengirim": "G",
      "kode_reseller": "OX0001"
    }
  ]
}
```