# Non-aktifkan downline/reseller
```http
POST /api/v1/non-aktifkan-dl
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Non-aktifkan downline/reseller
POST http://localhost/api/v1/non-aktifkan-dl
Content-Type: application/json

{"pengirim":"+6281935155404","kodereseller":"ox0004","pin":"1234"}
```
