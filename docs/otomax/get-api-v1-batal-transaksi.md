# Batalkan transaksi yang belum diproses
```http
GET /api/v1/batal-transaksi
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>trxid</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Batalkan transaksi yang belum diproses
GET http://localhost/api/v1/batal-transaksi?pengirim=%2B6281935155404&trxid=123456&pin=1234
```
