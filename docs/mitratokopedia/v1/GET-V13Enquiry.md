# V13Enquiry

Cek tagihan sesuai produk

```
GET /api/mitratokopedia/v1/V13Enquiry
```

## Query

| Nama            | Keterangan             |
| --------------- | ---------------------- |
| `pengirim`      | ID sesi yang digunakan |
| `client_number` | Isi dengan tujuan      |
| `product_id`    | Isi dengan kode produk |

## Example

### Request

```
GET http://localhost/api/mitratokopedia/v1/V13Enquiry
?pengirim=session1
&client_number=515420130903
&product_id=291
```
