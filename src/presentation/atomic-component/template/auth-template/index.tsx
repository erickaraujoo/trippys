// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { backgroundImage, ntfImg } from 'main/assets';
import type { FC } from 'react';

export const AuthTemplate: FC = () => {
  return (
    <div className={'relative min-h-screen'}>
      <img
        alt={'Road trip illustration with a van, mountains, and text about travel'}
        src={backgroundImage}
      />

      <div className={'flex pt-52 justify-center items-center '}>
        <h1 className={'text-3xl uppercase '}>Do you already know our avatar calvin</h1>
      </div>

      <div className={'flex justify-center items-center pt-24'}>
        <p>
          Meet Calvin, the chill NFT Avatar! With his laid-back vibe, slightly squinted eyes, and a
          serene smile, Calvin is all about that carefree, no-worries attitude. He's totally into
          Reggae, Hippies, and everything from the Woodstock era. Calvin doesn't need shades to stay
          cool; he rocks his relaxed look effortlessly. You can catch him grooving to Bob Marley,
          his rasta-style locks swaying to the beat. When he's not exploring the NFT world, Calvin's
          probably tending to his herb garden or doodling mandalas. His motto? "Live and let live."
          Calvin's always ready to spread good vibes in his digital journey.
        </p>

        <img alt={'Nft Calvin'} src={ntfImg} />
      </div>
    </div>
  );
};
