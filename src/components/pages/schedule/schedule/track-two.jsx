/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import BenoitSchipperPhoto from './images/benoit-schipper-photo.jpg';
import GiuseppeGianquittoPhoto from './images/giuseppe-gianquitto-photo.jpg';
import JanKarremansPhoto from './images/jan-karremans-photo.jpg';
import JanWillemPhoto from './images/jan-willem-photo.jpg';
import KasraAmirsarvariPhoto from './images/kasra-amirsarvari-photo.jpg';
import LouellaCreemersPhoto from './images/louella-creemers-photo.jpg';
import MarcoVerleunPhoto from './images/marco-verleun-photo.jpg';
import MaximBurgerhoutPhoto from './images/maxim-burgerhout-photo.jpg';
import NicoKrijnenPhoto from './images/nico-krijnen-photo.jpg';
import NiravBhadradiyaPhoto from './images/nirav-bhadradiya-photo.jpg';
import RajalakshmiRajamuthuPhoto from './images/rajalakshmi-rajamuthu-photo.jpg';
import SebastiaanMannemPhoto from './images/sebastiaan-mannem-photo.jpg';
import SerdarKalayciPhoto from './images/serdar-kalayci-photo.jpg';
import UserPhoto from './images/user-photo.jpg';
// import AndreaGiardiniPhoto from './images/william-rizzo-photo.jpg';
// UserPhoto is default when no speaker picture is present
// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    id: '03',
    time: '10:20',
    title: 'Doing Multi-Cloud the Easy Way... But should you? ',
    duration: '35 min',
    speakers: [
      {
        id: '4',
        name: 'Nico Krijnen',
        photo: NicoKrijnenPhoto,
      },
    ],
    presentation:
      "In today's rapidly evolving technological landscape, organizations are increasingly adopting cloud computing as a means to enhance scalability and flexibility. " +
      'However, multi-cloud makes this a complex decision process. ' +
      'Tools like Kubernetes, Terraform, Dapr and Wing simplify multi-cloud by providing a unified programming model that work seamlessly across different clouds. ' +
      'That sounds great! Almost too good to be true? What are the trade-offs that they bring? Do they truly prevent vendor lock-in? ' +
      'And what are you loosing by not making full use of what your cloud vendor has to offer?',
  },
  {
    time: '10:55',
    title: 'Morning break',
    duration: '30 min',
  },
  {
    id: '05',
    time: '11:25',
    duration: '35 min',
    title: 'Killing PETs with CPET at a Dutch government organization is central to our story. ',
    speakers: [
      {
        id: '6',
        name: 'Jan Willem Van Hermon',
        photo: JanWillemPhoto,
      },
      {
        id: '7',
        name: 'Sebastiaan Mannem',
        photo: SebastiaanMannemPhoto,
      },
      {
        id: '8',
        name: 'Benoit Schipper',
        photo: BenoitSchipperPhoto,
      },
    ],
    presentation:
      "A Dutch government organization is on a journey to improve their developer velocity by leveraging the power of multi-cluster Kubernetes, ArgoCD, Tekton, Grafana, Kyverno, CNPG and <Insert Cool Tech>. Along this journey, the CPET (CloudNative Platform Enablement Team) team has introduced a PaaS Operator (Project as a Service) to provide a self service option for DevOps teams (our EndUsers) to kickstart their cloud native journey. One Pull request, One .YAML, to kickstart your project environment (including RBAC, Quota's etc.) with optional clearcut capabilities such as ArgoCD, Tekton, Grafana and KeyCloak.",
  },
  {
    id: '07',
    time: '12:05',
    duration: '35 min',
    title: 'Socio-technical challenges of adopting Kubernetes',
    speakers: [
      {
        id: '10',
        name: 'Giuseppe Gianquitto',
        photo: GiuseppeGianquittoPhoto,
      },
    ],
    presentation:
      "Deploying Kubernetes isn't merely technical; it's steering through socio-technical hurdles with often resistant stakeholders. Their resistance springs from:<br/><br/>" +
      "- K8s's perceived complexity.<br/>" +
      '- Hesitancy toward "trending" tech.<br/>' +
      '- Reluctance to embrace new paradigms, risking lost expertise in traditional IT.<br/>' +
      '- Unfamiliarity with the cloud-native model and needed architectural shifts.<br/>' +
      "- Further complicating matters, many misjudge or downplay K8s's depth, swayed by multi-cloud allure and vendor pitches.<br/><br/>" +
      "Drawing from my Kubernetes journey since 2016, especially in the public sector (education and research), this talk unveils these persistent challenges and our navigation strategies. It isn't just about tech, but a tech lead's voyage advocating for Kubernetes amidst varying perspectives.",
  },
  {
    time: '12:40',
    title: 'Lunch',
    duration: '1 hour',
  },
  {
    id: '09',
    time: '13:40',
    title: 'Postgres on Kubernetes: the time is now!',
    duration: '35 min',
    speakers: [
      {
        id: '12',
        name: 'Maxim Burgerhout',
        photo: MaximBurgerhoutPhoto,
      },
    ],
    presentation:
      'The ability to run stateful applications in general, and RDMS in particular, on Kubernetes is relatively new, but brings new and exciting capabilities to developers, DBAs and devops teams alike. Think of self-service cluster creation and management, self-service backup and restore, automatic configuration of point-in-time recovery scenarios, etc. On top of that, by making Postgres clusters Kubernetes resources, you can now apply GitOps, CI/CD pipelines like Tekton and policy frameworks to your database.',
  },
  {
    id: '11',
    time: '14:20',
    title: 'Mapping K8s migration',
    duration: '35 min',
    speakers: [
      {
        id: '15',
        name: 'Rajalakshmi Rajamuthu',
        photo: RajalakshmiRajamuthuPhoto,
      },
      {
        id: '16',
        name: 'Nirav Bhadradiya',
        photo: NiravBhadradiyaPhoto,
      },
    ],
    presentation:
      "As organizations set sail on their Kubernetes migration journey, they encounter a new world of opportunities and challenges.Embarking on a journey towards Kubernetes migration can always be a formidable task. In this paper, will guide you through the process of mapping your migration path, helping you make informed decisions that align with your organization's goals and resources. Drawing from real-world experiences and best practices, our paper will provide a comprehensive roadmap for successfully navigating the Kubernetes migration landscape.",
  },
  {
    time: '14:55',
    title: 'Afternoon break',
    duration: '30 min',
  },
  {
    id: '13',
    time: '15:25',
    title: 'Dev to the Future - Improving Developer Experience',
    duration: '35 min',
    speakers: [
      {
        id: '18',
        name: 'Kasra Amirsarvari',
        photo: KasraAmirsarvariPhoto,
      },
    ],
    presentation:
      'This talk delves into the transformative journey of modernizing developer workflows via an Internal Developer Platform (IDP) orchestrated through Kubernetes. This talk covers the intersection of Platform Engineering and Kubernetes, demonstrating how Kubernetes can serve as a runtime as well as a cloud-based development environment. With a focus on self-service capabilities, the presentation outlines how an IDP can alleviate tooling complexity, minimize time-to-value, and augment the Developer Experience, thereby leading to more efficient, high-quality software delivery.',
  },
  {
    id: '15',
    time: '16:05',
    title: '⚡️ Lightning Talks ⚡️',
    duration: '35 min',
    speakers: [
      {
        id: '22',
        name: 'Marco Verleun',
        photo: MarcoVerleunPhoto,
      },
      {
        id: '23',
        name: 'Louëlla Creemers',
        photo: LouellaCreemersPhoto,
      },
      {
        id: '24',
        name: 'Serdar Kalaycı',
        photo: SerdarKalayciPhoto,
      },
      {
        id: '25',
        name: 'Jan Karremans',
        photo: JanKarremansPhoto,
      },
    ],
    presentation:
      'Short and interesting talks:<br/>' +
      '<p class="text-xl md:text-lg font-semibold">⚡️ Find CVEs with ease</p>' +
      '<p class="text-sm font-normal text-gray-400">By Marco Verleun</p>' +
      "<p>In this session we'll explore some of the possibilities and tools that can be used to create SBOM files, analyze them (during CI/CD?) and even store them in a database.</p>" +
      '<p class="text-xl md:text-lg font-semibold">⚡️ Docker & Kubernetes Unboxed<p/>' +
      '<p class="text-sm font-normal text-gray-400">By Louëlla Creemers</p>' +
      '<p>Have you ever been puzzled by terms like "Docker" and "Kubernetes"? If you have, you\'re not alone! In this lightning talk, let\'s simplify Docker and Kubernetes by using a simple analogy involving "boxes." and discover how Docker and Kubernetes can change the way you handle your projects. Bid farewell to the confusion and welcome the magic of containerization and automatic project management.</p>' +
      '<p class="text-xl md:text-lg font-semibold">⚡️ Back to basics: 12 Factor App in Cloud Native Era</p>' +
      '<p class="text-sm font-normal text-gray-400">By Serdar Kalaycı</p>' +
      '<p>12 Factor App was first released 12 years ago, 3 years before Kubernetes was first released. Since then, the community has been eager to adopt Kubernetes itself as a platform, but the guideline to develop good cloud-native software has been neglected in comparison. Similar to the initial cloud movement, lifting and shifting existing workloads onto Kubernetes did not lead to cloud-native solutions, but made management and maintenance even more difficult. Today we will look at the lessons of the 12 Factor App and find out how these lessons make software run more smoothly on Kubernetes and how Kubernetes helps you develop 12 Factor Apps more easily.</p>' +
      '<p class="text-xl md:text-lg font-semibold">⚡️ Just don’t do it – Databases in Kubernetes</p>' +
      '<p class="text-sm font-normal text-gray-400">By Jan Karremans</p>' +
      '<p>You are not really crazy, are you? Running your beloved database in Kubernetes? This infrastructure is built to break and my database should not break! What actually is this Cloud Native nonsense? The latest and greatest marketing gig, let’s get out our buzzword-bingo cards!<br/>' +
      'Or… should we? Join me for an exploration of Cloud Native, Data on Kubernetes, why databases in containers make much sense, and why much of the fear is from a previous era. In this talk, you will see why more and more organizations look at Cloud Native infrastructures for deploying critical data workloads. You will explore options and opportunities for creating modern application architectures without having to fall into a split between your application and your back end.</p>',
  },
];

