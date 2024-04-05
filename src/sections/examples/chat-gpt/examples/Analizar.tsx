interface Props {
  sectionKey: string
}

export const ChatGPTAnalizar = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Analizar</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Analiza la Switch OLED</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>La Nintendo Switch OLED es una versión actualizada del exitoso sistema de videojuegos híbrido de Nintendo. Aunque conserva muchas de las características principales de la Switch original, incluyendo la capacidad de jugar tanto en modo portátil como en modo de sobremesa, la OLED presenta algunas mejoras significativas.
            <br className="pb-2" />
            Una de las características más destacadas de la Switch OLED es su pantalla OLED de 7 pulgadas. Esta pantalla ofrece colores más vibrantes, negros más profundos y un contraste mejorado en comparación con la pantalla LCD de la Switch original. Esto significa una experiencia visual más inmersiva para los jugadores.
            <br className="pb-2" />
            Además de la pantalla mejorada, la Switch OLED también viene con un soporte ajustable incorporado en la parte posterior de la consola. Esto permite a los jugadores ajustar el ángulo de visión en el modo de sobremesa para una mayor comodidad.
            <br className="pb-2" />
            En términos de rendimiento, la Switch OLED es esencialmente idéntica a la Switch original. Todavía utiliza el mismo procesador Tegra personalizado de NVIDIA y ofrece la misma compatibilidad con los juegos de la biblioteca de la Switch.
            <br className="pb-2" />
            En resumen, la Nintendo Switch OLED ofrece una experiencia visual mejorada gracias a su pantalla OLED, así como algunas características adicionales de comodidad, como el soporte ajustable. Sin embargo, no representa un gran salto en términos de potencia o funcionalidad en comparación con la Switch original.</p>
        </div>
      </div>
    </div>
  </section>
