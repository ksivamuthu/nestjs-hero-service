import { Controller, Body, Post, Put, Get, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@Controller('heroes')
@ApiUseTags('heroes')
export class HeroController {
    constructor(private readonly heroservice: HeroService) {}

    @Post()
    @ApiOperation({ title: 'Create Hero' })
    @ApiResponse({ status: 201, description: 'The hero has been successfully created.'})
    async create(@Body() hero: Hero) {
        await this.heroservice.create(hero);
    }

    @Put(':id')
    @ApiOperation({ title: 'Update Hero' })
    @ApiResponse({ status: 200, description: 'The hero has been successfully updated.'})
    async update(@Param('id', new ParseIntPipe())  id: number, @Body() hero: Hero) {
        await this.heroservice.update(id, hero);
    }

    @Get()
    @ApiOperation({ title: 'Get all heroes' })
    @ApiResponse({ status: 200, description: 'Returns the list of heroes'})
    async findAll(): Promise<Hero[]> {
        return await this.heroservice.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Get a hero by id' })
    @ApiResponse({ status: 200, description: 'Return a hero'})
    async find(@Param('id', new ParseIntPipe()) id: number): Promise<Hero> {
        return await this.heroservice.findById(id);
    }

    @Delete(':id')
    @ApiOperation({ title: 'Delete a hero by id' })
    @ApiResponse({ status: 200, description: 'Delete a hero'})
    async remove(@Param('id', new ParseIntPipe())  id: number) {
        await this.heroservice.delete(id);
    }
}
