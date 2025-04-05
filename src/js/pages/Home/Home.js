import React from 'react'
import Header from '../../components/Header';
import FeaturedProducts from '../../../FeaturedProducts/FeaturedProducts';
import Footer from '../../../Footer/Footer';
const Home  = () => {

    const products = [
        {
          "name": "Pull Back Dinosaur Car Toy",
          "image": "https://images.meesho.com/images/products/399943319/smssl_400.webp",
          "category": "toys",
          "description": "Fun and colorful dinosaur toy car with pull-back action, perfect for toddlers."
        },
        {
          "name": "Educational Wooden Puzzle Blocks",
          "image": "https://images.meesho.com/images/products/418523421/ez1ri_400.webp",
          "category": "toys",
          "description": "Brightly colored wooden puzzle set that helps kids develop problem-solving skills."
        },
        {
          "name": "Remote Control Sports Car",
          "image": "https://images.meesho.com/images/products/266492160/7eo7j_400.webp",
          "category": "toys",
          "description": "High-speed RC sports car with a sleek design, ideal for kids who love racing."
        },
        {
          "name": "Soft Plush Teddy Bear",
          "image": "https://images.meesho.com/images/products/460703367/vghhq_400.webp",
          "category": "toys",
          "description": "Cuddly teddy bear made from ultra-soft fabric, a perfect bedtime companion."
        },
        {
          "name": "Stacking Ring Tower",
          "image": "https://images.meesho.com/images/products/423794568/9e8y1_400.webp",
          "category": "toys",
          "description": "Classic stacking toy with colorful rings to enhance baby’s motor skills."
        },
        {
          "name": "Motivational Self-Help Book",
          "image": "https://images.meesho.com/images/products/160644404/yjxld_400.webp",
          "category": "books",
          "description": "Inspiring book filled with strategies to boost self-confidence and achieve goals."
        },
        {
          "name": "Children's Story Book Collection",
          "image": "https://images.meesho.com/images/products/229907738/ldhsu_400.webp",
          "category": "books",
          "description": "A delightful collection of illustrated stories for young readers."
        },
        {
          "name": "Science Encyclopedia for Kids",
          "image": "https://images.meesho.com/images/products/244361228/xovjo_400.webp",
          "category": "books",
          "description": "Packed with facts and fun activities to spark curiosity in young scientists."
        },
        {
          "name": "Fiction Novel - Mystery Thriller",
          "image": "https://images.meesho.com/images/products/388023569/fdo0i_400.webp",
          "category": "books",
          "description": "A gripping mystery novel that keeps you on the edge of your seat till the last page."
        },
        {
          "name": "Art and Craft Activity Book",
          "image": "https://images.meesho.com/images/products/328443764/nyiiy_400.webp",
          "category": "books",
          "description": "Interactive book with creative activities and ideas for young artists."
        },
        {
          "name": "LED Glass Dome Rose Gift",
          "image": "https://images.meesho.com/images/products/334324404/trjpn_400.webp",
          "category": "gifts",
          "description": "Romantic glass dome rose with LED lights – a beautiful gift for special occasions."
        },
        {
          "name": "Handmade Greeting Card Set",
          "image": "https://images.meesho.com/images/products/478394836/8ujvg_400.webp",
          "category": "gifts",
          "description": "Set of handcrafted cards perfect for birthdays, anniversaries, and festivals."
        },
        {
          name: "Personalized Name Keychain",
          image: "https://images.meesho.com/images/products/299950497/z1niq_400.webp",
          category: "gifts",
          description: "Custom name keychain made from durable acrylic – great for gifting."
        }
      ]
  
return (
    <div>
        {/* header section */}
        <Header/>
        <FeaturedProducts products={products} />
        <Footer/>
    </div>
)
}

export default Home;