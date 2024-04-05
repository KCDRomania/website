/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AdrianVladuPhoto from './images/adrian-vladu-photo.jpg';
import AlessandroPilottiPhoto from './images/alessandro-pilotti-photo.jpg';
import AlessandroVozzaPhoto from './images/alessandro-vozza-photo.jpg';
import AlexRaiuPhoto from './images/alex-raiu-photo.jpg';
import AlexandruDejanuPhoto from './images/alexandru-dejanu-photo.jpg';
import AndraSomesanPhoto from './images/andra-somesan-photo.jpg';
import AndradaRaducanuPhoto from './images/andrada-raducanu-photo.jpg';
import AndreiCiocPhoto from './images/andrei-cioc-photo.jpg';
import AndreiPetrescuPhoto from './images/andrei-petrescu-photo.jpg';
import AndreiPitisPhoto from './images/andrei-pitis-photo.jpg';
import AndreiaIrinaOcanoaiaPhoto from './images/andreia-irina-ocanoaia-photo.jpg';
import CarmenBobeiPhoto from './images/carmen-bobei-photo.jpg';
import ClaudiuHobjilaPhoto from './images/claudiu-hobjila-photo.jpg';
import FlorinLoghiadePhoto from './images/florin-loghiade-photo.jpg';
import GenericSpeakerPhoto from './images/generic-speaker-photo.jpg';
import GeorgeHantzarasPhoto from './images/george-hantzaras-photo.jpeg';
import GeorgeTudureanPhoto from './images/george-tudurean-photo.jpg';
import IulianTaiatuPhoto from './images/iulian-taiatu-photo.png';
import JosephSandovalPhoto from './images/joseph-sandoval-photo.jpg';
import KatharinaSickPhoto from './images/katharina-sick-photo.jpg';
import MarkSagiKazarPhoto from './images/mark-sagi-kazar-photo.jpg';
import MatthiasBertschyPhoto from './images/matthias-bertschy-photo.jpeg';
import MihaiGoguPhoto from './images/mihai-gogu-photo.png';
import MihalceaMihaiAlexandruPhoto from './images/mihalcea-mihai-alexandru-photo.jpg';
import OctavianPetrePhoto from './images/octavian-petre-photo.jpg';
import OvidiuValeanuPhoto from './images/ovidiu-valeanu-photo.jpg';
import RaduZamfirPhoto from './images/radu-zamfir-photo.jpg';
import StefanProdanPhoto from './images/stefan-prodan-photo.jpeg';
import TimothyMamoPhoto from './images/timothy-mamo-photo.jpg';
import VincenzoScamporlinoPhoto from './images/vincenzo-scamporlino-photo.jpeg';
import YujinKimPhoto from './images/yujin-kim-photo.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

