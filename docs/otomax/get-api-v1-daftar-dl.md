# Daftarkan downline/reseller baru
```http
GET /api/v1/daftar-dl
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>nama</code> | String | null | null
<code>alamat</code> | String | null | null
<code>nomorhp</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Daftarkan downline/reseller baru
GET http://localhost/api/v1/daftar-dl?pengirim=%2B6281935155404&nama=Ridho&alamat=Pacitan&nomorhp=087758437457&pin=1234
```
