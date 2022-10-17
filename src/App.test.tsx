import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // render 함수는 DOM에 컴포넌트를 렌더링하는 함수이다. 인자로 렌더링할 react 컴포넌트가 들어간다.
  const { getByText } = render(<App />);
  // 위와 같이 쿼리함수와 각 유틸리티 함수를 담고있는 객체를 리턴하지만, 추천되지않는 방법이다.
  // 소스코드가 복잡해지기 때문이다. 처음 만들어진 것처럼 screen 객체 사용을 권장한다.
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
