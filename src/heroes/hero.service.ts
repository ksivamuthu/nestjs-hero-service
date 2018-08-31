import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
    constructor(
        @InjectRepository(Hero)
        private readonly heroRepo: Repository<Hero>,
      ) {}

    public async create(hero: Hero) {
      await this.heroRepo.save(hero);
    }

    public async findAll(): Promise<Hero[]> {
        return this.heroRepo.find();
    }

    public async findById(id: number): Promise<Hero> {
        return this.heroRepo.findOneOrFail({ where: { id } });
    }

    public async update(id: number, hero: Hero) {
        const existing = await this.heroRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.heroRepo.save({...existing, ...hero});
        }
    }

    public async delete(id: number) {
        const existing = await this.heroRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.heroRepo.remove(existing);
        }
    }
}
