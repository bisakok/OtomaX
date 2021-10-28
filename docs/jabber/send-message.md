# [Send Message]()

<!--
@category Endpoint
-->

```bash
POST http://localhost/api/jabber/v1/send-message
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`_id` |  | Sesi ID

## [Example]()

### [Request]()

```bash
POST http://localhost/api/jabber/v1/send-message
Content-Type: application/json

{ "_id": "ndiing", "penerima": "ndiing2@jabb.im", "pesan": "pesan" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```