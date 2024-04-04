interface BingExample1Props {
  sectionKey: string
}

export const BingExample1 = ({
  sectionKey,
}: BingExample1Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">COPILOT EXAMPLE</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/copilot-user-you.png" alt="copilot-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>dame una imagen de una red neuronal y otra de un cerebro que se parezcan</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/copilot-user-copilot.png" alt="copilot-user-copilot" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Entendido, intentaré crear eso. Mientras tanto, aquí tienes información sobre el cerebro humano:</p>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>El cerebro humano es el órgano más voluminoso del encéfalo. Ocupa los sectores anterior y medio (superior) de la cavidad craneal. Su componente principal son los hemisferios y la corteza cerebral que recubre su superficie, derivados del prosencéfalo.</p>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>...</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left">
          <div className="h-fit pl-8 pb-4">
            <img src="/copilot/image1.png" alt="copilot-image-1" className="h-fit" style={{ margin: 0 }} />
          </div>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left">
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Ahora, permíteme crear una imagen de una red neuronal para ti.</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left">
          <div className="h-fit pl-8 pb-4">
            <img src="/copilot/image2.png" alt="copilot-image-2" className="h-fit" style={{ margin: 0 }} />
          </div>
        </div>
      </div>
    </div>
  </section>
