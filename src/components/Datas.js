import { HiOutlineHome, HiOutlineMail, HiOutlineUsers } from 'react-icons/hi';
import {
  TbCalendar,
  TbFile,
  TbFileInvoice,
  TbLockAccess,
  TbUsers,
} from 'react-icons/tb';
import { FaRegCalendarAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import {
  RiFileList3Line,
  RiLockPasswordLine,
  RiMedicineBottleLine,
  RiMoneyDollarCircleLine,
  RiStethoscopeLine,
  RiUserHeartLine,
  RiUserLine,
} from 'react-icons/ri';
import {
  MdListAlt,
  MdOutlineAttachMoney,
  MdOutlineCampaign,
  MdOutlineChat,
  MdOutlineInventory2,
  MdOutlineReviews,
  MdOutlineTextsms,
} from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiCalendar, BiUserPlus } from 'react-icons/bi';
import { FaRegMoneyBill1, FaTableList } from 'react-icons/fa6';

export const categoriesData = [
  {
    id: 1,
    name: 'Tops',
    desc: 'Tops for Women',
    slug: '/tops',
  },
  {
    id: 2,
    name: 'Bottoms',
    desc: 'Bottoms for Men',
    slug: '/bottoms',
  },
  {
    id: 3,
    name: 'Shirts',
    desc: 'Shirts for Women',
    slug: '/shirts',
  },
  {
    id: 4,
    name: 'Pants',
    desc: 'Pants for Men',
    slug: '/pants',
  },
  {
    id: 5,
    name: 'Dresses',
    desc: 'Dresses for Women',
    slug: '/dresses',
  },
  {
    id: 6,
    name: 'Jeans',
    desc: 'Jeans for Men',
    slug: '/jeans',
  },
  {
    id: 7,
    name: 'Jackets',
    desc: 'Jackets for Men',
    slug: '/jackets',
  },
  {
    id: 8,
    name: 'Sportswear',
    desc: 'Sportswear for Men',
    slug: '/sportswear',
  },
  {
    id: 9,
    name: 'Jumpsuits & Playsuits',
    desc: 'Jumpsuits & Playsuits',
    slug: '/jumpsuits',
  },
  {
    id: 10,
    name: 'Outerwear',
    desc: 'Outerwear for Men',
    slug: '/outerwear',
  },
];

