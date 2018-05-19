import { Controller, Body, Post, Put, Get, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Controller('heroes')
export class HeroController {
    constructor(private readonly heroservice: HeroService) {}

    @Post()
    async create(@Body() hero: Hero) {
        await this.heroservice.create(hero);
    }

    @Put(':id')
    async update(@Param('id', new ParseIntPipe())  id: number, @Body() hero: Hero) {
        await this.heroservice.update(id, hero);
    }

    @Get()
    async findAll(): Promise<Hero[]> {
        return await this.heroservice.findAll();
    }

    @Get(':id')
    async find(@Param('id', new ParseIntPipe()) id: number): Promise<Hero> {
        return await this.heroservice.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe())  id: number) {
        await this.heroservice.delete(id);
    }
}
