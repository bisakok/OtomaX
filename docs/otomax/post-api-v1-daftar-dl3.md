# Daftarkan downline/reseller baru
```http
POST /api/v1/daftar-dl3
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nama</code> | String | null | null
<code>alamat</code> | String | null | null
<code>nomorhp</code> | String | null | null
<code>kodelevel</code> | String | null | null
<code>pin</code> | String | null | null

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
