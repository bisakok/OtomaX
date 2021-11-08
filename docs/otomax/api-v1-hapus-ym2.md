# Hapus pengirim tipe YM dari downline
```http
POST /api/v1/hapus-ym2
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
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
Hapus pengirim tipe YM dari downline
POST http://localhost/api/v1/hapus-ym2
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","yahooid":"ndiing.inc@yahoo.co.id","pin":"1234"}
```