export const productsImages = {
  girls: {
    one: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253399/ShopMaster%20Ecommerce%20Template/1a_qbb7lw.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253487/ShopMaster%20Ecommerce%20Template/1b_avfjak.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253488/ShopMaster%20Ecommerce%20Template/1c_ml1fgf.webp',
    ],
    two: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253488/ShopMaster%20Ecommerce%20Template/2a_sjkxhb.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253489/ShopMaster%20Ecommerce%20Template/2b_bbszyg.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253488/ShopMaster%20Ecommerce%20Template/2c_vqzk1b.webp',
    ],
    three: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253489/ShopMaster%20Ecommerce%20Template/3a_xlu6rc.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253489/ShopMaster%20Ecommerce%20Template/3b_c104tt.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253496/ShopMaster%20Ecommerce%20Template/3c_lnakdn.webp',
    ],
    four: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253489/ShopMaster%20Ecommerce%20Template/4a_ntbdpt.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253490/ShopMaster%20Ecommerce%20Template/4b_pnd5bt.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253496/ShopMaster%20Ecommerce%20Template/4c_yvpyzn.webp',
    ],
    five: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253494/ShopMaster%20Ecommerce%20Template/5c_zbh4nj.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253495/ShopMaster%20Ecommerce%20Template/5a_xv6ieq.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253496/ShopMaster%20Ecommerce%20Template/5b_hs6zlu.webp',
    ],
    six: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253496/ShopMaster%20Ecommerce%20Template/6b_ivhvwc.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253504/ShopMaster%20Ecommerce%20Template/6a_r0jyig.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713253498/ShopMaster%20Ecommerce%20Template/6c_o2qxqd.webp',
    ],
  },
  boys: {
    one: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254156/ShopMaster%20Ecommerce%20Template/11b_trhtqh.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254155/ShopMaster%20Ecommerce%20Template/11a_k46hoo.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254160/ShopMaster%20Ecommerce%20Template/11c_x0hguq.webp',
    ],
    two: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254160/ShopMaster%20Ecommerce%20Template/12a_lm89bj.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254164/ShopMaster%20Ecommerce%20Template/12c_nvxfnr.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254162/ShopMaster%20Ecommerce%20Template/12b_lmofep.webp',
    ],
    three: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254149/ShopMaster%20Ecommerce%20Template/10a_juc2jn.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254151/ShopMaster%20Ecommerce%20Template/10b_fyqpbf.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254153/ShopMaster%20Ecommerce%20Template/10c_cyigmi.webp',
    ],
    four: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254128/ShopMaster%20Ecommerce%20Template/7a_srr6qt.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254128/ShopMaster%20Ecommerce%20Template/7a_srr6qt.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254129/ShopMaster%20Ecommerce%20Template/7b_vh0zup.webp',
    ],
    five: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254140/ShopMaster%20Ecommerce%20Template/8a_ecdgqj.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254141/ShopMaster%20Ecommerce%20Template/8b_q8mftq.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254143/ShopMaster%20Ecommerce%20Template/8c_n79qo4.webp',
    ],
    six: [
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254144/ShopMaster%20Ecommerce%20Template/9a_ky9mxg.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254145/ShopMaster%20Ecommerce%20Template/9b_xqpquk.webp',
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713254150/ShopMaster%20Ecommerce%20Template/9c_fko7gy.webp',
    ],
  },
};
export const SellersData = [
  {
    id: 1,
    contacts: {
      name: 'Thierry Hermès',
      email: 'thierry@hermes.com',
      phone: '01712345678',
    },
    address: {
      address: 'Paris, France',
      country: 'France',
      zip: '62639',
    },
    logo: 'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258235/ShopMaster%20Ecommerce%20Template/sellers/heemesLogo_cvftpg.png',
    backgroundImage:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258223/ShopMaster%20Ecommerce%20Template/sellers/heemes_wgwaj8.jpg',
    location: 'Paris, France - Cast Road',
    companyName: 'Hermès',
    sales: '140K',
    revenue: '6700K',
    productsTotal: '23',
  },
  {
    id: 2,
    contacts: {
      name: 'Mario Prada',
      email: 'mario.prada@complex',
      phone: '09235579007',
    },
    address: {
      address: 'United States - Cast Road',
      country: 'United States',
      zip: '59681 - Cast Road',
    },
    logo: 'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258240/ShopMaster%20Ecommerce%20Template/sellers/prada_vt5dfv.png',
    backgroundImage:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258245/ShopMaster%20Ecommerce%20Template/sellers/prada_kpiy3b.jpg',
    location: 'United States, Califonia',
    companyName: 'Prada',
    sales: '200K',
    revenue: '1500K',
    productsTotal: '500',
  },
  {
    id: 3,
    contacts: {
      name: 'Adolf Dassler',
      email: 'adolf.dassler@gmail.com',
      phone: '0745672345',
    },
    address: {
      address: 'Herzogenaurach, Germany',
      country: 'German',
      zip: '97123 Germany',
    },
    logo: 'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258225/ShopMaster%20Ecommerce%20Template/sellers/adidas_aeed87.png',
    backgroundImage:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258224/ShopMaster%20Ecommerce%20Template/sellers/adidas_x4twoh.jpg',
    location: 'Herzogenaurach, Germany - Adidas',
    companyName: 'Adidas',
    sales: '300K',
    revenue: '140M',
    productsTotal: '76K',
  },
  {
    id: 4,
    contacts: {
      name: 'Phil Knight',
      email: 'phil.knight@gmail.com',
      phone: '0936128463',
    },
    address: {
      address: ' Eugene, Oregon, United States',
      country: 'United States',
      zip: '97123 California',
    },
    logo: 'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258236/ShopMaster%20Ecommerce%20Template/sellers/nice_efnmxr.png',
    backgroundImage:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258236/ShopMaster%20Ecommerce%20Template/sellers/nice_nbtpia.webp',
    location: 'Beaverton, Oregon, United States',
    companyName: 'Nike, Inc.',
    sales: '12M',
    revenue: '560M',
    productsTotal: '67M',
  },
  {
    id: 5,
    contacts: {
      name: 'Cristóbal Balenciaga',
      email: 'cristobal.balenciaga@com',
      phone: '0876555622',
    },
    address: {
      address: 'Donostia-San Sebastian, Spain',
      country: 'France',
      zip: '97123 Francisco',
    },
    logo: 'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258228/ShopMaster%20Ecommerce%20Template/sellers/balenciaga_nyxsnu.png',
    backgroundImage:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258231/ShopMaster%20Ecommerce%20Template/sellers/balenciaga_duafnc.jpg',
    location: 'Paris, France',
    companyName: 'Balenciaga SA',
    sales: '9M',
    revenue: '370K',
    productsTotal: '100',
  },
  {
    id: 6,
    contacts: {
      name: 'Christian Dior',
      email: 'christian.dior@gmail.com',
      phone: '0563737228',
    },
    address: {
      address: 'LVMH, Financière Agache',
      country: 'France',
      zip: '94642 Paris, France',
    },
    logo: 'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258230/ShopMaster%20Ecommerce%20Template/sellers/dior_thd9dl.png',
    backgroundImage:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1713258232/ShopMaster%20Ecommerce%20Template/sellers/dior_e2hpyf.webp',
    location: 'Paris, France',
    companyName: 'Dior',
    sales: '60M',
    revenue: '123K',
    productsTotal: '12',
  },
];
export const productsData = [
  {
    id: 1,
    title: 'Off-Shoulder Cowl-Back A-Line Mini Dress in Dusty Lilac    ',
    description:
      'Capturing the essence of endless nights, the Tigen mini dress is rendered in two summery hues. It’s cut from our premium sheer jersey fabric to a subtle A-line silhouette with off-shoulder cap sleeves and enhanced with precisely placed ruching at the waist. It turns to reveal a low cut-out back with draped cowl detailing.',
    seller: SellersData[0].companyName,
    created: '20 Oct, 2023',
    SKU: 'TR-458-GH',
    category: categoriesData[0].name,
    type: 'Single',
    gender: 'Female',
    sold: 400,
    stock: 400,
    prices: {
      sale: 0,
      status: false,
      price: 500,
    },
    images: productsImages.girls.one,
    review: {
      rate: 4,
      count: 10,
    },
    colors: ['#f7bf7e', '#95ad58', '#40b5c2', '#e9a7fa', '#e0a4aa'],
    size: ['XS', 'SM', 'M', 'L'],
  },
  {
    id: 2,
    title: 'Slim Fit Nylon Cargo Joggers',
    description:
      'Slim-fit joggers in stretch nylon. Drawstring and covered elastic at waistband. Side pockets, leg pockets with flap and concealed snap fasteners, and welt back pockets. Covered elastic at hems.',
    seller: SellersData[1].companyName,
    created: '23 Agst, 2023',
    SKU: 'TR-691-KU',
    category: categoriesData[1].name,
    type: 'Single',
    gender: 'Male',
    sold: 45,
    stock: 200,
    prices: {
      sale: 56,
      status: true,
      price: 70,
    },
    images: productsImages.boys.one,
    review: {
      rate: 5,
      count: 290,
    },
    colors: ['#4287f5', '#ed1ab8', '#0ca635', '#e89b0c', '#e8340c'],
    size: ['L', '2XL', 'XL', 'M'],
  },
  {
    id: 3,
    title: 'Off-Shoulder Cowl-Back A-Line Mini Dress in Ivory',
    description:
      'Capturing the essence of endless nights, the Tigen mini dress is rendered in two summery hues. It’s cut from our premium sheer jersey fabric to a subtle A-line silhouette with off-shoulder cap sleeves and enhanced with precisely placed ruching at the waist. It turns to reveal a low cut-out back with draped cowl detailing.',
    seller: SellersData[2].companyName,
    created: '12 Jan, 2023',
    SKU: 'TR-123-NL',
    category: categoriesData[2].name,
    type: 'Boxed',
    gender: 'Female',
    sold: 10,
    stock: 20,
    prices: {
      sale: 0,
      status: false,
      price: 64,
    },
    images: productsImages.girls.two,
    review: {
      rate: 2,
      count: 30,
    },
    colors: ['#916976', '#6a6fa1', '#6a9da1', '#73a16a', '#a1846a'],
    size: ['2XL', 'L', 'M', 'XS'],
  },
  {
    id: 4,
    title: 'Regular Fit Sweatshorts',
    description:
      'Regular-fit sweatshorts in lightweight, cotton-blend fabric with a comfortable, classic silhouette. Elasticized, drawstring waistband, side pockets, and an open back pocket',
    seller: SellersData[3].companyName,
    created: '23 Agst, 2023',
    SKU: 'TR-691-KU',
    category: categoriesData[3].name,
    type: 'Single',
    gender: 'Male',
    sold: 400,
    stock: 0,
    prices: {
      sale: 0,
      status: false,
      price: 12,
    },
    images: productsImages.boys.two,
    review: {
      rate: 3,
      count: 6798,
    },
    colors: ['#910303', '#914503', '#6e9103', '#03918d', '#032991'],
    size: ['XS', 'L', '3XL', '2XL'],
  },
  {
    id: 5,
    title: 'Sweetheart Neckline Maxi Dress in Black',
    description:
      'A romantic maxi dress designed to ensure a sensual and alluring fit, the Dolcezza maxi dress is a must have style for romantic dinner dates. Designed in our premium modal fabric that’s smooth against the skin and hugs your curves to create a flattering silhouette, Dolcezza features a bust flattering sweetheart neckline and small cap sleeves for a supportive and flattering fit. Cut to a maxi length with princess seams that work to enhance your silhouette further, we know you’ll love Dolcezza maxi dress for romantic occasions',
    seller: SellersData[4].companyName,
    created: '30 Feb, 2023',
    SKU: 'TR-907-LK',
    category: categoriesData[4].name,
    type: 'Boxed',
    gender: 'Female',
    sold: 7,
    stock: 2,
    prices: {
      sale: 0,
      status: false,
      price: 23,
    },
    images: productsImages.girls.three,
    review: {
      rate: 5,
      count: 1234,
    },
    colors: ['#d4defa', '#edd4fa', '#fad4e2', '#d4fadb', '#faead4'],
    size: ['M', 'SM', 'L', '4XL'],
  },
  {
    id: 6,
    title: 'Regular Fit Cotton Shorts',
    description:
      'Regular-fit shorts in woven cotton fabric. Drawstring waistband with covered elastic and mock fly. Side pockets and a welt back pocket',
    seller: SellersData[5].companyName,
    created: '23 Agst, 2023',
    SKU: 'TR-691-KU',
    category: categoriesData[5].name,
    type: 'Unit',
    gender: 'Male',
    sold: 0,
    stock: 175,
    prices: {
      sale: 70,
      status: true,
      price: 12,
    },
    images: productsImages.boys.three,
    review: {
      rate: 0,
      count: 0,
    },
    colors: ['#f7bf7e', '#95ad58', '#40b5c2', '#e9a7fa', '#e0a4aa'],
    size: ['XL', '4XL', 'M', 'XS'],
  },
  {
    id: 7,
    title: 'Embellished Bandeau Cowl Neck Maxi Dress in Light Blue',
    description:
      'The midi dress you fell in love with in an all new maxi length and three classic colourways - La Rochette everything you’ve been waiting for. The ultimate party dress, La Rochette is fully embellished with pearl and bead adornment for extravagant glamor. Cut to a maxi length with an alluring thigh high split, La Rochette is complete with a seductive bandeau neckline with cowl neck draping',
    seller: SellersData[0].companyName,
    created: '12 Jan, 2023',
    SKU: 'TR-123-NL',
    category: categoriesData[6].name,
    type: 'Single',
    gender: 'Female',
    sold: 600,
    stock: 798,
    prices: {
      sale: 0,
      status: false,
      price: 98,
    },
    images: productsImages.girls.four,
    review: {
      rate: 1,
      count: 308,
    },
    colors: ['#916976', '#6a6fa1', '#6a9da1', '#73a16a', '#a1846a'],
    size: ['XS', 'SM', 'M', 'L'],
  },
  {
    id: 8,
    title: 'Loose Fit Patterned Resort Shirt',
    description:
      'Loose-fit, short-sleeved shirt in patterned, woven cotton fabric with a generous but not oversized silhouette. Resort collar, buttons without placket, an open chest pocket, and yoke at back. Straight-cut hem with small slit at sides.',
    seller: SellersData[1].companyName,
    created: '23 Agst, 2023',
    SKU: 'TR-691-KU',
    category: categoriesData[7].name,
    type: 'Unit',
    gender: 'Male',
    sold: 12,
    stock: 10,
    prices: {
      sale: 20,
      status: true,
      price: 18,
    },
    images: productsImages.boys.four,
    review: {
      rate: 5,
      count: 6798,
    },
    colors: ['#574c42', '#445742', '#434257', '#574256', '#574243'],
    size: ['L', 'M', 'S', 'XS'],
  },
  {
    id: 9,
    title: 'High Split Plunge Neck Maxi Dress in Black',
    description:
      'A timeless silhouette, figure enhancing fabric and a statement side split - the Sloane maxi dress has everything you need to create a sculpted and glamorous look this season. Designed in our super soft, body contouring fabric that hugs your curves for a sculpted fit, the Sloane maxi features a plunge neckline with wide shoulder straps and a waist cinching ruched midriff that creates a truly flattering fit. Complete with a dramatic thigh high side split, the Sloane maxi dress is available in three shades perfect for effortless summertime styling',
    seller: SellersData[2].companyName,
    created: '10 Feb, 2023',
    SKU: 'TR-907-SM',
    category: categoriesData[8].name,
    type: 'Single',
    gender: 'Female',
    sold: 1000,
    stock: 3,
    prices: {
      sale: 0,
      status: false,
      price: 45,
    },
    images: productsImages.girls.five,
    review: {
      rate: 0,
      count: 0,
    },
    colors: ['#d4defa', '#edd4fa', '#fad4e2', '#d4fadb', '#faead4'],
    size: ['S', 'SM', 'M', 'L'],
  },
  {
    id: 10,
    title: 'Regular Fit Piqué Polo Shirt',
    description:
      'Regular-fit polo shirt in cotton pique with a comfortable, classic silhouette. Ribbed collar, short button placket, and short sleeves with ribbed cuffs. Article number:1209183002 Model size: The model is 186cm/61" and wears a size M Length: Regular length Sleeve Length: Short sleeve Fit: Regular fit Collar: Turn-down Collar Style: Polo shirt Description: White, Solid-color Imported: Yes Concept: BASICS',
    seller: SellersData[3].companyName,
    created: '23 Agst, 2023',
    SKU: 'TR-691-BC',
    category: categoriesData[9].name,
    type: 'Boxed',
    gender: 'Male',
    sold: 0,
    stock: 578,
    prices: {
      sale: 90,
      status: true,
      price: 60,
    },
    images: productsImages.boys.five,
    review: {
      rate: 0,
      count: 0,
    },
    colors: ['#f7bf7e', '#95ad58', '#40b5c2', '#e9a7fa', '#e0a4aa'],
    size: ['XS', 'S', '2XL', 'L'],
  },
  {
    id: 11,
    title: 'Square Neck Long Sleeve Mini Dress in Black',
    description:
      'Sculpting and seductive, the Baize mini dress is perfect for creating an enviable silhouette. Cut from our premium modal fabric in two new season shades, the Baize mini features a bust flattering straight neckline with angled shoulders to further enhance your assets. Long flare sleeves are accentuated with self tie fastenings whilst the mini skirt features a seductive split on the left side. Understated and ultra flattering, Baize is a must have to bring the heat to cooler evenings',
    seller: SellersData[4].companyName,
    created: '12 Jan, 2023',
    SKU: 'TR-123-PLJ',
    category: categoriesData[0].name,
    type: 'Single',
    gender: 'Female',
    sold: 2,
    stock: 1000,
    prices: {
      sale: 60,
      status: true,
      price: 100,
    },
    images: productsImages.girls.six,
    review: {
      rate: 4,
      count: 1286,
    },
    colors: ['#916976', '#6a6fa1', '#6a9da1', '#73a16a', '#a1846a'],
    size: ['L', 'M', '4XL', 'S'],
  },
  {
    id: 12,
    title: 'Loose Fit Lyocell Resort Shirt',
    description:
      'Loose-fit shirt in woven lyocell with a generous but not oversized silhouette. Resort collar, buttons without placket, and short sleeves. Open chest pocket, yoke at back, and a straight-cut hem with a small slit at sides. Fabric made from lyocell is super soft, wrinkle resistant, and nicely draped',
    seller: SellersData[5].companyName,
    created: '23 Agst, 2023',
    SKU: 'TR-691-TFG',
    category: categoriesData[1].name,
    type: 'Unit',
    gender: 'Male',
    sold: 56,
    stock: 6,
    prices: {
      sale: 0,
      status: false,
      price: 239,
    },
    images: productsImages.boys.six,
    review: {
      rate: 5,
      count: 98,
    },
    colors: ['#574c42', '#445742', '#434257', '#574256', '#574243'],
    size: ['4XL', '2XL', 'S', 'L'],
  },
];

