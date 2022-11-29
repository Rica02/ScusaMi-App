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
          remove: [
            { name: 'Prosciutto' },
            { name: 'Burrata cheese' },
            { name: 'Casalinga bread' },
          ],
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
          remove: [{ name: 'Roquette' }, { name: 'Aioli' }],
          add: [{ name: 'Gluten free (grilled calamari)', price: 5 }],
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
          remove: [{ name: 'Parsley' }, { name: 'Casalinga Bread' }],
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
          remove: [{ name: 'Basil' }, { name: 'Fior di latte' }],
          add: [
            { name: 'Gluten free base', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Fior di latte', price: 2 },
            { name: 'Olives', price: 2 },
            { name: 'Salami', price: 2 },
            { name: 'Ham', price: 2 },
            { name: 'Pineapple', price: 2 },
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
            { name: 'Prosciutto' },
            { name: 'Buffalo mozzarella' },
            { name: 'Basil' },
            { name: 'Roquette' },
            { name: 'Parmigiano' },
          ],
          add: [
            { name: 'Gluten free base', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Prosciutto', price: 2 },
            { name: 'Buffalo mozzarella', price: 2 },
            { name: 'Olives', price: 2 },
            { name: 'Salami', price: 2 },
            { name: 'Ham', price: 2 },
            { name: 'Pineapple', price: 2 },
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
            { name: 'Buffalo mozzarella' },
            { name: 'Gorgonzola' },
            { name: 'Smoked scamorza' },
            { name: 'Grana padano' },
          ],
          add: [
            { name: 'Gluten free base', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Olives', price: 2 },
            { name: 'Salami', price: 2 },
            { name: 'Ham', price: 2 },
            { name: 'Pineapple', price: 2 },
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
            { name: 'Mussels' },
            { name: 'Calamari' },
            { name: 'Prawns' },
            { name: 'Clams' },
            { name: 'Chilli' },
            { name: 'Garlic' },
            { name: 'Fior di latte' },
          ],
          add: [
            { name: 'Gluten free base', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Fior di latte', price: 2 },
            { name: 'Olives', price: 2 },
            { name: 'Salami', price: 2 },
            { name: 'Ham', price: 2 },
            { name: 'Pineapple', price: 2 },
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
            { name: 'Porcini mushrooms' },
            { name: 'Pork & fennel sausage' },
            { name: 'Pomodoro sugo' },
            { name: 'Smoked scamorza' },
          ],
          add: [
            { name: 'Gluten free pasta (spaghetti only)', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Parmigiano', price: 0 },
            { name: 'Smoked scamorza', price: 2 },
            { name: 'Porcini mushrooms', price: 2 },
            { name: 'Pork & fennel sausage', price: 2 },
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
            { name: 'Squid ink spaghetti (replace with regular spaghetti)' },
            { name: 'Fresh crab meat' },
            { name: 'Cherry tomatoes' },
            { name: 'Garlic' },
            { name: 'Parsley' },
            { name: 'Lemon zest' },
          ],
          add: [
            { name: 'Gluten free pasta (spaghetti only)', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Parmigiano', price: 0 },
            { name: 'Fresh crab meat', price: 5 },
            { name: 'Cherry tomatoes', price: 2 },
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
          remove: [
            { name: 'Pomodoro sugo' },
            { name: 'Braised meatballs' },
            { name: 'Parmigiano' },
            { name: 'Basil' },
          ],
          add: [
            { name: 'Gluten free pasta (spaghetti only)', price: 5 },
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Parmigiano', price: 0 },
            { name: 'Braised meatballs', price: 5 },
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
          remove: [
            { name: 'Mediterranean herbs' },
            { name: 'Roasted potato' },
            { name: 'Italian slaw' },
          ],
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
            { name: 'Burrata cheese' },
            { name: 'Tomato' },
            { name: 'Olives' },
            { name: 'Croutons' },
            { name: 'Basil' },
            { name: 'Balsamic glaze' },
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
            { name: 'Roasted pumpkin' },
            { name: 'Beetroot' },
            { name: 'Spinach' },
            { name: 'Kale' },
            { name: 'Quinoa' },
            { name: 'Pomegranate' },
            { name: 'Bocconcini' },
          ],
          add: [
            { name: 'Vegan/lactose free cheese', price: 5 },
            { name: 'Prawns', price: 9 },
            { name: 'Chicken', price: 7 },
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
        image: 'https://i.imgur.com/VlWaDVa.png',
        description:
          'Kids pasta and sugo (vegetarian) OR beef bolognese (shown in picture).',
        price: 15,
      },
      {
        name: 'Piccola Pizza',
        image: '',
        description: 'Margherita (vegetarian) OR Dolce Salato.',
        price: 15,
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
          remove: [{ name: 'Sugar' }, { name: 'Nutella' }],
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
    lunch: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM'],
    dinner: [
      '5:00 PM',
      '5:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
      '8:00 PM',
      '8:30 PM',
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

export const ORDERS = [
  {
    mode: 1,
    statusActive: true,
    dateTime: 'Wednesday, 23 Novemeber at 2:19 pm',
    table: 2,
    items: [
      {
        num: 1,
        item: {
          name: 'Margherita',
          price: 24,
          totalPrice: 29,
          modifiers: {
            remove: [
              { name: 'Basil', isChecked: true },
              { name: 'Fior di latte', isChecked: false },
            ],
            add: [
              { name: 'Gluten free base', price: 5, isChecked: true },
              {
                name: 'Vegan/lactose free cheese',
                price: 5,
                isChecked: false,
              },
              { name: 'Fior di latte', price: 2, isChecked: false },
              { name: 'Olives', price: 2, isChecked: false },
              { name: 'Salami', price: 2, isChecked: false },
              { name: 'Ham', price: 2, isChecked: false },
              { name: 'Pineapple', price: 2, isChecked: false },
            ],
          },
        },
      },
      {
        num: 2,
        item: {
          name: 'Prosciutto Crudo',
          price: 32,
          totalPrice: 32,
          modifiers: {
            remove: [
              { name: 'Prosciutto', isChecked: false },
              { name: 'Buffalo mozzarella', isChecked: false },
              { name: 'Basil', isChecked: false },
              { name: 'Roquette', isChecked: false },
              { name: 'Parmigiano', isChecked: true },
            ],
            add: [
              {
                name: 'Gluten free base',
                price: 5,
                isChecked: false,
              },
              {
                name: 'Vegan/lactose free cheese',
                price: 5,
                isChecked: false,
              },
              { name: 'Prosciutto', price: 2, isChecked: false },
              {
                name: 'Buffalo mozzarella',
                price: 2,
                isChecked: false,
              },
              { name: 'Olives', price: 2, isChecked: false },
              { name: 'Salami', price: 2, isChecked: false },
              { name: 'Ham', price: 2, isChecked: false },
              { name: 'Pineapple', price: 2, isChecked: false },
            ],
          },
          notes:
            'We have a nut allergy so could you please make sure there are no nuts in any of the dishes? Thank you',
        },
      },
    ],
  },
  {
    mode: 2,
    statusActive: true,
    dateTime: 'Wednesday, 23 Novemeber at 3:05 pm',
    pickup: 'Today',
    items: [
      {
        num: 1,
        item: {
          name: 'Burrata Caprese',
          price: 18,
          totalPrice: 18,
          modifiers: {
            remove: [
              { name: 'Burrata cheese', isChecked: false },
              { name: 'Tomato', isChecked: false },
              { name: 'Olives', isChecked: false },
              { name: 'Croutons', isChecked: false },
              { name: 'Basil', isChecked: true },
              { name: 'Balsamic glaze', isChecked: false },
            ],
          },
        },
      },
      {
        num: 2,
        item: {
          name: 'Insalata Scusa Mi!',
          price: 19,
          totalPrice: 19,
          modifiers: {
            remove: [
              { name: 'Roasted pumpkin', isChecked: false },
              { name: 'Beetroot', isChecked: false },
              { name: 'Spinach', isChecked: false },
              { name: 'Kale', isChecked: false },
              { name: 'Quinoa', isChecked: false },
              { name: 'Pomegranate', isChecked: false },
              { name: 'Bocconcini', isChecked: false },
            ],
            add: [
              {
                name: 'Vegan/lactose free cheese',
                price: 5,
                isChecked: false,
              },
              { name: 'Prawns', price: 9, isChecked: false },
              { name: 'Chicken', price: 7, isChecked: false },
            ],
          },
        },
      },
    ],
  },
];
