import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Argo from 'icons/argo-horizontal-logo.svg';
import Audience from 'icons/audience-icon.inline.svg';
// import Aws from 'icons/aws-logo.svg';
import Calendar from 'icons/calendar-icon.inline.svg';
import Cilium from 'icons/cilium-horizontal-logo.svg';
import Clock from 'icons/clock-icon.inline.svg';
import Coins from 'icons/coins-icon.inline.svg';
import Conditions from 'icons/conditions-icon.inline.svg';
import ContentIcon from 'icons/content-icon.inline.svg';
import Go from 'icons/go-horizontal.svg';
import Kubernetes from 'icons/kubernetes-horizontal-logo.svg';
import ListIcon from 'icons/list-icon.inline.svg';
import Trainer from 'icons/trainer-icon.inline.svg';

import ChristianHaller from './images/christian-haller-photo.jpg';
import ChristianSchlatter from './images/christian-schlatter-photo.jpg';
import DanielStrohecker from './images/daniel-strohecker-photo.jpg';
import DavidSchneider from './images/david-schneider-photo.jpg';
import GabrielGraf from './images/gabriel-graf-photo.jpg';
import LorenzBischof from './images/lorenz-bischof-photo.jpg';
import NemanjaKostic from './images/nemanja-kostic-photo.jpg';
import RaffaelHertle from './images/raffael-hertle-photo.jpg';
import SebastianPlattner from './images/sebastian-plattner-photo.jpg';

const Content = [
  {
    name: 'argo',
    description:
      'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
    features: [
      'Basic concepts',
      'Architecture',
      'Managing Argo CD applications in Git',
      'Sync policies',
      'Comparing application state (Git vs. Kubernetes Cluster)',
      'Self-healing',
      'Pruning of resources',
      'Resource hooks',
      'Sync phases and waves',
      'Backup and restore',
      'Various manifest formats',
      'Permission structures',
    ],
    requirements: 'Participants will need a laptop with direct access to the Internet.',
    audience:
      'The workshop is aimed at people who already have prior knowledge of container technologies, Git and Kubernetes.',
    conditions: {
      description: 'At least 8 Participants are required for the workshop to take place.',
      seats: 14,
      costs: '650 CHF',
      description1: 'Includes catering, documentation and a cluster in the cloud',
    },
    trainers: [
      {
        name: 'Christian Schlatter',
        photo: ChristianSchlatter,
        position: 'Trainer Puzzle ITC',
      },
      {
        name: 'Raffael Hertle',
        photo: RaffaelHertle,
        position: 'Trainer acend',
      },
    ],
  },
  {
    name: 'cilium',
    description:
      'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
    features: [
      'Introduction to Linux & Kubernetes networking',
      'eBPF basics',
      'Container Network Interface',
      'Cilium systems architecture',
      'Kubernetes & Cilium network policies',
      'Hubble & Hubble UI',
      'Cilium Cluster Mesh',
      'Cilium deployment',
      'Cilium troubleshooting',
      'Cilium Service Mesh',
    ],
    requirements: 'Participants will need a laptop with direct access to the Internet',
    audience:
      'Our training is aimed at people who already have knowledge and experience in operating a Kubernetes platform. Participants should have experience in using the command line.',
    conditions: {
      description: 'At least 8 Participants are required for the workshop to take place.',
      seats: 14,
      costs: '650 CHF',
      description1: 'Includes catering, documentation and a cluster in the cloud',
    },
    trainers: [
      {
        name: 'Gabriel Graf',
        photo: GabrielGraf,
        position: 'Trainer acend',
      },
      {
        name: 'Sebastian Plattner',
        photo: SebastianPlattner,
        position: 'Trainer acend',
      },
    ],
  },
  {
    name: 'go',
    description:
      'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
    features: [
      'Introduction, history and application areas of Go',
      'Ecosystem & Tooling',
      'Syntax and language constructs',
      'Error Handling',
      'Standard Library (net/http, os, encoding/json, etc.)',
      'Testing',
      'Concurrency & Multithreading',
      'Release Code / Packaging',
    ],
    requirements: 'Participants will need a laptop with direct access to the Internet.',
    audience:
      'The workshop is aimed at people who have basic programming skills and are interested in learning a new programming language.',
    conditions: {
      description: 'At least 8 Participants are required for the workshop to take place.',
      seats: 14,
      costs: '650 CHF',
      description1: 'Includes catering, documentation and a cluster in the cloud',
    },
    trainers: [
      {
        name: 'David Schneider',
        photo: DavidSchneider,
        position: 'Trainer Puzzle ITC',
      },
      {
        name: 'Lorenz Bischof',
        photo: LorenzBischof,
        position: 'Trainer, Puzzle ITC',
      },
    ],
  },
  {
    name: 'kubernetes',
    description:
      'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
    features: [
      'Basic concepts',
      'Architecture and components of Kubernetes',
      'Useful CLI-Tools',
      'Applications deployment',
      'Access opportunities',
      'Pod scaling',
      'Service layer and discovery',
      'Deployment strategies',
      'Persistent storage',
      'StatefulSet, DaemonSet, Job, ConfigMap',
      'Init and Sidecar Container',
      'Quotas and limits',
      'Troubleshooting',
      'CNCF Landscape',
    ],
    requirements: 'Participants will need a laptop with direct access to the Internet.',
    audience:
      'Our training is designed for software and system engineers. No prior knowledge of Kubernetes is required.',
    conditions: {
      description: 'At least 8 Participants are required for the workshop to take place.',
      seats: 14,
      costs: '650 CHF',
      description1: 'Includes catering, documentation and a cluster in the cloud',
    },
    trainers: [
      {
        name: 'Daniel Strohecker',
        photo: DanielStrohecker,
        position: 'Trainer acend',
      },
      {
        name: 'Christian Haller',
        photo: ChristianHaller,
        position: 'Trainer Puzzle ITC',
      },
    ],
  },
  {
    name: 'aws',
    description:
      'The workshop consists of a mix of presentations and hands-on labs in order to teach the content in the pragmatic way. We will be using AWS serverless services, especially some of the new and recently released AWS services:',
    features: [
      'Designing Figma screen with <strong>Cloudscape</strong> design system',
      'Automatic conversion of design into React code with <strong>AWS Amplify Studio</strong>',
      'Local backend code development with <strong>AWS SAM</strong> and <strong>AWS Toolkit</strong>',
      'Using ML-assisted code writing with <strong>AWS CodeWhisperer</strong>',
      'Code review with <strong>AWS CodeGuru</strong>',
      'Code deployment using <strong>AWS CodeCatalyst</strong>',
      'Visualizing code structure with <strong>AWS Application Composer</strong>',
      'Infrastructure as code with <strong>AWS CDK</strong>',
    ],
    requirements: 'Participants will need a laptop with direct access to the Internet.',
    audience:
      'The workshop is aimed at developers who want to learn the full end-to-end development and deployment process from a local machine to an AWS account.',
    conditions: {
      description: 'At least 10 Participants are required for the workshop to take place.',
      seats: 18,
      costs: '650 CHF',
      description1: 'Includes catering, documentation and an AWS account',
    },
    trainers: [
      {
        name: 'Nemanja Kostic',
        photo: NemanjaKostic,
        position: 'arch.cloud co-founder',
      },
    ],
  },
];

