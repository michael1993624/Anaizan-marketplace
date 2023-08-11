import React, { memo } from "react";
import "./InlineLoader.scss";

const Dot = (delay) => {
  return <div className="Dots" />;
};

export const InLineLoader = memo((props) => {
  return (
    <div className="Container">
      <Dot delay=".8s" />
      <Dot delay=".7s" />
      <Dot delay=".6s" />
      <Dot delay=".5s" />
      <Dot delay=".4s" />
      <Dot delay=".3s" />
      <Dot delay=".2s" />
      <Dot delay=".1s" />
    </div>
  );
});
