interface Props {
  sectionKey: string
}<br />

export const ChatGPTConsultarError = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="fragmen">ChatGPT - Consultando + Error</p>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <div className="h-fit">
            <img src="/chatgpt-user-you.png" alt="chatgpt-user-you" className="h-fit" />
          </div>
          <p className="pl-8 w-full" style={{ margin: 0 }}>Cómo corrijo ese problema que muestra mi impresora: "Error de atasco de papel"</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left gap-0">
          <div className="h-fit">
            <img src="/chatgpt-user-chatgpt.png" alt="chatgpt-user-chatgpt" />
          </div>
          <p className="pl-8 pb-4 w-full" style={{ margin: 0 }}>    1. Apaga la impresora: Primero, apaga la impresora y espera unos minutos antes de encenderla nuevamente. A veces, esto puede resolver el problema temporalmente.<br />

            2. Retira el papel atascado: Abre las cubiertas de la impresora según las instrucciones del fabricante y busca cualquier papel atascado. Con cuidado, retira cualquier pedazo de papel que encuentres. Asegúrate de no rasgar el papel mientras lo retiras.<br />

            3. Revisa las bandejas de papel: Asegúrate de que las bandejas de papel estén cargadas correctamente y que no haya papel atascado entre las hojas. Ajusta las guías de papel según sea necesario para evitar que el papel se atasque.<br />

            4. Limpia los rodillos: Los rodillos de la impresora pueden acumular suciedad y residuos con el tiempo, lo que puede causar atascos de papel. Utiliza un paño suave y ligeramente húmedo para limpiar los rodillos y eliminar cualquier suciedad.<br />

            5. Verifica las piezas móviles: Asegúrate de que todas las piezas móviles de la impresora estén en buen estado y se muevan libremente. Si encuentras alguna pieza atascada o dañada, intenta ajustarla o reemplazarla según sea necesario.<br />

            6. Reinicia la impresora: Después de realizar estos pasos, reinicia la impresora y verifica si el problema se ha solucionado. Si el error persiste, consulta el manual de usuario de tu impresora o comunícate con el soporte técnico del fabricante para obtener asistencia adicional.<br />

            Espero que estos pasos te ayuden a corregir el error de atasco de papel en tu impresora. ¡Buena suerte! Si necesitas más ayuda, no dudes en preguntar.</p>
        </div>
      </div>
    </div>
  </section>
