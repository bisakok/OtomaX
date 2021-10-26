# [Patch Example]()

```http
PATCH /api/example/v1/:_id
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`:_id` |  | Document ID

## [Example]()

### [Request]()

```http
PATCH http://localhost/api/example/v1/1
Content-Type: application/json

{ "_id": "123456", "user":"name", "pass":"word" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```