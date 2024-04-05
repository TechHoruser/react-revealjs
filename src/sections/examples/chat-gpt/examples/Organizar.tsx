interface Props {
  sectionKey: string
}

export const ChatGPTOrganizar = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Organizar (viaje)</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Organiza un viaje en la sierra de Cádiz</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>¡Claro! Aquí tienes una propuesta para organizar un viaje a la Sierra de Cádiz:<br />
            <br />
            Día 1: Llegada a Grazalema<br />
            <br />
            Comienza tu viaje llegando a Grazalema, un encantador pueblo blanco enclavado en la Sierra de Grazalema.<br />
            Pasea por las estrechas calles empedradas y admira la arquitectura típica andaluza.<br />
            Visita el Centro de Interpretación del Parque Natural Sierra de Grazalema para aprender sobre la flora, fauna y geología de la zona.<br />
            Cena en uno de los restaurantes locales, donde podrás probar platos tradicionales de la región, como la sopa de tomate o el venado en salsa.<br />
            <br />
            Día 2: Ruta de senderismo en el Pinsapar de Grazalema<br />
            <br />
            Después de desayunar, dirígete al Pinsapar de Grazalema, un bosque de pinsapos único y protegido.<br />
            Realiza una ruta de senderismo por los senderos señalizados, rodeado de la impresionante belleza de los pinsapos y las vistas panorámicas de la sierra.<br />
            Lleva contigo un picnic para disfrutar en medio de la naturaleza.<br />
            Por la tarde, regresa a Grazalema y tómate un tiempo para relajarte y disfrutar del ambiente tranquilo del pueblo.<br /><br />
            ...</p>
        </div>
      </div>
    </div>
  </section>
