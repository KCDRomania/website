import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import React, { useState } from 'react';
import slugify from 'slugify';

import MENUS from 'constants/menus';

import Burger from '../burger';
import Button from '../button';
import Link from '../link';
import Modal from '../modal';

import Logo from './images/cnd-romania-logo.svg';

const Header = ({ isMobileMenuOpen, onBurgerClick, additionalClassName }) => {
  const getAnchor = (str) => slugify(str).toLocaleLowerCase();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleModalShow = () => {
  //   document.body.classList.add('overflow-hidden');
  //   setIsModalVisible(true);
  // };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  const handleAnchorClick = (e) => {
    const id = getAnchor(e.target.firstChild.data);

    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={clsx(
        'safe-paddings transition-200 z-10 transition-colors',
        isMobileMenuOpen ? 'bg-white bg-opacity-100' : 'bg-[#EDC3C7] bg-opacity-10',
        additionalClassName
      )}
    >
      <div className="container flex items-center justify-between pb-2 pt-5">
        <Link className="z-50 ml-2" to="/">
          <img className="h-20 md:h-14" src={Logo} alt="KND Romania" />
        </Link>

        <nav>
          <ul className="-ml-8 flex space-x-8 text-white lg:ml-0 lg:space-x-6 md:hidden">
            {MENUS.header.map(({ text, to, homeTo }, index) => (
              <li className="text-[15px] font-semibold text-primary-1" key={index}>
                <Button to={to || `/#${homeTo}`} theme="link-primary" onClick={handleAnchorClick}>
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        {/* <Button
          className="-mr-2 md:hidden"
          theme="primary"
          size="sm"
          onClick={() => handleModalShow()}
        >
          2024 Video
        </Button> */}

        <Burger
          className="z-50 hidden md:block"
          isToggled={isMobileMenuOpen}
          onClick={onBurgerClick}
        />

        <Modal
          modalData={{}}
          isVisible={isModalVisible}
          isVideoModal
          onModalHide={handleModalHide}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  additionalClassName: PropTypes.string,
  homepage: PropTypes.bool,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  additionalClassName: null,
  homepage: false,
};

export default Header;
