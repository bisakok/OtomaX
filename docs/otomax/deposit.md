# Deposit

<!--
@category Common2
-->

```bash
POST /api/v2/deposit
```

## Example

### Request

```bash
POST http://localhost/api/v2/deposit
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "username": "your-username",
    "amount": 10000000,
    "Bank": "BCA",
    "owner_name": "John Doe",
    "sign": "740b00a1b8784e028cc8078edf66d12b"
}
```

### Response

```json
{
  "data": {
    "rc": "00",
    "amount": 10000080,
    "notes": ""
  }
}
```