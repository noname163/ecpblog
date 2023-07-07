import AsyncStorage from '@react-native-async-storage/async-storage';

const data = {
  itemDataset: [
    {
      id: "1",
      image: "https://sarusandaorchid.com/wp-content/uploads/2019/03/Vanda-coerulea.jpg",
      title: "Vanda Hybrid",
      subtitle: "Coelogyne",
      favorite: false,
      description: "Dendrobiums grow well at a temperature range between 20-35 degrees Celsius and high humidity",
      price: 20.3,
      rate: "4",
    },
    {
      id: "2",
      image: "https://i.pinimg.com/originals/11/c3/31/11c3317d6a69549d99b0d07fe6714bac.jpg",
      title: "Cattleya Aclandiae.",
      favorite: false,
      subtitle: "Vanda",
      description:
        "Considered as beginners orchids they are the most easiest orchids to grow.Requires very less care compared to other species of orchids.",
      price: 12.0,
      rate: "4.5",
    },
    // {
    //   id: "3",
    //   image:
    //     "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRK0V8vKIug0vSariIqeb588njARnoVDAUvv9k17Crzhz2h2prm78qO-HtQiMiIvAhd",
    //   title: "Moth orchids",
    //   subtitle: "Cattleya",
    //   favorite: false,
    //   description:
    //     "Phalaenopsis, also known as moth orchids, is a genus of about seventy species of plants in the family Orchidaceae",
    //   price: 14.9,
    //   rate: "4",
    // },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/41awCaA0BLL.jpg",
      title: "Kalpataru Orchid",
      subtitle: "Dendrobium",
      favorite: false,
      description: "Dendrobiums grow well at a temperature range between 20-35 degrees Celsius and high humidity.",
      price: 29.9,
      rate: "4",
    },
    {
      id: "5",
      image:
        "https://www.thespruce.com/thmb/8CiZ1RZf-Bo18yEgLn71pA_W9p8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/miltonia-orchid-care-guide-5221547-hero-0512dc809f994a7893957b184da70e21.jpg",
      title: "Miltonia",
      subtitle: "Dendrobium",
      favorite: false,
      description: "Dendrobiums grow well at a temperature range between 20-35 degrees Celsius and high humidity.",
      price: 30.9,
      rate: "4",
    },
    {
      id: "6",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKxkEy8gVU71RZydASSGURr3evHLeETNLrBbE4n2aV0zF08ZTD",
      title: "Cymbidium",
      subtitle: "Cattleya",
      favorite: false,
      description:
        "Cymbidium, commonly known as boat orchids, is a genus of evergreen flowering plants in the orchid family Orchidaceae. Orchids in this genus are epiphytic.",
      price: 47.9,
      rate: "4",
    },
    {
      id: "7",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Oncidium_altissimum_%28Jacq.%29_Sw._-_Curtis_v._57_%281830%29_pl._2990.jpg",
      title: "Dancing-lady",
      subtitle: "Dendrobium",
      favorite: false,
      description:
        "Oncidium, abbreviated as Onc. in the horticultural trade, is a genus that contains about 330 species of orchids from the subtribe Oncidiinae of the orchid family",
      price: 15.0,
      rate: "4",
    },
    {
      id: "8",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Paphiopedilum_henryanum_Orchi_001.jpg",
      title: "Venus slipper",
      subtitle: "Dendrobium",
      favorite: false,
      description: "Dendrobiums grow well at a temperature range between 20-35 degrees Celsius and high humidity.",
      price: 18.6,
      rate: "4",
    }
  ],

  data1: [
    {
    id:'1',
    title: 'Taichung beauty',
    subtitle: 'Cattleya',
    weight: 120,
    rating: '5.0',
    price: 39,
    isTopOfTheWeek: true,
    image: 'https://i.pinimg.com/originals/25/13/3d/25133df91301e29bcd36eec3949009ff.jpg',
    color: 'pink',
    bonus: 'a pot',
    origin: 'Taiwan',

  },
  {
    id:'2',
    title: 'Young Min',
    subtitle: 'Cattleya',
    weight: 150,
    rating: '4.5',
    price: 29,
    isTopOfTheWeek: false,
    image: 'https://cdn.shopify.com/s/files/1/0382/3940/4076/products/933F6DD9-E739-4198-8C8F-E18560C4EA7B_250x250@2x.jpg',
    color: 'orange',
    bonus: 'a pot',
    origin: 'Thailand',

  },
  {
    id:'3',
    title: 'Hawaii Wedding Songs',
    subtitle: 'Cattleya',
    weight: 250,
    rating: '4.2',
    price: 49,
    isTopOfTheWeek: false,
    image: 'https://cdn11.bigcommerce.com/s-r26j4fi927/images/stencil/1280x1280/products/3589/4042/C._Hawaiian_Wedding_Song_Virgin_HCC_copy__15631.1654784280.jpg',
    color: 'white',
    bonus: 'No',
    origin: 'Taiwan',

  },
  {
    id:'4',
    title: 'White lady',
    subtitle: 'Phalaenopsis',
    weight: 200,
    rating: '5.0',
    price: 299,
    isTopOfTheWeek: true,
    image: 'https://res.cloudinary.com/ufn/image/upload/c_pad,f_auto,fl_progressive,h_500,w_445/mkxrvxkdaboxn6xjq5f4.jpg',
    color: 'white',
    bonus: 'a big pot',
    origin: 'Taiwan',

  },
  {
    id:'5',
    title: 'Pink secret',
    subtitle: 'Phalaenopsis',
    weight: 500,
    rating: '4.5',
    price: 199,
    isTopOfTheWeek: false,
    image: 'https://i.pinimg.com/originals/75/08/24/7508245c78cfe5bd288d5608b4d11e62.jpg',
    color: 'pink',
    bonus: 'no',
    origin: 'Taiwan',

  },
  {
    id:'6',
    title: 'Yellow Moth',
    subtitle: 'Phalaenopsis',
    weight: 150,
    rating: '4.2',
    price: 99,
    isTopOfTheWeek: false,
    image: 'https://theplantladysf.com/cdn/shop/products/image_3d172f07-c919-4acb-99be-55d83a722716.jpg',
    color: 'Yellow',
    bonus: 'Small orchid',
    origin: 'Vietnam',

  },
  {
    id:'7',
    title: 'Blue Spin',
    subtitle:'Dendrobium',
    weight: 250,
    rating: '5.0',
    price: 69,
    isTopOfTheWeek: true,
    image: 'https://live.staticflickr.com/65535/48630313466_592b1989d9_b.jpg',
    color: 'pink',
    bonus: 'a thin Orchid',
    origin: 'Vietnam',

  },
  {
    id:'8',
    title: 'Daerei',
    subtitle:'Dendrobium',
    weight: 300,
    rating: '4.5',
    price: 59,
    isTopOfTheWeek: false,
    image: 'https://orchidroots.com/static/utils/images/species/spc_000027949_000057578.jpg',
    color: 'white',
    bonus: 'a pot',
    origin: 'Thailand',

  },
  {
    id:'9',
    title: 'Thongchai Gold',
    subtitle:'Dendrobium',
    weight: 350,
    rating: '4.2',
    price: 19,
    isTopOfTheWeek: false,
    image: 'https://cdn.shopify.com/s/files/1/0659/0834/3004/files/Dendrobium-Thongchai-Gold-X-Dendrobium-Candy-Stripe-La-Foresta-Orchids-267.jpg',
    color: 'yellow',
    bonus: 'no',
    origin: 'Thailan',

  },],
  categories: [
    { label: "All", value: "all" },
    { label: "Dendrobium", value: "Dendrobium" },
    { label: "Cattleya", value: "Cattleya" },
    { label: "Phalaenopsis", value: "Phalaenopsis" },
    { label: "Coelogyne", value: "Coelogyne" },
    { label: "Vanda", value: "Vanda" },
    { label: "Cymbidium", value: "Cymbidium" },
  ]
};



