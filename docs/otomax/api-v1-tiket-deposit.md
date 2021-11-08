# Tiket Deposit
```http
POST /api/v1/tiket-deposit
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
<code>jumlah</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Tiket Deposit
POST http://localhost/api/v1/tiket-deposit
Content-Type: application/json

{"pengirim":"+6281935155404","jumlah":"10000","pin":"1234"}
```