export const MenuDatas = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: HiOutlineHome,
  },
  {
    title: 'Users',
    path: '/users',
    icon: TbUsers,
  },

  {
    title: 'Product',
    path: '/products',
    icon: MdOutlineInventory2,
  },

  {
    title: 'Orders',
    path: '/orders',
    icon: FaTableList,
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: FaRegMoneyBill1,

  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: TbFileInvoice,
  },
 
  {
    title: 'Chats',
    path: '/chats',
    icon: MdOutlineChat,
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: MdOutlineReviews,
  },
 
  {
    title: 'Campaigns',
    path: '/campaigns',
    icon: MdOutlineCampaign,
  },
  {
    title: 'Admins',
    path: '/admins',
    icon: HiOutlineUsers,
  },
  {
    title: 'Account Settings',
    path: '/settings',
    icon: AiOutlineSetting,
  },

];

export const memberData = [
  {
    id: 1,
    title: 'Hugo Lloris',
    product: 'Loose Fit',
    image: '/images/user1.png',
    admin: false,
    phone: '+1 234 567 890',
    email: 'hugolloris@gmail.com',
    age: 25,
    gender: 'Male',
    blood: '#TWT5015100365',
    totalAppointments: 5,
    date: '20 Aug 2021',
    
    
  },

  {
    id: 2,
    title: 'Mauris auctor',
    product: 'Loose Fit',
    image: '/images/user2.png',
    admin: false,
    email: 'maurisauctor@gmail.com',
    phone: '+1 456 789 123',
    age: 34,
    gender: 'Female',
    blood: '#TWT5015100388',
    totalAppointments: 3,
    date: '22 Nov 2023',
  },
  {
    id: 3,
    title: 'Michael Owen',
    product: 'Loose Fit',
    image: '/images/user3.png',
    admin: false,
    phone: '+1 890 123 456',
    email: 'michaelowen@gmail.com',
    age: 45,
    gender: 'Male',
    blood: '#TWT5015100378',
    totalAppointments: 26,
    date: '12 Jan 2020',
  },
  {
    id: 4,
    title: 'Amina Smith',
    product: 'Loose Fit',
    image: '/images/user4.png',
    admin: true,
    phone: '+1 908 765 432',
    email: 'aminasmith@gmail.com',
    age: 28,
    gender: 'Female',
    blood: '#TWT5015100360',
    totalAppointments: 17,
    date: '07 Feb 2001',
  },
  {
    id: 5,
    title: 'Minahil Khan',
    product: 'Loose Fit',
    image: '/images/user5.png',
    admin: false,
    phone: '+1 890 123 456',
    email: 'minahilkhan@gmail.com',
    age: 35,
    gender: 'Female',
    blood: '#TWT5015100368',
    totalAppointments: 9,
    date: '30 Dec 2019',
  },
  {
    id: 6,
    title: 'Alex Morgan',
    product: 'Loose Fit',
    image: '/images/user6.png',
    admin: false,
    phone: '+1 908 765 432',
    email: 'alexmorgan@gmail.com',
    age: 29,
    gender: 'Male',
    blood: '#TWT5015100310',
    totalAppointments: 34,
    date: '12 Jan 2020',
  },
  {
    id: 7,
    title: 'John Doe',
    product: 'Loose Fit',
    image: '/images/user7.png',
    admin: false,
    phone: '+1 234 567 890',
    email: 'johndoe@gmail.com',
    age: 32,
    gender: 'Male',
    blood: '#TWT5015100000',
    totalAppointments: 12,
    date: '18 Mar 2023',
  },
  {
    id: 8,
    title: 'David Beckham',
    product: 'Loose Fit',
    image: '/images/user8.png',
    admin: false,
    phone: '+1 456 789 123',
    email: 'davidbackham@gmail.com',
    age: 27,
    gender: 'Female',
    blood: '#TWT5015100377',
    totalAppointments: 70,
    date: '01 June 2018',
  },


];

