# Connect

<!--
@category Common
-->

```bash
POST http://localhost/api/whatsapp/v1/connect
```

## Steps

Sesi ID dan Label harus menggunakan nomor wa yang digunakan

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/wa-connect.png" alt="Sesi ID API" />
        <figcaption>Setting Sesi ID API</figcaption>
    </figure>
</p>
<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/wa-center.png" alt="OtomaX WA Label" />
        <figcaption>Setting OtomaX WA Label</figcaption>
    </figure>
</p>

## Options

### Params

Name | Default | Description
--- | --- | ---
`_id` |  | Sesi ID
`jid` |  | jid Whatsapp
`password` |  | password Whatsapp
`host` |  | host Whatsapp
`port` |  | port Whatsapp

## Example

### Request

```bash
POST http://localhost/api/whatsapp/v1/connect
Content-Type: application/json

{ "_id": "+6283845311393" }
```

### Response

```json
{ "code":200, "message": "OK" }
```