# Banach–Alaoglu 정리

# 개요

Banach–Alaoglu 정리는 노름 공간 $X$ 의 쌍대 $X^\ast$ 의 닫힌 단위구가 약 $\ast$ 위상에서 콤팩트하다는 정리다. 무한차원에서 노름 위상의 단위구는 콤팩트하지 않으므로, 위상을 약하게 바꿔 콤팩트성을 되찾는다.

증명은 단위구를 콤팩트 원판들의 곱 안에 넣고 [Tychonoff 정리](tychonoff-theorem.md)를 쓴다. $X$ 가 분리가능이면 단위구의 약 $\ast$ 위상이 거리화 가능해져 콤팩트성이 수열 형태로 쓰인다.

# 직관

최소화 문제에서 유계인 수열의 극한을 잡으려 한다. 유한차원에서는 Bolzano–Weierstrass 정리가 그 극한을 준다([수열의 극한](limits.md)). 무한차원에서 같은 일을 $\ell^2$ 의 표준기저 $e_1,e_2,\dots$ 로 해 본다. $\Vert e_n\Vert=1$ 이므로 이 수열은 유계이지만 $n\neq m$ 에서

$$
\Vert e_n-e_m\Vert=\sqrt 2
$$

이므로 어느 부분열도 Cauchy 수열이 아니고, 노름으로 재는 한 수렴하는 부분열이 없다. 단위구가 노름 위상에서 콤팩트하지 않다는 뜻이다.

노름 수렴은 모든 좌표에서 한꺼번에 가까워질 것을 요구해서 막혔다. 요구를 줄여 좌표를 하나씩 본다. $x\in\ell^2$ 를 고정하면 $\langle e_n,x\rangle=x_n$ 이고 $\sum\_n\vert x_n\vert^2$ 가 유한하므로 $x_n\to 0$ 이다. 그러므로 $x$ 를 무엇으로 잡아도 $\langle e_n,x\rangle$ 가 $0$ 으로 간다. 함숫값마다 수렴을 요구하는 위상에서는 $e_n$ 이 $0$ 으로 가고, 단위구가 그 위상에서 콤팩트해진다.

# 정의

## 약 $\ast$ 위상

$X$ 를 노름 공간, $X^\ast$ 를 유계 선형범함수 전체가 이루는 [쌍대 공간](dual-space.md)이라 한다. **약 $\ast$ 위상**은 각 $x\in X$ 마다 정해지는 평가 사상

$$
E_x:X^\ast\to\mathbb K,\qquad E_x(f)=f(x)
$$

전부를 연속으로 만드는 가장 거친 위상이다. $f_0\in X^\ast$ 의 기저 근방은 유한 개 점 $x_1,\dots,x_n$ 과 $\varepsilon\gt 0$ 으로 정해진다.

$$
V=\lbrace f\in X^\ast\thinspace :\thinspace \vert f(x_j)-f_0(x_j)\vert\lt \varepsilon,\thinspace j=1,\dots,n\rbrace
$$

유한 개 점에서만 값을 비교하므로 노름 위상보다 거칠다.

## 정리

$$
B^\ast=\lbrace f\in X^\ast\thinspace :\thinspace \Vert f\Vert\le 1\rbrace \text{ 는 약 } \ast \text{ 위상에서 콤팩트하다.}
$$

# 성질

## 증명의 요지

각 $x\in X$ 에 대해 $D_x=\lbrace c\in\mathbb K\thinspace :\thinspace \vert c\vert\le\Vert x\Vert\rbrace$ 는 콤팩트하고, 곱

$$
P=\prod\_{x\in X}D_x
$$

는 Tychonoff 정리로 콤팩트하다. $\Phi(f)=(f(x))\_{x\in X}$ 는 $\Vert f\Vert\le 1$ 에서 $\vert f(x)\vert\le\Vert x\Vert$ 이므로 $B^\ast$ 를 $P$ 안으로 보내고, 값이 전부 같으면 같은 범함수이므로 단사다. 약 $\ast$ 위상의 기저 근방이 유한 개 좌표만 제약하므로 $\Phi$ 는 곱위상의 제한과 같은 위상을 준다.

