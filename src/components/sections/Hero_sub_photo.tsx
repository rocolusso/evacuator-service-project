import React from 'react';
import Image from 'next/image';

const HeroSubPhoto = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        src={'/evacuator-chisinau.jpg'}
        alt={'evacuator-chisinau'}
        width={800}
        height={800}
      />
    </div>
  );
};

export default HeroSubPhoto;
