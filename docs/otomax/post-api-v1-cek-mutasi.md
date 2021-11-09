# Cek N (lihat Setting.LimitCekMutasi) mutasi saldo/deposit terakhir
```http
POST /api/v1/cek-mutasi
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
POST http://localhost/api/v1/cek-mutasi
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
