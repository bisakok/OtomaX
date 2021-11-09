# Cek status transaksi
```http
POST /api/v1/cek-status-transaksi2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>tujuan</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/cek-status-transaksi2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tujuan": "087758437457"
}
```
