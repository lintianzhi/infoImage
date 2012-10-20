drop table if exists users;
drop table if exists resumes;
drop table if exists LinkedInToken;

create table users(
		username string primary key,
		nickname string not null,
		email string not null,
		password string not null
		);
create table resumes(
		id integer primary key autoincrement,
		outresume string not null,
		username string,
		uptime date not null default (datetime('now','localtime')),
		foreign key (username) references users(username) on delete cascade
		);
create table OriResumes(
        id integer primary key autoincrement,
        inresume string not null,
        username string not null,
        foreign key (username) references users(username) on delete cascade
        );
create table LinkedInToken(
        username string primary key,
        Token string not null,
        Token_Secret string not null,
        foreign key (username) references users(username) on delete cascade
        );
