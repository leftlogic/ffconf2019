import config from '../../config';

const { phase } = config.config;

const Giulia = () => {
  let x = '';

  switch (phase) {
    case 0:
      x = 'zero';
      break;
    case 0.5:
      x = 'half';
      break;
    case 1:
      x = 'one';
      break;
    case 2:
      x = 'two';
      break;
    case 3:
      x = 'three';
      break;
    case 4:
      x = 'four';
      break;
    default:
      x = 'default';
  }

  return (
    <div>
      {x} {phase}
    </div>
  );
};

export default Giulia;
