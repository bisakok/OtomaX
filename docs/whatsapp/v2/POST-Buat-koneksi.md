# Buat koneksi

```http
POST /api/whatsapp/v2/connect
```

## Body

| Nama       | Keterangan                      |
| ---------- | ------------------------------- |
| `pengirim` | pengirim/id sesi yang digunakan |

## Example

### Request

```http
POST http://localhost/api/whatsapp/v2/connect
Content-Type: application/json

{
    "pengirim": "6283845311393"
}
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
