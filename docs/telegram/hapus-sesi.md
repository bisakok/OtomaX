# Hapus Sesi

<!--
@category Session
-->

```bash
DELETE /api/telegram/v1/:_id
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`:_id` |  | Document ID

## Example

### Request

```bash
DELETE http://localhost/api/telegram/v1/1
```

### Response

```json
{ "code":200, "message": "OK" }
```