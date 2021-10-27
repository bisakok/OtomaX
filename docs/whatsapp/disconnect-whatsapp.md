# [Disconnect Whatsapp]()

<!--
@category Common
-->

```bash
POST http://localhost/api/whatsapp/v1/disconnect
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`_id` |  | Session ID

## [Example]()

### [Request]()

```bash
POST http://localhost/api/whatsapp/v1/disconnect
Content-Type: application/json

{ "_id": "6283845311393" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```