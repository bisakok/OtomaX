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
    "_id": "0010001e-0090-4007-802a-000c00aa0046",
    "token": "126579"
}
```
