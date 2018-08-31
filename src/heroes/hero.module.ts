import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero.model';
import { HeroResolver } from './hero.resolver';
import { HeroService } from './hero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HeroService, HeroResolver],
})
export class HeroModule {}
