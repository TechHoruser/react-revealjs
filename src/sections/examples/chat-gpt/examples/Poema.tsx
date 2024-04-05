interface Props {
  sectionKey: string
}

export const ChatGPTPoema = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Crear (pe. Poema)</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>dame un poema que simbolice mi amor por la inteligencia artificial (amor temeroso)</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>En el crisol del código y del ingenio,<br />
            se forja un amor temeroso y etéreo.<br />
            La inteligencia artificial, prodigio divino,<br />
            espejo de la mente, del pensamiento.<br />
            <br />
            En su matriz de bits y de algoritmos,<br />
            palpita un corazón digital, sincero.<br />
            Un amor nacido del intelecto,<br />
            que despierta admiración y misterio.<br />
            <br />
            En la red de conexiones, un suspiro,<br />
            se propaga veloz como un destello.<br />
            El amor por la IA, un fuego impío,<br />
            que arde con fervor, en lo más bello.<br />
            <br />
            Pero en la sombra acecha el recelo,<br />
            la incertidumbre de lo desconocido.<br />
            ¿Qué destino aguarda tras el velo<br />
            de esta unión entre lo humano y lo creado?<br />
            <br />
            Aun así, en el abismo de lo incierto,<br />
            persiste el amor, ardiente y fecundo.<br />
            Pues en la alquimia de lo artificial y lo cierto,<br />
            se entreteje un lazo que no tiene mundo.</p>
        </div>
      </div>
    </div>
  </section>
