"use strict";
// 타입 단언
//as를 쓸짼 구구절절 주석으로 설명을 못쓸것이면 쓰지마라
//강제도 "20"을 number메소드를 사용하고싶어서 as를 사용하거나 할때 사용
//as키워드를 사용해서 타입을 지정하면 타입스크립트 컴파일러가 타입검사를 수행하지 않음
//제너릭 문법으로 하는게 더 나음
(() => {
    function getMsg(msg) {
        //리턴타입은 any
        return msg;
    }
    const msg1 = getMsg(123.456);
    console.log(msg1.toFixed());
    const msg2 = getMsg("Hello");
    console.log(msg2.toUpperCase());
})();
