import { Router } from 'express';
import { AppDataSource } from '../database/data-source';
import Auditorio from '../entities/Auditorio';

const auditorioRoutes = Router();
const auditoriosRepository = AppDataSource.getRepository(Auditorio)

auditorioRoutes.get('/', async (request, response) => {
    try{
        const auditorios = await auditoriosRepository.find()
        response.json(auditorios)
    }
    catch(error){
        response.status(500).json({error: 'Erro ao buscar auditórios'})
    }
})

auditorioRoutes.get('/:id', async (request, response) => {
    try{
        const id = Number(request.params.id)
        const auditorioDB = await auditoriosRepository.findOne({where: {id: id}})

        if(!auditorioDB){
            response.status(404).json({error: 'Auditório não encontrado'})
        } else {
            response.json(auditorioDB)
        }
    }
    catch(error){
        response.status(500).json({error: 'Erro ao buscar auditório'})
    }
})

auditorioRoutes.post('/', async (request, response) => {
    const body = request.body

    try{
        if(!body.name){
            response.status(400).json({error: 'O campo nome é obrigatório'})
        } else if (!body.capacity){
            response.status(400).json({error: 'O campo capacidade é obrigatório'})
        } else if (!body.location){
            response.status(400).json({error: 'O campo local é obrigatório'})
        } else if (body.has_projector === ''){
            response.status(400).json({error: 'É obrigatório informar se possui projetor'})
        } else if (body.has_sound_system === ''){
            response.status(400).json({error: 'É obrigatório informar se posssui equipamento de som'})
        } else {
            const auditorio = new Auditorio()
    
            auditorio.name = body.name
            auditorio.capacity = body.capacity
            auditorio.location = body.location
            auditorio.has_projector = body.has_projector
            auditorio.has_sound_system = body.has_sound_system
            auditorio.created_at = body.created_at
            auditorio.updated_at = body.updated_at
    
            const auditorioCreated = await auditoriosRepository.save(auditorio)
    
            response.status(201).json(auditorioCreated)
        }
    }

    catch(error){
        console.log(error)
        response.status(500).json({error: 'Erro ao cadastrar auditório'})
    }
})

auditorioRoutes.put('/:id', async (request, response) => {
    try{
        const id = Number(request.params.id)
        const body = request.body

        const auditorioDB = await auditoriosRepository.findOne({where: {id: id}})

        if(!auditorioDB){
            response.status(404).json({error: "Auditório não localizado, nada foi atualizado."})
        } else {
            auditorioDB.name = body.name
            auditorioDB.capacity = body.capacity
            auditorioDB.location = body.location
            auditorioDB.has_projector = body.has_projector
            auditorioDB.has_sound_system = body.has_sound_system
            auditorioDB.updated_at = new Date()

            await auditoriosRepository.save(auditorioDB)
            response.json(auditorioDB)
        }
    }
    catch{

    }
})

auditorioRoutes.delete('/:id', async (request, response) => {
    try{
        const id = Number(request.params.id)
        const productDeleted =  await auditoriosRepository.delete(id)
        
        if(productDeleted.affected === 0){
            response.status(404).json({error: 'Auditório não localizado, nada foi deletado.'})
        } else {
            response.status(204).json()
        }
    }
    catch{
        response.status(500).json({error: 'Erro ao deletar auditório'})
    }
})

export default auditorioRoutes;