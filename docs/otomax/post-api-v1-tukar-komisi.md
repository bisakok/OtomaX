# Tukar komisi tunda dalam bentuk deposit
```http
POST /api/v1/tukar-komisi
```
keterangan
## Properties
### Body
Nama  | Nilai | Keterangan
--- | --- | ---
<code>jumlah</code> | ? | ?
<code>pin</code> | ? | ?

## Contoh

### Request
```http
POST http://localhost/api/v1/tukar-komisi
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MTE1YmJkZmI1MmYyNzIwZjBhNDc0ZDQ1ZDVkODEzNTNmMDllMTA2YjI5MDdjZjBmN2UyOTlhMDQ1OWZkN2RhNzdmMTg0NjY3NGM3NTU0NDZmMjA5ZjBlMGNiMDRlMDA3N2U1MGM2OWU0MTBlOGUxOTQ1MjM2ZGE5Zjk3MjY2ODJiOGNmZjNmZWE3ODIxNTRhMWZmZTcyNTM5NzdlNmE4ZWQwMzk0Yjc2YWYxMWJhMTE2NTFiMTdjOGJhNGE5MDIzNGY2MTViNjA0YjJiZDE5OTc5OTUyZDg3MDllNGZiZTI3Mzg0ZDZjNDQ4NjVhZDQ2ZGEwZDRlODcwOTNjN2QxNjkwMTU1YWM4YTI0ZmM4NjBlNjNjNmFiMGVkOGYxYjk3YzE0YWY0MDE2ZmZhY2RhNmY1MTc1MDExYTllMGMyMzM4YjI0NGIwODg3MzczZjc1NzZkZTFlYjZmOTljMzRlYjlhMTEzMjU3ZTEzY2M0YWE2MDUyMWVhNjU3YjIzNjJjMzExMjJlZDg0OTU5YWY1YjYxYWExMmQ3MmVjMjkyMWM=.YjcyNTA5YjRlOTRiNzA0NWE0ZGE5OWRjNmZmMjcwNGNhZWZhMzljMWRhMDE0OWVlMjEyYjUzNzVmNGIxZGZjZg==
Content-Type: application/json

{
    "jumlah": "10000",
    "pin": "1234"
}
```
