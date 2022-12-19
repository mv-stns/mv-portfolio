import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Marcus Vaitschulis</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, Intel Core i7, 16GB RAM (Late 2019)">
              All handy for web development, but I’m not a fan of the keyboard.
              Could be better. But trusty nonetheless. Worked well for me for the last 2 years.
            </Tool>
            <Tool title="hp Pavilion 27xi Display">
              Does it&apos;s job. Great additional screen for my MacBook Pro.
            </Tool>
            <Tool title="MX Keys for Mac">
                I love the keyboard. It&apos;s a bit pricey, but it&apos;s worth it.
                I&apos;m using it for a year now and I&apos;m still happy with it.
                It has a great feel and it&apos;s very quiet.
            </Tool>
            <Tool title="MX Master 3s">
              The best office mouse I&apos;ve ever used. Very comfortable and precise.
              Alot of features and it&apos;s very customizable. Also using it for a year now and I&apos;m still happy with it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode">
              Very powerful and customizable. Community is great & the extensions are awesome.
              I&apos;m recently switched to WebStorm, but I&apos;m still using VSCode for some projects.
            </Tool>
            <Tool title="PhpStorm">
                Very powerful php IDE. Didn&apos;t use it for a long time, but will try out in my higher education.
            </Tool>
            <Tool title="WebStorm">
              Currently using WebStorm for my projects. Beautiful new interface and great features.
              I&apos;ll stick with it for a while until I&apos;ll miss VSCode 😅.
            </Tool>
            <Tool title="Warp">
              Very fast and powerful Terminal. Artifical Intelligence is very handy when i need to search for something.
            </Tool>
            <Tool title="TablePlus">
              Best databaste tool avaliable for Mac. Period.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
            <Tool title="Adobe Creative Cloud">
              Who would have thought.
              No but for real, it&apos;s a great tool for designers. The best if you ask me.
              But unfortunately it&apos;s a subscription model and takes the money out of your pocket.
            </Tool>
            <Tool title="Affinity Suit by Sans Serif">
              The biggest competitor to Adobe Creative Cloud. Huge software with similar features like Adobe.
              One time payment and you&apos;re good to go.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              The fastest commandbar for Mac. Heavily customizable and very fast.
              If you&apos;re using a Mac, you have to try it out.
            </Tool>
            <Tool title="Craft.do">
              Writing down my daily notes and some tasks. Heavily using it for my education.
              Great features like TeX Support, Markdown Support, and more.
            </Tool>
            <Tool title="Notion">
              Second Brain for me. Writing down my tasks with Hyper, an Extension for Raycast,
              to easily access my tasks. Also using it for my education and for work.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
