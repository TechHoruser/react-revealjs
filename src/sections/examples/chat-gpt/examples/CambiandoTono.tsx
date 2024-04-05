interface Props {
  sectionKey: string
}

export const ChatGPTTono = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Tono del mensaje</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Quiero un mensaje igual o más breve pero mucho más formal</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Estimado Francisco,<br />
            <br />
            Nos complace comunicarte que tu pedido está en ruta hacia su destino y se espera que llegue próximamente a la dirección indicada. Nos comprometemos a garantizar la integridad y puntualidad en la entrega de tu solicitud.<br />
            <br />
            Para cualquier consulta o asistencia adicional, quedamos a tu disposición. Agradecemos sinceramente tu confianza en nuestros servicios.<br />
            <br />
            Atentamente,<br />
            Correos</p>
        </div>
      </div>
    </div>
  </section>
