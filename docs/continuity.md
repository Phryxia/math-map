# 연속함수

# 개요

**연속함수(continuous function)** 는 입력을 충분히 조금 바꾸면 출력의 변화도 원하는 만큼 작게 만들 수 있는 함수다. 정사각형의 한 변을 $1$ 대신 $1.01$ 로 잘못 재면 넓이는 $1.0201$ 로 조금만 틀리지만, $x\lt 0$ 에서 $0$ 이고 $x\ge 0$ 에서 $1$ 인 함수는 $0$ 근처에서 입력을 아무리 조금 바꿔도 출력이 $1$ 만큼 뛴다. 연속성은 입력 오차 $\delta$ 와 출력 오차 $\varepsilon$ 의 관계로 이 차이를 정의하고, 연속함수에서는 근삿값을 넣어 계산한 결과도 근삿값이 된다.

# 직관

정사각형의 넓이 $f(x)=x^2$ 에서 한 변 $1$ 을 $1.01$ 로 잘못 재면 넓이는 $1.0201$ 이 되어 $0.0201$ 만큼 틀린다. 한 변의 오차가 $0.01$ 이하이면 $\lvert x^2-1\rvert=\lvert x-1\rvert\thinspace\lvert x+1\rvert\le 0.01\cdot 2.01$ 이므로 넓이의 오차가 $0.0201$ 이하다. 넓이의 오차를 $\varepsilon$ 이하로 하고 싶으면 한 변의 오차를 $\varepsilon/3$ 과 $1$ 가운데 작은 것 이하로 하면 된다.

$x\lt 0$ 에서 $0$, $x\ge 0$ 에서 $1$ 인 함수 $H$ 에서는 같은 일을 할 수 없다. $H(0)=1$ 이고, 입력 오차를 $\delta\gt 0$ 으로 아무리 작게 잡아도 $x=-\delta/2$ 에서 $H(x)=0$ 이어서 출력 오차가 $1$ 이다. 출력 오차를 $1/2$ 이하로 만드는 입력 오차가 없다.

두 함수의 차이는 "출력 오차 $\varepsilon$ 을 먼저 정하면 그에 맞는 입력 오차 $\delta$ 가 있는가" 로 갈린다. $x^2$ 는 모든 $\varepsilon\gt 0$ 에 그런 $\delta$ 가 있고 $H$ 는 $\varepsilon=1/2$ 에서 없다. 이 조건이 연속성이다.

# 정의

## ε–δ 조건

[거리 공간](metric-spaces.md) $(X, d_X)$ , $(Y, d_Y)$ 와 함수 $f : X \to Y$ , 점 $a \in X$ 에 대해 다음이 성립하면 $f$ 가 $a$ 에서 **연속(continuous)** 이다.

$$
\forall\varepsilon\gt 0\thickspace\exists\delta\gt 0\thickspace\forall x\in X:\ d_X(x,a)\lt\delta\Rightarrow d_Y(f(x),f(a))\lt\varepsilon
$$

모든 점에서 연속이면 연속함수다. 직관 절의 $x^2$ 는 $a=1$ 에서 $\delta=\min(1,\varepsilon/3)$ 으로 조건을 만족하고, $H$ 는 $a=0$, $\varepsilon=1/2$ 에서 맞는 $\delta$ 가 없어 연속이 아니다. 모든 $a$ 에 대해 같은 $\delta$ 를 쓸 수 있으면 [균등연속](uniform-continuity.md)이다.

# 성질

## 수열 판정

거리 공간에서는 다음 수열 판정(sequential criterion)이 위 정의와 동치다.

$$
x_n\to a\ \Rightarrow\ f(x_n)\to f(a)
$$

[극한](limits.md)을 함수 안팎으로 옮길 수 있다는 형태이고, 불연속을 보일 때는 반례 수열 하나로 충분하다.

## 위상적 정의

거리를 쓰지 않는 형태는 다음과 같다. 위상 공간 사이의 함수에서는 이것을 연속의 정의로 쓴다.

$$
f\ \text{연속}\iff V\subseteq Y\ \text{열린집합}\Rightarrow f^{-1}(V)\ \text{열린집합}
$$

역상은 합집합, 교집합, 여집합을 모두 보존하지만 [함수](functions.md)의 상은 교집합을 깨뜨린다. 그래서 조건을 상이 아니라 역상에 건다.

## 연산과 합성

