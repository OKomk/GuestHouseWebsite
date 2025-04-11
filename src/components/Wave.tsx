import { FC, useEffect, useState } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check initially
    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'class' &&
          mutation.target === document.documentElement
        ) {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const waves = {
    frontWave: new WaveObj(
      [0.0211, 0.028, 0.015],
      isDarkMode ? 'rgba(217, 119, 6, 0.1)' : 'rgba(245, 158, 11, 0.1)'
    ),
    backWave: new WaveObj(
      [0.0122, 0.018, 0.005],
      isDarkMode ? 'rgba(146, 64, 14, 0.1)' : 'rgba(180, 83, 9, 0.1)'
    ),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };

  if (context) render();
  return null;
};

export default Wave;
