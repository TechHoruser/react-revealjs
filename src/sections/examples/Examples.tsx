import { AisList } from "./AisList";
import { EdgeCopilotBusquedaInternet } from "./bing/examples/BusquedaInternet";
import { EdgeCopilotGenerandoImágenes } from "./bing/examples/Imagenes";
import { ChatGPTAnalizar } from "./chat-gpt/examples/Analizar";
import { ChatGPTTono } from "./chat-gpt/examples/CambiandoTono";
import { ChatGPTCasoReal } from "./chat-gpt/examples/CasoReal";
import { ChatGPTComparar } from "./chat-gpt/examples/Comparar";
import { ChatGPTConsultarError } from "./chat-gpt/examples/ConsultaError";
import { ChatGPTCorreccionTexto } from "./chat-gpt/examples/CorreccionTexto";
import { ChatGPTFormato } from "./chat-gpt/examples/DarFormato";
import { ChatGPTEspanol } from "./chat-gpt/examples/Espanol";
import { ChatGPTExplicar } from "./chat-gpt/examples/Explicar";
import { ChatGPTGuia } from "./chat-gpt/examples/Guia";
import { ChatGPTHumor } from "./chat-gpt/examples/Humor";
import { ChatGPTMejorarTexto } from "./chat-gpt/examples/MejorarTexto";
import { ChatGPTOrganizar } from "./chat-gpt/examples/Organizar";
import { ChatGPTPoema } from "./chat-gpt/examples/Poema";
import { ChatGPTRedactar } from "./chat-gpt/examples/Redactar";
import { ChatGPTSalud } from "./chat-gpt/examples/Salud";
import { ChatGPTSugerir } from "./chat-gpt/examples/Sugerir";
import { ChatGPTTraducir } from "./chat-gpt/examples/Traducir";

interface Props {
  sectionKey: string;
  startIndex: number;
}

export const Examples = (props: Props) => {
  let index = 0;
  return <>
    <section key={`${props.sectionKey}-${props.startIndex + (++index)}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Texto</h2>
        <h1 className="fragment fade-in-then-semi-out font-normal text-[2rem]">ChatGPT</h1>
        <h5 className="fragment fade-in-then-semi-out font-normal text-[2rem]">Prompts</h5>
      </div>
    </section>
    <ChatGPTEspanol sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTTraducir sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTRedactar sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTTono sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTFormato sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTAnalizar sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTComparar sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTConsultarError sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTCorreccionTexto sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTExplicar sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTHumor sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTPoema sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTMejorarTexto sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTOrganizar sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTSalud sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTSugerir sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTGuia sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />
    <ChatGPTCasoReal sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />

    <section key={`${props.sectionKey}-${props.startIndex + (++index)}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Texto + Imágenes</h2>
        <h1 className="fragment fade-in-then-semi-out font-normal text-[2rem]">Edge Copilot</h1>
        <p className="fragment fade-in-then-semi-out font-normal text-[1.3rem]">El mismo modelo de datos que ChatGPT pero integrado en el navegador de Edge</p>
        <h4 className="fragment fade-in-then-semi-out font-normal text-[1.5rem]">Interactua con la página</h4>
      </div>
    </section>

    <EdgeCopilotGenerandoImágenes sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} />

    <AisList sectionKey={`${props.sectionKey}-${props.startIndex + (++index)}`} startIndex={index} />
  </>
}
