# Change OID for OtomaX HTH
```http
POST /api/v1/ubah-oid
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>oid</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/ubah-oid
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "oid": "321654987asdfwerezveryt987f65gh1s54g89sr4gv",
    "pin": "1234"
}
```
