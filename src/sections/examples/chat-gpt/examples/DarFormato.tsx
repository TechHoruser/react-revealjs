interface Props {
  sectionKey: string
}

export const ChatGPTFormato = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Formato</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>cambia los . por ,<br />
            La vida está llena de sorpresas maravillosas y desafíos emocionantes. A veces, nos enfrentamos a situaciones inesperadas que nos ponen a prueba, pero también nos brindan la oportunidad de crecer y aprender. Es importante mantener una actitud positiva y mantener la esperanza en los momentos difíciles. Con determinación y perseverancia, podemos superar cualquier obstáculo que se interponga en nuestro camino. Así que recuerda, cada día es una nueva oportunidad para alcanzar tus sueños y convertirte en la mejor versión de ti mismo.</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>La vida está llena de sorpresas maravillosas y desafíos emocionantes, A veces, nos enfrentamos a situaciones inesperadas que nos ponen a prueba, pero también nos brindan la oportunidad de crecer y aprender, Es importante mantener una actitud positiva y mantener la esperanza en los momentos difíciles, Con determinación y perseverancia, podemos superar cualquier obstáculo que se interponga en nuestro camino, Así que recuerda, cada día es una nueva oportunidad para alcanzar tus sueños y convertirte en la mejor versión de ti mismo.</p>
        </div>
      </div>
    </div>
  </section>
