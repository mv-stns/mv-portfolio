import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import { NewHeader } from '@/components/NewHeader'
import { motion } from 'framer-motion'
import { Notice } from "@/components/NoticeContainer";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Analytics } from "@vercel/analytics/react";

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  // revalidate after 60 seconds
    pageProps.revalidate = 60

  // cookie collector, that collects nothing but makes the user accept that no cookies are collected
    useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cookiehub.net/cc/3b3f4b3c.js'
    script.async = true
    document.body.appendChild(script)
    }, [])


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full">
            <div className="relative w-full bg-white rounded-lg ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
        <Notice title="Cookie Disclaimer" description="We don't collect anything, just wanted to let you know!" buttonText="Alright" icon="XIcon" />
          <NewHeader />
          <main>
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      </motion.div>
      <Analytics />
    </>
  )
}