const TITLE = 'Speakers';
const ITEMS = [
  {
    id: '1',
    name: 'Andrei Pitis',
    position: 'Founder & CEO at Genezio',
    content:
      'With a remarkable journey over 30 years in the IT industry across Romania and the United States, Andrei is an example of innovation and entrepreneurship in the tech landscape.' +
      '<br/><br/>' +
      "In 2022, Andrei, along with Bogdan Ripa, Paula Cionca, and Bogdan Vlad, co-founded Genezio, a scalable type-safe backend framework that connects seamlessly with many frontend technologies. Genezio's clients range from web and mobile to web3 and AI app developers." +
      '<br/><br/>' +
      'Alumnus of Politehnica University of Bucharest, Andrei embarked on his career in software early, founding a Silicon Valley-based startup in his 20s.' +
      '<br/><br/>' +
      'In his career journey, he shifted from founding startups to managing major corporations. He held the position of Romania Country Manager at IXIA for more than 5 years.' +
      '<br/><br/>' +
      'Afterwards, he founded and successfully exited Vector Watch, followed by a 4-year tenure as VP Product and Head of European Development Centers la Fitbit.' +
      '<br/><br/>' +
      "Andrei's dedication to the tech community is evident through his roles as ANIS President, and co-founder of Tech Angels and Innovation Labs, nurturing the next generation of tech entrepreneurs.",
    photo: AndreiPitisPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/andreipitis/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:00',
    title: 'Keynote: From Open Source Contributor to Serial Entrepreneur',
    duration: '30 min',
  },
  {
    id: '2',
    name: 'Joseph Sandoval',
    position:
      'Principal Product Manager at Adobe & Member of CNCF End User Technical Advisory Board',
    content:
      'Serving as the Principal Product Manager for Platform Engineering at Adobe & member of Cloud Native Computing Foundation (CNCF) End User Technical Advisory Board (TAB), Joseph is not only a respected upstream #kubernetes contributor, but also holds the distinction of being part of six Kubernetes release teams.' +
      '<br/><br/>' +
      "His commitment extends beyond his contributions; he's dedicated to guiding new talents eager to make their mark in the #opensource community.",
    photo: JosephSandovalPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/josephrsandoval/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '09:30',
    title: 'Keynote: A Decade of Kubernetes: Community-Driven Evolution and the Path Forward',
    duration: '30 min',
  },
  {
    id: '3',
    name: 'Claudiu Hobjila',
    position: 'Customer Engineer at Google Cloud',
    content:
      'Certified professional Cloud Architect, fluent in Google Cloud and Azure dialects. More than 10 years of experience in wrangling pixels into scalable, enterprise-ready Cloud solutions.' +
      'Currently working as Customer Engineer at Google where I help large EMEA customers to leverage cutting-edge, cloud native technologies on Google Cloud Platform.',
    photo: ClaudiuHobjilaPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/claudiu-hobjila/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:40',
    title: 'Sponsored Keynote: May the Pods Be With You: A GKE Odyssey',
    duration: '30 min',
  },
  {
    id: '4',
    name: 'Timothy Mamo',
    position: 'Senior Developer Advocate - DigitalOcean',
    content:
      'Timothy Mamo loves to help growing companies make the most of the cloud by focusing on Cloud Native technologies and processes. He’s had a varied experience, from studying aerospace engineering and working in the automotive industry before moving into the world of Cloud. He enjoys working and helping others improve and understand, at times with some Mediterranean gusto.',
    photo: TimothyMamoPhoto,
    twitterUrl: 'https://twitter.com/timothy_mamo',
    linkedInUrl: 'https://linkedin.com/in/timothymamo/',
    githubUrl: '',
    communityUrl: 'https://timothymamo.com',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:20',
    title: 'Keynote: DevOps Lessons from a Primary School Teacher',
    duration: '30 min',
  },
  {
    id: '5',
    name: 'Andra Somesan',
    position: 'Solutions Architect, Amazon Web Services',
    content:
      'Andra is a Solutions Architect at Amazon Web Services, based in Romania. She has transitioned from telco to IT with a focus on cloud and DevOps. She is curious to learn and excited to share the knowledge. In the 10 years of working experience, she has learned a lot about digital transformation and how she can help customers leverage best practices to make that happen.',
    photo: AndraSomesanPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:00',
    title: 'Revolutionise your Kubernetes game with cdk8s',
    duration: '30 min',
  },
  {
    id: '6',
    name: 'Stefan Prodan',
    position: 'Flux CD core maintainer',
    content:
      "Stefan is a Software Engineer and an open source contributor to cloud-native projects. He is the creator of Flagger the progressive delivery operator for Kubernetes, and a core maintainer of the CNCF's Flux project. Stefan has over 15 years of experience with software development and he enjoys programming in Go and writing about distributed systems.",
    photo: StefanProdanPhoto,
    twitterUrl: 'https://twitter.com/stefanprodan',
    linkedInUrl: 'https://linkedin.com/in/stefanprodan',
    githubUrl: 'https://github.com/stefanprodan',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://stefanprodan.com',
    time: '11:45',
    title: 'Introducing Timoni the Next-Gen Package Manager for Kubernetes',
    duration: '30 min',
  },
  {
    id: '7',
    name: 'Alessandro Vozza',
    position: 'DevRel at Solo.io',
    content:
      "Community leader and CNCF ambassador, Alessandro has spent the last few years building cloud native infrastructures for Microsoft customers, animating the Dutch community, and training others to pass the CKx exams. He has passion for all things cloud native, he's been around open source for 25 years and recently moved to a new Developer Relations role. Twitter handle: @bongo",
    photo: AlessandroVozzaPhoto,
    twitterUrl: 'https://twitter.com/bongo',
    linkedInUrl: 'https://linkedin.com/in/alessandrovozza',
    githubUrl: '',
    communityUrl: 'https://dev.to/ams0',
    instagramUrl: 'https://www.instagram.com/cloudnativeams/',
    websiteUrl: 'https://solo.io',
    time: '11.00',
    title: 'Trust no one: implementing zero trust security with Ambient Service Mesh',
    duration: '30 min',
  },
  {
    id: '8',
    name: 'Florin Loghiade',
    position: 'Azure MVP, Principal Site Reliability Engineer @ UiPath',
    content:
      'Florin Loghiade is an experienced Cloud Solutions Architect primarily focusing on Azure. With a background in on-premises environments, Florin has spent the last several years focused on migrating and modernizing brownfield deployments in Azure, with a strong emphasis on security and governance.' +
      'In addition to his experience in cloud architecture and security, Florin is a specialist in cloud automation, cost control, and governance. He has helped many organizations automate their cloud operations using Azure-specific tools and developed best practices for cost optimization and resource management.' +
      'As an Azure MVP, Florin is a recognized expert in the field and profoundly understands the latest Azure features and capabilities. He is also passionate about security uplift and has extensive experience helping organizations improve their security posture in the cloud.',
    photo: FlorinLoghiadePhoto,
    twitterUrl: 'https://twitter.com/florinloghiade',
    linkedInUrl: 'https://linkedin.com/in/florinloghiade',
    githubUrl: '',
    communityUrl: 'https://florinloghiade.ro',
    instagramUrl: '',
    websiteUrl: 'https://uipath.com',
    time: '14:45',
    title: "Mastering Cloud Kubernetes: Navigating Azure's Kubernetes Service Maze",
    duration: '30 min',
  },

  {
    id: '9',
    name: 'Vincenzo Scamporlino',
    position: 'Senior Software Engineer @ Spotify',
    content:
      'Vincenzo is a Senior Software Engineer at Spotify, living in Stockholm, and is a member of the core team of Backstage.' +
      'He began his career as a Mobile Engineer in Digital Creative Agencies and his journey has since evolved into Full-Stack Engineering, with a particular focus on eMobility.' +
      'Today, you might find him on Discord, engaging with the Backstage community, or at local meetups, passionately advocating for how improving Developer Experience can reduce costs and enhance the efficiency of an organization.',
    photo: VincenzoScamporlinoPhoto,
    twitterUrl: 'https://twitter.com/vinzscam',
    linkedInUrl: 'https://linkedin.com/in/vincenzoscamporlino',
    githubUrl: 'https://github.com/vinzscam',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://backstage.spotify.com',
    time: '12:30',
    title: 'Efficiency in Engineering: The Game-Changing Role of Developer Portals',
    duration: '30 min',
  },
  {
    id: '10',
    name: 'George Hantzaras',
    position: 'Director, Kubernetes Engineering @MongoDB',
    content:
      'George is a distributed systems expert and a hands-on engineering leader with focus on delivering Enterprise cloud services at scale. He is a Director of Engineering at MongoDB, focusing on implementing cloud native technologies at enterprise scale. Most recently, he has been a speaker at global events like OpenSource Summit, Hashiconf, LeadDev, DeveloperWeek, and more, focusing on agile leadership, scaling engineering teams, and entrepreneurship.',
    photo: GeorgeHantzarasPhoto,
    twitterUrl: 'https://twitter.com/iamhantzo',
    linkedInUrl: 'https://linkedin.com/in/george-hantzaras/',
    githubUrl: '',
    communityUrl: 'https://docs.google.com/document/d/11d5iiHCbbkb7Jftkb3PPtWMeVvxoUWAWyqvdyKD7sOo',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:00',
    title: 'Building Internal Developer Platforms with Kubernetes Operators',
    duration: '30 min',
  },
  {
    id: '11',
    name: 'Mihai Mihalcea',
    position: 'DevOps Engineer, Team Coordinator at STS',
    content:
      "I'm Team Coordinator at STS. I'm 27 years old and have been working for 4 years and a half months in STS. I am passionate about Kubernetes and I want to integrate as many as possible cloud native techs in our workflows.",
    photo: MihalceaMihaiAlexandruPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/mihai-alexandru-mihalcea-06ba44143/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:45',
    title: 'Cloud native for governmental workloads: Challenges & Lesson Learned',
    duration: '30 min',
  },
  {
    id: '12',
    name: 'Octavian Petre',
    position: 'DevOps Engineer, Team Coordinator at STS',
    content:
      "I am almost 26 y/o. I have been working at STS since 2020 as a DevOps engineer. One of the first things to grasp knowledge about at the beginning of my professional career was Kubernetes and I'd love to become as good as i can in understanding it and other CNCF projects.",
    photo: OctavianPetrePhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:45',
    title: 'Cloud native for governmental workloads: Challenges & Lesson Learned',
    duration: '30 min',
  },
  {
    id: '13',
    name: 'Matthias Bertschy',
    position: 'Senior Kubernetes Engineer at ARMO',
    content:
      'Matthias is a Senior Kubernetes Developer at ARMO working on Kubescape. In 2011 he joined a leading security solution provider in Switzerland to become a Security System Engineer. Certified as an Ethical Hacker in 2012 (GPEN certification) and a CISSP in 2015.' +
      'He has become a regular contributor, member of SIG Node and a reviewer for the kubelet and test-infra. For the last 5 years, he has helped Swiss banks udergo digital transformations as a Senior DevOps Engineer and Platform Architect.',
    photo: MatthiasBertschyPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/matthias-bertschy-b427b815/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:45',
    title: 'Who the Helm Owns this YAML?!',
    duration: '30 min',
  },
  {
    id: '14',
    name: 'Christopher Olsen',
    position: 'Senior Software Engineer at Adobe',
    content:
      "An American living in Hamburg Germany, I've been at Adobe for 12 years in various roles. I've always straddled the line between SRE and Software Engineering. I've spent the last 5 years focused on Observability.",
    photo: GenericSpeakerPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/christopher-o-1a725a107/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '12:30',
    title: 'The Daemonset in the Details - Pitfalls of OpenTelemetry Collector Deployments',
    duration: '30 min',
  },
  {
    id: '15',
    name: 'Márk Sági-Kazár',
    position: 'Head of OSS @ OpenMeter',
    content:
      'Mark is a software engineer from Hungary passionate about open source both as a maintainer and as a contributor. Besides writing code, he loves every part of software engineering from software design to devops and infrastructure.' +
      'When he is not coding, Mark attends a local folk dance group, organizes and attends meetups or just stays at home with a beer and a great book.',
    photo: MarkSagiKazarPhoto,
    twitterUrl: 'https://twitter.com/sagikazarmark/',
    linkedInUrl: 'https://linkedin.com/in/sagikazarmark/',
    githubUrl: '',
    communityUrl: 'https://sagikazarmark.hu',
    instagramUrl: '',
    websiteUrl: 'https://openmeter.io',
    time: '12:30',
    title: "Future-Proof Your Platform's CI/CD Without Developers Noticing a Thing",
    duration: '30 min',
  },
  {
    id: '16',
    name: 'Ovidiu Valeanu',
    position: 'Senior Specialist Containers Solutions Architect, Amazon Web Services',
    content:
      'Ovidiu Valeanu is a Senior Specialist Solutions Architect, Containers focused on Kubernetes, Data Analytics and Machine Learning at Amazon Web Services. He enjoys collaborating on Open Source projects and helping teams design, build, and scale distributed systems.',
    photo: OvidiuValeanuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/ovidiuvaleanu/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://aws.amazon.com ',
    time: '14:00',
    title:
      'Dynamic Large Scale Spark on Kubernetes:Empowering the Community with Argo Workflows and Argo Events',
    duration: '30 min',
  },
  {
    id: '17',
    name: 'Katharina Sick',
    position: 'Software Engineer at Dynatrace',
    content:
      "I've done a fair share of mobile app and backend work, but lately, I'm really into Cloud Native computing and enjoy it a lot." +
      "Outside of work, you'll find me hanging out in tech and sports communities, cruising on inline skates, exploring new places, or challenging myself with quizzes and games.",
    photo: KatharinaSickPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/katharinasick/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://ksick.dev',
    time: '14:00',
    title: 'Closing the Loop: Applying Least Privilege and Ensuring We Did It Well',
    duration: '30 min',
  },
  {
    id: '18',
    name: 'Alessandro Pilotti',
    position: 'CEO at Cloudbase Solutions',
    content:
      'Alessandro Pilotti is the CEO of Cloudbase Solutions, a company focused on cloud computing interoperability with a strong open source contribution background, especially around OpenStack, Kubernetes and Ceph. Alessandro has been a speaker for many years at key international industry conferences, including the OpenStack / OpenInfra Summits, Cephalocon, //Build, Oracle OpenWorld, KubeCon and many other cloud related events.' +
      'In the spare time, he enjoys flying with his paraglider into old fashioned clouds.',
    photo: AlessandroPilottiPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/alessandropilotti/',
    githubUrl: '',
    communityUrl: 'https://cloudbase.it/blog',
    instagramUrl: '',
    websiteUrl: 'https://cloudbase.it',
    time: '14:00',
    title: 'Bare metal Kubernetes on mixed x64 and ARM64',
    duration: '30 min',
  },
  {
    id: '19',
    name: 'Adrian Vladu',
    position: 'Senior Cloud Engineer @ Cloudbase Solutions',
    content:
      'Adrian Vladu has an experience of more than 6 years in the cloud computing area, with a focus on Linux and Windows inter-operability.' +
      'He leverages his knowledge and experience as a core reviewer of openstack/cloudbase-init, maintainer of lis/lis-pipeline, cloudbase/cloudbase-init-ci and cloudbase/windows-openstack-imaging-tools open source projects.' +
      'Besides the coding time, his interests in the cloud domain are performance frameworks like OpenStack with OVS/DPDK and fd.io, which he enjoys to deploy and optimize.' +
      'When out of office, he tries to get as many people as possible on the technology train, by giving training and presentations to the community.' +
      'When offline, he is an avid reader and a stoic at heart.',
    photo: AdrianVladuPhoto,
    twitterUrl: 'https://twitter.com/ader1990',
    linkedInUrl: 'https://linkedin.com/in/adrianvladu/',
    githubUrl: '',
    communityUrl: 'https://lazyprogrammer.io',
    instagramUrl: '',
    websiteUrl: 'https://cloudbase.it',
    time: '14:00',
    title: 'Bare metal Kubernetes on mixed x64 and ARM64',
    duration: '30 min',
  },
  {
    id: '20',
    name: 'Mihai Gogu',
    position: 'Platform Engineer at AdoreMe',
    content:
      'Platform Engineer passionate about DevOps, GitOps, Kubernetes and improving developer life. At AdoreMe my main focus is to build tools and platforms with my team, that empower devs to be more autonomous and have a better experience from developing their apps to delivering them to production.',
    photo: MihaiGoguPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:45',
    title: 'CD and GitOps with flux @AdoreMe',
    duration: '30 min',
  },
  {
    id: '21',
    name: 'Andreia-Irina Ocanoaia',
    position: 'Genezio - Software Engineer, Open Source Passionate',
    content:
      'Andreia joined Genezio, bringing along a lot of enthusiasm and passion for open-source software development. Since then, she has been involved in developing major features on the main product and helped grow the ecosystem around it by writing tutorials and examples for newcomers. ' +
      '<br/><br/>' +
      'Before joining Genezio, Andreia worked in academia, contributing to and improving the usability of open-source security tools.',
    photo: AndreiaIrinaOcanoaiaPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/andreia-irina-ocanoaia/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://genezio.com',
    time: '14:45',
    title: 'Using Unikernels to deploy real-world apps',
    duration: '30 min',
  },
  {
    id: '22',
    name: 'Andrei Petrescu',
    position: 'DevOps Department Lead @ CloudHero',
    content:
      'Andrei Petrescu leads the DevOps Department at CloudHero and has experience with running Kubernetes in production for 7+ years. He has held workshops and presentations on various topics at Cloud Native Bucharest, Voxxed Days and CloudHero-organized events. He is a CKA and Professional Architect on AWS.',
    photo: AndreiPetrescuPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '15:30',
    title: 'Challenges of Migrating a High Traffic Mobile Game to Kubernetes',
    duration: '30 min',
  },
  {
    id: '23',
    name: 'Andrada Raducanu',
    position: 'DevOps Engineer @ ING Hubs Romania',
    content:
      'Andrada is a young DevOps engineer, located in Bucharest, Romania.' +
      "She's been with ING Hubs Romania for the past 4 years, working on various projects. The most notable is the Kingsroad: a set of Azure DevOps templates leveraging the power of Kubernetes.",
    photo: AndradaRaducanuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/andrada-raducanu-518122115',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://ing.ro/ithub ',
    time: '15:30',
    title: 'From Code to Cluster: Orchestrating 10,000+ Kubernetes deployments with 1 pipeline',
    duration: '30 min',
  },
  {
    id: '24',
    name: 'Iulian Taiatu',
    position: 'Adobe Software Engineer: Crafting Cloud Solutions',
    content:
      'Iulian is a motivated Computer Science student from the Faculty of Automatic Control and Computer Science, Bucharest. Currently employed in the EthosI&R team at Adobe, Tăiatu is involved in developing the infrastructure for tenants to deploy their applications on the cloud. Prior to this, he gained experience as a Software Engineer Intern at Adobe.' +
      "As a Research Mentor in Artificial Intelligence, he has been guiding students through their bachelor's theses. Additionally, his experience as a Teaching Assistant reflects his dedication to enhancing the learning experience for students." +
      'His research interests span NLP, CV, and FL. Tăiatu has made significant contributions to the field, with several research papers showcasing his expertise.' +
      "Iulian's commitment to excellence has been recognized through various awards, including his participation in the prestigious EEML Summer School organized by Deepmind and his performance in machine learning workshops and hackathons.",
    photo: IulianTaiatuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/iulian-taiatu/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '15:30',
    title: 'Histology Augmentation: Scaling Federated Learning Solutions with Kubernetes',
    duration: '30 min',
  },
  {
    id: '25',
    name: 'Alexandru Dejanu',
    position: 'Site Reliability Engineer at Systematic',
    content:
      'Jack of all trades master of None. Alexandru Dejanu is a SRE @ Systematic with a strong passion for cloud-native landscape. Opinionated and tech agnostic loves helping others and sharing knowledge be it on tech stages, or StackOverflow and Medium.',
    photo: AlexandruDejanuPhoto,
    twitterUrl: 'https://twitter.com/dejanualex',
    linkedInUrl: 'https://linkedin.com/in/dejanualex/',
    githubUrl: '',
    communityUrl: 'https://medium.com/@dejanualex',
    instagramUrl: '',
    websiteUrl: 'https://systematic.com/en-gb/',
    time: '16:35',
    title: "2024: I Don't Know K8S and at This Point, I'm Too Afraid To Ask",
    duration: '30 min',
  },
  {
    id: '26',
    name: 'Alex Raiu',
    position: 'Enterprise tooling administrator at Adobe and open source enthusiast',
    content: '',
    photo: AlexRaiuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/raiu-alexandru-andrei-99b64748/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:20',
    title: 'Lightning: Github Actions on Kubernetes',
    duration: '5 min',
  },
  {
    id: '27',
    name: 'Carmen Bobei',
    position: 'DevOps Engineer @ING Hubs',
    content:
      "I'm Carmen Bobei , DevOps Engineer @ ING Hubs. I am a Certified Kubernetes Administrator, working with kubernetes for the past 5 years. I believe that every challenge is an adventure and I do love a good adventure.",
    photo: CarmenBobeiPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/carmen-elena-bobei-4905b627/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:25',
    title: 'Lightning: Kubernetes: A journey from Deckhand to Captain by passing CKA',
    duration: '5 min',
  },
  {
    id: '28',
    name: 'Yujin Kim',
    position: 'Software Engineer, consider it GmbH',
    content:
      'Yujin is a software engineer. She focuses on Kubernetes and infrastructure and has a keen interest in cloud-native solutions.',
    photo: YujinKimPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/linkedin.com/in/yjink/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://consider-it.de/cloud/',
    time: '16:30',
    title: 'Lightning: Securing the Cluster: Navigating Kubernetes Backup and Recovery',
    duration: '5 min',
  },
  {
    id: '29',
    name: 'Radu Zamfir',
    position: 'Junior Full Stack Engineer at dvloper.io',
    content: '',
    photo: RaduZamfirPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/zsradu/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://dvloper.io',
    time: '16:35',
    title: 'Lightning Talk: Forester - KubeCon Hackathon Winner',
    duration: '5 min',
  },
  {
    id: '30',
    name: 'Andrei Cioc',
    position: 'Junior Software Engineer at dvloper.io',
    content: '',
    photo: AndreiCiocPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://dvloper.io',
    time: '16:35',
    title: 'Lightning Talk: Forester - KubeCon Hackathon Winner',
    duration: '5 min',
  },
  {
    id: '31',
    name: 'George Tudurean',
    position: 'Junior Software Developer at dvloper.io',
    content: '',
    photo: GeorgeTudureanPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://dvloper.io',
    time: '16:35',
    title: 'Lightning Talk: Forester - KubeCon Hackathon Winner',
    duration: '5 min',
  },
];

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
          {ITEMS.map(({ name, photo, position }, index) => (
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
              <span className="mt-1.5 text-primary-1">{position}</span>
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
