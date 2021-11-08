# Tambah pengirim tipe YM
```http
POST /api/v1/tambah-ym
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>yahooid</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/tambah-ym
Content-Type: application/json

{"pengirim":"+6281935155404","yahooid":"ndiing.inc@yahoo.co.id","pin":"1234"}


```
