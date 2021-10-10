# OTPRequestQuery

Request otp untuk transaksi pertama kali

```
GET /api/mitratokopedia/v1/OTPRequestQuery
```
## Query

Nama | Keterangan
--- | ---
`pengirim` | Sesi ID yang digunakan

## Example
### Request

```
GET http://localhost/api/mitratokopedia/v1/OTPRequestQuery
?pengirim=session1
```