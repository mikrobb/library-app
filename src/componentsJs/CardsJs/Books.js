import React from "react";
import "../../componentsCss/CardsCss/Books.css";

export default function Books({ info }) {
  console.log(info.saleInfo.listPrice);
  return (
    <div className="containerBook">
      <div>
        <img
          className="imgBook"
          src={info.volumeInfo.imageLinks.smallThumbnail}
          alt=""
        />
        <div className="titleBook">{info.volumeInfo.title}</div>
        <div className="authorBook">{info.volumeInfo.publisher}</div>
        <div className="priceBook">
          {!info.saleInfo.listPrice
            ? info.saleInfo.saleability
            : info.saleInfo.listPrice.amount +
              " " +
              info.saleInfo.listPrice.currencyCode}
        </div>
      </div>
      <div>
        <div className="btnView">View more</div>
      </div>
    </div>
  );
}
