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
    - [redux 사용 이유](#redux의-장점)
    - [redux가 없다면](#redux-사용-이유)
    
7. [redux basic](#redux-basic)
    -
    - [store 생성](#store-생성)
    - [reducer와 action이용 새로운 state 만들기](#reducer와-action이용-새로운-state-값-생성)
    - [ui 반영](#ui-반영)
    - [redux 시간여행 & 로깅](#redux-시간여행과-로깅)
    
8. [redux use](#redux-use)
    -
    - [부품화](#부품화)
    - [store 생성과 state 사용](#store-생성과-state-사용)
    - [action을 dispatch를 통해서 전달](#action을-dispatch를-통해서-전달)
    - [subscribe이용 자동 갱신](#subscribe이용-자동-갱신)
    - [글생성 기능 구현](#글생성-기능-구현)
    - [글삭제 기능 구현](#글삭제-기능-구현)
    - [기타](#기타)

9. [react & redux](#react에-redux-사용)
    -
    - [redux 없는 react](#redux-없는-react)
    - [react 컴포넌트 상태연결](#react-컴포넌트-상태연결)
    - [redux 도입](#redux-도입)
    - [redux에 종속된 기능 제거](#redux에-종속된-기능-제거)
    - [container 컴포넌트 도입](#container-컴포넌트-도입)
    



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

## redux의 장점
### keyword
<p><b>#redux를 쓰면 좋은 이유</p></b>
  
- redux를 쓰면 좋은 이유
  > 고려해야 할 로직 수가 획기적으로 줄어든다. 따라서 훨씬 더 애플리케이션이 단순해지는 효과를 볼 수 있다.<br>
  > 집중적인 data store를 통해서 애플리케이션을 쉽게 바로 개발할 수 있다.<br>
  > 리덕스만이 가지고 있는 시간 여행을 할 수 있다.<br> 

<br><br>

## redux 사용 이유
### keyword
<p><b>#redux를 쓰지 않을 경우</p></b>
  
- redux를 쓰지 않을 경우
  > 부품과 부품 사이에 어떤 특별한 관계에 의해서 고유한 특성을 가지고 있는 코드가 있다고 가정했을 때 그리고 부품이 1억개라고 생각했을 때 신경 써야할 코드가 기하급수적으로 늘어난다<br>


<br><br><br><hr>




# redux basic

## store 생성
### keyword
<p><b>#redux 객체  #createStore()  #reducer</p></b>
  
- redux 객체
  > redux 설치방법<br>
  > ```npm install --save redux```<br>
  > 또는<br>
  > ```html
  > <head>
  >      <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js"></script>
  > </head>
  > ```
  > 리덕스를 이용한다는 것은 결국 <b>store를 만들어서 store의 상태를 바꾸는 것</b>이다.<br> 

- createStore()
  > redux 객체가 생기면 <b>Redux.createStore(reducer)</b>라고 하는 api를 사용할 수 있게 된다.<br>
  > ```html
  > function reducer(state, action){
  >     if(state === undefined){
  >         return {color:'yellow'}
  >     }
  > }
  > var store = Redux.createStore(reducer);
  > function red() {
  >     var state = store.getState();
  >     //생략
  > }
  > ``` 

- reducer
  > reducer가 하는 역할은 dispatcher에서 action이 들어오게 되면 reducer가 action 값과 기존에 있었던 state의 값을 참조해서 <b>새로운 state 값을 만들어주는 것</b>이다.<br>
  > 초기값으로 reducer는 state와 action을 받는데 state의 값이 아직 세팅되지 않았으면 state는 <b>undefined</b>이다.<br>
  > state값이 정의되지 않은 상태에서 reducer가 호출된다는 것은 최초의 <b>초기화 단계</b>라는 뜻이다.<br>
  > 그때 store의 <b>초기 state 값</b>이 <b>리턴되는 값</b>이며, <b>getState()</b> 함수를 통해 store에 저장된 state 값을 가져올 수 있다.<br>

<br><br>

## reducer와 action이용 새로운 state 값 생성
### keyword
<p><b>#Object.assign()  #dispatch()  #reducer  #state  #action</p></b>
  
- Object.assign()
  > 객체를 복제할 때는 Object.assign() 이라고 하는 명령을 이용한다.<br>
  > 첫 번째 인자로 반드시 기 빈 객체를 준다. 두 번째 인자로는 이 빈 객체의 복제할 속성을 가진 객체를 준다<br>
  > 첫번째 인자로 빈 객체를 줘야하는 이유는 Object.assign() 함수의 리턴 값은 <b>첫 번째 인자인 객체</b>이기 때문이다.<br>
  > ```html
  > function reducer(state, action){
  >     console.log(state, action);
  >     if(state === undefined){
  >         return {color:'yellow'}
  >     }
  >     var newState;
  >     if(action.type === 'CHANGE_COLOR'){
  >         newState = Object.assign({}, state, {color:'red'});
  >     }
  >     return newState;
  > }
  > ```

- dispatch()
  > store에 dispatch()를 호출하면 dispatch는 store를 생성할 때 제공한 reducer() 함수를 호출하도록 약속되어 있다.<br>
  > 그때 이전의 state 값과 전달된 action 값을 인자로 전달한다.<br> 
  > 예시에서는 {type:'CHANGE_COLOR', color : 'red'} 이 action 값이다.<br>
  > ```html
  > <input type="button" value="fire" onclick="
  >     store.dispatch({type:'CHANGE_COLOR', color:action.color});
  > ">
  > ```

- reducer
  > reducer() 함수가 하는 역할은 action의 값과 이전의 state 값을 이용해서 store의 <b>새로운 state 값을 만든다</b>는 것이 핵심이다<br>
  > 새롭게 리턴되는 값은 원본을 바꾸는 것이 아니라 이전에 있었던 값을 복제한 결과를 리턴하는 것이다.<br>
  > 리덕스를 통해 사용하는 여러가지 효용들을 최대한으로 활용할 수 있게 된다.<br>

<br><br>

## ui 반영
### keyword
<p><b>#subscribe  #state</p></b>
  
- subscribe
  > subscribe하기 전의 코드에서는 최초로 한번은 red()를 강제로 호출시켰다.(여기서 red()는 사용자가 만든 함수)<br>
  > 그 이후에 store.dispatch()함수가 실행되어 state 값이 바뀌는 것처럼 state 값이 바뀔때 마다 red() 함수를 호출하게 하려면 subscribe에 render() 함수를 등록해 놓으면 된다.<br>
  > 이렇게 등록하면 dispatch가 state 값을 바꾸고 난 다음에 지정한 함수를 호출하도록 약속되어 있다. 따라서 state 값이 바뀔때 마다 red() 함수가 호출된다.<br>
  > ```html
  > store.subscribe(red);
  > ``` 

- state
  > 리덕스가 없을 때의 코드는 서로 강력하게 의존하고 있다. 따라서 어느 한 부분을 갑자기 지워버리면 다른 쪽은 에러를 발생시킨다.<br>
  > 그리고 만약에 새로운 컴포넌트가 추가되면 기존에 있었던 컴퍼넌트 전체를 업데이트 해야하는 문제가 발생한다.<br>
  > 리덕스라고 하는 중개자를 통해서 우리가 상태를 중앙 집중적으로 관리 하게 되면 각각의 부품들은 상태가 바뀌었을 때 상태가 바뀌었다는 action을 store에 dispatch해주면 된다.<br>
  > 그리고 상태가 변함에 따라 자신이 어떻게 변화되는지에 대한 코드를 작성하고 그것을 store에 구독시켜놓으면 state가 바뀔 때마다 통보를 받기 때문에 그 때마다 자신의 모양을 바꿔 줄 수 있게 된다.<br>
  > 따라서 각 부품들은 다른 부품을 몰라도 되며, 그저 자신의 일에만 집중하면 된다. 코딩을 하는 입장에서도 마찬가지이다.<br>


<br><br>

## redux 시간여행과 로깅
### keyword
<p><b>#Redux Dev Tools  #time traveling</p></b>
  
- Redux Dev Tools
  > Redux dev Tools를 검색해서 사이트를 들어가면 크롬, firefox에서 하는 법 그리고 독립적으로 진행하는 Electron 등 여러가지 방법들이 있다.<br>
  > Chrom Web Store로 들어가서 확장 기능을 설치할 수 있다.<br>
  > 그리고 Basic Store 라고 되어 있는 부분의 코드를 Redux.createStore() 함수 안에 추가한다.<br>
  > ```html
  > var store = Redux.createStore(
  >     reducer,
  >     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
  > );
  > ``` 
  > 그 다음에 개발자 도구를 켜보시면 끝에 Redux라는 게 추가되어 있는 것을 확인할 수 있다.<br>

- time traveling
  > 시간 여행은 "Redux dev Tools" 를 통해서 사용할 수 있다.<br>
  > Redux dev Tools라는 것은 리덕스에서 store에게 전달된 action들을 버전관리 하고 있는 것이라고 볼 수 있다.<br>
  > 뿐만 아니라 버전 관리라고 한다면 <b>이전 버전으로 언제든지 돌아갈 수 있어야 한다.</b><br>
  > 지금까지 우리 애플리케이션에서 store에게 전달한 action들을 <b>replay 할 수 있다.</b> 다운로드 한 파일을 다시 업로드 해서 <b>이전의 상태를 그대로 복원 할 수 있다.</b><br>
  > 이를 이용해서 복잡한 애플리케이션에 문제가 생겼을 때 그 문제가 어떠한 맥락 속에서 발생했는지 간편하게 판단할 수 있다.<br>
  > 리덕스에서 <b>Reducer를 통해 리턴하는 값은 불변해야 한다.</b><br>
  > 원본에 대해서 변경하면 안 되고 원본을 복제해서 복제한 것을 변경해서 리턴하고 <b>action에 의해서 state가 바뀔 때</b>마다 그 바뀌는 각각의 데이터들은 서로 완전히 <b>독립된 데이터</b>여야 한다.<br>
  > 애플리케이션을 사용하다보면 어떤 action을 했을 때 간편하게 그에 따른 상태를 보고 싶을 수 있는데, 그때 리덕스는 모든 애플리케이션에서 관리해야 되는 상태가 store에 보관되게 되어 있다. 리덕스는 <b>단일 스토어</b>로, 단 하나의 스토어를 유지한다.<br>


<br><br><br><hr>




# redux use

## 부품화
### keyword
<p><b>#모듈화,부품화  #가독성  #재사용성</p></b>
  
- 모듈화,부품화
  > 훨씬 더 정리 정돈된 코드를 만들기 위해서 이 부분을 함수로 정리하면 다음과 같다.<br>
  > ```html
  > <div id="subject"></div>
  > <script>
  > function subject(){
  >     document.querySelector('#subject').innerHTML = `
  >     <header>
  >         <h1>WEB</h1>
  >         Hello, WEB!
  >     </header>
  >     `
  > }
  > subject();
  > </script>
  > ```
  > 페이지는 똑같이 보이지만 <b>가독성</b>도 높아지고 <b>재사용</b>할 수 있게 되었다. 이런 것을 <b>"부품화시킨다", "모듈화한다"</b> 고 부른다.<br> 


<br><br>

## store 생성과 state 사용
### keyword
<p><b>#store  #state</p></b>
  
- store
  > store를 만들 때는 리덕스라는 전역객체의 createStore()라고 하는 함수를 호출한다. 이때 reducer를 꼭 줘야 한다.<br>
  > ```html
  > Redux.createStore(reducer);
  > ```
  > reducer는 호출될 때 이전의 state값과 호출된 이후인 action값을 입력 값으로 받고 리턴해주는 값은 새로운 state 값이 된다.<br> 
  > store를 처음 생성하면 최초 1회 action과는 상관 없이 호출되는데 그때 state 값은 undefined이다.<br>
  > 만약 state 값이 undefined라면 초기값을 세팅한다.<br>

- state
  > reducer에 초기값으로 contents라고 하는 property가 있는 state 값이 잘 만들어졌는지 확인하려면 콘솔창에 store.getState()를 통해서 확인할 수 있다.<br>
  > store에 있는 정보를 바탕으로 가져오려면 getState()를 사용한다.<br>
  > 각각의 구성 요소가 store에서 state를 가져오고 그 state값을 기반으로 html 코드를 생성하면 state값에 따라서 만들어지는 웹 페이지를 생성할 수 있게 된다.<br>
  > ```html
  > function TOC(){
  >     var state = store.getState();
  >     var i = 0;
  >     var liTags = '';
  >     while(i<state.contents.length){
  >         liTags = liTags + `
  >             <li>
  >                 <a href="${state.contents[i].id}">${state.contents[i].title}</a>
  >             </li>`;
  >         i = i + 1;
  >     }
  >     document.querySelector('#toc').innerHTML = `
  >     <nav>
  >         <ol>${liTags}</ol>
  >     </nav>
  >     `;
  > }
  > ```


<br><br>

## action을 dispatch를 통해서 전달
### keyword
<p><b>#action  #dispatch  #event.preventDefault()</p></b>
  
- action
  > action을 발생시키면 그 action이 dispatch를 통해서 reducer를 실행시키고 reducer가 state의 새로운 값을 리턴한다.<br>
  > 그리고 state 값이 바뀌면 subscribe 하는 함수들을 호출해 주는 것을 통해서 UI가 업데이트가 된다.<br>
  > action을 만들 때 action 에서 필수적인 property는 "type"이다.<br> 

- dispatch
  > store의 dispatch에 만든 action 정보를 넘겨준다. 그러면 store는 reducer를 호출한다.<br>
  > 항상 state 값을 리턴할 때는 복제된 것을 리턴해야 된다. Object.assign() 함수를 통해 복제할 수있다.<br> 

- event.preventDefault()
  > event.preventDefault()는 이벤트가 발생했을 때 그 이벤트를 발생시킨 태그의 기본적인 동작을 못하게 방지하는 함수이다.<br>

<br><br>

## subscribe이용 자동 갱신
### keyword
<p><b>#subscribe  #Read 기능 구현</p></b>
  
- subscribe
  > ```html
  > store.subscribe(article);
  > ```

- Read 기능 구현
  > ```html
  > function article(){
  >     var state = store.getState();
  >     var i = 0;
  >     var aTitle, aDesc;
  >     while(i < state.contents.length){
  >         if(state.contents[i].id === state.selcted_id) {
  >             aTitle = state.contents[i].title;
  >             aDesc = state.contents[i].desc;
  >             break;
  >         }
  >         i = i + 1;
  >     }
  >     document.querySelector('#content').innerHTML = `
  >     <article>
  >         <h2>${aTitle}</h2>
  >         ${aDesc}
  >     </article>
  >     `
  > }
  > ```


<br><br>




## 글생성 기능 구현
### keyword
<p><b>#create  #concat()</p></b>
  
- create
  > ```html
  > function article(){
  >     var state = store.getState();
  >     if(state.mode === 'create'){
  >         document.querySelector('#content').innerHTML = `
  >         <article>
  >             <form onsubmit="
  >                 event.preventDefault();
  >             ">
  >                 <p>
  >                     <input type="text" name="title" placeholder="title">
  >                 </p>
  >                 <p>
  >                     <textarea name="desc" placeholder="description"></textarea>
  >                 </p>
  >                 <p>
  >                     <input type="submit">
  >                 </p>
  >             </form>
  >         </article>
  >         `
  >     } else if(state.mode === 'read'){
  >         var i = 0;
  >         var aTitle, aDesc;
  >         while(i < state.contents.length){
  >             if(state.contents[i].id === state.selcted_id) {
  >                 aTitle = state.contents[i].title;
  >                 aDesc = state.contents[i].desc;
  >                 break;
  >             }
  >             i = i + 1;
  >         }
  >     document.querySelector('#content').innerHTML = `
  >     <article>
  >         <h2>${aTitle}</h2>
  >         ${aDesc}
  >     </article>
  >     `
  > }
  > ```

- concat()
  > onsubmit 이벤트가 발생했을 때 form 안에 있는 name이 title인 태그의 값을 가져와야 한다.<br>
  > ```html
  > <form onsubmit="
  >    event.preventDefault();
  >    var _title = this.title.value;
  >    var _desc = this.desc.value;
  >    store.dispatch({
  >       type:'CREATE',
  >       title:_title,
  >       desc:_desc
  >    })
  > ">
  > ```
  > state.contents 배열을 새롭게 복제한다. concat() 을 사용해 편하게 복제할 수 있다.<br>
  > ```html
  > function reducer(state, action){
  >    // .. 생략
  >     var newState;
  >     if(action.type === 'SELECT'){
  >         newState = Object.assign({}, state, {selcted_id:action.id});
  >     } else if(action.type === 'CREATE'){
  >         var newContents = state.contents.concat();
  >         newContents.push({id:newMaxId, title:action.title, desc:action.desc});
  >     }
  >     console.log(action, state, newState);
  >     return newState;
  > }
  > ```

<br><br>

## 글삭제 기능 구현
### keyword
<p><b>#delete</p></b>
  
- delete
  > reducer() 에서 action.type이 'DELETE'인 경우의 코드<br>
  > ```html
  > } else if(action.type === 'DELETE'){
  >     var newContents = [];
  >     var i = 0;
  >     while(i < state.contents.length){
  >         if(state.selcted_id !== state.contents[i].id){
  >             newContents.push(
  >                 state.contents[i]
  >             );
  >         }
  >         i = i + 1;
  >     }
  >     newState = Object.assign({},state, {
  >         contents:newContents,
  >     })
  > } 
  > ```


<br><br>

## 기타
### keyword
<p><b>#React  #Redux Ecosystem  #immutability</p></b>
  
- React
  > 리액트를 위해서 리덕스가 시작되었다고 할 수 있다.<br>
  > 물론 리덕스가 발전하는 과정에서 점차 리액트로부터 독립해서 오늘날 리덕스는 독립적인 상태 관리 저장소로 발전하고 있다.<br>

- Redux Ecosystem
  > 리덕스 또 다른 장점은 준수한 생태계다.<br>
  > 이런 도구를 여러분이 설치하면 직접 구현할 때의 노력없이 그냥 이런 기능을 사용할 수 있다. 이런 일종의 플러그 인들을 리덕스 커뮤니티에서는 미들웨어라고 한다.<br>
  > <br> 

- immutability
  > reducer는 새로운 상태를 만드는 것이다. reducer가 새로운 상태를 만들 때는 이전의 상태인 원본을 직접 바꾸지 않고 새로운 복제본을 만들어서 복제본을 수정한 다음에 그것을 새로운 상태로 만들어야 된다.(immutable-js 라이브러리를 이용 추천)<br> 
  > 각각의 상태를 이렇게 완전히 독립적으로 유지하면 얘기치 못한 변화로 상태 데이터가 변경되는 사고를 막을 수 있다.<br>
  > 각각의 상태가 독립적 이기 때문에 이 상태들을 버전 관리 하면 아주 쉽게 UNDO와 REDO, 시간여행, Hot module Reloading 과 같은 고급 작업을 쉽게 구현할 수 있다.<br> 


<br><br><br><hr>



# react에 redux 사용

## redux 없는 react
### keyword
<p><b>#  #</p></b>
  
- 
  > <br>
  > <br>

-  
  > <br>
  > <br>
  > <br>

<br><br>

## react 컴포넌트 상태연결
### keyword
<p><b>#  #</p></b>
  
- 
  > <br>
  > <br>

-  
  > <br>
  > <br>
  > <br>

<br><br>

## redux 도입
### keyword
<p><b>#  #</p></b>
  
- 
  > <br>
  > <br>

-  
  > <br>
  > <br>
  > <br>

<br><br>

## redux에 종속된 기능 제거
### keyword
<p><b>#  #</p></b>
  
- 
  > <br>
  > <br>

-  
  > <br>
  > <br>
  > <br>

<br><br>

## container 컴포넌트 도입
### keyword
<p><b>#  #</p></b>
  
- 
  > <br>
  > <br>

-  
  > <br>
  > <br>
  > <br>

<br><br>






<br><br><br><hr>
<i>참고 자료 : 생활코딩 - 리액트</i><br>
<i>React Developer Tools : 실제 물리적인 태그를 보는 것이아니라 리액트상에서 컴포넌트를 보고싶은 경우, 프로그램 설치를 통해 추가된 "React" 라고 하는 탭을 클릭해 만든 앱의 컴포넌트들을 보여주는 도구<br>추가로 react 탭을 이용하여 컴포넌트의 "props" 도 실시간으로 변경가능</i>
