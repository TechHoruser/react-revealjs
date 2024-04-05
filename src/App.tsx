import { CSSProperties, forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react"
import { RevealSlides } from "./Reveal"
import HoverEffect from 'hover-effect';

// import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
// import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
// import RevealMath from 'reveal.js/plugin/math/math';
// import RevealSearch from 'reveal.js/plugin/search/search';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';

import "./App.css";
import { Whoami } from "./sections/introduction/Whoami";
import { Header } from "./partials/Header";
import Reveal from "reveal.js";
import { Theme, getOpositeTheme } from "./types/Theme";
import { TechSlide } from "./sections/tech/TechSlide";
import { SecuencialChilds } from "./partials/SecuencialChilds";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import { BingExample1 } from "./sections/bing/examples/Example1";
import { End } from "./sections/ended/End";
import { IaTypesResume } from "./sections/types/Resume";
import { ForImage } from "./sections/types/ForImage";
import { ForText } from "./sections/types/ForText";
import { AisList } from "./sections/examples/AisList";
import { Examples } from "./sections/examples/Examples";
import { Risks } from "./sections/risks/Risks";
import { Etich } from "./sections/risks/Etich";

interface HoverEffectHandle {
  next: () => void;
  previous: () => void;
  destroy: () => void;
}

interface LiquidImageOptions {
  displacementImage: string;
  image1: string;
  image2: string;
  imagesRatio?: number;
  intensity?: number;
  intensity1?: number;
  intensity2?: number;
  angle?: number;
  angle1?: number;
  angle2?: number;
  speedIn?: number;
  speedOut?: number;
  hover?: boolean;
  easing?: string;
  video?: boolean;
}

const LiquidImage = forwardRef<HoverEffectHandle, { id: string, init: boolean } & LiquidImageOptions>(({ id, init, ...options }: { id: string, init: boolean } & LiquidImageOptions, ref) => {
  const liquidImageRef = useRef<HoverEffect | null>(null);

  const optionsString = JSON.stringify(options);

  liquidImageRef.current = useMemo(() => {
    const options = JSON.parse(optionsString);
    if (liquidImageRef.current !== null) {
      liquidImageRef.current.destroy();
    }
    if (init) {
      return liquidImage({ id, ...options });
    }
    return null;

  }, [id, optionsString, init]);

  useImperativeHandle(ref, () => ({
    next: () => {
      if (liquidImageRef.current !== null) {
        liquidImageRef.current.next();
      }
      else {
        console.log("LiquidImage not initialized");
      }
    },
    previous: () => {
      if (liquidImageRef.current !== null) {
        liquidImageRef.current.previous();
      }
      else {
        console.log("LiquidImage not initialized");
      }
    },
    destroy: () => {
      if (liquidImageRef.current !== null) {
        liquidImageRef.current.destroy();
      }
      else {
        console.log("LiquidImage not initialized");
      }
    }
  }));

  return (
    <></>
  );
});

const liquidImage = ({ id, ...options }: { id: string } & LiquidImageOptions) => {
  return new HoverEffect({
    parent: document.getElementById(id) as HTMLElement,
    ...options
  });
}

const MAIN_THEME: Theme = "white";

const SLIDES_WITH_OPOSITE_THEME = ['0-2'];
const SLIDES_WITH_HIDDEN_HEADER = ['0-0'];

function App() {
  const [theme, setTheme] = useState<Theme>("black")
  const [presState, setPresState] = useState({ "indexh": -1, "indexv": -1, "indexf": -1, "paused": false, "overview": false })
  const [useCustomTheme] = useState(false);
  const [controlsLayout] = useState<"edges" | "bottom-right" | undefined>("edges");
  const [headerVisible, setHeaderVisible] = useState<CSSProperties["visibility"]>("hidden");
  const liquidImageRef2 = useRef<HoverEffectHandle>(null);
  const [liquidInit, setLiquidInit] = useState(false);
  console.log(presState)

  const handleOnStateChange = (state: Reveal.RevealState) => {
    const slideKey = `${state.indexh}-${state.indexv}-${state.indexf}`;
    console.log(slideKey);

    setHeaderVisible(
      SLIDES_WITH_HIDDEN_HEADER.some(slide => slideKey.startsWith(slide))
        ? "hidden"
        : "visible"
    );

    if (slideKey === '1-0-1') {
      liquidImageRef2.current?.next();
    }

    const newTheme = SLIDES_WITH_OPOSITE_THEME.some(slide => slideKey.startsWith(slide))
      ? getOpositeTheme(MAIN_THEME)
      : MAIN_THEME;
    console.log(`New theme is ${newTheme}`);

    setTheme(newTheme);

    setLiquidInit(true);
    // setPresState(state);
  }

  return (
    <div
      className={`
        h-screen
      `}
    >
      <Header
        visible={headerVisible === "visible"}
        dark={theme === "white"}
      />
      <RevealSlides
        key="rs-2"
        scrollSnap="proximity"
        minScale={1}
        maxScale={1}
        transition="slide"
        width={"100%"}
        margin={0.01}
        view="scroll"
        controlsLayout={controlsLayout}
        presState={presState}
        plugins={[RevealZoom, RevealNotes, RevealHighlight]}
        onStateChange={handleOnStateChange}
      >
        <section key="0">
          <Whoami
            theme={theme}
          />
        </section>
        <section key="1" >
          <section key="1-0">
            <div
              className={`
                w-full
                h-full
                flex
                justify-center
                items-center
              `}
            >
              <div
                className={`
                  h-full
                  p-8
                  flex
                  flex-col
                `}
              >
                <h4
                  className={`
                    text-primary
                    text-left
                  `}
                >
                  ¿Qué es la inteligencia artificial?
                </h4>
                <p className="text-left">
                  <span className="fragment fade-in-then-semi-out ml-1 mr-1">
                    La inteligencia artificial (IA) es la simulación de procesos de inteligencia humana por parte de máquinas.
                  </span>
                  <span className="fragment fade-in-then-semi-out ml-1 mr-1">
                    Especialmente sistemas informáticos.
                  </span>
                </p>
              </div>
              <div
                id="liquid-image2"
                className="min-h-[495px] min-w-[800px] mr-6 rounded-[1rem]"
              >
                <LiquidImage
                  ref={liquidImageRef2}
                  init={liquidInit}
                  id="liquid-image2"
                  intensity={0.3}
                  imagesRatio={0.65}
                  image1="/cerebro.png"
                  image2="/neuronal-network.jpg"
                  displacementImage="/heightMap.png"
                  speedIn={1.6}
                  hover={false}
                />
              </div>
            </div>
          </section>
          <SecuencialChilds
            sectionKey="1-1"
            intialIndex={1}
            children={[
              <p style={{ padding: "1vh 16vw" }}>Existen distintos tipos de inteligencia artificial, entre ellos:</p>,
              <p style={{ padding: "1vh 16vw" }}>Inteligencia Supervisada</p>,
              <p style={{ padding: "1vh 16vw" }}>Inteligencia No Supervisada</p>,
              <p style={{ padding: "1vh 16vw" }}>Inteligencia Reforzada</p>,
              <p style={{ padding: "1vh 16vw" }}>Inteligencia Mixta</p>,
            ]}
          />
        </section>
        <section key="100">
          <IaTypesResume sectionKey="100" startIndex={0} />
          <ForImage sectionKey="100" startIndex={10} />
          <ForText sectionKey="100" startIndex={30} />
        </section>
        <section key="310">
          <Examples sectionKey="310" startIndex={0} />
        </section>
        <section key="400">
          <Risks sectionKey="400" />
        </section>
        <section key="401">
          <Etich sectionKey="401" />
        </section>
        <section key="999">
          <TechSlide />
        </section>
        <section key="1000">
          <End />
        </section>
        {useCustomTheme && <link rel="stylesheet" href="/custom_theme_starter.css" />}
      </RevealSlides>
    </div >
  )
}

export default App
