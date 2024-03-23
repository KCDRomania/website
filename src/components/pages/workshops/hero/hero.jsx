import React from 'react';

import Button from 'components/shared/button';
import Argo from 'icons/argo-horizontal-logo.svg';
// import Aws from 'icons/aws-logo.svg';
import Calendar from 'icons/calendar-icon.inline.svg';
import Cilium from 'icons/cilium-horizontal-logo.svg';
import Clock from 'icons/clock-icon.inline.svg';
import Coins from 'icons/coins-icon.inline.svg';
import Go from 'icons/go-horizontal.svg';
import Kubernetes from 'icons/kubernetes-horizontal-logo.svg';

const items = [
  {
    icon: Argo,
    iconClassname: 'h-16 w-[138px]',
    title: 'GitOps with ArgoCD',
    description:
      'This one-day training in German or English offers a practical and clearly understandable introduction to GitOps using Argo CD on Kubernetes.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: '/workshop-argo',
  },
  {
    icon: Go,
    iconClassname: 'h-16 w-[129px]',
    title: 'Go Basics',
    description:
      'This one-day training in German or English offers an introduction to Go for software developers, architects and DevOps engineers.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: '/workshop-go',
  },
  {
    icon: Cilium,
    iconClassname: 'h-16 w-[136px]',
    title: 'Cilium Basics',
    description:
      'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBFP-based networking, observability and security stack for cloud and on-premise infrastructure.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: '/workshop-cilium',
  },
  {
    icon: Kubernetes,
    iconClassname: 'h-16 w-[266px]',
    title: 'Kubernetes Basics',
    description:
      'This one-day training in German or English provides a practical and easy-to-understand introduction to Kubernetes.',
    date: 'April 25, 2024',
    time: '09:00 - 16:45',
    price: 'CHF 650',
    url: '/workshop-kubernetes',
  },
  // {
  //   icon: Aws,
  //   iconClassname: 'h-16 w-[106px]',
  //   title: 'AWS Serverless',
  //   description:
  //     'This one-day training in English will demonstrate how to build your startup application, from a napkin idea to a fully functional production deployment, using AWS serverless services.',
  //   date: 'June 15, 2024',
  //   time: '09:00 - 16:45',
  //   price: 'CHF 650',
  //   url: '/workshop-aws',
  // },
];

const TITLE = 'Workshops';

const DESCRIPTION =
  "Roll up your sleeves and learn! We have an exciting lineup of hands-on workshop where you can put your skills to the test and learn from experts. Whether you're a beginner looking to get started with cloud native technologies or a seasoned pro looking to dive deeper, we have something for everyone. Take advantage of this.";

const Hero = () => (
  <section className="safe-paddings pt-24 pb-40">
    <div className="container mt-4 text-center text-primary-1">
      <h1 className="text-6xl font-bold leading-denser ">{TITLE}</h1>
      <p className="mx-auto mt-8 max-w-[1008px] text-2xl leading-normal">{DESCRIPTION}</p>
    </div>
    <ul className="mx-auto mt-20 grid w-[800px] grid-cols-2 gap-8 sm:flex sm:w-auto sm:flex-wrap sm:justify-center">
      {items.map(({ icon, iconClassname, title, description, date, time, price, url }, index) => (
        <li
          className="flex h-full w-[384px] flex-col rounded p-8 text-primary-1 shadow-[0_14px_40px_#CCCCCC]"
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
            <span className="ml-2.5 w-fit font-bold leading-normal">{date}</span>
          </div>
          <div className="mt-2 flex w-fit items-center justify-center">
            <Clock className="h-4 w-4" />
            <span className="ml-2.5 font-bold leading-normal">{time}</span>
          </div>
          <div className="mt-6 mb-8 flex w-fit items-center justify-center">
            <Coins className="h-4 w-4" />
            <span className="ml-2.5 font-bold leading-normal">{price}</span>
          </div>
          <Button className="mt-auto" size="lg" theme="blue" to={url}>
            More info
          </Button>
        </li>
      ))}
    </ul>
  </section>
);

export default Hero;
