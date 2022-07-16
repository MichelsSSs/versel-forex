import styles from 'styles/Home.module.css'
import Lay1 from 'pages/layout/layout1-r1'
import { useRef } from 'react';
import styless from 'styles/botao.module.css'

const Teste1 = () => {
  interface divEL {
    current: HTMLDivElement | null;
  }
  const aboutSection: divEL = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current!.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>


      <div>

        <h1 className={styles.title}>
          O caminho correto faz toda diferença
        </h1>

        <p className={styles.description}>
          Você conhece o mercado forex? Sem essa de ilusão ou enrolação, o negócio é pé no chão!
          Para saber ganhar é necessário saber não perder e quando você encontra
          o conhecimento suficiente para manter a disciplina, evita perdas
          desnecessarias e alcança o caminho da consistência com mais facilidade.

        </p>
      </div>

      <div className={styles.divbotom}>

        <div className={styles.divmain}></div>
        <div className={styless.button1}>
          <li className={styless.button1Class} onClick={scrollDown}>
            Começar Agora
          </li>
          <li className={styless.button1Class} onClick={scrollDown}>
            Saber Mais
          </li>

        </div>

      </div>

      <section ref={aboutSection} >
        <Lay1 />
        
      </section>
    </>
  )
}

export default Teste1
