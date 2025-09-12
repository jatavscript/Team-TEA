'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sikkimMediaContent: MediaContentCollection = {
  video: {
    src: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
    poster: 'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    background: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
    title: 'Sikkim Heritage Journey',
    date: 'Digital Monastery Tour',
    scrollToExpand: 'Scroll to Explore',
    about: {
      overview:
        'Experience the mystical beauty of Sikkim through our immersive digital heritage tour. Discover ancient monasteries, breathtaking landscapes, and rich cultural traditions as you scroll through this interactive journey. This component showcases the power of modern web technology in preserving and sharing cultural heritage.',
      conclusion:
        'The ScrollExpandMedia component brings Sikkim\'s heritage to life through interactive storytelling. As you scroll, the video expands to reveal more details about the monasteries, creating an engaging and educational experience that connects visitors with the spiritual essence of this Himalayan kingdom.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
    background: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    title: 'Monastery Architecture',
    date: 'Ancient Wisdom',
    scrollToExpand: 'Scroll to Discover',
    about: {
      overview:
        'Explore the intricate architecture of Sikkim\'s ancient monasteries through this interactive image showcase. Each scroll reveals more details about the traditional building techniques, religious symbolism, and cultural significance embedded in these sacred structures.',
      conclusion:
        'The ScrollExpandMedia component works beautifully with both images and videos, allowing us to showcase different aspects of Sikkim\'s heritage. This flexibility enables us to create diverse and engaging experiences that cater to different learning preferences and content types.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sikkimMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>
        About This Experience
      </h2>
      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.conclusion}
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4 text-white'>Key Features</h3>
          <ul className='space-y-2 text-white/90'>
            <li>• Interactive scroll-based expansion</li>
            <li>• Immersive media experience</li>
            <li>• Mobile-responsive design</li>
            <li>• Cultural heritage preservation</li>
          </ul>
        </div>
        
        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4 text-white'>Technology</h3>
          <ul className='space-y-2 text-white/90'>
            <li>• React & TypeScript</li>
            <li>• Framer Motion animations</li>
            <li>• Tailwind CSS styling</li>
            <li>• Touch & wheel interactions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sikkimMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = sikkimMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sikkimMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = sikkimMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const ScrollExpansionDemo = () => {
  const [mediaType, setMediaType] = useState('video');
  const currentMedia = sikkimMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen'>
      <div className='fixed top-4 right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg transition-all ${
            mediaType === 'video'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-black/50 text-white border border-white/30 hover:bg-white/10'
          }`}
        >
          Video Tour
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg transition-all ${
            mediaType === 'image'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-black/50 text-white border border-white/30 hover:bg-white/10'
          }`}
        >
          Image Gallery
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as 'video' | 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default ScrollExpansionDemo;
