interface Props {
  sectionKey: string
}

export const ChatGPTSalud = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Salud</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Me he despertado con mocos y dolor en la parte superior de los dientes ¿qué puede ser?</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Es posible que estés experimentando síntomas de sinusitis. La sinusitis es una inflamación de los senos paranasales, que son cavidades llenas de aire dentro de los huesos que rodean la nariz. Cuando los senos paranasales se inflaman, puede causar congestión nasal, secreción nasal, presión facial y dolor en los dientes superiores, entre otros síntomas. Te recomendaría que consultes a un médico para obtener un diagnóstico preciso y determinar el mejor tratamiento para tu situación.</p>
        </div>
      </div>
    </div>
  </section>
