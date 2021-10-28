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
#### Buyer
- **[<code>POST</code> Cek Saldo](./docs/digiflazz/cek-saldo.md)**
- **[<code>POST</code> Price List](./docs/digiflazz/price-list.md)**
- **[<code>POST</code> Deposit](./docs/digiflazz/deposit.md)**
- **[<code>POST</code> Transaction](./docs/digiflazz/transaction.md)**
#### Seller
- **[<code>POST</code> Transaction](./docs/digiflazz/transaction.md)**
### [Jabber](#)
#### Sesi
- **[<code>GET</code> Daftar Sesi](./docs/jabber/daftar-sesi.md)**
- **[<code>DELETE</code> Hapus Sesi](./docs/jabber/hapus-sesi.md)**
#### Endpoint
- **[<code>POST</code> Connect](./docs/jabber/connect.md)**
- **[<code>POST</code> Disconnect](./docs/jabber/disconnect.md)**
- **[<code>POST</code> Send Message](./docs/jabber/send-message.md)**
### [Otomax](#)
#### Internal
- **[<code>GET</code> Reverse Report](./docs/otomax/reverse-report.md)**
- **[<code>GET</code> Reverse Web Sms Sender](./docs/otomax/reverse-web-sms-sender.md)**
- **[<code>GET</code> Reverse Ip Client](./docs/otomax/reverse-ip-client.md)**
- **[<code>GET</code> Send Outbox](./docs/otomax/send-outbox.md)**
- **[<code>GET</code> Reverse Outbox Callback](./docs/otomax/reverse-outbox-callback.md)**
#### Request
- **[<code>GET</code> Send Inbox](./docs/otomax/send-inbox.md)**
- **[<code>GET</code> Send USSD](./docs/otomax/send-ussd.md)**
#### Endpoint
- **[<code>GET</code> Daftar Format](./docs/otomax/daftar-format.md)**
- **[<code>GET</code> Daftar Reseller](./docs/otomax/daftar-reseller.md)**
- **[<code>GET</code> Daftar Pengirim](./docs/otomax/daftar-pengirim.md)**
- **[<code>GET</code> Daftar Downline Reseller](./docs/otomax/daftar-downline-reseller.md)**
- **[<code>GET</code> Daftar Level](./docs/otomax/daftar-level.md)**
- **[<code>GET</code> Daftar Downline Level](./docs/otomax/daftar-downline-level.md)**
- **[<code>GET</code> Daftar Operator](./docs/otomax/daftar-operator.md)**
- **[<code>GET</code> Daftar Produk](./docs/otomax/daftar-produk.md)**
- **[<code>GET</code> Daftar Mutasi](./docs/otomax/daftar-mutasi.md)**
#### Endpoint2
- **[<code>POST</code> Cek Deposit](./docs/otomax/cek-deposit.md)**
- **[<code>POST</code> Daftar harga](./docs/otomax/daftar-harga.md)**
- **[<code>POST</code> Deposit](./docs/otomax/deposit.md)**
- **[<code>POST</code> Topup](./docs/otomax/topup.md)**
### [Telegram](#)
#### Sesi
- **[<code>GET</code> Daftar Sesi](./docs/telegram/daftar-sesi.md)**
- **[<code>DELETE</code> Hapus Sesi](./docs/telegram/hapus-sesi.md)**
#### Endpoint
- **[<code>POST</code> Connect](./docs/telegram/connect.md)**
- **[<code>POST</code> Disconnect](./docs/telegram/disconnect.md)**
- **[<code>POST</code> Send Message](./docs/telegram/send-message.md)**
### [Whatsapp](#)
#### Sesi
- **[<code>GET</code> Daftar Sesi](./docs/whatsapp/daftar-sesi.md)**
- **[<code>DELETE</code> Hapus Sesi](./docs/whatsapp/hapus-sesi.md)**
#### Endpoint
- **[<code>POST</code> Connect](./docs/whatsapp/connect.md)**
- **[<code>POST</code> Disconnect](./docs/whatsapp/disconnect.md)**
- **[<code>POST</code> Send Message](./docs/whatsapp/send-message.md)**
