import Button from "@components/Button";
import { InputStyle, LabelStyle } from "@components/Style.style";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = () => {
    preventDefault();

    history.back();
  };

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            로그인
          </h2>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <LabelStyle htmlFor="email">이메일</LabelStyle>
            <InputStyle
              id="user-email"
              type="email"
              placeholder="E-mail을 입력해주세요."
              value={email}
              // onChange={validation}
              required
            />
          </div>
          <div className="mb-4">
            <LabelStyle htmlFor="password">비밀번호</LabelStyle>
            <InputStyle
              id="user-pw"
              type="password"
              placeholder="비밀전호를 적어주세요"
              value={pw}
              // onChange={validation}
              required
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
            <a
              href="#"
              className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline"
            >
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              로그인
            </Button>
            <a
              href="/user/signup"
              className="ml-8 text-gray-800 hover:underline"
            >
              회원가입
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