const Schedule = ({ location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCoincidedEvent, setIsCoincidedEvent] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setIsCoincidedEvent(false);
    setModalDataId(0);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        handleModalShow(Number(state.modalId));
      } else {
        handleModalHide();
      }

      if (state?.isCoincidedEvent) {
        setIsCoincidedEvent(true);
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings pt-9 lg:px-8 md:px-5 sm:pt-10 xs:px-0">
      <ul className="mx-auto w-[1072px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {ITEMS.map(({ id, time, title, duration, isKeynote, speakers, coincidedEvent }, index) => {
          const isEven = index % 2 === 1;

          return (
            <li
              className={clsx(
                'grid grid-cols-[114px_1fr] md:grid-cols-[106px_1fr] sm:grid-cols-1',
                {
                  'bg-primary-4': isEven,
                  'bg-lightGreen': title === 'Welcome',
                  'bg-lightYellow': title === 'Lunch',
                  'bg-lightOrange': title === 'Drinks / networking',
                }
              )}
              key={index}
            >
              <div className="flex items-center justify-center sm:justify-start sm:px-5 sm:pt-5">
                <time className="mb-auto mt-7 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60 md:mt-5 md:text-sm sm:my-0">
                  {time}
                </time>
                {isKeynote && (
                  <span className="ml-4 hidden rounded-full bg-blue-1 px-2 py-1.5 text-xs font-semibold leading-none tracking-tighter text-white sm:inline-flex">
                    Keynote
                  </span>
                )}
              </div>
              <div
                className={clsx('border-l border-l-primary-2 sm:border-none', {
                  'grid grid-cols-2 sm:grid-cols-1': coincidedEvent,
                })}
              >
                <div
                  className={clsx(
                    'flex flex-col gap-y-3 px-7 py-6 md:py-4 sm:gap-y-2 sm:px-5 sm:pb-4',
                    isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                  )}
                >
                  <h3 className="inline-flex items-center gap-x-3">
                    {id ? (
                      <Button
                        className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                        theme="link-primary"
                        onClick={() => handleModalShow(index)}
                      >
                        {title}
                      </Button>
                    ) : (
                      <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                        {title}
                      </span>
                    )}
                    {isKeynote && (
                      <span className="rounded-full bg-blue-1 px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                        Keynote
                      </span>
                    )}
                  </h3>
                  <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                    <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                      {duration}
                    </span>
                    {speakers && speakers.length > 0 && (
                      <ul className="relative inline-flex columns-3 gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                        {speakers.map(({ name, photo }, index) => (
                          <li className="w-full" key={index}>
                            <figure className="flex items-center gap-x-2">
                              <img
                                className="h-7 w-7 rounded-full"
                                src={photo || UserPhoto}
                                width={28}
                                height={28}
                                alt={name}
                                loading="lazy"
                              />
                              {/* {speakers.length <= 3 && ( */}
                              <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                {name}
                              </figcaption>
                              {/* )} */}
                            </figure>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {coincidedEvent && (
                  <div
                    className={clsx(
                      'flex flex-col gap-y-3 border-l border-primary-2 px-7 py-6 md:py-4 sm:gap-y-2 sm:border-t sm:border-l-0 sm:px-5 sm:pb-4',
                      isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                    )}
                  >
                    <h3 className="inline-flex items-center gap-x-3">
                      {coincidedEvent.id ? (
                        <Button
                          className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                          theme="link-primary"
                          onClick={() => {
                            handleModalShow(index);
                            setIsCoincidedEvent(true);
                          }}
                        >
                          {coincidedEvent.title}
                        </Button>
                      ) : (
                        <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                          {coincidedEvent.title}
                        </span>
                      )}
                      {coincidedEvent.isKeynote && (
                        <span className="rounded-full bg-blue-1 px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                          Keynote
                        </span>
                      )}
                    </h3>
                    <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                      <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                        {coincidedEvent.duration}
                      </span>
                      {coincidedEvent.speakers && coincidedEvent.speakers.length > 0 && (
                        <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                          {coincidedEvent.speakers.map(({ name, photo }, index) => (
                            <li className="" key={index}>
                              <figure className="flex items-center gap-x-2">
                                <img
                                  className="h-7 w-7 rounded-full"
                                  src={photo || UserPhoto}
                                  width={28}
                                  height={28}
                                  alt={`${name} photo`}
                                  loading="lazy"
                                />
                                {speakers.length > 0 && (
                                  <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                    {name}
                                  </figcaption>
                                )}
                              </figure>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <Modal
        modalData={isCoincidedEvent ? ITEMS[modalDataId].coincidedEvent : ITEMS[modalDataId]}
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Schedule;
