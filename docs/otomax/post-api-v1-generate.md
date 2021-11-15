# Create personal access token
```http
POST /api/v1/generate
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>remoteAddress</code> | ? | ?
<code>audience</code> | ? | ?
<code>expires_in</code> | ? | ?

## Contoh

### Request
```http
POST http://nxxxxx.myddns.me/api/v1/generate
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MTE1YmJkZmI1MmYyNzIwZjBhNDc0ZDQ1ZDVkODEzNTM1NDM5MDcxMzJiNzVkMjIwOTU4MjZmZTAxMjFiMGU3ZWZkNTNiMzM3ZGE5MzRjYzJhNTUwYmU1MmIyZGRhY2M3MjAxNmJmMDQxMmVjZjZiNTQxYWExMDBjOTc5NzFkYzdkNzExNGJhOGU0YmFjNzc5NmE5ZjhhMzcyNWI4MmZmOGE4MmNlMDIxYmRlN2E2MTdiZTU5NWE0MzI2ODhlYWM4MzM5MzdmNWJiZjAzNGIxYzBlYzNiMjRhNzc5NGVlNzgxYWI3NTNlNjVlNjg3NGM4YzA1ODNmZTExOTczNjY1MmQ1NmUzYzk1ZjFlNmI1OTc3M2Q4NTc0Nzg0ZGFiY2I2YWVkNjgwMzU2NDY5MTVkZDk0NjdmNmJlMGRjYzkzZjlmMGEwY2VhYTljZDFmMzEzMjA5OTgwOGY1ZDVkYzE0MTgwZjM4OGNmYjkyZjIxMDM2YTIwYjM4MTQ1NjZkYzA2ZDk3MjE0ODU0NDFlOTRjNGNlODEwZWY4N2UzODZiN2I=.ZGU4OWYxNDM3OTgzYjY0MjYxYTZjODc2ZGE1NWFhZDU1OTA0NGY5NzAwMDlmZTNiYjkxNTc1ZWExZGNhZWRkMQ==
Content-Type: application/json

{
    "remoteAddress":".*",
    "audience": [
        "otomaxOperator",
        "otomaxProduk"
    ],
    "expires_in": 31104000000
}
```