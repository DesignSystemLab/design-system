# J Design System

![jds-thumb](https://github.com/react95-io/React95/assets/46988995/ac97b7f7-2420-40f6-9990-25217a8381df)

## Introduction

💎 J Design System은 여러 재사용 가능한 핵심적인 UI 컴포넌트를 담아내고 있는 React에서 사용할 수 있는 Design System UI Library 입니다. 빠르고 쉽게 적용할 수 있는 단순한 인터페이스를 지향하였으며, 웹 접근성을 최대한 준수하였습니다.

### features

- Compound Component 구조와 일관성 있는 속성 구조를 통해 간결한 사용자 인터페이스를 유지하도록 하였습니다.
- `as` 속성을 통해 컴포넌트 다형성을 지원하도록 구현했습니다.
- 적절한 `html role`을 부여하여 웹 접근성을 고려해 컴포넌트를 구성하였습니다.
- 다양한 사용 환경을 고려하여 `cjs`, `esm` 모듈을 지원하도록 번들링을 구성하였습니다.
- Unconrolled Component 특성을 활용해 인터랙션이 필요한 컴포넌트들을 지원하였습니다.
- Form 관련 컴포넌트들은 [React Hook Form](https://react-hook-form.com/)과 같이 사용할 수 있습니다.

## Installation

💄 `emotion` 환경에서 동작하기 때문에 emotion dpendency가 필요합니다.
**React UI Component**

```bash
npm install --save @jdesignlab/react @emotion/react@^11
```

**SVG Icons**

```bash
npm install --save @jdesignlab/react-icons @emotion/react@^11
```

아래와 같이 필요한 UI 컴포넌트를 import하여 사용할 수 있습니다. 각 컴포넌트의 `README`를 참고하시면 자세한 인터페이스와 사용법을 확인하실 수 있습니다. 아래 링크를 클릭하시면 각 컴포넌트의 README로 이동하실 수 있습니다.

```jsx
import { Text, TextInput, Button, Modal, ... } from '@jdesignlab/react';
import {Mail, Bell, Book, ...} from '@jdesignlab/react-icons'
```

### Components

- [/button](#)
- [/box](#)
- [/checkbox](#)
- [/button](#)

## Project Overview

- **[📎 Storybook Link](https://designsystemlab.github.io/design-system/)**
- **[Compound Component Pattern](https://github.com/DesignSystemLab/design-system/wiki/Compound-Component-Pattern)**
- **[🔗 Monorepo Architecture](https://github.com/DesignSystemLab/design-system/wiki/Monorepo-Architecture)**
- **[Uncontrolled Component](https://github.com/DesignSystemLab/design-system/wiki/Uncontrolled-Component)**
- **[✅ Dependency-Cruiser](#)**
- **[🧩 Bundle with tsup](https://github.com/DesignSystemLab/design-system/wiki/tsup%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%B2%88%EB%93%A4%EB%A7%81)**
- **[🦋 Changeset](https://github.com/DesignSystemLab/design-system/wiki/%F0%9F%A6%8B-Changeset-CI-CD)**
- **[Compound Component](https://github.com/DesignSystemLab/design-system/wiki/Compound-Component-Pattern)**
- **[💄 With Emotion](https://github.com/DesignSystemLab/design-system/wiki/Styling-Library:-Emotion)**
- **[⌨️ Keyboard Interaction](https://github.com/DesignSystemLab/design-system/wiki/Keyboard-Control)**
- **[Yarnberry](https://github.com/DesignSystemLab/design-system/wiki/Package-Manager:-Yarn-Berry)**

## Contributors

|                             [yondo123](https://github.com/yondo123)<br/>                              |                             [yoycode](https://github.com/yoycode)<br/>                              |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="64" height="64"> | <img src="https://avatars.githubusercontent.com/u/65293082?v=4" alt="helen" width="64" height="64"> |

## Convention

**Commit Convention**
| rule | description |
| -------- | -------------------------------------------------------- |
| ✨ Feat | 새로운 기능을 작성합니다. |
| 🎨 Style | 코드 스타일 규칙을 수정합니다. |
| ➖ Remove | 사용되지 않는 파일 또는 코드를 삭제합니다. |
| 🏗️ Structure | 프로젝트 구조를 변경합니다. |
| 🔧 Modify | 기능에 영향을 주지 않는 코드를 수정합니다. |
| 🐛 Fix | 기능의 문제 사항 또는 전반적인 프로젝트 내 이슈를 해결합니다. |
| ♻️ Refactor | 성능이나 코드의 구조를 개선합니다. |
| 📝 Doc | 문서를 작성하거나 편집합니다. |
| 🤡 Chore | 애플리케이션 동작에 영향을 주지 않는 코드들을 수정합니다. (package version, configure) |
| 🚀 Deploy | 패키지를 배포합니다. |
| 🧪 Test | 테스트 코드를 작성합니다. |
| 💄 Ui | 스타일링을 위한 코드를 수정하거나 추가합니다. |
