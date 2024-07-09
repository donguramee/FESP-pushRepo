"use strict";
// 함수의 타입 추론
(() => {
    //매개변수 타입을 지정하지 않으면 num은 추론을 못해 any타입이 된다.
    function add10(num) {
        //num=any
        return num + 10;
    }
    function add20(num = 20) {
        //num=any
        return num + 10;
    }
    //리턴할 수 있는 모든 케이스를 다 계산해서 최대한 좁은 범위의 타입으로 추론
    //좁은 범위의 타입과 넓은 범위의 타입이 같이 있을 경우 서로 호환된다면 넓은 범위의 타입에 포함
    function checkNumber(x, y) {
        let z;
        if (x === 10) {
            return "x는 10";
        }
        else if (x > y) {
            return "큰 수: " + x;
        }
        else if (x > 5) {
            return 5;
        }
    }
    const resultValue = checkNumber(10, 20);
    console.log(resultValue);
    const result = add10(100.12345);
    const result2 = add10(100.12345);
    console.log(result);
    console.log(result2);
})();
