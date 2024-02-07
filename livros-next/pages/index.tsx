import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontStyle: 'italic'}} className={styles.container}>
          <h1 className={styles.fontstyle} >Pagina de Inicio do Projeto</h1>
          <h2 style={{ marginTop: '40px', textShadow: '2px 2px 4px red'}}>Meus Exemplos Sistema de Gerenciamento Usando o NextJS</h2>
        </div>
      </main>
    </div>
  )
}
