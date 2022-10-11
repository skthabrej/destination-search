import DestinationSearch from './Components/DestinationSearch'

import './App.css'

const initialDestinationsList = [
  {
  id: 1,
  name: 'Dark',
  imageUrl: "https://i.ibb.co/YWCvWvB/1605485.jpg"
},
{
  id: 2,
  name: 'Squid game',
  imageUrl: "https://i.ibb.co/grcyrrk/squid-game-main-promo.webp"
},
{
  id: 3,
  name: 'Stranger Things',
  imageUrl: "https://i.ibb.co/pLWqv7B/1271617.jpg"
},
{
  id: 4,
  name: 'Money heist',
  imageUrl: "https://i.ibb.co/1zt7zt3/1119514.jpg"
},
{
  id: 5,
  name: 'Bridgerton',
  imageUrl: "https://i.ibb.co/kX5FZHC/8333334.jpg"
},
{
  id: 6,
  name: 'The Witcher',
  imageUrl: "https://i.ibb.co/6YCTv5s/2158402.jpg"
},
{
  id: 7,
  name: 'Lucifer',
  imageUrl: "https://i.ibb.co/cwTXLR2/1092351.jpg",
},
{
  id: 8,
  name: '13 reasons why',
  imageUrl: "https://i.ibb.co/khkMLLG/1268955.jpg"
}
]

const App = () => (
  <DestinationSearch initialDestinationsList={initialDestinationsList} />
)

export default App