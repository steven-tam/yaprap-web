import { useEffect, useState } from 'react';

const usePlatform = () => {
  const [platform, setPlatform] = useState('web');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();

      if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
        setPlatform('ios');
      } else if (userAgent.includes('android')) {
        setPlatform('android');
      }
    }
  }, []);

  return platform;
};

export default usePlatform;
