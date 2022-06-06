import React, { memo, useEffect, useMemo, useState } from 'react'
import RedirectIcon from '../components/RedirectIcon'

import LazyMarkdown from '../components/LazyMarkdown'

import env from '../env'

import '../styles/Home.css'

const Home: React.FC = () => {
  function top() {
    return (
      <div className="min-h-screen max-h-fit w-full sm:p-5 flex flex-row justify-center">
        <div className="bg-discord-black sm:rounded-2xl transition-all sm:w-3/4 h-fit min-h-screen sm:min-h-fit">
          <div
            className="overflow-hidden sm:rounded-t-2xl -mb-24 w-full"
            style={{
              maxHeight: '20vh',
            }}
          >
            <img
              src="assets/img/cover.jpg"
              alt=""
              className="object-cover w-fit"
            />
          </div>
          <div className="mx-6 py-6">
            <img
              src="https://cdn.discordapp.com/avatars/766662735731490817/3544cd0cfbd581ccf4492c5aa9e5bcd7.png"
              alt="Discord profile picture"
              className="rounded-full overflow-hidden"
            />
            <div className="my-3 divide-y divide-solid divide-discord-dark">
              <div className="block py-3 pt-0">
                <span className="text-3xl font-bold">
                  {env.discord[0]}
                  <span className="text-discord-secondary">
                    #{env.discord[1]}
                  </span>
                </span>
              </div>
              <div>
                <LazyMarkdown url="assets/about.md" />
              </div>
              <div className="py-3 flex flex-row flex-wrap justify-between">
                {env.socialUrl.map((social, item) => (
                  <a
                    key={item}
                    href={social[2]}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-solid border-discord-secondary rounded-md p-2 m-1 flex flex-row justify-between sc-w"
                  >
                    <div className="flex flex-row">
                      <img
                        src={'assets/img/' + social[0]}
                        alt={`${social[1]} - Social media`}
                      />
                      <span className="ml-2">{social[1]}</span>
                    </div>
                    <RedirectIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function projects() {
    return (
      <div
        className="w-full h-screen bg-discord-gray p-2 md:p-10"
        id="projects"
      >
        <span className="text-4xl font-medium m-5">Projects</span>
        <div className="w-full h-full p-5">
          <div className="h-full flex flex-row items-start flex-wrap content-start justify-center">
            {env.urProjects.map((item, index) => (
              <a
                key={index}
                href={item[0]}
                target="_blank"
                rel="noreferrer"
                className="md:w-1/2 h-fit pb-0 -mb-5"
              >
                <img
                  src={'assets/img/' + item[2]}
                  alt={item[1]}
                  loading="lazy"
                />
                <div className="relative -top-14 left-8 flex-row align-baseline inline-flex w-4/5">
                  <span className={`text-2xl inline ${item[3] ? item[3] : ''}`}>
                    {item[1]}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function bottom() {
    return (
      <div className="w-full bg-white m-10">
        <a
          href="https://github.com/hUwUtao"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-semibold"
        >
          Made by hUwUtao
        </a>
      </div>
    )
  }

  const pageSectors = [top, projects, bottom]
  // const [lastScroll, setLastScroll] = useState(0)
  // const [current, setCurrent] = useState<number>(0)

  // useEffect(() => {
  //   function onScroll() {
  //     const scroll = window.scrollY
  //     if (scroll > lastScroll) {
  //       setCurrent(Math.max(0, current - 1))
  //     } else {
  //       setCurrent(Math.min(pageSectors.length - 1, current + 1))
  //     }
  //     setCurrent(scroll)
  //   }
  //   window.addEventListener('scroll', onScroll)
  // })

  return (
    // <div
    //   className="bg-discord-gray -z-50 min-h-screen min-w-full"
    //   style={{
    //     backgroundImage: `url(${DiscordArt})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundAttachment: 'fixed',
    //   }}
    // >
    <>
      {pageSectors.map((Sector, index) => (
        <div key={index} id={`scr${index}`} className="snap-start">
          <Sector />
        </div>
      ))}
    </>
    // </div>
  )
}
export default Home
