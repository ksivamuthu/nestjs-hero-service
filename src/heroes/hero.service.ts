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
        return await this.heroRepo.findOneOrFail({ where: { id } });
    }

    async update(id: number, hero: Hero) {
        const existing = await this.heroRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.heroRepo.update(existing._id, hero);
        }
    }

    async delete(id: number) {
        const existing = await this.heroRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.heroRepo.delete(existing._id);
        }
    }
}
