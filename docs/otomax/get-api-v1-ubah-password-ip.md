# Change IP Password
```http
GET /api/v1/ubah-password-ip
```
keterangan
## Properties
### Query
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
GET http://localhost/api/v1/ubah-password-ip?pengirim=%2B6281935155404&oldpassword=1234&newpassword=1234&pin=1234
```
