# OtomaX Web Server

## Gambaran

Software Pulsa OtomaX

## Instalasi

download [nodejs](https://nodejs.org/en/download/)

```bash
git clone https://github.com/ndiing/OtomaX.git
cd OtomaX
npm i
npm run start
```

## Tutorial

Koleksi `HTTP REST` dengan serangkaian permintaan yang memperkenalkan konsep dasar API.

- [<code>HTTP</code> jabber.rest](./test/jabber.rest)
- [<code>HTTP</code> otomax-request-json.rest](./test/otomax-request-json.rest)
- [<code>HTTP</code> otomax-request-urlencoded.rest](./test/otomax-request-urlencoded.rest)
- [<code>HTTP</code> otomax-request-xml.rest](./test/otomax-request-xml.rest)
- [<code>HTTP</code> otomax-request.rest](./test/otomax-request.rest)
- [<code>HTTP</code> otomax.rest](./test/otomax.rest)
- [<code>HTTP</code> telegram.rest](./test/telegram.rest)
- [<code>HTTP</code> whatsapp.rest](./test/whatsapp.rest)

## Dukungan

Laporan bug, Permintaan fitur, atau Jelaskan tujuan masalah ini [di sini](https://github.com/ndiing/OtomaX/issues/new/choose).

## Versi API

Bagian pertama dari jalur URI menentukan versi API yang ingin Anda akses dalam format `v{version_number}`.

Misalnya, versi 1 API (terbaru) dapat diakses melalui:

```http
https://localhost/api/v1/
```

## Sumber daya

Untuk deskripsi sumber daya yang tersedia, [lihat Ikhtisar Sumber Daya]().

### [whatsapp]()

-   **[<code>GET</code> /api/whatsapp/v2](./docs/api/whatsapp/v2/get.md)**
-   **[<code>DELETE</code> /api/whatsapp/v2/:id]()**
-   **[<code>POST</code> /api/whatsapp/v2/connect]()**
-   **[<code>GET</code> /api/whatsapp/v2/connect]()**
-   **[<code>POST</code> /api/whatsapp/v2/outbox]()**
-   **[<code>GET</code> /api/whatsapp/v2/outbox]()**

### [telegram]()

-   **[<code>GET</code> /api/telegram/v2]()**
-   **[<code>DELETE</code> /api/telegram/v2/:id]()**
-   **[<code>POST</code> /api/telegram/v2/connect]()**
-   **[<code>GET</code> /api/telegram/v2/connect]()**
-   **[<code>POST</code> /api/telegram/v2/outbox]()**
-   **[<code>GET</code> /api/telegram/v2/outbox]()**

### [jabber]()

-   **[<code>GET</code> /api/jabber/v2]()**
-   **[<code>DELETE</code> /api/jabber/v2/:id]()**
-   **[<code>POST</code> /api/jabber/v2/connect]()**
-   **[<code>GET</code> /api/jabber/v2/connect]()**
-   **[<code>POST</code> /api/jabber/v2/outbox]()**
-   **[<code>GET</code> /api/jabber/v2/outbox]()**

### [otomax a]()

-   **[<code>POST</code> /api/v2/sign]()**
-   **[<code>POST</code> /api/v2/login]()**
-   **[<code>POST</code> /api/v2/refresh]()**
-   **[<code>POST</code> /api/v2/custom]()**
-   **[<code>DELETE</code> /api/v2/revoke/:kode]()**
-   **[<code>GET</code> /api/v2/session]()**

### [otomax b]()

-   **[<code>GET</code> /api/v2/reseller]()**
-   **[<code>GET</code> /api/v2/pengirim]()**
-   **[<code>GET</code> /api/v2/downline]()**
-   **[<code>GET</code> /api/v2/level]()**
-   **[<code>GET</code> /api/v2/operator]()**
-   **[<code>GET</code> /api/v2/produk]()**
-   **[<code>GET</code> /api/v2/mutasi]()**
-   **[<code>GET</code> /api/v2/format]()**

### [otomax c]()

-   **[<code>GET</code> /api/v2/test]()**
-   **[<code>GET</code> /api/v2/events]()**
-   **[<code>GET</code> /api/v2/outbox]()**
-   **[<code>POST</code> /api/v2/outbox/callback]()**

### [otomax d]()

-   **[<code>POST</code> /api/v2/:path]()**
-   **[<code>GET</code> /api/v2/:path]()**
