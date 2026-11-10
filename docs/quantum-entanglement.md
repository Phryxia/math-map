# 양자 얽힘

# 개요

**양자 얽힘(quantum entanglement)** 은 두 큐비트의 상태를 큐비트마다 따로 정한 상태의 곱으로 쓸 수 없는 성질이다. 두 큐비트를 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 에 두고 측정하면 $00$ 과 $11$ 만 반반으로 나와 두 결과가 언제나 같은데, 큐비트마다 상태를 하나씩 골라서는 이 결과를 만들 수 없다. 상태의 진폭을 $2\times 2$ 행렬로 늘어놓으면 곱으로 쓰이는 상태는 계수가 $1$ 인 행렬이고, 얽힘의 유무는 그 행렬의 계수로, 얽힘의 양은 그 행렬의 특이값으로 정해진다.

# 직관

첫 큐비트를 $a\vert 0\rangle+b\vert 1\rangle$, 둘째 큐비트를 $c\vert 0\rangle+d\vert 1\rangle$ 에 따로 두면 두 큐비트의 상태는 곱

$$
(a\vert 0\rangle+b\vert 1\rangle)\otimes(c\vert 0\rangle+d\vert 1\rangle)=ac\vert 00\rangle+ad\vert 01\rangle+bc\vert 10\rangle+bd\vert 11\rangle
$$

이다. 개요의 상태가 이 꼴이려면 $ac=bd=\tfrac1{\sqrt 2}$ 이고 $ad=bc=0$ 이어야 한다. $ad=0$ 이면 $a=0$ 이거나 $d=0$ 인데, $a=0$ 이면 $ac=0$ 이고 $d=0$ 이면 $bd=0$ 이다. 어느 쪽이든 모순이므로 개요의 상태는 곱으로 쓰이지 않는다.

곱의 진폭을 행렬로 늘어놓으면 다음과 같다.

$$
\begin{pmatrix}ac&ad\cr bc&bd\end{pmatrix}=\begin{pmatrix}a\cr b\end{pmatrix}\begin{pmatrix}c&d\end{pmatrix}
$$

이 행렬은 계수가 $1$ 이라 [행렬식](determinants.md) $ac\cdot bd-ad\cdot bc$ 가 $0$ 이다. 개요의 상태는 행렬이 $\tfrac1{\sqrt 2}I$ 이고 행렬식이 $\tfrac12$ 이다. 그래서 진폭 행렬의 행렬식이 $0$ 인지만 보면 곱인지 아닌지 가려진다.

상태 $\cos\theta\vert 00\rangle+\sin\theta\vert 11\rangle$ 은 $\theta=0$ 에서 곱 $\vert 0\rangle\otimes\vert 0\rangle$ 이고 $0\lt \theta\lt \pi/2$ 에서는 행렬식이 $\cos\theta\sin\theta\ne 0$ 이라 곱이 아니다. 같은 "곱이 아닌" 상태라도 $\theta$ 가 $0$ 에 가까우면 거의 곱이고 $\theta=\pi/4$ 이면 개요의 상태다. 이 차이를 수 하나로 재는 것이 정의 절의 얽힘 엔트로피다.

# 정의

## 곱 상태와 얽힌 상태

$\mathbb C^{d\_A}\otimes\mathbb C^{d\_B}$ 의 단위벡터 $\vert\psi\rangle$ 가 $\vert\alpha\rangle\otimes\vert\beta\rangle$ 꼴이면 **곱 상태(product state)**, 아니면 **얽힌 상태(entangled state)** 라 한다. [양자 회로](quantum-circuits.md)의 두 큐비트 회로 $\mathrm{CNOT}\cdot(H\otimes I)$ 가 $\vert 00\rangle$ 에서 만드는 $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 은 직관 절의 계산대로 얽힌 상태다. $\vert 0\rangle\otimes\vert +\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 01\rangle)$ 은 곱 상태다.

## 진폭 행렬

계산 기저로 $\vert\psi\rangle=\sum_{i,j}m\_{ij}\vert i\rangle\otimes\vert j\rangle$ 라 쓸 때 $d\_A\times d\_B$ 행렬 $M=(m\_{ij})$ 를 $\vert\psi\rangle$ 의 **진폭 행렬(coefficient matrix)** 이라 한다. $\vert\psi\rangle$ 가 곱 상태인 것은 $M$ 의 계수가 $1$ 인 것과 동치다. $\vert 0\rangle\otimes\vert +\rangle$ 의 진폭 행렬은 $\tfrac1{\sqrt 2}\begin{pmatrix}1&1\cr 0&0\end{pmatrix}$ 이고 계수가 $1$ 이다.

