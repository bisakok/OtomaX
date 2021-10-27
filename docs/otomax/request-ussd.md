# [Request USSD]()

<!--
@category Common
-->

```bash
GET /api/otomax/v1/ussd
```

## [Example]()

### [Request]()

```bash
POST http://localhost/api/otomax/v1/ussd
Content-Type: application/json

{"pengirim":"+6281935155404","pesan":"1234"}
```

### [Response]()

```json
{"code":200,"message":"OK","data":[]}
```