/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AndreaGiardiniPhoto from './images/andrea-giardini.jpg';
import AndreaSoldinoPhoto from './images/andrea-soldino.jpg';
import BenoitSchipperPhoto from './images/benoit-schipper.jpg';
import GiuseppeGianquittoPhoto from './images/giuseppe-gianquitto.jpg';
import JanKarremansPhoto from './images/jan-karremans.jpg';
import JanWillemPhoto from './images/jan-willem.jpg';
import JohnKeatesPhoto from './images/john-keates.jpg';
import JohnStroosnijderPhoto from './images/john-stroosnijder.jpg';
import KasraAmirsarvariPhoto from './images/kasra-amirsarvari.jpg';
import LouellaCreemersPhoto from './images/louella-creemers.jpg';
import MarcelKerkerPhoto from './images/marcel-kerker.jpg';
import MarcoVerleunPhoto from './images/marco-verleun.jpg';
import MaximBurgerhoutPhoto from './images/maxim-burgerhout.jpg';
import NicoKrijnenPhoto from './images/nico-krijnen.jpg';
import NiravBhadradiyaPhoto from './images/nirav-bhadradiya.jpg';
import PeterVanEijkPhoto from './images/peter-van-eijk.jpg';
import RajalakshmiRajamuthuPhoto from './images/rajalakshmi-rajamuthu.jpg';
import RemySimonsPhoto from './images/remy-simons.jpg';
import SarahGruneisenPhoto from './images/sarah-gruneisen.jpg';
import SebastiaanMannemPhoto from './images/sebastiaan-mannem.jpg';
import SerdarKalayciPhoto from './images/serdar-kalayci.jpg';
import SeviKarakulakPhoto from './images/sevi-karakulak.jpg';
import ShwetaVohraPhoto from './images/shweta-vohra.jpg';
import SohanMaheshwarPhoto from './images/sohan-maheshwar.jpg';
import StefanVanGastelPhoto from './images/stefan-van-gastel.jpg';
import WilliamRizzoPhoto from './images/william-rizzo.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