const Cards = [
  {
    name: 'argo',
    icon: Argo,
    iconClassname: 'h-16 w-[138px]',
    title: 'GitOps with ArgoCD',
    description:
      'This one-day training in German or English offers a practical and clearly understandable introduction to GitOps using Argo CD on Kubernetes.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: 'https://workshops.kcdzurich.ch/',
  },
  {
    name: 'go',
    icon: Go,
    iconClassname: 'h-16 w-[129px]',
    title: 'Go Basics',
    description:
      'This one-day training in German or English offers an introduction to Go for software developers, architects and DevOps engineers.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: 'https://workshops.kcdzurich.ch/',
  },
  {
    name: 'cilium',
    icon: Cilium,
    iconClassname: 'h-16 w-[136px]',
    title: 'Cilium Basics',
    description:
      'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBFP-based networking, observability and security stack for cloud and on-premise infrastructure.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: 'https://workshops.kcdzurich.ch/',
  },
  {
    name: 'kubernetes',
    icon: Kubernetes,
    iconClassname: 'h-16 w-[266px]',
    title: 'Kubernetes Basics',
    description:
      'This one-day training in German or English provides a practical and easy-to-understand introduction to Kubernetes.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: 'https://workshops.kcdzurich.ch/',
  },
  // {
  //   name: 'aws',
  //   icon: Aws,
  //   iconClassname: 'h-16 w-[106px]',
  //   title: 'AWS Serverless',
  //   description:
  //     'This one-day training in English will demonstrate how to build your startup application, from a napkin idea to a fully functional production deployment, using AWS serverless services.',
  //   date: 'June 15, 2024',
  //   time: '09:00 - 16:45',
  //   price: 'CHF 650',
  //   url: 'https://workshops.kcdzurich.ch/',
  // },
];

