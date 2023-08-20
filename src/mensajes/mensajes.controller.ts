import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { response } from 'express';
import { promises } from 'dns';

@Controller('mensajes')
export class MensajesController {
    /**
     *
     */
    constructor(private mensajesServices: MensajesService) {
                
    }

    @Post()
    create (@Body() createMessageDto : CreateMensajeDto, @Res() response){
        this.mensajesServices.createMessage(createMessageDto).then( mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch(()=>{            
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en creacion del mensaje'});
        });
    }

    @Get()
    getAll(@Res() response)
    {
        this.mensajesServices.getAll().then(mesaggeList=>{
            response.status(HttpStatus.OK).json(mesaggeList);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la obtencion de mensajes'});
        })
    }

    @Put(':id')
    update(@Body() updateMessageDto : CreateMensajeDto, @Res() response, @Param('id') idMensaje ){
        this.mensajesServices.updateMessage(idMensaje, updateMessageDto).then(mensaje =>{
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la edicion del mensaje'});
        })
    }

    @Delete(':id')
    remove(@Res() response, @Param('id') idMensaje ){
        this.mensajesServices.deleteMessage(idMensaje).then(res=>{
            response.status(HttpStatus.OK).json(res);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la eliminacion del mensaje'});
        });
    }
}