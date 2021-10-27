# [Connect Telegram]()

<!--
@category Common
-->

```bash
POST http://localhost/api/telegram/v1/connect
```

## [Steps]()

Session ID dan Label harus menggunakan nama bot telegram yang digunakan

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/telegram-connect.png" alt="Session ID API" />
        <figcaption>Setting Session ID API</figcaption>
    </figure>
</p>
<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/telegram-center.png" alt="OtomaX IM Label" />
        <figcaption>Setting OtomaX IM Label</figcaption>
    </figure>
</p>

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