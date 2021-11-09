# Check current OID for OtomaX HTH
```http
POST /api/v1/cek-oid
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>pin</code> | ? | ?

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