네 진폭이 모두 $0$ 이 아니어도 곱일 수 있고 얽힐 수도 있다. 다음 상태는 행렬식이 $0$ 이라 곱이다.

$$
\tfrac12\bigl(\vert 00\rangle+\vert 01\rangle+\vert 10\rangle+\vert 11\rangle\bigr)=\vert +\rangle\otimes\vert +\rangle
$$

반면 $\tfrac12(\vert 00\rangle+\vert 01\rangle+\vert 10\rangle-\vert 11\rangle)$ 은 진폭 행렬이 $\tfrac12\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}$ 이고 행렬식이 $-\tfrac12$ 라 얽혀 있다.

## Schmidt 분해

진폭 행렬의 [특이값 분해](singular-value-decomposition.md) $M=U\Sigma V^\dagger$ 를 복소 유니터리 $U,V$ 로 잡고 $\vert u\_k\rangle=\sum_iU\_{ik}\vert i\rangle$, $\vert v\_k\rangle=\sum_j\overline{V\_{jk}}\vert j\rangle$ 로 두면

$$
\vert\psi\rangle=\sum_{k=1}^{r}s_k\thinspace\vert u_k\rangle\otimes\vert v_k\rangle,\qquad s_1\ge\dots\ge s_r\gt 0,\qquad\sum_ks_k^2=1
$$

이다. 이 꼴을 **Schmidt 분해(Schmidt decomposition)**, $s\_k$ 를 **Schmidt 계수(Schmidt coefficient)**, $r=\mathrm{rank}\thinspace M$ 을 **Schmidt 랭크(Schmidt rank)** 라 한다. $\lbrace\vert u\_k\rangle\rbrace$ 와 $\lbrace\vert v\_k\rangle\rbrace$ 는 각각 정규직교다. 곱 상태는 Schmidt 랭크가 $1$ 인 상태다.

직관 절의 $\cos\theta\vert 00\rangle+\sin\theta\vert 11\rangle$ 은 이미 이 꼴이고 Schmidt 계수가 $\cos\theta,\sin\theta$ 다. 앞 절의 $\tfrac12(\vert 00\rangle+\vert 01\rangle+\vert 10\rangle-\vert 11\rangle)$ 은 $M=H\cdot\tfrac1{\sqrt 2}I\cdot I$ 로 분해되어 $\tfrac1{\sqrt 2}(\vert +\rangle\otimes\vert 0\rangle+\vert -\rangle\otimes\vert 1\rangle)$ 이고, Schmidt 계수가 $\vert\Phi^+\rangle$ 과 같은 $\tfrac1{\sqrt 2},\tfrac1{\sqrt 2}$ 다.

## 얽힘 엔트로피

$\vert\psi\rangle$ 의 Schmidt 계수로

$$
E(\psi)=-\sum_ks_k^2\log_2s_k^2
$$

를 $\vert\psi\rangle$ 의 **얽힘 엔트로피(entanglement entropy)** 라 한다. 확률분포 $(s\_1^2,\dots,s\_r^2)$ 의 [Shannon 엔트로피](entropy.md)이고, 곱 상태에서 $0$, $\mathbb C^d\otimes\mathbb C^d$ 에서 모든 $s\_k$ 가 $1/\sqrt d$ 일 때 최댓값 $\log_2d$ 다. 직관 절의 상태는 $h(p)=-p\log_2p-(1-p)\log_2(1-p)$ 로 $E=h(\cos^2\theta)$ 이다.

$\theta=\pi/8$ 이면 $h(0.854)=0.60$, $\theta=\pi/4$ 이면 $1$ 이다. 얽힘 엔트로피가 $1$ 인 두 큐비트 상태 하나를 **ebit** 이라 한다.

## 분리 가능한 혼합 상태

[밀도 행렬](density-matrix.md) $\rho\_{AB}$ 가 확률 $p\_k$ 와 밀도 행렬 $\rho\_k^A$, $\rho\_k^B$ 로

$$
\rho_{AB}=\sum_kp_k\thinspace\rho_k^A\otimes\rho_k^B
$$

라 쓰이면 **분리 가능(separable)** 하다 하고, 아니면 얽혀 있다고 한다. 순수 상태에서는 분리 가능한 것이 곱 상태인 것과 같다. $\tfrac12(\vert 00\rangle\langle 00\vert+\vert 11\rangle\langle 11\vert)$ 은 분리 가능하다. 계산 기저로 재면 $\vert\Phi^+\rangle$ 과 똑같이 $00$ 과 $11$ 만 반반으로 나오지만, 이 상관은 동전 하나를 던져 두 큐비트를 같은 값에 두는 것으로 만들어진다.

