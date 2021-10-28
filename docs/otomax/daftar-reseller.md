# Daftar Reseller

<!-- @category Common -->

```bash
GET /api/v1/reseller
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`kode_reseller` | null | Isi kode reseller untuk melihat data downline

## Example

### Request

```bash
GET http://localhost/api/v1/reseller
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "kode": "OX0001",
    "nama": "ndiing",
    "saldo": 987700,
    "alamat": null,
    "pin": "1234",
    "aktif": 1,
    "kode_upline": null,
    "kode_level": "R",
    "keterangan": null,
    "tgl_daftar": "2021-10-05T04:29:54.410Z",
    "saldo_minimal": 0,
    "tgl_aktivitas": "2021-10-26T17:30:37.240Z",
    "nama_pemilik": "Ndiing",
    "oid": "9876543216549876543216549876543212654987",
    "poin": null,
    "alamat_ip": "127.0.0.1",
    "url_report": "http://localhost/api/v1/report",
    "tgl_data": "2021-10-26T17:30:37.240Z",
    "suspend": null,
    "nomor_ktp": null,
    "npwp": null
  }
}
```