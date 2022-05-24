import React from 'react';
import UploadImage from '../components/UploadImage';
import Navbar from '../components/Navbar/Navbar';
import DisplayImages from '../components/DisplayImages';

function Home() {
    return (
      <div>
        <Navbar />
        <h2 className="title">Mint your NFT</h2>
        
        <DisplayImages/>
      </div>
    );
}

export default Home;