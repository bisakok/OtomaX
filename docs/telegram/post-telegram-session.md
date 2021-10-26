# [Post Telegram Session]()

<!--
@category Session
-->

```bash
POST /api/telegram/v1/
```

## [Example]()

### [Request]()

```bash
POST http://localhost/api/telegram/v1/
Content-Type: application/json

{ "_id": "123456", "user":"name", "pass":"word" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```