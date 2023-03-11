import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from '../service/admin.service';


@Controller('admin')
export class AdminController {
    constructor (
        private adminService: AdminService
    ) {}
    @Get()
       //no se usa como contador de click
    getAll(){
        return this.adminService.findAll();
    }
    //para usar en contador de click get:1
    @Get(':id')
    getOne(@Param('id') id: number){
        return this.adminService.findOne(id);
    }
    //no se usa como contador de click
    @Post()
    create(@Body() body: any){
        return this.adminService.create(body);
    }

    //para usar como contador de click ej: put:1
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.adminService.update(id, body);
    }
     //para usar como contador de click ej: delete:1
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.adminService.delete(id);
    }

}
