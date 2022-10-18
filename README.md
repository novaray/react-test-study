# inflearn 따라하며 배우는 리액트 테스트 교육 정리
https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8/dashboard

---

test(it)를 지정할 때 skip, only등을 이용해서 해당 테스트를 건너뛸지, 그 해당하는 케이스만 진행할지도 고를 수 있다.
- `test('') // 기본`
- `test.only('') // 해당 테스트만 진행`
- `test.skip('') // 해당 테스트를 건너 뜀`

그 외에도 todo, each, concurrent가 있다.

### 쿼리 함수
`getByTestId`는 사용하기는 편하지만 이상적이지는 않은 방법이다.  
왜냐하면 우선순위가 가장 마지막이기 때문이다. 개발자만 볼수있을 뿐이지, 유저는 볼 수 없기 때문이다.  
role로도 할 수 없고 text로도 접근이 불가능할 때 사용하는 방법이다.   
우선순위는 다음과 같다.
1. 모든 사람이 접근할 수 있는 쿼리(Queries Accessible to Everyone)
   1. getByRole
   2. getByLabelText
   3. getByplaceHolderText
   4. getByText
   5. getByDisplayValue
2. SemanticQuries
   1. getByAltText
   2. getByTitle
3. TestIds
   1. getByTestId

> https://testing-library.com/docs/queries/about#priority

### event
`fireEvent`를 사용하는 것보다 `userEvent`를 사용하는 것이 더 좋다.  
`userEvent`는 `fireEvent`를 사용해서 만들어졌다. `userEvent`의 내부 코드를 보면 `fireEvent`를 사용하면서 엘리먼트의 타입에 따라서 `Label`을 클릭 했을 때,  
`checkbox`, `radio`를 클릭했을 때 그 엘리먼트 타입에 맞는 더욱 적절한 반응을 보여준다.  
`fireEvent`는 어떠한 엘리먼트의 타입이든 똑같은 반응을 보여주는 데 반면, `userEvent`는 엘리먼트의 타입에 따라서 다른 반응을 보여준다.  
예를 들어서 `fireEvent`로 버튼을 클릭하면 `fireEvent.click(button)` 버튼이 `focus`되지 않는다.  
그러나, `userEvent.click(button)` 버튼은 `focus`된다.  
이렇게 실제 사용하는 유저가 보기에 실제 버튼을 클릭하는 행위가 더 잘 표현되기에 `userEvent`를 사용하는 게 더 추천되는 방법.

> https://testing-library.com/docs/ecosystem-user-event/
