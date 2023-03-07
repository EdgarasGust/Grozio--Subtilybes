export interface Procedure {
  procedures: string;
  details: {
    procedure: string;
    cost: string;
    time: string;
    note?: string;
    discount?: string;
  }[];
}

export const costs = [
  {
    procedures: 'Ilgalaikis Makiažas',
    details: [
      {
        procedure: 'Antakiai',
        cost: '130€',
        time: '3 val',
        discount: '80€',
        note: '( ombre, šešėliavimas, pilnas tušavimas )',
      },
      {
        procedure: 'Akių viršutinė linija',
        cost: '100€',
        time: '3 val',
        note: '( klasikinė, linija tarp blakstienų )',
      },
      {
        procedure: 'Akių apatinė linija',
        cost: '60€',
        time: '1.30 val',
      },
      { procedure: 'Antakių korekcija iki 3mėn', cost: '50€', time: '2 val' },
      { procedure: 'Antakių korekcija iki 6mėn', cost: '80€', time: '2 val' },
      {
        procedure: 'Antakių spalvos atnaujinimas po metų',
        cost: '100€',
        time: '3 val',
      },
      {
        procedure: 'Antakių korekcija iš kito meistro',
        cost: '130€',
        time: '3 val',
      },
    ],
  },
  {
    procedures: 'Blakstienų Priauginimas',
    details: [
      { procedure: 'Klasikinis', cost: '30€', time: '2 val' },
      { procedure: 'Klasikinis (papildymas)', cost: '25€', time: '1.30 val' },
      { procedure: 'Baby Lashes', cost: '35€', time: '2 val' },
      { procedure: 'Baby Lashes (papildymas)', cost: '30€', time: '1.30 val' },
      {
        procedure: 'Hibridinis (Mix klasika + volume)',
        cost: '35€',
        time: '2 val',
      },
      { procedure: 'Hibridinis (papildymas)', cost: '30€', time: '1.30 val' },
      { procedure: 'Volume', cost: '35€', time: '2 val' },
      { procedure: 'Volume (papildymas)', cost: '30€', time: '1.30 val' },
      { procedure: 'Mega Volume', cost: '40€', time: '2 val' },
      { procedure: '	Mega Volume (papildymas)', cost: '35€', time: '1.30 val' },
      { procedure: 'Kim Kardashian', cost: '40€', time: '2 val' },
      {
        procedure: 'Kim Kardashian (papildymas)',
        cost: '35€',
        time: '1.30 val',
      },
      { procedure: 'Wet Lashes', cost: '40€', time: '2 val' },
      { procedure: 'Wet Lashes (papildymas)', cost: '35€', time: '1.30 val' },
      {
        procedure: 'Blakstienų nuėmimas',
        cost: '10-15€',
        time: '30 min',
      },
      {
        procedure: '*Blakstienų korekcija atliekama kas 3-4 savaites',
        cost: '',
        time: '',
      },
    ],
  },
  {
    procedures: 'Blakstienų Dažymas',
    details: [{ procedure: 'Blakstienų dažymas', cost: '10€', time: '15 min' }],
  },
  {
    procedures: 'Blakstienų Laminavimas',
    details: [{ procedure: 'Laminavimas', cost: '30€', time: '1 val' }],
  },
  {
    procedures: 'Antakių Laminavimas',
    details: [{ procedure: 'Laminavimas', cost: '25€', time: '1 val' }],
  },
  {
    procedures: 'Antakių Dažymas/ Korekcija',
    details: [
      {
        procedure: 'Antakių dizainas Henna dažais',
        cost: '15€',
        time: '45 min',
        note: '(korekcija ir dažymas)',
      },
      {
        procedure: 'Antakių dizainas cheminiais dažais',
        cost: '15€',
        time: '30 min',
        note: '(korekcija ir dažymas)',
      },
      {
        procedure: 'Antakių dizainas Bronsun dažais',
        cost: '15€',
        time: '45 min',
        note: '(korekcija ir dažymas)',
      },
      {
        procedure: 'Antakių dažymas cheminiais dažais',
        cost: '10€',
        time: '15 min',
      },
      {
        procedure: 'Antakių korekcija',
        cost: '5€',
        time: '15 min',
        note: '(vašku/ pincetu)',
      },
    ],
  },
  {
    procedures: 'Depiliacija vašku (karštas, juostinis vaškas)',
    details: [
      {
        procedure: 'Antakiai/ viršutinė lūpa/ skruostai/ smakras',
        cost: '5€',
        time: '15 min',
        note: '1 zona',
      },
      {
        procedure: 'Veidas (pilnai)',
        cost: '15€',
        time: '30 min',
      },
      {
        procedure: 'Pažastys',
        cost: '10€',
        time: '20 min',
      },
      {
        procedure: 'Pilvas',
        cost: '12€',
        time: '30 min',
      },
      {
        procedure: 'Rankos (pilnai)',
        cost: '15€',
        time: '30 min',
      },
      {
        procedure: 'Kojos (blauzdos/ šlaunys)',
        cost: '20€',
        time: '30 min',
        note: '1 zona',
      },
      {
        procedure: 'Kojos pilnai',
        cost: '25€',
        time: '45 min',
      },
      {
        procedure: 'Bikini (higieninis)',
        cost: '15€',
        time: '30 min',
      },
      {
        procedure: 'Bikini pilnas',
        cost: '30€',
        time: '1 val',
      },
    ],
  },
];
