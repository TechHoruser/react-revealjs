interface Props {
  sectionKey: string;
  startIndex: number;
}

export const ForText = (props: Props) => {
  return <>
    <section key={`${props.sectionKey}-${props.startIndex}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Texto</h2>
        <p className="fragment fade-in-then-semi-out font-normal">Las ias generativas son capaces de crear texto, ya sea en forma de poesía, cuentos, artículos periodísticos, entre otros.</p>
      </div>
    </section>
    <section key={`${props.sectionKey}-${props.startIndex + 1}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Texto</h2>
        <h4>¿Cómo funcionan?</h4>
        <div className="fragment fade-in-then-semi-out flex justify-center">
          <img src="/thinking.png" alt="thinking" />
        </div>
      </div>
    </section>
    <section key={`${props.sectionKey}-${props.startIndex + 2}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Texto</h2>
        <div className="fragment fade-in-then-semi-out flex justify-center">
          <img src="/UX_explanation_for_kids.gif" alt="UX_explanation_for_kids.gif" />
        </div>
      </div>
    </section>
    <section key={`${props.sectionKey}-${props.startIndex + 2}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Texto</h2>
        <h4>¿Qué problemas pensamos que pueden causar esto?</h4>
      </div>
    </section>
  </>
}
