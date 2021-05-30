import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import CurrentMedia from '@/data/currentMedia'
import futureMedia from '@/data/futureMedia'
import Card from '@/components/Card'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="container py-12">
            <h1 className="!font-bold underline">Currently Playing/Reading</h1>
            <br />
            <div>
              <h3 className="underline m-10">Games</h3>
              <div className="flex flex-wrap -mt-7">
                {CurrentMedia.map((d) => {
                  if (d.type === 'Game') {
                    return (
                      <Card
                        key={d.title}
                        title={d.title}
                        description={d.description}
                        imgSrc={d.imgSrc}
                        type={d.type}
                        href={d.href}
                      />
                    )
                  }
                })}
              </div>
              <h3 className="underline m-10">Other Media</h3>
              <div className="flex flex-wrap -mt-7">
                {CurrentMedia.map((d) => {
                  if (d.type !== 'Game') {
                    return (
                      <Card
                        key={d.title}
                        title={d.title}
                        description={d.description}
                        imgSrc={d.imgSrc}
                        type={d.type}
                        href={d.href}
                      />
                    )
                  }
                })}
              </div>
              <div>
                <h3 className="underline m-10">In the log</h3>
                {futureMedia.map((d) => {
                  return (
                    <li key={d.title}>
                      {d.title}: {d.type}
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
