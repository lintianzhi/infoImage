drop table if exists users;
drop table if exists resumes;

create table users(
		username string primary key,
		nickname string not null,
		email string unique,
		password string not null
		);
create table resumes(
		id integer primary key autoincrement,
		outresume string not null,
		username string,
		uptime date not null default (datetime('now','localtime')),
		foreign key (username) references users(username) on delete cascade
		);
