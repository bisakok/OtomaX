# Hapus koneksi

```http
DELETE /api/whatsapp/v2/:id
```

## Parameter

Nama | Keterangan
--- | ---
`:id` | pengirim/id sesi yang digunakan

## Example

### Request

```http
DELETE http://localhost/api/whatsapp/v2/6281938064470
```

### Response 

```json
{
    "code":200,
    "message":"OK"
}
```