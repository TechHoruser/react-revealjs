interface Props {
  sectionKey: string
}

export const Etich = ({
  sectionKey,
}: Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <p className="text-[4rem]">Ética</p>
      </div>
    </div>
  </section>
