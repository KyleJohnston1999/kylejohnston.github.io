import React, { FC, useEffect } from 'react';
import './InfoBlob.scss';
import kute from 'kute.js';
interface BlobAnimationProps {}

const BlobAnimation: FC<BlobAnimationProps> = () => {
  useEffect(() => {
    const tween: any = kute.fromTo('#blob-start', {path: '#blob-start'}, {path: '#blob-end'}, {repeat: 999, duration: 10000, yoyo: true});
    tween.start();
  },[])

  return (
  <div className='Blob'>
        <div className='Background'>
      <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g transform="translate(469.1029639900604 322.5910980468616)">
            <path id="blob-start"
              d="M103.3 -125.3C128.3 -78.3 139.1 -39.1 146.7 7.5C154.2 54.2 158.4 108.4 133.4 144.8C108.4 181.1 54.2 199.5 -2.7 202.3C-59.6 205 -119.3 191.9 -148.9 155.6C-178.6 119.3 -178.3 59.6 -183.8 -5.5C-189.4 -70.7 -200.8 -141.4 -171.1 -188.4C-141.4 -235.4 -70.7 -258.7 -15.8 -242.9C39.1 -227.1 78.3 -172.3 103.3 -125.3"
              fill="#FB8B24"></path>
        </g>
        <g transform="translate(466.73608923890924 273.58665275443934)" style={{visibility: 'hidden'}}>
            <path id="blob-end"
              d="M173.9 -158.4C214.4 -133.4 228.7 -66.7 222.3 -6.4C216 54 189 108 148.5 149.1C108 190.3 54 218.6 -4.9 223.6C-63.9 228.5 -127.8 210.1 -177.8 168.9C-227.8 127.8 -263.9 63.9 -256.2 7.7C-248.6 -48.6 -197.1 -97.1 -147.1 -122.1C-97.1 -147.1 -48.6 -148.6 9.1 -157.6C66.7 -166.7 133.4 -183.4 173.9 -158.4"
              fill="#FB8B24"></path>
        </g>
      </svg>
    </div>
  </div>
)};

export default BlobAnimation;
