import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

const TITLE = 'Call for Proposal';
const DESCRIPTION =
  "If you are an expert or newcomer in the cloud native computing world and would like to share your knowledge and experience with the community, we encourage you to submit a proposal. Our committee is looking for diverse topics and speakers, so don't hesitate to submit your ideas. We can't wait to see what the community offers, and we look forward to receiving your submissions.";

const Proposal = () => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 py-20">
    <div className="container-md text-center text-primary-1">
      <div className="absolute left-1/2 top-0 h-[529px] w-[529px] -translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative">
        <h2 className="text-6xl font-bold leading-tight" id={LINKS.proposal.id}>
          {TITLE}
        </h2>
        <p className="mt-8 text-2xl leading-normal sm:text-lg">{DESCRIPTION}</p>
        <Button
          className="mt-10"
          to="https://kcd.smapply.io/prog/kcd_zurich_2024/"
          theme="primary"
          size="lg"
          target="_blank"
        >
          Call for Proposal
        </Button>
      </div>
    </div>
  </section>
);

export default Proposal;
