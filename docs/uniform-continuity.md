# 균등연속

# 개요

균등연속은 연속성의 $\delta$ 를 점에 의존하지 않게 고른 조건이다. 연속함수는 각 점마다 따로 $\delta$ 를 고르지만, 균등연속함수는 하나의 $\delta$ 로 정의역 전체를 덮는다. 정의역이 콤팩트하면 두 조건이 일치한다는 것이 Heine–Cantor 정리다.

균등연속은 극한과 바꿔 쓰는 조작을 떠받친다. Riemann 적분 가능성의 고전적 증명, 조밀한 부분집합에서 정의된 함수의 연장, 근사열의 [균등수렴](uniform-convergence.md)이 모두 이 조건을 쓴다.

# 직관

연속성의 $\delta$ 가 점마다 달라지는 전형적인 예가 $f(x)=1/x$ 다. $(0,1)$ 위에서 $x$ 가 0 에 가까워질수록 같은 오차를 유지하는 데 필요한 $\delta$ 가 0 으로 줄어들고, 하한이 0 이므로 전체를 덮는 $\delta$ 가 없다. 정의역을 $[1,2]$ 로 좁히면 이런 자리가 사라진다.

# 정의

[거리 공간](metric-spaces.md) $(X,d_X)$ 와 $(Y,d_Y)$ 사이의 함수 $f\colon X\to Y$ 에 대해 다음이 성립하면 $f$ 가 **균등연속**이다.

$$
\forall\varepsilon\gt 0\thickspace\exists\delta\gt 0\thickspace\forall x,y\in X:\ d_X(x,y)\lt\delta\Rightarrow d_Y(f(x),f(y))\lt\varepsilon
$$

[연속](continuity.md)의 정의와 다른 점은 $\delta$ 가 $\varepsilon$ 에만 의존하고 점 $x$ 에는 의존하지 않는다는 것뿐이다. 양화사의 순서로 말하면 $\forall x\thickspace\exists\delta$ 가 $\exists\delta\thickspace\forall x$ 로 바뀌었다.

## Lipschitz 조건과의 관계

$d_Y(f(x),f(y))\le L\thinspace d_X(x,y)$ 를 만족하는 상수 $L$ 이 있으면 $f$ 는 **Lipschitz 연속**이고, $\delta=\varepsilon/L$ 로 두면 균등연속이다. 역은 성립하지 않는다. $[0,1]$ 위의 $\sqrt x$ 는 균등연속이지만 0 근방에서 기울기가 무한해 Lipschitz 가 아니다.

# 성질

## Heine–Cantor 정리

$X$ 가 콤팩트 거리 공간이고 $f\colon X\to Y$ 가 연속이면 $f$ 는 균등연속이다.

증명은 [콤팩트성](compactness.md)의 유한 부분덮개를 쓴다. $\varepsilon\gt 0$ 에 대해 각 점 $x$ 에서 연속성이 주는 $\delta_x$ 를 잡아 반지름 $\delta_x/2$ 의 열린공 족을 만들면 $X$ 의 열린덮개가 된다. 유한 부분덮개를 $B(x_1,\delta_{x_1}/2),\dots,B(x_n,\delta_{x_n}/2)$ 라 하고 $\delta=\min_i\delta_{x_i}/2$ 로 둔다. $d_X(x,y)\lt\delta$ 이면 $x$ 가 속한 공의 중심 $x_i$ 에 대해 $d_X(x,x_i)\lt\delta_{x_i}/2$ 이고 $d_X(y,x_i)\lt\delta_{x_i}$ 이므로 두 값 모두 $f(x_i)$ 에서 $\varepsilon/2$ 안에 있다.

유한성을 쓰는 곳은 마지막의 $\min$ 뿐이다. 무한 족의 하한은 0 일 수 있다.

## 균등연속함수의 연장

$A\subseteq X$ 가 조밀하고 $f\colon A\to Y$ 가 균등연속이며 $Y$ 가 [완비](completeness.md)이면, $f$ 는 $X$ 전체로 유일하게 균등연속 연장된다.

$x\in X$ 로 수렴하는 $A$ 의 수열 $(a_n)$ 을 잡으면 $(a_n)$ 이 Cauchy 이고, 균등연속성이 $(f(a_n))$ 도 Cauchy 로 만든다. $Y$ 의 완비성이 극한을 주고, 그 값이 수열 선택에 의존하지 않는다. 연속성만으로는 이 논증이 되지 않는다. $(0,1)$ 위의 $1/x$ 에는 연장이 없다.

## Cauchy 수열의 보존

균등연속함수는 Cauchy 수열을 Cauchy 수열로 보낸다. 연속함수는 그렇지 않다. $1/x$ 는 $(1/n)$ 을 Cauchy 가 아닌 수열로 보낸다. 이 성질이 위 연장 정리의 핵심 단계다.

# 활용

## Riemann 적분 가능성

[Riemann 적분](riemann-integral.md)에서 유계 닫힌구간 위의 연속함수가 적분 가능하다는 정리의 고전적 증명이 Heine–Cantor 정리를 쓴다. 분할의 폭을 $\delta$ 보다 작게 잡으면 각 소구간에서 상합과 하합의 차가 $\varepsilon$ 이하가 되고, 전체 차가 $\varepsilon(b-a)$ 로 억제된다.

## 완비화와 연장

[완비성](completeness.md)에서 거리 공간의 완비화를 구성할 때, 조밀한 부분공간에서 정의된 균등연속 사상을 완비화 전체로 옮기는 데 위 연장 정리를 쓴다. $p$ 진수 위의 함수를 유리수에서 정의해 $\mathbb Z_p$ 로 연장하는 논증도 같은 형태다.

## 근사와 수치해석

콤팩트 구간 위의 연속함수를 계단함수나 다항식으로 근사할 때, 오차를 구간 전체에서 일정하게 통제하려면 균등연속성이 필요하다. 수치적분의 오차 한계도 같은 조건에서 나온다.

# 연관 문서

## 선수지식

- [연속함수](continuity.md)
- [콤팩트성](compactness.md)

## 더 알아보기

- [Lipschitz 사상](lipschitz-maps.md)
- [Arzelà–Ascoli 정리](arzela-ascoli.md)

#analysis #topology
