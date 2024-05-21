"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

//-> router.push
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기 하면 Login페이지로, 다시 i/flow/login으로 무한반복

//->router.replace
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기 하면 로그인 보다 더 전으로 이동 , 아예 대체를 해주기 때문에 이렇게 되는 것.
//이동 후 이전 히스토리를 지워준다. 아예 대체하기 때문.
//localhost:3000 -> localhost:3000/i/flow/login
