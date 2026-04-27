# 박상현 데이터 분석가 포트폴리오 사이트

API 수집, EDA, 머신러닝, 웹 대시보드 배포 프로젝트를 한 화면에서 소개하는 정적 포트폴리오 사이트다.

## 구성

- `index.html`: 포트폴리오 메인 페이지
- `styles.css`: 레이아웃과 반응형 스타일
- `script.js`: 프로젝트 필터와 카드 reveal 인터랙션
- `assets/`: 히어로 및 프로젝트 썸네일 이미지

## 로컬 확인

파일을 직접 열어도 동작한다.

```text
portfolio-site/index.html
```

로컬 서버로 확인하려면 아래 명령을 실행한다.

```bash
python -m http.server 8787 --directory portfolio-site
```

접속 주소:

```text
http://localhost:8787/
```

## 배포 후보

- GitHub Pages
- Railway 정적 서버
- Netlify
- Vercel

첫 배포는 GitHub Pages가 가장 단순하다.
