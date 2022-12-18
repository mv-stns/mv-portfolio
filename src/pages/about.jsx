/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'
import { MotionConfig } from 'framer-motion'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Marcus Vaitschulis</title>
        <meta
          name="description"
          content="I’m Marcus Vaitschulis. I live in Germany Wiesbaden, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              {/* image with Framer Motion animation when hovered */}
              <motion.div
                whileHover={{ 
                  scale: 1.3,
                  transition: { duration: 0.3, type: 'spring', stiffness: 150 },
                  rotate: -5,
                 }}
                initial={{
                  opacity: 1,
                  rotate: 10,
                }}
                >
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="object-cover shadow-xl aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                />
              </motion.div>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Marcus Vaitschulis. I live in Germany, Wiesbaden, where I design the
              future.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p> 
                {/* Introduction to why i love computers */}
                I’ve loved making things for as long as I can remember, and started designing when I was around 9 years old. Thankfully, my brother shared his computer with me, and I was able to learn to use the Adobe Creative Cloud. Especially Photoshop, to create forum banners, profile pictures, and learn all the tools this software has to offer. I should also mention that sharing his computer with me was paid for by me making him breakfast for almost a decade.
              </p>
              <p>
              I am a huge technology enthusiast, especially when it comes to gaming. Some of my all-time favorite games include League of Legends, Counterstrike, and Minecraft. I can easily lose myself for hours on end playing these games and exploring the digital world.
              As I got older, my love for technology only continued to grow. I started to take an interest in using computers and design software, and I spent a lot of time learning how to code and create graphics. I became fascinated by the endless possibilities that these tools provided, and I was excited to use them to create my own games and designs.
              Now, I consider myself an expert in using computers and design software, and I am constantly finding new ways to use these skills to create and innovate.
              I am passionate about using technology to make a positive impact in the world, and I can’t wait to see where my love for computers and design software will take me next.
              </p>
              <p>
                I spent the next few summers indoors working on a rocket design,
                while I recovered from the multiple surgeries it took to fix my
                badly broken legs. It took nine iterations, but when I was 15 I
                sent my dad’s Blackberry into orbit and was able to transmit a
                photo back down to our family computer from space.
              </p>
              <p>
                Today, I’m the founder of Planetaria, where we’re working on
                civilian space suits and manned shuttle kits you can assemble at
                home so that the next generation of kids really <em>can</em>{' '}
                make it to orbit — from the comfort of their own backyards.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:marcus@vaitschulis.com"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                marcus@vaitschulis.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
