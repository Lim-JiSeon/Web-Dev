# JSX

## JSX 란?
> <b>JSK</b> : JavaScript를 확장한 문법으로, JavaScript의 모든 기능이 포함되어 있다.<br> 
> React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 된다고 생각한다.<br> 
> 또한 React가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해준다.<br>
> ```js
> const element = <h1>Hello, world!</h1>;
> ```

## JSK 표현식
* JSK에 표현식 포함하기 가능
  > 아래 예시에서는 name이라는 변수를 선언한 후 중괄호로 감싸 JSX 안에 사용<br>
  > JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있다.<br>
  > ```js
  > const name = 'Josh Perez';
  > const element = <h1>Hello, {name}</h1>;
  >
  > ReactDOM.render(
  >   element,
  >   document.getElementById('root')
  > );
  > ``` 
  > 
  > 아래 예시에서는 JavaScript 함수 호출의 결과인 formatName(user)을 ```<h1>``` 엘리먼트에 포함했다.<br>
  > ```js
  > function formatName(user) {
  >   return user.firstName + ' ' + user.lastName;
  > }
  >
  > const user = {
  >   firstName: 'Harper',
  >   lastName: 'Perez'
  > };
  >
  > const element = (
  >   <h1>
  >     Hello, {formatName(user)}!
  >   </h1>
  > );
  >
  > ReactDOM.render(
  >   element,
  >   document.getElementById('root')
  > );
  > ```
  
* JSK도 표현식 중 하나
  > 컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식된다.<br>
  > 즉, JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있다.<br>
  > ```js
  > function getGreeting(user) {
  >   if (user) {
  >     return <h1>Hello, {formatName(user)}!</h1>;
  >   }
  >   return <h1>Hello, Stranger.</h1>;
  > }
  > ```

## JSK 속성
  * 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.
    ```js
    const element = <a href="https://www.reactjs.org"> link </a>;
    ```
  * 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입할 수도 있다.
    ```js
    const element = <img src={user.avatarUrl}></img>;
    ```
    <i>따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용) 중 하나만 사용하고, 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안된다.</i>
  
  * JSX 태그는 자식을 포함할 수 있다.
    ```js
    const element = (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
    );
    ```
    
  * 태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아주어야 한다.
    ```js
    const element = <img src={user.avatarUrl} />;
    ```
  * JSX는 주입 공격을 방지한다. 
    [자세한 설명](https://ko.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)
  
    
## JSK 객체
  * JSK는 객체를 표현한다.
    > ```js
    > const element = (
    >   <h1 className="greeting">
    >     Hello, world!
    >   </h1>
    > );
    > ```
    >
    >```js
    >const element = React.createElement(
    >   'h1',
    >   {className: 'greeting'},
    >   'Hello, world!'
    > );
    >```
  * Babel은 JSX를 React.createElement() 호출로 컴파일한다.
  * React.createElement()는 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행하며, 기본적으로 다음과 같은 객체를 생성한다.
    > 이러한 객체를 “React 엘리먼트”라고 하며, <br>
    > 화면에서 보고 싶은 것을 나타내는 표현이라 생각하면 된다. <br>
    > React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용한다.<br>
    > ```js
    > // 주의: 다음 구조는 단순화되었습니다
    > const element = {
    >   type: 'h1',
    >   props: {
    >     className: 'greeting',
    >     children: 'Hello, world!'
    >   }
    > };
    > ```




