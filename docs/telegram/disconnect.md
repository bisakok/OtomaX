# Disconnect

<!--
@category Common
-->

```bash
POST http://localhost/api/telegram/v1/disconnect
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`_id` |  | Sesi ID

## Example

### Request

```bash
POST http://localhost/api/telegram/v1/disconnect
Content-Type: application/json

{ "_id": "api_otomax_bot" }
```

### Response

```json
{ "code":200, "message": "OK" }
```