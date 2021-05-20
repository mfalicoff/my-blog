import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineering Student</div>
            <div className="text-gray-500 dark:text-gray-400">Polytechnique Montreal</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="block items-center justify-between py-10">
            <div>
              <h3 className="text-center underline">Favourite Game</h3>
              <img src="/static/images/favourites/p3Fes.jpg" alt="Persona 3 FES" />
              <h4 className="text-center justify-between py-10">Persona 3 FES</h4>
            </div>
            <div>
              <h3 className="text-center underline">Favourite Book</h3>
              <img src="/static/images/favourites/1984.jpg" alt="1984" />
              <h4 className="text-center justify-between py-10">1984</h4>
            </div>
            <div>
              <h3 className="text-center underline">Favourite Movie</h3>
              <img src="/static/images/favourites/2049.jpg" alt="2049" />
              <h4 className="text-center justify-between py-10">Blade Runner 2049</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
