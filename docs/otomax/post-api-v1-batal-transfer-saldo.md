# Cancel balance transfer
```http
POST /api/v1/batal-transfer-saldo
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>jumlah</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Cancel balance transfer
POST http://localhost/api/v1/batal-transfer-saldo
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "jumlah": "10000",
    "pin": "1234"
}
```
