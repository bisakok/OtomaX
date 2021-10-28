# Topup

<!--
@category Common V2
-->

```bash
POST /api/v2/transaction
```

## Example

### Request

```bash
POST http://localhost/api/v2/transaction
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "username": "username",
    "buyer_sku_code": "xld25",
    "customer_no": "087800001233",
    "ref_id": "some1d",
    "sign": "740b00a1b8784e028cc8078edf66d12b"
}
```

### Response

```json
```