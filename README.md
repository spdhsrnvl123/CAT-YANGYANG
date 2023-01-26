# 🐱Cat YANGYANG

![CAT](https://user-images.githubusercontent.com/83896466/214822450-394ac1d7-bc96-4609-abaf-dd14a9422ffa.gif)

## 🚀배포
https://spdhsrnvl123.github.io/Cat-YANGYANG/

❗️CATTAS Open API에서 현재 복구모드에 있기 때문에 서버가 원할하지 않을 수 있습니다.

## 🪄 프로젝트 실행 방법
1. git clone하여 프로젝트를 내려받습니다.
    ```bash
    git clone https://github.com/spdhsrnvl123/Cat-YANGYANG.git
    ```
2. 패키지를 설치합니다.
    ```bash
    npm install
    ```
3. 프로젝트를 실행합니다.
    ```bash
    npm start
    ```

## 🧰 기술 스택 및 구현 사항
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled components&logoColor=black">

### 구현 사항
- Redux를 통한 전역 상태 관리
    - list(고양이 이미지 정보)
- 메인 페이지
    - 영 대문자만 입력 가능한 입력창 구현
    - CATAAS Open API를 이용하여 입력창에 텍스트 작성시 랜덤으로 고양이 이미지에 텍스트 문구가 삽입되는 기능 구현
    - 고양이 이미지 추가 기능 구현
- 장바구니 페이지
    - 고양이 이미지 삭제 기능 구현

## 디렉토리 구조
```
.
├── components
│   ├── Card.jsx
│   ├── ClickPlease.jsx
│   ├── Form.jsx
│   ├── Menu.jsx
│   └── Title.jsx
├── pages
│   ├── Cart.jsx
│   └── Home.jsx
├── Store
│   └── store.js
├── App.js
└── index.js
```

