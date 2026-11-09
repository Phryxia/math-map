# 변분법의 직접법

# 개요

**변분법의 직접법(direct method)** 은 범함수의 최소점이 있다는 것을 Euler–Lagrange 방정식을 풀지 않고 보이는 방법이다. 경계값이 정해진 함수 가운데 Dirichlet 에너지 $\int_\Omega\lvert\nabla u\rvert^2dx$ 가 가장 작은 것을 찾을 때, 에너지를 줄여 가는 함수열은 만들 수 있지만 그 열이 어떤 함수로 수렴해 최솟값을 내는지는 따로 보여야 한다. 직접법은 그 열에서 약하게 수렴하는 부분열을 뽑고, 범함수가 그 극한에서 값이 뛰어오르지 않음을 보여 극한이 최소점임을 얻는다.

# 직관

영역 $\Omega$ 와 경계값 $g$ 에 대해 Dirichlet 에너지를 최소화한다.

$$
J\lbrack u\rbrack=\int_\Omega\lvert\nabla u\rvert^2dx,
\qquad
u=g\thinspace\text{ on }\partial\Omega
$$

[변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식(Euler–Lagrange equation)을 적으면 $\Delta u=0$ 이고, 영역의 모양이 복잡하면 이 방정식의 해를 식으로 적을 수 없다. 그래서 최소점이 있는지만 먼저 묻는다.

유한차원에서 하는 대로 해 본다. $J\ge0$ 이므로 하한 $m=\inf J$ 가 있고 $J\lbrack u_k\rbrack\to m$ 인 열을 잡는다. 유한차원이라면 이 열이 유계일 때 수렴하는 부분열을 뽑고 극한에서 $J=m$ 이라고 결론짓는다.

함수들의 공간에서는 이 단계가 막힌다. $\lbrack 0,1\rbrack$ 위의 함수 $\sin(k\pi x)$ 들은 제곱적분이 모두 $1/2$ 이지만 서로 다른 두 함수의 차의 제곱적분은 $1$ 이어서, 제곱적분으로 잰 거리로는 어떤 부분열도 수렴하지 않는다.

노름 수렴이 안 되니 더 약한 수렴을 쓴다. [Sobolev 공간](sobolev-spaces.md) $H^1(\Omega)$ 은 [Hilbert 공간](hilbert-spaces.md)이므로 유계열은 약수렴하는 부분열 $u_k\rightharpoonup u$ 를 가진다([Banach–Alaoglu 정리](banach-alaoglu.md)). 약수렴에서는 $\nabla u_k$ 가 $\nabla u$ 로 노름수렴하지 않으므로 $J\lbrack u_k\rbrack\to J\lbrack u\rbrack$ 은 기대할 수 없다. 필요한 것은 부등식 $J\lbrack u\rbrack\le\liminf J\lbrack u_k\rbrack$ 한 방향뿐이고, 노름이 약수렴에 대해 하반연속이라는 사실에서 이 부등식이 나온다.

그러면 $J\lbrack u\rbrack\le\liminf J\lbrack u_k\rbrack=m$ 이고, 경계조건이 약수렴에서 보존되므로 $u$ 도 경계값 $g$ 를 갖는다. 따라서 $J\lbrack u\rbrack=m$ 이고 최소점이 있다.

# 정의

$X$ 를 반사적(reflexive) [Banach 공간](banach-spaces.md), $A\subseteq X$ 를 비어 있지 않은 약닫힌(weakly closed) 집합, $J:A\to\mathbb R\cup\lbrace+\infty\rbrace$ 를 범함수라 한다.

$J$ 가 **강제적(coercive)** 이라는 것은 $A$ 안에서 $\lVert u\rVert\to\infty$ 일 때 $J\lbrack u\rbrack\to\infty$ 인 것이다.

$J$ 가 **순차 약하반연속(sequentially weakly lower semicontinuous)** 이라는 것은 $A$ 안의 모든 약수렴 $u_k\rightharpoonup u$ 에 대해 다음이 성립하는 것이다.

$$
J\lbrack u\rbrack\le\liminf_{k\to\infty}J\lbrack u_k\rbrack
$$

$J\lbrack u_k\rbrack\to\inf_AJ$ 인 열을 **최소화열(minimizing sequence)** 이라 한다.

직관 절의 문제를 $\Omega=(0,1)$, $g(0)=0$, $g(1)=1$ 로 놓으면 $X=H^1(0,1)$, $A=\lbrace u: u(0)=0,\thinspace u(1)=1\rbrace$, $J\lbrack u\rbrack=\int_0^1u'^2dx$ 다.

- 강제적이다. $u(0)=0$ 이므로 $\lvert u(x)\rvert\le\int_0^1\lvert u'\rvert dx\le J\lbrack u\rbrack^{1/2}$ 이고, $\lVert u\rVert^2=\int_0^1 u^2+\int_0^1 u'^2\le 2J\lbrack u\rbrack$ 다.
- $u_k(x)=x+\sin(\pi x)/k$ 는 $A$ 에 속하고 $J\lbrack u_k\rbrack=1+\pi^2/(2k^2)$ 이다. $A$ 의 모든 $u$ 에서 $J\lbrack u\rbrack\ge(\int_0^1u'dx)^2=1=J\lbrack x\rbrack$ 이므로 $u_k$ 는 최소화열이다.
- $w_k(x)=x+\sin(k\pi x)/(k\pi)$ 는 $A$ 에 속하고 $w_k\rightharpoonup x$ 이지만 $J\lbrack w_k\rbrack=\int_0^1(1+\cos k\pi x)^2dx=3/2$ 다. $J\lbrack x\rbrack=1\lt 3/2$ 이므로 하반연속 부등식은 성립하고 등식은 성립하지 않는다.

# 성질

## 직접법의 기본 정리

$X$ 가 반사적이고 $A$ 가 비어 있지 않은 약닫힌 집합이며 $J$ 가 $A$ 에서 강제적이고 순차 약하반연속이면 $J$ 는 $A$ 에서 최소점을 갖는다.

증명의 요지. $m=\inf_AJ$ 를 두고 최소화열 $u_k$ 를 잡는다. 강제성에서 $\lVert u_k\rVert$ 가 유계이고, 반사성에서 약수렴 부분열 $u_{k_j}\rightharpoonup u$ 를 뽑는다. $A$ 가 약닫혔으므로 $u\in A$ 다. 약하반연속성에서 $J\lbrack u\rbrack\le\liminf J\lbrack u_{k_j}\rbrack=m$ 이고 $u\in A$ 에서 $m\le J\lbrack u\rbrack$ 이므로 등식이다.

## 볼록성에서 나오는 약하반연속성

$J$ 가 볼록이고 노름 위상에서 하반연속(lower semicontinuous)이면 순차 약하반연속이다. 준위집합(sublevel set) $\lbrace J\le c\rbrace$ 가 볼록이고 노름으로 닫혀 있으므로 [Hahn–Banach 정리](hahn-banach-theorem.md)의 분리 꼴로 약닫혀 있고, 준위집합이 모두 약닫힌 것이 약하반연속성과 같은 조건이다[^1].

노름 자체가 볼록이고 연속이므로 Dirichlet 에너지가 이 판정을 통과한다. 강제성은 경계조건을 고정한 아핀 부분공간에서 [Poincaré 부등식](poincare-inequality.md)이 준다.

## 적분 범함수의 조건

$J\lbrack u\rbrack=\int_\Omega F(x,u,\nabla u)\thinspace dx$ 에서 $F$ 가 매개변수 $\xi$ 에 대해 볼록이고 적분가능한 함수 하나가 $F$ 를 아래에서 받치면 $J$ 는 $W^{1,p}(\Omega)$ 에서 순차 약하반연속이다[^2]. 증명의 요지는 볼록성 부등식

$$
F(x,u,\xi)\ge F(x,u,\eta)+\partial_\xi F(x,u,\eta)\cdot(\xi-\eta)
$$

를 $\xi=\nabla u_k$, $\eta=\nabla u$ 로 쓰고 적분하는 것이다. 우변의 둘째 항은 $\nabla u_k-\nabla u$ 에 선형이어서 약수렴으로 $0$ 이 되고 첫째 항이 남는다.

벡터값 문제 $u:\Omega\to\mathbb R^m$ 에서는 $\xi$ 에 대한 볼록성이 지나치게 강해 탄성론의 에너지가 조건을 만족하지 않는다. 알맞은 조건은 준볼록성(quasiconvexity)이고, 그 아래에서 같은 결론이 성립한다[^2].

## 최소점과 약해

최소점 $u$ 와 임의의 시험함수 $\varphi$ 에 대해 $t\mapsto J\lbrack u+t\varphi\rbrack$ 가 $t=0$ 에서 미분가능하면 1차 변분(first variation)이 $0$ 이므로 $u$ 는 Euler–Lagrange 방정식의 약해(weak solution)다. 약해가 고전해인지는 [타원형 정칙성](elliptic-regularity.md)으로 판정한다. 직접법은 존재를 주고 정칙성 이론이 매끄러움을 준다.

## 반사성이 깨지는 자리

$p=1$ 이면 $W^{1,1}(\Omega)$ 이 반사적이 아니어서 유계 최소화열에서 약수렴 부분열을 뽑을 수 없다. 전변동(total variation) 범함수의 최소화에서는 공간을 [유계변동 함수](bounded-variation.md)들로 넓혀 약 $\ast$ 콤팩트성을 얻고, 극한의 도함수는 함수가 아니라 측도다. 최소면 문제에서 집합 대신 측도를 다루는 완화(relaxation)가 이 때문이다.

# 활용

- [Dirichlet 문제](dirichlet-problem.md)의 해를 에너지 최소화로 얻는다. [Dirichlet 원리](dirichlet-principle.md)가 이 논증이고, 최소점의 1차 변분이 약조화성을 주고 정칙성이 조화함수를 준다.
- [Lax–Milgram 정리](lax-milgram.md)의 쌍선형형식이 대칭이면 약해가 이차 범함수의 최소점이고, 그 존재가 직접법으로도 나온다. 대칭이 아닌 경우는 최소화 문제로 적히지 않아 정리의 사영 논증이 필요하다.
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)의 JKO(Jordan–Kinderlehrer–Otto) 스킴은 각 단계가 측도 공간의 최소화 문제다. $W_2$ 의 아래반연속성과 자유에너지의 콤팩트 준위집합이 직접법의 두 조건을 채운다.
- [등주부등식](isoperimetric-inequality.md)의 최적 집합의 존재도 같은 틀로 얻는다. 둘레를 전변동으로 적고 유계변동 공간에서 최소화열의 극한을 잡는다.

[^1]: H. Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Springer, 2011, Chapter 3 (볼록 하반연속 함수의 약하반연속성과 분리정리).
[^2]: B. Dacorogna, *Direct Methods in the Calculus of Variations*, 2nd ed., Springer, 2008, Chapters 3–4 (적분 범함수의 약하반연속성, 볼록성과 준볼록성).

# 연관 문서

## 선수지식

- [변분법](calculus-of-variations.md)
- [Sobolev 공간](sobolev-spaces.md)
- [Banach–Alaoglu 정리](banach-alaoglu.md)

## 더 알아보기

- [Dirichlet 원리](dirichlet-principle.md)

#analysis #functional_analysis #optimization
