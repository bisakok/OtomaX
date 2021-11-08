# OtomaX Web Server
## Memulai
Anda akan membutuhkan node.js yang diinstal pada komputer Anda untuk membangun aplikasi ini.
```bash
git clone https://github.com/ndiing/OtomaX.git
cd OtomaX
npm i
npm run start
```
## Konfigurasi
Secara default, Anda dapat mengkonfigurasi server OtomaX menggunakan file `env.json`, yang biasanya diharapkan pada root di mana pun Anda menjalankannya
```bash
{
    "HTTP_PORT": 80,
    "HTTPS_PORT": 443,
    "RSA_CERT": "-----BEGIN CERTIFICATE-----\r\nMIIDETCCAfkCFEuIMBGGqYIF/qfI4bIokhM/Wa0fMA0GCSqGSIb3DQEBCwUAMEUx\r\nCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRl\r\ncm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMjExMTAxMjE1ODE4WhcNNDkwMzE4MjE1\r\nODE4WjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UE\r\nCgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOC\r\nAQ8AMIIBCgKCAQEAulwHTUoSZLw35+4fAYllddDM6xEqdg70xV6xMGgkH8UmZkMV\r\nOOZ8ojPx+x3nI7Ao9K5MdKLV4XnkO2Xya07VP0PwniLiEj9/iPHJsI+vZ/FxoV0k\r\npd/GdF/IqgWhrEyMM2fQUvKisHa3Zq+m5ghr66v/7MR2u7L2jJEx9aKwoFRg4Pez\r\nH7BY9cWjwURjDyBiB+NAgXJyfr6C6nNSiuwXdgbL2qC+cxOAm59lQzsgNh+NpCEd\r\n1tdvAAKiBF6fwmmZKrXWUchNJ34KdQVdiKrQu6AAIxGNw6BBNdAVbw+33rERzM1u\r\nThFNeiYn+eAgrYR1r77gLDaPrHL3JPT2IFTTlQIDAQABMA0GCSqGSIb3DQEBCwUA\r\nA4IBAQBSi71wCBK6S1aMIo/M0r7o9qJzY0peoy1xkIZ3JyFLq5zt1s6pkfeUwng6\r\nJIRc9/mm9WgEmwmALtzlfZtZx12y4KoD2Mc2NNKHWB23e4HUg5iWr6Dhx57vWncg\r\niR9lkBIFeWhYLKzQuD7FhMDs+OPAfol2JO4c3f+ed9idQTX8rY2qPfVJO8alzRTF\r\nY4B8P+39yDAw5QGJW7CEAlfW5Tg/wlI/EThtI4tGie3nifjO07nWdJ57YTvbam4R\r\nH/6BJh37Rjg5g+lI8Weidxz+OpiEVFlUMWwSMTVSChHjjgrp43gXHJL8bFyI9IIa\r\nq34CrnEG7PW+9wAUaSYOhZ8N5qN5\r\n-----END CERTIFICATE-----\r\n",
    "RSA_KEY": "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEpQIBAAKCAQEAulwHTUoSZLw35+4fAYllddDM6xEqdg70xV6xMGgkH8UmZkMV\r\nOOZ8ojPx+x3nI7Ao9K5MdKLV4XnkO2Xya07VP0PwniLiEj9/iPHJsI+vZ/FxoV0k\r\npd/GdF/IqgWhrEyMM2fQUvKisHa3Zq+m5ghr66v/7MR2u7L2jJEx9aKwoFRg4Pez\r\nH7BY9cWjwURjDyBiB+NAgXJyfr6C6nNSiuwXdgbL2qC+cxOAm59lQzsgNh+NpCEd\r\n1tdvAAKiBF6fwmmZKrXWUchNJ34KdQVdiKrQu6AAIxGNw6BBNdAVbw+33rERzM1u\r\nThFNeiYn+eAgrYR1r77gLDaPrHL3JPT2IFTTlQIDAQABAoIBAD1KWxRuUhJTXMeo\r\npwXoXDgdTefZo29kh9gJxpi3B3pzaqejVG18UG1ATEtckFJKc43VbUvG6jTX09o9\r\nMzdbnALMo2w+6L87pwQxETZCa1vyKn75lT4AlNJdVi+k3oE+Q7X8ZKWDK0KCKNta\r\n1bc9+dBupyMFkk81EqU0c4vnz9NKnUY627zNyXNM0FT2arzkxWQhCtp0LmtgrOQi\r\nj0bkFpNzBHnefP+JJRAjygFyzcQo+DpsNcwqyZrY8kyQeSOSl7df8Luh4/gwjERX\r\nWhGbsZPhCKZ29Se4wOaKYphW144NyZdtSspD+ml1xU/bJW/RFe6vTS9Hcr/ZcBhw\r\nK5l4XwECgYEA3vJUmXuoTnqrGAKRplNyaDTw+0yQuzExAFFc8DAqOGH+lIXfmPPC\r\n59ZvBySYtqo9G8GmN/9h5mgCNsdcWZoeaeLEK4Wfb6vTcbHzi02EcpOPLWYK/u1Y\r\n0lnwRLIZyQzcyBdAo95f5eC1bWfhSY/+4Jbbg3eHuTpUIC0VISfmVmECgYEA1f0U\r\nATObpaeduLDRGUm8cFjkRHPRe0HgXKcb5vUex+A0frnXXsTFS2MlFSfRVhqdh2/i\r\nWFtJ2iWF7ZuQx5H6zwFZr5nXM+Bg4bmATCyXYGsRvkq5gOiwj+jUL6C/TJ1dI/8n\r\nbbqCh4glIirNJ5tv5dEoxhKr0g9AvN0ftO4fYbUCgYEA2RzJAkcIGpUfNVybFozB\r\nJ3YXD8L6VzGKdLLHfSiKlSnpUB4nJ76LGlca/KvJBGo45GTrSDEt18GGFm6DIscR\r\nwzAQtgmEwK1mVpxjfk9ZInNMxXtQTf45t2/aqit/LOmXwEvUqUCPxz/Trt2w6YCP\r\nR4vh7d9jjyCceFEu+IDwsUECgYEA1IhGjSb3ySDgOqaLF0Wv/hmbpg0uGvCD6SIk\r\nSVBdYQFiwhbMPJjMp6JyGz/v30gR+4l5Um5gvGSWTzc6JazsYRsjO5BdOG37a1W1\r\ngnKrap0NA2XuNoVlj5kc3a0XMv38mxr5yzb6G6hx0SyXlGYCTkxd5dR3iOuTTcGF\r\nk0sKKh0CgYEAmrGW6Zm4VX1gvDH2CI96Hci7RYk5bBjrb/AHKp8Y7ha7dUPrEh+k\r\n83sM2n1gWlec3Wn5M6rYFt55HvTKKo85LQ/wv1XzqE5c1J2WBEFbiwHCuCgP1M4t\r\nXEEosqNVAqia/1mm3jFgeC4UTCoTr+c/w7+WyVxiZaW1Ahoh3z0LLMU=\r\n-----END RSA PRIVATE KEY-----\r\n"
}
```
Pengaturan center dan sender harus sama dengan ketentuan di OtomaX, secara default `whatsapp` di identifikasi pada `label`, `jabber` menggunakan `username` dan `telegram` menggunakan `label`, secara otomatis kode terminal akan di ambil pada waktu di koneksikan.

