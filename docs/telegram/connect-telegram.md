# [Connect Telegram]()

<!--
@category Common
-->

```bash
POST http://localhost/api/telegram/v1/connect
```

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`_id` |  | Session ID
`token` |  | token Telegram

## [Example]()

### [Request]()

```bash
POST http://localhost/api/telegram/v1/connect
Content-Type: application/json

{"_id":"api_otomax_bot","token":"2049378584:AAH0mEAeNWYSNSQe7flTTwYAwej5im1nJb4"}
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```