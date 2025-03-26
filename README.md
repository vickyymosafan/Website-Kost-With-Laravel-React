# Kost Website

A modern and professional boarding house (kost) management system built with Laravel, React, and Inertia.js.

## Features

### User Features
- Modern grid-based homepage displaying kost listings
- Detailed kost information with image gallery
- Advanced search and filtering system
- Wishlist functionality
- Online booking system

### Admin Dashboard
- Complete CRUD operations for kost management
- Statistical dashboard
- Image upload with preview
- Booking management
- User management

## Tech Stack

- **Backend:** Laravel 10.x
- **Frontend:** React with Inertia.js
- **Styling:** TailwindCSS
- **Database:** MySQL
- **Image Upload:** FilePond

## Requirements

- PHP >= 8.1
- Node.js >= 16.x
- Composer
- MySQL

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vickyymosafan/Website-Kost-With-Laravel-React.git
cd kost
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install Node.js dependencies:
```bash
npm install
```

4. Configure environment:
```bash
cp .env.example .env
php artisan key:generate
```

5. Set up database:
```bash
php artisan migrate
php artisan db:seed
```

6. Build assets:
```bash
npm run dev
```

7. Start the server:
```bash
php artisan serve
```

## Security

- CSRF protection enabled
- SQL injection prevention
- XSS protection
- Secure file upload validation

## License

This project is licensed under the MIT License.