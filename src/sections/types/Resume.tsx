interface Props {
  sectionKey: string;
  startIndex: number;
}

export const IaTypesResume = (props: Props) => {
  return <>
    <section key={`${props.sectionKey}-${props.startIndex}`}>
      <h2>¿Para que podemos usar una IA?</h2>
      <div>
        <p className="fragment fade-in-then-semi-out">Imagen</p>
        <p className="fragment fade-in-then-semi-out">Texto</p>
        <p className="fragment fade-in-then-semi-out">Audio</p>
        <p className="fragment fade-in-then-semi-out">Video</p>
        <p className="fragment fade-in-then-semi-out">Datos</p>
      </div>
    </section>
  </>
}
