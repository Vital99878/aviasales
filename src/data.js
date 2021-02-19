export const response_test = [
  {
    tickets: [
      {
        price: 101000,
        carrier: 'TG', // Код авиакомпании перевозчика
        segments: [
          // 1 туда, 2 обратно
          {
            origin: 'MOW', // from
            destination: 'HKT', // to
            date: '2021-02-24T02:14:00.000Z',
            stops: ['IST', 'BKK'],
            duration: 952, // minutes
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T00:43:00.000Z',
            stops: [],
            duration: 1870,
          },
        ],
      },
      {
        price: 99000,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-23T23:01:00.000Z',
            stops: [],
            duration: 1154,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T10:26:00.000Z',
            stops: ['SHA', 'SIN', 'HKG'],
            duration: 898,
          },
        ],
      },
      {
        price: 30453,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T13:40:00.000Z',
            stops: [],
            duration: 1786,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T04:56:00.000Z',
            stops: [],
            duration: 973,
          },
        ],
      },
      {
        price: 87337,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T14:26:00.000Z',
            stops: ['KUL', 'SIN', 'IST'],
            duration: 794,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T00:16:00.000Z',
            stops: ['DXB'],
            duration: 805,
          },
        ],
      },
      {
        price: 42412,
        carrier: 'EY',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T07:00:00.000Z',
            stops: ['KUL', 'SHA'],
            duration: 1737,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-15T22:39:00.000Z',
            stops: ['KUL', 'AUH'],
            duration: 1222,
          },
        ],
      },
      {
        price: 87349,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T02:17:00.000Z',
            stops: ['KUL'],
            duration: 1112,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T07:56:00.000Z',
            stops: ['BKK', 'AUH'],
            duration: 1793,
          },
        ],
      },
      {
        price: 17042,
        carrier: 'SU',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T13:24:00.000Z',
            stops: ['HKG', 'KUL'],
            duration: 897,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T14:16:00.000Z',
            stops: [],
            duration: 1715,
          },
        ],
      },
      {
        price: 20307,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T08:33:00.000Z',
            stops: ['BKK', 'KUL'],
            duration: 1084,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T05:01:00.000Z',
            stops: [],
            duration: 1275,
          },
        ],
      },
      {
        price: 68722,
        carrier: 'SU',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T15:10:00.000Z',
            stops: [],
            duration: 662,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T11:44:00.000Z',
            stops: ['HKG', 'AUH', 'SIN'],
            duration: 1919,
          },
        ],
      },
      {
        price: 61184,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-02-24T06:40:00.000Z',
            stops: ['SHA', 'HKG', 'KUL'],
            duration: 873,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2021-03-16T08:26:00.000Z',
            stops: ['SIN'],
            duration: 1564,
          },
        ],
      },
    ],
    stop: false,
  },
];

export function rm_class(claz) {
  const item = document.querySelector(`.${claz}`);
  item.classList.remove(claz);
}