export const medicineData = [
  {
    id: 1,
    name: 'Wireless Earbuds ',
    measure: 'Tablet',
    stock: 400,
    price: 1000,
    status: 'Processing',
    instraction: 'Pair the earbuds with your smartphone ',
    // order id
    orderId: 2024061107,
    customerName: 'David Miller',
    quantity: 1,
    totalPrice: 1000, // Assuming total price reflects quantity
    orderDate: '2024-06-06',
    
  },
  {
    id: 2,
    name: 'Bamboo Toothbrush',
    measure: 'Capsule',
    stock: 200,
    price: 2300,
    status: 'Shipped',
    instraction: 'Replace the brush head every 3 months',
    // order id
    orderId: 2024061105,
    customerName: 'William Brown',
    quantity: 4,
    totalPrice: 4000, // Assuming total price reflects quantity
    orderDate: '2024-06-08',
  },
  {
    id: 3,
    name: 'Vegetable Spiralizer',
    measure: 'mm',
    stock: 0,
    price: 5000,
    status: 'Cancelled',
    instraction: 'Wear the glasses while using digital devices',
    // order id
    orderId: 2024061104,
    customerName: 'Olivia Jones',
    quantity: 1,
    totalPrice: 1000, // Assuming total price reflects quantity
    orderDate: '2024-06-09',
  },
  {
    id: 4,
    name: 'Computer Glasses',
    measure: 'cm',
    stock: 370,
    price: 3500,
    status: 'Delivered',
    instraction: 'Wear the glasses while using digital devices',
    // order id
    orderId: 2024061103,
      customerName: 'Michael Lee',
      quantity: 3,
      totalPrice: 3000, // Assuming total price reflects quantity
      orderDate: '2024-06-10', // Example setting specific date
  },
  {
    id: 5,
    name: 'Detachable Multi-Purpose Backpack ',
    measure: 'gm',
    stock: 0,
    price: 12000,
    status: 'Processing',
    instraction: 'Adjustable straps ensure a comfortable fit',
    // order id
    orderId: 2024061104,
    customerName: 'Olivia Jones',
    quantity: 1,
    totalPrice: 1000, // Assuming total price reflects quantity
    orderDate: '2024-06-09',
  },
  {
    id: 6,
    name: 'Travel-Sized Laundry Detergent ',
    measure: 'mg',
    stock: 123,
    price: 15500,
    status: 'Cancelled',
    instraction: 'washing machine for a convenient clean',
    // order id
    orderId: 2024061103,
    customerName: 'Michael Lee',
    quantity: 3,
    totalPrice: 3000, // Assuming total price reflects quantity
    orderDate: '2024-06-10', // Example setting specific date
  },
  {
    id: 7,
    name: 'Wireless Charging Desk Lamp',
    measure: 'ml',
    stock: 1,
    price: 30000,
    status: 'Shipped',
    instraction: 'Adjust the lamp arm',
    // order id
    orderId: 2024061102,
      customerName: 'Jane Smith',
      quantity: 2,
      totalPrice: 2000, // Assuming total price reflects quantity
      orderDate: "2024-06-06", 
  },
  {
    id: 8,
    name: 'Reusable Silicone Food Wraps',
    measure: 'lb',
    stock: 0,
    price: 200,
    status: 'Cancelled',
    instraction: 'Wash with warm soapy water',
    // order id
    orderId: 2024061101,
    customerName: 'John Doe',
    quantity: 1,
    totalPrice: 1000,
    orderDate: '2024-06-10',
  },
];

