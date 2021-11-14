# Connect
```http
POST /api/whatsapp/v1/connect
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>label</code> | ? | ?
<code>beta</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/whatsapp/v1/connect
Content-Type: application/json

{
    "label": "62819380xxxxx",
    "beta": true
}
```

### Request
```http
POST http://localhost/api/whatsapp/v1/connect
Content-Type: application/json

{
    "label": "62838453xxxxx"
}
```

### Request
```http
POST http://localhost/api/whatsapp/v1/connect
Content-Type: application/json

{
    "label": "62819380xxxxx"
}
```
