# Kirim pesan

```http
GET /api/whatsapp/v2/outbox
```

### Query

| Nama       | Jenis  | Keterangan                                                                       |
| ---------- | ------ | -------------------------------------------------------------------------------- |
| `penerima` | String | Nomor penerima whatsapp                                                          |
| `pesan`    | String | Pesan yang dikirim                                                               |
| `pengirim` | String | pengirim/id sesi yang digunakan, kosongkan jika ingin dikirim sesuai urutan sesi |

## Example

### Request

```http
GET http://localhost/api/whatsapp/v2/outbox?penerima=6281935155404&pesan=Lorem+ipsum+dolor+sit%2C+amet+consectetur+adipisicing+elit.+Est%2C+ipsa%3F&pengirim=6283845311393
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "key": {
      "remoteJid": "62819351@s.whatsapp.net",
      "fromMe": true,
      "id": "3EB0FA58"
    },
    "message": {
      "extendedTextMessage": {
        "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ipsa?"
      }
    },
    "messageTimestamp": "1633",
    "status": "SERVER_ACK"
  }
}
```

### Response 

```json
{
  "code": 400,
  "message": "62819351554041 tidak ada di whatsapp."
}
```