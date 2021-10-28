# Send Message

<!--
@category Common
-->

```bash
POST http://localhost/api/whatsapp/v1/send-message
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`_id` |  | Sesi ID

## Example

### Request

```bash
POST http://localhost/api/whatsapp/v1/send-message
Content-Type: application/json

{ "_id": "6283845311393", "penerima": "6281935155404", "pesan": "pesan" }
```

### Response

```json
{ "code":200, "message": "OK" }
```