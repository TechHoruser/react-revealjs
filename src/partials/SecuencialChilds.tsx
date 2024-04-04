interface SecuencialChildsProps {
  sectionKey: string;
  intialIndex?: number;
  children: JSX.Element[];
}

export const SecuencialChilds = ({
  sectionKey,
  intialIndex = 0,
  children,
}: SecuencialChildsProps) => {
  return children.map((_, i) =>
    <section key={`${sectionKey}-${intialIndex + i}`} data-auto-animate="" className="flex flex-col gap-4">
      {Array.from({ length: i + 1 }).map((_, j) => (
        j === i
          ? children[j]
          : <span className="opacity-50">{children[j]}</span>
      ))}
    </section>
  );
}
