# OTPRequest

Request otp login

```
GET http://localhost/api/mitratokopedia/v1/OTPRequest
```

## Query

| Nama       | Keterangan                                         |
| ---------- | -------------------------------------------------- |
| `pengirim` | Sesi id yang digunakan                             |
| `msisdn`   | Isi dengan nomor yang terdaftar di mitra tokopedia |

## Example

### Request

```
GET http://localhost/api/mitratokopedia/v1/OTPRequest
?pengirim=session1
&msisdn=6281938064470
```
