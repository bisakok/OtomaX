# Extended OtomaX Software

> Status dalam pengembangan, `Bug report` dan `Feature request` dapat dikirim ke [Issues](https://github.com/ndiing/OtomaX/issues/new/choose).

## Pemasangan

Pastikan komputer sudah terpasang [nodejs](https://nodejs.org/en/download/).

```bash
// 1
git clone https://github.com/ndiing/OtomaX.git
// 2
cd OtomaX
// 3
npm i
//4
npm run start
```

### Konfigurasi

Setting dapat disesuaikan di `./config.json`

```js
{
    // Lokasi database
    "DB_PATH": "C:\\Users\\Ndiing\\Documents\\OtomaX2\\db\\",
    
    // Lokasi data
    "DATA_PATH": "C:\\Users\\Ndiing\\Documents\\OtomaX2\\data",
    
    // RSA Private Key (Tidak untuk dibagikan)
    "PRIVATE_KEY": "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEpAIBAAKCAQEA85H0st4fHtcYUmWwsnjQCvb4ZIMDmp7i05JkXaO6xRhJsopi\r\nWyqkc72aGpnLTcwI2ZQyraidrIcRDoZmO6TCLj3q3XiZQOu/8Ww8ZJ6bodnZIbAm\r\noDoBjAEV2iv1yz/ugdKI416ww4OxwHpdjTWjNPEY2ON8MrAJbRTQM8SBOd/LWo5R\r\nJNV6nva+lETRTLauNV2dE7fv4+aarz80AxUJ+miYRbdFHvax2TI4qK6LqANmTpHn\r\ntfuUPKZLjyg7PXyhlR6dtdmb3ny0tAeEvqSX05VUO+gh5b8Tgn3U6xX0RLfsrpk4\r\n+eWYqglRXd5tabCZqG84kT1xziOOcG0EBR5kYwIDAQABAoIBAA3DJndg05NThf1J\r\n36UF7INiFwDe4jo/VgOsVt1vneL7D1b2OL5791TO1sFABVu89pcMp5xmVZpk+1K9\r\nx1MBaTNhrj6bTNV9PJgwjG0HBTYs7/bWVChjfqjhetGcAERetWRCeBeYxxYU/9sn\r\nTtfmuvUH1maS2/alObMfJPB33vFdFo/YxAdOvBI46TR9d3QdKep95dTLFb2RtgIj\r\nw7q9FKb52oZ6mgYBqEqg+yQI2ps7EsmdWGobp33nIaKHIEMebbWEVrHtqg6+J03X\r\nOmsqrTjAdHULJDEc4vdPkBSrXFz1mbszQCTvaXx1r7nQ9J8IRMvQEe3xlhCldacx\r\nslPI+akCgYEA/vtzC8UNqn8Cvv6AosP5vma86DeAYHXSpADoHCZNVQoOvYlUGIaZ\r\nhPn8qbewmNGoTHj0kt1wQcmSkxd8uhHA9dsITh+pyocPUcYSiQSawJ4JvInbP0Ds\r\n1JHp2NPBgWJe7y8FYBHlMhSZnaJBv9nZfbIWAsShyJzJFQTzXN/V7UUCgYEA9IrY\r\nW9ZcNzSOV9cerlI37Cq52T7gNU3mXWxVcWyXFEUBDYaX0aSfYlx1qSRKBRUmoKpl\r\nrV/DjhKpkGTQKN7ykwzWElD1rYCdtQ9hb22jxfcj8pI1LHXf3BDToRiLMzC/QnAX\r\nzHMPGNFc4pIEEibD+KEvimrRciWQhAVpGBNtAYcCgYAaHDeYsfIHToBCfJ9Bi53s\r\nYGrhwKU1u3r5blpWX5m1ppUB1ak15bqcwlicLII58+YvBofM7j4Ljo+i3lnYV+8R\r\nff9ouJdTdOcdsZG+VClgpg5LLzazUHuv/M0cdfqvvBoKlh8PymVU7oUYfkALXEyI\r\nMY9Nc0M53sw8icg973HhnQKBgQDpknjHdz7LR/qxsfpPHJ7nh4POGf1DTK29DA2s\r\nccD4DlTMG4OFLU1DQPbtYIkGw8YKbdcCO1boq7CkB3a/ovtlMzyBcCzI1PFNkGxL\r\nZxinrL/8IGSDm+7/Hl9VHsFOWsBD8Bb7I+cGmGq0yizzPW2vXB2xgweclH6taxGP\r\nenaCnwKBgQCC/jZ4YkZ5QZJvFg7G5LXIzqpFGLOkgPwLeNwi3F+S9Eg1HpxIoo+r\r\nGZEipOFLAS9oD6eC2VgYKwW3/KREUzBjtaLoYAxgBnArvPnMtpm9MoGznkb0rSJH\r\nxkJU+f5z4uDmhXynaKJqMNgTG4kINv4JoAwV7FFy2DIQmIVh3BgWpg==\r\n-----END RSA PRIVATE KEY-----\r\n",
    
    // RSA Public Key (Digunakan untuk client)
    "PUBLIC_KEY": "-----BEGIN CERTIFICATE-----\r\nMIIDETCCAfkCFGI8N0cFpKrexVykZRbYn/EObEX2MA0GCSqGSIb3DQEBCwUAMEUx\r\nCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRl\r\ncm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMjEwOTI3MTA0NjAyWhcNNDkwMjExMTA0\r\nNjAyWjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UE\r\nCgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOC\r\nAQ8AMIIBCgKCAQEA85H0st4fHtcYUmWwsnjQCvb4ZIMDmp7i05JkXaO6xRhJsopi\r\nWyqkc72aGpnLTcwI2ZQyraidrIcRDoZmO6TCLj3q3XiZQOu/8Ww8ZJ6bodnZIbAm\r\noDoBjAEV2iv1yz/ugdKI416ww4OxwHpdjTWjNPEY2ON8MrAJbRTQM8SBOd/LWo5R\r\nJNV6nva+lETRTLauNV2dE7fv4+aarz80AxUJ+miYRbdFHvax2TI4qK6LqANmTpHn\r\ntfuUPKZLjyg7PXyhlR6dtdmb3ny0tAeEvqSX05VUO+gh5b8Tgn3U6xX0RLfsrpk4\r\n+eWYqglRXd5tabCZqG84kT1xziOOcG0EBR5kYwIDAQABMA0GCSqGSIb3DQEBCwUA\r\nA4IBAQB2+EFc6dsb7EplEtBTpf5e/aIgoVrhFrmeyehSHxatj7qwWbPa/m5tNvXC\r\nL07IT4P6LpYojkyQTF/Wm+twg0DW3I3KRxLe6leJEq7nE2o0eLHINP29qN0gQfvG\r\ntMuYvB/6cYQMkP/uO1/pJX08/3fmj8bRKNeLHrAXnsaMx7bir2l7bFvShVsqYlE5\r\nGxic6MWTTuFKsqzwYqOZf2ohOJHkU2oWB1F7eedgmgwQoW/Klq7JfxR3MSnFmdYe\r\nmg+k1x5ex1fESChFvKE1YqOJsupDO9dBtD66OscasLXwkTkxTzzp7jXp3oSZm91Z\r\nOPWkY/ZBV6CuBtm49/sI1WUP1gMw\r\n-----END CERTIFICATE-----\r\n",
    
    // Port untuk akses http
    "HTTP_PORT": 80,
    
    // Port untuk akses https
    "HTTPS_PORT": 443,

    // AES Private Key, Iv (Tidak untuk dibagikan)
    "PRIVATE_AES_KEY": "2f3a9325342741e717e1fd90e95bbe50",
    "PRIVATE_AES_IV": "f8de8dc5342583d8",

    // AES Private Key, Iv (Digunakan untuk client)
    "PUBLIC_AES_KEY": "f3f7d30b2f70bcced978f7cd8a3a3fab",
    "PUBLIC_AES_IV": "b54bcef421c71602",
    
    // Koneksi ke SQL Server yang digunakan OtomaX
    "OTOMAX_USER": "",
    "OTOMAX_PASSWORD": "",
    "OTOMAX_SERVER": "localhost",
    "OTOMAX_DATABASE": "otomax",
    "OTOMAX_TRUSTED_CONNECTION": true,

    // Whitelist IP untuk Local / Otoritas penuh
    "WHITELIST_IP": "127.0.0.1,192.168.137.1",

    // Kontrol Akses API untuk owner, member, shared dan guest
    "ROLE_BASED_ACCESS_CONTROLL": [
        { "_id": "App", "roles": { "guest": ".*" }, "path": "^/?(?:$|\\?.*)" },
        { "_id": "Whatsapp", "roles": { "owner": ".*" }, "path": "^/api/whatsapp/v\\d+/?([^/]+)?(?:$|\\?.*)" },
        { "_id": "WhatsappConnect", "roles": { "owner": ".*" }, "path": "^/api/whatsapp/v\\d+/[^/]+/connect(?:$|\\?.*)" },
        { "_id": "WhatsappOutbox", "roles": { "owner": ".*" }, "path": "^/api/whatsapp/v\\d+/[^/]+/outbox(?:$|\\?.*)" },
        { "_id": "WhatsappEvent", "roles": { "owner": ".*" }, "path": "^/api/whatsapp/v\\d+/[^/]+/event(?:$|\\?.*)" },
        { "_id": "Telegram", "roles": { "owner": ".*" }, "path": "^/api/telegram/v\\d+/?([^/]+)?(?:$|\\?.*)" },
        { "_id": "TelegramConnect", "roles": { "owner": ".*" }, "path": "^/api/telegram/v\\d+/[^/]+/connect(?:$|\\?.*)" },
        { "_id": "TelegramOutbox", "roles": { "owner": ".*" }, "path": "^/api/telegram/v\\d+/[^/]+/outbox(?:$|\\?.*)" },
        { "_id": "TelegramEvent", "roles": { "owner": ".*" }, "path": "^/api/telegram/v\\d+/[^/]+/event(?:$|\\?.*)" },
        { "_id": "Jabber", "roles": { "owner": ".*" }, "path": "^/api/jabber/v\\d+/?([^/]+)?(?:$|\\?.*)" },
        { "_id": "JabberConnect", "roles": { "owner": ".*" }, "path": "^/api/jabber/v\\d+/[^/]+/connect(?:$|\\?.*)" },
        { "_id": "JabberOutbox", "roles": { "owner": ".*" }, "path": "^/api/jabber/v\\d+/[^/]+/outbox(?:$|\\?.*)" },
        { "_id": "JabberEvent", "roles": { "owner": ".*" }, "path": "^/api/jabber/v\\d+/[^/]+/event(?:$|\\?.*)" },
        { "_id": "OtomaxFormat", "roles": { "guest": ".*" }, "path": "^/api/v\\d+/format(?:$|\\?.*)" },
        { "_id": "OtomaxDaftar", "roles": { "guest": ".*" }, "path": "^/api/v\\d+/daftar-non-member(?:$|\\?.*)" },
        { "_id": "OtomaxSign", "roles": { "guest": ".*" }, "path": "^/api/v\\d+/sign(?:$|\\?.*)" },
        { "_id": "OtomaxVerify", "roles": { "guest": ".*" }, "path": "^/api/v\\d+/verify(?:$|\\?.*)" },
        { "_id": "OtomaxCredential", "roles": { "owner": ".*", "member": ".*" }, "path": "^/api/v\\d+/credential(?:$|\\?.*)" },
        { "_id": "OtomaxRevoke", "roles": { "owner": ".*", "member": ".*" }, "path": "^/api/v\\d+/revoke/[^/]+(?:$|\\?.*)" },
        { "_id": "OtomaxPengirim", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/pengirim(?:$|\\?.*)" },
        { "_id": "OtomaxReseller", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/reseller(?:$|\\?.*)" },
        { "_id": "OtomaxDownline", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/downline(?:$|\\?.*)" },
        { "_id": "OtomaxOperator", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/operator(?:$|\\?.*)" },
        { "_id": "OtomaxProduk", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/produk(?:$|\\?.*)" },
        { "_id": "OtomaxMutasi", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/mutasi(?:$|\\?.*)" },
        { "_id": "OtomaxInbox", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/(?:t(?:rans(?:fer-saldo-lintas|aksi(?:2[0-9]|1[0-9]|[3-9]))|iket-deposit)|cek-(?:status-transaksi[23]|transaksi-akhir|m(?:arkup-produk|utasi)2|harga|oid)|(?:transaksi-bebas-dobe|ubah-(?:report-ur|leve))l|cek-(?:s(?:tatus-transaksi|aldo)|m(?:arkup(?:-produk)?|utasi))|(?:hapus-markup-produk|daftar-dl)[23]|(?:list-pengirim|tambah|hapus)-gtalk2|batal-trans(?:fer-saldo|aksi)|hapus-markup-produk|(?:list-pengirim|tambah|hapus)-gtalk|ubah-markup-produk2|ubah-markup(?:-produk)?|(?:list-(?:pengirim-sms|dl)|(?:list-pengirim|tambah)-ym|tambah-nomor|tukar-komisi|hapus-(?:nomor|ym))2|list-(?:pengirim-sms|dl)|lihat-hadiah-poin|daftar-non-member|laporan-transaksi|(?:list-pengirim|tambah)-ym|ubah-(?:password|alamat)-ip|(?:non-)?aktifkan-dl|trans(?:fer-saldo|aksi2?)|laporan-mutasi|list-pengirim|tambah-nomor|tukar-komisi|cek-saldo-dl|hapus-(?:nomor|ym)|tukar-poin|daftar-dl|reset-pin|(?:ubah-nam|tambah-w|hapus-w)a|ubah-pin|ubah-oid|inbox)(?:$|\\?.*)" },
        { "_id": "OtomaxOutbox", "roles": { "owner": ".*" }, "path": "^/api/v\\d+/outbox(?:$|\\?.*)" },
        { "_id": "OtomaxWebhook", "roles": { "owner": ".*" }, "path": "^/api/v\\d+/webhook(?:$|\\?.*)" },
        { "_id": "OtomaxEvent", "roles": { "owner": ".*", "member": ".*", "shared": ".*" }, "path": "^/api/v\\d+/event(?:$|\\?.*)" }
    ]
}
```

## Dokumentasi

Digunakan untuk kebutuhan pengembangan `Client`, `Server` dan `Public`

### OtomaX

#### Authentication & Authorization

Digunakan untuk Akses & login

-   [`POST /sign`]() - Login reseller
-   [`POST /verify`]() - Konfirmasi dan generate token untuk `Login`, `Refresh`, dan `Shared` token
-   [`GET /credential`]() - Menampilkan semua token
-   [`DELETE /revoke/:kode`]() - Logout / Cabut token

#### Common

Digunakan untuk reseller

-   [`GET /reseller`]() - Menampilan data reseller dan downline
-   [`GET /pengirim`]() - Menampilan data pengirim reseller dan downline
-   [`GET /downline`]() - Menampilan data downline
-   [`GET /operator`]() - Menampilan data operator yang tersedia untuk reseller dan downline
-   [`GET /produk`]() - Menampilan data produk yang tersedia untuk reseller dan downline
-   [`GET /mutasi`]() - Menampilan data mutasi `transaksi`, `saldo`, dll
-   [`GET /format`]() - Menampilan format request
-   [`GET /event`]() - Menampilan data live/stream

#### Request

Digunakan untuk penanganan request ke inbox

-   [`GET /:nama2`]() - Format request disesuaikan di `OtomaX` > `Setting` > `Format Request`
-   [`POST /:nama2`]() - Format request disesuaikan di `OtomaX` > `Setting` > `Format Request`

#### Internal

Digunakan untuk mengolah proses yang digunakan untuk server

-   [`GET /webhook`]() - HTTP Request GET & POST, Center Sender `Whatsapp`, `Telegram` dan `Jabber`
-   [`GET /outbox`]() - Push pesan ke outbox untuk diteruskan

### Whatsapp (Center dan Sender)

-   [`GET /`]() - Menampilkan semua sesi yang di koneksikan
-   [`DELETE /:id_sesi`]() - hapus sesi dengan id
-   [`GET /:id_sesi/event`]() - Live/Stream `Open`,`Close`,`ConnectionPhoneChange`,`Qr`,`Inbox`,`Outbox`
-   [`POST /:id_sesi/connect`]() - Membuat koneksi ke whatsapp
-   [`GET /:id_sesi/outbox`]() - Kirim pesan
-   [`POST /:id_sesi/outbox`]() - Kirim pesan

### Telegram (Center dan Sender)

-   [`GET /`]() - Menampilkan semua sesi yang di koneksikan
-   [`DELETE /:id_sesi`]() - hapus sesi dengan id
-   [`GET /:id_sesi/event`]() - Live/Stream `Start`,`Contact`,`Inbox`,`Open`,`Outbox`
-   [`POST /:id_sesi/connect`]() - Membuat koneksi ke whatsapp
-   [`GET /:id_sesi/outbox`]() - Kirim pesan
-   [`POST /:id_sesi/outbox`]() - Kirim pesan

### Jabber (Center dan Sender)

-   [`GET /`]() - Menampilkan semua sesi yang di koneksikan
-   [`DELETE /:id_sesi`]() - hapus sesi dengan id
-   [`GET /:id_sesi/event`]() - Live/Stream `Online`,`Inbox`,`Error`,`Subscribe`,`Open`,`Outbox`
-   [`POST /:id_sesi/connect`]() - Membuat koneksi ke whatsapp
-   [`GET /:id_sesi/outbox`]() - Kirim pesan
-   [`POST /:id_sesi/outbox`]() - Kirim pesan
