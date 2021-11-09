# Cek status transaksi
```http
POST /api/v1/cek-status-transaksi
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>nomor tujuan</code> | ? | ?

## Contoh

### Request
```http
Cek status transaksi
POST http://localhost/api/v1/cek-status-transaksi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nomor tujuan": "087758437457"
}
```
