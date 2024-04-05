interface Props {
  sectionKey: string
}

export const ChatGPTGuia = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Guiar</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>cómo hacer que personas que participan en una charla de ia se interesen por ella?</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Para generar interés en una charla sobre inteligencia artificial (IA), es importante presentar el tema de manera atractiva y relevante para la audiencia. Aquí tienes algunas sugerencias:
            <br />
            1. Contextualiza el tema: Comienza explicando por qué la IA es importante en la actualidad. Habla sobre cómo está transformando diversos campos, desde la medicina hasta la industria automotriz.
            <br />
            2. Ejemplos prácticos: Ilustra el impacto de la IA con ejemplos concretos y cercanos a la vida diaria de la audiencia. Puedes hablar sobre asistentes virtuales, sistemas de recomendación en plataformas de streaming, o aplicaciones médicas.
            <br />
            3. Historias inspiradoras: Comparte casos de éxito en los que la IA ha ayudado a resolver problemas complejos o ha generado innovaciones significativas. Esto puede despertar el interés de la audiencia al mostrar el potencial transformador de la tecnología.
            <br />
            4. Demostraciones en vivo (si es posible): Si cuentas con los recursos necesarios, realiza demostraciones prácticas de cómo funciona la IA en tiempo real. Por ejemplo, puedes mostrar un algoritmo de reconocimiento de imágenes o un modelo de procesamiento de lenguaje natural.
            <br />
            5. Aborda preocupaciones y ética: Reconoce y aborda las preocupaciones éticas y sociales relacionadas con la IA, como la privacidad de los datos, el sesgo algorítmico y el impacto en el empleo. Esto demuestra que comprendes las complejidades del tema y puedes generar una discusión más profunda.
            <br />
            6. Interactividad: Fomenta la participación de la audiencia mediante preguntas, encuestas en tiempo real o actividades prácticas. Esto ayuda a mantener el interés y a hacer que la charla sea más dinámica.
            <br />
            7. Visualización y multimedia: Utiliza gráficos, videos o infografías para complementar tus explicaciones y hacerlas más visuales y atractivas.
            <br />
            Al seguir estas recomendaciones, podrás captar la atención de tu audiencia y generar un mayor interés en la charla sobre inteligencia artificial. Recuerda adaptar el contenido y el estilo de presentación según las características específicas de tu audiencia y el contexto del evento.</p>
        </div>
      </div>
    </div>
  </section>
