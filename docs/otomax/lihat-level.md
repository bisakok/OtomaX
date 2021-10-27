# [Lihat Level]()

<!-- @category Common -->

```bash
GET /api/otomax/v1/level
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`kode_reseller` | null | Isi kode reseller untuk melihat data downline

## [Example]()

### [Request]()

```bash
GET http://localhost/api/otomax/v1/level
```

### [Response]()

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "kode": "R",
    "nama": "Reseller",
    "selisih_harga": 50,
    "kode_upline": "A",
    "bonus": 0,
    "jumlah_ym": 3,
    "jumlah_sms": 3,
    "keterangan": "5",
    "blok_produk": "",
    "deposit_minimal": 10000,
    "sms_end_user": 0,
    "default_markup": 50,
    "par_balas": null,
    "poin_trx": 0,
    "no_komisi": null,
    "transfer_lintas": null,
    "deposit_maksimal": null,
    "max_pakai": null,
    "guna_poin_produk": null,
    "tgl_data": "2021-10-25T12:42:03.503Z",
    "no_ubah_markup": null
  }
}
```