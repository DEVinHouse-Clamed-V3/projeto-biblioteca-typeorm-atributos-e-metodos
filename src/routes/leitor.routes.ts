import { Router } from 'express';
import { AppDataSource } from '../database/data-source';
import { Leitor } from './../../src/entities/Leitor';

const leitorRoutes = Router();


leitorRoutes.get('/', async (req, res) => {
  try {
    const leitorRepository = AppDataSource.getRepository(Leitor);
    const listaLeitores = await leitorRepository.find({});
    res.status(200).json(listaLeitores);
  } catch (error) {
    res
      .status(500)
      .json({ message: `${error} - Falha na requisição de buscar leitores` });
  }
});


leitorRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const leitorRepository = AppDataSource.getRepository(Leitor);
    const leitor = await leitorRepository.findOne({ where: { id: Number(id) } });

    if (!leitor) {
      return res.status(404).json({ message: 'Leitor não encontrado' });
    }

    res.status(200).json(leitor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar leitor', error });
  }
});


leitorRoutes.post('/', async (req, res) => {
  const {
    name,
    email,
    phone_number,
    birthdate,
    address,
    active,
  } = req.body;

  const leitor = new Leitor();
  leitor.name = name;
  leitor.email = email;
  leitor.phone_number = phone_number;
  leitor.birthdate = birthdate;
  leitor.address = address;
  leitor.active = active;
  leitor.created_at = new Date();
  leitor.updated_at = new Date();

  try {
    const leitorRepository = AppDataSource.getRepository(Leitor);
    const novoLeitor = await leitorRepository.save(leitor);
    res.status(201).json({ message: 'Leitor criado com sucesso', leitor: novoLeitor });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar leitor', error });
  }
});


leitorRoutes.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    phone_number,
    address,
    active,
  } = req.body;

  try {
    const leitorRepository = AppDataSource.getRepository(Leitor);
    const leitor = await leitorRepository.findOne({ where: { id: Number(id) } });

    if (!leitor) {
      return res.status(404).json({ message: 'Leitor não encontrado' });
    }

    leitor.name = name ?? leitor.name;
    leitor.email = email ?? leitor.email;
    leitor.phone_number = phone_number ?? leitor.phone_number;
    leitor.address = address ?? leitor.address;
    leitor.active = active !== undefined ? active : leitor.active;
    leitor.updated_at = new Date();

    const leitorAtualizado = await leitorRepository.save(leitor);
    res.status(200).json({ message: 'Leitor atualizado com sucesso', leitor: leitorAtualizado });
  } catch (error) {
    console.error('Erro ao atualizar leitor:', error);
    res.status(500).json({ message: 'Erro ao atualizar leitor', error });
  }
});


leitorRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const leitorRepository = AppDataSource.getRepository(Leitor);
    const leitor = await leitorRepository.findOne({ where: { id: Number(id) } });

    if (!leitor) {
      return res.status(404).json({ message: 'Leitor não encontrado' });
    }

    await leitorRepository.remove(leitor);
    res.status(200).json({ message: 'Leitor excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir leitor', error });
  }
});

export default leitorRoutes;
