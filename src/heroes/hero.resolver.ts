import { Query, Resolver } from '@nestjs/graphql';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Resolver('HeroResolver')
export class HeroResolver {
    constructor(private readonly heroservice: HeroService) {} 

    @Query('allHeroes')
    public async allHeroes(): Promise<Hero[]> {
        return this.heroservice.findAll();
    }
}
