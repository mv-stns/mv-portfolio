import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoHSRM from '@/images/logos/hsrm.svg'
import logoEidos from '@/images/logos/eidos.svg'
import logoBctr from '@/images/logos/bctrMin.svg'
import logoAKBK from '@/images/logos/akbk.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoRW from '@/images/logos/r&w.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function DiplomahatIcon(props) {
  return (
    <svg 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      {...props}
    >
    <path 
      className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" 
    />
</svg>
  )
}

        

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  // when submit is clicked, the form will be submitted to the action URL
  // and the thank you page will be displayed



  return (
    <form
      action="/thank-you"
      className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex mt-6">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 sm:text-sm"
        />
        <Button type="submit" className="flex-none ml-4">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume({isVisible}) {

  let education = [
    {
      school: 'Hochschule RheinMain',
      degree: 'B.S. Computer Science',
      logo: logoHSRM,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      }
    },
    {
      school: 'Adolph-Kolping-Berufskolleg Münster',
      degree: 'state -certified media designer',
      logo: logoAKBK,
      start: '2019',
      end: '2022',
    },
    {
      school: 'Adolph-Kolping-Berufskolleg Münster',
      degree: 'Design-Tech-Assistant & college entrance qualification',
      logo: logoAKBK,
      start: '2014',
      end: '2017',
    },
  ]
  let resume = [
    {
      company: 'Burhan CTR GmbH & Co. KG',
      title: 'Design and Administration',
      start: '2019',
      logo: logoBctr,
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'R&W Gebädereinigung',
      title: 'Janitor',
      logo: logoRW,
      start: '2018',
      end: '2019',
    },
    {
      company: 'eidos shirts',
      title: 'Textile designer and production',
      logo: logoEidos,
      start: '2016',
      end: '2016',
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          />
      )}
    <div className="p-6 space-y-10 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="flex-none w-6 h-6" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4 group">
              <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 transition-all duration-300 scale-100 rounded-full shadow-md group-hover:scale-105 shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-wrap flex-auto gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="flex-none w-full text-sm font-medium transition-all duration-300 translate-y-4 text-zinc-900 dark:text-zinc-100 group-hover:translate-y-0">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs transition-all duration-300 opacity-0 text-zinc-500 dark:text-zinc-400 group-hover:opacity-100">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs transition-all duration-300 translate-y-4 opacity-0 text-zinc-400 dark:text-zinc-500 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
      
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <DiplomahatIcon className="flex-none w-6 h-6" />
          <span className="ml-3">Education</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {education.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4 group">
              <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 transition-all duration-300 scale-100 rounded-full shadow-md group-hover:scale-105 shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-wrap flex-auto gap-x-2">
                <dt className="sr-only">Institution</dt>
                <dd className="flex-none w-full text-sm font-medium transition-all duration-300 translate-y-4 text-zinc-900 dark:text-zinc-100 group-hover:translate-y-0">
                  {role.school}
                </dd>
                <dt className="sr-only">Degree</dt>
                <dd className="text-xs transition-all duration-300 opacity-0 text-zinc-500 dark:text-zinc-400 group-hover:opacity-100">
                  {role.degree}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs transition-all duration-300 translate-y-4 opacity-0 text-zinc-400 dark:text-zinc-500 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <Button variant="disabled" disabled className="w-full mt-6 group">
          Download CV
          <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
    </AnimatePresence>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <motion.div
          className={clsx(
            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
            rotations[imageIndex % rotations.length]
          )}
          whileHover={{
            transition: { duration: 0.3, type: 'spring', stiffness: 150 },
            rotate: -5,
            className: rotations[imageIndex % rotations.length],
          }}
          whileInView={{
            transition: { duration: 0.3, type: 'spring', stiffness: 150 },
          }}

            key={image.src}
            // refactor ClassNames to whileInView
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: imageIndex * 0.1 }}
            

          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Marcus Vaitschulis - Media computer science student, UI/UX designer and web developer
        </title>
        <meta
          name="description"
          content="I'm Marcus Vaitschulis. I'm 24 years old and a media computer science student, UI/UX designer and web developer and currently in my first year at the University of Applied Sciences in Wiesbaden, Germany."
        />
      </Head>
      <Container className="mt-9">
        <div className="w-full">
          <h1 className="text-4xl font-black tracking-tight text-center text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Media computer science student, UI/UX designer and web developer
          </h1>
          <p className="mt-6 text-base text-center text-zinc-600 dark:text-zinc-400">
            I&apos;m Marcus, a media computer science student, UI/UX designer and web developer and currently in my first year 
            at the University of Applied Sciences in Wiesbaden, Germany.
            I develop software to aquire better understanding and to change the future
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <SocialLink
              href="https://twitter.com/marcussowieso"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/juanetacinopen"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/mv-stns"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            {/* <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
