import React from 'react';
// importing components
import Email from '../../email/email';
import { NextPage } from 'next';

interface EmailProps{
  lang:string | React.Dispatch<React.SetStateAction<string>>
}

const FirstEmail:NextPage<EmailProps> = ({lang}):JSX.Element => {
  return (
    <div className='flex  flex-col justify-center items-center w-full h-full'>
      <div className="text-into px-[2rem] text-center text-white flex flex-col items-center justify-center w-full min-h-[60vh]">
        <h2 id='front-title' className='text-[3.125rem] font-bold max-w-[640px] leading-[1.1] lg:text-[2rem] lg:w-full md:text-[1.7rem] sm:text-[1.3rem]'>{lang ==='en' ? 'Unlimited movies, TV, shows, and more.' : 'Acces nelimitat la filme, seriale si multe altele'}</h2>
        <p className='py-[1rem] text-[1.625rem] lg:text-[1.2rem] font-[600] sm:text-[0.9rem]'>{lang === 'en' ? 'Watch anywhere. Cancel anytime.' : 'Vizioneaza oriunde. Anuleaza oricand'}</p>
        <p className='text-[1.2rem] font-[600 md:text-[1rem] sm:text-[0.9rem]'>{lang === 'en' ? 'Ready to watch? Enter your email to create or restart? your membership.' : 'Esti gata de vizionare? Introdu adresa de e-mail pentru  a te abona sau pentru a reactiva abonamenul. '}</p>
        <Email/>
      </div>
    </div>
  )
}

export default FirstEmail