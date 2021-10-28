# [Connect Jabber]()

<!--
@category Common
-->

```bash
POST http://localhost/api/jabber/v1/connect
```

## [Steps]()

Session ID dan Label harus menggunakan jid jabber yang digunakan tanpa @domain.com

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/jabber-connect.png" alt="Session ID API" />
        <figcaption>Setting Session ID API</figcaption>
    </figure>
</p>
<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/jabber-center.png" alt="OtomaX IM Label" />
        <figcaption>Setting OtomaX IM Label</figcaption>
    </figure>
</p>

## [Options]()

### [Params]()

Name | Default | Description
--- | --- | ---
`_id` |  | Session ID
`jid` |  | jid Jabber
`password` |  | password Jabber
`host` |  | host Jabber
`port` |  | port Jabber

## [Example]()

### [Request]()

```bash
POST http://localhost/api/jabber/v1/connect
Content-Type: application/json

{"_id":"ndiing","jid":"ndiing@jabb.im","password":"S2N#Wcm8rnKbpsg","host":"jabb.im","port":5222}
```

### [Response]()

```json
{ "code":200, "message": "OK" }
```