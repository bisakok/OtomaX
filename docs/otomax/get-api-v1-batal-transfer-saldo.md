# Cancel balance transfer
```http
GET /api/v1/batal-transfer-saldo
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>jumlah</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
GET http://localhost/api/v1/batal-transfer-saldo?pengirim=%2B6281935155404&kodereseller=ox0004&jumlah=10000&pin=1234
```