# 성질

## 축소 밀도 행렬과 Schmidt 계수

$\vert\psi\rangle$ 의 축소 밀도 행렬은 Schmidt 분해로

$$
\rho_A=\sum_ks_k^2\vert u_k\rangle\langle u_k\vert,\qquad\rho_B=\sum_ks_k^2\vert v_k\rangle\langle v_k\vert
$$

이다. 행렬로는 $\rho\_A=MM^\dagger$ 이고 $\rho\_B=M^{\mathsf T}\overline M$ 이다. 따라서 $\rho\_A$ 와 $\rho\_B$ 는 $0$ 이 아닌 [고윳값](eigenvalues.md)이 같고, 얽힘 엔트로피는 어느 쪽의 von Neumann 엔트로피로 계산해도 같다.

순수 상태 $\vert\psi\rangle$ 가 곱 상태인 것은 $\rho\_A$ 가 순수 상태인 것과 동치다. $\vert\Phi^+\rangle$ 은 $\rho\_A=\tfrac12 I$ 이다.

## 국소 연산과 고전 통신

두 사람이 각자 자기 쪽 큐비트에만 유니터리와 측정을 걸고 측정 결과를 고전 비트로 주고받는 절차를 **LOCC**(local operations and classical communication)라 한다. $U\_A\otimes U\_B$ 는 Schmidt 계수를 바꾸지 않으므로 얽힘 엔트로피를 바꾸지 않는다. LOCC 로는 얽힘 엔트로피의 기댓값이 늘지 않는다.

