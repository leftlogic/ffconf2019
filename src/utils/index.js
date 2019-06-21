import moment from 'moment';

import config from '../config';

const idify = (s = '') => {
  return s
    .replace(/&.*?;/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .toLowerCase();
};

const formatTalksById = api => {
  const [first] = api;
  const { order } = first;
  const isItOrdered = order !== 0 ? true : false;

  return api.reduce((acc, talk, index) => {
    const { order } = talk;
    const key = isItOrdered ? order : index + 1;
    acc[key] = { ...talk };

    return acc;
  }, {});
};

const formatSessions = ({ data, api }) => {
  const [date1, date2] = config.dates;
  const startTime = moment(`${date1} ${config.startTime}`);

  if (api.length < 8) {
    // push in the missing talks and randomise
    // FIXME this is actually hard coded
    api.splice(2, 0, {});
    api.splice(5, 0, {});
  }

  const talksById = formatTalksById(api);

  const properData = data.map(session => {
    const { id, duration, isBreak, title, slug = idify(title) } = session;

    const start = startTime.format('HH:mm');
    startTime.add(duration, 'minutes');
    const end = startTime.format('HH:mm');

    const newSession = {
      ...session,
      start,
      end,
      date1: `${date1}T${start}Z`,
      date2: `${date2}T${start}Z`,
      talk: id ? { ...talksById[id] } : undefined,
      slug: isBreak ? slug : undefined,
    };

    return newSession;
  });

  return properData;
};

export { idify, formatSessions };
