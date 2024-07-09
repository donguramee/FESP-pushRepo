// 속성 값으로 체크

(() => {
  interface User {
    name: string;
    age: number;
    admin: false;
  }
  interface AdminUser {
    name: string;
    admin: true;
    level: 1 | 2 | 3;
  }

  const user1: User = {
    name: "동그라미",
    age: 30,
    admin: false,
  };

  const user2: AdminUser = {
    name: "박재웅",
    admin: true,
    level: 2,
  };

  function helloUser(user: User | AdminUser) {
    if (user.admin === true) {
      console.log(`안녕하세요. 레벨${user.level} ${user.name} 관리자님`);
    } else {
      console.log(`안녕하세요. ${user.name} 회원님`);
    }
  }

  helloUser(user1);
  helloUser(user2);
})();
