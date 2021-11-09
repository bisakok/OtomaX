# Change downline's markup
```http
POST /api/v1/ubah-markup
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>kodereseller</code> | ? | ?
<code>markup</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Change downline's markup
POST http://localhost/api/v1/ubah-markup
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "markup": "500",
    "pin": "1234"
}
```
