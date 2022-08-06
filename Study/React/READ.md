# React Study

## Content
1. [react-app](#create-react-app)
    - 
    - [React와 React 컴포넌트의 역할과 정의](#react와-react-컴포넌트의-역할과-정의)
    - [SW를 만드는 과정인 코딩, 실행, deploy](#sw를-만드는-과정인-코딩-실행-deploy)
    - [React 개발환경을 설치하고 개발환경을 구축](#react-개발환경을-설치하고-개발환경을-구축)
    - [npm을 이용하여 create-react-app을 설치 / npm과 npx의 차이](#npm을-이용하여-create-react-app을-설치__npm과-npx의-차이)
    - [create-react-app을 이용하여 개발환경을 구축](#create-react-app을-이용하여-개발환경을-구축)
    - [React에서 제공하는 샘플 웹앱을 실행, 종료](#react에서-제공하는-샘플-웹앱을-실행하고-종료)


2. [react Component](#react_component)
    -
    - [리액트의 디렉토리 구조를 이해, 이를 기반으로 파일수정](#디렉토리의-구조-이해-및-파일수정)
    - [CSS를 수정하여 컴포넌트의 디자인을 변경](#css를-수정하여-컴포넌트의-디자인을-변경)
    - [deploy 이해, create-react-app을 통한 리액트 앱 배포](#deploy-이해_리액트-앱-배포)
    - [리액트 필요성](#리액트-필요성)
    - [컴포넌트 만들기(1)](#컴포넌트-만들기_1)
    - [컴포넌트 만들기(2)](#컴포넌트-만들기_2)


3. [state&props](#state-props)
    -
    - [props 이해 및 활용](#props-이해)
    - [컴포넌트를 파일로 쪼개어 정리정돈하기](#컴포넌트를-파일로-쪼개어-정리정돈하기)
    - [state와 props를 분리](#state-소개)
    - [state를 사용하는 법을 알고 상위 컴포넌트의 state 값을 하위 컴포넌트의 props 값으로 전달](#state-값을-하위-컴포넌트의-props로-전달)
    - [key를 통해 식별자를 설정 및 상위 컴포넌트의 state 값을 하위 컴포넌트에 주입하여 자동으로 데이터를 변경](#key-설정-및-자동으로-데이터-변경)


4. [react-event](#react_event)
    -
    -

5. [react-use](#react_use)
    -
    -

6. [redux](#redux)
    - 
    - [redux 소개](#redux-소개)
    - [store & render & subscribe](#store-render-subscribe)
    - [action & reducer & dispatcher & render](#action-reducer-dispatcher-render)
    
7. [redux basic](#redux_basic)
    -
    -
    




# create-react-app

## React와 React 컴포넌트의 역할과 정의
### keyword
<p><b>#React  #Component</p></b>
  
- React
  > "React" 는 facebook.com의 UI를 더 잘 만들기 위해서 페이스북에서 만든 Javascript UI 라이브러리다.<br>
  > 사용자 정의 태그를 만들어주는 여러가지 기술 중 하나이다.

- Component  
  > 리액트에서 사용자가 정의해서 태그를 만드는 것을 <b>사용자 정의 태그</b>라고 하지 않고 <b>컴포넌트</b>라고 부른다.<br>
  > 가독성을 높일 수 있으며, 재사용성이 높아진다.<br>
  > 유지보수가 훨씬 더 편리해진다.<br>

<br><br>

## SW를 만드는 과정인 코딩 실행 deploy
### keyword
<p><b>#Coding  #Run  #Deploy</p></b>
  
- Coding
  > 개발환경을 세팅하고 어느 부분의 코드를 바꿔야되는가 살펴보는 것을 말한다.<br>

- Run  
  > 작성한 코드를 실행해서 결과를 보는 것을 말한다.<br>

- Deploy
  > 모든 작업이 끝난 다음에 최종적으로 사용자(고객)에게 전달하는 행위를 말한다.<br>

<br><br>

## React 개발환경을 설치하고 개발환경을 구축
### keyword
<p><b>#React 개발환경  #개발환경 종류  #npm</p></b>
  
- 개발환경 종류
  > <b>Online Playgrounds</b> : CodeSandbox는 온라인상에서 리액트 애플리케이션을 구현해 볼 수 있는 사이트 중 하나다.<br>
  > <b>Add React to a Website</b> : 이미 웹 사이트를 가지고 있다면 그 웹 사이트를 처음부터 끝까지 리액트 앱으로 만드는 것이 아니라 부분적으로 리액트 기능을 추가하고 싶을 때 사용하는 옵션이다.<br>
  > <b>Create a New React App</b> : Tool chain이라는 것들이 있다.<br>
  > <b>Tool Chain</b> : 리액트로 앱을 개발할 때 목표를 달성하기 위해서 필요한 여러가지 개발환경, 도구 등을 잘 모아서 한번에 제공해주는 굉장히 편리한 도구들을 말한다.<br>

- React 개발환경
  > <b>create-react-app</b> : 리액트가 제공하는 Tool Chain 중에서 하나로, 설치방법에는 npx와 npm 2가지가 있다.<br>
  > 명령어 : "npx create-react-app my-app"<br>
  > <b>npm</b> : Node.js 라고 하는 기술을 이용해서 만들어진 여러가지 앱들을 명령어 환경에서 아주 손쉽게 설치할 수 있도록 도와주는 도구를 말한다.<br>

- npm
  > 모든 작업이 끝난 다음에 최종적으로 사용자(고객)에게 전달하는 행위를 말한다.<br>

<br><br>

## npm을 이용하여 create-react-app을 설치__npm과 npx의 차이
### keyword
<p><b>#npm  #npx  #create-react-app</p></b>
  
- create-react-app
  > npm을 설치할 때에는 Node.js 라는 프로그램을 컴퓨터에 설치하면 된다.<br>
  > Node.js 다운로드 시 두가지 종류의 버전이 있는데, "LTS" 라고 되어있는 것은 안정화된 버전, "current" 라고 되어 있는 것은 가장 최신 버전을 의미한다.<br>
  > <b>Create a New React App</b> : Tool chain이라는 것들이 있다.<br>
  > npm 설치확인방법은 cmd에 <b>"np -v"</b> 라는 명령어를 입력했을 때 숫자가 나온다면 성공적으로 Node.js와 npm을 설치한 상태이다.<br>
  > create-react-app 설치방법은 cmd에 <b>npm install -g create-react-app</b>명령어를 통해 설치한다.<br>
  > 에러가 발생할 경우 cmd에 <b>sudo npm install -g create-react-app</b>명령어를 이용한다.<br>
  > create-react-app 설치확인방법은 cmd에 <b>create-react-app -V</b>명령어를 입력한다.<br>

- npm
  > npx와 반대라고 생각하면 된다.<br>
  > 한번 설치해서 사용하면 다시 설치할 필요없이 계속 사용할 수 있다.<br>

- npx
  > 공식메뉴얼에서는 "npx" 라는 도구를 이용해서 설치하라고 되어있다.<br>
  > 명령어 : <b>npx create-react-app</b><br>
  > 프로그램을 임시로 설치해서 딱 한번만 실행시키고 지우는 프로그램이다.<br>
  > 컴퓨터의 공간을 낭비하지 않는다.<br>
  > 실행할 때마다 다운로드를 새로 받기 때문에 항상 최신상태이다.<br>

<br><br>

## create-react-app을 이용하여 개발환경을 구축
### keyword
<p><b>#개발환경 구축</p></b>
  
- 개발환경 구축
  > 1. cmd에서 cd [디렉토리 경로]를 통해 설치하고자하는 디렉토리로 이동한다.<br>
  > 2. 명령어를 입력한다.<br>
  > 명령어 : <b>"create-react-app . "</b><br>

<br><br>

## React에서 제공하는 샘플 웹앱을 실행하고 종료
### keyword
<p><b>#npm run start</p></b>
  
- npm run start
  > 명령어 : <b>" npm run start"</b><br>
  > 실행을 종료하고 싶을 때 : terminal에서 <b>"ctrl + C "</b><br>

<br><br><br><hr>




# react_Component

## 디렉토리의 구조 이해 및 파일수정
### keyword
<p><b>#Directory 구조</p></b>
  
- Directory 구조
  > 크게 <b>"src"</b>와 <b>"public"</b> 디렉토리로 나눌 수 있으며, public 디렉토리 안에는 <b>"index.html"</b>이 있다.<br>
  > create-react-app은 리액트를 통해 만들어낸 컴포넌트들을 id가 root인 태그 안에 들어가도록 설정했다.<br>
    ```html
    <div id="root"></div>
    ```
  > root 안에 들어가는 컴포넌트들은 <b>"src", 즉 source라고 되어 있는 디렉토리 안에 있는 파일</b>들을 수정해서 만들 수 있다.<br>
  > entry 파일은 "index.js" 파일로 주목해야 할 코드는 다음과 같다.<br>
  ```javascript
    ReactDOM.render( <APP/> , document.getElementById('root') );
  ```
  > 이 root가 의미하는 것은 index.html 파일에서 본 id가 root인 태그로, 앞의 <App/>이 리액트를 통해 만든 사용자 정의 태그 즉 <b>컴포넌트</b>이다.<br>
  ```javascript
    import App from './App';
  ```
  > create-react-app이 sample로 만든 <App/> 컴포넌트의 실제 구현은 "import"를 통해 불러온 scr 안의 <b>App.js 파일</b>이다.<br>

- 컴포넌트 생성 방법
  > 반드시 리액트는 하나의 태그 안 쪽에 나머지 태그들이 있어야 한다.<br>
  > function type<br>

  ```javascript
    import React from 'react';
    import './App.css';
    function App() {
        return (
            <div className="App">

            </div>
        );
    }
    export default App;
  ```
        
  > class type<br>

  ```javascript
    import React { Component } from 'react';
    import './App.css';

    class App extends Component {
        render() {
            return (
                <div className="App">

                </div>
            );
        }
    }
    export default App;
  ```

<br><br>

## CSS를 수정하여 컴포넌트의 디자인을 변경
### keyword
<p><b>#css</p></b>
  
- css
  > index.js 파일에 "index.css"라는 파일이 있는데 이 파일을 수정하면 된다.<br>
  > import 뒤의 App이라는 이름과 컴포넌트 이름 App은 같아야 하며, 이 조건을 만족하면 수정 가능하다.<br>
  > 하지만 import App from './App' 부분의 './App'은 변경하면 안되는데, 이 부분은 <b>파일의 이름</b>을 적는 부분으로 App.js를 의미하기 때문이다. js가 생략되어 표기된다.<br>
    ```javascript
    import App from './App';

    ReactDOM.render(<App/>,document.getElementById('root'));
    ```
  > App.js에 있는 이 코드는 App.js 안에 있는 react의 컴포넌트가 로드되었을 때 App.css도 로드될 수 있으며, 이를 통해 디자인을 같이 할 수 이게 된다.<br>
  > 즉 App 이라고 하는 컴포넌트의 디자인을 App 안에 넣는 것이라고 생각하면 된다. 
    ```javascript
        import './App.css';
    ```



<br><br>

## deploy 이해_리액트 앱 배포
### keyword
<p><b>#배포하는 법  #build  #serve</p></b>
  
- 배포하는 법
  > 

- build
  >  

- serve
  >

<br><br>

## 리액트 필요성
### keyword
<p><b>#시맨틱 태그  #리액트의 필요성</p></b>
  
- 시맨틱 태그
  > 

- 리액트의 필요성
  > 

<br><br>

## 컴포넌트-만들기_1
### keyword
<p><b>#컴포넌트  #jsx</p></b>
  
- 컴포넌트
  > 

- jsx
  > 

<br><br>

## 컴포넌트-만들기_2
### keyword
<p><b>#컴포넌트  #jsx</p></b>
  
- 컴포넌트
  > 

- jsx
  > 

<br><br>




<br><br><br><hr>




# state props

## props 이해
### keyword
<p><b>#props  #리팩토링</p></b>
  
- props
  > HTML에서 속성이라고 하는 것을 리액트에서는 <b>"props"</b> 라고 한다.<br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- 리팩토링
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

<br><br>

## 컴포넌트를 파일로 쪼개어 정리정돈하기
### keyword
<p><b>#export  #import</p></b>
  
- export
  > 어떤 것을 외부에서 사용할 수 있도록 허용할 것인지를 결정 : <b>export default TOC;</b><br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- import
  > "react" 라고 하는 라이브러리에서 "Componet" 라고하는 클래스를 로딩하는 방법 : <b>import React, { Component } from 'react';</b><br>
  > <b>import [컴포넌트 이름] from "./componets/[컴포넌트가 있는 파일이름]";</b><br>
  > 예시 :  import TOC from "./componets/TOC";<br>

<br><br>

## state 소개
### keyword
<p><b>#state  #props</p></b>
  
- state
  > state를 비유적으로 말하면 제품을 만드는 사람이 제품의 내부적인 구현을 위해서, 다양한 상태들을 사용하기 위해서 다양한 내부 장치들이라고 할 수 있다.<br>
  > props의 값에 따라 내부의 구현에 필요한 데이터들이라고 할 수 있다.<br>
  > 리액트로 만든 컴포넌트가 좋은 부품이 되기 위해서는 props와 state는 철저하게 분리되어 있어야 한다.<br> 

- props
  > 사용자의 입장에서 장치는 버튼, 화면을 터치하는 것 같은 이 제품을 조작하는 것을 "User Interface" 라고 부른다. 리액트에서는 "props" 가 사용자가 제품을 조작하는 장치라고 비유할 수 있다.<br>
  > 사용자가 컴포넌트를 사용하는 입장에서 중요한 것으로, "props" 를 제공하여 컴포넌트를 조작할 수 있게 된다.<br>

<br><br>

## state 값을 하위 컴포넌트의 props로 전달
### keyword
<p><b>#constructor  #state  #props</p></b>
  
- constructor
  > 컴포넌트가 실행될 때 constuructor 라는 함수가 render() 라고 하는 함수보다  먼저 실행되서 초기화를 담당한다.<br>
  > "this.state={}" 라는 코드를 통해 "state" 값을 초기화한다.<br>
    ```javascript
        constructor (props){
        super(props);
        this.state = {
          [이름] : { title : [값] , sub : [값] }
        }
      }
    ```
- state
  > 코드 만을 통해 내부적으로 state값이 컴포넌트에 있는지 알 수 없으며, 이처럼 외부에서 알 필요가 없는 정보를 철저하게 은닉하는 것은 좋은 사용성을 만드는 핵심이다.<br>
  > 상위 컴포넌트의 state 값을 하위 컴포넌트의 props의 값으로 전달하는 것은 얼마든지 가능하다.<br>

- props
  > "props"의 데이터는 state에서 가져온 것이 된다.<br>

<br><br>

## key 설정 및 자동으로 데이터 변경
### keyword
<p><b>#state  #property  #key</p></b>
  
- state
  > 부모 입장에서는 state라고 하는 내부정보를 사용하고, 그것을 자식에게 전달할 때에는 props를 통해서 전달한다.<br>
  > 부모 입장에서는 토픽이 내부적으로 어떻게 돌아가는지 알 필요가 없게 된다.<br>
    ```javascript
        constructor (props){
        super(props);
        this.state = {
          subject : { title : 'WEB' , sub : 'World Wide Web!' }
          contents : [
            {id : 1 , title : 'HTML' , desc : 'HTML is for information'},
            {id : 2 , title : 'CSS' , desc : 'CSS is for design'},
            {id : 3 , title : 'JavaScript' , desc : 'JavaScript is for interactive'},
          ] /*값이 여러개 일때에는 배열로*/
        }
      }
    ```
- property
  > state 정보를 component에 전달(예시) : <TOC data={this.stat.contents}></TOC> -> <TOC> 컴포넌트에 "data" 라고 하는 props로 {this.state.contetnts} 를 주입한다.<br>
  > <TOC> 컴포넌트는 내부적으로 this.props.data라고 하는 값을 갖게 된다.<br>

- key
  > 한가지 주의할 것은 엘리먼트 여러개를 자동으로 생성하는 경우에 콘솔 창에 에러가 발생한다.<br>
  > 이 에러의 내용은 리스트 항목들은 key라고 하는 props를 가지고 있어야 한다는 의미로, key값을 주면 해결된다.<br>
  > 여러 개의 목록을 자동으로 생성할 때에는 각각의 목록을 다른것 들과 구분할 수 있는 식별자를 key를 통해 적어줘야 한다.<br>
  > key는 애플리케이션에서 사용한다기 보다는 리액트가 내부적으로 필요하기 때문에 요청하는 값이다<br>
    ```javascript
      lists.push( <li key={data[i].id}><a href={"/content"+data[i].id}>{data[i].title}</a></li>);
      /* key = {datap[i].id} 라고 준 모습 */
    ```

<br><br><br><hr>
  
# react_event

### keyword
<p><b>#양식  #양식</p></b>
  
- 양식
  > 양식
- 양식
  > 양식




    
<br><br><br><hr>




# redux

## redux 소개
### keyword
<p><b>#redux소개  #redux특징 #redux장점</p></b>
  
- redux소개
  > HTML에서 속성이라고 하는 것을 리액트에서는 <b>"props"</b> 라고 한다.<br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- redux특징
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

- redux장점
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

<br><br>

## store render subscribe
### keyword
<p><b>#store  #render #subscribe #state</p></b>
  
- store
  > HTML에서 속성이라고 하는 것을 리액트에서는 <b>"props"</b> 라고 한다.<br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- render
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

- subscribe
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

- state
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br>

<br><br>

## action reducer dispatcher render
### keyword
<p><b>#action  #reducer #dispatcher #render</p></b>
  
- action
  > HTML에서 속성이라고 하는 것을 리액트에서는 <b>"props"</b> 라고 한다.<br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- reducer
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

- dispatcher
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 

- render
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br>

<br><br>








<br><br><br><hr>
<i>참고 자료 : 생활코딩 - 리액트</i><br>
<i>React Developer Tools : 실제 물리적인 태그를 보는 것이아니라 리액트상에서 컴포넌트를 보고싶은 경우, 프로그램 설치를 통해 추가된 "React" 라고 하는 탭을 클릭해 만든 앱의 컴포넌트들을 보여주는 도구<br>추가로 react 탭을 이용하여 컴포넌트의 "props" 도 실시간으로 변경가능</i>
