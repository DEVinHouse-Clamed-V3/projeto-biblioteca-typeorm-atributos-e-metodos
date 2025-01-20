import { Router } from "express";
import { AppDataSource } from "../database/data-source";
import Livro from "../entities/Livro";


const livroRouter = Router();

// Criar um novo livro
livroRouter.post("/", async (req, res) => {
    try {
        const { title, description, publication_date, isbn, page_count, language } = req.body;

        const livro = new Livro();
        livro.title = title;
        livro.description = description;
        livro.publication_date = new Date(publication_date);
        livro.isbn = isbn;
        livro.page_count = page_count;
        livro.language = language;

        const savedLivro = await AppDataSource.manager.save(livro);
        if (!title || !isbn) {
            res.status(400).json({ message: "Campos obrigatórios não foram preenchidos" });
        }
        res.status(201).json(savedLivro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar o livro" });
    }
});

// Buscar todos os livros
livroRouter.get("/", async (_, res) => {
    try {
        const livros = await AppDataSource.manager.find(Livro);
        if (livros.length == 0) {
            return res.status(404).json({ message: "Nenhum livro foi cadastrado" });
        }
        res.status(200).json(livros);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar os livros" });
    }
});

// Buscar um livro específico por ID
livroRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const livro = await AppDataSource.manager.findOneBy(Livro, { id: parseInt(id) });

        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }

        res.status(200).json(livro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar o livro" });
    }
});

// Atualizar informações de um livro
livroRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, publication_date, isbn, page_count, language } = req.body;

        const livro = await AppDataSource.manager.findOneBy(Livro, { id: parseInt(id) });

        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }

        livro.title = title;
        livro.description = description;
        livro.publication_date = new Date(publication_date);
        livro.isbn = isbn;
        livro.page_count = page_count;
        livro.language = language;

        const updatedLivro = await AppDataSource.manager.save(livro);
        res.status(200).json(updatedLivro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar o livro" });
    }
});

// Deletar um livro
livroRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const livro = await AppDataSource.manager.findOneBy(Livro, { id: parseInt(id) });

        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }

        await AppDataSource.manager.remove(livro);
        res.status(200).json({ message: "Livro deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao deletar o livro" });
    }
});

export default livroRouter;