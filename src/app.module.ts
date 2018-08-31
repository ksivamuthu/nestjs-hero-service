import { Module } from '@nestjs/common';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServer } from 'apollo-server-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './heroes/hero.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(), HeroModule, GraphQLModule],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {}

  public configureGraphQL(app: any) {
    // Same as nestjs docs - graphql guide
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    const schema = this.graphQLFactory.createSchema({
      resolverValidationOptions: { allowResolversNotInSchema: true },
      typeDefs,
    });

    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app });
  }
}
