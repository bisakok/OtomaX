# Transfer saldo/deposit ke downline/reseller
```http
GET /api/v1/transfer-saldo
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>counter</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>jumlah</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Transfer saldo/deposit ke downline/reseller
GET http://localhost/api/v1/transfer-saldo?pengirim=%2B6281935155404&counter=1&kodereseller=ox0004&jumlah=10000&pin=1234
```
