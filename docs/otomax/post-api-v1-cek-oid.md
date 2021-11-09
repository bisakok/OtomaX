# Check current OID for OtomaX HTH
```http
POST /api/v1/cek-oid
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Check current OID for OtomaX HTH
POST http://localhost/api/v1/cek-oid
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "pin": "1234"
}
```
