# react-sliding-puzzle-game

![sliding](https://user-images.githubusercontent.com/28751246/155862199-3a90ba5b-704d-47c3-a2e3-330199732c3c.gif)



1.0.0 버전을 기준으로 상태 관리 라이브러리를 사용하지 않고 react만 사용하여 제작했습니다.  
차후 아래 내용들을 보완 및 추가 할 예정입니다.  

감사합니다.

[demo](https://kis0421.github.io/react-sliding-puzzle-game/)

## 📃 보완할 점

- 상태 관리 라이브러리 도입
  - 향후 추가 기능을 고려하여 `props drilling` 문제 해결 및 원활한 상태 관리 목적
- 컴포넌트 <=> 로직 분리 
- UX 개선
  - 퍼즐 관련 animation 
- 로직 최적화
  - Tile.tsx 성능 개선 가능 여부 먼저 확인 필요

## 📃 앞으로 추가할 것 

- 퍼즐 수 입력 기능
  - 현재 4x4 퍼즐만 지원하고있으며 게임 시작 전 입력받는 기능
- DB 연동
  - 퍼즐 수, 소요 시간, 움직인 횟수를 기준으로 점수를 부여하여
    랭킹을 등록하는 기능
- 공유 기능
  - [공유하기]를 통한 SNS 혹은 메신저 공유 기능
- 퍼즐 커스터 마이징
  - 색상 외 퍼즐 관련 커스터 마이징
