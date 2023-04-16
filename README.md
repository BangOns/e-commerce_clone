# E-commerce with Fake API

Tujuan saya membuat ini hanya untuk melatih dalam memahami seluruh pelajaran yang saya pelajari dan yang melihat repo ini mohon kasih saran dan kritik dalam web ini selain design

## Fitur

- Auth(Login ,Logout ,Register)
- Menggunakan metode CRUD
- Menampilkan product yang dipilih user
- Menampilkan product yang di buat user

## Tech Stack

- React JS
- Redux
- Redux Thunk
- Axios
- json-server

## Run Project

Clone the project

```bash
  git clone https://link-to-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Start the databese

```bash
  json-server -w db.json -p 3004
```

## Databese local

Disini saya telah menyiapkan databese local yang sudah saya siapkan di dalam folder , berikut databese local :

```bash
{
  "cart": [
    {
      "barang": "barang",
      "harga": 10000,
      "user": "Syahroni",
      "img": "https://random.imagecdn.app/500/150",
      "id": 1
    }
  ],
  "keranjang": [
    {
      "id": 1,
      "Syahroni": [
        {
          "id": 1,
          "barang": "barang",
          "price": 10000,
          "harga": 10000,
          "item": 1,
          "user": "Syahroni",
          "takebarang": "Syahroni",
          "img": "https://random.imagecdn.app/500/150"
        }
      ]
    }
  ],
  "profile": [
    {
      "name": "Syahroni",
      "password": "123456",
      "role": "admin",
      "id": 2
    },
    {
      "name": "Roni",
      "password": "1234456",
      "role": "guest",
      "id": 3
    }
  ]
}
```

## Authors

[@Syahroni](https://github.com/BangOns)
