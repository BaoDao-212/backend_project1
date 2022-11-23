import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { ACCESS_TOKEN, DATABASE_HOST } from './common/constants/constants';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Request } from 'express';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      context: ({ req, res }: { req: Request; res: Response }) => {
        return { req, res, [ACCESS_TOKEN]: req.get(ACCESS_TOKEN) };
      },
       }),
       TypeOrmModule.forRoot({
        type: 'postgres',
        ...(process.env.DATABASE_URL
          ? {
              url: process.env.DATABASE_URL,
            }
          : {
              host: process.env.DATABASE_HOST,
              port: +process.env.DATABASE_PORT,
              username: process.env.DATABASE_USERNAME,
              password: process.env.DATABASE_PASSWORD,
              database: process.env.DATABASE_NAME,
            }),
        entities: [User],
        synchronize: true,
        ...(process.env.NODE_ENV === 'production'
          ? {
              ssl: true,
              extra: {
                ssl: {
                  require: true,
                  rejectUnauthorized: false,
                },
              },
            }
          : {}),
      }),
    UserModule,
    AuthModule,
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
