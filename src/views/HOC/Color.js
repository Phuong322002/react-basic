import React from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Color = (WrapperComponens) => {

  // props là những gì có trong component khi chúng ta gọi hàm: ví dụ ở đây là hàm Color
  return (props) => (
    <div style={{ color: getRandomColor() }}>
      <WrapperComponens {...props} />
    </div>
  );
};

export default Color;
