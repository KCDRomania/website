import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

import './speakers.css';
import SPEAKERS from '../../speakers/speakers/speakers_config';

const TITLE = 'Speakers';
const Speakers = () => (
  <section className="safe-paddings relative bg-white  2xl:pb-20 md:pb-20 sm:pb-20">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>
      <br />
      <div className="w-full ">
        <RenderSpeaker />
      </div>
    </div>
  </section>
);

const RenderSpeaker = () => {
  const [speakerData, setSpeakerData] = useState([]);

  const mapSpeakerLinks = (speaker) => {
    const speakersLinks = [];
    [
      'twitterUrl',
      'linkedInUrl',
      'githubUrl',
      'websiteUrl',
      'instagramUrl',
      'communityUrl',
    ].forEach((link) => {
      if (speaker[link]) {
        speakersLinks.push({
          url: speaker[link],
        });
      }
    });
    return speakersLinks;
  };

  const shuffleSpeaker = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    const shuffledSpeakers = array;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [shuffledSpeakers[currentIndex], shuffledSpeakers[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return shuffledSpeakers;
  };

  useEffect(() => {
    const canFlipSpeaker = (speaker) => mapSpeakerLinks(speaker).length > 0;

    if (SPEAKERS && SPEAKERS.length > 0) {
      const speakersWithFlipState = SPEAKERS.map((speaker) => ({
        ...speaker,
        isFlipped: false,
        canFlip: canFlipSpeaker(speaker),
      }));
      const shuffledSpeaker = shuffleSpeaker(speakersWithFlipState);
      setSpeakerData(shuffledSpeaker);
    } else {
      setSpeakerData([]);
    }
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {speakerData.length === 0 ? (
        <div className="flex items-center justify-center" style={{ height: '90px', width: '100%' }}>
          <p className="text-lg leading-normal text-primary-1" style={{ marginTop: '7vh' }}>
            Coming soon...
          </p>
        </div>
      ) : (
        <div
          className="scrollbar-hide flex flex-row flex-wrap justify-around overflow-auto"
          style={{ height: 'fit-content' }}
        >
          {speakerData.map((speaker) => (
            <div className="flex flex-col p-4" key={speaker.id}>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front rounded-md">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full cursor-pointer rounded-lg object-cover"
                    />
                  </div>
                  <div
                    className="card-back flex flex-col justify-between rounded-lg"
                    style={{ borderBottom: 'solid 3px #5f6ab5' }}
                  >
                    <div>
                      {mapSpeakerLinks(speaker)
                        .slice(0, 5)
                        .map((link, index) => (
                          <i key={index} href={link.url} target="_blank">
                            <SocialIcon
                              url={link.url}
                              bgColor="transparent"
                              fgColor="#262f59"
                              style={{ size: '30px' }}
                            />
                          </i>
                        ))}
                    </div>
                    <div style={{ width: '100%', marginBottom: '10px' }}>
                      <span className="font-semibold">{speaker.position}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex  items-center justify-center font-bold"
                style={{ width: '190px', height: '30px' }}
              >
                <span className="flex truncate text-sm">{speaker.name}</span>
              </div>
              <div
                className="flex  items-center justify-center "
                style={{ width: '190px', height: '35px', marginTop: '-10px' }}
              >
                <span className="truncate  text-xs italic">{speaker.position}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Speakers;
