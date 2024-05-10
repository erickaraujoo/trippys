// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { backgroundImage, footer, ntfImg } from 'main/assets';
import type { FC } from 'react';

export const AuthTemplate: FC = () => {
  const images = [
    {
      alt: 'Image 1',

      large: true,

      src: 'https://via.placeholder.com/600x600/FFC107/FFFFFF?text=Image+1'
    },

    {
      alt: 'Image 2',

      src: 'https://via.placeholder.com/300x300/E91E63/FFFFFF?text=Image+2'
    },

    {
      alt: 'Image 3',

      src: 'https://via.placeholder.com/300x300/673AB7/FFFFFF?text=Image+3'
    },

    {
      alt: 'Image 4',

      src: 'https://via.placeholder.com/300x300/2196F3/FFFFFF?text=Image+4'
    },

    {
      alt: 'Image 5',

      src: 'https://via.placeholder.com/300x300/009688/FFFFFF?text=Image+5'
    },

    {
      alt: 'Image 6',

      src: 'https://via.placeholder.com/300x300/7E5BE9/FFFFFF?text=Image+6'
    },

    {
      alt: 'Image 7',

      src: 'https://via.placeholder.com/300x300/D81B60/FFFFFF?text=Image+7'
    }
  ];

  return (
    <>
      <div className={'relative min-h-screen'}>
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

      <section className={'bg-gray-100 py-12 bg-gradient-to-b from-{#f7f7f7} to-black'}>
        <div className={'container mx-auto px-4'}>
          <h2 className={'text-4xl font-bold text-center mb-8'}>Trippys NFT</h2>

          <div
            className={
              'flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8'
            }
          >
            <div className={'text-center md:text-left'}>
              <p className={'text-xl mb-4'}>
                Just trip, what else? Trippys NFT is about fun and good vibes, always trying to hit
                a laugh and sometimes reflections. Let's wander through what imagination, the
                unspeakable and maybe a little bit of psychoactives can show us with the stylish
                collection pieces. Have fun!!
              </p>

              <p className={'text-xl mb-4'}>
                Follow us on Twitter so you don't miss any updates and Set your NFT, until our next
                trip!
              </p>
            </div>

            <div className={'md:w-1/3'}>
              <img
                alt={'Trippys NFT'}
                className={'w-full h-auto rounded-lg'}
                src={'path/to/trippys-nft-image.png'}
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <img
          alt={'Road trip illustration with a van, mountains, and text about travel'}
          src={footer}
        />
      </footer>
    </>
  );
};
