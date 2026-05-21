import { useEffect, useState } from "react"
import "./App.css"

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 40)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

const projects = [

  {
    year: "2026",
    title: "LOOKING TOO LONG",
    type: "Graphy / Print",

   description: {

  en: `

An image-based work developed through the long-term observation of windows and interior scenes.

Through textured glass, reflections, shadows, and distance, the spaces behind the window remain visible yet difficult to fully approach.

The closer the distance becomes, the less clearly the image can be seen.

Printed on semi-transparent paper.

  `,

  zh: `

一件透過長期觀察窗戶與室內景象所發展出的影像作品。

透過帶有肌理的玻璃、反射、陰影與距離，窗後的空間始終可見，卻難以真正靠近。

越接近，彷彿越看不清。

作品印製於半透明紙材上。

  `,

  ja: `

窓と室内風景への長期的な観察から展開されたイメージ作品。

テクスチャのあるガラス、反射、影、距離を通して、窓の向こうの空間は見えていながら、完全には近づくことができない。

近づくほど、かえって見えなくなっていく。

作品は半透明の紙に印刷されている。

  `,

},

    images: [
      { src: "/images/look-1.jpg", size: "large" },
      { src: "/images/look-2.jpg", size: "small" },
      { src: "/images/look-3.jpg", size: "large" },
    ],
  },

{
  year: "2025",

  title: "RUME",

  type: "Brand Identity / Packaging / Variable Type",

  description: {
    en: `
A visual identity developed for a Shanghai-based coffee roastery.

The project explores the relationship between coffee beans, variable typography, and everyday consumption. The logo and type system were derived from the internal structure and sectional forms of coffee beans, extending into packaging and visual applications.
    `,

    zh: `
為上海咖啡烘焙品牌 RUME 所設計的視覺識別系統。

作品圍繞咖啡豆的內部結構、可變字體與日常消費經驗展開。Logo 與字體系統源自咖啡豆剖面的形態，並延伸至包裝與整體視覺應用。
    `,

    ja: `
上海を拠点とするコーヒーロースタリー「RUME」のために制作したヴィジュアル・アイデンティティ。

コーヒー豆の断面構造とバリアブルタイポグラフィの関係性を軸に、ロゴ、書体システム、パッケージへと展開した。
    `,
  },

  images: [
    { src: "/images/rume-1.jpg", size: "medium" },
    { src: "/images/rume-2.png", size: "large" },
    { src: "/images/rume-3.jpg", size: "medium" },
   { src: "/images/rume-5.jpg", size: "medium" },
  ],
},

 
  {
    year: "2025",
    title: "REMOTE VIEWING",
    type: "Exhibition Identity / Book Design",

    description: {
      en: `Visual identity and publication around perception and image operations.`,

      zh: `圍繞感知、影像與意識運作所發展的展覽主視覺與出版設計。`,

      ja: `知覚、イメージ、意識の働きをめぐって展開された展覧会ヴィジュアル・アイデンティティとブックデザイン。`,
    },

    images: [
      { src: "/images/remote-1.jpg", size: "medium" },
      { src: "/images/remote-2.jpg", size: "large" },
    ],
  },


   {
    year: "2024",
    title: "BRUT",
    type: "Interactive Type / Sound / Web",

    description: {
      en: `BRUT is an experimental type and motion system driven by sound.
Using real-time audio analysis, the project translates sound into variations of variable font weight, rhythm, and moiré-like raster distortions, creating a continuously shifting visual language.

Originally developed as the visual identity for a fictional music bar, BRUT later evolved into an open online experimental platform. Through microphones, music, or environmental sound, users can generate live typographic visuals in real time, exploring the perceptual relationship between sound and text.

BRUT emphasizes accessibility and shared creation, aiming to challenge the reliance on complex programming in motion design and make generative visual experimentation more intuitive and approachable.
`,

      zh: `BRUT 是一個以聲音驅動的實驗性字體與動態視覺系統。
作品透過即時音訊分析，將聲音轉譯為可變字體的字重、節奏與光柵錯視變化，形成一套持續流動的視覺語言。

最初作為虛構音樂酒吧的視覺概念發展，後續逐漸延伸為一個開放式的線上實驗平台。使用者可以透過麥克風、音樂或環境聲音，即時生成動態字體影像，探索聲音與文字之間的感知關係。

BRUT 著重於低門檻與共享性，試圖打破動態視覺創作對複雜技術的依賴，讓更多人能以直覺的方式參與生成與創作。
`,

      ja: `BRUT は、音によって駆動する実験的なタイポグラフィおよびモーションビジュアルシステムです。
リアルタイムの音声解析を通して、音を可変フォントのウェイト、リズム、モアレ状のラスターディストーションへと変換し、絶えず変化し続ける視覚言語を生成します。

もともとは架空のミュージックバーのビジュアルコンセプトとして制作され、その後、オープンなオンライン実験プラットフォームへと発展しました。ユーザーはマイクや音楽、環境音を通じて、リアルタイムにタイポグラフィビジュアルを生成し、音と文字の知覚的な関係性を探ることができます。

BRUT は、モーションビジュアル制作における複雑なプログラミング依存への問いかけを出発点とし、より直感的で参加しやすい生成表現の可能性を探求しています。
`,
    },

    images: [
      { src: "/images/BRUT-1.gif", size: "small" },
      { src: "/images/BRUT-2.jpg", size: "large" },
      { src: "/images/BRUT-3.jpg", size: "large" },
      { src: "/images/BRUT-4.gif", size: "medium" },
    ],
  },


  ]

