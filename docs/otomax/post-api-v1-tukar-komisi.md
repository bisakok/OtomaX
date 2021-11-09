# Tukar komisi tunda dalam bentuk deposit
```http
POST /api/v1/tukar-komisi
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
POST http://localhost/api/v1/tukar-komisi
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "jumlah": "10000",
    "pin": "1234"
}
```
