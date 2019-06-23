import { storiesOf } from '@storybook/react';
import Talk from './talk';

import './sessions.scss';

const props = {
  talk: {
    title: "Mentoring: Being the help you wish you'd had",
    description:
      'The tech industry is suffering; from bad role models and unrealistic expectations, from anxiety and impostor syndrome and from a lack of diversity, empathy and ethical consideration.   Everyone, no matter how junior, can mentor and be a hero for someone else, for the industry and for yourself.',
    speaker: {
      name: 'Jo Franchetti',
      photo: '/images/speakers/jof.jpg',
      twitter: 'ThisIsJoFrank',
      bio:
        "After studying (and hating) electronic engineering, I thought I'd teach myself HTML/CSS as a better fit for my love of tech+creativity. I wrote some terrible portfolio sites, applied for 50 million jobs and eventually one let me start my career! ",
    },
    slug: 'mentoring',
  },
  start: '',
  end: '',
  date1: '',
  date2: '',
};

storiesOf('Talk', module).add('xxx', () => <Talk {...props} />);
