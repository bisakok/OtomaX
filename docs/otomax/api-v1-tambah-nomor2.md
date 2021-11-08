# Tambah pengirim tipe SMS untuk downline
```http
POST /api/v1/tambah-nomor2
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
<code>tujuan</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Tambah pengirim tipe SMS untuk downline
POST http://localhost/api/v1/tambah-nomor2
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","tujuan":"087758437457","pin":"1234"}
```
