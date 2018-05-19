import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
    private readonly heroes: Map<number, Hero> = new Map<number, Hero>();

    create(hero: Hero) {
        this.heroes.set(hero.id, hero);
    }

    findAll(): Hero[] {
        return Array.from(this.heroes.values());
    }

    findById(id: number): Hero {
        return this.heroes.get(id);
    }

    update(id: number, hero: Hero) {
        if (this.heroes.has(id))
            this.heroes.set(id, hero);
    }

    delete(id: number) {
        this.heroes.delete(id);
    }
}
