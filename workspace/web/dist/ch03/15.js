"use strict";
// 속성 값으로 체크
(() => {
    const user1 = {
        name: "동그라미",
        age: 30,
        admin: false,
    };
    const user2 = {
        name: "박재웅",
        admin: true,
        level: 2,
    };
    function helloUser(user) {
        if (user.admin === true) {
            console.log(`안녕하세요. 레벨${user.level} ${user.name} 관리자님`);
        }
        else {
            console.log(`안녕하세요. ${user.name} 회원님`);
        }
    }
    helloUser(user1);
    helloUser(user2);
})();
