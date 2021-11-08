# Cek status transaksi
```http
POST /api/v1/cek-status-transaksi
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nomor tujuan</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/cek-status-transaksi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nomor tujuan": "087758437457"
}


```
