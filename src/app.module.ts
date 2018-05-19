import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './heroes/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [AppController],
  providers: [ AppService ],
})
export class AppModule {}
