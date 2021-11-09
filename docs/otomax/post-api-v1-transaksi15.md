# Transaksi pengisian pulsa
```http
POST /api/v1/transaksi15
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>tujuan</code> | String | null | null
<code>nominal</code> | String | null | null
<code>counter</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Transaksi pengisian pulsa
POST http://localhost/api/v1/transaksi15
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "tujuan": "087758437457",
    "nominal": "50",
    "counter": "1",
    "pin": "1234"
}
```
