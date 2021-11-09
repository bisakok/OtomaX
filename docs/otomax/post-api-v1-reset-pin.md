# Reset pin member
```http
POST /api/v1/reset-pin
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>kodereseller</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Reset pin member
POST http://localhost/api/v1/reset-pin
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "kodereseller": "ox0004",
    "pin": "1234"
}
```
