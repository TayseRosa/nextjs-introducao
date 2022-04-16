<h1 align="center"> Next JS</h1>

#Índice
- [🛠 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Tecnologias utilizadas neste projeto](#-tecnologias-utilizadas-neste-projeto)
- [Diferenças entre CSR, SSR, SSG](#diferenças-entre-csr-ssr-ssg)
  - [**CSR - Client-Side Rendering**](#csr---client-side-rendering)
  - [**SSR - Server-Side Rendering**](#ssr---server-side-rendering)
  - [**SSG - Static-Site Generation**](#ssg---static-site-generation)
  - [**Hook useRouter(propriedades, funções, eventos)**](#hook-userouterpropriedades-funções-eventos)
  - [**Usando o componente Link**](#usando-o-componente-link)
  - [**Local apropriado para importar o arquivo de estilização css(Bootstrap)**](#local-apropriado-para-importar-o-arquivo-de-estilização-cssbootstrap)
  - [**Usando CSS Modules no NextJS 1**](#usando-css-modules-no-nextjs-1)
  - [**Usando o CSS Modules no NextJs(página)**](#usando-o-css-modules-no-nextjspágina)
  - [**Usando o css-in-js no NextJs**](#usando-o-css-in-js-no-nextjs)
  - [**Montando um layout único (template)**](#montando-um-layout-único-template)
  - [**Criando menu de navegação no NextJS Parte 1**](#criando-menu-de-navegação-no-nextjs-parte-1)
  - [**Criando menu de navegação no NextJS Parte 2**](#criando-menu-de-navegação-no-nextjs-parte-2)
- [📥 Como usar](#-como-usar)
- [🚀 Autor](#-autor)
  

---
# 🛠 Sobre o projeto

<p>Projeto desenvolvido para treinar habilidades de Next JS</p>


# 🚀 Tecnologias utilizadas neste projeto

- [x] NEXT JS
- [x] TYPESCRIPT
- [x] CONSULTA DE API
- [x] CSR, SSR, SSG
- [x] Cache
- [x] getStaticProps
- [x] ISR - INCREMENTAL STATIC GENERATION
- [x] VARIAVEIS DE AMBIENTE
- [x] SCRIPTS EXTERNOS NO NEXT JS
- [x] HOOK useRouter(PROPRIEDADES, FUNÇÕES, EVENTOS)
- [x] USANDO O COMPONENTE LINK
- [x] ESTILIZAÇÃO GLOBAL NO NEXT JS (BOOTSTRAP)
- [x] USANDO O CSS MODULES NO NEXTJS(COMPONENTES)
- [x] USANDO O CSS MODULES NO NEXTJS(PÁGINA)
- [x] USANDO CSS-IN-JS NO NEXT JS
- [x] MONTANDO UM LAYOUT ÚNICO (TEMPLATE)
- [x] CRIANDO MENU DE NAVEGAÇÃO NO NEXTJS 1 

# Diferenças entre CSR, SSR, SSG
## **CSR - Client-Side Rendering**

Comportamento natural do React JS, operações no lado do cliente, renderiza no dispositivo do client.

## **SSR - Server-Side Rendering**

Processamento no servidor, e joga o RESULTADO processado para o cliente
(getServerSideProps)

## **SSG - Static-Site Generation**

Carrega a estrutura básica já processada no servidor(exemplo: Carrega o logado ou nao do usuario) e o miolo do site é carregado no cliente.
(getStaticPaths | getStaticProps)

## **Hook useRouter(propriedades, funções, eventos)**
Propriedades:
- const { slug } = router.query
- {router.pathname}
- isFallback(loading..) ex: {router.isFallback.toString()} 
- router.push 


Ex: 
```js
    <button onClick={()=>{
        router.push('/sobre/pedro')
    }}> Ir para a página de Pedro 
    </button>
```
outra forma de fazer a mesma coisa..
```js
    <button onClick={()=>{
        router.push({
            pathname: '/sobre/[slug]',
            query: { slug: 'pedro' }
        });
    }}> Ir para a página de Pedro 
    </button>

```

## **Usando o componente Link**
Ex: 
```js
import Link from "next/link";

<Link href="/pagina/subpagina"> Nome do Link </Link>
```

## **Local apropriado para importar o arquivo de estilização css(Bootstrap)**
- [x] Arquivo: _app.tsx
```js 
import 'bootstrap/dist/css/bootstrap.css'

<button className="btn btn-primary">
    Aumentar
</button>
```

## **Usando CSS Modules no NextJS 1**
- [x] Na raiz do projeto, criar a seguinte estrutura:
components/MyButton/index.tsx
components/MyButton/MyButton.module.css

no arquivo MyButton.module.css:
```js
.myBtn{
  background-color: violet;
  color:#fff;
  padding:10px 20px;
  border:0;
  border-radius: 5px;
  font-size: 16;
  font-weight: bold;
}
```

no arquivo index.tsx, (criar o componente do botão):
```js
import styles from './MyButton.module.css';

type Props = {
  label:string;
  onClick: ()=>void;
}

export const MyButton = ({ label, onClick }:Props) => {
  return(
    <button  onClick={onClick} className={styles.myBtn}> {label} </button>
  )
}
```
no arquivo que quiser chamar o componente MyButton, fazer da seguinte forma:
```js
import { MyButton } from "../../components/MyButton";
.
.
.
<MyButton label="Aumentar" onClick={handleContadorBtn} />
```
## **Usando o CSS Modules no NextJs(página)**
Diferentemente da importação nos componentes, quando se trata de Páginas, devemos importar direto do styles/globals.css, criando um arquivo por exemplo:
Sobre.module.css:
```js
.sobreTitle{
  color:blue
}
```
E chamamos este arquivo lá no index:
```js
import styles from '../../styles/Sobre.module.css'

<h1 className={styles.sobreTitle}> Pagina sobre </h1>
```

## **Usando o css-in-js no NextJs**
Dentro de qualquer arquivo:
```js

<ul className="lista">
    <li> Teste 1 </li>
    <li> Teste 2 </li>
</ul>


<style jsx>{`
        .lista{
          backgroundColor:#ff00ff;
        }
      `}
</style>
```
## **Montando um layout único (template)**
Criar a estrutura /components/Layout/index.tsx
```js
import { ReactElement } from 'react'
import styles from './Layout.module.css'

type Props={
  children: ReactElement
}

export const Layout = ({ children }:Props) => {
  return(
    <>
    <header>
      <h1>Cabeçalho</h1>
    </header>

    <main>{ children }</main>

    <footer>Todos os direitos reservados</footer>
    </>
  )
}
```
Criar a estrutura /components/Layout/Layout.module.css para estilização.

Em _app deixar da seguinte forma:
```js
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```
## **Criando menu de navegação no NextJS Parte 1**
components/Navbar/index.tsx
```js
import Link from "next/link";
import { navigationLinks} from "../../utils/data";
import styles from './Navbar.module.css'

export const Navbar = () => {
  return(
    <ul className={styles.container}>
      {navigationLinks.map((link, index)=>(
        <li key={index} className={styles.linkItem}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
```

Menus de navegação: utils/data.ts 
```js
export const navigationLinks = [
  { label:'Home',path:'/' },
  { label:'Sobre',path:'/sobre' },
  { label:'Blog',path:'/blog' },
  { label:'Exemplo',path:'/exemplo' }
];
```

components/Navbar/Navbar.module.css
```js
.container{
  display: flex;
  list-style: none;
  padding: 0;
}

.linkItem{
  padding:0 15px;
}

.linkItem a{
  color: #000;
}

.linkItem a:hover{
  text-decoration: none;
}
```

E chamar o componente Navbar em components/Layout/index.tsx
```js
import { Navbar } from '../Navbar'
.
.
.
<Navbar />
```
Pronto! Menu adicionado com sucesso!!!

## **Criando menu de navegação no NextJS Parte 2**
Caso queira deixar APENAS o menu ativo com outra cor, fazer da seguinte forma:
```js
<ul className={styles.container}>
      {navigationLinks.map((link, index)=>(
        <li key={index} className={ router.pathname===link.path ? styles.linkActive : styles.linkItem }>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
```
e no css correspondente adicionar :
```js

.linkActive a{
  color:#f00;
}
```


# 📥 Como usar
```js
    //Clonar o repositório
    $ git clone https://github.com/TayseRosa/nextjs-primeiros-passos.git

    //Entrar no diretório
    $ cd nextjs-primeiros-passos

    //Instalar bilbiotecas
    $ npm install

    //Startar o projeto
    $ npm run dev

``` 

# 🚀 Autor

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>www.tayserosa.dev</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa" target="_blank">🚀</a>


Feito com ❤️ por Tayse Rosa 🚀

👋🏽 Entre em contato!

![Linkedin Badge](https://img.shields.io/badge/-TayseRosa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tayse-rosa-3b683151/)[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TayseRosa/)
