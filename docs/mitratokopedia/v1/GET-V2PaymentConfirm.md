
# V2PaymentConfirm

```
GET /api/mitratokopedia/v1/V2PaymentConfirm
```

## Query

Nama | Keternagan
--- | ---
`pengirim` | ID Sesi yang digunakan
`gateway_code` | 
`code` | Diisi jika transaksi membutuhkan kode OTP pertama kali
`category_id` | 
`voucher_code` | Diisi jika transaksi menggunakan kode promo
`client_number` | 
`operator_id` | 
`transactionAmount` | 
`product_id` | 
`is_pulsa_trx` | 

## Example

### Request

```
GET http://localhost/api/mitratokopedia/v1/V2PaymentConfirm
?pengirim=session1
&gateway_code=MITRAVA
&code=
&category_id=1
&voucher_code=KECILUNTUNG
&client_number=087758437457
&operator_id=5
&transactionAmount=5750
&product_id=1135
&is_pulsa_trx=true
```