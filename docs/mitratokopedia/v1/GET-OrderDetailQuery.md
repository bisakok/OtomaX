# OrderDetailQuery

Lihat status transaksi dengan kode permintaan transaksi

```
GET /api/mitratokopedia/v1/OrderDetailQuery
```

## Query

Nama | Keterangan
--- | ---
`pengirim` | ID Sesi yang digunakan
`paymentId` | 

## Example

### Request

```
GET http://localhost/api/mitratokopedia/v1/OrderDetailQuery
?pengirim=session1
&paymentId=1882090231
```