# OrangTuaBerdaya Backend

Backend API untuk aplikasi OrangTuaBerdaya - platform untuk memberdayakan orang tua dalam mendidik dan mengembangkan anak-anak mereka.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Token)
- **File Upload**: Multer
- **Environment**: dotenv
- **Development**: Nodemon

## 📋 Prerequisites

Pastikan Anda telah menginstall:

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- [MySQL](https://www.mysql.com/) (v8.0 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd OrangTuaBerdaya_Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   
   Buat file `.env` di root directory dan isi dengan:
   ```env
   PORT=6060
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   JWT_SECRET="your_jwt_secret_key"
   JWT_REFRESH_SECRET="your_jwt_refresh_secret_key"
   JWT_EXPIRES_IN=1d
   UPLOAD_DIR="./uploads"
   FILE_SIZE_LIMIT=2
   ```

4. **Setup database**
   
   Pastikan MySQL server berjalan, lalu buat database:
   ```sql
   CREATE DATABASE careforce;
   ```

5. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

6. **Run database migrations** (jika ada)
   ```bash
   npx prisma migrate dev
   ```

7. **Start development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
OrangTuaBerdaya_Backend/
├── src/
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server entry point
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   ├── service/            # Business logic services
│   └── utils/
│       └── prisma.js       # Prisma client instance
├── prisma/
│   └── schema.prisma       # Database schema
├── generated/              # Generated Prisma client (ignored by git)
├── uploads/                # File uploads directory
│   ├── cv/                 # CV uploads
│   └── profilePicture/     # Profile picture uploads
├── .env                    # Environment variables (ignored by git)
├── .gitignore             # Git ignore rules
├── Dockerfile             # Docker configuration
├── package.json           # NPM dependencies and scripts
└── README.md              # Project documentation
```

## 🔧 Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

## 🌐 API Endpoints

Base URL: `http://localhost:6060/v1/api`


## 🗄️ Database

Project menggunakan MySQL dengan Prisma ORM. Schema database didefinisikan di `prisma/schema.prisma`.

### Prisma Commands

```bash
# Generate Prisma client
npx prisma generate

# View database in browser
npx prisma studio

# Apply schema changes to database
npx prisma db push

# Create and apply migrations
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset
```

## 🔍 Development

### Logging

Prisma queries akan di-log secara otomatis dalam development mode, termasuk:
- Query SQL
- Parameters
- Duration

### Error Handling

API menggunakan centralized error handling untuk menangani berbagai jenis error:
- Validation errors
- Authentication errors
- Database errors
- File upload errors

## 🐳 Docker

Untuk menjalankan dengan Docker:

```bash
# Build image
docker build -t orangtuaberdaya-backend .

# Run container
docker run -p 6060:6060 orangtuaberdaya-backend
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Team

- **Developer**: [Your Name]
- **Project**: OrangTuaBerdaya

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan buat issue di repository ini atau hubungi tim development.

---

**Happy Coding! 🚀**
