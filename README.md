# OtomaX Web Server

[![GitHub package.json version](https://img.shields.io/github/package-json/v/ndiing/otomax)](https://github.com/ndiing/OtomaX/releases)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/ndiing/otomax)](https://github.com/ndiing/OtomaX/releases)

## Gambaran

OtomaX go online :)

## Instalasi

<details>
<summary>Download [nodejs](https://nodejs.org/en/download/)</summary>
<p>
```bash
git clone https://github.com/ndiing/OtomaX.git
cd OtomaX
npm i
npm run start
```
</p>
</details>

Setting [config.json]()

```js
{
    // PATH
    // @property {String} DbPath - Lokasi database
    // @property {String} DataPath - Lokasi data pengguna
    "DbPath": "C:\\Users\\Ndiing\\Documents\\OtomaX\\db\\",
    "DataPath": "C:\\Users\\Ndiing\\Documents\\OtomaX\\data",

    // RSA
    // @property {String} RsaKey - SSL Private key (RSA256)
    // @property {String} RsaCert - SSL Public Key (RSA256)
    "RsaKey": "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEpAIBAAKCAQEA85H0st4fHtcYUmWwsnjQCvb4ZIMDmp7i05JkXaO6xRhJsopi\r\nWyqkc72aGpnLTcwI2ZQyraidrIcRDoZmO6TCLj3q3XiZQOu/8Ww8ZJ6bodnZIbAm\r\noDoBjAEV2iv1yz/ugdKI416ww4OxwHpdjTWjNPEY2ON8MrAJbRTQM8SBOd/LWo5R\r\nJNV6nva+lETRTLauNV2dE7fv4+aarz80AxUJ+miYRbdFHvax2TI4qK6LqANmTpHn\r\ntfuUPKZLjyg7PXyhlR6dtdmb3ny0tAeEvqSX05VUO+gh5b8Tgn3U6xX0RLfsrpk4\r\n+eWYqglRXd5tabCZqG84kT1xziOOcG0EBR5kYwIDAQABAoIBAA3DJndg05NThf1J\r\n36UF7INiFwDe4jo/VgOsVt1vneL7D1b2OL5791TO1sFABVu89pcMp5xmVZpk+1K9\r\nx1MBaTNhrj6bTNV9PJgwjG0HBTYs7/bWVChjfqjhetGcAERetWRCeBeYxxYU/9sn\r\nTtfmuvUH1maS2/alObMfJPB33vFdFo/YxAdOvBI46TR9d3QdKep95dTLFb2RtgIj\r\nw7q9FKb52oZ6mgYBqEqg+yQI2ps7EsmdWGobp33nIaKHIEMebbWEVrHtqg6+J03X\r\nOmsqrTjAdHULJDEc4vdPkBSrXFz1mbszQCTvaXx1r7nQ9J8IRMvQEe3xlhCldacx\r\nslPI+akCgYEA/vtzC8UNqn8Cvv6AosP5vma86DeAYHXSpADoHCZNVQoOvYlUGIaZ\r\nhPn8qbewmNGoTHj0kt1wQcmSkxd8uhHA9dsITh+pyocPUcYSiQSawJ4JvInbP0Ds\r\n1JHp2NPBgWJe7y8FYBHlMhSZnaJBv9nZfbIWAsShyJzJFQTzXN/V7UUCgYEA9IrY\r\nW9ZcNzSOV9cerlI37Cq52T7gNU3mXWxVcWyXFEUBDYaX0aSfYlx1qSRKBRUmoKpl\r\nrV/DjhKpkGTQKN7ykwzWElD1rYCdtQ9hb22jxfcj8pI1LHXf3BDToRiLMzC/QnAX\r\nzHMPGNFc4pIEEibD+KEvimrRciWQhAVpGBNtAYcCgYAaHDeYsfIHToBCfJ9Bi53s\r\nYGrhwKU1u3r5blpWX5m1ppUB1ak15bqcwlicLII58+YvBofM7j4Ljo+i3lnYV+8R\r\nff9ouJdTdOcdsZG+VClgpg5LLzazUHuv/M0cdfqvvBoKlh8PymVU7oUYfkALXEyI\r\nMY9Nc0M53sw8icg973HhnQKBgQDpknjHdz7LR/qxsfpPHJ7nh4POGf1DTK29DA2s\r\nccD4DlTMG4OFLU1DQPbtYIkGw8YKbdcCO1boq7CkB3a/ovtlMzyBcCzI1PFNkGxL\r\nZxinrL/8IGSDm+7/Hl9VHsFOWsBD8Bb7I+cGmGq0yizzPW2vXB2xgweclH6taxGP\r\nenaCnwKBgQCC/jZ4YkZ5QZJvFg7G5LXIzqpFGLOkgPwLeNwi3F+S9Eg1HpxIoo+r\r\nGZEipOFLAS9oD6eC2VgYKwW3/KREUzBjtaLoYAxgBnArvPnMtpm9MoGznkb0rSJH\r\nxkJU+f5z4uDmhXynaKJqMNgTG4kINv4JoAwV7FFy2DIQmIVh3BgWpg==\r\n-----END RSA PRIVATE KEY-----\r\n",
    "RsaCert": "-----BEGIN CERTIFICATE-----\r\nMIIDETCCAfkCFGI8N0cFpKrexVykZRbYn/EObEX2MA0GCSqGSIb3DQEBCwUAMEUx\r\nCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRl\r\ncm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMjEwOTI3MTA0NjAyWhcNNDkwMjExMTA0\r\nNjAyWjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UE\r\nCgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOC\r\nAQ8AMIIBCgKCAQEA85H0st4fHtcYUmWwsnjQCvb4ZIMDmp7i05JkXaO6xRhJsopi\r\nWyqkc72aGpnLTcwI2ZQyraidrIcRDoZmO6TCLj3q3XiZQOu/8Ww8ZJ6bodnZIbAm\r\noDoBjAEV2iv1yz/ugdKI416ww4OxwHpdjTWjNPEY2ON8MrAJbRTQM8SBOd/LWo5R\r\nJNV6nva+lETRTLauNV2dE7fv4+aarz80AxUJ+miYRbdFHvax2TI4qK6LqANmTpHn\r\ntfuUPKZLjyg7PXyhlR6dtdmb3ny0tAeEvqSX05VUO+gh5b8Tgn3U6xX0RLfsrpk4\r\n+eWYqglRXd5tabCZqG84kT1xziOOcG0EBR5kYwIDAQABMA0GCSqGSIb3DQEBCwUA\r\nA4IBAQB2+EFc6dsb7EplEtBTpf5e/aIgoVrhFrmeyehSHxatj7qwWbPa/m5tNvXC\r\nL07IT4P6LpYojkyQTF/Wm+twg0DW3I3KRxLe6leJEq7nE2o0eLHINP29qN0gQfvG\r\ntMuYvB/6cYQMkP/uO1/pJX08/3fmj8bRKNeLHrAXnsaMx7bir2l7bFvShVsqYlE5\r\nGxic6MWTTuFKsqzwYqOZf2ohOJHkU2oWB1F7eedgmgwQoW/Klq7JfxR3MSnFmdYe\r\nmg+k1x5ex1fESChFvKE1YqOJsupDO9dBtD66OscasLXwkTkxTzzp7jXp3oSZm91Z\r\nOPWkY/ZBV6CuBtm49/sI1WUP1gMw\r\n-----END CERTIFICATE-----\r\n",

    // PORT
    // @property {Number} HttpPort - Nilai port untuk server http
    // @property {Number} HttpsPort - Nilai port untuk server https
    "HttpPort": 80,
    "HttpsPort": 443,

    // AES
    // @property {String} SecretKey - Enkripsi data internal (AES256)
    // @property {String} SecretIv - Enkripsi data internal (AES256)
    "SecretKey": "bcb155219561b49ef61d50f01a5464b0",
    "SecretIv": "a29f19148df65303",

    // E2E
    // @property {String} AesKey - Enkripsi E2E komunikasi client<>server (AES256)
    // @property {String} AesIv - Enkripsi E2E komunikasi client<>server (AES256)
    "AesKey": "5e3ffbffb5745c77204ecaa4f054eaa0",
    "AesIv": "e534d327e6b84bdd",

    // SQL Server (^2016)
    // @property {String} SqlUser - Koneksi SQL Server otomax username
    // @property {String} SqlPassword - Koneksi SQL Server otomax password
    // @property {String} SqlServer - Koneksi SQL Server otomax server
    // @property {String} SqlDatabase - Koneksi SQL Server otomax database
    // @property {Boolean} SqlTrustedConnection - Koneksi SQL Server otomax trusted connection
    "SqlUser": "",
    "SqlPassword": "",
    "SqlServer": "localhost",
    "SqlDatabase": "otomax",
    "SqlTrustedConnection": true
}

```

Untuk membuat sertifikat yang ditandatangani sendiri, jalankan yang berikut di shell Anda:

```bash
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

> Pastikan `RsaKey(key.pem)`, `SecretKey(16bit/32karakter)` dan `SecretIv(8bit/16karakter)` dibuat dan digunakan untuk server sendiri, tidak boleh dibagikan ke siapapun.

## Tutorial

Koleksi `REST` dengan serangkaian permintaan yang memperkenalkan konsep dasar API.

-   **[<code>HTTP</code> /test/otomax-request-json.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/otomax-request-json.rest)**
-   **[<code>HTTP</code> /test/otomax-request-urlencoded.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/otomax-request-urlencoded.rest)**
-   **[<code>HTTP</code> /test/otomax-request-xml.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/otomax-request-xml.rest)**
-   **[<code>HTTP</code> /test/otomax-request.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/otomax-request.rest)**
-   **[<code>HTTP</code> /test/otomax.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/otomax.rest)**
-   **[<code>HTTP</code> /test/whatsapp.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/whatsapp.rest)**
-   **[<code>HTTP</code> /test/telegram.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/telegram.rest)**
-   **[<code>HTTP</code> /test/jabber.rest](https://raw.githubusercontent.com/ndiing/OtomaX/main/test/jabber.rest)**

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

### [Whatsapp]()

Whatsapp center & sender

-   **[<code>GET</code> /api/whatsapp/v2](./docs/whatsapp/v2/GET-Daftar-koneksi.md)**
-   **[<code>DELETE</code> /api/whatsapp/v2/:id](./docs/whatsapp/v2/DELETE-Hapus-koneksi.md)**
-   **[<code>POST</code> /api/whatsapp/v2/connect](./docs/whatsapp/v2/GET-Buat-koneksi.md)**
-   **[<code>GET</code> /api/whatsapp/v2/connect](./docs/whatsapp/v2/POST-Buat-koneksi.md)**
-   **[<code>POST</code> /api/whatsapp/v2/outbox](./docs/whatsapp/v2/GET-Kirim-pesan.md)**
-   **[<code>GET</code> /api/whatsapp/v2/outbox](./docs/whatsapp/v2/POST-Kirim-pesan.md)**

### [Telegram]()

Telegram center & sender

-   **[<code>GET</code> /api/telegram/v2]()**
-   **[<code>DELETE</code> /api/telegram/v2/:id]()**
-   **[<code>POST</code> /api/telegram/v2/connect]()**
-   **[<code>GET</code> /api/telegram/v2/connect]()**
-   **[<code>POST</code> /api/telegram/v2/outbox]()**
-   **[<code>GET</code> /api/telegram/v2/outbox]()**

### [Jabber]()

Jabber center & sender

-   **[<code>GET</code> /api/jabber/v2]()**
-   **[<code>DELETE</code> /api/jabber/v2/:id]()**
-   **[<code>POST</code> /api/jabber/v2/connect]()**
-   **[<code>GET</code> /api/jabber/v2/connect]()**
-   **[<code>POST</code> /api/jabber/v2/outbox]()**
-   **[<code>GET</code> /api/jabber/v2/outbox]()**

### [Otomax A]()

Otomax Authentication & authorization

-   **[<code>POST</code> /api/v2/sign]()**
-   **[<code>POST</code> /api/v2/login]()**
-   **[<code>POST</code> /api/v2/refresh]()**
-   **[<code>POST</code> /api/v2/custom]()**
-   **[<code>DELETE</code> /api/v2/revoke/:kode]()**
-   **[<code>GET</code> /api/v2/session]()**

### [Otomax B]()

Otomax common request

-   **[<code>GET</code> /api/v2/reseller]()**
-   **[<code>GET</code> /api/v2/pengirim]()**
-   **[<code>GET</code> /api/v2/downline]()**
-   **[<code>GET</code> /api/v2/level]()**
-   **[<code>GET</code> /api/v2/operator]()**
-   **[<code>GET</code> /api/v2/produk]()**
-   **[<code>GET</code> /api/v2/mutasi]()**
-   **[<code>GET</code> /api/v2/format]()**

### [Otomax C]()

Otomax internal request

-   **[<code>GET</code> /api/v2/test]()**
-   **[<code>GET</code> /api/v2/events]()**
-   **[<code>GET</code> /api/v2/outbox]()**
-   **[<code>POST</code> /api/v2/outbox/callback]()**

### [Otomax D]()

Otomax request inbox

-   **[<code>POST</code> /api/v2/:path]()**
-   **[<code>GET</code> /api/v2/:path]()**
