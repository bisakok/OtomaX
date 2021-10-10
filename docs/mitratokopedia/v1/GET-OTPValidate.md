# OTPValidate

Konfirmasi OTP login yang di terima di SMS

```
GET /api/mitratokopedia/v1/OTPValidate
```
## Query
Nama | Keterangan
--- | ---
`pengirim` | Sesi ID yang digunakan
`code` | Isi dengan kode otp yang diterima

## Example
### Request
```
GET http://localhost/api/mitratokopedia/v1/OTPValidate
?pengirim=session1
&code=963802
```