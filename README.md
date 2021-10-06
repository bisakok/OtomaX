# OtomaX Web Server

## Overview

Software Pulsa OtomaX

## Tutorial

download [nodejs](https://nodejs.org/en/download/)

```bash
git clone https://github.com/ndiing/OtomaX.git
cd OtomaX
npm i
npm run start
```

## Support

Bug report, Feature request or Describe this issue template's purpose [here](https://github.com/ndiing/OtomaX/issues/new/choose).

## API Versioning

The first part of the URI path specifies the API version you wish to access in the format v{version_number}.
For example, version 1 of the API (most current) is accessible via:

```bash
https://localhost/api/v1/
```

## Resources

For a description of the available resources see the [Resource Overview]().

### [whatsapp]()

-   **[<code>GET</code> /api/whatsapp/v2]()**
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
