# [Disconnect Jabber]()

```bash
POST http://localhost/api/jabber/v1/disconnect
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`_id` |  | Session ID

## [Example]()

### [Request]()

```bash
POST http://localhost/api/jabber/v1/disconnect
Content-Type: application/json

{ "_id": "ndiing" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```