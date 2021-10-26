# [Patch Otomax]()

<!-- @category Session -->

```bash
PATCH /api/otomax/v1/:_id
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`:_id` |  | Document ID

## [Example]()

### [Request]()

```bash
PATCH http://localhost/api/otomax/v1/1
Content-Type: application/json

{ "_id": "123456", "user":"name", "pass":"word" }
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```