# Check downline's markup
```http
POST /api/v1/cek-markup
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Check downline's markup
POST http://localhost/api/v1/cek-markup
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "pin": "1234"
}
```
