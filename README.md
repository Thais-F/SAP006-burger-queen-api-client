# Burger Queen (API Client)

## Índice

- [1. Sobre o projeto](#1-sobre-o-projeto)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Aplicação](#3-aplicação)
- [4. Como Utilizar](#4-como-utilizar)
- [5. Histórias de Usuários](#5-histórias-de-usuários)
- [6. Tecnologias Utilizadas](#6-tecnologias-utilizadas)

---

## 1. Sobre o projeto

O projeto **BURGUER QUEEN** foi criado no bootcamp da [Laboratoria Brasil](https://www.laboratoria.la/br). 

🍔 Desenvolvido por [Isis Noronha]( https://github.com/isisnoron) e [Thais Fernandes](https://github.com/Thais-F), utilizando React.
Você pode acessar a aplicação [aqui](https://magic-burger.netlify.app/), utilizando um dos logins de teste abaixo: 

<div align='center'>
 
> |      |          Salão          |      Cozinha             |
> |------|-------------------------|------------------------- |
> | 📨  |  atendente@gmail.com   |   cozinheiro@gmail.com   |
> | 🔐  |         123456         |         123456           |

</div>


Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: interface (cliente) e API (servidor). Nosso
cliente nos pediu para desenvolver uma interface que se integre com a API
que outra equipe de desenvolvedoras está trabalhando simultaneamente.


## 2. Resumo do projeto

Somos o **MagicBurger**, um fast food 24h. Na pandemia nosso comércio teve um salto de atendimentos, e por isso precisamos de um sistema que facilite o gerenciamento de pedidos.

> Nós temos 2 menus. Um muito simples para o café da manhã:
>
> | Ítem                           | Preço R$ |
> | ------------------------------ | -------- |
> | Café americano                 | 5        |
> | Café com leite                 | 7        |
> | Sanduíche de presunto e queijo | 10       |
> | Suco de fruta natural          | 7        |
>
> E outro menu para o resto do dia:
>
> | Ítem                     | Preço  |
> | ------------------------ | ------ |
> | **Hambúrgueres**         | **R$** |
> | Hambúrguer simples       | 10     |
> | Hambúrguer duplo         | 15     |
> | **Acompanhamentos**      | **R$** |
> | Batata frita             | 5      |
> | Anéis de cebola          | 5      |
> | **Bebidas**              | **R$** |
> | Água 500ml               | 5      |
> | Água 750ml               | 7      |
> | Bebida gaseificada 500ml | 7      |
> | Bebida gaseificada 750ml | 10     |
>
>
> Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
> seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

Além disso a cliente nos deu um [link da documentação](https://
/)
que especifica o comportamento esperado da API que iremos expor por HTTP.
Lá podemos encontrar todos os detalhes dos _endpoints_, como por exemplo
que parâmetros esperam, o que devem responder, etc.

O objetivo principal é aprender a construir uma _interface web_ usando o
_framework_ escolhido (React). Esse framework front-end ataca
o seguinte problema: **como manter a interface e estado sincronizados**.
Portanto, esta experiência espera familiarizá-la com o conceito de _estado da
tela_, e como cada mudança no estado vai refletir na interface (por exemplo,
toda vez que adicionamos um _produto_ para um _pedido_, a interface deve
atualizar a lista de pedidos e o total).

## 3. Aplicação

### Paleta de Cores
![img](./src/img/paleta-bq.png)

### Interface
_colocar print/gif aplicação aqui_


## 4. Como utilizar

- A tela inicial da aplicação traz a **Página de Login** que apresenta ao usuário as opções de fazer o login com email e senha, já cadastrados, para entrar na plataforma do MagicBurger ou prosseguir para a página de cadastro;
-	Na Página de **Cadastro**, o funcionário pode cadastrar-se inserindo seus dados com nome, e-mail, senha e cargo;
-	Ao realizar qualquer uma dessas formas de acesso, o usuário será encaminhado para o seu respectivo ambiente:
    1.**Salão:** para os garçons/garçonetes, onde ocorrerá a anotação e encaminhamento dos pedidos para a cozinha.
    2. **Cozinha:** para os cozinheiros que receberão a demanda dos pedidos realizados.
    3.	**Pedidos Prontos:** para os garçons/garçonetes, onde ocorrerá a exibição de pedidos finalizados para serem entregues.


## 5. Histórias de Usuários

#### [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais

_Eu, como garçom/garçonete quero entrar no sistema de pedidos._


#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

_Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem._


#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

_Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder
marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente._


#### [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

_Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los
rapidamente aos clientes._



## 6. Tecnologias Utilizadas

<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
  <img align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
</div>
