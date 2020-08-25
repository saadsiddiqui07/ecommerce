import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
        alt=""
      />

      {/* We will have products on the home page. */}
      <div className="home__row">
        <Product
          id={1}
          title="Lenovo Ideapad 330-15IKB-81DE014NIN"
          image="https://www.notebookcheck.net/uploads/tx_nbc2/LenovoIdeapad330-15IKB__1_.JPG"
          price={350}
          rating={3}
        />
        <Product
          id={2}
          title="Philips QT4011/15 corded & cordless Titanium blade Beard Trimmer)"
          image="https://images-na.ssl-images-amazon.com/images/I/51LrzvsyGxL._SL1000_.jpg"
          price={200}
          rating={4}
        />
        <Product
          id={3}
          title="Apple iPhone X"
          image="https://i1.wp.com/pcx.com.ph/wp-content/uploads/2018/03/CEL-APPLE-IPHONE-X-SLV-64GB-1.jpg?fit=600%2C571&ssl=1"
          price={500}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={4}
          title="Apple Ipod Shuffle 2gb Blue"
          image="https://www.dialstar.eu/2057-large_default/apple-ipod-shuffle-2gb-mp3-2go-bleu.jpg"
          price={150}
          rating={4}
        />
        <Product
          id={5}
          title="Xiaomi RedmiBook 14"
          image="https://i.gadgets360cdn.com/products/large/redmibook-14-db-663x800-1564037008.jpg"
          price={700}
          rating={5}
        />
      </div>

      {/* We will have products on the home page. */}
      <div className="home__row">
        <Product
          id={6}
          title="Baby Kids Kitchen Toys Set"
          image="https://5.imimg.com/data5/SU/CQ/MY-45782465/baby-kids-kitchen-toys-set-500x500.jpg"
          price={350}
          rating={3}
        />
        <Product
          id={7}
          title="boAt Airdopes 281 True Wireless Ear-Buds with Bluetooth"
          image="https://images-na.ssl-images-amazon.com/images/I/71xIKNfMeFL._SL1500_.jpg"
          price={200}
          rating={4}
        />
        <Product
          id={8}
          title="Kylie Skin Set."
          image="https://cdn.shopify.com/s/files/1/0066/8719/5183/products/1_0015_kylie-skin-set.jpg?v=1596054408"
          price={500}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
