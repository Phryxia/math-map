# Penrose 쪽매

# 개요

**Penrose 쪽매(Penrose tiling)** 는 연(kite)과 화살촉(dart) 두 종의 사변형 타일을 정해진 맞춤 규칙에 따라 붙여 평면을 덮은 쪽매다. 정사각형 타일은 같은 무늬를 일정한 간격으로 되풀이해 평면을 덮는데, 몇 종의 타일을 골라 어떻게 덮어도 되풀이가 생기지 않게 할 수 있는지가 물음이다. 마름모 하나를 연과 화살촉으로 자르고 둘을 다시 마름모로 붙이지 못하게 꼭짓점 색 규칙을 두면, 이어 붙인 타일이 점점 큰 연과 화살촉으로 모여 되풀이 없는 쪽매만 나온다.

# 직관

황금비(golden ratio)를 $\varphi=(1+\sqrt 5)/2$ 라 한다. 한 변이 $\varphi$ 이고 각이 $72^\circ$ 와 $108^\circ$ 인 마름모가 있고, 이 마름모는 평행이동만으로 평면을 주기적으로 덮는다. 마름모의 긴 대각선을 $\varphi:1$ 로 나누는 점을 잡고, 그 점과 둔각의 두 꼭짓점을 이어 자르면 사변형 둘이 나온다. 각이 $72^\circ,72^\circ,72^\circ,144^\circ$ 인 볼록한 쪽이 연이고, 각이 $36^\circ,72^\circ,36^\circ,216^\circ$ 인 오목한 쪽이 화살촉이다.

연과 화살촉을 다시 붙여 마름모를 만들 수 있으면 마름모의 주기적 쪽매가 그대로 나온다. 그래서 꼭짓점에 두 색을 칠하고, 맞닿는 꼭짓점의 색이 같아야 한다는 규칙을 둔다. 색은 마름모로 다시 붙이는 배치를 금지하도록 칠한다. 이 규칙 아래에서 쪽매를 이어 가면 연과 화살촉의 무리가 더 큰 연과 화살촉의 모양으로 모인다. 큰 연과 화살촉도 같은 규칙을 지키므로 다시 더 큰 연과 화살촉으로 모이고, 이 단계가 끝없이 이어지는 배치는 한 방향으로 옮겨 겹칠 수 없다.

# 정의

## Penrose 쪽매

연과 화살촉의 변의 길이는 $1$ 과 $\varphi$ 다. 두 타일의 꼭짓점에 두 색 가운데 하나를 칠하고 맞닿는 꼭짓점의 색이 같아야 한다는 조건을 **맞춤 규칙(matching rule)** 이라 한다. 평면을 겹치지 않게 덮으면서 맞닿는 변이 같은 길이이고 맞춤 규칙을 지키는 쪽매를 **Penrose 쪽매** 라 한다. 직관 절의 마름모를 연과 화살촉으로 자른 조각들을 다시 마름모로 붙이면 맞닿는 꼭짓점의 색이 달라지므로, 마름모를 되풀이한 배치는 Penrose 쪽매가 아니다.

각이 $72^\circ$ 인 두꺼운 마름모와 각이 $36^\circ$ 인 얇은 마름모로 같은 성질의 쪽매를 만들 수도 있고, 이것을 **마름모 Penrose 쪽매(rhombus Penrose tiling)** 라 한다. 두 판본은 타일을 정해진 방식으로 자르고 붙여 서로 바뀐다.

## 주기성

한 쪽매 $\mathcal T$ 가 **주기적(periodic)** 이라는 것은 $\mathcal T+v=\mathcal T$ 인 영이 아닌 벡터 $v$ 가 존재하는 것이다. 직관 절의 마름모를 평행이동으로만 늘어놓은 쪽매는 마름모의 한 변을 $v$ 로 잡으면 $\mathcal T+v=\mathcal T$ 이므로 주기적이다.

## 분해와 합성

연 하나를 $1/\varphi$ 배로 줄인 연 둘과 화살촉 반쪽 둘로, 화살촉 하나를 줄인 연 하나와 화살촉 반쪽 둘로 나누고, 반쪽들을 이웃 타일의 반쪽과 붙여 Penrose 쪽매의 모든 타일을 줄인 타일로 바꾸는 것을 **분해(deflation)** 라 한다. 반대로 타일을 묶어 $\varphi$ 배로 키운 연과 화살촉으로 바꾸는 것을 **합성(inflation)** 이라 한다. 연 $K$ 개와 화살촉 $D$ 개로 된 조각을 분해하면 연 $2K+D$ 개와 화살촉 $K+D$ 개가 된다.

# 성질

## 합성의 유일성

Penrose 쪽매를 분해하면 $1/\varphi$ 배로 줄인 Penrose 쪽매가 된다. 모든 Penrose 쪽매는 $\varphi$ 배로 키운 Penrose 쪽매로 합성할 수 있고, 그 묶는 방법은 하나뿐이다. 이 유일성은 맞춤 규칙이 꼭짓점 주변에 허용하는 배치가 일곱 가지뿐이라는 것을 확인해 증명된다.

