# Cek N (lihat Setting.LimitCekMutasi) mutasi saldo/deposit terakhir
```http
POST /api/v1/cek-mutasi
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null

## Contoh

### Request
```http
Cek N (lihat Setting.LimitCekMutasi) mutasi saldo/deposit terakhir
POST http://localhost/api/v1/cek-mutasi
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
