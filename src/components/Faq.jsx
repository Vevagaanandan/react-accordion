import React from 'react';
import Accordion from './Accordion';

const Faq = () => {
  return (
    <div className='bg-white rounded p-4 top-16 relative md:w-2/4 m-auto'>
        <Accordion question='Are React.js and React Native same?' answer='No' />
        <Accordion question='What is the capital of Finland?' answer='Helsinki' />
        <Accordion question='What are the keys for a Healthy Lifestyle?' answer='Healthy diet, regular exercise and enough sleep' />
        <Accordion question='In which year did World War II end?' answer='1945' />
        <Accordion question='What is the most spoken language in the world by number of native speakers?' answer='Mandarin Chinese' />
    </div>
  )
}

export default Faq