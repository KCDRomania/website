/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import SPEAKERS from './speakers_config';

const TITLE = 'Speakers';

const Speakers = ({ location }) => {
  // const [isSpeakersOpen, setIsSpeakersOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalDataId(0);
  };

  // const handleShowMoreClick = () => {
  //   setIsSpeakersOpen((isSpeakersOpen) => !isSpeakersOpen);
  // };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        const element = document.getElementById('speakers');

        window.scrollTo({
          top: window.pageYOffset + element.getBoundingClientRect().top,
        });

        // if (Number(state.modalId) > 7) {
        //   handleShowMoreClick();
        // }

        handleModalShow(Number(state.modalId));
      } else {
        handleModalHide();
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings relative bg-white md:pt-24 sm:pt-16">
      <div className="container flex flex-col sm:items-center">
        <h2
          className="text-6xl font-bold leading-tight text-primary-1 md:text-center"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <ul className="mt-14 grid w-full grid-cols-4 gap-8 lg:gap-6 md:grid-cols-3 md:justify-items-center md:gap-4 xs:flex xs:flex-wrap xs:justify-evenly [@media(max-width:620px)]:grid-cols-2">
          {SPEAKERS.map(({ name, photo, position }, index) => (
            <li
              aria-hidden="true"
              className={clsx(
                'group flex w-[240px] cursor-pointer flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]'
                // index > 7 && !isSpeakersOpen ? 'hidden' : 'flex'
              )}
              key={index}
              onClick={() => handleModalShow(index)}
            >
              <img
                className="w-full"
                src={photo}
                width={240}
                height={284}
                loading="lazy"
                alt={name}
              />
              <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1 transition-colors duration-200 group-hover:text-blue-1 sm:text-left">
                {name}
              </p>
              <span className="mt-1.5 text-primary-1">{position}</span>
            </li>
          ))}
        </ul>
        {/* <button
          className="mx-auto mt-10 flex items-center px-5 py-2 text-center text-lg font-bold leading-none text-primary-1 transition-colors duration-200"
          type="button"
          onClick={handleShowMoreClick}
        >
          <span>{isSpeakersOpen ? 'Hide all speakers' : 'View all speakers'}</span>
          <ChevronDown
            className={clsx(
              'ml-2 block w-2.5 shrink-0 transition-[transform,color] duration-200',
              isSpeakersOpen ? 'rotate-180' : ''
            )}
          />
        </button> */}
        <Modal
          modalData={SPEAKERS[modalDataId]}
          isVisible={isModalVisible}
          isPresentationShow={false}
          onModalHide={handleModalHide}
        />
      </div>
    </section>
  );
};

export default Speakers;
