import { CSSProperties, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
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
import { ProjectCard } from "./components/ProjectCartd";

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

const showIntro = false;

function App() {
  const [theme, setTheme] = useState("black")
  const [presState, setPresState] = useState({ "indexh": -1, "indexv": -1, "indexf": -1, "paused": false, "overview": false })
  const [useCustomTheme] = useState(false);
  const [controlsLayout] = useState<"edges" | "bottom-right" | undefined>("edges");
  const [headerVisible, setHeaderVisible] = useState<CSSProperties["visibility"]>("hidden");
  const liquidImageRef2 = useRef<HoverEffectHandle>(null);
  const [liquidInit, setLiquidInit] = useState(false);

  const timeDelta = 1000;

  const handleOnStateChange = (state: Reveal.RevealState) => {
    if (state.indexh === 0 && state.indexv === 0) {
      setHeaderVisible("hidden");
    }
    else if (state.indexh === 1 && state.indexv === 0 && state.indexf === 0) {
      liquidImageRef2.current?.next();
    }
    else if (state.indexh === 1 && state.indexv === 0 && state.indexf === 1) {
      liquidImageRef2.current?.previous();
    }

    if (!(state.indexh === 0 && state.indexv === 0)) {
      setHeaderVisible("visible");
    }

    if (state.indexh === 1 && state.indexv === 0) {
      setTheme("white");
    }

    setLiquidInit(true);
  }

  useEffect(() => {

    if (!showIntro) return;
    const timer = setTimeout(() => {
      setTheme("black")
    }, 3 * timeDelta);

    // const timer2 = setTimeout(() => {
    //   setFirstSlideText("Explore new possibilities thanks to the React framework and ecosystem")
    // }, 6*timeDelta);

    const timer2a = setTimeout(() => {
      setPresState({ "indexh": 0, "indexv": 1, "indexf": 0, "paused": false, "overview": false });
    }, 9 * timeDelta);

    const timer2b = setTimeout(() => {
      setPresState({ "indexh": 0, "indexv": 1, "indexf": 1, "paused": false, "overview": false });
    }, 12 * timeDelta);

    const timer2c = setTimeout(() => {
      setPresState({ "indexh": 0, "indexv": 1, "indexf": 2, "paused": false, "overview": false });
    }, 15 * timeDelta);

    // const timer3 = setTimeout(() => {
    //   setTheme("white")
    // }, 9*timeDelta);

    // const timer4 = setTimeout(() => {
    //   setPresState({"indexh": 1, "indexv": 0, "indexf": 0, "paused": true, "overview": false });
    // }, 12*timeDelta);

    // const timer5 = setTimeout(() => {
    //   setUseCustomTheme(true);
    // }, 15*timeDelta);

    // const timer6 = setTimeout(() => {
    //   setControlsLayout("bottom-right");
    // }, 18*timeDelta);

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2a)
      clearTimeout(timer2b)
      clearTimeout(timer2c)
      // clearTimeout(timer3)
      // clearTimeout(timer4)
      // clearTimeout(timer5)
      // clearTimeout(timer6)
    }
  }, []);

  return (
    <div
      className={`
        
      `}
    >
      <Header
        visible={headerVisible === "visible"}
        darkMode={theme === "black"}
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
        plugins={[RevealZoom, RevealNotes]}
        theme={theme}
        onStateChange={handleOnStateChange}
      >
        <section key="0">
          <Whoami />
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
                  w-2/3
                  p-8
                  flex
                  flex-col
                `}
              >
                <h4
                  className={`
                    text-[#f17a52]
                    text-left
                  `}
                >
                  Free reign over your projects
                </h4>
                <p className="text-left">
                  <span className="fragment fade-in-then-semi-out ml-1 mr-1">
                    This package makes no efforts to impead or restrict what you can or cannot do.
                  </span>
                  <span className="fragment fade-in-then-semi-out ml-1 mr-1">
                    You can still add javascript in the usual ways inside and outside the React framework.
                  </span>
                  <span className="fragment fade-in-then-semi-out ml-1 mr-1">
                    And the same goes for styling.
                  </span>
                </p>
              </div>
              <div
                id="liquid-image2"
                className="h-[400px] w-1/3 mr-6 rounded-[1rem]"
              >
                <LiquidImage
                  ref={liquidImageRef2}
                  init={liquidInit}
                  id="liquid-image2"
                  intensity={1}
                  imagesRatio={1.5}
                  image1="/black-notebook.jpg"
                  image2="/notebook-and-pen.jpg"
                  displacementImage="/heightMap.png"
                  hover={false}
                />
              </div>
            </div>
          </section>
          <section key="1-1" data-auto-animate="" data-background-color="#222222">
            <p style={{ padding: "1vh 16vw" }}>Since React creates HTML DOM elements out of JSX, there should be no reason we cant just put JSX inside of our RevealSlides component instead of the HTML markup Reveal.js normally expects.</p>
          </section>
          <section key="1-2" data-auto-animate="" data-background-color="#222222">
            <p style={{ padding: "1vh 16vw" }}>Since React creates HTML DOM elements out of JSX, there should be no reason we cant just put JSX inside of our RevealSlides component instead of the HTML markup Reveal.js normally expects.</p>
            <p style={{ padding: "1vh 16vw" }}>Simply put, React already takes care of converting JSX into something Reveal.js can work with.</p>
          </section>
          <section key="1-3" data-auto-animate="" data-background-color="#222222">
            <p style={{ padding: "1vh 16vw" }}>Since React creates HTML DOM elements out of JSX, there should be no reason we cant just put JSX inside of our RevealSlides component instead of the HTML markup Reveal.js normally expects.</p>
            <p style={{ padding: "1vh 16vw" }}>Simply put, React already takes care of converting JSX into something Reveal.js can work with.</p>
            <p style={{ padding: "1vh 16vw" }}>So, if you can make a React component, you can make a Reveal.js slide.</p>
          </section>
        </section>
        <section key="2" data-background-color="#dedede" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "4rem" }}>
          <h4
            className="text-center text-[#f17a52] mb-12"
          >
            Related projects
          </h4>
          <div
            className="flex justify-center items-center gap-4 max-w-full max-h-[70vh] flex-wrap"
          >
            <ProjectCard
              className="w-[20rem] h-[28rem] text-[1.1rem] bg-white gap-[0.5rem] animate-fadeIn ease-in-out duration-150"
              title="react-reveal-slides"
              description="A package that allows you to add Reveal.js presentations to your React apps."
              image="/react-reveal-slides.png"
              link="https://github.com/bouzidanas/react-reveal-slides"
              techStack={["React:#149ECA", "Reveal.js:#D53F8C", "TypeScript:#2F74C0", "CSS:#2E83C6"]}
            />
            <ProjectCard
              className="w-[20rem] h-[28rem] text-[1.1rem] bg-white gap-[0.5rem] animate-fadeIn ease-in-out duration-150"
              title="streamlit-reveal-slides"
              description="Create and add reveal.js HTML presentations to your Streamlit app!"
              image="/streamlit-reveal-slides.png"
              gif="/streamlit-reveal-slides.gif"
              link="https://github.com/bouzidanas/streamlit-reveal-slides"
              techStack={["React:#149ECA", "Reveal.js:#D53F8C", "Python:#356C9B", "Streamlit:#FF4B4B", "TypeScript:#2F74C0", "CSS:#2E83C6"]}
            />
          </div>
        </section>
        <section key="3" data-background-color="#dedede">
          <h2>The end</h2>
        </section>
        {useCustomTheme && <link rel="stylesheet" href="/custom_theme_starter.css" />}
      </RevealSlides>
    </div >
  )
}

export default App
