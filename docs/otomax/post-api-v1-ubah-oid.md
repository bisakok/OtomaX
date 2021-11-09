# Change OID for OtomaX HTH
```http
POST /api/v1/ubah-oid
```
keterangan
## Properties
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>oid</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Change OID for OtomaX HTH
POST http://localhost/api/v1/ubah-oid
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "oid": "321654987asdfwerezveryt987f65gh1s54g89sr4gv",
    "pin": "1234"
}
```
