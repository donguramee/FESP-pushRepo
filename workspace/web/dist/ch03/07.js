"use strict";
// 변수와 객체의 타입 추론
(() => {
    //기본 데이터 타입의 변수 타입을 추론에 의지(권장)
    const name = "데이지"; //"데이지"(string), 리터럴 타입: 값 자체를 타입으로 사용
    let name2 = "데이지"; //type은 string
    const age = 20; //type은 age
    let age2 = 20; // type은 age
    //기본 데이터 타입을 명시적으로 지정할 경우
    let address;
    address = "서웋시";
    address = 50;
    address = true;
    console.log(name, age, address);
    const todo1 = {
        title: "할일1",
        content: "내용 1",
    };
    const todo2 = {
        title: "할일2",
        content: "내용 2",
    };
    function printTodo(todo) {
        console.log(todo.title, todo.content);
    }
    printTodo(todo1);
    printTodo(todo2);
})();
