CREATE TABLE `clients` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`company` text NOT NULL,
	`last_call_at` integer,
	`email` text,
	`phone` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
