# Mini-Projeto - Sistema de Gestão de uma biblioteca

## Índice

1. [Introdução](#1-introdução)
2. [Tecnologias Utilizadas](#2-tecnologias-utilizadas)
3. [Configuração e Execução do Projeto](#3-configuração-e-execução-do-projeto)
   - [Clonar o repositório e instalar as dependências](#31-clonar-o-repositório-e-instalar-as-dependências)
   - [Executar as migrations](#32-executar-as-migrations)
   - [Iniciar a aplicação e testar funcionalidades](#33-iniciar-a-aplicação-e-testar-funcionalidades)
4. [Rotas da API](#4-rotas-da-api)
   - [Autor](#41-autor)
   	- [Criar um Autor](#411-criar-um-autor)
   	- [Listar Autores](#412-listar-autores)
   	- [Listar Autores por ID](#413-listar-autores-por-id)
   	- [Atualizar um Autor](#414-atualizar-um-autor)
   	- [Deletar um Autor](#415-deletar-um-autor)
   - [Auditório](#42-Auditório)
   	- [Criar um Auditório](#421-criar-um-auditorio)
   	- [Listar Auditórios](#422-listar-auditorio)
   	- [Listar Auditórios por ID](#423-listar-auditorio-por-id)
	- [Atualizar um Auditório](#424-atualizar-um-auditorio)
   	- [Deletar um Auditório](#425-deletar-um-auditorio)
6. [Estrutura do Projeto](#5-estrutura-do-projeto)
7. [Contribuições e Melhorias Futuras](#6-contribuições-e-melhorias-futuras)
8. [Vídeos do projeto](#7-vídeo-do-projeto)
   
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

### 4.1 Autor

### 4.1.1 Criar um Autor

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
### 4.1.2 Listar Autores

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
  
 ### 4.1.3 Listar Autores por ID

- **Método**: `GET`
- **Endpoint**: `/autores/:id`
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
  
### 4.1.4 Atualizar um Autor

- **Método**: `PUT`
- **Endpoint**: `/autores/:id`
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

### 4.1.5 Deletar um Autor

- **Método**: `DELETE`
- **Endpoint**: `/autores/:id`
- **Resposta**:

      {
	      "message": "Autor excluído com sucesso"
      }

  ### 4.2 Auditório

  ### 4.2.1 Criar um Auditório
- **Método**: `POST`
- **Endpoint**: `/auditorios`
- **Body**:
  
	  {
		"name": "Auditório Pequeno",
		"capacity": 30,
		"location": "Bloco E",
		"has_projector": true,
		"has_sound_system": true
	  }

- **Resposta**:

	  {
		"name": "Auditório Pequeno",
		"capacity": 30,
		"location": "Bloco E",
		"has_projector": true,
		"has_sound_system": true,
		"created_at": "2025-01-05T21:14:13.283Z",
		"updated_at": "2025-01-05T21:14:13.283Z",
		"id": 19
	  }
  
  ### 4.2.2 Listar Auditórios
- **Método**: `GET`
- **Endpoint**: `/auditorios`
- **Resposta**:

	  [
		{
			"id": 18,
			"name": "Auditório Grande",
			"capacity": 75,
			"location": "Bloco D",
			"has_projector": true,
			"has_sound_system": true,
			"created_at": "2025-01-05T21:00:28.739Z",
			"updated_at": "2025-01-05T21:01:35.206Z"
		},
		{
			"id": 19,
			"name": "Auditório Pequeno",
			"capacity": 30,
			"location": "Bloco E",
			"has_projector": true,
			"has_sound_system": true,
			"created_at": "2025-01-05T21:14:13.283Z",
			"updated_at": "2025-01-05T21:14:13.283Z"
		}
	  ]
  ### 4.2.3 Listar Auditório por ID
- **Método**: `GET`
- **Endpoint**: `/auditorios/:id`
- **Resposta**:

	  {
		"id": 19,
		"name": "Auditório Pequeno",
		"capacity": 30,
		"location": "Bloco E",
		"has_projector": true,
		"has_sound_system": true,
		"created_at": "2025-01-05T21:14:13.283Z",
		"updated_at": "2025-01-05T21:14:13.283Z"
	  }
  
  ### 4.2.4 Atualizar um Auditório
- **Método**: `PUT`
- **Endpoint**: `/auditorios/:id`
- **Body**:

	  {
		"capacity": 75,
		"location": "Bloco A"
	  }

- **Resposta**:

	  {
		"id": 19,
		"capacity": 75,
		"location": "Bloco A",
		"created_at": "2025-01-05T21:14:13.283Z",
		"updated_at": "2025-01-05T21:15:13.547Z"
	  }
  
  ### 4.2.5 Deletar um Auditório
- **Método**: `DELETE`
- **Endpoint**: `/auditorios/:id`
- **Resposta**:

      {
	      "message": "Auditório deletado com sucesso"
      }
---

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

        https://drive.google.com/file/d/1LLkLMxK3uwTuurRBeOL-G22gSszb8DvZ/view?usp=sharing
    
  - Lucas Benkendorf:

        https://drive.google.com/file/d/1E3of1oX9lUJYytI1zAcsa1o17gOMyc9y/view?usp=sharing		
    
  - Gustavo Melo Coelho:
    	`https://drive.google.com/drive/u/0/folders/1tt-RZaRuS2voz41bFbiJNJd9TFS2WYJI`

        
