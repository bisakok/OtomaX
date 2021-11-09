# Daftarkan downline/reseller baru
```http
POST /api/v1/daftar-dl2
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>nama</code> | ? | ?
<code>alamat</code> | ? | ?
<code>nomorhp</code> | ? | ?
<code>markup</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/daftar-dl2
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nama": "Ridho",
    "alamat": "Pacitan",
    "nomorhp": "087758437457",
    "markup": "500",
    "pin": "1234"
}
```
