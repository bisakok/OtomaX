# Daftar harga

<!--
@category Common V2
-->

```bash
POST /api/v2/price-list
```

## Example

### Request

```bash
POST http://localhost/api/v2/price-list
Content-Type: application/json

{
    "pengirim": "+6281935155404",
    "code": "axd",
    "cmd" : "prepaid",
    "username": "username",
    "sign": "740b00a1b8784e028cc8078edf66d12b"
}
```

### Response

```json
{
  "data": [
    {
      "product_name": "TEST 1000",
      "category": "",
      "brand": "TEST",
      "type": "",
      "seller_name": "",
      "price": 1400,
      "buyer_sku_code": "TEST1",
      "buyer_product_status": true,
      "seller_product_status": true,
      "unlimited_stock": true,
      "stock": 0,
      "multi": true,
      "start_cut_off": "23:45",
      "end_cut_off": "00:15",
      "desc": ""
    },
    {
      "product_name": "TEST 10000",
      "category": "",
      "brand": "TEST",
      "type": "",
      "seller_name": "",
      "price": 10400,
      "buyer_sku_code": "TEST10",
      "buyer_product_status": true,
      "seller_product_status": true,
      "unlimited_stock": true,
      "stock": 0,
      "multi": true,
      "start_cut_off": "23:45",
      "end_cut_off": "00:15",
      "desc": ""
    },
    {
      "product_name": "TEST 5000",
      "category": "",
      "brand": "TEST",
      "type": "",
      "seller_name": "",
      "price": 5050,
      "buyer_sku_code": "TEST5",
      "buyer_product_status": true,
      "seller_product_status": true,
      "unlimited_stock": true,
      "stock": 0,
      "multi": true,
      "start_cut_off": "23:45",
      "end_cut_off": "00:15",
      "desc": ""
    }
  ]
}
```