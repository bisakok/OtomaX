# [Send Inbox USSD]()

<!--
@category Request
-->

```bash
GET /api/otomax/v1/ussd
```

## [Usage]()

Request/permintaan dengan metode USSD secara default terpasang pada modul center dengan default request `format`

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/whatsapp-ussd.jpeg" height="360" alt="Request USSD pada whatsapp" />
        <figcaption>Request USSD pada whatsapp</figcaption>
    </figure>
</p>
<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/telegram-ussd.jpeg" height="360" alt="Request USSD pada telegram" />
        <figcaption>Request USSD pada telegram</figcaption>
    </figure>
</p>
<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/jabber-ussd.jpeg" height="360" alt="Request USSD pada jabber" />
        <figcaption>Request USSD pada jabber</figcaption>
    </figure>
</p>

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