export const sortsDatas = {
  status: [
    {
      id: 1,
      name: 'Status...',
    },
    {
      id: 2,
      name: 'Pending',
    },
    {
      id: 3,
      name: 'Approved',
    },
    {
      id: 4,
      name: 'Cancelled',
    },
  ],
  method: [
    {
      id: 1,
      name: 'Payment method',
    },
    {
      id: 2,
      name: 'COD',
    },
    {
      id: 3,
      name: 'Credit Card',
    },
    {
      id: 4,
      name: 'Paypal',
    },
    {
      id: 5,
      name: 'Visa Card',
    },
    {
      id: 6,
      name: 'American Express',
    },
    {
      id: 7,
      name: 'COD',
    },
  ],
  currency: [
    {
      id: 1,
      name: 'Select Currency',
    },
    {
      id: 2,
      name: 'USD (US Dollar)',
    },
    {
      id: 3,
      name: 'EUR (Euro)',
    },
    {
      id: 4,
      name: 'TSH (Tanzanian Shilling)',
    },
  ],
  instractions: [
    {
      id: 1,
      name: 'Select Instraction',
    },
    {
      id: 2,
      name: 'After Meal',
    },
    {
      id: 3,
      name: 'Before Meal',
    },
  ],
  measure: [
    {
      id: 1,
      name: 'Select Measure',
    },
    {
      id: 2,
      name: 'mg',
    },
    {
      id: 3,
      name: 'ml',
    },
    {
      id: 4,
      name: 'gm',
    },
    {
      id: 5,
      name: 'kg',
    },
    {
      id: 6,
      name: 'lb',
    },
    {
      id: 7,
      name: 'tbsp',
    },
    {
      id: 8,
      name: 'tablet',
    },
    {
      id: 9,
      name: 'capsule',
    },
  ],

  orderStatuses: [
    {
      id: 1,
      name: 'Processing', // Example status for processing orders
    },
    {
      id: 2,
      name: 'Shipped', // Example status for shipped orders
    },
    {
      id: 3,
      name: 'Delivered', // Example status for delivered orders
    },
    {
      id: 4,
      name: 'Cancelled', // Added a cancelled status option
    },
  ],
  

  stocks: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Available',
    },
    {
      id: 3,
      name: 'Out of Stock',
    },
    
  ],
  service: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Enabled',
    },
    {
      id: 3,
      name: 'Disabled',
    },
  ],
  title: [
    {
      id: 1,
      name: 'Mr.',
    },
    {
      id: 2,
      name: 'Mrs.',
    },
    {
      id: 3,
      name: 'Ms.',
    },
  ],
  filterPatient: [
    {
      id: 1,
      name: 'Sort by...',
    },
    {
      id: 2,
      name: 'Newest Users',
    },
    {
      id: 3,
      name: 'Oldest Users',
    },
  ],
  genderFilter: [
    {
      id: 1,
      name: 'Gender...',
    },
    {
      id: 2,
      name: 'Female',
    },
    {
      id: 3,
      name: 'Male',
    },
  ],
  bloodTypeFilter: [
    {
      id: 1,
      name: 'Blood Type...',
    },
    {
      id: 2,
      name: 'A+',
    },
    {
      id: 3,
      name: 'A-',
    },
    {
      id: 4,
      name: 'B+',
    },
    {
      id: 5,
      name: 'B-',
    },
    {
      id: 6,
      name: 'AB+',
    },
    {
      id: 7,
      name: 'AB-',
    },
    {
      id: 8,
      name: 'O+',
    },
    {
      id: 9,
      name: 'O-',
    },
  ],
  dosage: [
    {
      id: 1,
      name: 'Morning (M)',
      value: 'morning',
    },
    {
      id: 2,
      name: 'Afternoon (A)',
      value: 'afternoon',
    },
    {
      id: 3,
      name: 'Evening (E)',
      value: 'evening',
    },
  ],
  star: [
    {
      id: 1,
      name: 'Filter by Rating',
      value: 1,
    },
    {
      id: 1,
      name: '0 - Very Bad',
      value: 0,
    },
    {
      id: 2,
      name: '1 - Bad',
      value: 1,
    },
    {
      id: 3,
      name: '2 - Good',
      value: 2,
    },
    {
      id: 4,
      name: '3 - Very Good',
      value: 3,
    },
    {
      id: 5,
      name: '4 - Excellent',
      value: 4,
    },
    {
      id: 6,
      name: '5 - Master',
      value: 5,
    },
  ],
  users: [
    {
      id: 1,
      name: 'Filter by ...',
      value: 'all',
    },
    {
      id: 2,
      name: 'Newes',
      value: 'Newest',
    },
    {
      id: 3,
      name: 'Helpfulness',
      value: 'Helpfulness',
    },
    {
      id: 4,
      name: 'Products',
      value: 'products',
    },
  ],
};

