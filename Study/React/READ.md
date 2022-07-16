# React Study

## Content
1. [create-react-app](#create-react-app) 
2. [react-Component](#react-component)
3. [state&props](#state-props)
4. [react-event](#react-event)



# create-react-app

### keyword
<p><b>#React  #Component</p></b>
  
- React
  > "React" 는 facebook.com의 UI를 더 잘 만들기 위해서 페이스북에서 만든 Javascript UI 라이브러리다.<br>
  > 사용자 정의 태그를 만들어주는 여러가지 기술 중 하나이다.

- Component  
  > 리액트에서 사용자가 정의해서 태그를 만드는 것을 <b>사용자 정의 태그</b>라고 하지 않고 <b>컴포넌트</b>라고 부른다.<br>
  > 가독성을 높일 수 있으며, 재사용성이 높아진다.<br>
  > 유지보수가 훨씬 더 편리해진다.<br>


### keyword
<p><b>#Coding  #Run  #Deploy</p></b>
  
- Coding
  > 개발환경을 세팅하고 어느 부분의 코드를 바꿔야되는가 살펴보는 것을 말한다.<br>

- Run  
  > 작성한 코드를 실행해서 결과를 보는 것을 말한다.<br>

- Deploy
  > 모든 작업이 끝난 다음에 최종적으로 사용자(고객)에게 전달하는 행위를 말한다.<br>


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


### keyword
<p><b>#개발환경 구축</p></b>
  
- 개발환경 구축
  > 1. cmd에서 cd [디렉토리 경로]를 통해 설치하고자하는 디렉토리로 이동한다.<br>
  > 2. 명령어를 입력한다.<br>
  > 명령어 : <b>"create-react-app . "</b><br>


### keyword
<p><b>#npm run start</p></b>
  
- npm run start
  > 명령어 : <b>" npm run start"</b><br>
  > 실행을 종료하고 싶을 때 : terminal에서 <b>"ctrl + C "</b><br>

<br><br><br><hr>




# react-Component

### keyword
<p><b>#</p></b>
  
- 양식
  > 양식<br>
  > 양식<br>


<br><br><br><hr>




# state props

### keyword
<p><b>#props  #리팩토링</p></b>
  
- props
  > HTML에서 속성이라고 하는 것을 리액트에서는 <b>"props"</b> 라고 한다.<br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- 리팩토링
  > props의 입력 값에 따라 출력값이 달라지도록 하는 것을 말한다.<br>
  > 내부적으로 훨씬 효율적이다.<br> 


### keyword
<p><b>#export  #import</p></b>
  
- export
  > 어떤 것을 외부에서 사용할 수 있도록 허용할 것인지를 결정 : <b>export default TOC;</b><br>
  > 약속된 jsx의 기호는 <b>{this.props.title}</b> 이다.<br> 

- import
  > "react" 라고 하는 라이브러리에서 "Componet" 라고하는 클래스를 로딩하는 방법 : <b>import React, { Component } from 'react';</b><br>
  > <b>import [컴포넌트 이름] from "./componets/[컴포넌트가 있는 파일이름]";</b><br>
  > 예시 :  import TOC from "./componets/TOC";<br>


### keyword
<p><b>#state  #props</p></b>
  
- state
  > state를 비유적으로 말하면 제품을 만드는 사람이 제품의 내부적인 구현을 위해서, 다양한 상태들을 사용하기 위해서 다양한 내부 장치들이라고 할 수 있다.<br>
  > props의 값에 따라 내부의 구현에 필요한 데이터들이라고 할 수 있다.<br>
  > 리액트로 만든 컴포넌트가 좋은 부품이 되기 위해서는 props와 state는 철저하게 분리되어 있어야 한다.<br> 

- props
  > 사용자의 입장에서 장치는 버튼, 화면을 터치하는 것 같은 이 제품을 조작하는 것을 "User Interface" 라고 부른다. 리액트에서는 "props" 가 사용자가 제품을 조작하는 장치라고 비유할 수 있다.<br>
  > 사용자가 컴포넌트를 사용하는 입장에서 중요한 것으로, "props" 를 제공하여 컴포넌트를 조작할 수 있게 된다.<br>


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
  
# react-event

### keyword
<p><b>#양식  #양식</p></b>
  
- 양식
  > 양식
- 양식
  > 양식








<br><br><br><hr>
<i>참고 자료 : 생활코딩 - 리액트</i><br>
<i>React Developer Tools : 실제 물리적인 태그를 보는 것이아니라 리액트상에서 컴포넌트를 보고싶은 경우, 프로그램 설치를 통해 추가된 "React" 라고 하는 탭을 클릭해 만든 앱의 컴포넌트들을 보여주는 도구<br>추가로 react 탭을 이용하여 컴포넌트의 "props" 도 실시간으로 변경가능</i>
