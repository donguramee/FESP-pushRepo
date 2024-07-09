// 함수가 null을 리턴할 수 있을 경우

(() => {
  const a = document.querySelector<HTMLAnchorElement>(
    'a[href="dist/ch03/11.js"]'
  );
  //Non-null assertion(!) null이아닌 확신 연산자??
  //a.innerHTML += "클릭";

  if (a !== null) {
    //타입가드
    a.innerHTML += "클릭";
  }
})();
