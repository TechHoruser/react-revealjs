interface Props {
  sectionKey: string
}

export const ChatGPTHumor = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Humor</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>cuenta un chiste sobre 2 patos</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>¡Claro! Aquí tienes un chiste:<br />
            <br />
            ¿Qué hace un pato con una pata?<br />
            ¡Patalear! Y ¿qué hace un pato con dos patas?<br />
            ¡Pues patinar!</p>
        </div>
      </div>
    </div>
  </section>
