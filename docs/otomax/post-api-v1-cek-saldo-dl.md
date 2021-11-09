# Cek saldo downline
```http
POST /api/v1/cek-saldo-dl
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null

## Contoh

### Request
```http
Cek saldo downline
POST http://localhost/api/v1/cek-saldo-dl
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004"
}
```
