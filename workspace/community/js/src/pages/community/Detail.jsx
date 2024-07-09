import React from "react";
import CommentList from "./CommentList";

function Detail() {
  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <div className="font-semibold text-xl">
          제목 : 좋은 소식이 있습니다.
        </div>
        <div className="text-right text-gray-400">작성자 : 제이지</div>
        <div className="mb-4">
          <div>
            <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
              좋은 소식을 가지고 왔습니다.
              <br />
              오늘 드디어 최종 면접을 합니다.
              <br />
              많이 응원해 주세요^^
            </pre>
          </div>
          <hr />
        </div>
        <div className="flex justify-end my-4">
          <button
            type="button"
            className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            onClick={() => history.back()}
          >
            목록
          </button>
          <button
            type="button"
            className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            onClick={() => (location.href = "/info/1/edit")}
          >
            수정
          </button>
          <button
            type="button"
            className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            onClick={() => (location.href = "/info")}
          >
            삭제
          </button>
        </div>
      </section>
      <CommentList />
    </main>
  );
}

export default Detail;
