import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    /**
     *
     */
    constructor(@InjectRepository(Mensaje) private readonly mensajeRepository : Repository<Mensaje>) {}

    async getAll(){
        return await this.mensajeRepository.find();
    }

    async createMessage(newMessage : CreateMensajeDto){
       const nuevo = new Mensaje();
       nuevo.message = newMessage.message;
       nuevo.nick = newMessage.nick;
       return await this.mensajeRepository.save(nuevo);
    }

    async updateMessage(idMessage: number, messageToUpdate : CreateMensajeDto){
        const messageAActualizar = await this.mensajeRepository.findOneById(idMessage);
        messageAActualizar.nick = messageToUpdate.nick;
        messageAActualizar.message = messageToUpdate.message;
        return await this.mensajeRepository.save(messageAActualizar);
    }

    async deleteMessage(idMessage : number){
        return await this.mensajeRepository.delete(idMessage);
    }
}