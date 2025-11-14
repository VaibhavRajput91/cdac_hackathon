create schema movie_booking;

use movie_booking;

create table shares (
    review_id integer,
    user_id integer
);

create table users (
    id integer primary key auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20),
    email varchar(40) unique not null,
    password varchar(100) unique not null,
    mobile char(10),
    birth date
);

create table reviews (
    id int primary key auto_increment,
    movie_id integer,
    review text,
    rating int check(rating >= 1 and rating <= 10),
    user_id integer,
    modified timestamp,
    foreign key (user_id) references users(id)
);

create table movies (
    id int primary key auto_increment,
    title text,
    release date
);