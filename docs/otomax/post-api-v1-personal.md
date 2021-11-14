# Personal
```http
POST /api/v1/personal
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
POST http://nxxxxx.myddns.me/api/v1/personal
Content-Type: application/json
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.OTlmY2MwMmVlYWQ0YWM3MjEyNTdhOGY1NWQ5OGNjN2NmN2M2NDQ3OWMwZWRkYTBiOTgxMTRhN2Q3MGQ2OWIwYTZiYzVlZjZiZDBhNzFhYjBkOWQ4YjQxMDU5ZWQxY2I0ODYxNmQ3ZmQ1ZGI0NzAyMGYwMjhhNTIwZmJiNzBkMjAxMTE5NWRlNTViMzMzZjVhZjYxMjRiZDAxZDkyN2Y1NTU0NzVkN2NkM2IxZGRjOTU3YzJjMGRlNzk4YjAzZTdmYjA4YjMwYTg4ZDdhNWM5MzAxNjU3MWVhOTQxODg0MGZhOTY5NmNkM2VlM2YyNWFlNmIzMTE4ZTJjZmUyMWVhN2FiODYyMTUxNmJlM2QyNzlkMmY0YjBlOWJkMjEzOGRkNTk0N2QyYzY2OGNkMTM0NzE4MDYyMjkyZGY2ODNiMjUxNGRiMWE2MzhmZDhjOWI0ZjEwZWJjOWQyY2IzYTZkZDc2NzU1NGZhMWIzYzY3MmQyYzZhNjQ2MTRkMzAwYjAwNjg3ODNjYWQwNGYzZmE3YmFjZDM0YTQ0MjY1ZTMwMWQ=.ODA1NzI0YWZiMzk1YmU2YWJjMWFhM2Y2ZTE3MmM0MjlmNDI5YTExN2RjM2M1YWYyMTVmZWU0YTcxMGY1ZTU2OA==

{
    "remoteAddress":".*",
    "audience": [
        "otomaxOperator",
        "otomaxProduk"
    ],
    "expires_in": 31104000000
}
```
