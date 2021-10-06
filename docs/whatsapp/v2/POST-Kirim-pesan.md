# Kirim pesan
### Request
POST http://localhost/api/whatsapp/v2/outbox
Content-Type: application/json

{
    "penerima": "6281935155404",
    "pesan": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ipsa?",
    "pengirim": "6283845311393"
}