import Image from 'next/legacy/image'
import { ReactFragment } from 'react'
import { resolve } from 'url'

import { get, getLang } from '@utils/use-lang'
import { GhostSettings } from '@lib/ghost'

import { DocumentHead } from '@components/DocumentHead'
import { SubscribeOverlay } from '@components/Subscribe/overlay'
import { SubscribeSuccess } from '@components/Subscribe/success'

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

interface LayoutProps {
  settings: GhostSettings
  header: ReactFragment
  children: ReactFragment
  isHome?: boolean
  previewPosts?: ReactFragment
  bodyClass: string
  errorClass?: string
}

export const Layout = ({
  settings,
  header,
  children,
  previewPosts,
  bodyClass,
  errorClass = ``
}: LayoutProps) => {
  const { lang } = settings
  const text = get(getLang(lang))
  const site = settings
  const title = text(`SITE_TITLE`, site.title)
  const { siteUrl, memberSubscriptions } = settings.processEnv

  return (
    <>
      <DocumentHead className={bodyClass} />

      <div className="site-wrapper">
        {/* The main header section on top of the screen */}
        {header}

        {/* The main content area */}
        <main id="site-main" className={`site-main ${errorClass}`}>
          {children}
        </main>

        {/* Links to Previous/Next posts */}
        {previewPosts}

        {/* The footer */}
        <footer className="site-footer outer">
          <div className="site-footer-content inner">
            <section className="copyright">
              <a href={resolve(siteUrl, '')}>{title}</a> &copy;{' '}
              {new Date().getFullYear()}
            </section>

            <nav className="site-footer-nav">
              <a
                href="https://github.com/deptagency"
                target="_blank"
                title="Github"
                rel="noopener noreferrer"
              >
                <Image
                  alt="GitHub Logo"
                  src="/icons/github.svg"
                  height="18"
                  width="18"
                />
              </a>
              <a
                href="https://www.twitch.tv/deptagencyus"
                target="_blank"
                title="Twitch"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Twitch Logo"
                  src="/icons/twitch.svg"
                  height="18"
                  width="18"
                />
              </a>
              <a
                href="https://www.instagram.com/deptagency"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Instagram Logo"
                  src="/icons/instagram.svg"
                  height="18"
                  width="18"
                />
              </a>
              <a
                className="twitter"
                href="https://twitter.com/DeptAgency"
                target="_blank"
                title="Twitter"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Twitter Logo"
                  src="/icons/twitter.svg"
                  height="15"
                  width="18"
                />
              </a>
              <a
                href="https://www.facebook.com/DeptAgency"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Facebook Logo"
                  src="/icons/facebook.svg"
                  height="18"
                  width="18"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/deptagency"
                target="_blank"
                title="LinkedIn"
                rel="noopener noreferrer"
              >
                <Image
                  alt="LinkedIn Logo"
                  src="/icons/linkedin.svg"
                  height="18"
                  width="18"
                />
              </a>
            </nav>
          </div>
        </footer>
      </div>

      {memberSubscriptions && <SubscribeSuccess {...{ title, lang }} />}

      {/* The big email subscribe modal content */}
      {memberSubscriptions && <SubscribeOverlay {...{ settings }} />}
    </>
  )
}