연속함수의 합, 차, 곱은 연속이고, 분모가 0 이 되지 않으면 몫도 연속이다. 합성도 연속이다. 바깥 함수가 요구하는 입력 오차를 안쪽 함수의 출력 오차로 넘기면 조건이 이어진다. 다항식, 지수, [삼각함수](trigonometric-functions.md)의 연속성은 이 규칙들의 반복 적용으로 얻는다.

## 제곱함수의 연속성

입력 차이를 1 미만으로 제한하면

$$
\lvert x^2-a^2\rvert=\lvert x-a\rvert\thinspace\lvert x+a\rvert\le\lvert x-a\rvert\big(\lvert x-a\rvert+2\lvert a\rvert\big)\lt\lvert x-a\rvert(1+2\lvert a\rvert)
$$

이므로 주어진 $\varepsilon$ 에 대해

$$
\delta=\min\Big(1,\ \frac{\varepsilon}{1+2\lvert a\rvert}\Big)
$$

를 택하면 된다. $\delta$ 가 $a$ 에 의존하고 $|a|$ 가 커질수록 작아지므로 $x\mapsto x^2$ 는 실수 전체에서 균등연속이 아니다.

## 정의역 조건에서 오는 성질

| 정의역 조건 | 따라오는 성질 |
|---|---|
| 콤팩트 | 상도 콤팩트, 최댓값·최솟값 존재, 균등연속 |
| 연결 | 상도 연결, 실수값이면 [중간값 정리](intermediate-value-theorem.md) |

콤팩트 위의 연속함수가 균등연속이라는 Heine–Cantor 정리(Heine–Cantor theorem)는 유계 닫힌 구간의 적분을 다룰 때 쓰인다. 중간값 정리는 이분 탐색으로 근을 찾는 알고리즘의 정당성을 준다.

## 연속과 미분 가능

미분 가능하면 연속이지만 역은 거짓이다. 절댓값 함수는 0 에서 연속이고 좌우 기울기가 −1 과 1 로 달라 미분 불가능하다. 모든 점에서 연속이면서 어디서도 미분 불가능한 함수도 존재하며(Weierstrass 함수, Weierstrass function), [Brown 운동](brownian-motion.md)의 경로가 거의 확실히 그런 함수다.

## 다변수에서의 불연속

여러 변수 함수에서는 각 변수마다 연속인 것과 전체로 연속인 것이 다르다. 원점을 제외하고 $xy/(x^2+y^2)$ 로 정의된 함수는 두 축을 따라가면 0 으로 가고 대각선 $y=x$ 를 따라가면 $1/2$ 로 가므로 원점에서 연속이 아니다. 수열 판정이 이런 반례를 준다.

## 병리적 예

"그래프를 끊지 않고 그릴 수 있다" 는 서술은 [실수](real-numbers.md) 위의 익숙한 함수에만 맞는다. 유리수에서 1, [무리수](irrational-numbers.md)에서 0 을 주는 함수는 모든 점에서 불연속이고, 유리수 $p/q$ 에서 $1/q$ 을 주고 무리수에서 0 을 주는 함수는 무리수에서만 연속이다.

# 활용

- 수치 계산은 입력을 유한한 정밀도로만 알므로 연속성이 결과의 의미를 보장한다. 오차 전파를 정량화하려면 Lipschitz 조건(Lipschitz condition)이 필요하고, 그 조건이 [축약사상 고정점 정리](banach-fixed-point.md)와 미분방정식 해의 존재·유일성 논증에 쓰인다.
- 최댓값의 존재, 근의 존재, 적분 가능성이 연속성에서 따라온다. [미분](derivative.md)과 [Riemann 적분](riemann-integral.md)의 정의가 극한을 쓰므로 연속성이 그 논의의 최소 가정이다.
- [위상 공간](topology.md)의 구조를 보존하는 사상이 연속함수이고, 위상동형은 양방향으로 연속인 전단사다. 역상으로 쓴 정의는 거리가 없는 공간에서도 그대로 쓰인다.[^1]

[^1]: Jiří Lebl, *Basic Analysis*, §3.2 (연속함수와 합성, 불연속 예시)와 §7.4 (거리 공간에서의 연속성). https://www.jirka.org/ra/html/sec_cont.html

# 연관 문서

## 선수지식

- [거리 공간](metric-spaces.md)
- [해석학 개관](analysis-overview.md)

## 더 알아보기

### 실수 위의 연속함수

- [중간값 정리](intermediate-value-theorem.md)
- [균등연속](uniform-continuity.md)
- [균등수렴](uniform-convergence.md)

### 미분과 적분

- [미분](derivative.md)
- [Riemann 적분](riemann-integral.md)

### 일반화

- [위상 공간](topology.md)

#analysis #topology
