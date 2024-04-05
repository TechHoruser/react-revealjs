interface Props {
  sectionKey: string
}

export const ChatGPTMejorarTexto = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Mejorar</p>
        <p className="fragmen">ChatGPT - Mejorar Traducción</p>
        <p className="fragmen">ChatGPT - Mejorar Código</p>
      </div>
    </div>
  </section>
