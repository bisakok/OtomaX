# Hapus Sesi

<!--
@category Session
-->

```bash
DELETE /api/jabber/v1/:_id
```

## Options

### Params

Name | Default | Description
--- | --- | ---
`:_id` |  | Document ID

## Example

### Request

```bash
DELETE http://localhost/api/jabber/v1/1
```

### Response

```json
{ "code":200, "message": "OK" }
```