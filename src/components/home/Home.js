import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://cdn.clickitornot.com/wp-content/uploads/2020/03/Amazon-prime-video.jpg"
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
          id={9}
          title="Buy 27-inch iMac."
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-og-202008?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1594849639000"
          price={1599}
          rating={5}
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
          image="https://cdn.shopify.com/s/files/1/1133/5964/products/1_0015_kylie-skin-set_1296x_1899a59b-b5ab-4b44-9220-205fa8d40572.jpg?v=1588816764"
          price={500}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={12}
          title="Kids Study Table and Chair in Green colour"
          image="https://ii1.pepperfry.com/media/catalog/product/k/i/1100x1210/kids-study-table---chair-in-green-colour-by-parin-kids-study-table---chair-in-green-colour-by-parin-afl778.jpg"
          price={80}
          rating={4}
        />

        <Product
          id={13}
          title="48-Hour Start-Up: From Idea to Launch in 1 Weekend"
          image="https://images-eu.ssl-images-amazon.com/images/I/51gaT2pKSGL._AC_UL474_SR474,450_.jpg"
          price={8}
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
          id={10}
          title="Z6 Smart Watch Bluetooth 3.0 Support SIM TF Card Camera Call Heart Rate Pedometer Sport Modes Smartwatch."
          image="https://image.made-in-china.com/2f0j00pPvUVrlKhWoB/Z6-Smart-Watch-Bluetooth-3-0-Support-SIM-TF-Card-Camera-Call-Heart-Rate-Pedometer-Sport-Modes-Smartwatch.jpg"
          price={99}
          rating={5}
        />

        <Product
          id={11}
          title="Philips Juicer Extractor HR1811"
          image="https://www.okdam.com/public/images/upload/product/philips-hr1811-71-juice-extractor.jpg"
          price={120}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
