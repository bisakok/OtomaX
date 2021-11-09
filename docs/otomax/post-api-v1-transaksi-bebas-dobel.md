# Transaksi pengisian pulsa TANPA pengecekan dobel
```http
POST /api/v1/transaksi-bebas-dobel
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/transaksi-bebas-dobel
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
