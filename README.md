# OtomaX Web Server

![GitHub package.json version](https://img.shields.io/github/package-json/v/ndiing/OtomaX?color=green&label=Otomax%20Web%20Server&style=flat-square)

OtomaX - Orisinil Topup Machine Web Server.

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/otomax.png" height="360" alt="" />
        <figcaption></figcaption>
    </figure>
</p>

## Installation

Pastikan komputer sudah terpasang **[nodejs](https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi)**.
dengan minimal database **[SQL Server 2016 (13.x)](https://go.microsoft.com/fwlink/?linkid=866662)**.

```bash
git clone https://github.com/ndiing/OtomaX.git
cd OtomaX
npm install
npm run start
```


## Example
### Jabber
- **[<code>REST</code> Request](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/jabber/request.rest)**
### Otomax
- **[<code>REST</code> Request Method Get](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request-method-get.rest)**
- **[<code>REST</code> Request Method Post](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request-method-post.rest)**
- **[<code>REST</code> Request](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request.rest)**
- **[<code>REST</code> Request2](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request2.rest)**
### Telegram
- **[<code>REST</code> Request](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/telegram/request.rest)**
### Whatsapp
- **[<code>REST</code> Request](https://raw.githubusercontent.com/ndiing/OtomaX/main/api/whatsapp/request.rest)**

## API

### Jabber
#### Session
- **[<code>GET</code> Daftar Sesi](./docs/jabber/daftar-sesi.md)**
- **[<code>DELETE</code> Hapus Sesi](./docs/jabber/hapus-sesi.md)**
#### Common
- **[<code>POST</code> Connect](./docs/jabber/connect.md)**
- **[<code>POST</code> Disconnect](./docs/jabber/disconnect.md)**
- **[<code>POST</code> Send Message](./docs/jabber/send-message.md)**
### Otomax
#### Private
- **[<code>GET</code> Test Report](./docs/otomax/test-report.md)**
- **[<code>GET</code> Test Web Sms Sender](./docs/otomax/test-web-sms-sender.md)**
- **[<code>GET</code> Test Ip Client](./docs/otomax/test-ip-client.md)**
- **[<code>GET</code> Send Outbox](./docs/otomax/send-outbox.md)**
- **[<code>GET</code> Test Outbox Callback](./docs/otomax/test-outbox-callback.md)**
#### Common
- **[<code>GET</code> Send Inbox](./docs/otomax/send-inbox.md)**
- **[<code>GET</code> Send USSD](./docs/otomax/send-ussd.md)**
- **[<code>GET</code> Daftar Format](./docs/otomax/daftar-format.md)**
- **[<code>GET</code> Daftar Reseller](./docs/otomax/daftar-reseller.md)**
- **[<code>GET</code> Daftar Pengirim](./docs/otomax/daftar-pengirim.md)**
- **[<code>GET</code> Daftar Downline Reseller](./docs/otomax/daftar-downline-reseller.md)**
- **[<code>GET</code> Daftar Level](./docs/otomax/daftar-level.md)**
- **[<code>GET</code> Daftar Downline Level](./docs/otomax/daftar-downline-level.md)**
- **[<code>GET</code> Daftar Operator](./docs/otomax/daftar-operator.md)**
- **[<code>GET</code> Daftar Produk](./docs/otomax/daftar-produk.md)**
- **[<code>GET</code> Daftar Mutasi](./docs/otomax/daftar-mutasi.md)**
#### Common V2
- **[<code>POST</code> Cek Deposit](./docs/otomax/cek-deposit.md)**
- **[<code>POST</code> Daftar harga](./docs/otomax/daftar-harga.md)**
- **[<code>POST</code> Deposit](./docs/otomax/deposit.md)**
- **[<code>POST</code> Topup](./docs/otomax/topup.md)**
### Telegram
#### Session
- **[<code>GET</code> Daftar Sesi](./docs/telegram/daftar-sesi.md)**
- **[<code>DELETE</code> Hapus Sesi](./docs/telegram/hapus-sesi.md)**
#### Common
- **[<code>POST</code> Connect](./docs/telegram/connect.md)**
- **[<code>POST</code> Disconnect](./docs/telegram/disconnect.md)**
- **[<code>POST</code> Send Message](./docs/telegram/send-message.md)**
### Whatsapp
#### Session
- **[<code>GET</code> Daftar Sesi](./docs/whatsapp/daftar-sesi.md)**
- **[<code>DELETE</code> Hapus Sesi](./docs/whatsapp/hapus-sesi.md)**
#### Common
- **[<code>POST</code> Connect](./docs/whatsapp/connect.md)**
- **[<code>POST</code> Disconnect](./docs/whatsapp/disconnect.md)**
- **[<code>POST</code> Send Message](./docs/whatsapp/send-message.md)**
