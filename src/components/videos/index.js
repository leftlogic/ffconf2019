import Button from '../button';

import config from '../../config';

const { videos } = config;
const { phase } = config.config;

const Videos = ({ className }) => {
  if (phase < 4) {
    return null;
  }

  return (
    <Button href={videos} className={className}>
      Watch Now
    </Button>
  );
};

export default Videos;
