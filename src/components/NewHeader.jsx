/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  Squares2X2Icon,
  ShieldCheckIcon,
  ArrowPathIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
// @ts-ignore
import profilePicture from '@/images/avatar.png'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="flex px-3 py-2 ml-auto transition rounded-full shadow-lg group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-orange-50 [@media(prefers-color-scheme:dark)]:stroke-orange-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-orange-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-orange-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-orange-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-orange-500" />
    </button>
  )
}

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href


  function checkViewport() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        return "flex items-center justify-center -m-3"
      } else {
        return false
      }
    }
  }

  return (
        <Link
          href={href}
          className={clsx(
            // font SF Pro
            'text-base relative font-medium tracking-tight transition px-5 py-2 rounded-md font-[font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif] rounded-lg hover:bg-gray-50 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 shadow-lg shadow-zinc-800/5',
            isActive
              ? 'text-zinc-800 dark:text-orange-400'
              : 'hover:text-orange-500 dark:hover:text-orange-400 dark:text-zinc-300 text-zinc-500',
              // add classVariants value
                checkViewport()
          )}
        >
          {children}
          {isActive && (
            <span className="absolute h-[1px] inset-x-1 -bottom-px bg-gradient-to-r from-blue-500/0 via-orange-400/80 to-blue-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0" />
          )}
        </Link>
  )
}

function CollapseHeader({ children }) {
  let isCollapsed = false
  return (
    <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-400 bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  )
}

export function NewHeader() {

  const variants = {
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom*0.5 , duration: 0.5, stiffness: 150, type: 'spring', damping: 40 },
    })
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 3, type: 'spring', stiffness: 250, damping: 20 }}
      className="relative sticky z-40 m-4 rounded-full top-4 ring-1 ring-gray-200 bg-white/80 dark:ring-zinc-700 dark:bg-zinc-800/80 backdrop-blur-sm shadow-xl dark:shadow-orange-400/20"
    >
    <Popover>
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:space-around md:space-x-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: 45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 400 }}
              whileHover={{ rotate: -20, scale: 1.1 }}
              
            >
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Marcus Vaitschulis</span>
            <Image
              className={clsx(
                'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ring ring-zinc-200 dark:ring-zinc-800 ring-inset brightness-75 h-16 w-16'
              )}
              src={profilePicture}
              alt="Profile Image"
              priority
              width={64}
              height={64}
            />
          </a>
        </div>
          </motion.div>
          <motion.div className="hidden md:flex" initial={{opacity: 0, y: 40}} custom={1} animate="visible" variants={variants}><NavItem href="/">Home</NavItem></motion.div>
          <motion.div className="hidden md:flex" initial={{opacity: 0, y: 40}} custom={2} animate="visible" variants={variants}><NavItem href="/about">About</NavItem></motion.div>
          <motion.div className="hidden md:flex" initial={{opacity: 0, y: 40}} custom={3} animate="visible" variants={variants}><NavItem href="/articles">Articles</NavItem></motion.div>
          <motion.div className="hidden md:flex" initial={{opacity: 0, y: 40}} custom={4} animate="visible" variants={variants}><NavItem href="/projects">Projects</NavItem></motion.div>
          {/*<motion.div className="hidden md:flex" initial={{opacity: 0, y: 40}} custom={5} animate="visible" variants={variants}><NavItem href="/speaking">Speaking</NavItem></motion.div>*/}
          <motion.div className="hidden md:flex" initial={{opacity: 0, y: 40}} custom={6} animate="visible" variants={variants}><NavItem href="/uses">Uses</NavItem></motion.div>
          <div className="-my-2 -mr-2 ml-auto md:hidden">
          <Popover.Button className="inline-flex items-center dark:text-zinc-600 justify-center p-2 text-gray-400 bg-white dark:bg-zinc-800 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
              <span className="sr-only">Open menu</span>
              <Squares2X2Icon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <ModeToggle />
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white dark:bg-zinc-800 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2 ml-auto">
                  <Popover.Button className="inline-flex items-center justify-center p-2 dark:text-orange-500 text-zinc-400 hover:text-zinc-500 dark:hover:text-orange-500 rounded-md group bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6 space-y-1">
             {/*     {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-orange-500 rounded-md">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}*/}
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/articles">Articles</NavItem>
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="/speaking">Speaking</NavItem>
                <NavItem href="/uses">Uses</NavItem>
                <ModeToggle />
                </nav>
              </div>
            </div>

          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </motion.div>
  )
}
