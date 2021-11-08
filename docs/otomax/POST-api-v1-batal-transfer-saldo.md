# Cancel balance transfer
```http
POST /api/v1/batal-transfer-saldo
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>jumlah</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
POST http://localhost/api/v1/batal-transfer-saldo
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "jumlah": "10000",
    "pin": "1234"
}


```
