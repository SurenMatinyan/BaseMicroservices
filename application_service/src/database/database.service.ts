import { Injectable, OnModuleInit } from '@nestjs/common';
import * as pg from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private connection: Promise<pg.PoolClient>;
  constructor() {
    const pool = new pg.Pool({
      // Should be in Env file
      host: 'application_database',
      database: 'application',
      password: 'asd123zxc123/./,z/',
      port: 5432,
      user: 'db_user',
    });

    this.connection = pool.connect();
  }
  onModuleInit() {
    this.createTable();
  }

  async dbConnection() {
    return await this.connection;
  }

  async createTable() {
    return await (
      await this.dbConnection()
    ).query(
      `CREATE TABLE IF NOT EXISTS store_data (
        id UUID PRIMARY KEY,
        title VARCHAR(255)
    );
    `,
    );
  }
}
