# Batalkan transaksi yang belum diproses
```http
POST /api/v1/batal-transaksi
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>trxid</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Batalkan transaksi yang belum diproses
POST http://localhost/api/v1/batal-transaksi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "trxid": "123456",
    "pin": "1234"
}
```
