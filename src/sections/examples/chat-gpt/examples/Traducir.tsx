interface Props {
  sectionKey: string
}

export const ChatGPTTraducir = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Traducir</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Traduce el siguiente texto:<br />
            Artificial intelligence (AI) enables machines to learn from data and recognize patterns in it, to perform tasks more efficiently and effectively. It powers services like Netflix's algorithm that recommends TV shows and movies based on your preferences.</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>La inteligencia artificial (IA) permite a las máquinas aprender de datos y reconocer patrones en ellos, para realizar tareas de manera más eficiente y efectiva. Impulsa servicios como el algoritmo de Netflix que recomienda programas de televisión y películas basándose en tus preferencias.</p>
        </div>
      </div>
    </div>
  </section>