export const campaignData = [
  {
    id: 1,
    title: 'Summer Sale: 20% off All Swimwear',
    date: '1 day ago',
    type: 'email',
    sendTo: 'All Customers',
    action: {
      subject: 'Get Beach Ready! Summer Sale Starts Now!',
      message:
        'Dive into summer savings! Enjoy 20% off all swimwear for a limited time. Shop our latest styles and hit the beach in confidence. Click here to shop now!',
      discountCode: 'SUMMERSwim20',
    },
  },
  {
    id: 2,
    title: 'New Arrivals: Sustainable Clothing Line',
    date: '8 days ago',
    type: 'whatsapp',
    sendTo: 'Eco-conscious Followers',
        action: {
      message:
      'Look good, feel good, do good! Explore our new collection of sustainable clothing made with eco-friendly materials. Shop now and make a difference!',
    },
  },
  {
    id: 3,
    title: 'Abandoned Cart Reminder',    date: '10 days ago',
    type: 'sms',
    sendTo: 'Recent Abandoners',
    action: {
      message:
      'Hey there! We noticed you left some goodies behind. Your cart is still waiting for you. Don\'t miss out on these amazing items!',
    },
  },
  {
    id: 4,
    title: 'Birthday Surprise: Special Offer for COD',
    date: '15 days ago',
    type: 'sms',
    sendTo: 'COD Users',
    action: {
      message:
      'Happy Birthday from Codemarketi! To celebrate, enjoy a special 15% discount on your next purchase. Treat yourself with this birthday gift! Use code HAPPYBIRTHDAY at checkout.  ',
    },
  },
  {
    id: 5,
    title: 'Win a Free Summer Wear!',
    date: '12 days ago',
    type: 'email',
    sendTo: 'All Visitors',
    action: {
      subject: 'Dear Users, Cordimarketi win Free Summer Wear',
      message:
        'Dear Users, Cordimarketi is delighted to offer you a Free Summer Wear. Please visit our website to avail this offer. Thank you. and have a nice day. and welcome to our website.',
      subHeader: 'Braces Offer for Britam Patients',
      header: 'Now get Summer Wear at 50% off',
      footer: 'This offer is valid till 30th June, 2025',
    },
  },
  {
    id: 6,
    title: 'Sustainable Style: Introducing Our Eco-Friendly Collection',
    date: '20 days ago',
    type: 'whatsapp',
    sendTo: 'All Users',
    action: {
      message:
      'We\'re thrilled to introduce our new collection of eco-friendly clothing! Made with sustainable materials and ethical practices, look good and feel good knowing you\'re making a positive impact. Shop the collection now and discover your new favorite sustainable pieces!',
    },
  },
];
export const servicesData = [
  {
    id: 1,
    name: 'Select service.. ',
  },
  {
    id: 2,
    name: 'Smartest Printed T-shirt',
    price: 40000,
    date: '23 June, 2021',
    status: true,
  },
  {
    id: 3,
    name: 'Crop tops for Women',
    price: 20000,
    date: '12 Jan, 2022',
    status: true,
  },
  {
    id: 4,
    name: 'Mesh Ergonomic Black Chair',
    price: 50000,
    date: '11 April, 2023',
    status: false,
  },
  {
    id: 5,
    name: 'Fastcolors Typography Men',
    price: 34000,
    date: '10 Agst, 2021',
    status: true,
  },
  {
    id: 6,
    name: 'Roar Twill Blue Baseball Cap',
    price: 10400,
    date: '23 June, 2021',
    status: false,
  },
  {
    id: 7,
    name: 'Maxi dress in orange',
    price: 150000,
    date: '09 Dec, 2023',
    status: false,
  },
  {
    id: 8,
    name: 'Leg jeans in off white',
    price: 23000,
    date: '05 Feb, 2019',
    status: true,
  },
  {
    id: 9,
    name: 'Satin clutch bag in red',
    price: 40000,
    date: '16 Nov, 2022',
    status: true,
  },
  {
    id: 10,
    name: 'Lightweight blazer',
    price: 19000,
    date: '02 Jun, 2022',
    status: false,
  },
  {
    id: 11,
    name: 'Sleeveless mini dress in white',
    price: 160000,
    date: '23 June, 2021',
    status: true,
  },
];

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

export const appointmentsData = [
  {
    id: 1,
    time: '2 hrs later',
    user: memberData[4],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Shipped',
    doctor: memberData[0],
    date: 'Jun 12, 2021',
  },
  {
    id: 2,
    time: '1 hrs ago',
    user: memberData[5],
    from: '13:00 Pm',
    to: '18:00 PM',
    hours: 5,
    status: 'Cancelled',
    doctor: memberData[1],
    date: 'Feb 24, 2021',
  },
  {
    id: 3,
    time: '2 hrs ago',
    user: memberData[6],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Processing',
    doctor: memberData[2],
    date: 'Mar 12, 2023',
  },
  {
    id: 4,
    time: '3 hrs later',
    user: memberData[7],
    from: '06:00 AM',
    to: '08:00 AM',
    hours: 3,
    status: 'Delivered',
    doctor: memberData[3],
    date: 'Apr 06, 2023',
  },
  {
    id: 5,
    time: '4 hrs ago',
    user: memberData[3],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 7,
    status: 'Delivered',
    doctor: memberData[4],
    date: 'May 18, 2023',
  },
];

export const transactionData = [
  {
    id: 1,
    user: memberData[0],
    date: 'Mar 12, 2022',
    amount: 1000,
    status: 'Paid',
    method: 'COD',
    doctor: memberData[3],
  },
  {
    id: 2,
    user: memberData[1],
    date: 'Agus 12, 2023',
    amount: 2300,
    status: 'Paid',
    method: 'Credit Card',
    doctor: memberData[4],
  },
  {
    id: 3,
    user: memberData[2],
    date: 'Jan 06, 2024',
    amount: 1200,
    status: 'Pending',
    method: 'PayPal',
    doctor: memberData[5],
  },
  {
    id: 4,
    user: memberData[3],
    date: 'Feb 18, 2025',
    amount: 1400,
    status: 'Cancel',
    method: 'Credit Card',
    doctor: memberData[6],
  },
  {
    id: 5,
    user: memberData[4],
    date: 'Mar 12, 2026',
    amount: 1230,
    status: 'Pending',
    method: 'American Express',
    doctor: memberData[7],
  },
  {
    id: 6,
    user: memberData[5],
    date: 'Apr 12, 2027',
    amount: 1000,
    status: 'Paid',
    method: 'Paypal',
    doctor: memberData[0],
  },
  {
    id: 7,
    user: memberData[6],
    date: 'May 12, 2028',
    amount: 8900,
    status: 'Cancel',
    method: 'Credit Card',
    doctor: memberData[1],
  },
  {
    id: 8,
    user: memberData[7],
    date: 'Jun 12, 2029',
    amount: 1000,
    status: 'Pending',
    method: 'COD',
    doctor: memberData[2],
  },
];

