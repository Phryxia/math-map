# Riesz–Markov–Kakutani 표현 정리

# 개요

**Riesz–Markov–Kakutani 표현 정리(Riesz–Markov–Kakutani representation theorem)** 는 콤팩트 Hausdorff 공간 $K$ 위의 [연속함수](continuity.md)에 실수를 주는 양의 선형범함수가 하나의 측도에 대한 적분이라는 정리다. 범함수 $\Lambda$ 가 주어지면 $\Lambda f=\int_K f\thinspace d\mu$ 인 정칙 Borel 측도 $\mu$ 가 유일하게 존재한다.

[부호 측도](signed-measures.md)로 넓히면 연속함수 공간 $C(K)$ 의 [쌍대 공간](dual-space.md)이 $K$ 위의 유한 부호 정칙 Borel 측도의 공간과 같고, 쌍대 노름이 전변동 노름과 같다. 측도를 집합함수로 세우지 않고 연속함수에 대한 평균으로 세울 수 있다는 것이 이 정리의 내용이다.

# 직관

$[0,1]$ 위의 연속함수 $f$ 에 $\Lambda f=f(\tfrac12)$ 를 주는 규칙이 있다. $\Lambda$ 는 더하기와 상수배를 보존하고, $f\ge 0$ 이면 $\Lambda f\ge 0$ 이다. 이 규칙이 어떤 측도로 적분한 값인지 알려면 집합 $E$ 의 측도를 $\Lambda$ 에서 읽어 내야 한다. $E$ 에서 $1$, 밖에서 $0$ 인 함수 $\mathbf 1\_E$ 를 넣으면 되겠지만 이 함수는 연속이 아니어서 $\Lambda$ 에 넣을 수 없다.

그래서 $\mathbf 1\_E$ 에 가까운 연속함수를 넣는다. $E=[0,\tfrac12]$ 이면 $[0,\tfrac12]$ 에서 $1$ 이고 $\tfrac12+\tfrac1n$ 이후로 $0$ 이며 그 사이에서 직선으로 내려가는 함수 $g_n$ 을 잡는다. $g_n$ 은 $n$ 이 커질수록 작아지고, $\Lambda$ 가 양수를 양수로 보내므로 $\Lambda g_n$ 도 작아진다. 그 극한을 $[0,\tfrac12]$ 의 측도로 둔다. 이 예에서는 모든 $n$ 에서 $g_n(\tfrac12)=1$ 이므로 측도가 $1$ 이다.

$E=[0,\tfrac13]$ 으로 같은 일을 하면 $n$ 이 충분히 클 때 $g_n(\tfrac12)=0$ 이므로 측도가 $0$ 이다. 결과는 $\tfrac12$ 를 포함하는 집합에 $1$ 을, 포함하지 않는 집합에 $0$ 을 주는 측도이고, 이 측도로 $f$ 를 적분하면 $f(\tfrac12)$ 가 나온다.

일반적인 $\Lambda$ 에서도 열린집합은 그 안에 받침이 있는 연속함수로 아래에서, 닫힌집합은 그 집합에서 $1$ 인 연속함수로 위에서 다가간다. 이런 함수가 충분히 많은 것은 $K$ 가 콤팩트 Hausdorff 이기 때문이고, 이 극한들이 가산 가법성을 만족하는지가 증명의 중심이다.

# 정의

## 양의 선형범함수

$C(K)$ 는 콤팩트 Hausdorff 공간 $K$ 위의 실숫값 연속함수 전체이고 노름은 $\Vert f\Vert\_\infty=\sup_K\lvert f\rvert$ 다. 선형범함수 $\Lambda:C(K)\to\mathbb R$ 가 $f\ge 0$ 일 때마다 $\Lambda f\ge 0$ 을 만족하면 **양의 선형범함수(positive linear functional)** 라 한다.

양의 선형범함수는 자동으로 유계다. $-\Vert f\Vert\_\infty\le f\le\Vert f\Vert\_\infty$ 에 $\Lambda$ 를 적용하면 $\lvert\Lambda f\rvert\le\Lambda(1)\Vert f\Vert\_\infty$ 가 나온다.

## 정칙 측도

$K$ 의 Borel 집합 위의 유한 측도 $\mu$ 가 모든 Borel 집합 $E$ 에서

$$
\mu(E)=\inf\lbrace\mu(U):U\supseteq E,\thickspace U\thickspace\text{열린집합}\rbrace=\sup\lbrace\mu(C):C\subseteq E,\thickspace C\thickspace\text{콤팩트}\rbrace
$$

를 만족하면 **정칙(regular)** 이라 한다. 유한 부호 측도 $\nu$ 는 전변동 $\lvert\nu\rvert$ 가 정칙일 때 정칙이라 한다. $K$ 위의 유한 부호 정칙 Borel 측도 전체를 $M(K)$ 로 쓰고 전변동 노름 $\Vert\nu\Vert=\lvert\nu\rvert(K)$ 를 준다.

$K$ 가 콤팩트 거리공간이면 모든 유한 Borel 측도가 정칙이다. 정칙성은 거리화할 수 없는 $K$ 에서 측도의 유일성을 지키는 조건이다.

# 성질

## 양의 범함수의 표현

$K$ 가 콤팩트 Hausdorff 공간이고 $\Lambda$ 가 $C(K)$ 위의 양의 선형범함수이면, 모든 $f\in C(K)$ 에서

$$
\Lambda f=\int_K f\thinspace d\mu
$$

인 정칙 Borel 측도 $\mu$ 가 유일하게 존재한다. $\mu(K)=\Lambda(1)$ 이다.

