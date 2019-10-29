module.exports = {
  themeColor: '#cb4d4d',
  version: require('../package.json').version,
  id: 'ffconf-2019',
  dates: ['2019-11-08'],
  onSaleDate: '2019-07-16 10:00:00', // need the time as well
  startTime: '09:00',
  ticketPrice: '200',
  workshopPrice: '449',
  year: 2019,
  analytics: 'UA-1656750-37',
  ticketUrl: 'https://buytickets.at/ffconf2019/212465',
  videos: '',
  sponsorUrl: 'mailto:events@leftlogic.com?subject=Request sponsorship pack',
  sponsorAvailable: true,
  fontMd5: '41365f285ed9977656499daaf24381e2',
  serviceWorker: false,
  config: {
    phase: 3,
    soldout: {
      conference: true,
      workshops: false,
      next: false,
    },
    comments: {
      'phase-options': {
        '0': 'before selling any ticket',
        '0.5': 'release of topics before selling tickets',
        '1': 'first batch of tickets',
        '2': 'second batch of tickets',
        '3': 'release of the full sessions',
        '4': 'after the conference',
      },
    },
  },
};
