# Cancel balance transfer
```http
GET /api/v1/batal-transfer-saldo
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>jumlah</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
GET http://localhost/api/v1/batal-transfer-saldo?pengirim=%2B6281935155404&kodereseller=ox0004&jumlah=10000&pin=1234


```
