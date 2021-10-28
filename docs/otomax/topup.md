# Topup

<!--
@category Common V2
-->

```bash
POST /api/v2/transaction
```
## Steps

Tambahkan label `web_server_v2` di im center untuk menggunakan request inbox

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/otomax-web-server-v2.png" alt="OtomaX IM Label" />
        <figcaption>Setting OtomaX IM Label</figcaption>
    </figure>
</p>

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
{
  "data": {
    "ref_id": 228,
    "customer_no": "087800001233",
    "buyer_sku_code": "TEST5",
    "message": "Sukses",
    "status": "Sukses",
    "rc": 20,
    "sn": "928413070557",
    "buyer_last_saldo": 987700,
    "price": 5050,
    "tele": "",
    "wa": ""
  }
}
```