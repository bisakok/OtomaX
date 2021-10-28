# [OtomaX Web Server](#)

OtomaX - Orisinil Topup Machine Web Server.

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/otomax.png" height="256" alt="" />
        <figcaption></figcaption>
    </figure>
</p>

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
### [digiflazz]()
- **[<code>REST</code> /api/digiflazz/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/digiflazz/request.rest)**
### [jabber]()
- **[<code>REST</code> /api/jabber/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/jabber/request.rest)**
### [otomax]()
- **[<code>REST</code> /api/otomax/request-method-get.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request-method-get.rest)**
- **[<code>REST</code> /api/otomax/request-method-post.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request-method-post.rest)**
- **[<code>REST</code> /api/otomax/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request.rest)**
- **[<code>REST</code> /api/otomax/request2.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request2.rest)**
### [telegram]()
- **[<code>REST</code> /api/telegram/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/telegram/request.rest)**
### [whatsapp]()
- **[<code>REST</code> /api/whatsapp/request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/whatsapp/request.rest)**

## [API](#)

### [Digiflazz](#)
####
- **[<code>POST</code> Buyer Cek Saldo](./docs/digiflazz/buyer-cek-saldo.md)**
- **[<code>POST</code> Buyer Price List](./docs/digiflazz/buyer-price-list.md)**
- **[<code>POST</code> Buyer Deposit](./docs/digiflazz/buyer-deposit.md)**
- **[<code>POST</code> Buyer Transaction](./docs/digiflazz/buyer-transaction.md)**
####
- **[<code>POST</code> Seller Transaction](./docs/digiflazz/seller-transaction.md)**
### [Jabber](#)
####
- **[<code>GET</code> Get Jabber Session](./docs/jabber/get-jabber-session.md)**
- **[<code>DELETE</code> Delete Jabber Session](./docs/jabber/delete-jabber-session.md)**
####
- **[<code>POST</code> Connect Jabber](./docs/jabber/connect-jabber.md)**
- **[<code>POST</code> Disconnect Jabber](./docs/jabber/disconnect-jabber.md)**
- **[<code>POST</code> Send Message Jabber](./docs/jabber/send-message-jabber.md)**
### [Otomax](#)
####
- **[<code>GET</code> Test Report](./docs/otomax/test-report.md)**
- **[<code>GET</code> Test Web Sms Sender](./docs/otomax/test-web-sms-sender.md)**
- **[<code>GET</code> Test Ip Client](./docs/otomax/test-ip-client.md)**
- **[<code>GET</code> Send Outbox](./docs/otomax/send-outbox.md)**
- **[<code>GET</code> Outbox Callback](./docs/otomax/outbox-callback.md)**
####
- **[<code>GET</code> Send Inbox](./docs/otomax/send-inbox.md)**
- **[<code>GET</code> Send Inbox USSD](./docs/otomax/send-inbox-ussd.md)**
####
- **[<code>GET</code> List Format](./docs/otomax/list-format.md)**
- **[<code>GET</code> List Reseller](./docs/otomax/list-reseller.md)**
- **[<code>GET</code> List Pengirim](./docs/otomax/list-pengirim.md)**
- **[<code>GET</code> List Downline Reseller](./docs/otomax/list-downline-reseller.md)**
- **[<code>GET</code> List Level](./docs/otomax/list-level.md)**
- **[<code>GET</code> List Downline Level](./docs/otomax/list-downline-level.md)**
- **[<code>GET</code> List Operator](./docs/otomax/list-operator.md)**
- **[<code>GET</code> List Produk](./docs/otomax/list-produk.md)**
- **[<code>GET</code> List Mutasi](./docs/otomax/list-mutasi.md)**
### [Telegram](#)
####
- **[<code>GET</code> Get Telegram Session](./docs/telegram/get-telegram-session.md)**
- **[<code>DELETE</code> Delete Telegram Session](./docs/telegram/delete-telegram-session.md)**
####
- **[<code>POST</code> Connect Telegram](./docs/telegram/connect-telegram.md)**
- **[<code>POST</code> Disconnect Telegram](./docs/telegram/disconnect-telegram.md)**
- **[<code>POST</code> Send Message Telegram](./docs/telegram/send-message-telegram.md)**
### [Whatsapp](#)
####
- **[<code>GET</code> Get Whatsapp Session](./docs/whatsapp/get-whatsapp-session.md)**
- **[<code>DELETE</code> Delete Whatsapp Session](./docs/whatsapp/delete-whatsapp-session.md)**
####
- **[<code>POST</code> Connect Whatsapp](./docs/whatsapp/connect-whatsapp.md)**
- **[<code>POST</code> Disconnect Whatsapp](./docs/whatsapp/disconnect-whatsapp.md)**
- **[<code>POST</code> Send Message Whatsapp](./docs/whatsapp/send-message-whatsapp.md)**
