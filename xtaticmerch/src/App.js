import Directory from './components/directory/directory.component'

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "Clothing", 
      "imageUrl": "https://i.ibb.co/WyMtzgL/Clothing.png"
    },
    {
      "id": 2,
      "title": "Stickers",
      "imageUrl": "https://i.ibb.co/HCh6p6n/Stickers.png"
    },
    {
      "id": 3,
      "title": "Art",
      "imageUrl": "https://i.ibb.co/WssTWsQ/art.png"
    },
    {
      "id": 4,
      "title": "3D Prints",
      "imageUrl": "https://i.ibb.co/tqq3yRj/3dprints.png"
    },
    {
      "id": 5,
      "title": "Jewelry",
      "imageUrl": "https://i.ibb.co/S6cLz0n/3dprintjewelry.png/"
    },
  ];

  return <Directory categories={categories} />;
  
};

export default App;
