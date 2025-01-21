
import { Router } from 'express';
import  Autor  from '../entities/Autor';
import { AppDataSource } from '../database/data-source';

const autorRoutes = Router();

/* Implemente aqui os métodos que irão atender as requisições HTTP para a entidade Autor. */
autorRoutes.get('/', async (req, res) => {
    try {
        const autorRepository = AppDataSource.getRepository(Autor);
        const listaAutores = await autorRepository.find({});
        res.status(200).json(listaAutores);
      } catch (erro) {
        res
          .status(500)
          .json({ message: `${erro} - falha na requisição de buscar Autor` });
      }
})

autorRoutes.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const autorRepository = AppDataSource.getRepository(Autor);
      const autor = await autorRepository.findOne({ where: { id: Number(id) } });
  
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
  
      res.status(200).json(autor);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar autor", error });
    }
  });
  

  autorRoutes.post('/', async (req, res) => {
    const body = req.body;
    const autor = new Autor();
    autor.name = body.name;
    autor.birthDate = body.birthDate;
    autor.biography = body.biography;
    autor.nationality = body.nationality;
    autor.active = true;
    autor.createdAt = new Date();
    autor.updatedAt = new Date();
  
    try {
      const autorRepository = AppDataSource.getRepository(Autor);
      const novoAutor = await autorRepository.save(autor);
      res.status(201).json({ message: "Autor criado com sucesso", autor: novoAutor });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao salvar autor', error });
    }
  });
  

  autorRoutes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, birthDate, biography, nationality } = req.body; // Desestruturação dos campos permitidos
  
    try {
      const autorRepository = AppDataSource.getRepository(Autor);
      const autor = await autorRepository.findOne({ where: { id: Number(id) } });
  
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
  
      autor.name = name ?? autor.name;
      autor.birthDate = birthDate ?? autor.birthDate;
      autor.biography = biography ?? autor.biography;
      autor.nationality = nationality ?? autor.nationality;
  
      const autorAtualizado = await autorRepository.save(autor);
      res.status(200).json({ message: "Autor atualizado com sucesso", autor: autorAtualizado });
    } catch (error) {
      console.error("Erro ao atualizar autor:", error);
      res.status(500).json({ message: "Erro ao atualizar autor", error: error });
    }
  });
    

  autorRoutes.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const autorRepository = AppDataSource.getRepository(Autor);
      const autor = await autorRepository.findOne({ where: { id: Number(id) } });
  
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
  
      await autorRepository.remove(autor);
      res.status(200).json({ message: "Autor excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir autor", error });
    }
  });
  

export default autorRoutes;