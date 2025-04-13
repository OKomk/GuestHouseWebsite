import React from 'react';

import { useRouter } from 'next/router';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  const router = useRouter();
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={`${router.basePath}${mainHero.img}`}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
