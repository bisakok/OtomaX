# [Connect Whatsapp]()

<!--
@category Common
-->

```bash
POST http://localhost/api/whatsapp/v1/connect
```

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/api-wa-id.png" alt="Session ID API" />
        <figcaption>Setting Session ID API</figcaption>
    </figure>
</p>
<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/otomax-wa-label.png" alt="OtomaX WA Label" />
        <figcaption>Setting OtomaX WA Label</figcaption>
    </figure>
</p>

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