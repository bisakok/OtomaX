# Cek Deposit

<!--
@category Common2
-->

```bash
POST /api/v2/cek-saldo
```

## Example

### Request

```bash
POST http://localhost/api/v2/cek-saldo
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "cmd": "deposit",
    "username": "username",
    "sign": "740b00a1b8784e028cc8078edf66d12b"
}
```

### Response

```json
{
  "data": {
    "deposit": 987700
  }
}
```