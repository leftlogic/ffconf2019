import { storiesOf } from '@storybook/react';

import Talk, { __RewireAPI__ as RewireTalk } from './talk';
import Break, { __RewireAPI__ as RewireBreak } from './break';

import '../../css/index.scss';
import './sessions.scss';
import '../section/section.scss';

const WrapperTalk = ({ phase }) => {
  RewireTalk.__set__('phase', phase);
  return <Talk {...sessionTalk} />;
};

const WrapperBreak = ({ phase }) => {
  RewireBreak.__set__('phase', phase);
  return <Break {...sessionBreak} />;
};

const sessionBreak = {
  date: '2019-11-08T09:40Z',
  duration: 10,
  end: '09:50',
  isBreak: true,
  slug: 'opening-remarks',
  start: '09:40',
  title: 'Opening remarks',
};

const sessionTalk = {
  talk: {
    description: `The tech industry is suffering; from bad role models and unrealistic expectations, from anxiety and impostor syndrome and from a lack of diversity, empathy and ethical consideration.   Everyone, no matter how junior, can mentor and be a hero for someone else, for the industry and for yourself.   
    
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officia voluptatum illum ex sed dolorum. Facilis tempora dicta earum nesciunt.`,
    order: 1,
    slug: 'mentoring',
    speaker: {
      bio:
        "After studying (and hating) electronic engineering, I thought I'd teach myself HTML/CSS as a better fit for my love of tech+creativity. I wrote some terrible portfolio sites, applied for 50 million jobs and eventually one let me start my career! ",
      name: 'Jo Franchetti',
      photo: '/images/speakers/jof.jpg',
      twitter: 'ThisIsJoFrank',
    },
    title: "Mentoring: Being the help you wish you'd had",
    slides: 'xxx',
    audio: 'xxx',
    video: 'xxx',
  },
  date: '2019-11-08T09:50Z',
  duration: 40,
  end: '10:30',
  id: 1,
  start: '09:50',
};

const stories = storiesOf('Session', module);

stories.add('default', () => (
  <div className="section">
    <ol className="sessions">
      <WrapperBreak phase={0.5} />
      <WrapperTalk phase={0.5} />
      <WrapperBreak phase={1} />
      <WrapperTalk phase={1} />
      <WrapperBreak phase={3} />
      <WrapperTalk phase={3} />
      <WrapperBreak phase={4} />
      <WrapperTalk phase={4} />
    </ol>
  </div>
));
