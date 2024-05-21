export default function Default() {
  return null;
}

//빈 페이지여야 하기 때문에 page.tsx 보다는 default.tsx로 사용하는게 적절.
//패레럴 라우트가 필요없을 때. 또는 패레럴 라우트의 기본값으로 생각.
//주소가 localhost:3000 일 때 children -> page.tsx, modal -> @modal/default.tsx
//주소가 localhost:3000/i/flow/login 일 때 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
