# [Request Inbox]()

<!-- @category Common -->

```bash
GET /api/otomax/v1/:path
```

## [Path]()

Path | Params | Description
--- | --- | ---
`/inbox` | `pesan` | Request inbox manual
`/aktifkan-dl` | `kodereseller`,`pin` | Aktifkan downline/reseller
`/batal-transaksi` | `trxid`,`pin` | Batalkan transaksi yang belum diproses
`/batal-transfer-saldo` | `kodereseller`,`jumlah`,`pin` | Cancel balance transfer
`/cek-harga` | `kodeproduk` | Cek harga produk
`/cek-markup` | `kodereseller`,`pin` | Check downline's markup
`/cek-markup-produk` | `kodereseller`,`kodeproduk`,`pin` | Check product markup
`/cek-markup-produk2` | `kodereseller`,`pin` | Check all product markups
`/cek-mutasi` |  | Cek N (lihat Setting.LimitCekMutasi) mutasi saldo/deposit terakhir
`/cek-mutasi2` |  | Cek mutasi saldo terakhir, khusus manual, tiket, dan transfer saldo
`/cek-oid` | `pin` | Check current OID for OtomaX HTH
`/cek-saldo` | `pin` | Cek saldo akhir
`/cek-saldo-dl` | `kodereseller` | Cek saldo downline
`/cek-status-transaksi` | `nomor tujuan` | Cek status transaksi
`/cek-status-transaksi2` | `tujuan` | Cek status transaksi
`/cek-status-transaksi3` | `tanggal`,`tujuan` | Cek status transaksi
`/cek-transaksi-akhir` |  | Cek status N (lihat Setting.LimitCekTransaksiAkhir) transaksi terakhir
`/daftar-dl` | `nama`,`alamat`,`nomorhp`,`pin` | Daftarkan downline/reseller baru
`/daftar-dl2` | `nama`,`alamat`,`nomorhp`,`markup`,`pin` | Daftarkan downline/reseller baru
`/daftar-dl3` | `nama`,`alamat`,`nomorhp`,`kodelevel`,`pin` | Daftarkan downline/reseller baru
`/daftar-non-member` | `name`,`address`,`pin` | Registration of non member
`/hapus-gtalk` | `email`,`pin` | Hapus pengirim tipe GTalk
`/hapus-gtalk2` | `kodereseller`,`email`,`pin` | Hapus pengirim tipe GTalk untuk downline
`/hapus-markup-produk` | `kodereseller`,`pin`,`kodeproduk` | Delete product markup
`/hapus-markup-produk2` | `kodereseller`,`pin` | Delete product markup
`/hapus-markup-produk3` | `kodeproduk`,`pin` | Delete product markup
`/hapus-nomor` | `tujuan`,`pin` | Hapus pengirim tipe SMS
`/hapus-nomor2` | `kodereseller`,`tujuan`,`pin` | Hapus pengirim tipe SMS
`/hapus-wa` | `nomor`,`pin` | Hapus nomor WA
`/hapus-ym` | `yahooid`,`pin` | Hapus pengirim tipe YM
`/hapus-ym2` | `kodereseller`,`yahooid`,`pin` | Hapus pengirim tipe YM dari downline
`/laporan-mutasi` | `tanggal` | Cek laporan mutasi saldo per tanggal
`/laporan-transaksi` | `tanggal` | Cek laporan transaksi per tanggal
`/lihat-hadiah-poin` |  | View gift list
`/list-dl` |  | Lihat daftar downline
`/list-dl2` | `kodereseller` | Lihat daftar downline dari downline (sub-downline)
`/list-pengirim` |  | Lihat daftar pengirim semua tipe
`/list-pengirim-gtalk` |  | Lihat daftar pengirim tipe GTalk
`/list-pengirim-gtalk2` | `kodereseller` | Lihat daftar pengirim tipe GTalk untuk downline
`/list-pengirim-sms` |  | Lihat daftar pengirim tipe SMS
`/list-pengirim-sms2` | `kodereseller` | Lihat daftar pengirim tipe SMS dari downline
`/list-pengirim-ym` |  | Lihat daftar pengirim tipe YM
`/list-pengirim-ym2` | `kodereseller` | Lihat daftar pengirim tipe YM dari downline
`/non-aktifkan-dl` | `kodereseller`,`pin` | Non-aktifkan downline/reseller
`/reset-pin` | `kodereseller`,`pin` | Reset pin member
`/tambah-gtalk` | `email`,`pin` | Tambah pengirim tipe GTalk
`/tambah-gtalk2` | `kodereseller`,`email`,`pin` | Tambah pengirim tipe GTalk untuk downline
`/tambah-nomor` | `tujuan`,`pin` | Tambah pengirim tipe SMS
`/tambah-nomor2` | `kodereseller`,`tujuan`,`pin` | Tambah pengirim tipe SMS untuk downline
`/tambah-wa` | `number`,`pin` | Tambah nomor WA
`/tambah-ym` | `yahooid`,`pin` | Tambah pengirim tipe YM
`/tambah-ym2` | `kodereseller`,`yahooid`,`pin` | Tambah pengirim tipe YM untuk downline
`/tiket-deposit` | `jumlah`,`pin` | Tiket Deposit
`/transaksi` | `kodeproduk`,`tujuan`,`pin` | Transaksi pengisian pulsa
`/transaksi10` | `pin`,`kodeproduk`,`tujuan` | Transaksi pengisian pulsa
`/transaksi11` | `pin`,`nominal`,`tujuan` | Transaksi pengisian pulsa
`/transaksi12` | `pin`,`tujuan`,`nominal` | Transaksi pengisian pulsa
`/transaksi13` | `pin`,`tujuan`,`kodeproduk` | Transaksi pengisian pulsa
`/transaksi14` | `pin`,`kodeproduk`,`counter`,`tujuan` | Transaksi pengisian pulsa
`/transaksi15` | `tujuan`,`nominal`,`counter`,`pin` | Transaksi pengisian pulsa
`/transaksi16` | `pin`,`nominal`,`tujuan` | Transaksi pengisian pulsa
`/transaksi17` | `pin`,`tujuan`,`nominal` | Transaksi pengisian pulsa
`/transaksi18` | `pin`,`tujuan`,`kodeproduk` | Transaksi pengisian pulsa
`/transaksi19` | `pin`,`kodeproduk`,`tujuan` | Transaksi pengisian pulsa
`/transaksi2` | `pin`,`kodeproduk`,`tujuan` | Transaksi pengisian pulsa
`/transaksi20` | `pin`,`nominal`,`tujuan` | Transaksi pengisian pulsa
`/transaksi21` | `pin`,`tujuan`,`nominal` | Transaksi pengisian pulsa
`/transaksi22` | `pin`,`tujuan`,`kodeproduk` | Transaksi pengisian pulsa
`/transaksi23` | `tujuan`,`pin`,`kodeproduk`,`qty` | Transaksi pengisian pulsa
`/transaksi24` | `kodeproduk`,`qty`,`tujuan`,`pin`,`counter` | Transaksi pengisian pulsa
`/transaksi25` | `kodeproduk`,`tujuan`,`pin`,`trxid` | Transaksi pengisian pulsa
`/transaksi26` | `kodeproduk`,`tujuan`,`pin`,`enduser` | Transaksi pengisian pulsa
`/transaksi27` |  | Transaksi pengisian pulsa
`/transaksi28` | `nominal`,`counter`,`tujuan`,`pin` | Transaksi pengisian pulsa
`/transaksi29` | `kodeproduk`,`qty`,`tujuan`,`pin` | Transaksi pengisian pulsa
`/transaksi3` | `counter`,`kodeproduk`,`qty`,`tujuan`,`pin` | Transaksi pengisian pulsa
`/transaksi4` | `kodeproduk`,`nominal`,`tujuan`,`pin`,`enduser` | Transaksi pengisian pulsa
`/transaksi5` |  | Transaksi pengisian pulsa
`/transaksi6` | `kodeproduk`,`pin` | Transaksi pengisian pulsa
`/transaksi7` | `nominal` | Transaksi pengisian pulsa
`/transaksi8` | `kodeproduk` | Transaksi pengisian pulsa
`/transaksi9` | `nominal`,`pin` | Transaksi pengisian pulsa
`/transaksi-bebas-dobel` |  | Transaksi pengisian pulsa TANPA pengecekan dobel
`/transfer-saldo` | `kodereseller`,`jumlah`,`pin` | Transfer saldo/deposit ke downline/reseller
`/transfer-saldo-lintas` |  | Allows transfer balance across the membership network
`/tukar-komisi` | `jumlah`,`pin` | Tukar komisi tunda dalam bentuk deposit
`/tukar-komisi2` |  | Tukar semua komisi tunda dalam bentuk deposit
`/tukar-poin` | `kode`,`pin` | Menukar poin
`/ubah-alamat-ip` | `newip`,`pin` | Change IP Address
`/ubah-level` | `kodereseller`,`kodelevel`,`pin` | Ubah level downline
`/ubah-markup` | `kodereseller`,`markup`,`pin` | Change downline's markup
`/ubah-markup-produk` | `kodereseller`,`pin`,`kodeproduk`,`markup` | Change product markup
`/ubah-markup-produk2` | `pin`,`kodeproduk`,`markup` | Change product markup for all downlines
`/ubah-nama` | `nama`,`pin` | Ubah nama
`/ubah-oid` | `oid`,`pin` | Change OID for OtomaX HTH
`/ubah-password-ip` | `oldpassword`,`newpassword`,`pin` | Change IP Password
`/ubah-pin` | `pinlama`,`pinbaru` | Ubah PIN
`/ubah-report-url` | `newurl`,`pin` | Change Report URL

> Params mungkin berbeda sesuai settingan pada `format request`

## [Steps]()

Tambahkan label `otomax_web_server` di im center untuk menggunakan request inbox

<p>
    <figure>
        <img src="https://raw.githubusercontent.com/ndiing/OtomaX/main/docs/images/otomax-ox-label.png" alt="OtomaX IM Label" />
        <figcaption>Setting OtomaX IM Label</figcaption>
    </figure>
</p>

## [Example]()

### [Request]()

```bash
GET http://localhost/api/otomax/v1/inbox
```

### [Response]()

```json
{"code":200,"message":"OK","data":[]}
```