# 닫힌 치역 정리

# 개요

닫힌 치역 정리는 Banach 공간 사이의 유계 작용소 $T$ 의 치역이 닫혀 있을 때 그 치역을 쌍대작용소의 핵으로 적는다. 치역이 닫혀 있는 것과 쌍대작용소의 치역이 닫혀 있는 것도 동치다.

증명은 [열린 사상 정리](open-mapping-theorem.md)를 몫공간에 적용한다. 치역이 닫혀 있다는 조건이 있어야 선형방정식의 가해성을 [쌍대 공간](dual-space.md) 쪽 직교조건으로 바꿀 수 있다.

# 직관

유한차원에서 $Ax=b$ 가 풀리는 것은 $A^{\top}y=0$ 인 모든 $y$ 에서 $\langle b,y\rangle=0$ 인 것과 같다. $\mathbb R^3$ 의 $A=\mathrm{diag}(1,1,0)$ 과 $b=(1,2,0)$ 으로 확인하면 $A^{\top}y=0$ 의 해는 $y=(0,0,t)$ 이고 $\langle b,y\rangle=0$ 이며 실제로 $x=(1,2,0)$ 이 해다. 풀리는지 알려면 쌍대 쪽 방정식의 해와의 직교만 보면 된다.

$\ell^2$ 에서 $T(x\_1,x\_2,\dots)=(x\_1,x\_2/2,x\_3/3,\dots)$ 로 같은 확인을 해 본다. $T$ 는 자기수반이고 단사이므로 $\ker T^\ast=0$ 이고, 모든 $b\in\ell^2$ 가 직교조건을 만족한다. 그런데 $b=(1,1/2,1/3,\dots)$ 는 $\ell^2$ 에 들지만 $Tx=b$ 를 풀면 $x\_n/n=1/n$ 에서 $x\_n=1$ 이고 이 수열은 $\ell^2$ 에 없다. 직교조건을 만족하면서 풀리지 않는다.

직교조건이 가리키는 집합은 치역의 폐포다. $T$ 의 치역은 유한 수열을 모두 포함하므로 조밀하고, 위 $b$ 가 치역에 없으므로 닫혀 있지 않다. 폐포와 치역이 다른 만큼 직교조건이 가해성보다 약하다. 치역이 닫혀 있다고 두면 두 집합이 같아져 유한차원의 양립조건이 그대로 돌아온다.

# 정의

## 쌍대작용소

$T\in\mathcal B(X,Y)$ 의 **쌍대작용소** $T^\ast:Y^\ast\to X^\ast$ 는 합성으로 정의한다.

$$
T^\ast g=g\circ T\qquad(g\in Y^\ast)
$$

$\Vert T^\ast\Vert=\Vert T\Vert$ 가 성립한다.

## 소멸자

부분공간 $M\subseteq X$ 와 $N\subseteq X^\ast$ 의 **소멸자**는 다음이다.

$$
M^\perp=\lbrace f\in X^\ast:f(x)=0\thinspace(x\in M)\rbrace,\qquad
{}^\perp N=\lbrace x\in X:f(x)=0\thinspace(f\in N)\rbrace
$$

$M^\perp$ 는 노름으로 닫혀 있고 ${}^\perp N$ 도 닫혀 있다. $M$ 이 닫힌 부분공간이면 ${}^\perp(M^\perp)=M$ 이고, 이 등식이 [Hahn–Banach 정리](hahn-banach-theorem.md)의 분리정리에서 나온다.

# 성질

## 닫힌 치역 정리

$X,Y$ 가 Banach 공간이고 $T\in\mathcal B(X,Y)$ 이면 다음 넷이 동치다.[^1]

- $\mathrm{ran}\thinspace T$ 가 닫혀 있다.
- $\mathrm{ran}\thinspace T^\ast$ 가 닫혀 있다.
- $\mathrm{ran}\thinspace T={}^\perp(\ker T^\ast)$ 다.
- $\mathrm{ran}\thinspace T^\ast=(\ker T)^\perp$ 다.

증명의 요지. $\mathrm{ran}\thinspace T\subseteq{}^\perp(\ker T^\ast)$ 는 정의에서 바로 나오고, 오른쪽이 닫힌 부분공간이므로 치역의 폐포도 거기에 들어간다. 반대 포함은 치역의 폐포가 ${}^\perp(\ker T^\ast)$ 와 같다는 것으로, 닫힌 부분공간과 그 소멸자의 소멸자가 일치한다는 성질이다. 치역이 닫혀 있으면 폐포가 치역이므로 셋째 등식을 얻는다. 쌍대 쪽 등식은 몫사상 $X/\ker T\to\mathrm{ran}\thinspace T$ 가 전단사 유계작용소이고, 치역이 닫혀 있어 Banach 공간이므로 열린 사상 정리가 그 역의 유계성을 주는 데서 나온다.

## 하한 유계성

$\mathrm{ran}\thinspace T$ 가 닫혀 있는 것과 다음 상수가 양수인 것은 동치다.

$$
\gamma(T)=\inf\lbrace\Vert Tx\Vert:\mathrm{dist}(x,\ker T)=1\rbrace
$$

$\gamma(T)\gt 0$ 이면 $Tx=y$ 의 해를 $\Vert x\Vert\le C\Vert y\Vert$ 로 통제할 수 있다. 선험적 부등식을 존재 정리로 바꾸는 논증이 이 형태를 쓴다.

## 전사와 단사의 쌍대 판정

- $T$ 가 전사인 것과 $T^\ast$ 가 단사이고 $\mathrm{ran}\thinspace T^\ast$ 가 닫혀 있는 것은 동치다.
- $T$ 의 치역이 조밀한 것과 $T^\ast$ 가 단사인 것은 동치다.
- $T$ 가 단사이고 치역이 닫혀 있는 것과 $T^\ast$ 가 전사인 것은 동치다.

가운데 항목은 치역의 닫힘을 가정하지 않으므로 직관 절의 대각 작용소에도 적용된다. 그 작용소의 쌍대는 단사이고 치역은 조밀하지만 닫혀 있지 않다.

# 활용

- [Fredholm 작용소](fredholm-operators.md)는 핵과 여핵이 유한차원인 작용소이고, 여핵이 유한차원이면 치역이 닫혀 있다. 지표 $\dim\ker T-\dim\ker T^\ast$ 를 쌍대 쪽 핵으로 적는 것이 이 정리의 셋째 등식이다.
- 타원형 편미분방정식의 가해성 판정은 약형식의 작용소에 이 정리를 적용해, 자료가 동차 수반문제의 해 전체와 직교할 때 해가 있다는 꼴로 쓴다.
- [열린 사상 정리](open-mapping-theorem.md)의 따름정리인 유계 역작용소 정리는 $\ker T=0$ 이고 치역이 닫힌 경우의 하한 유계성과 같은 내용이다.

[^1]: Walter Rudin, *Functional Analysis*, 2nd ed., McGraw-Hill, 1991, 정리 4.14 와 4.15.

# 연관 문서

## 선수지식

- [열린 사상 정리](open-mapping-theorem.md)
- [쌍대 공간](dual-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #linear_algebra #theorem
