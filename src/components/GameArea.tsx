'use client'

import { useState, useCallback } from 'react';

export default function GameArea() {
  const [iframeKey, setIframeKey] = useState(0);

  const resetGame = useCallback(() => {
    setIframeKey(prevKey => prevKey + 1);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
        <iframe
          key={iframeKey}
          src="https://html5.gamedistribution.com/a1b7ac4025214a5cb0bd01a4f675513a/?utm_source=funnyshooter2.online&utm_medium=funny-shooter-2&utm_campaign=block-and-redirect"
          className="w-full h-full rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full max-w-5xl mt-4 flex justify-between">
        <button 
          onClick={resetGame}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>
        <button 
          onClick={toggleFullscreen}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          Full Screen
        </button>
      </div>
    </div>
  );
}