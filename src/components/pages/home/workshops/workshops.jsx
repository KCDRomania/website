import React, { useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';
import Argo from 'icons/argo-logo.svg';
import Cilium from 'icons/cilium-logo.svg';
import Go from 'icons/go-logo.svg';
import Kubernetes from 'icons/kubernetes-logo.svg';

const items = [Kubernetes, Argo, Go, Cilium];

const DESCRIPTION =
  "Roll up your sleeves and learn! We have an exciting lineup of hands-on workshops where you can put your skills to the test and learn from experts. Whether you're a beginner looking to get started with cloud native technologies or a seasoned pro looking to dive deeper, we have something for everyone. Don't miss out on this chance to advance your knowledge and skills in a practical, hands-on environment.";

const Workshops = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalShow = () => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  return (
    <section className="safe-paddings relative bg-white py-40 lg:py-32 md:py-24 sm:py-16">
      <div className="container flex justify-between lg:flex-col-reverse">
        <ul className="ml-16 flex max-w-[464px] flex-wrap justify-center gap-x-8 gap-y-8 px-6 lg:mx-auto lg:mt-10">
          {items.map((icon, index) => (
            <li
              className="flex h-[189px] w-44 items-center justify-center rounded border border-gray-10 shadow-[0_14px_40px_#CCCCCC] first:mt-9 last:-mt-9 last:-mr-9 [@media(max-width:478px)]:last:mr-0 [@media(max-width:478px)]:last:mt-0"
              key={index}
            >
              <img
                className="h-auto w-auto sm:max-w-[120px]"
                src={icon}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
              />
            </li>
          ))}
        </ul>

        <div className="text-primary-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
          <h2 className="max-w-[592px] text-6xl font-bold leading-tight lg:max-w-[650px]">
            Workshops <br />
            on April 25, 2024
          </h2>
          <p className="mt-5 max-w-[592px] text-lg leading-normal lg:max-w-[700px] ">
            {DESCRIPTION}
          </p>
          <Button
            className="mt-7 text-white"
            theme="blue"
            size="lg"
            onClick={() => handleModalShow()}
          >
            KCD Romania 2024 Video
          </Button>
          <Modal
            modalData={{}}
            isVisible={isModalVisible}
            isVideoModal
            onModalHide={handleModalHide}
          />
        </div>
      </div>
    </section>
  );
};

export default Workshops;
