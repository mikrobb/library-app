import React from "react";

export default function Books({ info }) {
  return (
    <>
      <div>{info.volumeInfo.title}</div>
      <div></div>
    </>
  );
}
