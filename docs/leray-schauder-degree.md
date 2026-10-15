# Leray–Schauder 차수

# 개요

Leray–Schauder 차수는 Banach 공간에서 항등사상의 콤팩트 섭동 $I-T$ 에 붙이는 정수값 불변량이다. 유한차원의 Brouwer 차수를 유한차원 근사의 극한으로 옮긴 것이고, [Schauder 고정점 정리](schauder-fixed-point.md)가 주는 고정점의 존재보다 많은 것, 곧 해의 개수와 매개변수에 따른 해의 분기를 센다.

# 직관

$\mathbb R^n$ 의 유계 열린집합 $\Omega$ 에서 $f(x)=0$ 의 해를 센다. $f$ 가 $\partial\Omega$ 에서 $0$ 을 피하고 매끄러우면 해마다 Jacobi 행렬식의 부호를 붙여 더한 값이 차수이고, 이 값은 경계에서 $0$ 을 피하는 연속변형으로 바뀌지 않는다. 그래서 계산하기 쉬운 사상으로 변형해 값을 얻고, 값이 $0$ 이 아니면 해가 있다고 결론한다.

무한차원에서 같은 구성을 하면 막힌다. 단위공이 콤팩트가 아니므로 정칙값의 원상이 유한집합이라는 보장이 없다. 더 근본적으로 무한차원 Banach 공간의 단위구면은 단위공 안에서 한 점으로 연속변형되므로, 항등사상을 경계에서 $0$ 을 피하며 상수사상으로 변형할 수 있고 차수가 $1$ 과 $0$ 을 동시에 가져야 한다.

항등사상조차 차수를 가질 수 없어 막혔으니, 연속사상 전부를 다루지 않고 $I-T$ 꼴만 다룬다. $T$ 가 콤팩트이면 $\overline{T(\Omega)}$ 가 콤팩트이므로 유한차원 치역을 갖는 작용소로 균등근사된다. 근사 $T_m$ 의 치역을 담는 유한차원 부분공간에서 Brouwer 차수를 재고, 근사를 세밀하게 해도 그 값이 바뀌지 않음을 보인다.

위의 변형이 막히는 것도 이 제한에서 설명된다. 구면을 공 안으로 수축시키는 변형은 $I-T$ 꼴로 쓸 수 없고, 콤팩트 섭동만 허용하면 항등사상의 차수가 $1$ 로 남는다.

# 정의

## Brouwer 차수

$\Omega\subseteq\mathbb R^n$ 이 유계 열린집합이고 $f\colon\overline\Omega\to\mathbb R^n$ 이 연속이며 $y\notin f(\partial\Omega)$ 라고 하자. $f$ 가 매끄럽고 $y$ 가 정칙값이면

$$
\deg(f,\Omega,y)=\sum_{x\in f^{-1}(y)}\mathrm{sgn}\thinspace\det Df(x)
$$

이다. 일반적인 연속 $f$ 와 일반적인 $y$ 에 대해서는 매끄러운 근사와 정칙값의 조밀성으로 이 값을 확장하고, 그 값이 근사의 선택과 무관하다.

## 콤팩트 섭동

$X$ 가 Banach 공간, $\Omega\subseteq X$ 가 유계 열린집합이고 $T\colon\overline\Omega\to X$ 가 **콤팩트**라는 것은 연속이고 $\overline{T(\overline\Omega)}$ 가 콤팩트라는 뜻이다. 이때 $\Phi=I-T$ 를 항등사상의 **콤팩트 섭동**이라 한다.

## Leray–Schauder 차수

$y\notin\Phi(\partial\Omega)$ 일 때, $T$ 를 유한차원 치역을 갖는 콤팩트 작용소 $T_m$ 으로 균등근사하고 그 치역과 $y$ 를 담는 유한차원 부분공간을 $X_m$ 이라 하면

$$
\deg\_{\mathrm{LS}}(\Phi,\Omega,y)=\deg\bigl((I-T_m)\vert\_{X_m},\Omega\cap X_m,y\bigr)
$$

