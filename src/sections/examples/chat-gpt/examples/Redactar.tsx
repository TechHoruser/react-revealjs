interface Props {
  sectionKey: string
}

export const ChatGPTRedactar = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Redactar</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Redacta un mensaje breve para Francisco de parte de Correos exponiéndo que un pedido suyo llegará próximamente.</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>Estimado Francisco,
            <br />
            ¡Espero que este mensaje te encuentre bien! Nos complace informarte que tu pedido está en camino y llegará próximamente a la dirección proporcionada. Estamos comprometidos a garantizar que recibas tu pedido de manera oportuna y en perfectas condiciones.<br />
            <br />
            Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nosotros. ¡Gracias por confiar en nosotros para tus envíos!<br />
            <br />
            Atentamente,<br />
            Correos</p>
        </div>
      </div>
    </div>
  </section>
