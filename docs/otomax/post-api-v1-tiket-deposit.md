# Tiket Deposit
```http
POST /api/v1/tiket-deposit
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>jumlah</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Tiket Deposit
POST http://localhost/api/v1/tiket-deposit
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "jumlah": "10000",
    "pin": "1234"
}
```
