# Hapus pengirim tipe SMS
```http
POST /api/v1/hapus-nomor2
```
keterangan
## Properties
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
Hapus pengirim tipe SMS
POST http://localhost/api/v1/hapus-nomor2
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","tujuan":"087758437457","pin":"1234"}
```
