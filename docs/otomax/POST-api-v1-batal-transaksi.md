# Batalkan transaksi yang belum diproses
```http
POST /api/v1/batal-transaksi
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>trxid</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/batal-transaksi
Content-Type: application/json

{"pengirim":"+6281935155404","trxid":"123456","pin":"1234"}


```
