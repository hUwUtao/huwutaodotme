import React from 'react'
import { Fullpage } from '../components/Fullpage'
import Particles from 'react-tsparticles'
import {
  Container as PContainer,
  Engine as PEngine,
  ISourceOptions,
} from 'tsparticles'
import '../styles/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faFacebookF,
  faSteam,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

const githubUrl = 'https://github.com/hUwUtao'
interface ISection {
  parentState: any | null
}

const particlesConfig: ISourceOptions = {
  background: {
    color: {
      value: '#232741',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: 'repulse',
      // },
      onHover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0,
        size: -0.5,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'out',
      random: true,
      speed: 1,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 160,
    },
    opacity: {
      value: 1,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
}

const BgParticle: React.FC = React.memo(function BgParticle() {
  const particlesInit = (engine: PEngine): Promise<void> => {
    console.log(engine)
    return Promise.resolve()
  }
  const particlesLoaded = (container: PContainer): Promise<void> => {
    console.log(container)
    return Promise.resolve()
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  )
})

const TopBanner: React.FC<ISection> = (props: ISection) => {
  const socialLinks: Array<{
    url: string
    icon: IconDefinition
  }> = [
    {
      url: githubUrl,
      icon: faGithubAlt,
    },
    {
      url: 'https://fb.me/hUwUtao',
      icon: faFacebookF,
    },
    {
      url: 'https://steamcommunity.com/id/hUwUtao',
      icon: faSteam,
    },
    {
      url: 'https://twitter.com/Yanfaru',
      icon: faTwitter,
    },
  ]
  return (
    <div className="bpage">
      <div className="hbanner">
        <div className="title">
          <h2>I&apos;m hUwUtao</h2>
          <div className="brnds">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <hr className="hsp" />
        <div className="subtitle">
          <h3>
            I&apos;m a software engineer, also a hobbyist Javascript developer.
          </h3>
        </div>
      </div>
    </div>
  )
}

const Projects: React.FC<ISection> = (props: ISection) => {
  const projects: Array<{
    title: string
    imgurl: string
    target: string
  }> = [
    {
      title: 'Team Fuho Blogpage',
      imgurl: '/assets/img/teamfuho.net.png',
      target: 'https://teamfuho.net',
    },
    {
      title: 'Team Fuho Blogpage',
      imgurl: '/assets/img/teamfuho.net.png',
      target: 'https://teamfuho.net',
    },
  ]
  return (
    <div className="ppage">
      <div className="projects">
        <div className="pcon">
          <h1>Projects</h1>
          <div className="plist">
            {projects.map((project, index) => (
              <div className="pitem" key={index}>
                <a href={project.target}>
                  <div className="pimg">
                    <img src={project.imgurl} alt={project.title} />
                  </div>
                  <div className="ptitle">
                    <h2>{project.title}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <h3 className="mog">
            <a href={githubUrl}>
              More project on &nbsp;
              <span>
                <FontAwesomeIcon icon={faGithubAlt} />
                &nbsp;Github
              </span>
            </a>
          </h3>
        </div>
      </div>
    </div>
  )
}

const Footer: React.FC<ISection> = (props: ISection) => {
  const content = 'Made by hUwUtao with <3, under MIT license since 2022'
  return (
    <div className="footer">
      <h3>{content}</h3>
    </div>
  )
}

export const Home: React.FC = () => {
  return (
    <div className="page">
      <BgParticle />
      <Fullpage
        options={{
          cards: true,
          cardsOptions: {
            perspective: 100,
            fadeContent: true,
            fadeBackground: true,
          },
        }}
        components={[
          { tooltip: 'Introduce', component: <TopBanner parentState={null} /> },
          { tooltip: 'Projects', component: <Projects parentState={null} /> },
          { tooltip: 'The end?', component: <Footer parentState={null} /> },
        ]}
      />
    </div>
  )
}
