import { AppDataSource } from "../database/data-source";
import Livro from "../entities/Livro";

async function testConnection() {
  await AppDataSource.initialize();
  const livro = new Livro();
  livro.title = "Teste";
  livro.description = "Descrição de teste";
  livro.publication_date = new Date("2023-01-01");
  livro.isbn = "1234567890";
  livro.page_count = 100;
  livro.language = "Português";

  await AppDataSource.manager.save(livro);
  console.log("Livro salvo com sucesso!");
}

testConnection().catch((error) => console.error("Erro:", error));