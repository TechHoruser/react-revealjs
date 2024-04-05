interface Props {
  sectionKey: string
}
<br />
export const ChatGPTComparar = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Comparar (Contexto Anterior)</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>qué diferencias tiene con la no OLED</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>La principal diferencia entre la Nintendo Switch OLED y la Nintendo Switch original radica en la pantalla. La Switch OLED cuenta con una pantalla OLED de 7 pulgadas, mientras que la Switch original tiene una pantalla LCD de 6.2 pulgadas. Las pantallas OLED tienden a ofrecer colores más vibrantes, negros más profundos y un contraste mejorado en comparación con las pantallas LCD, lo que proporciona una experiencia visual más inmersiva.
            <br />
            Además de la pantalla, otra diferencia notable es el soporte ajustable incorporado en la parte posterior de la consola de la Switch OLED. Esto permite a los jugadores ajustar el ángulo de visión en el modo de sobremesa para una mayor comodidad, una característica que no está presente en la Switch original.
            <br />
            En términos de rendimiento y funcionalidad, las dos consolas son bastante similares. Utilizan el mismo procesador Tegra personalizado de NVIDIA y ofrecen la misma compatibilidad con los juegos de la biblioteca de la Switch. No hay diferencias significativas en la potencia o las capacidades de juego entre ambas versiones.</p>
        </div>
      </div>
    </div>
  </section>
