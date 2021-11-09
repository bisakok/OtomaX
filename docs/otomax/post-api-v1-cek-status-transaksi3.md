# Cek status transaksi
```http
POST /api/v1/cek-status-transaksi3
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tanggal</code> | String | null | null
<code>tujuan</code> | String | null | null

## Contoh

### Request
```http
Cek status transaksi
POST http://localhost/api/v1/cek-status-transaksi3
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tanggal": "20",
    "tujuan": "087758437457"
}
```
