# Batalkan transaksi yang belum diproses
```http
GET /api/v1/batal-transaksi
```
keterangan
## Properties
### Query
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>trxid</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
GET https://nxxxxx.myddns.me/api/v1/batal-transaksi?pengirim=%2B6281935155404&trxid=123456&pin=1234
```
