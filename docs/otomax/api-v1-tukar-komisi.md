# Tukar komisi tunda dalam bentuk deposit
```http
POST /api/v1/tukar-komisi
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>jumlah</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Tukar komisi tunda dalam bentuk deposit
POST http://localhost/api/v1/tukar-komisi
Content-Type: application/json

{"pengirim":"+6281935155404","jumlah":"10000","pin":"1234"}
```
