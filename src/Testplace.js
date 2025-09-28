/*


export const memberData = [
  {
    id: 1,
    title: 'Hugo Lloris',
    image: '/images/user1.png',
    admin: false,
    phone: '+1 234 567 890',
    email: 'hugolloris@gmail.com',
    age: 25,
    gender: 'Male',
    blood: '#TWT5015100365',
    totalAppointments: 5,
    date: '20 Aug 2021',
    orders: [
      {
        id: 101,
        name: 'Wireless Earbuds',
        measure: 'Pair',
        stock: 380,
        price: 120,
        status: 'Delivered',
        instraction: 'Pair with Bluetooth',
        orderId: 2023051501,
        customerName: 'Hugo Lloris',
        quantity: 1,
        totalPrice: 120,
        orderDate: '2023-05-12'
      }
    ]
  },
  {
    id: 2,
    title: 'Harry Kane',
    image: '/images/user2.png',
    admin: true,
    phone: '+1 345 678 901',
    email: 'harrykane@gmail.com',
    age: 30,
    gender: 'Male',
    blood: '#TWT5015100366',
    totalAppointments: 15,
    date: '15 Jan 2022',
    orders: [
      {
        id: 102,
        name: 'Fitness Tracker',
        measure: 'Each',
        stock: 200,
        price: 80,
        status: 'Processing',
        instraction: 'Charge before use',
        orderId: 2024010305,
        customerName: 'Harry Kane',
        quantity: 2,
        totalPrice: 160,
        orderDate: '2024-01-01'
      },
      {
        id: 103,
        name: 'Running Shoes',
        measure: 'Pair',
        stock: 85,
        price: 150,
        status: 'Shipped',
        instraction: 'Wear for running',
        orderId: 2023112809,
        customerName: 'Harry Kane',
        quantity: 1,
        totalPrice: 150,
        orderDate: '2023-11-25'
      }
    ]
  },
  {
    id: 3,
    title: 'Son Heung-min',
    image: '/images/user3.png',
    admin: false,
    phone: '+1 456 789 012',
    email: 'sonheungmin@gmail.com',
    age: 28,
    gender: 'Male',
    blood: '#TWT5015100367',
    totalAppointments: 25,
    date: '10 Mar 2022',
    orders: [] // No orders for this member
  },
  {
    id: 4,
    title: 'Cristiano Ronaldo',
    image: '/images/user4.png',
    admin: false,
    phone: '+1 567 890 123',
    email: 'cristianoronaldo@gmail.com',
    age: 35,
    gender: 'Male',
    blood: '#TWT5015100368',
    totalAppointments: 35,
    date: '25 May 2022',
    orders: [
      {
        id: 104,
        name: 'Smartwatch',
        measure: 'Each',
        stock: 120,
        price: 250,
        status: 'Cancelled',
        instraction: 'Connect to phone',
        orderId: 2023081902,
        customerName: 'Cristiano Ronaldo',
        quantity: 1,
        totalPrice: 250,
        orderDate: '2023-08-17'
      }
    ]
  },
  {
    id: 5,
    title: 'Lionel Messi',
    image: '/images/user5.png',
    admin: false,
    phone: '+1 678 901 234',
    email: 'lionelmessi@gmail.com',
    age: 33,
    gender: 'Male',
    blood: '#TWT5015100369',
    totalAppointments: 45,
    date: '12 Dec 2022',
    orders: [
      {
        id: 105,
        name: 'Wireless Headphones',
        measure: 'Pair',
        stock: 50,
        price: 300,
        status: 'Delivered',
        instraction: 'Charge before use',
        orderId: 2022032211,
        customerName: 'Lionel Messi',
        quantity: 1,
        totalPrice: 300,
        orderDate: '2022-03-20'
      },
     
    ]
  }
];


  */


// invoice data the before data

/*

export const invoicesData = [
  {
    id: 206719,
    to: memberData[5],
    total: 6070,
    createdDate: '12/06/2021',
    dueDate: '16/06/2021',
    
    items: [
      {
        id: 1,
        name: servicesData[0].name,
        price: 500,
        description: '',
      },
      {
        id: 2,
        name: servicesData[1].name,
        price: 300,
        description: '',
      },
      {
        id: 3,
        name: medicineData[2].name,
        price: 260,
        description: '',
      },
      {
        id: 4,
        name: medicineData[0].name,
        price: 190000,
        description: '',
      },
      {
        id: 5,
        name: servicesData[4].name,
        price: 15000,
        description: '',
      },
    ],
  },
  {
    id: 198772,
    to: memberData[6],
    total: 5000,
    createdDate: '10/02/2023',
    dueDate: '14/02/2023',
    items: [
      {
        id: 1,
        name: servicesData[3].name,
        price: 190000,
        description: '',
      },
      {
        id: 2,
        name: medicineData[4].name,
        price: 15000,
        description: '',
      },
      {
        id: 3,
        name: servicesData[8].name,
        price: 20000,
        description: '',
      },
      {
        id: 4,
        name: medicineData[3].name,
        price: 190000,
        description: '',
      },
    ],
  },
  {
    id: 456789,
    to: memberData[7],
    total: 10000,
    createdDate: '09/01/2023',
    dueDate: '13/01/2023',
    items: [
      {
        id: 1,
        name: servicesData[5].name,
        price: 5000,
        description: '',
      },
      {
        id: 2,
        name: medicineData[6].name,
        price: 16000,
        description: '',
      },
      {
        id: 3,
        name: medicineData[7].name,
        price: 10000,
        description: '',
      },
      {
        id: 4,
        name: medicineData[2].name,
        price: 20000,
        description: '',
      },
    ],
  },
  {
    id: 876543,
    to: memberData[4],
    total: 19000,
    createdDate: '08/01/2023',
    dueDate: '12/01/2023',
    items: [
      {
        id: 1,
        name: medicineData[5].name,
        price: 5000,
        description: '',
      },
      {
        id: 2,
        name: servicesData[6].name,
        price: 16000,
        description: '',
      },
      {
        id: 3,
        name: servicesData[7].name,
        price: 10000,
        description: '',
      },
      {
        id: 4,
        name: medicineData[1].name,
        price: 20000,
        description: '',
      },
      {
        id: 5,
        name: servicesData[3].name,
        price: 190000,
        description: '',
      },
      {
        id: 6,
        name: servicesData[4].name,
        price: 15000,
        description: '',
      },
    ],
  },
];



*/