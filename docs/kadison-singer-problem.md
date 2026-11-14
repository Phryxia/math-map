# Kadison–Singer 문제

# 개요

**Kadison–Singer 문제(Kadison–Singer problem)** 는 무한 차원 [Hilbert 공간](hilbert-spaces.md)에서 대각 작용소 위의 순수 상태가 모든 유계 작용소 위의 상태로 하나뿐인 방법으로 늘어나는지 묻는 문제다. 같은 문제를 유한 차원으로 옮기면 다음과 같다. 평면의 짧은 벡터 여럿이 모든 방향에서 고르게 퍼져 있을 때, 이 벡터들을 두 묶음으로 나눠 묶음마다 모든 방향에서 대략 절반씩 퍼져 있게 할 수 있는가.

A. W. Marcus, D. A. Spielman, N. Srivastava 는 벡터가 짧으면 그런 나눔이 존재함을 [실안정 다항식](real-stable-polynomials.md)으로 보여 이 문제를 긍정으로 풀었다.

# 직관

평면의 표준기저 $e_1,e_2$ 를 각각 $k$ 개로 쪼갠 벡터 $e_1/\sqrt k$ ($k$ 개)와 $e_2/\sqrt k$ ($k$ 개)를 둔다. 벡터 $u$ 마다 행렬 $uu^T$ 를 만들어 모두 더하면 단위행렬 $I$ 이다. 단위벡터 $x$ 에 대해 $\sum_i\langle u_i,x\rangle^2=x^TIx=1$ 이므로, 어느 방향으로 재도 벡터들이 그 방향으로 가진 길이의 제곱의 합이 $1$ 이다.

벡터를 두 묶음 $S_1,S_2$ 로 나눈다. $e_1$ 쪽 $k$ 개를 모두 $S_1$ 에 넣으면 $S_1$ 의 합은 $\mathrm{diag}(1,0)$ 이고 $x=e_1$ 방향에서 $1$ 을 다 가져간다. 두 종류를 반씩 나누면 묶음마다 합이 $I/2$ 이고, 어느 방향에서나 $1/2$ 이다.

벡터가 길면 고르게 나눌 수 없다. 길이의 제곱이 $2/3$ 이고 서로 $120^\circ$ 를 이루는 벡터 셋 $u_1,u_2,u_3$ 도 $\sum_iu_iu_i^T=I$ 를 만족한다. 어떻게 나눠도 한 묶음에 둘이 들어가고, 그 합은 $I-u_ju_j^T$ 라서 $u_j$ 에 수직인 방향에서 $1$ 이다. 벡터 하나하나의 길이의 제곱이 작을 때 고른 나눔이 존재하는지가 문제의 내용이다.

# 정의

## 대각 대수와 상태의 확장

$\ell^2=\ell^2(\mathbb N)$ 위의 [유계 작용소](bounded-operators.md) 전체를 $B(\ell^2)$, 표준기저에서 대각인 작용소 전체를 $\mathcal D$ 라 한다. $\mathcal D$ 는 유계 수열의 대수 $\ell^\infty$ 와 같고, 둘 다 [C 스타 대수](c-star-algebras.md)다.

Kadison–Singer 문제는 다음 물음이다[^1]. $\mathcal D$ 위의 순수 상태 $\varphi$ 마다, $\mathcal D$ 에서 $\varphi$ 와 같은 $B(\ell^2)$ 위의 상태가 하나뿐인가. 첫 좌표를 읽는 $\varphi(\mathrm{diag}(a_1,a_2,\dots))=a_1$ 은 순수 상태이고, $T\mapsto\langle Te_1,e_1\rangle$ 이 그 유일한 확장이다. 어려운 것은 극한으로만 정해지는 순수 상태, 곧 $\mathbb N$ 위의 비주 초필터(non-principal ultrafilter)를 따른 극한 $a\mapsto\lim_{\mathcal U}a_n$ 이다.

## Parseval 틀

$u_1,\dots,u_m\in\mathbb C^d$ 가 다음을 만족하면 **Parseval 틀(Parseval frame)** 이라 한다.

$$
\sum_{i=1}^mu_iu_i^\ast=I
$$

직관 절의 쪼갠 기저와 길이의 제곱이 $2/3$ 인 벡터 셋이 Parseval 틀이다.

# 성질

## Marcus–Spielman–Srivastava 정리

$u_1,\dots,u_m\in\mathbb C^d$ 가 Parseval 틀이고 모든 $i$ 에서 $\Vert u_i\Vert^2\le\alpha$ 이면, 자연수 $r$ 마다 $\lbrace 1,\dots,m\rbrace$ 를 $S_1,\dots,S_r$ 로 나눠 각 $j$ 에서 다음이 성립하게 할 수 있다[^2].

