# [Connect Jabber]()

<!--
@category Common
-->

```bash
POST http://localhost/api/jabber/v1/connect
```

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