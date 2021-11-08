# Change IP Address
```http
POST /api/v1/ubah-alamat-ip
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
### Body
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>newip</code> | String | null | null
<code>pin</code> | String | null | null
## Contoh
### Request
```http
Change IP Address
POST http://localhost/api/v1/ubah-alamat-ip
Content-Type: application/json

{"pengirim":"+6281935155404","newip":"127.0.0.1","pin":"1234"}
```
