# Tukar komisi tunda dalam bentuk deposit
```http
GET /api/v1/tukar-komisi
```
keterangan
## Properties
### Query
Nama | Tipe | Nilai | Keterangan
--- | --- | --- | ---
<code>pengirim</code> | String | null | null
<code>jumlah</code> | String | null | null
<code>pin</code> | String | null | null

## Contoh

### Request
```http
Tukar komisi tunda dalam bentuk deposit
GET http://localhost/api/v1/tukar-komisi?pengirim=%2B6281935155404&jumlah=10000&pin=1234
```
