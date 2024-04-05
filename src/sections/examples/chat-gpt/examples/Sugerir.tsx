interface Props {
  sectionKey: string
}

export const ChatGPTSugerir = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Sugerir</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Sugiere alguna película similar a yo robot o ex machina</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Una película similar a "Yo, Robot" y "Ex Machina" podría ser "Blade Runner 2049". Esta película, dirigida por Denis Villeneuve, es una secuela de la película de culto "Blade Runner" y aborda temas similares relacionados con la inteligencia artificial, la ética y la humanidad. Al igual que en las otras películas mencionadas, "Blade Runner 2049" presenta un mundo distópico donde los humanos interactúan con androides avanzados, cuestionando qué significa ser humano y qué papel juegan las máquinas en nuestra sociedad.</p>
        </div>
      </div>
    </div>
  </section>
