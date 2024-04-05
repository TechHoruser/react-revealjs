interface Props {
  sectionKey: string
}

export const ChatGPTExplicar = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Explicar</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Explícame como funcionas</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>¡Claro! Funciono como un modelo de lenguaje desarrollado por OpenAI llamado GPT (Generative Pre-trained Transformer). Mi función principal es procesar texto para generar respuestas coherentes y relevantes basadas en el contexto proporcionado.
            <br />
            <br />Soy capaz de comprender y generar texto en español gracias a mi entrenamiento con una gran cantidad de datos lingüísticos en este idioma. Utilizo un enfoque llamado "aprendizaje automático" para mejorar continuamente mi capacidad para entender y generar respuestas en función de las interacciones que tengo.
            <br />
            <br />En resumen, interpreto tu pregunta, busco en mi base de conocimientos para generar una respuesta y luego la presento en forma de texto. Mi objetivo es ayudarte proporcionando información precisa y útil según tus consultas.</p>
        </div>
      </div>
    </div>
  </section>
