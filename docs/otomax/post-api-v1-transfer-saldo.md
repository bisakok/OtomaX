# Transfer saldo/deposit ke downline/reseller
```http
POST /api/v1/transfer-saldo
```
keterangan
## Properties
### Body
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
POST http://localhost/api/v1/transfer-saldo
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "counter": "1",
    "kodereseller": "ox0004",
    "jumlah": "10000",
    "pin": "1234"
}
```
