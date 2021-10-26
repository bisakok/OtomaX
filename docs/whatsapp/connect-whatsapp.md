# [Connect Whatsapp]()

<!--
@category Common
-->

```bash
POST http://localhost/api/whatsapp/v1/connect
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`_id` |  | Session ID
`jid` |  | jid Whatsapp
`password` |  | password Whatsapp
`host` |  | host Whatsapp
`port` |  | port Whatsapp

## [Example]()

### [Request]()

```bash
POST http://localhost/api/whatsapp/v1/connect
Content-Type: application/json

{ "_id": "+6283845311393" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```