증명의 요지. 열린집합 $U$ 에는 $\mu(U)=\sup\lbrace\Lambda f:0\le f\le 1,\thickspace\mathrm{supp}\thinspace f\subseteq U\rbrace$ 를 주고, 임의의 집합에는 그것을 포함하는 열린집합의 값의 하한을 준다. 이 집합함수가 외측도이고 Borel 집합이 가측임을 보이면 [Carathéodory 확장정리](caratheodory-extension.md)로 측도가 나온다. 콤팩트 집합 $C$ 와 그것을 포함하는 열린집합 $U$ 사이에 $C$ 에서 $1$ 이고 받침이 $U$ 안에 있는 연속함수가 있다는 Urysohn 보조정리([분리공리](separation-axioms.md))가 모든 단계에서 쓰인다. 마지막으로 $f$ 의 값의 범위를 잘게 나누어 $\Lambda f$ 와 $\int f\thinspace d\mu$ 가 오차 안에서 같음을 보인다.

## 쌍대 공간의 표현

$C(K)$ 위의 유계 선형범함수 $\Lambda$ 마다 $\Lambda f=\int_K f\thinspace d\nu$ 인 $\nu\in M(K)$ 가 유일하게 존재하고 $\Vert\Lambda\Vert=\lvert\nu\rvert(K)$ 다. 곧 사상 $\nu\mapsto(f\mapsto\int f\thinspace d\nu)$ 는 $M(K)$ 에서 $C(K)^\ast$ 로 가는 등거리 동형사상이다.

증명의 요지. $f\ge 0$ 에서 $\Lambda^+f=\sup\lbrace\Lambda g:0\le g\le f\rbrace$ 로 두고 선형으로 넓히면 $\Lambda^+$ 와 $\Lambda^-=\Lambda^+-\Lambda$ 가 둘 다 양의 선형범함수다. 각각에 앞 절의 정리를 적용해 얻은 두 측도의 차가 $\nu$ 다. $\Vert\Lambda\Vert\le\lvert\nu\rvert(K)$ 는 $\lvert\int f\thinspace d\nu\rvert\le\Vert f\Vert\_\infty\lvert\nu\rvert(K)$ 에서 나온다. 반대 부등식은 $\nu$ 의 Hahn 분해의 양집합과 음집합을 콤팩트 집합으로 안에서 근사하고, Urysohn 보조정리로 양집합 쪽에서 $1$, 음집합 쪽에서 $-1$ 에 가까운 연속함수를 만들어 얻는다.

## 국소 콤팩트 공간

$X$ 가 국소 콤팩트 Hausdorff 공간이면 콤팩트 받침을 갖는 연속함수 공간 $C_c(X)$ 위의 양의 선형범함수가 같은 방식으로 Radon 측도에 대한 적분이다. Radon 측도는 콤팩트 집합에서 유한하고, 모든 Borel 집합에서 바깥 정칙이며 열린집합에서 안쪽 정칙인 Borel 측도다. 무한대에서 $0$ 으로 가는 연속함수 공간 $C_0(X)$ 의 쌍대 공간은 $X$ 위의 유한 부호 정칙 Borel 측도의 공간이다.

## 구간의 경우

$K=[0,1]$ 이면 유한 부호 정칙 Borel 측도 $\nu$ 와 $g(x)=\nu([0,x])$ 로 정한 오른쪽 연속인 [유계변동 함수](bounded-variation.md) $g$ 가 대응한다. 그래서 $C[0,1]$ 위의 유계 선형범함수는 모두

$$
\Lambda f=\int_0^1 f\thinspace dg
$$

꼴의 [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)이고 $\Vert\Lambda\Vert$ 는 $g$ 의 전변동이다. Riesz 가 1909 년에 처음 증명한 것이 이 꼴이다[^1].

# 활용

- [Banach–Alaoglu 정리](banach-alaoglu.md)와 함께 쓰면 콤팩트 공간 $K$ 위의 확률측도 전체가 약 $\ast$ 위상에서 콤팩트하다. 연속사상 $T:K\to K$ 에 대해 $\frac1n\sum_{k\lt n}\delta_{T^kx}$ 의 극한점을 잡아 불변 확률측도의 존재를 증명하는 Krylov–Bogolyubov 정리(Krylov–Bogolyubov theorem)가 이 콤팩트성을 쓴다.
- [Haar 측도](haar-measure.md)는 $C_c(G)$ 위의 평행이동 불변인 양의 선형범함수로 먼저 세우고 이 정리로 측도로 바꾸어 구성할 수 있다.
- [약수렴](weak-convergence.md)은 콤팩트 거리공간 위에서 확률측도를 $C(K)^\ast$ 의 원소로 본 약 $\ast$ 수렴과 같다.
- [스펙트럼 정리](spectral-theorem.md)의 연속 함수해석은 자기수반 작용소 $A$ 와 벡터 $x$ 에 대해 $f\mapsto\langle f(A)x,x\rangle$ 이 스펙트럼 위 연속함수의 양의 선형범함수이므로, 이 정리로 스펙트럼 측도를 얻는다.

[^1]: F. Riesz, "Sur les opérations fonctionnelles linéaires", *Comptes Rendus de l'Académie des Sciences* **149** (1909), 974–977. 일반 콤팩트 Hausdorff 공간으로의 확장은 S. Kakutani, "Concrete representation of abstract (M)-spaces", *Annals of Mathematics* **42** (1941), 994–1024.

# 연관 문서

## 선수지식

- [부호 측도](signed-measures.md)
- [쌍대 공간](dual-space.md)
- [분리공리](separation-axioms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #functional_analysis #topology #theorem