const aboutText = `A visual designer and artist working across typography, sound, and dynamic visual systems.

Her practice focuses on constructing rule-based frameworks that translate sound, perception, and material into visual form. By combining variable fonts, optical structures, and sound interaction, her work explores the relationship between system, control, and perceptual ambiguity.



Exhibitions

Solo
BRUT — Shanghai, 2025

Group
In Search of Herland — Hangzhou, 2026
TDC Exhibition — New York, 2025
TDC Exhibition — Tokyo, 2025
Hiiibrand Exhibition — Hangzhou, 2025
Design 360 Exhibition — Hangzhou, 2024
Around Publishing, SCAPE — Shanghai, 2024



Awards

TDC New York — Winner, 2025
TDC Tokyo — Winner, 2025
Hiiibrand Awards — Bronze (Digital), 2025
ONE SHOW Awards — Gold, 2017
Tiger Roar Awards — Gold, 2017
4A Creative Awards — Gold, 2017`

export default function App() {
  const [section, setSection] = useState("works")
  const [activeProject, setActiveProject] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const cursor = document.querySelector(".cursor")

    const move = (e) => {
      if (!cursor) return
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>

      <main className="site">
        <aside className={`sidebar ${isScrolled ? "collapsed" : ""}`}>
         <div className="sidebar-inner">
          <div className="mobile-current">

  {activeProject ? `${activeProject.year} / ${activeProject.title}` : "Works"}

</div>
             <div className="sidebar-top"> 
               
              <h1>Huichun Pan</h1>

              <nav>
                <a
                  className={section === "works" ? "active" : ""}
                  onClick={() => setSection("works")}
                >
                  Works
                </a>

                <a
                  className={section === "about" ? "active" : ""}
                  onClick={() => {
                    setSection("about")
                    setActiveProject(null)
                  }}
                >
                  About
                </a>
              </nav>

              {section === "about" && (
                <div className="about-text">
                  <pre>{aboutText}</pre>
                </div>
              )}

              {section === "works" && (
                <section className="project-list">
                  {projects.map((project) => {
                    const isActive =
                      activeProject?.title === project.title

                    return (
                      <div
                        key={project.title}
                        className={`project-item ${
                          isActive ? "active" : ""
                        }`}
                      >
                        <button
                          className="project-row"
                          onClick={() => {
                          setActiveProject(isActive ? null : project)

                           window.scrollTo({
                           top: 0,
                           left: 0,
                            behavior: "auto",
                            })
}}
                        >
                          <span>{project.year}</span>
                          <span>{project.title}</span>
                          <span>{project.type}</span>
                        </button>

                        <div className="project-expand">
                          <div className="project-description">
                            <pre>{project.description.en}</pre>
                            <pre>{project.description.zh}</pre>
                            <pre>{project.description.ja}</pre>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </section>
              )}
            </div>

            <div className="sidebar-footer">
              <a href="mailto:info.payattention.design@gmail.com">
                info.payattention.design@gmail.com
              </a>

              <span>+8618521356701</span>

              <a
                href="https://www.instagram.com/janepeterj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <div className="copyright">
                © 2026 Huichun Pan.
                <br />
                All rights reserved.
              </div>
            </div>
          </div>
        </aside>

        <section className="viewer">
          {section === "about" && (
            <div className="about-image">
              <img src="/images/about-1.jpg" alt="" />
            </div>
          )}

          {section === "works" && activeProject && (
            <div className="image-flow">
              {activeProject.images.map((image, i) => (
                <img
                  key={i}
                  className={image.size}
                  src={image.src}
                  alt=""
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}