interface Props {
  sectionKey: string
}

export const Risks = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="text-[4rem]">Riesgos y Precaudiones en IAs generativas</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-left ">
          <p className="pl-8 w-full" style={{ margin: 0 }}>1. Riesgo de sesgo en los datos</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-left ">
          <p className="pl-8 w-full" style={{ margin: 0 }}>2. Riesgo de sesgo en el modelo</p>
        </div>
      </div>
    </div>
  </section>