export const dashboardCards = [
  {
    id: 1,
    title: 'Total Orders',
    icon: TbUsers,
    value: 1600,
    percent: 45.06,
    color: ['bg-subMain', 'text-subMain', '#0f68db'],
    datas: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 2,
    title: 'Cancelled',
    icon: TbCalendar,
    value: 130,
    percent: 25.06,
    color: ['bg-yellow-500', 'text-yellow-500', '#F9C851'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
  {
    id: 3,
    title: 'Delivered',
    icon: TbFile,
    value: 4160,
    percent: 65.06,
    color: ['bg-[#66B5A3]', 'text-[#66B5A3]', '#66B5A3'],
    datas: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 4,
    title: 'Total Earnings',
    icon: MdOutlineAttachMoney,
    value: 4590,
    percent: 45.06,
    color: ['bg-[#e6870b]', 'text-[#e6870b]', '#e6870b'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
];

export const notificationsData = [
  {
    id: 1,
    action: 1,
    user: memberData[0],
    time: '2 hours ago',
  },
  {
    id: 2,
    action: 2,
    user: memberData[1],
    time: '2 days ago',
  },
  {
    id: 3,
    action: 1,
    user: memberData[2],
    time: '3 days ago',
  },
  {
    id: 4,
    action: 2,
    user: memberData[3],
    time: '4 days ago',
  },
];

export const shareData = [
  {
    id: 1,
    icon: HiOutlineMail,
    title: 'Email',
    description: 'Send to users email address',
  },
  {
    id: 2,
    icon: MdOutlineTextsms,
    title: 'SMS',
    description: 'Send to users phone number',
  },
  {
    id: 3,
    icon: FaWhatsapp,
    title: 'WhatsApp',
    description: 'Send to users WhatsApp account',
  },
  {
    id: 4,
    icon: FaTelegramPlane,
    title: 'Telegram',
    description: 'Send to users Telegram account',
  },
];

export const patientTab = [
  {
    id: 1,
    title: 'User Information',
    icon: RiUserLine,
  },
  {
    id: 2,
    title: 'Order History',
    icon: BiCalendar,
  },
  {
    id: 3,
    title: 'Invoices',
    icon: RiFileList3Line,
  },
  {
    id: 4,
    title: 'Payments History',
    icon: RiMoneyDollarCircleLine,
  },
  
  {
    id: 6,
    title: 'Chart',
    icon: RiStethoscopeLine,
  },
 
 
];

export const doctorTab = [
  {
    id: 1,
    title: 'Personal Information',
    icon: RiUserLine,
  },
  {
    id: 2,
    title: 'Users',
    icon: BiUserPlus,
  },
  {
    id: 3,
    title: 'Appointments',
    icon: BiCalendar,
  },
  {
    id: 4,
    title: 'Payments',
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 5,
    title: 'Invoices',
    icon: RiFileList3Line,
  },
  {
    id: 6,
    title: 'Reviews',
    icon: MdOutlineReviews,
  },
  {
    id: 7,
    title: 'Access Control',
    icon: TbLockAccess,
  },
  {
    id: 8,
    title: 'Change Password',
    icon: RiLockPasswordLine,
  },
];




export const orderData = [

  {
    id: 1,
    date: '13, Jan 2021',
    totalAmount: 150000,
    items: [
      { id: 101, name: 'Apple iPhone 12 Pro', variant: '256GB, Pacific Blue', quantity: 1, price: 120000 },
      { id: 102, name: 'Apple AirPods Pro', variant: 'White', quantity: 1, price: 30000 },
    ],
    shippingAddress: { name: 'John Doe', street: '123 Main Street', city: 'Anytown', state: 'CA', zip: '12345' },
    orderStatus: 'Delivered',
    trackingNumber: '1Z999AA10123456784',
    images: ['https://placehold.it/300x300', 'https://placehold.it/300x300'],
    customerReview: { rating: 5, comment: 'Excellent products and fast shipping!' },
  },
  {
    id: 2,
    date: '28, Feb 2021',
    totalAmount: 65500,
    items: [
      { id: 201, name: 'Samsung Galaxy S21', variant: '128GB, Phantom Violet', quantity: 1, price: 55000 },
      { id: 202, name: 'Samsung Galaxy Buds Live', variant: 'Mystic Bronze', quantity: 1, price: 10500 },
    ],
    shippingAddress: { name: 'Jane Smith', street: '456 Elm Street', city: 'Otherville', state: 'NY', zip: '98765' },
    orderStatus: 'Processing',
    trackingNumber: null, // Not yet shipped
    images: ['https://placehold.it/300x300', 'https://placehold.it/300x300'],
    customerReview: { rating: null, comment: null }, // No review yet
  },
  {
    id: 3,
    date: '15, Apr 2021',
    totalAmount: 39900,
    items: [{ id: 301, name: 'Sony PlayStation 5', variant: 'Disc Edition', quantity: 1, price: 39900 }],
    shippingAddress: { name: 'Alice Johnson', street: '789 Oak Avenue', city: 'New City', state: 'TX', zip: '67890' },
    orderStatus: 'Shipped',
    trackingNumber: '9T567YY34890123578',
    images: ['https://placehold.it/300x300'],
    customerReview: { rating: 4, comment: 'Great console, but shipping was a bit slow.' },
  },
  {
    id: 4,
    date: '05, May 2021',
    totalAmount: 12999,
    items: [{ id: 401, name: 'Nintendo Switch Lite', variant: 'Coral', quantity: 1, price: 12999 }],
    shippingAddress: { name: 'Bob Wilson', street: '101 Pine Road', city: 'Smalltown', state: 'FL', zip: '34567' },
    orderStatus: 'Cancelled', 
    trackingNumber: null,
    images: ['https://placehold.it/300x300'],
    customerReview: { rating: null, comment: null },
  },

  {
    id: 5,
    date: '22, Jun 2021',
    totalAmount: 249900,
    items: [
      { id: 501, name: 'Apple MacBook Pro', variant: '16-inch, M1 Pro Chip', quantity: 1, price: 249900 },
    ],
    shippingAddress: { name: 'David Lee', street: '888 Cedar Lane', city: 'Tech City', state: 'CA', zip: '54321' },
    orderStatus: 'Shipped',
    trackingNumber: '4C888ZZ98765432103',
    images: ['https://placehold.it/300x300'], // Image of MacBook Pro
    customerReview: { rating: 5, comment: 'Powerful laptop, love the new design!' },
  },
];




export const medicalRecodData = [
  {
    id: 1,
    date: '13, Jan 2021',
    amount: 150000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Sudden loss of vision,Red eyes,Double vision,Blurred vision',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'High blood pressure, Diabetes, Hypertension',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Refractive Lens Exchange (RLE)',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Paracetamol, Amoxicillin, Ibuprofen, Aspirin',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Blood Pressure: 120/80 mmHg',
      'Pulse Rate: 80 bpm',
      'Respiratory Rate: 16 bpm',
      'Temperature: 36.5 °C',
      'Oxygen Saturation: 98%',
    ],
  },
  {
    id: 2,
    date: '10, Feb 2022',
    amount: 300000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Flashing lights and floaters,Watery eyes,Painful vision',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'High cholesterol,Rheumatoid arthritis',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Cataracts Surgery, Laser Eye Surgery',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Benzocaine, Lidocaine, Mepivacaine, Prilocaine',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Weight: 60 kg',
      'Height: 170 cm',
      'BMI: 20.76 kg/m2',
      'Blood Pressure: 120/80 mmHg',
    ],
  },
  {
    id: 3,
    date: '20, Mar 2022',
    amount: 500000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Painful eyes,Flashing lights and floaters,Blurred vision',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Cataracts, Glaucoma, Diabetic eye disease',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Paeditaric Ophthalmology,Drooping Eyelids, Laser Eye Surgery',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Gingival Gel, Chlorhexidine, Fluoride, Calcium',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Temperature: 36.5 °C',
      'Oxygen Saturation: 98%',
      'Blood Pressure: 120/80 mmHg',
      'Pulse Rate: 80 bpm',
      'Respiratory Rate: 16 bpm',
    ],
  },
  {
    id: 4,
    date: '10, Apr 2022',
    amount: 760000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Gradual loss of vision,Headache,Vision problems',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Cataracts, Glaucoma, Diabetic eye disease, Hypertension',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Cataracts Surgery, Laser Eye Surgery, Paeditaric Ophthalmology',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Tramadol, Codeine, Morphine, Oxycodone',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Sugar Level: 120 mg/dL',
      'Oxygen Saturation: 98%',
      'Cholesterol: 200 mg/dL',
      'Blood Pressure: 120/80 mmHg',
    ],
  },
];

