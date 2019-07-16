import classnames from 'classnames';
import moment from 'moment';

import Button from '../button';

import config from '../../config';

const { ticketUrl, onSaleDate } = config;
const { phase, soldout } = config.config;

const Tickets = ({ className, namespace }) => {
  const formattedDate = moment(onSaleDate).format('D MMMM');
  let buy = false;
  let buttonText = '';

  if (phase < 1) {
    buttonText = `On sale ${formattedDate}`;
  } else if (phase >= 1 && phase <= 3) {
    if (soldout.conference) {
      buttonText = 'Sold Out';
    } else {
      buy = true;
      buttonText = 'Buy Tickets Now';
    }
  }

  if (!buttonText) {
    return null;
  }

  const buttonClasses = classnames({
    tickets: true,
    'tickets--enabled': buy,
    'tickets--disabled': !buy,
    [namespace]: namespace,
    [`${namespace}--enabled`]: namespace && buy,
    [`${namespace}--disabled`]: namespace && !buy,
    [className]: !!className,
  });

  if (buy) {
    return (
      <Button href={ticketUrl} className={buttonClasses}>
        {buttonText}
      </Button>
    );
  }

  return <Button className={buttonClasses}>{buttonText}</Button>;
};

export default Tickets;
