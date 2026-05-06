FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git curl zip unzip libssl-dev \
    libzip-dev libpng-dev libonig-dev

RUN docker-php-ext-install pdo mbstring zip exif pcntl bcmath

RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

# 🔥 CLAVE: evitar scripts de Laravel en build
RUN composer install --no-dev --optimize-autoloader --no-scripts

EXPOSE 9000

CMD ["php-fpm"]