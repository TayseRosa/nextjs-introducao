<h1 align="center"> Next JS</h1>

#Índice
- [Demo](#demo)
- [🛠 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Tecnologias utilizadas neste projeto](#-tecnologias-utilizadas-neste-projeto)
- [Diferenças entre CSR, SSR, SSG](#diferenças-entre-csr-ssr-ssg)
- [📥 Como usar](#-como-usar)
- [🚀 Autor](#-autor)
  

# Demo
<p align="center">
<img src="./readme.gif" align="center" />
</p>

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
- [x] USANDO O CSS MODULES NO NEXTJS

# Diferenças entre CSR, SSR, SSG
**CSR - Client-Side Rendering**

Comportamento natural do React JS, operações no lado do cliente, renderiza no dispositivo do client.

**SSR - Server-Side Rendering**

Processamento no servidor, e joga o RESULTADO processado para o cliente
(getServerSideProps)

**SSG - Static-Site Generation**

Carrega a estrutura básica já processada no servidor(exemplo: Carrega o logado ou nao do usuario) e o miolo do site é carregado no cliente.
(getStaticPaths | getStaticProps)

**Hook useRouter(propriedades, funções, eventos)**
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

**Usando o componente Link**
Ex: 
```js
import Link from "next/link";

<Link href="/pagina/subpagina"> Nome do Link </Link>
```

**Local apropriado para importar o arquivo de estilização css(Bootstrap)**
- [x] Arquivo: _app.tsx
```js 
import 'bootstrap/dist/css/bootstrap.css'

<button className="btn btn-primary">
    Aumentar
</button>
```

**Usando CSS Modules no NextJS 1**
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
