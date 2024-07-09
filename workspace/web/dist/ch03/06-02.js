"use strict";
// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)
(() => {
    //   type User = {
    //     [Prop in UserField]: string;
    //   };
    const dongurami = {
        id: "1",
        name: "동그라미",
        address: "서울시",
        phone: "01029443793",
    };
    console.log(dongurami);
})();
