import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HeroService {
    constructor(
        @InjectRepository(Hero)
        private readonly heroRepo: Repository<Hero>,
      ) {}

    async create(hero: Hero) {
      await this.heroRepo.save(hero);
    }

    async findAll(): Promise<Hero[]> {
        return await this.heroRepo.find();
    }

    async findById(id: number): Promise<Hero> {
        return await this.heroRepo.findOne(id);
    }

    async update(id: number, hero: Hero) {
        await this.heroRepo.update(id, hero);
    }

    async delete(id: number) {
        await this.heroRepo.delete(id);
    }
}
