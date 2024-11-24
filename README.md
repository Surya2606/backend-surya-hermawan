# BACKEND-SURYA-HERMAWAN

----------------

## About The Project

ini adalah dokumentasi api untuk eksplorasi data yang di generate dari aplikasi *[Postman](https://www.postman.com/)* .

Projek ini adalah projek membuat sebuah Backend untuk marketplace merah kuning hijau, yang mencakup beberapa Endpoint untuk bisa di konsumi nantinya sebagai data di bagian web.

#### Built With

- [ExpressJS](https://expressjs.com/)

- [MySQL](https://www.mysql.com/)
  
#### Scheme Database
![Screenshot from 2024-11-23 00-47-07](https://github.com/user-attachments/assets/c8c4fa97-dd77-4aa8-b332-7bce5d4f2c48)

---

## Getting Started

Berikut panduan untuk menjalankan projek ini secara lokal. untuk bisa menjalankan projek secara lokal adapun langkah-langkah yang harus diikuti.

#### Prerequisites

- npm
  
  ```text
  npm install npm@latest -g
  ```

atau bisa menggunakan yarn

- yarn
  
  ```text
  npm install -g yarn
  ```

#### Installation

1. Clone repository

```textile
git clone https://github.com/Surya2606/backend-surya-hermawan.git
```

2. Install paket pendukung dalam `node_module`
- dengan NPM

```textile
npm install
```

- dengan Yarn

```textile
yarn add
```

3. Konfigurasi Database , silahkan sesuaikan pada halaman .env

```
DB_HOST=localhost
DB_USER= (your user)
DB_PASSWORD= (your password)
DB_NAME=marketplace
```

### How to Use

- Register
Di API Register kita menginput data baru untuk dipakai untuk login nantinya, jika dia seorang merchant maka role nya adalah merchant, jika customer rolenya adalah customer
```
localhost:8080/auth/register
```
![Screenshot from 2024-11-23 00-53-07](https://github.com/user-attachments/assets/47aedfed-a7c2-4e3d-85ea-a265e249a943)


- Login
Selanjutnya melakukan login dengan email dan password yang sudah dibuat sebelumnya, dan jika berhasil login maka akan diberi token.
```
localhost:8080/auth/login
```
![Screenshot from 2024-11-23 00-53-28](https://github.com/user-attachments/assets/2da4fd5c-a762-4484-bb7d-3f554e3c2de2)


- Cara Memasukan Token JWT
Masuk ke menu Authotization di *[Postman](https://www.postman.com/)*,Ubah Auth Type nya menjadi "Bearer Token" dan masukan token yang diberikan sewaktu login

![Screenshot from 2024-11-23 00-54-28](https://github.com/user-attachments/assets/0fe452c9-7ada-479a-8bae-dd5e09566061)

![Screenshot from 2024-11-23 00-54-41](https://github.com/user-attachments/assets/66148506-5641-4bc7-91a4-bc59729bf167)


- Add Product / List Product
Jika anda adalah seorang Merchant maka bisa melakukan create product dengan method POST, dan jika anda seorang customer maka menggunakan method GET seperti contoh dibawah ini. Dan jangan lupa memasukan token JWT nya.
```
localhost:8080/products
```
![Screenshot from 2024-11-23 00-53-47](https://github.com/user-attachments/assets/2aec71a5-65ea-497f-b59e-cdb471011942)

   
- Transaksi
Menu ini hanya bisa digunakan oleh customer saja, dengan Method POST. Dan jangan lupa memasukan token JWT nya. 
```
localhost:8080/transactions
```
![Screenshot from 2024-11-23 00-53-59](https://github.com/user-attachments/assets/b2528296-047c-45c9-876e-4173ee321001)


- View Transaksi
View transaksi untuk merchant, jangan lupa login sebagai merchant dan masukan token JWT nya
sebagai berikut :
```
localhost:8080/transaction/merchant
```
![Screenshot from 2024-11-23 00-55-21](https://github.com/user-attachments/assets/76d27c30-8d3c-416f-8809-e6a38cf97ccb)

View transaksi untuk customer, jangan lupa login sebagai customer dan masukan token JWT nya
sebagai berikut :
```
localhost:8080/transaction/customer
```
![Screenshot from 2024-11-23 00-56-25](https://github.com/user-attachments/assets/7e8090bb-6941-41ce-bd78-63ed9085d0c0)

### Contribution

berkontribusi membuat komunitas open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. dan dapat memajukan projek ini, sangat diperislahkan dan buat ***branch*** baru yah.

#### LICENSE

Distributed under the MIT License. See [LICENSE](https://github.com/dhiyo7/Blanja-RESTful-API/blob/main/LICENSE) for more information.
