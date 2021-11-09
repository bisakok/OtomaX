# Change downline's markup
```http
POST /api/v1/ubah-markup
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>markup</code> | String | null | null
<code>pin</code> | String | null | null

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