남는 것은 상 $\Phi(B^\ast)$ 가 $P$ 의 닫힌집합이라는 것이다. $P$ 의 점 $(c_x)$ 가 상에 드는 것은 모든 $x,y$ 와 스칼라 $\lambda$ 에서

$$
c_{x+y}=c_x+c_y,\qquad c_{\lambda x}=\lambda c_x
$$

가 성립하는 것과 같다. 각 조건은 좌표 세 개만 보는 닫힌 조건이고 닫힌집합의 교집합은 닫혀 있다. 콤팩트 공간의 닫힌 부분집합이 콤팩트하므로 $B^\ast$ 가 콤팩트하다.

## 분리가능할 때의 수열 형태

$X$ 가 분리가능이고 $\lbrace x_n\rbrace$ 이 조밀한 가산 집합이면

$$
d(f,g)=\sum\_{n=1}^\infty 2^{-n}\min\lbrace 1,\thinspace \vert f(x_n)-g(x_n)\vert\rbrace
$$

이 $B^\ast$ 위에서 약 $\ast$ 위상과 같은 위상을 준다. 콤팩트 거리 공간에서는 콤팩트와 점열 콤팩트가 같으므로, $X^\ast$ 의 유계 수열은 약 $\ast$ 수렴하는 부분열을 갖는다[^1]. $X=\ell^1$ 과 $X^\ast=\ell^\infty$ 가 그 경우다.

$X$ 가 분리가능이 아니면 점열 형태는 보장되지 않는다. 덮개로 서술한 콤팩트성은 그대로 성립한다.

## 반사성과 약한 위상

$X$ 자신의 단위구에 대해서는 반사성이 기준이다.

**정리 (Kakutani).** $X$ 의 닫힌 단위구가 약한 위상에서 콤팩트한 것과 $X$ 가 반사적인 것은 동치다[^2].

반사적이면 $X$ 의 단위구를 $X^{\ast\ast}$ 의 단위구와 같은 것으로 보아 Banach–Alaoglu 정리를 적용한다. $L^1$ 과 $C\lbrack 0,1\rbrack$ 은 반사적이 아니므로 그 단위구는 약한 위상에서도 콤팩트하지 않다.

## 선택공리 의존

증명이 Tychonoff 정리를 거치므로 이 정리도 [선택공리](axiom-of-choice.md)에 의존한다.

# 활용

- **변분법의 직접법.** 최소화열이 유계이면 약 $\ast$ 수렴하는 부분열을 뽑고, 목적함수가 약 $\ast$ 하반연속이면 그 극한이 최소점이다. 반사적 [Banach 공간](banach-spaces.md)에서 이 논증이 미분방정식의 약해 존재 증명으로 쓰인다.
- **측도의 콤팩트성.** 콤팩트 공간 $K$ 에서 $C(K)^\ast$ 가 Radon 측도들의 공간이므로, 전변동이 $1$ 이하인 측도 전체가 약 $\ast$ 콤팩트하다. 확률측도들의 집합도 닫혀 있어 콤팩트하다([측도](measure.md)).
- **극점 표현.** Krein–Milman 정리로 콤팩트 볼록집합은 극점들의 닫힌 볼록껍질이다. Banach–Alaoglu 정리가 그 콤팩트성을 공급하므로 $B^\ast$ 가 극점들로 재구성된다([볼록성](convexity.md)).
- **불변 평균의 존재.** 군 $G$ 가 평균가능이라는 것은 $\ell^\infty(G)^\ast$ 안에 좌평행이동 불변인 평균이 있다는 뜻이다. 유한 부분집합마다 근사 불변 평균을 만들고 약 $\ast$ 콤팩트성으로 극한을 잡는다([평균가능군](amenable-groups.md)).

[^1]: Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Springer, 2011, 3.3 절. 약 $\ast$ 위상의 거리화와 분리가능 공간에서의 수열 형태.
[^2]: Walter Rudin, *Functional Analysis*, 2nd ed., McGraw-Hill, 1991, 정리 3.15 와 4.2 절. Banach–Alaoglu 정리의 증명과 반사성의 특징.

# 연관 문서

## 선수지식

- [Banach 공간](banach-spaces.md)
- [Tychonoff 정리](tychonoff-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #topology #analysis #measure_theory