이다. $y$ 가 $\Phi(\partial\Omega)$ 에서 양의 거리만큼 떨어져 있으므로 근사가 충분히 가까우면 오른쪽 값이 근사와 부분공간의 선택과 무관하다.

# 성질

## 기본 성질

**정리.** 차수는 다음을 만족한다.

- 정규화. $y\in\Omega$ 이면 $\deg\_{\mathrm{LS}}(I,\Omega,y)=1$ 이다.
- 호모토피 불변. $H(t,x)=x-T(t,x)$ 에서 $T$ 가 $\lbrack 0,1\rbrack\times\overline\Omega$ 에서 콤팩트이고 모든 $t$ 에 대해 $y\notin H(t,\partial\Omega)$ 이면 차수가 $t$ 에 무관하다.
- 가법성. $\Omega$ 가 서로소인 열린집합 $\Omega_1,\Omega_2$ 를 담고 해가 그 합집합 안에만 있으면 차수가 두 차수의 합이다.
- 해의 존재. 차수가 $0$ 이 아니면 $\Phi(x)=y$ 의 해가 $\Omega$ 에 있다.

해의 존재는 차수의 정의에서 바로 나온다. 해가 없으면 유한차원 근사에서도 해가 없어 Brouwer 차수가 $0$ 이다.

## Schauder 고정점 정리의 재증명

$T$ 가 닫힌 공 $\overline{B_R}$ 을 자신으로 보내는 콤팩트 작용소라 하자. $\partial B_R$ 에 고정점이 있으면 끝이므로 없다고 하면, $H(t,x)=x-tT(x)$ 가 경계에서 $0$ 을 피한다. $\Vert tT(x)\Vert\le R=\Vert x\Vert$ 에서 등식은 $t=1$ 이고 $x$ 가 고정점인 경우뿐이기 때문이다. 호모토피 불변성으로 차수가 $t=0$ 의 값 $1$ 과 같고, 따라서 $x-T(x)=0$ 의 해가 있다.

## Leray–Schauder 대체 원리

**정리.** $T\colon X\to X$ 가 콤팩트이고 $R\gt 0$ 이 있어 $x=\lambda T(x)$ 와 $\lambda\in\lbrack 0,1\rbrack$ 을 만족하는 모든 $x$ 가 $\Vert x\Vert\lt R$ 이면, $x=T(x)$ 에 해가 있다.

가정이 $H(t,x)=x-tT(x)$ 가 $\partial B_R$ 에서 $0$ 을 피한다는 것이므로 호모토피 불변성이 차수 $1$ 을 준다. 해의 크기에 대한 선험적 추정만 세우면 해의 존재가 따라온다는 뜻이고, 비선형 방정식에서 이 꼴로 쓰인다.

## 분기

$\lambda$ 를 매개변수로 하는 족 $x=T(\lambda,x)$ 에서, 어떤 해 근방의 작은 공에 대한 차수가 $\lambda$ 를 지나며 바뀌면 그 값 근처에서 해가 하나 이상 더 갈라진다. 차수가 바뀌는 것은 해가 하나만 있고 그 자리의 차수가 유지되는 경우와 어긋나기 때문이다.

# 활용

- **비선형 타원 방정식.** 해의 크기에 대한 선험적 추정을 [Schauder 추정](schauder-estimates.md)으로 얻고 대체 원리를 적용해 약한 해의 존재를 보인다. 선형 문제에서 [Lax–Milgram 정리](lax-milgram.md)가 하는 일을 비선형 문제에서 이 차수가 맡는다.
- **상미분방정식의 주기해.** 주기해를 적분 작용소의 고정점으로 바꾸면 그 작용소가 콤팩트이고, 차수가 $0$ 이 아님을 보여 주기해의 존재를 얻는다.
- **분기 이론.** 고윳값을 지나며 차수가 바뀌는 자리를 찾아 해의 갈래가 생기는 매개변수 값을 센다.

# 연관 문서

## 선수지식

- [Brouwer 차수](brouwer-degree.md)
- [Schauder 고정점 정리](schauder-fixed-point.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #topology