const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('myData', jsonValue);
    console.log('Data stored successfully.');
  } catch (error) {
    console.log('Error storing data:', error);
  }
};

const retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    const retrievedData = JSON.parse(jsonValue);
    if (jsonValue !== null) {
      return retrievedData;
    } else {
      console.log('No data found.');
      return null;
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
    return null;
  }
};

const updateDataItem = async (updatedItem) => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    if (jsonValue !== null) {
      const retrievedData = JSON.parse(jsonValue);
      const updatedDataset = retrievedData.itemDataset.map((item) => {
        if (item.id == updatedItem.id) {
          return { ...item, ...updatedItem };
        }
        return item;
      });
      retrievedData.itemDataset = updatedDataset;
      const updatedJsonValue = JSON.stringify(retrievedData);
      await AsyncStorage.setItem('myData', updatedJsonValue);
      console.log('Data item updated successfully. ');
    } else {
      console.log('No data found.');
    }
  } catch (error) {
    console.log('Error updating data item:', error);
  }
};
const updateDataset = async (updatedItems) => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    if (jsonValue !== null) {
      const retrievedData = JSON.parse(jsonValue);
      const updatedDataset = retrievedData.itemDataset.map((item) => {
        const updatedItem = updatedItems.find((updated) => updated.id === item.id);
        if (updatedItem) {
          return { ...item, ...updatedItem };
        }
        return item;
      });
      retrievedData.itemDataset = updatedDataset;
      const updatedJsonValue = JSON.stringify(retrievedData);
      await AsyncStorage.setItem('myData', updatedJsonValue);
    } else {
      console.log('No data found.');
    }
  } catch (error) {
    console.log('Error updating data item:', error);
  }
};



export default {
  storeData,
  retrieveData,
  updateDataItem,
  updateDataset
};
