# Mini-Projeto - Sistema de Gestão de uma biblioteca

## Índice

1. [Introdução](#1-introdução)
2. [Tecnologias Utilizadas](#2-tecnologias-utilizadas)
3. [Configuração e Execução do Projeto](#3-configuração-e-execução-do-projeto)
   - [Clonar o repositório e instalar as dependências](#31-clonar-o-repositório-e-instalar-as-dependências)
   - [Executar as migrations](#32-executar-as-migrations)
   - [Iniciar a aplicação e testar funcionalidades](#33-iniciar-a-aplicação-e-testar-funcionalidades)
4. [Rotas da API](#4-rotas-da-api)
   - [Criar um Autor](#41-criar-um-autor)
   - [Listar Autores](#42-listar-autores)
   - [Listar Autores por ID](#43-listar-autores-por-id)
   - [Atualizar um Autor](#44-atualizar-um-autor)
   - [Deletar um Autor](#45-deletar-um-autor)
5. [Estrutura do Projeto](#5-estrutura-do-projeto)
6. [Contribuições e Melhorias Futuras](#6-contribuições-e-melhorias-futuras)
7. [Vídeos do projeto](#7-vídeo-do-projeto)
   
---

## 1. Introdução

Este projeto tem como objetivo desenvolver um sistema para gerenciar os diferentes aspectos de uma biblioteca. A aplicação foi implementada utilizando Node.js, TypeORM, e PostgreSQL para criar uma estrutura que permita realizar operações CRUD (Create, Read, Update, Delete) sobre os principais elementos que compõem o funcionamento de uma biblioteca: Autores, Livros, Leitores e Auditório.

---

## 2. Tecnologias Utilizadas

  - Linguagem: TypeScript
  - Ambiente de execução: Node.js
  - Framework: Express.js
  - Banco de Dados: PostgreSQL
  - Outras Ferramentas: Insomnia para testar rotas e TypeORM para gerenciar banco de dados

---

## 3. Configuração e Execução do Projeto

  ### 3.1 Clonar o repositório e instalar as dependências
  
  1. Clone o repositório: 
     
    git clone https://github.com/DEVinHouse-Clamed-V3/projeto-biblioteca-typeorm-atributos-e-metodos.git

  2. Navegue até o diretório do projeto e instale as dependências no terminal:

    npm install


  ### 3.2 Executar as migrations
  
  1. Criar a base de dados com o nome "biblioteca" no PostgresSQL:
  
    CREATE DATABASE biblioteca;


  2. Executar as migrations:

    npm run migration:run
    

  ### 3.3 Iniciar a aplicação e testar funcionalidades:

  1. Executar o comando abaixo no terminal:

    npm run dev

  2. Utilizar o Insomnia com as rotas abaixo para testar as funcionalidades.

---

## 4. **Rotas da API**

### 4.1. Criar um Autor

- **Método**: `POST`
- **Endpoint**: `/autores`
- **Body**:

      {
        "name": "Gabriel Garcia Marquez",
        "birthDate": "1927-03-06",
        "biography": "Gabriel García Márquez foi um escritor colombiano, conhecido por suas obras de realismo          mágico, como 'Cem Anos de Solidão'.",
        "nationality": "Indefinida"
      }
  
- **Resposta**:

      {
	      "message": "Autor criado com sucesso",
	      "autor": {
		      "name": "Gabriel Garcia Marquez",
		      "birthDate": "1927-03-06",
		      "biography": "Gabriel García Márquez foi um escritor colombiano, conhecido por suas obras de realismo        mágico, como 'Cem Anos de Solidão'.",
		      "nationality": "Indefinida",
		      "active": true,
	    	  "createdAt": "2025-01-06T03:09:57.172Z",
	    	  "updatedAt": "2025-01-06T03:09:57.172Z",
	    	  "id": 1
	      }
      }
### 4.2 Listar Autores

- **Método**: `GET`
- **Endpoint**: `/autores`
- **Resposta**:

      [
	      {
		      "id": 1,
		      "name": "Gabriel Garcia Marquez",
		      "birthDate": "1927-03-06T03:00:00.000Z",
		      "biography": "Gabriel García Márquez foi um escritor colombiano, conhecido por suas obras de realismo           mágico, como 'Cem Anos de Solidão'.",
		      "nationality": "Indefinida",
		      "active": true,
		      "createdAt": "2025-01-06T03:51:21.282Z",
		      "updatedAt": "2025-01-06T03:51:21.282Z"
	      },
      	{
		      "id": 2,
		      "name": "Joaquim Maria Machado de Assis",
		      "birthDate": "1839-06-21T03:06:28.000Z",
		      "biography": "Joaquim Maria Machado de Assis foi um escritor brasileiro, amplamente reconhecido por            críticos, estudiosos, escritores e leitores como o maior expoente da literatura brasileira.",
		      "nationality": "Brasileiro",
		      "active": true,
		      "createdAt": "2025-01-06T03:54:08.558Z",
		      "updatedAt": "2025-01-06T03:54:08.558Z"
	      }
      ]
  
 ### 4.3 Listar Autores por ID

- **Método**: `GET`
- **Endpoint**: `/autores:id`
- **Resposta**:

		{
  		  "id": 1,
  		  "name": "Gabriel Garcia Marquez",
		  "birthDate": "1927-03-06T03:00:00.000Z",
		  "biography": "Gabriel García Márquez foi um escritor colombiano, conhecido por suas obras de realismo mágico, como 'Cem Anos de Solidão'.",
		  "nationality": "Indefinida",
		  "active": true,
		  "createdAt": "2025-01-06T03:51:21.282Z",
		  "updatedAt": "2025-01-06T03:51:21.282Z"
	    	},
  
### 4.4 Atualizar um Autor

- **Método**: `PUT`
- **Endpoint**: `/autores:id`
- **Body**:

      {
        "name": "Gabriel Garcia Marquez",
        "birthDate": "1927-03-12",
        "biography": "Atualizando biografia.",
        "nationality": "Colombiano",
        "active": true
      }

- **Resposta**:
  
      {
      	"message": "Autor atualizado com sucesso",
      	"autor": {
      		"id": 1,
      		"name": "Gabriel Garcia Marquez",
      		"birthDate": "1927-03-12",
      		"biography": "Atualizando Biogragia.",
      		"nationality": "Colombiano",
      		"active": true,
      		"createdAt": "2025-01-06T03:51:21.282Z",
      		"updatedAt": "2025-01-06T04:02:38.203Z"
      	}
      }

### 4.5 Deletar um Autor

- **Método**: `DELETE`
- **Endpoint**: `/autores:id`
- **Resposta**:

      {
	      "message": "Autor excluído com sucesso"
      }


## 5. Estrutura do Projeto

  1. A organização do projeto segue a estrutura modular para facilitar a expansão e manutenção do código:

    /src
      /database
        /migrations
          - [migrationsAuditorio]
          - [migrationsAutor]
          - [migrationsLeitor]
          - [migrationsLivro] 
      - data-source.ts
      /entities
        - Auditorio.ts
        - Autor.ts
        - Leitor.ts
        - Livro.ts
      /routes
        - auditorio.routes.ts
        - autor.routes.ts
        - leitor.routes.ts
        - livro.routes.ts
      - index.ts
      - server.ts
  
---

  ## 6. Contribuições e Melhorias Futuras

  - Sugestões de melhorias futuras:
    - Melhorar validações nas rotas.

---

  ## 7. Vídeo do projeto
  
  - Lucas Becker:

        https://drive.google.com/file/d/10qP8LnPuYAf3uYQg1hlcuPa0CqmSyE9c/view?usp=drive_link
      
  - Laís Becker:

        -
    
  - Lucas Benkendorf:

        -
    
  - Gustavo Melo Coelho:

        -
