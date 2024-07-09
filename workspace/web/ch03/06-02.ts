// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)

(() => {
  //   type User = {
  //     [Prop in UserField]: string;
  //   };

  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  //   type UserField = "id" | "name" | "address" | "phone";
  //keyof : 객체로 정의된 타입의 모든 속성을 유니언 타입으로 반환.
  type UserField = keyof User;

  type OpticalUser = {
    [Prop in UserField]?: string | undefined;
  };

  const dongurami: OpticalUser = {
    id: "1",
    name: "동그라미",
    address: "서울시",
    phone: "01029443793",
  };
  console.log(dongurami);
})();
