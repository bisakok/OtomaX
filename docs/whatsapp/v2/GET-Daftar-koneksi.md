# Daftar koneksi

```http
GET /api/whatsapp/v2/
```

## Example

### Request

```http
GET http://localhost/api/whatsapp/v2/
```

### Response
```json

{
  "data": {
    "total_rows": 1,
    "offset": 0,
    "rows": [
      {
        "id": "6281938064470",
        "key": "6281938064470",
        "value": {
          "rev": "1-3d77e5dba1f3f3d3650e717a88d875a8"
        },
        "doc": {
          "pengirim": "628193",
          "clientID": "DksBrH==",
          "serverToken": "1@W+4A5xw8+oelY9LQ==",
          "clientToken": "Yjw+AzWepF+ScSQrc/n/oVGonitEg=",
          "encKey": "QrxlOfrT/naYvBiy0=",
          "macKey": "AEQBNd/0+45rLFW6a4BqZSB8c1m3GjuuyNJ38zsbb0=",
          "_id": "62819380644",
          "_rev": "1-3d77e5db"
        }
      }
    ]
  }
}
```
