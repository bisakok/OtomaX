# Daftar Operator

<!-- @category Common -->

```bash
GET /api/v1/operator
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`kode_reseller` | null | Isi kode reseller untuk melihat data downline

## Example

### Request

```bash
GET http://localhost/api/v1/operator
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": [
    {
      "kode": "AON",
      "nama": "THREE AON"
    },
    {
      "kode": "AXD",
      "nama": "AXIS DATA"
    },
    {
      "kode": "D",
      "nama": "DANA"
    },
    {
      "kode": "DI",
      "nama": "ISAT DATA"
    },
    {
      "kode": "E",
      "nama": "E TOLL"
    },
    {
      "kode": "GOJEK",
      "nama": "GOJEK"
    },
    {
      "kode": "GOPAY",
      "nama": "GOPAY"
    },
    {
      "kode": "GRAB",
      "nama": "GRAB"
    },
    {
      "kode": "I",
      "nama": "ISAT"
    },
    {
      "kode": "L",
      "nama": "LINKAJA"
    },
    ...
  ]
}
```