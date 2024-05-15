import React, { FC, useEffect } from 'react';
import kute from 'kute.js';
interface WaveProps {
}



const Wave: FC<WaveProps> = () => {
    useEffect(() => {
        const tween: any = kute.fromTo('#wave-start', {path: '#wave-start'}, {path: '#wave-end'}, {repeat: 999, duration: 3000, yoyo: true});
        tween.start();
    },[])
    
    return (
    <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
    version="1.1">
        <path id='wave-start'
            d="M0 413L21.5 415.8C43 418.7 86 424.3 128.8 431.2C171.7 438 214.3 446 257.2 447.7C300 449.3 343 444.7 385.8 451.3C428.7 458 471.3 476 514.2 474.3C557 472.7 600 451.3 642.8 438.3C685.7 425.3 728.3 420.7 771.2 427C814 433.3 857 450.7 878.5 459.3L900 468L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#FB8B24"  strokeLinejoin="miter"></path>

        <path id='wave-end' style={{visibility: 'hidden'}}
            d="M0 488L21.5 470.2C43 452.3 86 416.7 128.8 409.7C171.7 402.7 214.3 424.3 257.2 444.7C300 465 343 484 385.8 473C428.7 462 471.3 421 514.2 422.5C557 424 600 468 642.8 489.8C685.7 511.7 728.3 511.3 771.2 492.5C814 473.7 857 436.3 878.5 417.7L900 399L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#FB8B24" strokeLinejoin="miter"></path>
    </svg>
)};

export default Wave;