내림차순으로 정렬한 확률벡터 $x$, $y$ 가 모든 $k$ 에서 $\sum_{i\le k}x\_i\le\sum_{i\le k}y\_i$ 이면 $x$ 가 $y$ 에 **다수화(majorization)** 된다고 하고 $x\prec y$ 라 쓴다. Nielsen 정리(Nielsen's theorem)는 $\vert\psi\rangle$ 를 LOCC 로 확률 $1$ 로 $\vert\phi\rangle$ 로 바꿀 수 있는 것이 Schmidt 계수의 제곱 벡터 사이에 $(s\_k(\psi)^2)\prec(s\_k(\phi)^2)$ 가 성립하는 것과 동치라는 정리다[^1]. $(\tfrac12,\tfrac12)\prec(\cos^2\theta,\sin^2\theta)$ 이므로 $\vert\Phi^+\rangle$ 은 직관 절의 모든 상태로 바뀌고, 거꾸로는 $\theta=\pi/4$ 일 때만 바뀐다.

## 얽힘 농축과 희석

$\vert\psi\rangle$ 의 사본 $n$ 개를 LOCC 로 $\vert\Phi^+\rangle$ 약 $nE(\psi)$ 개로 바꿀 수 있고(얽힘 농축, entanglement concentration. 혼합 상태에서는 [얽힘 정제](entanglement-distillation.md)), 거꾸로 $\vert\Phi^+\rangle$ 약 $nE(\psi)$ 개로 $\vert\psi\rangle$ 의 사본 $n$ 개를 만들 수 있다(얽힘 희석, entanglement dilution)[^2]. 두 변환 모두 $n\to\infty$ 에서 충실도(fidelity)가 $1$ 로 가고 비율 $E(\psi)$ 보다 좋게는 할 수 없다. 순수 상태의 얽힘을 ebit 의 개수로 셀 때 그 개수가 얽힘 엔트로피다. $\theta=\pi/8$ 인 상태 $100$ 개에서 $\vert\Phi^+\rangle$ 약 $60$ 개가 나온다.

## 부분 전치 판정법

$\rho\_{AB}=\sum m\_{ij,kl}\vert i\rangle\langle k\vert\otimes\vert j\rangle\langle l\vert$ 에서 $B$ 쪽만 전치한 $\rho^{T\_B}=\sum m\_{ij,kl}\vert i\rangle\langle k\vert\otimes\vert l\rangle\langle j\vert$ 를 **부분 전치(partial transpose)** 라 한다. 분리 가능한 상태는 $\rho^{T\_B}=\sum_kp\_k\rho\_k^A\otimes(\rho\_k^B)^{\mathsf T}$ 이고 전치한 밀도 행렬도 밀도 행렬이므로, $\rho^{T\_B}$ 의 고윳값이 모두 $0$ 이상이다(Peres 판정법, Peres criterion)[^3]. $\mathbb C^2\otimes\mathbb C^2$ 와 $\mathbb C^2\otimes\mathbb C^3$ 에서는 거꾸로 $\rho^{T\_B}$ 의 고윳값이 모두 $0$ 이상이면 분리 가능하다(Horodecki 정리, Horodecki theorem)[^4].

$\vert\Phi^+\rangle\langle\Phi^+\vert$ 의 부분 전치는 다음과 같다.

$$
\tfrac12\bigl(\vert 00\rangle\langle 00\vert+\vert 01\rangle\langle 10\vert+\vert 10\rangle\langle 01\vert+\vert 11\rangle\langle 11\vert\bigr)
$$

이 행렬은 $\vert 01\rangle-\vert 10\rangle$ 에서 고윳값 $-\tfrac12$ 을 가진다. 다음 상태를 등방 상태(isotropic state)라 한다.

$$
\rho\_p=p\vert\Phi^+\rangle\langle\Phi^+\vert+(1-p)\tfrac14 I
$$

등방 상태는 부분 전치의 고윳값이 $\tfrac{1+p}4$ (세 번)와 $\tfrac{1-3p}4$ 이므로, 두 정리에 따라 $p\gt 1/3$ 일 때만 얽혀 있다.

## 분리 가능성 판정의 계산 복잡도

차원이 커지면 부분 전치로는 판정이 끝나지 않고, 부분 전치가 잡지 못하는 상태는 [얽힘 증인](entanglement-witness.md)으로 검출한다. 밀도 행렬이 주어질 때 그것이 분리 가능한지 다항식 역수의 정밀도로 판정하는 문제는 NP(nondeterministic polynomial time)-어려움(NP-hard)이다[^5]. NP-어려움은 [NP-완전성](np-completeness.md)의 모든 문제가 다항 시간에 그 문제로 환산된다는 뜻이다.

# 활용

- 비국소 상관. 분리 가능한 상태는 국소 숨은 변수 모형이므로 [Bell 부등식](bell-inequality.md)의 CHSH(Clauser–Horne–Shimony–Holt) 값이 $2$ 이하다. $2$ 를 넘는 값을 내려면 얽힌 상태가 있어야 하고, $\vert\Phi^+\rangle$ 이 $2\sqrt 2$ 를 낸다.
- 양자 순간이동. [양자 순간이동](quantum-teleportation.md)은 ebit 하나와 고전 비트 두 개로 큐비트 하나를 옮기고, 그 과정에서 ebit 이 소모된다.
- 초고밀도 부호화. ebit 하나를 나눠 가지면 큐비트 하나를 보내 고전 비트 두 개를 전한다. [Holevo 한계](holevo-bound.md)가 얽힘 없이 큐비트 하나로 보낼 수 있는 양을 $1$ 비트로 제한한다.
- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)의 얽힘 기반 규약은 나눠 가진 $\vert\Phi^+\rangle$ 을 같은 기저로 측정한 결과를 키로 쓴다.
- 텐서의 계수. 진폭 행렬의 계수는 [텐서곱](tensor-products.md)의 원소를 단순텐서의 합으로 쓸 때 필요한 항의 최소 개수다. 세 계 이상의 [다자간 얽힘](multipartite-entanglement.md)은 3 차 이상 텐서의 계수로 분류된다.
- 위상적 상. [애니온](anyons.md)을 갖는 2 차원 계의 바닥 상태는 영역 하나의 얽힘 엔트로피에 총 양자 차원으로 정해지는 보정항이 붙는다.

[^1]: M. A. Nielsen, Conditions for a class of entanglement transformations, *Physical Review Letters* 83 (1999), 436–439.
[^2]: C. H. Bennett, H. J. Bernstein, S. Popescu, B. Schumacher, Concentrating partial entanglement by local operations, *Physical Review A* 53 (1996), 2046–2052.
[^3]: A. Peres, Separability criterion for density matrices, *Physical Review Letters* 77 (1996), 1413–1415.
[^4]: M. Horodecki, P. Horodecki, R. Horodecki, Separability of mixed states: necessary and sufficient conditions, *Physics Letters A* 223 (1996), 1–8.
[^5]: L. Gurvits, Classical deterministic complexity of Edmonds' problem and quantum entanglement, *Proceedings of the 35th ACM Symposium on Theory of Computing* (2003), 10–19.

# 연관 문서

## 선수지식

- [밀도 행렬](density-matrix.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

- [얽힘 증인](entanglement-witness.md)
- [얽힘 정제](entanglement-distillation.md)
- [다자간 얽힘](multipartite-entanglement.md)

#computation #linear_algebra #information_theory
