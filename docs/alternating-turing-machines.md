# 교대 Turing 기계

# 개요

**교대 Turing 기계(alternating Turing machine)** 는 상태를 존재 상태와 전칭 상태로 나누어, 존재 상태에서는 다음 계산 갈래 가운데 하나가 받아들이면 받아들이고 전칭 상태에서는 모든 갈래가 받아들여야 받아들이는 비결정적 Turing 기계다. A. K. Chandra, D. C. Kozen, L. J. Stockmeyer 가 1981 년에 도입했다[^1].

비결정적 기계는 존재 한정사 하나를 계산으로 옮긴 것이고, 교대 기계는 존재 한정사와 전칭 한정사를 번갈아 옮긴다. [다항 계층](polynomial-hierarchy.md)은 교대 횟수를 고정한 다항시간 교대 기계의 부류이고, 횟수를 묶지 않은 다항시간 교대 기계의 부류는 [공간 복잡도](space-complexity.md)의 PSPACE(polynomial space)와 같다.

# 직관

한정 불 논리식 $\exists x_1\thinspace\forall x_2\thinspace\exists x_3\ \varphi(x_1,x_2,x_3)$ 이 참인지 판정한다. 비결정적 기계는 $x_1$ 의 값을 추측할 수 있다. 추측한 갈래 하나가 받아들이면 기계 전체가 받아들이므로 존재 한정사가 계산 한 걸음이 된다. 그러나 $\forall x_2$ 는 $x_2=0$ 과 $x_2=1$ 두 갈래가 모두 받아들여야 참이고, 비결정적 기계에는 "모든 갈래" 를 요구하는 걸음이 없다.

그래서 기계에 둘째 종류의 갈림을 더한다. $x_1$ 을 고르는 자리에서는 갈래 하나만 받아들이면 되고, $x_2$ 를 고르는 자리에서는 두 갈래가 모두 받아들여야 한다. 그러면 기계는 변수마다 한 걸음씩 값을 고르고 마지막에 $\varphi$ 를 계산하는 것으로 논리식을 판정한다. 변수가 $n$ 개이면 갈래 하나의 길이는 $n$ 걸음과 $\varphi$ 의 계산 시간을 더한 것이어서 다항식이다.

거꾸로 이 기계의 계산 나무는 한 갈래씩 깊이 우선으로 훑어 받아들임을 계산할 수 있다. 존재 갈림에서는 받아들이는 자식을 하나 찾을 때까지, 전칭 갈림에서는 거부하는 자식을 하나 찾을 때까지 자식을 차례로 본다. 훑는 동안 기억할 것은 지금 갈래의 경로뿐이어서, 다항시간 교대 기계는 다항 공간에서 흉내 내어진다.

# 정의

## 받아들임

교대 기계의 상태는 존재 상태, 전칭 상태, 받아들임 상태, 거부 상태로 나뉜다. 구성은 [공간 복잡도](space-complexity.md)에서처럼 상태, 헤드 위치, 테이프 내용을 묶은 것이다. **받아들이는 구성(accepting configuration)** 의 집합은 다음 조건으로 닫힌 가장 작은 집합이다.

- 상태가 받아들임 상태인 구성은 받아들인다.
- 존재 상태의 구성은 다음 구성 가운데 받아들이는 것이 있으면 받아들인다.
- 전칭 상태의 구성은 다음 구성이 모두 받아들이면 받아들인다.

기계가 입력 $x$ 를 받아들인다는 것은 $x$ 의 시작 구성이 받아들이는 것이다.

## 교대 부류

$\mathrm{ATIME}(t(n))$ 은 모든 갈래가 $O(t(n))$ 걸음 안에 멈추는 교대 기계로 판정되는 언어의 부류이고, $\mathrm{ASPACE}(s(n))$ 은 모든 구성이 작업 테이프 칸을 $O(s(n))$ 개 이하로 쓰는 교대 기계로 판정되는 부류다.

| 부류 | 정의 |
|---|---|
| AL(alternating logarithmic space) | $\mathrm{ASPACE}(\log n)$ |
| AP(alternating polynomial time) | $\bigcup_{k\ge 1}\mathrm{ATIME}(n^k)$ |
| APSPACE(alternating polynomial space) | $\bigcup_{k\ge 1}\mathrm{ASPACE}(n^k)$ |

계산 갈래 위에서 존재 상태와 전칭 상태가 바뀌는 횟수를 교대 횟수라 한다. 시작 상태가 존재 상태이고 모든 갈래의 교대 횟수가 $k-1$ 이하인 다항시간 교대 기계로 판정되는 부류를 $\Sigma_k$ 기계의 부류라 한다.

# 성질

## Chandra–Kozen–Stockmeyer 정리

