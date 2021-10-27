# [OtomaX Web Server](#)

OtomaX - Orisinil Topup Machine Web Server.

## [Installation]()

Pastikan komputer sudah terpasang **[nodejs](https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi)**.
dengan minimal database **[SQL Server 2016 (13.x)](https://go.microsoft.com/fwlink/?linkid=866662)**.

```bash
git clone https://github.com/ndiing/OtomaX.git
cd OtomaX
npm install
npm run start
```


## [Example](#)
####
- **[<code>REST</code> /api/digiflazz/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/digiflazz/request.rest)**
####
- **[<code>REST</code> /api/jabber/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/jabber/request.rest)**
####
- **[<code>REST</code> /api/otomax/request-method-get.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request-method-get.rest)**
- **[<code>REST</code> /api/otomax/request-method-post.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request-method-post.rest)**
- **[<code>REST</code> /api/otomax/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request.rest)**
####
- **[<code>REST</code> /api/telegram/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/telegram/request.rest)**
####
- **[<code>REST</code> /api/whatsapp/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/whatsapp/request.rest)**

## [API](#)

### [digiflazz](#)
####
- **[<code>POST</code> Post Digiflazz Session](./docs/digiflazz/post-digiflazz-session.md)**
- **[<code>GET</code> Get Digiflazz Session](./docs/digiflazz/get-digiflazz-session.md)**
- **[<code>PATCH</code> Patch Digiflazz Session](./docs/digiflazz/patch-digiflazz-session.md)**
- **[<code>DELETE</code> Delete Digiflazz Session](./docs/digiflazz/delete-digiflazz-session.md)**
####
- **[<code>undefined</code> Buyer cek saldo](./docs/digiflazz/buyer-cek-saldo.md)**
- **[<code>undefined</code> Buyer price list](./docs/digiflazz/buyer-price-list.md)**
- **[<code>undefined</code> Buyer deposit](./docs/digiflazz/buyer-deposit.md)**
- **[<code>undefined</code> Buyer transaction](./docs/digiflazz/buyer-transaction.md)**
### [jabber](#)
####
- **[<code>POST</code> Post Jabber Session](./docs/jabber/post-jabber-session.md)**
- **[<code>GET</code> Get Jabber Session](./docs/jabber/get-jabber-session.md)**
- **[<code>PATCH</code> Patch Jabber Session](./docs/jabber/patch-jabber-session.md)**
- **[<code>DELETE</code> Delete Jabber Session](./docs/jabber/delete-jabber-session.md)**
####
- **[<code>POST</code> Connect Jabber](./docs/jabber/connect-jabber.md)**
- **[<code>POST</code> Disconnect Jabber](./docs/jabber/disconnect-jabber.md)**
- **[<code>POST</code> Send Message Jabber](./docs/jabber/send-message-jabber.md)**
### [otomax](#)
####
- **[<code>GET</code> Debug Report](./docs/otomax/debug-report.md)**
- **[<code>GET</code> Debug Web Sms Sender](./docs/otomax/debug-web-sms-sender.md)**
- **[<code>GET</code> Debug Ip Client](./docs/otomax/debug-ip-client.md)**
- **[<code>GET</code> Post Outbox](./docs/otomax/post-outbox.md)**
- **[<code>GET</code> Handle Outbox Callback](./docs/otomax/handle-outbox-callback.md)**
####
- **[<code>GET</code> Request Inbox](./docs/otomax/request-inbox.md)**
- **[<code>GET</code> Request USSD](./docs/otomax/request-ussd.md)**
####
- **[<code>GET</code> Lihat format](./docs/otomax/lihat-format.md)**
- **[<code>GET</code> Lihat Reseller](./docs/otomax/lihat-reseller.md)**
- **[<code>GET</code> Lihat Pengirim](./docs/otomax/lihat-pengirim.md)**
- **[<code>GET</code> Lihat Downline Reseller](./docs/otomax/lihat-downline-reseller.md)**
- **[<code>GET</code> Lihat Level](./docs/otomax/lihat-level.md)**
- **[<code>GET</code> Lihat Downline Level](./docs/otomax/lihat-downline-level.md)**
- **[<code>GET</code> Lihat Operator](./docs/otomax/lihat-operator.md)**
- **[<code>GET</code> Lihat Produk](./docs/otomax/lihat-produk.md)**
- **[<code>GET</code> Lihat Mutasi](./docs/otomax/lihat-mutasi.md)**
### [telegram](#)
####
- **[<code>POST</code> Post Telegram Session](./docs/telegram/post-telegram-session.md)**
- **[<code>GET</code> Get Telegram Session](./docs/telegram/get-telegram-session.md)**
- **[<code>PATCH</code> Patch Telegram Session](./docs/telegram/patch-telegram-session.md)**
- **[<code>DELETE</code> Delete Telegram Session](./docs/telegram/delete-telegram-session.md)**
####
- **[<code>POST</code> Connect Telegram](./docs/telegram/connect-telegram.md)**
- **[<code>POST</code> Disconnect Telegram](./docs/telegram/disconnect-telegram.md)**
- **[<code>POST</code> Send Message Telegram](./docs/telegram/send-message-telegram.md)**
### [whatsapp](#)
####
- **[<code>POST</code> Post Whatsapp Session](./docs/whatsapp/post-whatsapp-session.md)**
- **[<code>GET</code> Get Whatsapp Session](./docs/whatsapp/get-whatsapp-session.md)**
- **[<code>PATCH</code> Patch Whatsapp Session](./docs/whatsapp/patch-whatsapp-session.md)**
- **[<code>DELETE</code> Delete Whatsapp Session](./docs/whatsapp/delete-whatsapp-session.md)**
####
- **[<code>POST</code> Connect Whatsapp](./docs/whatsapp/connect-whatsapp.md)**
- **[<code>POST</code> Disconnect Whatsapp](./docs/whatsapp/disconnect-whatsapp.md)**
- **[<code>POST</code> Send Message Whatsapp](./docs/whatsapp/send-message-whatsapp.md)**
