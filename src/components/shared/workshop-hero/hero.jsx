import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ title, description }) => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 pt-24 pb-20">
    <div className="absolute -top-[17%] left-[10%] h-[514px] w-[514px] translate-x-1/2 bg-white blur-[100px]" />
    <div className="container text-bg-primary-1 relative mx-auto mt-4 max-w-[1008px] text-left text-primary-1 xl:max-w-[1216px]">
      <h1 className="text-6xl font-bold leading-denser">{title}</h1>
      <ul className="mt-8 text-lg leading-normal">
        {description.map((item, index) => (
          <li key={index}>
            <p className="mt-5">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default Hero;