정리. $t(n)\ge n$ 이고 $s(n)\ge\log n$ 이면

$$
\mathrm{ATIME}(t)\subseteq\mathrm{SPACE}(t)\subseteq\mathrm{ATIME}(t^2),\qquad \mathrm{ASPACE}(s)=\mathrm{TIME}(2^{O(s)})
$$

이다[^1]. 따라서 $\mathrm{AL}=\mathrm P$, $\mathrm{AP}=\mathrm{PSPACE}$, $\mathrm{APSPACE}=\mathrm{EXPTIME}$ 이다.

증명의 요지. 네 포함을 따로 보인다.

- $\mathrm{ATIME}(t)\subseteq\mathrm{SPACE}(t)$. 직관 절의 깊이 우선 훑기다. 깊이가 $t$ 이고 각 깊이에서 어느 자식을 보는지만 기억하며, 구성은 시작 구성에서 경로를 따라 다시 계산한다.
- $\mathrm{SPACE}(t)\subseteq\mathrm{ATIME}(t^2)$. Savitch 정리의 재귀를 교대로 쓴다. 구성 $c_1$ 에서 $c_2$ 로 $2^k$ 걸음 이내에 가는지 물을 때, 중간 구성 $m$ 을 존재 상태에서 추측하고 두 절반 가운데 하나를 전칭 상태에서 고른다. 재귀 깊이가 $O(t)$ 이고 깊이마다 구성 하나를 쓰는 데 $O(t)$ 걸음이 든다.
- $\mathrm{ASPACE}(s)\subseteq\mathrm{TIME}(2^{O(s)})$. 구성이 $2^{O(s)}$ 개이므로, 받아들임 상태의 구성에서 시작해 받아들임 조건을 만족하는 구성을 더 이상 늘지 않을 때까지 더하면 $2^{O(s)}$ 시간에 받아들이는 구성의 집합이 나온다.
- $\mathrm{TIME}(2^{O(s)})\subseteq\mathrm{ASPACE}(s)$. 결정적 기계의 시간-공간 표에서 마지막 칸이 받아들임 상태라는 것을 거꾸로 검증한다. 칸 $(i,j)$ 의 내용을 존재 상태에서 추측하고, 그 내용을 정하는 윗줄의 세 칸 가운데 하나를 전칭 상태에서 골라 같은 검증을 이어 간다. 기억할 것은 칸의 좌표 $(i,j)$ 뿐이고 좌표는 $O(s)$ 비트다.

## 다항 계층

정리. $\Sigma_k^{\mathrm p}$ 는 $\Sigma_k$ 기계의 부류와 같다[^1].

증명의 요지. 다항 계층의 한정사 정의 $\exists y_1\thinspace\forall y_2\cdots Q_ky_k\ V(x,y_1,\dots,y_k)$ 에서 $y_i$ 를 차례로 한 비트씩 존재 상태나 전칭 상태로 고르고 마지막에 $V$ 를 계산하면 $\Sigma_k$ 기계가 된다. 거꾸로 $\Sigma_k$ 기계의 계산 갈래를 교대가 바뀌는 자리마다 끊으면, 각 구간의 선택이 한정사 하나의 증거가 된다.

교대 횟수를 고정하면 다항 계층의 층이 되고, 묶지 않으면 PSPACE 가 된다.

# 활용

- 두 사람이 번갈아 두는 게임의 승리 판정은 선수의 수를 존재 상태로, 상대의 수를 전칭 상태로 두는 교대 기계로 쓴다. 게임이 다항 걸음 안에 끝나면 PSPACE 에, 판의 크기가 다항식이고 걸음 수가 지수까지 가면 $\mathrm{APSPACE}=\mathrm{EXPTIME}$ 에 든다.
- [불 회로](boolean-circuits.md)의 출력값을 묻는 회로 값 문제(circuit value problem)는 AL 에 든다. 출력 게이트에서 시작해, 논리합 게이트는 존재 상태로, 논리곱 게이트는 전칭 상태로 입력 하나를 골라 내려가면 게이트 번호만 기억하는 로그 공간 교대 기계가 된다.
- 한정사를 번갈아 쓰는 논리의 모형 검사, 예를 들어 [1차 논리](first-order-logic.md) 문장을 유한 구조에서 평가하는 문제는 한정사마다 교대 기계의 갈림을 하나씩 주어 판정된다. 문장의 길이가 입력에 들면 이 기계는 다항시간에 돌아 문제가 PSPACE 에 든다.

[^1]: A. K. Chandra, D. C. Kozen, L. J. Stockmeyer, "Alternation", Journal of the ACM 28 (1981), 114–133.

# 연관 문서

## 선수지식

- [공간 복잡도](space-complexity.md)
- [다항 계층](polynomial-hierarchy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #logic
