# Verifikasi login dengan OTP
```http
POST /api/v1/verify
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>_id</code> | ? | ?
<code>token</code> | ? | ?

## Contoh

### Request
```http
POST http://nxxxxx.myddns.me/api/v1/verify
Content-Type: application/json

{
    "_id": "00ca00c1-000b-4008-800f-00d20071003d",
    "token": "126560"
}
```
