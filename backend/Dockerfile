FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git curl zip unzip \
    libssl-dev \
    pkg-config \
    libzip-dev \
    libpng-dev \
    libonig-dev

# instalar extensiones base
RUN docker-php-ext-install pdo mbstring zip exif pcntl bcmath

# 🔥 MongoDB extension (CRÍTICO)
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# comprobar que existe (debug útil)
RUN php -m | grep mongodb

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

# 🔥 IMPORTANTE: NO scripts
RUN composer install --no-dev --optimize-autoloader --no-scripts