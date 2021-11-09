# View gift list
```http
POST /api/v1/lihat-hadiah-poin
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>pengirim</code> | ? | ?

## Contoh

### Request
```http
View gift list
POST http://localhost/api/v1/lihat-hadiah-poin
Content-Type: application/json

{
    "pengirim": "+6281935155404"
}
```