$$
\Big\Vert\sum_{i\in S_j}u_iu_i^\ast\Big\Vert\le\Big(\frac{1}{\sqrt r}+\sqrt\alpha\Big)^2
$$

$r=2$, $\alpha\to 0$ 이면 우변이 $1/2$ 로 간다. 직관 절의 쪼갠 기저는 $\alpha=1/k$ 이다. 벡터 셋의 예는 $\alpha=2/3$ 이어서 우변이 $1$ 보다 크고 정리가 아무것도 주지 않는다.

증명의 요지($r=2$). $v_i$ 를 $\mathbb C^{2d}$ 의 무작위 벡터로, 확률 $1/2$ 씩 $\sqrt2(u_i,0)$ 이나 $\sqrt2(0,u_i)$ 로 둔다. $\sum_iE\lbrack v_iv_i^\ast\rbrack=I_{2d}$ 이고 $E\lbrack\Vert v_i\Vert^2\rbrack=2\Vert u_i\Vert^2\le 2\alpha$ 다. [끼움 족](interlacing-families.md)과 실안정 다항식의 논법으로 $\Vert\sum_iv_iv_i^\ast\Vert\le(1+\sqrt{2\alpha})^2$ 인 값의 선택이 존재한다. 첫 블록을 고른 $i$ 를 $S_1$, 나머지를 $S_2$ 로 두면 이 노름은 두 묶음의 노름 가운데 큰 것의 $2$ 배다.

## 동치인 진술

다음은 Kadison–Singer 문제의 긍정과 동치다[^3].

- Anderson 포장 추측(Anderson's paving conjecture). $\varepsilon\gt 0$ 마다 $r$ 이 있어, 대각 성분이 $0$ 인 모든 $T\in B(\ell^2)$ 에 대해 $\mathbb N$ 을 $A_1,\dots,A_r$ 로 나눠 $\Vert P_{A_j}TP_{A_j}\Vert\le\varepsilon\Vert T\Vert$ 로 만들 수 있다. $P_A$ 는 $A$ 의 좌표만 남기는 사영이다[^4].
- Weaver 추측(Weaver's conjecture). Parseval 틀을 상수배한 벡터들이 짧으면, 두 묶음으로 나눠 묶음마다의 노름이 일정한 양만큼 $1$ 보다 작게 할 수 있다[^5]. Marcus–Spielman–Srivastava 정리가 이것을 증명한다.

포장 추측이 성립하면, 순수 상태 $\varphi$ 의 확장 $\psi$ 에서 $\psi(T)$ 가 각 조각 $P_{A_j}TP_{A_j}$ 위의 값으로 정해진다. $\varphi$ 는 초필터를 따르므로 조각 가운데 하나만 $\varphi(P_{A_j})=1$ 이고, 대각 성분이 $0$ 인 $T$ 에서 $\vert\psi(T)\vert\le\varepsilon\Vert T\Vert$ 가 되어 $\psi(T)=0$ 이 유도된다.

# 활용

- 틀 이론. Feichtinger 추측(Feichtinger conjecture), 곧 노름이 아래로 유계인 유계 틀이 유한 개의 Riesz 열로 나뉜다는 진술이 Kadison–Singer 문제와 동치이고 함께 증명된다[^3].
- 제한 가역성. [Bourgain–Tzafriri 제한 가역성 정리](restricted-invertibility.md)의 가장 강한 꼴이 Kadison–Singer 문제와 동치다[^3].
- 그래프의 희소화. 각 간선이 전체 연결성에 기여하는 몫이 작은 그래프는 간선을 두 묶음으로 나눠 [그래프 Laplacian](graph-laplacian.md)을 대략 절반씩 갖게 할 수 있다. 위 정리를 간선마다 하나의 벡터를 둔 Parseval 틀에 쓴 것이다[^2].

[^1]: R. V. Kadison, I. M. Singer, "Extensions of pure states", American Journal of Mathematics 81 (1959), 383–400.
[^2]: A. W. Marcus, D. A. Spielman, N. Srivastava, "Interlacing families II: Mixed characteristic polynomials and the Kadison–Singer problem", Annals of Mathematics 182 (2015), 327–350.
[^3]: P. G. Casazza, M. Fickus, J. C. Tremain, E. Weber, "The Kadison–Singer problem in mathematics and engineering: a detailed account", Contemporary Mathematics 414 (2006), 299–355.
[^4]: J. Anderson, "Extensions, restrictions, and representations of states on C*-algebras", Transactions of the American Mathematical Society 249 (1979), 303–329.
[^5]: N. Weaver, "The Kadison–Singer problem in discrepancy theory", Discrete Mathematics 278 (2004), 227–239.

# 연관 문서

## 선수지식

- [C 스타 대수](c-star-algebras.md)
- [실안정 다항식](real-stable-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #linear_algebra #combinatorics
