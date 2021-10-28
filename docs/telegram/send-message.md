# Send Message

<!--
@category Endpoint
-->

```bash
POST http://localhost/api/telegram/v1/send-message
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`_id` |  | Sesi ID

## Example

### Request

```bash
POST http://localhost/api/telegram/v1/send-message
Content-Type: application/json

{ "_id": "api_otomax_bot", "penerima": 1344008938, "pesan": "pesan" }
```

### Response

```json
{ "code":200, "message": "OK" }
```