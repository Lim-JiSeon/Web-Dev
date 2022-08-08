# 여러 기능 공부

## 목록
1. [스킵 메뉴](#스킵-메뉴)
2. [헤더 메뉴](#헤더-메뉴)
3. [웹 폰트](#웹-폰트)


### 스킵 메뉴
<img width="770" alt="image" src="https://user-images.githubusercontent.com/83554018/183353992-718eea2c-2516-4d64-bf65-0a06f7cba18d.png">

```html
<a href="#cont_nav">전체 메뉴 바로가기</a>
```

### 헤더 메뉴
<img width="1265" alt="image" src="https://user-images.githubusercontent.com/83554018/183355554-bea51d04-1bff-4d3b-adb7-f4f9f6e2370f.png">

```html
<style>
  #header {width: 100%; height: 325px; background: url(../img/header_bg.jpg)center top repeat-x;}

  /* 헤더 */
  .header {}
  .header .header-menu {text-align: right;}
  .header .header-menu a {color: #fff; padding: 10px 0px 10px 13px; display: inline-block;}
  .header .header-menu a:hover {color: #666;}
  .header .header-tit {}
  .header .header-icon {}
</style>
```

### 웹 폰트
<img width="1277" alt="image" src="https://user-images.githubusercontent.com/83554018/183357418-3b26dd8c-8055-4b0e-8f03-d4290c8330f7.png">

```html
<head> 
<!-- 웹 폰트 -->
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet">
</head>
```
```css
/* 폰트 초기화 */
body, input, textarea, select, button, table {
    font-family:'Nanum Gothic', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; 
    color: #222; font-size: 13px; line-height: 1.5;}
```






