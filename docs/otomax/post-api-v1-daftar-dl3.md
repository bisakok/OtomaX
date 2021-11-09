# Daftarkan downline/reseller baru
```http
POST /api/v1/daftar-dl3
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
<code>kodelevel</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Daftarkan downline/reseller baru
POST http://localhost/api/v1/daftar-dl3
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "nama": "Ridho",
    "alamat": "Pacitan",
    "nomorhp": "087758437457",
    "kodelevel": "R",
    "pin": "1234"
}
```
