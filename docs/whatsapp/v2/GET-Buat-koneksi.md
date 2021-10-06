# Buat koneksi

```http
GET /api/whatsapp/v2/connect
```

## Query

| Nama       | Keterangan                      |
| ---------- | ------------------------------- |
| `pengirim` | pengirim/id sesi yang digunakan |

## Example

### Request

```http
GET http://localhost/api/whatsapp/v2/connect?pengirim=6283845311393
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "pengirim": "6281938064470",
    "_id": "6281938064470"
  }
}
```
