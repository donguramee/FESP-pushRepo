"use strict";
// Readonly 유틸리티 타입
(() => {
    const todo1 = {
        title: "할일 1",
        content: "내용 1",
    };
    console.log(todo1);
    const todo2 = {
        //여러번 재활용해야한다면 함수형으로 만들어 놓는게 편함
        title: "할일 2",
        content: "내용 2",
    };
    console.log(todo2);
    // todo2.title = "수정"; // error
    const todo3 = {
        //값을 바로 만들어서 쓰는 방법 -> 한번만쓸때 추천
        title: "할일 3",
        content: "내용 3",
    };
    console.log(todo3);
    // todo3.title = '수정'; // error
})();