## 존재

타일 하나에서 시작해 분해와 확대를 되풀이하면 반지름이 얼마든지 큰 원판을 맞춤 규칙대로 덮을 수 있다. 덮는 방법은 크기마다 유한 개이므로, [Wang 타일](wang-tiles.md)에서 쓰는 콤팩트성 논법(compactness argument)으로 평면 전체의 Penrose 쪽매가 존재한다.

## 비주기성

Penrose 가 1974년에 찾은 연과 화살촉은 두 종으로 된 비주기 타일 집합이다. Penrose 쪽매는 존재하고, 모두 주기적이지 않다. Wang 타일의 첫 비주기 집합은 2 만 종이 넘었다.

증명의 요지. $\mathcal T+v=\mathcal T$ 라 하자. 합성은 유일하므로 합성한 쪽매도 $v$ 만큼의 평행이동에 대해 불변이다. 합성을 $k$ 번 거듭하면 타일의 크기가 $\varphi^k$ 배가 되어, $k$ 가 크면 모든 타일 안에 반지름이 $\lvert v\rvert$ 인 원판이 들어간다. 그러면 한 타일을 $v$ 만큼 옮긴 것이 그 타일과 겹치면서 다른 타일이어야 하므로 모순이다.

같은 결론이 개수의 비로도 나온다. 분해 한 번에 연과 화살촉의 개수는 정의 절의 식대로 [행렬](matrices.md) $\begin{pmatrix}2&1\cr 1&1\end{pmatrix}$ 로 바뀌고, 이 행렬의 큰 고윳값의 고유벡터에서 큰 원판 안의 연의 수와 화살촉의 수의 비는 $\varphi$ 로 수렴한다. 주기적 쪽매에서는 한 주기 영역 안의 개수비가 유리수이므로 이 비가 유리수여야 하는데 $\varphi$ 는 [무리수](irrational-numbers.md)다.

## 국소 동형

Penrose 쪽매는 서로 합동이 아닌 것이 셀 수 없이 많다. 그러나 한 Penrose 쪽매에 나오는 유한 조각은 다른 모든 Penrose 쪽매에도 나오고, 지름 $d$ 인 조각은 어느 점에서든 $d$ 에 비례하는 거리 안에 다시 나타난다. 앞의 성질을 국소 동형(local isomorphism)이라 한다.

## 결정학적 제한

결정학적 제한(crystallographic restriction)은 다음이다. 평면의 [격자](lattices.md)를 보존하는 회전의 차수는 $1,2,3,4,6$ 가운데 하나다. 회전은 격자의 기저에서 정수 행렬로 쓰이므로 대각합 $2\cos\theta$ 가 정수이고, $2\cos\theta\in\lbrace -2,-1,0,1,2\rbrace$ 에서 $\theta$ 가 정해진다. 따라서 주기적 쪽매는 $5$ 회 회전 대칭을 가질 수 없다. Penrose 쪽매에는 $5$ 회 회전 대칭을 갖는 쪽매가 있고, 모든 Penrose 쪽매에서 $5$ 회 대칭인 유한 조각이 반복해 나타난다.

## 사영으로 만든 쪽매

de Bruijn 은 마름모 Penrose 쪽매의 꼭짓점이 $\mathbb Z^5$ 의 격자점 가운데 평면 둘레의 정해진 영역에 든 것을 평면으로 사영한 점과 같음을 보였다[^1]. 이 구성을 자르고 사영하기(cut and project)라 한다.

# 활용

- 준결정(quasicrystal). Shechtman 은 1982년에 알루미늄–망간 합금에서 결정학적 제한에 어긋나는 $5$ 회 대칭의 회절 무늬를 관찰했다[^2]. Penrose 쪽매와 그 3차원 판본의 회절 무늬도 날카로운 점들이 $10$ 회 대칭으로 놓인 꼴이어서, 원자 배열이 주기적이지 않으면서 질서를 갖는 구조의 모형이 된다.
- 단일 비주기 타일. Smith, Myers, Kaplan, Goodman-Strauss 는 2023년에 한 종의 다각형 타일만으로 된 비주기 집합을 찾았다[^3]. 증명은 Penrose 쪽매처럼 쪽매를 더 큰 타일로 합성하는 위계를 쓴다.

[^1]: N. G. de Bruijn, Algebraic theory of Penrose's non-periodic tilings of the plane I, II, *Indagationes Mathematicae* **43** (1981), 39–66.
[^2]: D. Shechtman, I. Blech, D. Gratias, J. W. Cahn, Metallic phase with long-range orientational order and no translational symmetry, *Physical Review Letters* **53** (1984), 1951–1953.
[^3]: D. Smith, J. S. Myers, C. S. Kaplan, C. Goodman-Strauss, An aperiodic monotile, *Combinatorial Theory* **4** (2024), no. 1.

# 연관 문서

## 선수지식

- [Wang 타일](wang-tiles.md)
- [격자](lattices.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #computation #linear_algebra
