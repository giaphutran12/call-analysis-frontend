import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const clients = sqliteTable('clients', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  company: text('company').notNull(),
  lastCallAt: integer('last_call_at'), // epoch ms for portability
  email: text('email'),
  phone: text('phone'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});