<figure>
    <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/jabber-center.png" alt="Contoh jabber">
    <figcaption>Contoh jabber</figcaption>
</figure>



<figure>
    <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/telegram-center.png" alt="Contoh telegram">
    <figcaption>Contoh telegram</figcaption>
</figure>



<figure>
    <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/whatsapp-center.png" alt="Contoh whatsapp">
    <figcaption>Contoh whatsapp</figcaption>
</figure>



<figure>
    <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/ussd-format.png" alt="Contoh USSD Format">
    <figcaption>Contoh USSD Format</figcaption>
</figure>



## Sumber daya
Untuk deskripsi sumber daya yang tersedia, lihat Tinjauan Sumber Daya.
### [jabber][]
#### request.rest
- **[<code>POST</code> /api/jabber/v1/connect](./docs/jabber/POST-api-jabber-v1-connect.md)**
- **[<code>POST</code> /api/jabber/v1/disconnect](./docs/jabber/POST-api-jabber-v1-disconnect.md)**
- **[<code>POST</code> /api/jabber/v1/send](./docs/jabber/POST-api-jabber-v1-send.md)**
- **[<code>GET</code> /api/jabber/v1/send](./docs/jabber/GET-api-jabber-v1-send.md)**
- **[<code>GET</code> /api/jabber/v1/](./docs/jabber/GET-api-jabber-v1.md)**
- **[<code>GET</code> /api/jabber/v1/1](./docs/jabber/GET-api-jabber-v1-1.md)**
- **[<code>DELETE</code> /api/jabber/v1/26](./docs/jabber/DELETE-api-jabber-v1-26.md)**
### [otomax][]
#### request-get.rest
- **[<code>GET</code> /api/v1/aktifkan-dl](./docs/otomax/GET-api-v1-aktifkan-dl.md)**
- **[<code>GET</code> /api/v1/batal-transaksi](./docs/otomax/GET-api-v1-batal-transaksi.md)**
- **[<code>GET</code> /api/v1/batal-transfer-saldo](./docs/otomax/GET-api-v1-batal-transfer-saldo.md)**
- **[<code>GET</code> /api/v1/cek-harga](./docs/otomax/GET-api-v1-cek-harga.md)**
- **[<code>GET</code> /api/v1/cek-markup](./docs/otomax/GET-api-v1-cek-markup.md)**
- **[<code>GET</code> /api/v1/cek-markup-produk](./docs/otomax/GET-api-v1-cek-markup-produk.md)**
- **[<code>GET</code> /api/v1/cek-markup-produk2](./docs/otomax/GET-api-v1-cek-markup-produk2.md)**
- **[<code>GET</code> /api/v1/cek-mutasi](./docs/otomax/GET-api-v1-cek-mutasi.md)**
- **[<code>GET</code> /api/v1/cek-mutasi2](./docs/otomax/GET-api-v1-cek-mutasi2.md)**
- **[<code>GET</code> /api/v1/cek-oid](./docs/otomax/GET-api-v1-cek-oid.md)**
- **[<code>GET</code> /api/v1/cek-saldo](./docs/otomax/GET-api-v1-cek-saldo.md)**
- **[<code>GET</code> /api/v1/cek-saldo-dl](./docs/otomax/GET-api-v1-cek-saldo-dl.md)**
- **[<code>GET</code> /api/v1/cek-status-transaksi](./docs/otomax/GET-api-v1-cek-status-transaksi.md)**
- **[<code>GET</code> /api/v1/cek-status-transaksi2](./docs/otomax/GET-api-v1-cek-status-transaksi2.md)**
- **[<code>GET</code> /api/v1/cek-status-transaksi3](./docs/otomax/GET-api-v1-cek-status-transaksi3.md)**
- **[<code>GET</code> /api/v1/cek-transaksi-akhir](./docs/otomax/GET-api-v1-cek-transaksi-akhir.md)**
- **[<code>GET</code> /api/v1/daftar-dl](./docs/otomax/GET-api-v1-daftar-dl.md)**
- **[<code>GET</code> /api/v1/daftar-dl2](./docs/otomax/GET-api-v1-daftar-dl2.md)**
- **[<code>GET</code> /api/v1/daftar-dl3](./docs/otomax/GET-api-v1-daftar-dl3.md)**
- **[<code>GET</code> /api/v1/daftar-non-member](./docs/otomax/GET-api-v1-daftar-non-member.md)**
- **[<code>GET</code> /api/v1/hapus-gtalk](./docs/otomax/GET-api-v1-hapus-gtalk.md)**
- **[<code>GET</code> /api/v1/hapus-gtalk2](./docs/otomax/GET-api-v1-hapus-gtalk2.md)**
- **[<code>GET</code> /api/v1/hapus-markup-produk](./docs/otomax/GET-api-v1-hapus-markup-produk.md)**
- **[<code>GET</code> /api/v1/hapus-markup-produk2](./docs/otomax/GET-api-v1-hapus-markup-produk2.md)**
- **[<code>GET</code> /api/v1/hapus-markup-produk3](./docs/otomax/GET-api-v1-hapus-markup-produk3.md)**
- **[<code>GET</code> /api/v1/hapus-nomor](./docs/otomax/GET-api-v1-hapus-nomor.md)**
- **[<code>GET</code> /api/v1/hapus-nomor2](./docs/otomax/GET-api-v1-hapus-nomor2.md)**
- **[<code>GET</code> /api/v1/hapus-wa](./docs/otomax/GET-api-v1-hapus-wa.md)**
- **[<code>GET</code> /api/v1/hapus-ym](./docs/otomax/GET-api-v1-hapus-ym.md)**
- **[<code>GET</code> /api/v1/hapus-ym2](./docs/otomax/GET-api-v1-hapus-ym2.md)**
- **[<code>GET</code> /api/v1/laporan-mutasi](./docs/otomax/GET-api-v1-laporan-mutasi.md)**
- **[<code>GET</code> /api/v1/laporan-transaksi](./docs/otomax/GET-api-v1-laporan-transaksi.md)**
- **[<code>GET</code> /api/v1/lihat-hadiah-poin](./docs/otomax/GET-api-v1-lihat-hadiah-poin.md)**
- **[<code>GET</code> /api/v1/list-dl](./docs/otomax/GET-api-v1-list-dl.md)**
- **[<code>GET</code> /api/v1/list-dl2](./docs/otomax/GET-api-v1-list-dl2.md)**
- **[<code>GET</code> /api/v1/list-pengirim](./docs/otomax/GET-api-v1-list-pengirim.md)**
- **[<code>GET</code> /api/v1/list-pengirim-gtalk](./docs/otomax/GET-api-v1-list-pengirim-gtalk.md)**
- **[<code>GET</code> /api/v1/list-pengirim-gtalk2](./docs/otomax/GET-api-v1-list-pengirim-gtalk2.md)**
- **[<code>GET</code> /api/v1/list-pengirim-sms](./docs/otomax/GET-api-v1-list-pengirim-sms.md)**
- **[<code>GET</code> /api/v1/list-pengirim-sms2](./docs/otomax/GET-api-v1-list-pengirim-sms2.md)**
- **[<code>GET</code> /api/v1/list-pengirim-ym](./docs/otomax/GET-api-v1-list-pengirim-ym.md)**
- **[<code>GET</code> /api/v1/list-pengirim-ym2](./docs/otomax/GET-api-v1-list-pengirim-ym2.md)**
- **[<code>GET</code> /api/v1/non-aktifkan-dl](./docs/otomax/GET-api-v1-non-aktifkan-dl.md)**
- **[<code>GET</code> /api/v1/reset-pin](./docs/otomax/GET-api-v1-reset-pin.md)**
- **[<code>GET</code> /api/v1/tambah-gtalk](./docs/otomax/GET-api-v1-tambah-gtalk.md)**
- **[<code>GET</code> /api/v1/tambah-gtalk2](./docs/otomax/GET-api-v1-tambah-gtalk2.md)**
- **[<code>GET</code> /api/v1/tambah-nomor](./docs/otomax/GET-api-v1-tambah-nomor.md)**
- **[<code>GET</code> /api/v1/tambah-nomor2](./docs/otomax/GET-api-v1-tambah-nomor2.md)**
- **[<code>GET</code> /api/v1/tambah-wa](./docs/otomax/GET-api-v1-tambah-wa.md)**
- **[<code>GET</code> /api/v1/tambah-ym](./docs/otomax/GET-api-v1-tambah-ym.md)**
- **[<code>GET</code> /api/v1/tambah-ym2](./docs/otomax/GET-api-v1-tambah-ym2.md)**
- **[<code>GET</code> /api/v1/tiket-deposit](./docs/otomax/GET-api-v1-tiket-deposit.md)**
- **[<code>GET</code> /api/v1/transaksi](./docs/otomax/GET-api-v1-transaksi.md)**
- **[<code>GET</code> /api/v1/transaksi10](./docs/otomax/GET-api-v1-transaksi10.md)**
- **[<code>GET</code> /api/v1/transaksi11](./docs/otomax/GET-api-v1-transaksi11.md)**
- **[<code>GET</code> /api/v1/transaksi12](./docs/otomax/GET-api-v1-transaksi12.md)**
- **[<code>GET</code> /api/v1/transaksi13](./docs/otomax/GET-api-v1-transaksi13.md)**
- **[<code>GET</code> /api/v1/transaksi14](./docs/otomax/GET-api-v1-transaksi14.md)**
- **[<code>GET</code> /api/v1/transaksi15](./docs/otomax/GET-api-v1-transaksi15.md)**
- **[<code>GET</code> /api/v1/transaksi16](./docs/otomax/GET-api-v1-transaksi16.md)**
- **[<code>GET</code> /api/v1/transaksi17](./docs/otomax/GET-api-v1-transaksi17.md)**
- **[<code>GET</code> /api/v1/transaksi18](./docs/otomax/GET-api-v1-transaksi18.md)**
- **[<code>GET</code> /api/v1/transaksi19](./docs/otomax/GET-api-v1-transaksi19.md)**
- **[<code>GET</code> /api/v1/transaksi2](./docs/otomax/GET-api-v1-transaksi2.md)**
- **[<code>GET</code> /api/v1/transaksi20](./docs/otomax/GET-api-v1-transaksi20.md)**
- **[<code>GET</code> /api/v1/transaksi21](./docs/otomax/GET-api-v1-transaksi21.md)**
- **[<code>GET</code> /api/v1/transaksi22](./docs/otomax/GET-api-v1-transaksi22.md)**
- **[<code>GET</code> /api/v1/transaksi23](./docs/otomax/GET-api-v1-transaksi23.md)**
- **[<code>GET</code> /api/v1/transaksi24](./docs/otomax/GET-api-v1-transaksi24.md)**
- **[<code>GET</code> /api/v1/transaksi25](./docs/otomax/GET-api-v1-transaksi25.md)**
- **[<code>GET</code> /api/v1/transaksi26](./docs/otomax/GET-api-v1-transaksi26.md)**
- **[<code>GET</code> /api/v1/transaksi27](./docs/otomax/GET-api-v1-transaksi27.md)**
- **[<code>GET</code> /api/v1/transaksi28](./docs/otomax/GET-api-v1-transaksi28.md)**
- **[<code>GET</code> /api/v1/transaksi29](./docs/otomax/GET-api-v1-transaksi29.md)**
- **[<code>GET</code> /api/v1/transaksi3](./docs/otomax/GET-api-v1-transaksi3.md)**
- **[<code>GET</code> /api/v1/transaksi4](./docs/otomax/GET-api-v1-transaksi4.md)**
- **[<code>GET</code> /api/v1/transaksi5](./docs/otomax/GET-api-v1-transaksi5.md)**
- **[<code>GET</code> /api/v1/transaksi6](./docs/otomax/GET-api-v1-transaksi6.md)**
- **[<code>GET</code> /api/v1/transaksi7](./docs/otomax/GET-api-v1-transaksi7.md)**
- **[<code>GET</code> /api/v1/transaksi8](./docs/otomax/GET-api-v1-transaksi8.md)**
- **[<code>GET</code> /api/v1/transaksi9](./docs/otomax/GET-api-v1-transaksi9.md)**
- **[<code>GET</code> /api/v1/transaksi-bebas-dobel](./docs/otomax/GET-api-v1-transaksi-bebas-dobel.md)**
- **[<code>GET</code> /api/v1/transfer-saldo](./docs/otomax/GET-api-v1-transfer-saldo.md)**
- **[<code>GET</code> /api/v1/transfer-saldo-lintas](./docs/otomax/GET-api-v1-transfer-saldo-lintas.md)**
- **[<code>GET</code> /api/v1/tukar-komisi](./docs/otomax/GET-api-v1-tukar-komisi.md)**
- **[<code>GET</code> /api/v1/tukar-komisi2](./docs/otomax/GET-api-v1-tukar-komisi2.md)**
- **[<code>GET</code> /api/v1/tukar-poin](./docs/otomax/GET-api-v1-tukar-poin.md)**
- **[<code>GET</code> /api/v1/ubah-alamat-ip](./docs/otomax/GET-api-v1-ubah-alamat-ip.md)**
- **[<code>GET</code> /api/v1/ubah-level](./docs/otomax/GET-api-v1-ubah-level.md)**
- **[<code>GET</code> /api/v1/ubah-markup](./docs/otomax/GET-api-v1-ubah-markup.md)**
- **[<code>GET</code> /api/v1/ubah-markup-produk](./docs/otomax/GET-api-v1-ubah-markup-produk.md)**
- **[<code>GET</code> /api/v1/ubah-markup-produk2](./docs/otomax/GET-api-v1-ubah-markup-produk2.md)**
- **[<code>GET</code> /api/v1/ubah-nama](./docs/otomax/GET-api-v1-ubah-nama.md)**
- **[<code>GET</code> /api/v1/ubah-oid](./docs/otomax/GET-api-v1-ubah-oid.md)**
- **[<code>GET</code> /api/v1/ubah-password-ip](./docs/otomax/GET-api-v1-ubah-password-ip.md)**
- **[<code>GET</code> /api/v1/ubah-pin](./docs/otomax/GET-api-v1-ubah-pin.md)**
- **[<code>GET</code> /api/v1/ubah-report-url](./docs/otomax/GET-api-v1-ubah-report-url.md)**
#### request-post.rest
- **[<code>POST</code> /api/v1/aktifkan-dl](./docs/otomax/POST-api-v1-aktifkan-dl.md)**
- **[<code>POST</code> /api/v1/batal-transaksi](./docs/otomax/POST-api-v1-batal-transaksi.md)**
- **[<code>POST</code> /api/v1/batal-transfer-saldo](./docs/otomax/POST-api-v1-batal-transfer-saldo.md)**
- **[<code>POST</code> /api/v1/cek-harga](./docs/otomax/POST-api-v1-cek-harga.md)**
- **[<code>POST</code> /api/v1/cek-markup](./docs/otomax/POST-api-v1-cek-markup.md)**
- **[<code>POST</code> /api/v1/cek-markup-produk](./docs/otomax/POST-api-v1-cek-markup-produk.md)**
- **[<code>POST</code> /api/v1/cek-markup-produk2](./docs/otomax/POST-api-v1-cek-markup-produk2.md)**
- **[<code>POST</code> /api/v1/cek-mutasi](./docs/otomax/POST-api-v1-cek-mutasi.md)**
- **[<code>POST</code> /api/v1/cek-mutasi2](./docs/otomax/POST-api-v1-cek-mutasi2.md)**
- **[<code>POST</code> /api/v1/cek-oid](./docs/otomax/POST-api-v1-cek-oid.md)**
- **[<code>POST</code> /api/v1/cek-saldo](./docs/otomax/POST-api-v1-cek-saldo.md)**
- **[<code>POST</code> /api/v1/cek-saldo-dl](./docs/otomax/POST-api-v1-cek-saldo-dl.md)**
- **[<code>POST</code> /api/v1/cek-status-transaksi](./docs/otomax/POST-api-v1-cek-status-transaksi.md)**
- **[<code>POST</code> /api/v1/cek-status-transaksi2](./docs/otomax/POST-api-v1-cek-status-transaksi2.md)**
- **[<code>POST</code> /api/v1/cek-status-transaksi3](./docs/otomax/POST-api-v1-cek-status-transaksi3.md)**
- **[<code>POST</code> /api/v1/cek-transaksi-akhir](./docs/otomax/POST-api-v1-cek-transaksi-akhir.md)**
- **[<code>POST</code> /api/v1/daftar-dl](./docs/otomax/POST-api-v1-daftar-dl.md)**
- **[<code>POST</code> /api/v1/daftar-dl2](./docs/otomax/POST-api-v1-daftar-dl2.md)**
- **[<code>POST</code> /api/v1/daftar-dl3](./docs/otomax/POST-api-v1-daftar-dl3.md)**
- **[<code>POST</code> /api/v1/daftar-non-member](./docs/otomax/POST-api-v1-daftar-non-member.md)**
- **[<code>POST</code> /api/v1/hapus-gtalk](./docs/otomax/POST-api-v1-hapus-gtalk.md)**
- **[<code>POST</code> /api/v1/hapus-gtalk2](./docs/otomax/POST-api-v1-hapus-gtalk2.md)**
- **[<code>POST</code> /api/v1/hapus-markup-produk](./docs/otomax/POST-api-v1-hapus-markup-produk.md)**
- **[<code>POST</code> /api/v1/hapus-markup-produk2](./docs/otomax/POST-api-v1-hapus-markup-produk2.md)**
- **[<code>POST</code> /api/v1/hapus-markup-produk3](./docs/otomax/POST-api-v1-hapus-markup-produk3.md)**
- **[<code>POST</code> /api/v1/hapus-nomor](./docs/otomax/POST-api-v1-hapus-nomor.md)**
- **[<code>POST</code> /api/v1/hapus-nomor2](./docs/otomax/POST-api-v1-hapus-nomor2.md)**
- **[<code>POST</code> /api/v1/hapus-wa](./docs/otomax/POST-api-v1-hapus-wa.md)**
- **[<code>POST</code> /api/v1/hapus-ym](./docs/otomax/POST-api-v1-hapus-ym.md)**
- **[<code>POST</code> /api/v1/hapus-ym2](./docs/otomax/POST-api-v1-hapus-ym2.md)**
- **[<code>POST</code> /api/v1/laporan-mutasi](./docs/otomax/POST-api-v1-laporan-mutasi.md)**
- **[<code>POST</code> /api/v1/laporan-transaksi](./docs/otomax/POST-api-v1-laporan-transaksi.md)**
- **[<code>POST</code> /api/v1/lihat-hadiah-poin](./docs/otomax/POST-api-v1-lihat-hadiah-poin.md)**
- **[<code>POST</code> /api/v1/list-dl](./docs/otomax/POST-api-v1-list-dl.md)**
- **[<code>POST</code> /api/v1/list-dl2](./docs/otomax/POST-api-v1-list-dl2.md)**
- **[<code>POST</code> /api/v1/list-pengirim](./docs/otomax/POST-api-v1-list-pengirim.md)**
- **[<code>POST</code> /api/v1/list-pengirim-gtalk](./docs/otomax/POST-api-v1-list-pengirim-gtalk.md)**
- **[<code>POST</code> /api/v1/list-pengirim-gtalk2](./docs/otomax/POST-api-v1-list-pengirim-gtalk2.md)**
- **[<code>POST</code> /api/v1/list-pengirim-sms](./docs/otomax/POST-api-v1-list-pengirim-sms.md)**
- **[<code>POST</code> /api/v1/list-pengirim-sms2](./docs/otomax/POST-api-v1-list-pengirim-sms2.md)**
- **[<code>POST</code> /api/v1/list-pengirim-ym](./docs/otomax/POST-api-v1-list-pengirim-ym.md)**
- **[<code>POST</code> /api/v1/list-pengirim-ym2](./docs/otomax/POST-api-v1-list-pengirim-ym2.md)**
- **[<code>POST</code> /api/v1/non-aktifkan-dl](./docs/otomax/POST-api-v1-non-aktifkan-dl.md)**
- **[<code>POST</code> /api/v1/reset-pin](./docs/otomax/POST-api-v1-reset-pin.md)**
- **[<code>POST</code> /api/v1/tambah-gtalk](./docs/otomax/POST-api-v1-tambah-gtalk.md)**
- **[<code>POST</code> /api/v1/tambah-gtalk2](./docs/otomax/POST-api-v1-tambah-gtalk2.md)**
- **[<code>POST</code> /api/v1/tambah-nomor](./docs/otomax/POST-api-v1-tambah-nomor.md)**
- **[<code>POST</code> /api/v1/tambah-nomor2](./docs/otomax/POST-api-v1-tambah-nomor2.md)**
- **[<code>POST</code> /api/v1/tambah-wa](./docs/otomax/POST-api-v1-tambah-wa.md)**
- **[<code>POST</code> /api/v1/tambah-ym](./docs/otomax/POST-api-v1-tambah-ym.md)**
- **[<code>POST</code> /api/v1/tambah-ym2](./docs/otomax/POST-api-v1-tambah-ym2.md)**
- **[<code>POST</code> /api/v1/tiket-deposit](./docs/otomax/POST-api-v1-tiket-deposit.md)**
- **[<code>POST</code> /api/v1/transaksi](./docs/otomax/POST-api-v1-transaksi.md)**
- **[<code>POST</code> /api/v1/transaksi10](./docs/otomax/POST-api-v1-transaksi10.md)**
- **[<code>POST</code> /api/v1/transaksi11](./docs/otomax/POST-api-v1-transaksi11.md)**
- **[<code>POST</code> /api/v1/transaksi12](./docs/otomax/POST-api-v1-transaksi12.md)**
- **[<code>POST</code> /api/v1/transaksi13](./docs/otomax/POST-api-v1-transaksi13.md)**
- **[<code>POST</code> /api/v1/transaksi14](./docs/otomax/POST-api-v1-transaksi14.md)**
- **[<code>POST</code> /api/v1/transaksi15](./docs/otomax/POST-api-v1-transaksi15.md)**
- **[<code>POST</code> /api/v1/transaksi16](./docs/otomax/POST-api-v1-transaksi16.md)**
- **[<code>POST</code> /api/v1/transaksi17](./docs/otomax/POST-api-v1-transaksi17.md)**
- **[<code>POST</code> /api/v1/transaksi18](./docs/otomax/POST-api-v1-transaksi18.md)**
- **[<code>POST</code> /api/v1/transaksi19](./docs/otomax/POST-api-v1-transaksi19.md)**
- **[<code>POST</code> /api/v1/transaksi2](./docs/otomax/POST-api-v1-transaksi2.md)**
- **[<code>POST</code> /api/v1/transaksi20](./docs/otomax/POST-api-v1-transaksi20.md)**
- **[<code>POST</code> /api/v1/transaksi21](./docs/otomax/POST-api-v1-transaksi21.md)**
- **[<code>POST</code> /api/v1/transaksi22](./docs/otomax/POST-api-v1-transaksi22.md)**
- **[<code>POST</code> /api/v1/transaksi23](./docs/otomax/POST-api-v1-transaksi23.md)**
- **[<code>POST</code> /api/v1/transaksi24](./docs/otomax/POST-api-v1-transaksi24.md)**
- **[<code>POST</code> /api/v1/transaksi25](./docs/otomax/POST-api-v1-transaksi25.md)**
- **[<code>POST</code> /api/v1/transaksi26](./docs/otomax/POST-api-v1-transaksi26.md)**
- **[<code>POST</code> /api/v1/transaksi27](./docs/otomax/POST-api-v1-transaksi27.md)**
- **[<code>POST</code> /api/v1/transaksi28](./docs/otomax/POST-api-v1-transaksi28.md)**
- **[<code>POST</code> /api/v1/transaksi29](./docs/otomax/POST-api-v1-transaksi29.md)**
- **[<code>POST</code> /api/v1/transaksi3](./docs/otomax/POST-api-v1-transaksi3.md)**
- **[<code>POST</code> /api/v1/transaksi4](./docs/otomax/POST-api-v1-transaksi4.md)**
- **[<code>POST</code> /api/v1/transaksi5](./docs/otomax/POST-api-v1-transaksi5.md)**
- **[<code>POST</code> /api/v1/transaksi6](./docs/otomax/POST-api-v1-transaksi6.md)**
- **[<code>POST</code> /api/v1/transaksi7](./docs/otomax/POST-api-v1-transaksi7.md)**
- **[<code>POST</code> /api/v1/transaksi8](./docs/otomax/POST-api-v1-transaksi8.md)**
- **[<code>POST</code> /api/v1/transaksi9](./docs/otomax/POST-api-v1-transaksi9.md)**
- **[<code>POST</code> /api/v1/transaksi-bebas-dobel](./docs/otomax/POST-api-v1-transaksi-bebas-dobel.md)**
- **[<code>POST</code> /api/v1/transfer-saldo](./docs/otomax/POST-api-v1-transfer-saldo.md)**
- **[<code>POST</code> /api/v1/transfer-saldo-lintas](./docs/otomax/POST-api-v1-transfer-saldo-lintas.md)**
- **[<code>POST</code> /api/v1/tukar-komisi](./docs/otomax/POST-api-v1-tukar-komisi.md)**
- **[<code>POST</code> /api/v1/tukar-komisi2](./docs/otomax/POST-api-v1-tukar-komisi2.md)**
- **[<code>POST</code> /api/v1/tukar-poin](./docs/otomax/POST-api-v1-tukar-poin.md)**
- **[<code>POST</code> /api/v1/ubah-alamat-ip](./docs/otomax/POST-api-v1-ubah-alamat-ip.md)**
- **[<code>POST</code> /api/v1/ubah-level](./docs/otomax/POST-api-v1-ubah-level.md)**
- **[<code>POST</code> /api/v1/ubah-markup](./docs/otomax/POST-api-v1-ubah-markup.md)**
- **[<code>POST</code> /api/v1/ubah-markup-produk](./docs/otomax/POST-api-v1-ubah-markup-produk.md)**
- **[<code>POST</code> /api/v1/ubah-markup-produk2](./docs/otomax/POST-api-v1-ubah-markup-produk2.md)**
- **[<code>POST</code> /api/v1/ubah-nama](./docs/otomax/POST-api-v1-ubah-nama.md)**
- **[<code>POST</code> /api/v1/ubah-oid](./docs/otomax/POST-api-v1-ubah-oid.md)**
- **[<code>POST</code> /api/v1/ubah-password-ip](./docs/otomax/POST-api-v1-ubah-password-ip.md)**
- **[<code>POST</code> /api/v1/ubah-pin](./docs/otomax/POST-api-v1-ubah-pin.md)**
- **[<code>POST</code> /api/v1/ubah-report-url](./docs/otomax/POST-api-v1-ubah-report-url.md)**
#### request.rest
- **[<code>GET</code> /api/v1/web-sms-sender](./docs/otomax/GET-api-v1-web-sms-sender.md)**
- **[<code>GET</code> /api/v1/ip-client](./docs/otomax/GET-api-v1-ip-client.md)**
- **[<code>GET</code> /api/v1/report](./docs/otomax/GET-api-v1-report.md)**
- **[<code>POST</code> /api/v1/outbox-callback](./docs/otomax/POST-api-v1-outbox-callback.md)**
- **[<code>POST</code> /api/v1/inbox](./docs/otomax/POST-api-v1-inbox.md)**
- **[<code>GET</code> /api/v1/inbox](./docs/otomax/GET-api-v1-inbox.md)**
- **[<code>GET</code> /api/v1/format](./docs/otomax/GET-api-v1-format.md)**
- **[<code>GET</code> /api/v1/reseller](./docs/otomax/GET-api-v1-reseller.md)**
- **[<code>GET</code> /api/v1/pengirim](./docs/otomax/GET-api-v1-pengirim.md)**
- **[<code>GET</code> /api/v1/downline](./docs/otomax/GET-api-v1-downline.md)**
- **[<code>GET</code> /api/v1/operator](./docs/otomax/GET-api-v1-operator.md)**
- **[<code>GET</code> /api/v1/produk](./docs/otomax/GET-api-v1-produk.md)**
- **[<code>GET</code> /api/v1/mutasi](./docs/otomax/GET-api-v1-mutasi.md)**
### [telegram][]
#### request.rest
- **[<code>POST</code> /api/telegram/v1/connect](./docs/telegram/POST-api-telegram-v1-connect.md)**
- **[<code>POST</code> /api/telegram/v1/disconnect](./docs/telegram/POST-api-telegram-v1-disconnect.md)**
- **[<code>POST</code> /api/telegram/v1/send](./docs/telegram/POST-api-telegram-v1-send.md)**
- **[<code>GET</code> /api/telegram/v1/send](./docs/telegram/GET-api-telegram-v1-send.md)**
- **[<code>GET</code> /api/telegram/v1/](./docs/telegram/GET-api-telegram-v1.md)**
- **[<code>GET</code> /api/telegram/v1/1](./docs/telegram/GET-api-telegram-v1-1.md)**
- **[<code>DELETE</code> /api/telegram/v1/23](./docs/telegram/DELETE-api-telegram-v1-23.md)**
### [whatsapp][]
#### request.rest
- **[<code>POST</code> /api/whatsapp/v1/connect](./docs/whatsapp/POST-api-whatsapp-v1-connect.md)**
- **[<code>POST</code> /api/whatsapp/v1/disconnect](./docs/whatsapp/POST-api-whatsapp-v1-disconnect.md)**
- **[<code>POST</code> /api/whatsapp/v1/send](./docs/whatsapp/POST-api-whatsapp-v1-send.md)**
- **[<code>GET</code> /api/whatsapp/v1/send](./docs/whatsapp/GET-api-whatsapp-v1-send.md)**
- **[<code>GET</code> /api/whatsapp/v1/](./docs/whatsapp/GET-api-whatsapp-v1.md)**
- **[<code>GET</code> /api/whatsapp/v1/12](./docs/whatsapp/GET-api-whatsapp-v1-12.md)**
- **[<code>DELETE</code> /api/whatsapp/v1/12](./docs/whatsapp/DELETE-api-whatsapp-v1-12.md)**

[jabber]: https://raw.githubusercontent.com/ndiing/OtomaX/main/api/jabber/request.rest
[otomax]: https://raw.githubusercontent.com/ndiing/OtomaX/main/api/otomax/request.rest
[telegram]: https://raw.githubusercontent.com/ndiing/OtomaX/main/api/telegram/request.rest
[whatsapp]: https://raw.githubusercontent.com/ndiing/OtomaX/main/api/whatsapp/request.rest
