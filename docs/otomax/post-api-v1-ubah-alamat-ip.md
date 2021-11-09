# Change IP Address
```http
POST /api/v1/ubah-alamat-ip
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?
<code>newip</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
Change IP Address
POST http://localhost/api/v1/ubah-alamat-ip
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "newip": "127.0.0.1",
    "pin": "1234"
}
```
