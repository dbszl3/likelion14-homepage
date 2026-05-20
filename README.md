# 🦁 멋쟁이사자처럼 서경대학교 홈페이지 퍼블리싱 프로젝트

## 📌 프로젝트 소개
멋쟁이사자처럼 서경대학교 홈페이지의 구성원 페이지를 퍼블리싱한 프로젝트입니다.  
Figma 디자인을 기반으로 React 컴포넌트를 구성하였으며, 기수 별 구성원 데이터를 확인할 수 있도록 구현했습니다.
또한 공통 컴포넌트를 분리하여 재사용성을 높이고, react-router-dom을 활용해 기수 별 페이지 이동이 가능하도록 구현했습니다.

## 🚀 기술 스택
- React
- JavaScript
- styled-components
- react-router-dom
- Vite
- Git / GitHub

## ✨ 주요 기능
- 멋쟁이사자처럼 서경대학교 구성원 페이지 UI 구현
- 운영진 / PO / FRONTEND / BACKEND / 아기사자 섹션 구현
- 구성원 카드 컴포넌트 구현
- 기수 별 페이지 이동 기능 구현
- react-router-dom 기반 라우팅 구현
- 공통 Header / Footer 컴포넌트 분리
- 공통 Button 컴포넌트 분리
- 공통 InfoBox 컴포넌트 분리
- map 함수를 활용한 구성원 데이터 렌더링 구현
- 기수 별 데이터 분리 및 렌더링 구현
- styled-components 기반 스타일링 구현

## 🎯 목표
- Figma 디자인을 React 코드로 구현하기
- 컴포넌트 단위로 UI 분리하기
- 공통 컴포넌트를 활용한 재사용성 높이기
- react-router-dom을 활용한 라우팅 구현하기
- map 함수를 활용한 데이터 렌더링 연습
- 기수 별 데이터를 효율적으로 관리하기
- styled-components를 활용한 스타일링 연습
- Git 브랜치 전략과 협업 흐름 익히기

## 🎯 Git Convention
- 🎉 Start: Start New Project [:tada:]
- ✨ Feat: 새로운 기능을 추가 [:sparkles:]
- 🐛 Fix: 버그 수정 [:bug:]
- 🎨 Design: CSS 등 사용자 UI 디자인 변경 [:art:]
- ♻️ Refactor: 코드 리팩토링 [:recycle:]
- 🔧 Settings: Changing configuration files [:wrench:]
- 🗃️ Comment: 필요한 주석 추가 및 변경 [:card_file_box:]
- ➕ Dependency/Plugin: Add a dependency/plugin [:heavy_plus_sign:]
- 📝 Docs: 문서 수정 [:memo:]
- 🔀 Merge: Merge branches [:twisted_rightwards_arrows:]
- 🚀 Deploy: Deploying stuff [:rocket:]
- 🚚 Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck:]
- 🔥 Remove: 파일을 삭제하는 작업만 수행한 경우 [:fire:]
- ⏪️ Revert: 전 버전으로 롤백 [:rewind:]

## 🌲 Branch Convention

- `main` : 배포 가능한 브랜치
- `develop` : 개발 브랜치
- `feat/#이슈번호/명칭` : 새로운 기능 개발 브랜치
  - 예: `feat/#12/members-page`
- `ui/#이슈번호/명칭` : UI 작업 브랜치
  - 예: `ui/#12/member-card`
- `refactor/#이슈번호/명칭` : 리팩토링 작업 브랜치
  - 예: `refactor/#12/component-structure`

## 🌊 Flow

1. Issue 생성
2. 최신 develop 브랜치에서 작업 브랜치 생성
3. 기능 개발 및 커밋 진행
4. develop 브랜치로 Pull Request 생성
5. 코드 리뷰 진행
6. 리뷰 완료 후 develop 브랜치로 병합
7. 병합 완료 후 작업 브랜치 삭제