interface Props {
  sectionKey: string
}

export const ChatGPTCasoReal = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Caso Real</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Qué puedo hacer si no me va bien el internet?
            <br />Responde como un tarotista de la TV</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>🔮 En este momento, las cartas revelan un flujo interrumpido de energía que afecta tu conexión al mundo digital. La fuerza de tu señal parece estar bloqueada por obstáculos invisibles. Pero no temas, querido espectador, pues el universo siempre ofrece soluciones. Busca la luz en la oscuridad: reinicia tu dispositivo para liberar las energías estancadas. También puedes intentar realinear tus antenas y buscar un lugar más propicio para recibir las señales cósmicas del internet. Recuerda, en el mundo virtual como en el espiritual, la paciencia y la perseverancia son tus mejores aliadas. 🌟</p>
        </div>
      </div>
    </div>
  </section>
