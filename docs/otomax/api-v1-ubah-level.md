# Ubah level downline
```http
POST /api/v1/ubah-level
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
<code>kodelevel</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Ubah level downline
POST http://localhost/api/v1/ubah-level
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","kodelevel":"R","pin":"1234"}
```
