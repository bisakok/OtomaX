# Aktifkan downline/reseller
```http
POST /api/v1/aktifkan-dl
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>kodereseller</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/aktifkan-dl
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MzhhYjQ0NDFlODFiYjlkYjc4NTE1OTk1NGI1ZWE2MzBhMjgzODJlM2UzMDBmNTIwZWNhM2Q1NjFlOTlhNTUzOGFiZWMzMWI5MjJkOGRiMjBlYWZlNDNhMmY5MTNlOWQ3MzVhMGNjMmM3NjcxMWMyMTFlMDA1OWUwMDllNWJiNzQ2NTE4MGVhODI4MWE4MTExODBhMDQyOGNlMmY4OWU2ZmJkODc3ZjNiN2ExMjk2ZGU4NzRiMjY1MDc5Y2FiY2I4ZWVjYjBmZTAwNGI4YzI3NGRhMGVmZTdhMWQyYjYzMjVhOTRiZGI4YjI0ZDVjMTJlMDkyZDYzMzNlMDM3Njk2Mzk0Njc3MDk3NzU3NWI3NjI0MTA3MjJkMWJmOGIxOGQ2MjgyY2I5YmFkNzhiNjUyMjAzNjNiNzY5NTkyZTc1YzcxOTc4NmMyNDMxYWI3MGQxMmI1OGIyNTYxNzI1YWQ1NDk2Nzk4ZmEwN2UxMjlkNTAwZmE0NzIzOGRjMWFjMjVjNWIxNTAyYWYyM2VkYThjZTY0YjQ3NGE1ZTUwYTM2N2E=.MWJjMDY3OTkxMDE3YjFhZDhhMjI2Y2FjZTRkYjQ5NTRmYWVhMDY5NDliMzU5MWE0ZWQ0ZGMyZWRiYTM3MGE3Zg==
Content-Type: application/json

{
    "kodereseller": "ox0004",
    "pin": "1234"
}
```
