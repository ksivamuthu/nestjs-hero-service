import { Controller, Body, Post, Put, Get, Delete, Param } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Controller('heroes')
export class HeroController {
    constructor(private readonly heroservice: HeroService) {}

    @Post()
    async create(@Body() hero: Hero) {
        this.heroservice.create(hero);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() hero: Hero) {
        this.heroservice.update(id, hero);
    }

    @Get()
    async findAll(): Promise<Hero[]> {
        return this.heroservice.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Hero> {
        return this.heroservice.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        this.heroservice.delete(id);
    }
}
