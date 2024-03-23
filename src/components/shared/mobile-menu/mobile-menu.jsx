import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import links from 'constants/links';
import MENUS from 'constants/menus';
import useScrollOverflow from 'hooks/use-scroll-overflow';

import Button from '../button';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen, onButtonClick }) => {
  const controls = useAnimation();

  useScrollOverflow(controls, isOpen);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        className="safe-paddings fixed inset-0 z-[-1] mt-[70px] hidden overflow-x-hidden overflow-y-hidden bg-white px-8 pt-[72px] pb-5 lg:flex lg:flex-col lg:justify-between"
        initial="from"
        animate={controls}
        variants={variants}
      >
        <div className="scrollbar-hidden my-auto flex h-full w-full overflow-x-hidden overflow-y-scroll">
          <ul className="mx-auto flex flex-col justify-center space-y-3 text-center text-xl font-semibold text-primary-1">
            {MENUS.mobile.map(({ text, to, id }, index) => (
              <li key={index}>
                <Button
                  className="block py-4"
                  theme="link-primary"
                  to={to || `/#${id}`}
                  onClick={onButtonClick}
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button className="mt-7 text-white" theme="blue" size="lg" {...links.photos}>
          Photos
        </Button>
        <Button className="mt-7 text-white" theme="blue" size="lg" {...links.survey}>
          Survey
        </Button>
      </m.nav>
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
