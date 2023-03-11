import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entities';






@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin) 
        private adminRepo: Repository<Admin> 
    ) {}
    
    //busca todo get 
    findAll(){
        this.adminRepo.find();
    }
    //busca de forma individual get por id 
    findOne(id: number): Promise<Admin> {
        return this.adminRepo.findOneBy({id:id});
    }
    //crea el post
    create(body: any) {
        const newTask = this.adminRepo.create(body);
        
        return this.adminRepo.save(newTask);
    }
    //actualiza por id(put)
    async update(id: number, body: any){
        const admin= await this.adminRepo.findOneBy({id:id});
        this.adminRepo.merge(admin, body);
        return this.adminRepo.save(admin)
    }
    //borra por id (delete)
    async delete(id: number) {
        await this.adminRepo.delete(id);
        return true;
    }
}
