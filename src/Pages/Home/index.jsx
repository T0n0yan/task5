import React from "react";
import "./style.scss";
import ProductTitle from "../../Components/Product Title/index";
import ThierdListComponent from "./ThirdHomeContainer";
import SecondHomeContainer from './SecondHomeContainer/index';
import { thirdData } from "./ThirdHomeContainer/thierdData";
import { secondData } from './SecondHomeContainer/secondData';

function Home() {
  return (
    <div className="home">
      <div className="secondList G-Container ">
        <ProductTitle
          title="Categories of The Month"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <div className="secondListItemContainer G-justify-space-between ">
          {secondData.map(el => <SecondHomeContainer items={el} />)}
        </div>
      </div>

      <div className="thirdList G-Container">
        <ProductTitle
          title="Featured Product"
          description="Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        />
        <div className="thirdListItemContainer">
          {thirdData.map((el) => (
            <ThierdListComponent post={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
