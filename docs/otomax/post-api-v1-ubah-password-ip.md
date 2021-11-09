# Change IP Password
```http
POST /api/v1/ubah-password-ip
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>oldpassword</code> | String | null | null
<code>newpassword</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Change IP Password
POST http://localhost/api/v1/ubah-password-ip
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "oldpassword": "1234",
    "newpassword": "1234",
    "pin": "1234"
}
```