export const doctorsData = [
  {
    id: 1,
    user: memberData[0],
    title: 'Mr.',
  },
  {
    id: 2,
    user: memberData[1],
    title: 'Miss.',
  },
  {
    id: 3,
    user: memberData[2],
    title: 'Mrs',
  },
  {
    id: 4,
    user: memberData[3],
    title: 'Dr.',
  },
];

export const receptionsData = [
  {
    id: 1,
    user: memberData[6],
    title: 'Miss.',
  },
  {
    id: 2,
    user: memberData[7],
    title: 'Mr.',
  },
  {
    id: 3,
    user: memberData[5],
    title: 'Mr.',
  },
  {
    id: 4,
    user: memberData[4],
    title: 'Mrs.',
  },
  {
    id: 5,
    user: memberData[2],
    title: 'Mrs.',
  },
  {
    id: 6,
    user: memberData[1],
    title: 'Mrs.',
  },
];

export const patientImages = [
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/2_g7b8yh.jpg',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607745/Eye%20Clinic%20Dashboard/3_hz4vrd.webp',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/4_mpyrax.jpg',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607748/Eye%20Clinic%20Dashboard/5_ezdsku.webp',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/6_iqoxxa.jpg',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/7_yg4sbv.jpg',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607752/Eye%20Clinic%20Dashboard/8_joyhf7.png',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607749/Eye%20Clinic%20Dashboard/9_zmsbil.jpg',
  'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/1_uhqkrg.jpg',
];

export const reviewData = [
  {
    id: 1,
    user: memberData[0],
    star: 4,
    comment:
    "Fast shipping and amazing quality! The dress is exactly as pictured and fits perfectly. I'll definitely be ordering from here again.",    reviewAbout: {
      name: 'Quality',
      link: '#',
    },
    date: '29 May 2021',
  },
  {
    id: 2,
    user: memberData[1],
    star: 5,
    comment:
    "The customer service was fantastic! They were very helpful and responsive when I had a question about my order. Great experience overall.",      reviewAbout: {
      name: `Fast Delivery`,
      link: '/doctors/preview/1',
    },
    date: '12 Jan 2021',
  },
  {
    id: 3,
    user: memberData[2],
    star: 2,
    comment:
    "Great selection of products and competitive prices. I found exactly what I was looking for at a great price point. Very happy with my purchase!",    reviewAbout: {
      name: `Product: Sunglasses`,
      link: '/',
    },
    date: '04 Aug 2021',
  },
  {
    id: 4,
    user: memberData[3],
    star: 5,
    comment:
    "Super easy to navigate website and secure checkout process. I felt confident placing my order online. Will be back soon!",    reviewAbout: {
      name: `T-shirt`,
      link: '/doctors/preview/3',
    },
    date: '12 Jan 2021',
  },
  {
    id: 5,
    user: memberData[4],
    star: 3,
    comment:
    "So impressed with the variety of payment options offered. Made checkout a breeze. Thanks for the smooth shopping experience!" ,    reviewAbout: {
      name: 'payment options',
      link: '#',
    },
    date: '04 Aug 2021',
  },
  {
    id: 6,
    user: memberData[5],
    star: 0,
    comment:
    "Beautiful packaging and the product itself is even better! Arrived quickly and exceeded my expectations. Perfect gift for a friend!" ,    reviewAbout: {
      name: `Beautiful packaging`,
      link: '/',
    },
    date: '09 Apr 2021',
  },
];

export const chatsData = [
  {
    id: 1,
    user: memberData[0],
    active: '2 min ago',
    status: true,
    message: 'Purchase delay Today..',
  },
  {
    id: 2,
    user: memberData[1],
    active: '2:30 Pm',
    status: true,
    message: 'Can i get delivering now??',
  },
  {
    id: 3,
    user: memberData[2],
    active: '1:30 Pm',
    status: true,
    message: 'i need your help with Tracking product',
  },
  {
    id: 4,
    user: memberData[3],
    active: 'Yesterday',
    status: true,
    message: 'How are you doing??',
  },
  {
    id: 5,
    user: memberData[4],
    active: '12/4/2024',
    status: false,
    message: 'Delete all Users data',
  },
  {
    id: 6,
    user: memberData[5],
    active: '11/4/2024',
    status: false,
    message: 'Hellow Codemarketi..',
  },
  {
    id: 7,
    user: memberData[6],
    active: '06/4/2024',
    status: false,
    message: 'Need your minute. are you available?    ',
  },
  {
    id: 8,
    user: memberData[7],
    active: '05/3/2024',
    status: false,
    message: 'Morning.',
  },

  {
    id: 9,
    user: memberData[0],
    active: '11/4/2024',
    status: false,
    message: 'Hellow Codemarketi..',
  },
  {
    id: 10,
    user: memberData[3],
    active: '06/4/2024',
    status: false,
    message: 'Need your minute. are you available?    ',
  },
  {
    id: 11,
    user: memberData[1],
    active: '05/3/2024',
    status: false,
    message: 'Morning.',
  },
];

export const convData = [
  {
    id: 1,
    user: memberData[0],
    text: 'Morning Managment 👐👐',
    time: '12:00 PM',
    imageUrl: '',
    value: {
      image: false,
      me: false,
    },
  },
  {
    id: 2,
    user: memberData[4],
    text: 'Morning how are you doing',
    time: '12:02 PM',
    imageUrl: '',
    value: {
      image: false,
      me: true,
    },
  },
  {
    id: 3,
    user: memberData[0],
    text: 'Im doing well.. is this product still available',
    time: '12:05 PM',
    imageUrl: '',
    value: {
      image: false,
      me: false,
    },
  },
  {
    id: 4,
    user: memberData[0],
    text: 'I need to return this product',
    time: '12:05 PM',
    imageUrl: '',
    value: {
      image: false,
      me: false,
    },
  },
  {
    id: 5,
    user: memberData[4],
    text: 'Its okay  dear..',
    time: '01:06 PM',
    imageUrl: '',
    value: {
      image: false,
      me: true,
    },
  },
  {
    id: 6,
    user: memberData[0],
    text: 'Ohh thank you 😌😌😌',
    time: '01:09 PM',
    imageUrl: '',
    value: {
      image: false,
      me: false,
    },
  },
  {
    id: 7,
    user: memberData[4],
    text: 'I want to buy this Eye contact lenses ...',
    time: '01:14 PM',
    imageUrl: '',
    value: {
      image: false,
      me: true,
    },
  },
  {
    id: 8,
    user: memberData[4],
    text: '',
    time: '01:14 PM',
    imageUrl:
      'https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607745/Eye%20Clinic%20Dashboard/3_hz4vrd.webp',
    value: {
      image: true,
      me: true,
    },
  },
  {
    id: 9,
    user: memberData[0],
    text: 'I will check on our stock and let you know if its available 😌',
    time: '01:18 PM',
    imageUrl: '',
    value: {
      image: false,
      me: false,
    },
  },
];