const Information = ({ itemName }) => (
  <section className="safe-paddings pt-20 pb-48">
    <div className="container grid grid-cols-12 md:flex md:flex-col">
      <div className="content col-start-2 col-end-7 xl:col-start-1 lg:col-end-8">
        <ul className="ml-3">
          {Content.filter((item) => item.name === itemName).map(
            ({ description, features, requirements, audience, conditions, trainers }, index) => (
              <li className="text-primary-1" key={index}>
                <div className="flex w-fit items-center justify-center">
                  <ContentIcon className="mr-3 h-[23px] w-4" />
                  <span className="text-2xl font-bold leading-normal text-primary-1">Content</span>
                </div>
                <p className="mt-6 text-lg leading-normal text-primary-1">{description}</p>

                <ul className="mt-5 space-y-2 border-b border-gray-10 pl-4 pb-4">
                  {features.map((item, index) => (
                    <li
                      className="relative before:absolute before:top-2.5 before:-left-4 before:h-2 before:w-2 before:rounded-full before:bg-blue-1 before:content-['']"
                      key={index}
                    >
                      <p
                        className="text-lg leading-normal"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>

                <div className="mt-3.5 flex w-fit items-center justify-center">
                  <ListIcon className="mr-3 h-[23px] w-[19px]" />
                  <span className="text-2xl font-bold leading-normal text-primary-1">
                    Requirements
                  </span>
                </div>
                <p className="mt-4 border-b border-gray-10 pb-3 text-lg leading-normal">
                  {requirements}
                </p>

                <div className="mt-3.5 flex w-fit items-center justify-center">
                  <Audience className="mr-3 h-[23px] w-[22px]" />
                  <span className="text-2xl font-bold leading-normal text-primary-1">
                    Target audience
                  </span>
                </div>
                <p className="mt-5 border-b border-gray-10 pb-3 text-lg leading-normal">
                  {audience}
                </p>

                <div className="mt-3.5 flex w-fit items-center justify-center">
                  <Conditions className="mr-3 h-[23px] w-[19px]" />
                  <span className="text-2xl font-bold leading-normal text-primary-1">
                    Conditions
                  </span>
                </div>
                <div className="text-lg leading-normal">
                  <p className="mt-5">{conditions.description}</p>
                  <p className="mt-1">
                    <span className="font-bold">Seats: </span>
                    {conditions.seats}
                  </p>
                  <p>
                    <span className="font-bold">Costs: </span>
                    {conditions.costs}
                  </p>
                  <p className="border-b border-gray-10 pb-3">{conditions.description1}</p>
                </div>

                <div className="mt-3.5 flex w-fit items-center justify-center">
                  <Trainer className="mr-3 h-[22px] w-[18px]" />
                  <span className="text-2xl font-bold leading-normal text-primary-1">Trainer</span>
                </div>
                <ul className="mt-5 flex space-x-8 sm:flex-wrap sm:space-y-4 sm:space-x-0">
                  {trainers.map(({ name, photo, position }, index) => (
                    <li
                      className="mt-0 leading-normal text-primary-1 sm:w-auto sm:max-w-[200px] sm:first:mr-8 sm:first:mb-6"
                      key={index}
                    >
                      <img
                        className="h-[237px] w-[176px]"
                        src={photo}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt={name}
                      />
                      <p className="mt-2.5 text-lg font-bold">{name}</p>
                      <span className="mt-1.5 block">{position}</span>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>

      <ul className="card col-span-4 col-start-8 ml-6 xl:col-end-13 md:row-start-2 md:mt-8 md:max-w-[384px] md:self-center">
        {Cards.filter((item) => item.name === itemName).map(
          ({ icon, iconClassname, title, description, date, time, price, url }, index) => (
            <li
              className="flex flex-col rounded p-8 text-primary-1 shadow-[0_14px_40px_#CCCCCC]"
              key={index}
            >
              <img
                className={iconClassname}
                src={icon}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
              />
              <h4 className="mt-8 text-2xl font-bold leading-normal text-primary-1">{title}</h4>
              <p className="mt-1.5">{description}</p>
              <div className="mt-6 flex w-fit items-center justify-center">
                <Calendar className="h-4 w-4" />
                <time className="ml-2.5 w-fit font-bold leading-normal">{date}</time>
              </div>
              <div className="mt-2 flex w-fit items-center justify-center">
                <Clock className="h-4 w-4" />
                <time className="ml-2.5 font-bold leading-normal">{time}</time>
              </div>
              <div className="mt-6 mb-8 flex w-fit items-center justify-center">
                <Coins className="h-4 w-4" />
                <span className="ml-2.5 font-bold leading-normal">{price}</span>
              </div>
              <Button className="mt-auto" size="lg" theme="blue" to={url} target="_blank">
                Get your ticket
              </Button>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
);

Information.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default Information;
