import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    /**
     *
     */
    constructor(private mensajesServices: MensajesService) {
                
    }
    @Post()
    create (@Body() createMessageDto : CreateMensajeDto){
        return 'Mensaeje creado';
    }

    @Get()
    getAll()
    {
        return 'Lista de mensaje';
    }

    @Put(':id')
    update(@Body() updateMessageDto : CreateMensajeDto){
        return 'Mensaje actualizado';
    }

    @Delete(':id')
    remove(){
        return 'Mensaje eliminado';
    }
}