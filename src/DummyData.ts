import { MENU_MODE } from './constants/AppConstants';

export const MENU = [
  {
    category: 'Specials',
    items: [
      {
        name: 'Gnocchi alla Lamb Ragù',
        image: '',
        description:
          'Gnocchi tossed with slow braised lamb shoulder with a medley of vegetables in a rich red wine gravy.',
        price: 30.9,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
      {
        name: 'Grilled Gold Snapper',
        image: '',
        description:
          'Chargrilled snapper fillet served with garlic prawns and buttered broccolini, drizzled with a zesty lemon mustard glaze.',
        price: 35.9,
        nutriInfo: {
          'gluten free': 'y',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
      {
        name: 'Pizza Special',
        image: '',
        description:
          'Pumpkin purée base, pork belly, pork sausage, Stracciatella and pistachio paste.',
        price: 28.9,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
    ],
  },
  {
    category: 'Antipasti',
    items: [
      {
        name: 'Antipasto Misto',
        image: 'https://i.imgur.com/78lP6ah.jpg',
        description:
          'A share plate of Italian cured meats, olives, buffalo mozzarella, pickled vegetables & casalinga bread (2 people $32 / 6 people $59).',
        price: 32,
        price2: 59,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
      {
        name: 'Prosciutto e burrata',
        image: '',
        description:
          'San Daniele prosciutto served with fresh burrata cheese & casalinga bread.',
        price: 27,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Prosciutto', 'Burrata cheese', 'Casalinga bread'],
        },
      },
      {
        name: 'Calamari fritti',
        image: 'https://i.imgur.com/N0nUlAL.jpg',
        description: 'Lightly fried calamari with roquette & aioli.',
        price: 19.5,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Roquette', 'Aioli'],
          add: [{ addOnName: 'Gluten free (grilled calamari)', addOnPrice: 5 }],
        },
      },

      {
        name: 'Polpette al Sugo',
        image: 'https://i.imgur.com/FnSY92o.jpg',
        description: 'Aalted cod croquettes with garlic confit aioli.',
        price: 19,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Parsley', 'Casalinga Bread'],
        },
      },
    ],
  },
  {
    category: 'Pizza',
    items: [
      {
        name: 'Margherita',
        image: 'https://i.imgur.com/JmLzvBV.jpg',
        description: 'San Marzano sugo, basil & fior di latte.',
        price: 24,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'y',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Basil', 'Fior di latte'],
          add: [
            { addOnName: 'Gluten free base', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Fior di latte', addOnPrice: 2 },
            { addOnName: 'Olives', addOnPrice: 2 },
            { addOnName: 'Salami', addOnPrice: 2 },
            { addOnName: 'Ham', addOnPrice: 2 },
            { addOnName: 'Pineapple', addOnPrice: 2 },
          ],
        },
      },
      {
        name: 'Prosciutto Crudo',
        image: 'https://i.imgur.com/UXIHFgt.jpg',
        description:
          'San Marzano sugo, aged san daniele prosciutto, buffalo mozzarella, basil, roquette & parmigiano.',
        price: 32,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Prosciutto',
            'Buffalo mozzarella',
            'Basil',
            'Roquette',
            'Parmigiano',
          ],
          add: [
            { addOnName: 'Gluten free base', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Prosciutto', addOnPrice: 2 },
            { addOnName: 'Buffalo mozzarella', addOnPrice: 2 },
            { addOnName: 'Olives', addOnPrice: 2 },
            { addOnName: 'Salami', addOnPrice: 2 },
            { addOnName: 'Ham', addOnPrice: 2 },
            { addOnName: 'Pineapple', addOnPrice: 2 },
          ],
        },
      },
      {
        name: 'Quattro Formaggi',
        image: 'https://i.imgur.com/s0t0UtR.jpgg',
        description:
          'BIANCA - buffalo mozzarella, gorgonzola, smoked scamorza & grana padano.',
        price: 29,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'y',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Buffalo mozzarella',
            'Gorgonzola',
            'Smoked scamorza',
            'Grana padano',
          ],
          add: [
            { addOnName: 'Gluten free base', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Olives', addOnPrice: 2 },
            { addOnName: 'Salami', addOnPrice: 2 },
            { addOnName: 'Ham', addOnPrice: 2 },
            { addOnName: 'Pineapple', addOnPrice: 2 },
          ],
        },
      },
      {
        name: 'Scilla',
        image: 'https://i.imgur.com/LHPgD2R.jpg',
        description:
          'San Marzano sugo, sauté mussels, calamari, prawns, scallops, clams, chilli, garlic & fior di latte.',
        price: 34,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Mussels',
            'Calamari',
            'Prawns',
            'Clams',
            'Chilli',
            'Garlic',
            'Fior di latte',
          ],
          add: [
            { addOnName: 'Gluten free base', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Fior di latte', addOnPrice: 2 },
            { addOnName: 'Olives', addOnPrice: 2 },
            { addOnName: 'Salami', addOnPrice: 2 },
            { addOnName: 'Ham', addOnPrice: 2 },
            { addOnName: 'Pineapple', addOnPrice: 2 },
          ],
        },
      },
    ],
  },
  {
    category: 'Pasta & Risotti',
    items: [
      {
        name: 'Lasagne',
        image: 'https://i.imgur.com/wYtfaI7.jpg',
        description:
          'Pasta sheets, pomodoro sugo, beef bolognese, ham, egg & besciamella.',
        price: 27,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
      {
        name: 'Paccheri Vesuviana',
        image: 'https://i.imgur.com/xtTwZUz.png',
        description:
          'Large tube pasta with porcini mushrooms, pork & fennel sausage, pomodoro sugo & smoked scamorza.',
        price: 29,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Porcini mushrooms',
            'Pork & fennel sausage',
            'Pomodoro sugo',
            'Smoked scamorza',
          ],
          add: [
            { addOnName: 'Gluten free pasta (spaghetti only)', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Parmigiano', addOnPrice: 0 },
            { addOnName: 'Smoked scamorza', addOnPrice: 2 },
            { addOnName: 'Porcini mushrooms', addOnPrice: 2 },
            { addOnName: 'Pork & fennel sausage', addOnPrice: 2 },
          ],
        },
      },
      {
        name: 'Spaghetti al Granchio',
        image: 'https://i.imgur.com/g3CCSUp.jpg',
        description:
          'Squid ink spaghettini with fresh crab meat & cherry tomatoes in garlic, parsley, lemon zest & extra virgin olive oil.',
        price: 42,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Squid ink spaghetti (replace with regular spaghetti)',
            'Fresh crab meat',
            'Cherry tomatoes',
            'Garlic',
            'Parsley',
            'Lemon zest',
          ],
          add: [
            { addOnName: 'Gluten free pasta (spaghetti only)', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Parmigiano', addOnPrice: 0 },
            { addOnName: 'Fresh crab meat', addOnPrice: 5 },
            { addOnName: 'Cherry tomatoes', addOnPrice: 2 },
          ],
        },
      },
      {
        name: 'Casarecce Polpette',
        image: 'https://i.imgur.com/aa35zlw.jpg',
        description:
          'Short twists of pasta with pomodoro sugo, braised meatballs & parmigiano.',
        price: 29,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Pomodoro sugo', 'Braised meatballs', 'Parmigiano', 'Basil'],
          add: [
            { addOnName: 'Gluten free pasta (spaghetti only)', addOnPrice: 5 },
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Parmigiano', addOnPrice: 0 },
            { addOnName: 'Braised meatballs', addOnPrice: 5 },
          ],
        },
      },
    ],
  },
  {
    category: 'Secondi',
    items: [
      {
        name: 'Calamari Fritti',
        image: 'https://i.imgur.com/l5YY9jW.jpg',
        description:
          'Lightly fried calamari served with Italian slaw & herb fries.',
        price: 29,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Italian slaw', 'Herb fries', 'Aioli'],
        },
      },
      {
        name: 'Porchetta',
        image: 'https://i.imgur.com/WDM34Es.jpg',
        description:
          'Rolled pork belly in mediterranean herbs, slow roasted served with Italian slaw & roast potato.',
        price: 36,
        nutriInfo: {
          'gluten free': 'y',
          vegetarian: 'n',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Mediterranean herbs', 'Roasted potato', 'Italian slaw'],
        },
      },
    ],
  },
  {
    category: 'Contorni',
    items: [
      {
        name: 'Burrata Caprese',
        image: 'https://i.imgur.com/LvS0BaM.jpg',
        description:
          'Burrata cheese, truss tomato, ligurian olives, croutons & basil with balsamic glaze & extra virgin olive oil.',
        price: 18,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'y',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Burrata cheese',
            'Tomato',
            'Olives',
            'Croutons',
            'Basil',
            'Balsamic glaze',
          ],
        },
      },
      {
        name: 'Insalata Scusa Mi!',
        image: 'https://i.imgur.com/PP7dT1Z.jpg',
        description:
          'Roasted pumpkin & beetroot with spinach, kale, quinoa, pomegranate & bocconcini (prawns optional).',
        price: 19,
        nutriInfo: {
          'gluten free': 'y',
          vegetarian: 'y',
          takeaway: 'y',
        },
        modifiers: {
          remove: [
            'Roasted pumpkin',
            'Beetroot',
            'Spinach',
            'Kale',
            'Quinoa',
            'Pomegranate',
            'Bocconcini',
          ],
          add: [
            { addOnName: 'Vegan/lactose free cheese', addOnPrice: 5 },
            { addOnName: 'Prawns', addOnPrice: 9 },
            { addOnName: 'Chicken', addOnPrice: 7 },
          ],
        },
      },
    ],
  },
  {
    category: 'Bimbi',
    items: [
      {
        name: 'Pasta Piccola',
        image: '',
        description: 'Kids pasta and sugo (vegetarian) OR beef bolognese.',
        price: 15,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
      {
        name: 'Piccola Pizza',
        image: '',
        description: 'Margherita (vegetarian) OR Dolce Salato.',
        price: 15,
        nutriInfo: {
          'gluten free': 'w',
          vegetarian: 'n',
          takeaway: 'y',
        },
      },
    ],
  },
  {
    category: 'Dolci',
    items: [
      {
        name: 'Zeppoli',
        image: 'https://i.imgur.com/lClsdOI.jpg',
        description:
          'Italian doughnuts dusted in sugar & drizzled with nutella.',
        price: 16,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'y',
          takeaway: 'y',
        },
        modifiers: {
          remove: ['Sugar', 'Nutella', 'Parmigiano', 'Basil'],
        },
      },
      {
        name: 'Tiramisu',
        image: 'https://i.imgur.com/TS207MQ.jpg',
        description:
          'Italian trifle of coffee & liqueur soaked sponge biscuits, mascarpone & cream.',
        price: 14,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'y',
          takeaway: 'y',
        },
      },
      {
        name: 'Tre Gelati',
        image: 'https://i.imgur.com/AJ1vCgm.jpg',
        description: 'Three scoops of gelati - ask for the selection.',
        price: 12,
        nutriInfo: {
          'gluten free': 'n',
          vegetarian: 'y',
          takeaway: 'n',
        },
      },
    ],
  },
];

export const BOOKING = {
  times: {
    lunch: ['12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm'],
    dinner: [
      '5:00 pm',
      '5:30 pm',
      '6:00 pm',
      '6:30 pm',
      '7:00 pm',
      '7:30 pm',
      '8:00 pm',
      '8:30 pm',
    ],
  },
};

export const USER = {
  fName: 'Rica',
  lName: 'Beepboop',
  mobile: 123456789,
  email: 'email@email.com',
  company: '',
  password: '******',
};
