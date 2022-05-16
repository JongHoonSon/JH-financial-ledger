# 앱 설명

Personal Financial Ledger(PFL)은 사용자가 본인의 수입, 지출 내역을 앱에 저장하면, 사용자의 총 수입 내역, 총 지출 내역, 보유한 금액을 계산하여 보여주는 프로그램이다.

<br>

# 배포 (Github Pages)

[PFL v1.0](https://jonghoonson.github.io/JH-personal-financial-ledger-v1.0)

<br>

# 개발 기간

22년 3월 2일 ~ 3월 15일

<br>

# 개발 배경

개인적으로 메모장에다 가계부를 작성해서 불필요한 소비를 줄이고자 하는 습관이 있는데, 메모장에다 기록하는 방식은 처음부터 끝까지 모든 내용을 타이핑해서 적어야하고, 총 수입 내역, 총 지출 내역은 일일히 계산해야하는 번거로움이 존재했다. 따라서 Web 상에서 위 기능을 제공하는 App을 만들어보았다.

<br>

# 개발 환경

HTML, CSS, Javascript 만을 이용해 개발을 진행하였으며, 데이터 저장은 브라우저의 LocalStorage를 이용하였다.

<br>

# 앱 동작 화면

## 1. 기본 화면
![1  기본화면](https://user-images.githubusercontent.com/100356649/167349888-b1030b5e-5395-47d8-a553-cac18b819fc0.PNG)

## 2. 데이터 등록
![2  데이터 등록 (수입 내역1)](https://user-images.githubusercontent.com/100356649/167349842-cf0e9a25-420b-4a5e-a423-619effa67860.PNG)
##### => 수입 내역에 당근마켓에서 판매한 내역을 추가

<br>

![2  데이터 등록 (수입 내역2)](https://user-images.githubusercontent.com/100356649/167349847-1f1e9e88-3061-4e80-ab47-face32fe3bad.PNG)
##### => 수입 내역에 당근마켓에서 판매한 내역이 추가되고, 수입 내역의 합계와 잔액 정보가 변경됨

<br>

![2  데이터 등록 (지출 내역1)](https://user-images.githubusercontent.com/100356649/167349856-e3133dde-314a-4434-a3bb-91b01fce5bbc.PNG)
##### => 지출 내역에 제주도 여행 공금 내역을 추가

<br>

![2  데이터 등록 (지출 내역2)](https://user-images.githubusercontent.com/100356649/167349860-cfe452e0-0f12-4dc8-80c7-05a10a8ad383.PNG)
##### => 지출 내역에 제주도 여행 공금 내역이 추가되고, 지출 내역의 합계와 잔액 정보가 변경됨

## 3. 데이터 삭제
![3  데이터 삭제 (지출 내역)](https://user-images.githubusercontent.com/100356649/167349865-10b9b91f-7529-4b54-8cf9-06db69e7a2ae.PNG)
##### => 데이터의 쓰레기통 버튼을 눌러 해당 데이터를 삭제할 수 있음, 여기서는 지출 내역 중에서 자전거 구매 내역을 삭제함

## 4. 데이터 저장
![4  데이터 저장 (수입 내역)](https://user-images.githubusercontent.com/100356649/167349869-1dcadc40-6f05-4b84-affa-3b1afc1488dd.PNG)

<br>

![4  데이터 저장 (지출 내역)](https://user-images.githubusercontent.com/100356649/167349875-77e6f019-628f-447b-bf3d-c2ffc16c2fb7.PNG)
##### => 각 데이터는 등록, 삭제 시에 브라우저의 LocalStorage에 저장되어 추후 접속 시에도 등록한 데이터를 확인할 수 있음

<br>

# 개선하고 싶은 부분

백엔드 없이 프론트엔드만 구성하여 만든 앱이다보니 개선하고 싶은 부분이 많이 있었다.

1. 어디서나 접속 가능하게 하고 싶다.  
   이 앱을 유용하게 쓰기 위해서는 PC뿐만 아니라 mobile에서도 접속 가능해야한다.  
   => 백엔드 서버를 만들어 배포하자!
   
2. 데이터를 영구적으로 보관하고 싶다.  
   LocalStorage는 사용자가 브라우저의 캐시를 날릴 경우 모든 데이터가 삭제된다. 또한 mobile환경에서는 PC에서 저장한 데이터를 불러올 수 없다.  
   => 로그인 기능을 만들고, 유저 별로 데이터를 보관할 수 있도록 DB를 이용하자!

3. 사용자가 입력한 데이터를 가지고, 단순 계산만 해주는 것이 아니라, 좀 더 유의미한 정보를 제공하고 싶다.  
   => 부가적인 기능을 갖고 있는 페이지를 제공하자!

위의 나열한 것을 충족하는 앱을 만들기 위해서, Node.js의 Express, MongoDB, pug를 이용해   
백엔드 서버, 로그인 기능, DB 등을 갖춘 v2.0을 개발할 예정이다.
