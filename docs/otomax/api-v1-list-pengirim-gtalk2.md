# Lihat daftar pengirim tipe GTalk untuk downline
```http
POST /api/v1/list-pengirim-gtalk2
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
## Contoh
### Request
```http
Lihat daftar pengirim tipe GTalk untuk downline
POST http://localhost/api/v1/list-pengirim-gtalk2
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004"}
```
