# Tambah pengirim tipe YM untuk downline
```http
POST /api/v1/tambah-ym2
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>yahooid</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/tambah-ym2
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","yahooid":"nxxxxx.inc@yahoo.co.id","pin":"1234"}


```