const TITLE = 'Speakers';
const ITEMS = [
  {
    id: '1',
    name: 'Sarah Gruneisen',
    content: '',
    photo: SarahGruneisenPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '9:40',
    title: 'Empowering The Teams, Avoiding Micromanagement: The Balance of Leadership',
    duration: '35 min',
  },
  {
    id: '2',
    name: 'Stefan van Gastel',
    content: '',
    photo: StefanVanGastelPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:20',
    title: 'Edge of Tomorrow',
    duration: '35 min',
  },
  {
    id: '3',
    name: 'John Stroosnijder',
    content: '',
    photo: JohnStroosnijderPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:20',
    title: 'Edge of Tomorrow',
    duration: '35 min',
  },
  {
    id: '4',
    name: 'Nico Krijnen',
    content: '',
    photo: NicoKrijnenPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:20',
    title: 'Doing Multi-Cloud the Easy Way... But should you?',
    duration: '35 min',
  },
  {
    id: '5',
    name: 'Sohan Maheshwar',
    content: '',
    photo: SohanMaheshwarPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:25',
    title: 'A Greener, Cost-Effective Cloud with Serverless WebAssembly',
    duration: '35 min',
  },
  {
    id: '6',
    name: 'Jan Willem Van Hermon',
    content: '',
    photo: JanWillemPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:25',
    title: 'Killing PETs with CPET at a Dutch government organization is central to our story.',
    duration: '35 min',
  },
  {
    id: '7',
    name: 'Sebastiaan Mannem',
    content: '',
    photo: SebastiaanMannemPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:25',
    title: 'Killing PETs with CPET at a Dutch government organization is central to our story.',
    duration: '35 min',
  },
  {
    id: '8',
    name: 'Benoit Schipper',
    content: '',
    photo: BenoitSchipperPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:25',
    title: 'Killing PETs with CPET at a Dutch government organization is central to our story.',
    duration: '35 min',
  },
  {
    id: '9',
    name: 'Remy Simons',
    content: '',
    photo: RemySimonsPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '12:05',
    title: 'Cilium: divide et impera the networking stack',
    duration: '35 min',
  },
  {
    id: '10',
    name: 'Giuseppe Gianquitto',
    content: '',
    photo: GiuseppeGianquittoPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '12:05',
    title: 'Socio-technical challenges of adopting Kubernetes',
    duration: '35 min',
  },
  {
    id: '11',
    name: 'John Keates',
    content: '',
    photo: JohnKeatesPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '13:40',
    title: 'Migration to Kubernetes at Wehkamp',
    duration: '35 min',
  },
  {
    id: '12',
    name: 'Maxim Burgerhout',
    content: '',
    photo: MaximBurgerhoutPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '13:40',
    title: 'Postgres on Kubernetes: the time is now!',
    duration: '35 min',
  },
  {
    id: '13',
    name: 'Andrea Soldino',
    content: '',
    photo: AndreaSoldinoPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:20',
    title: 'Getting the Most Out of Service Mesh: Our Top Tips!',
    duration: '35 min',
  },
  {
    id: '14',
    name: 'Shweta Vohra',
    content: '',
    photo: ShwetaVohraPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:20',
    title: 'Getting the Most Out of Service Mesh: Our Top Tips!',
    duration: '35 min',
  },
  {
    id: '15',
    name: 'Rajalakshmi Rajamuthu',
    content: '',
    photo: RajalakshmiRajamuthuPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:20',
    title: 'Mapping K8s migration',
    duration: '35 min',
  },
  {
    id: '16',
    name: 'Nirav Bhadradiya',
    content: '',
    photo: NiravBhadradiyaPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:20',
    title: 'Mapping K8s migration',
    duration: '35 min',
  },
  {
    id: '17',
    name: 'Peter van Eijk',
    content: '',
    photo: PeterVanEijkPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '15:25',
    title: 'Our journey in building a gamified cyber security platform with k8s',
    duration: '35 min',
  },
  {
    id: '18',
    name: 'Kasra Amirsarvari',
    content: '',
    photo: KasraAmirsarvariPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '15:25',
    title: 'Dev to the Future - Improving Developer Experience',
    duration: '35 min',
  },
  {
    id: '19',
    name: 'William Rizzo',
    content: '',
    photo: WilliamRizzoPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: 'Contributors Panel',
    duration: '35 min',
  },
  {
    id: '20',
    name: 'Marcel Kerker',
    content: '',
    photo: MarcelKerkerPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: 'Contributors Panel',
    duration: '35 min',
  },
  {
    id: '21',
    name: 'Andrea Giardini',
    content: '',
    photo: AndreaGiardiniPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: 'Contributors Panel',
    duration: '35 min',
  },
  {
    id: '22',
    name: 'Marco Verleun',
    content: '',
    photo: MarcoVerleunPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: 'Find CVEs with ease',
    duration: '5 min',
  },
  {
    id: '23',
    name: 'Louëlla Creemers',
    content: '',
    photo: LouellaCreemersPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: 'Docker & Kubernetes Unboxed',
    duration: '5 min',
  },
  {
    id: '24',
    name: 'Serdar Kalaycı',
    content: '',
    photo: SerdarKalayciPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: 'Back to basics: 12 Factor App in Cloud Native Era',
    duration: '5 min',
  },
  {
    id: '25',
    name: 'Jan Karremans',
    content: '',
    photo: JanKarremansPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:05',
    title: "Just don't do it - Databases in Kubernetes",
    duration: '5 min',
  },
  {
    id: '26',
    name: 'Sevi Karakulak',
    content: '',
    photo: SeviKarakulakPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:45',
    title: 'The Power of Community: A tale about Anxiety, Ambition and Allies',
    duration: '35 min',
  },
];
// TODO: replace id => index connect with only id`s
// const ITEMS = [
//   {
//     id: '2',
//     name: 'Thomas Graf',
//     position: 'CTO & CO-Founder <br/> Isovalent',
//     content:
//       'Thomas is the Co-Founder and CTO of Isovalent, long-time eBPF developer, and one of the creators of the Cilium project. Before working on Cilium, and eBPF, Thomas was a Linux kernel developer for 15+ years focusing on networking, security, and eBPF. Thomas currently serves as the Co-Chair of the eBPF Foundation. When not working on open source software, Thomas is enjoying the Swiss mountains on bike and foot with his family.',
//     photo: ThomasGrafPhoto,
//     twitterUrl: '',
//     linkedInUrl: '',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '9:00',
//     title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
//     duration: '30 min',
//   },
//   {
//     id: '18',
//     name: 'Liz Rice',
//     position: 'Chief Open Source Office <br/> Isovalent',
//     content:
//       "Liz Rice is Chief Open Source Officer with eBPF specialists Isovalent, creators of the Cilium cloud native networking, security and observability project. She was Chair of the CNCF's Technical Oversight Committee in 2019-2022, and Co-Chair of KubeCon + CloudNativeCon in 2018. She is also the author of Container Security, published by O'Reilly. She has a wealth of software development, team, and product management experience from working on network protocols and distributed systems, and in digital technology sectors such as VOD, music, and VoIP. When not writing code, or talking about it, Liz loves riding bikes in places with better weather than her native London, competing in virtual races on Zwift, and making music under the pseudonym Insider Nine.",
//     photo: LizRicePhoto,
//     twitterUrl: '',
//     linkedInUrl: '',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '16:45',
//     title: 'eBPF for Security',
//     duration: '30 min',
//   },
//   {
//     id: '12',
//     name: 'Julius Volz',
//     position: 'Co-Founder of prometheus.io <br/> Founder at PromLabs',
//     content:
//       'Julius co-founded the Prometheus monitoring system and originally led the project to success at SoundCloud and beyond. He now focuses on growing the Prometheus community, started PromCon, the first conference around Prometheus, and helps companies use and adapt Prometheus through his company PromLabs. Before creating Prometheus at SoundCloud, Julius was a Site Reliability Engineer at Google.',
//     photo: JuliusVolzPhoto,
//     twitterUrl: 'https://twitter.com/juliusvolz',
//     linkedInUrl: 'https://www.linkedin.com/in/julius-volz/',
//     githubUrl: '',
//     communityUrl: 'https://community.cncf.io/u/mvhzxh/',
//     instagramUrl: '',
//     websiteUrl: 'https://juliusv.com/',
//     time: '14:15',
//     title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
//     duration: '30 min',
//   },
//   {
//     id: '8',
//     name: 'Annie Talvasto',
//     position: 'CNCF Ambassador <br/> Azure MVP',
//     content:
//       'Annie Talvasto is an international technology speaker, CNCF Ambassador, Azure MVP and specialist in Kubernetes & open source. Annie hosts & produces the Cloud Gossip podcast and has been a co-organizer of Kubernetes & CNCF Finland meetup since 2017. She has worked at various tech companies from cloud start-ups to enterprises. Annie has spoken at tech conferences on multiple continents, including KubeCon + CloudNativeCon, Microsoft Build & Ignite, NDC, KCDC, Global Azure, Future Tech and more. During her career she has spoken to more than 30,000 developers at User Groups meetings & Conferences.',
//     photo: AnnieTalvastoPhoto,
//     twitterUrl: 'https://twitter.com/AnnieTalvasto',
//     linkedInUrl: 'https://www.linkedin.com/in/talvasto/',
//     githubUrl: '',
//     communityUrl: 'https://community.cncf.io/u/mwwdtj/#/about',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '11:30',
//     title: 'What Anime Taught Me About K8s & Tech Careers',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
//   {
//     id: '6',
//     name: 'Ricardo Rocha',
//     position: 'Computing Engineer CERN <br/> TOC CNCF',
//     content:
//       'Ricardo is a Computing Engineer in the CERN cloud team focusing on containerized deployments, networking and more recently machine learning platforms. He has led for several years the internal effort to transition services and workloads to use cloud native technologies, as well as dissemination and training efforts. Ricardo got CERN to join the CNCF and is currently in the TOC and a lead of the CNCF Research User Group. Prior to this work Ricardo helped develop the grid computing infrastructure serving the Large Hadron Collider (LHC).',
//     photo: RicardoRochaPhoto,
//     twitterUrl: 'https://twitter.com/ahcorporto',
//     linkedInUrl: 'https://www.linkedin.com/in/ricardo-rocha-739aa718/',
//     githubUrl: 'https://github.com/rochaporto',
//     communityUrl: 'https://community.cncf.io/u/m46hr5/#/about',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '10:45',
//     title: 'When Things Get Big: Scaling Cloud Native Workloads and Software Distribution',
//     duration: '30 min',
//   },
//   {
//     id: '4',
//     name: 'Max Körbächer',
//     position: 'Co-Founder of Liquid Reply <br/> Co-Chair CNCF TAG Environmental Sustainability',
//     content:
//       'Max is Co-Founder and Cloud Native Advocate at Liquid Reply. He is Co-Chair of the CNCF Environmental Sustainability Technical Advisory Group and served 3 years at the Kubernetes release team. Besides, he is part of different OSS Advisory Boards. His focus is on designing and building cloud-native solutions on/with Kubernetes and platform engineering to simplify the current challenges of complex systems.',
//     photo: MaxKorbacherPhoto,
//     twitterUrl: 'https://twitter.com/mkoerbi',
//     linkedInUrl: 'https://www.linkedin.com/in/maxkoerbaecher/',
//     githubUrl: '',
//     communityUrl: 'https://community.cncf.io/u/m76gha/#/about',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '9:45',
//     title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes',
//     duration: '30 min',
//   },
//   {
//     id: '14',
//     name: 'Priya Wadhwa',
//     position: 'Software Engineer <br/> Chainguard',
//     content:
//       'Priya Wadhwa is an engineering manager working on open source security at Chainguard. She serves on the Sigstore Technical Steering Committee and is a maintainer on many Sigstore projects and Tekton Chains. Priya is passionate about making security easy and available for everyone.',
//     photo: PriyaWadhwaPhoto,
//     twitterUrl: 'https://twitter.com/priyawadhwa16',
//     linkedInUrl: '',
//     githubUrl: 'https://github.com/priyawadhwa',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '15:15',
//     title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
//     duration: '30 min',
//   },
//   {
//     id: '8',
//     name: 'Lisa Falco',
//     position: 'Consultant in Medical & Responsible AI <br/> Zühlke Group',
//     content:
//       'Lisa is a Lead Consultant in AI & Data with 15 years of industry experience in medical applications of Data Science and in bringing medical software products to market. She combines solid expertise in Machine Learning and AI with a passion for developing user-centric products, particularly in healthcare and medical technology. Among others she was previously Director of Data Science at Ava Women and Head of Product at Pipra. She has a PhD in Biomedical Imaging from EPFL, Switzerland.',
//     photo: LisaFalcoPhoto,
//     twitterUrl: 'https://twitter.com/lisafalco',
//     linkedInUrl: 'https://www.linkedin.com/in/lisa-falco-jon',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: 'https://www.instagram.com/lisafalco_dsw/',
//     websiteUrl: 'https://lisafalco.com',
//     time: '11:30',
//     title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
//     duration: '30 min',
//   },
//   {
//     id: '16',
//     name: 'Sebastian Kister',
//     position: 'Lead Kubernetes <br/> Competence Center Audi',
//     content:
//       'Sebastian is an awarded global thought leader for enterprise transformation and counts world wide as transformation evangelist. He is leading a competence center in IT infrastructure and aligning all brands in the VW Group with the mission to once again boldly go where no one has gone before. As an agile digital native with countless successfully implemented projects in 7 industries he can be described as well as a startup-professional who helped to shape products from genesis to market leader with bleeding-edge technology. Always striving to innovate and question the status quo, he helps to break dogmas, implement a new culture, and never settles while pursuing constant progress.',
//     photo: SebastianKisterPhoto,
//     twitterUrl: '',
//     linkedInUrl: 'https://www.linkedin.com/in/sebastiankister/',
//     githubUrl: '',
//     communityUrl: 'https://community.cncf.io/u/mrku63/#/about',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '16:00',
//     title:
//       "Process is what naturally follows - a cloud platform's guide on people-first transformation",
//     duration: '30 min',
//   },
//   {
//     id: '12',
//     name: 'Reto Lehmann',
//     position: 'Principal Software Engineer at Red Hat',
//     content:
//       'Reto Lehmann is a Principal Software Engineer at Red Hat and a contributor to the Knative project. He has been working on its various components, including Knative Serving, Client, and sandbox repositories. Reto has over ten years of experience in the field of containers and cloud-native technology, having built Kubernetes-based platforms\n' +
//       'both on-premise and in various public clouds.\n' +
//       '\n' +
//       'Before his work at Red Hat, Reto gained valuable experience as a consultant, helping organizations adopt cloud- native technology and implement effective solutions. He is also an adjunct professor, where he teaches courses about these topics.',
//     photo: RetoLehmannPhoto,
//     twitterUrl: '',
//     linkedInUrl: 'https://www.linkedin.com/in/retocode/',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '14:15',
//     title: 'Tales of Serverless - a story about building scalable applications',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
//   {
//     id: '10',
//     name: 'Bill Mulligan',
//     position: 'Cilium and eBPF Community Pollinator',
//     content:
//       'Bill Mulligan is a cloud native pollinator and community builder. He has given talks and written articles about\n' +
//       'building the business case for cloud native. While at CNCF he restarted the Kubernetes Community Day program\n' +
//       'and worked to grow the student community. He is currently at Isovalent strengthening the Cilium and eBPF\n' +
//       'communities.',
//     photo: BillPhoto,
//     twitterUrl: 'https://twitter.com/breakawaybilly',
//     linkedInUrl: 'https://www.linkedin.com/in/bamulligan/',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '13:30',
//     title: 'Buzzing Across the Cloud Native Landscape with eBPF',
//     duration: '30 min',
//   },
//   {
//     id: '4',
//     name: 'Adrian Reber',
//     position: 'Senior Principal Software Engineer at Red Hat',
//     content:
//       'Adrian is a Senior Principal Software Engineer at Red Hat and is migrating processes at least since 2010. He\n' +
//       'started to migrate processes in a high performance computing environment and at some point he migrated so\n' +
//       'many processes that he got a PhD for that. Most of the time he is now migrating containers but occasionally he still\n' +
//       'migrates single processes.',
//     photo: AdrianReberPhoto,
//     twitterUrl: '',
//     linkedInUrl: '',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '9:45',
//     title: 'Forensic container checkpointing and analysis',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
//   {
//     id: '6',
//     name: 'Filip Nikolic',
//     position: 'Architect Owner Kubernetes Postfinance',
//     content:
//       'Filip works for a financial institute and is a strong advocate of cloud-native technologies. As a speaker at the\n' +
//       'conference, Filip will share insights into why an increasing number of CNCF projects decide to make use of eBPF.',
//     photo: FilipPhoto,
//     twitterUrl: 'https://twitter.com/f1kook1f',
//     linkedInUrl: 'https://www.linkedin.com/in/filip-nikolic/',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '10:45',
//     title: 'Demystifying eBPF - eBPF Firewall from scratch',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
//   {
//     id: '14',
//     name: 'Timo Salm',
//     position: 'Lead Developer Experience Solutions Engineer VMware',
//     content:
//       'Timo Salm is based out of Stuttgart in southwest Germany and in the role of the first VMware Tanzu Solutions\n' +
//       'Engineer for Developer Experience in EMEA with a focus on VMware Tanzu Application Platform and commercial\n' +
//       "Spring products. In this role, he’s responsible for educating customers on these products' value, vision, and\n" +
//       'strategy and ensuring that they succeed by working closely on different levels of abstractions of modern\n' +
//       'applications and modern infrastructure.\n' +
//       'Before Timo joined Pivotal and VMware, he worked for more than seven years for consulting firms in the\n' +
//       'automotive industry as a software architect and full-stack developer on projects for customer-facing products.',
//     photo: TimoSalmPhoto,
//     twitterUrl: 'https://twitter.com/salmto',
//     linkedInUrl: 'https://www.linkedin.com/in/timo-salm-8779a680/',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '15:15',
//     title: 'Closing the Developer Experience Gap of your Container Platforms',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
//   {
//     id: '10',
//     name: 'Lena Fuhrimann',
//     position: 'Co-Founder & Cloud Software Architect bespinian',
//     content:
//       'Lena is a passionate software engineer and architect. Together with Mathis Kretz she founded the company\n' +
//       'bespinian in 2019 and has since worked with many customers and interesting technologies. Her main focus lies on\n' +
//       'security, Kubernetes, serverless technologies, public clouds and Infrastructure as Code. However, she has also\n' +
//       'worked a lot with Kubernetes and its ecosystem and has deployed many applications to those platforms using\n' +
//       'automation and GitOps. She uses Arch btw.',
//     photo: LenaPhoto,
//     twitterUrl: 'https://twitter.com/the_cloudlena',
//     linkedInUrl: 'https://www.linkedin.com/in/lena-fuhrimann/',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '13:30',
//     title: 'Streamlined Troubleshooting in Kubernetes',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
//   {
//     id: '16',
//     name: 'Raphaël Pinson',
//     position: 'Solutions Architect at Isovalent',
//     content:
//       'Raphaël Pinson is a Solutions Architect with Cloud Native networking and security specialists Isovalent, creators of the Cilium eBPF-based networking project. He works on Cilium, Hubble & Tetragon and the future of Cloud-Native networking & security using eBPF. An early adept of the DevOps principles, he has been a practitioner of Configuration Management and Agile principles in Operations for many years, with a special involvement in the Puppet and Terraform communities over the years.',
//     photo: RaphaelPhoto,
//     twitterUrl: 'https://twitter.com/raphink',
//     linkedInUrl: 'https://www.linkedin.com/in/raphink/',
//     githubUrl: '',
//     communityUrl: '',
//     instagramUrl: '',
//     websiteUrl: '',
//     time: '16:00',
//     title: 'Bridging Dev and Ops with eBPF: Extending Observability Upwards and Downwards',
//     duration: '30 min',
//     isCoincidedEvent: true,
//   },
// ];

const Speakers = ({ location }) => {
  const [isSpeakersOpen, setIsSpeakersOpen] = useState(false);
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

  const handleShowMoreClick = () => {
    setIsSpeakersOpen((isSpeakersOpen) => !isSpeakersOpen);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        const element = document.getElementById('speakers');

        window.scrollTo({
          top: window.pageYOffset + element.getBoundingClientRect().top,
        });

        if (Number(state.modalId) > 7) {
          handleShowMoreClick();
        }

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
          {ITEMS.map(({ name, photo }, index) => (
            <li
              className={clsx(
                'group flex w-[240px] cursor-pointer flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]',
                index > 7 && !isSpeakersOpen ? 'hidden' : 'flex'
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
              {/* <span
                className="mt-1.5 text-primary-1"
                dangerouslySetInnerHTML={{ __html: position }}
              /> */}
            </li>
          ))}
        </ul>
        <button
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
        </button>
        <Modal
          modalData={ITEMS[modalDataId]}
          isVisible={isModalVisible}
          isPresentationShow={false}
          onModalHide={handleModalHide}
        />
      </div>
    </section>
  );
};

export default Speakers;
