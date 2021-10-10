# GetUOHOrderList

Lihat daftar riwayat transaksi

```
GET /api/mitratokopedia/v1/GetUOHOrderList
```

## Query

| Nama                | Keterangan                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pengirim`          | ID Sesi yang digunakan                                                                                                                                                                                                                                                                                                                                                      |
| `vertical_category` | Pilih salah satu dari = mitra_voucher_game,mitra_marketplace,mitra_b2b2c,mitra_pulsa,mitra_paket_data,mitra_listrik_pln,mitra_angsuran_kredit,mitra_air_pdam,mitra_bpjs,mitra_telkom,mitra_internet_tv_kabel,mitra_tagihan,mitra_donasi,mitra_pajak,mitra_samsat,mitra_emoney,mitra_gas_pgn,mitra_pasca_bayar,mitra_penerimaan_negara,mitra_dompet_digital / biarkan kosong |
| `status`            | Pilih salah satu dari Dalam Proses,Berhasil,Tidak Berhasil atau biarkan kosong                                                                                                                                                                                                                                                                                              |
| `searchable_text`   |
| `create_time_start` |
| `create_time_end`   |

## Example

### Request

```
GET http://localhost/api/mitratokopedia/v1/GetUOHOrderList
?pengirim=session1
&vertical_category=mitra
&status=
&searchable_text=
&create_time_start=2021-10-04
&create_time_end=
```
