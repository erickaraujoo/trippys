/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { DiscordLogo, TwitterLogo } from 'phosphor-react';
import { backgroundImage, bigNft, footer, ntfImg, smallNft } from 'main/assets';
import type { FC } from 'react';

export const AuthTemplate: FC = () => {
  return (
    <>
      <div className={'relative min-h-screen min-w-[100vw]'}>
        <img
          alt={'Road trip illustration with a van, mountains, and text about travel'}
          src={backgroundImage}
        />
      </div>

      <div className={'flex pt-52 justify-center items-center '}>
        <h1 className={'text-3xl uppercase '}>Do you already know our avatar calvin</h1>
      </div>

      <div className={'flex gap-6 p-10 mx-auto max-w-[1140px]'}>
        <div className={'flex items-center w-1/2 px-4'}>
          <p className={'text-lg leading-relaxed text-gray-700'}>
            Meet Calvin, the chill NFT Avatar! With his laid-back vibe, slightly squinted eyes, and
            a serene smile, Calvin is all about that carefree, no-worries attitude. He's totally
            into Reggae, Hippies, and everything from the Woodstock era. Calvin doesn't need shades
            to stay cool; he rocks his relaxed look effortlessly. You can catch him grooving to Bob
            Marley, his rasta-style locks swaying to the beat. When he's not exploring the NFT
            world, Calvin's probably tending to his herb garden or doodling mandalas. His motto?
            "Live and let live." Calvin's always ready to spread good vibes in his digital journey.
          </p>
        </div>

        <img
          alt={'Road trip illustration with a van, mountains, and text about travel'}
          src={ntfImg}
        />
      </div>

      <div className={'flex p-10 bg-gradient-to-b from-gray-900 via-gray-900 to-black'}>
        <section className={'mx-auto max-w-[1140px]'}>
          <div className={'container mx-auto px-4'}>
            <h2 className={'text-4xl font-bold text-end mb-8 content uppercase text-[#FCFC03]'}>
              Just trip, what else?
            </h2>

            <div
              className={
                'flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8'
              }
            >
              <div className={'text-center md:text-left'}>
                <p className={'text-xl mb-4 text-white'}>
                  Just trip, what else? Trippys NFT is about fun and good vibes, always trying to
                  hit a laugh and sometimes reflections. Let's wander through what imagination, the
                  unspeakable and maybe a little bit of psychoactives can show us with the stylish
                  collection pieces. Have fun!!
                </p>

                <div className={' w-full grid grid-cols-7 gap-4 p-4'}>
                  <div className={'col-span-3 row-span-2'}>
                    <img alt={''} src={bigNft} />
                  </div>

                  <div className={'col-span-2 row-span-2'}>
                    <div className={'grid grid-cols-3 gap-4'}>
                      <img alt={''} className={'w-full'} src={smallNft} />
                      <img alt={''} className={'w-full'} src={smallNft} />
                      <img alt={''} className={'w-full'} src={smallNft} />
                      <img alt={''} className={'w-full'} src={smallNft} />
                      <img alt={''} className={'w-full'} src={smallNft} />
                      <img alt={''} className={'w-full'} src={smallNft} />
                    </div>
                  </div>
                </div>

                <p className={'text-xl mb-4 text-white'}>
                  Follow us on Twitter so you don't miss any updates and Set your NFT, until our
                  next trip!
                </p>

                <div className={'flex justify-center md:justify-start gap-3'}>
                  <a
                    className={'inline-flex items-center px-4 py-2 border border-[#FCFC03] '}
                    href={'https://twitter.com/trippysnft'}
                  >
                    <TwitterLogo color={'#FCFC03'} size={24} />
                  </a>

                  <a
                    className={'inline-flex items-center px-4 py-2 border border-[#FCFC03]'}
                    href={'https://twitter.com/trippysnft'}
                  >
                    <DiscordLogo color={'#FCFC03'} size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <img
          alt={'Road trip illustration with a van, mountains, and text about travel'}
          src={footer}
        />
      </footer>
    </>
  );
};
