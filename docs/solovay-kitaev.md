# Solovay–Kitaev 정리

# 개요

**Solovay–Kitaev 정리(Solovay–Kitaev theorem)** 는 정해진 몇 가지 기본 회전만 곱해서 원하는 회전을 짧은 곱으로 근사할 수 있다는 정리다. 양자 컴퓨터는 몇 종류의 기본 게이트만 실제로 걸 수 있고, 회로가 요구하는 임의의 게이트는 그 곱으로 흉내 내야 한다. 기본 게이트를 무작위로 많이 곱하면 원하는 게이트에 가까워지기는 하지만, 정확도를 높일 때 곱의 길이가 얼마나 늘어나는지는 따로 보여야 한다. 이 정리는 정확도 $\varepsilon$ 을 얻는 데 길이가 $\log(1/\varepsilon)$ 의 거듭제곱 정도면 충분하다는 것을 보이고 그 곱을 찾는 절차를 준다.

# 직관

[Lie 군](lie-groups.md) $\mathrm{SU}(2)$ 의 원소 두 개 $S=\lbrace A,A^{-1},B,B^{-1}\rbrace$ 를 골라 곱을 만든다. 길이 $\ell$ 이하의 곱은 많아도 $4^\ell$ 개다. $\mathrm{SU}(2)$ 는 3차원이므로 반지름 $\varepsilon$ 인 공으로 전체를 덮으려면 공이 $\varepsilon^{-3}$ 개쯤 필요하다. 길이 $\ell$ 의 곱들이 $\varepsilon$ 그물을 이루려면 $4^\ell\ge \varepsilon^{-3}$, 곧 $\ell\ge 3\log(1/\varepsilon)/\log 4$ 여야 한다. 길이는 적어도 $\log(1/\varepsilon)$ 만큼 자란다.

위쪽은 이 셈으로 잡히지 않는다. $S$ 가 생성하는 부분군이 조밀하다는 사실은 각 원소마다 근사식이 있다고만 말하고, 그 길이가 $\varepsilon$ 에 따라 어떻게 자라는지는 말하지 않는다. 길이 $\ell$ 의 곱을 전부 나열해 가장 가까운 것을 찾는 방법은 $4^\ell$ 번을 세므로 $\varepsilon$ 을 열 배 줄일 때마다 비용이 상수배가 아니라 거듭제곱으로 뛴다.

나열로 막혔으니 이미 얻은 근사를 재료로 쓴다. $U$ 를 정확도 $\varepsilon$ 으로 근사하는 $W$ 를 찾았으면 오차 $UW^{-1}$ 은 항등원에서 $\varepsilon$ 이내다. 항등원 근처의 원소는 항등원에서 $\sqrt{\varepsilon}$ 쯤 떨어진 두 원소의 교환자로 쓸 수 있고, 그 두 원소는 정확도 $\sqrt{\varepsilon}$ 으로만 근사하면 된다. 정확도 $\sqrt{\varepsilon}$ 의 근사식 네 개를 교환자 꼴로 엮으면 정확도가 $\varepsilon$ 보다 좋아진다.

한 번 엮을 때 길이는 상수배가 되고 오차의 지수는 $3/2$ 배가 된다. 오차가 거듭제곱으로 줄고 길이는 상수배로만 늘므로 $\varepsilon$ 에 이르는 데 필요한 엮기 횟수가 $\log\log(1/\varepsilon)$ 이고 길이가 $\log(1/\varepsilon)$ 의 다항이 된다.

# 정의

## 작용소 노름 거리

$\mathrm{SU}(d)$ 의 두 원소 사이의 **작용소 노름(operator norm) 거리** 는 다음 값이다.

$$
d(U,V)=\Vert U-V\Vert=\sup\_{\Vert x\Vert=1}\Vert (U-V)x\Vert
$$

$d(I,-I)=2$ 이다. $\mathrm{SU}(2)$ 의 $R=\mathrm{diag}(e^{i\theta/2},e^{-i\theta/2})$ 이면 $R-I$ 가 대각행렬이므로 $d(R,I)=\vert e^{i\theta/2}-1\vert=2\sin(\theta/4)$ 이고, $\theta$ 가 작으면 약 $\theta/2$ 다.

## 보편 게이트 집합

**보편 게이트 집합(universal gate set)** 은 역원에 닫혀 있고 생성하는 부분군 $\langle S\rangle$ 이 $\mathrm{SU}(d)$ 에서 조밀한 유한 집합 $S\subseteq \mathrm{SU}(d)$ 다. $S\_\ell$ 은 $S$ 의 원소를 $\ell$ 개 이하 곱해 얻는 원소 전체다.

$\theta/\pi$ 가 무리수일 때 $z$ 축 회전 $A=\mathrm{diag}(e^{-i\theta/2},e^{i\theta/2})$ 와 $x$ 축 회전 $B=\begin{pmatrix}\cos(\theta/2)&-i\sin(\theta/2)\cr -i\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}$ 로 만든 $S=\lbrace A,A^{-1},B,B^{-1}\rbrace$ 는 $\mathrm{SU}(2)$ 의 보편 게이트 집합이다. $A$ 의 거듭제곱은 $z$ 축 회전 전체에서 조밀하고, $B$ 의 거듭제곱은 $x$ 축 회전 전체에서 조밀하며, $\mathrm{SU}(2)$ 의 모든 원소는 $z$ 축, $x$ 축, $z$ 축 회전의 곱이다. 반면 $\sigma\_x=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $\sigma\_y=\begin{pmatrix}0&-i\cr i&0\end{pmatrix}$, $\sigma\_z=\mathrm{diag}(1,-1)$ 에 대해 $\pm I$, $\pm i\sigma\_x$, $\pm i\sigma\_y$, $\pm i\sigma\_z$ 여덟 원소로 된 집합은 곱에 닫힌 유한군이므로 조밀한 부분군을 생성하지 않는다.

## 군 교환자

두 원소의 **군 교환자(group commutator)** 는 다음 원소다.

$$
\lbrack U,V\rbrack=UVU^{-1}V^{-1}
$$

$U,V$ 가 둘 다 대각행렬이면 $UV=VU$ 이므로 $\lbrack U,V\rbrack=I$ 다. $U=i\sigma\_x$, $V=i\sigma\_z$ 로 두면 $UV=-VU$ 이므로 $\lbrack U,V\rbrack=-I$ 다.

# 성질

## 근사 길이의 상한

**정리 (Solovay–Kitaev).** $S$ 가 $\mathrm{SU}(d)$ 의 보편 게이트 집합이면 상수 $c$ 와 $K$ 가 있어, 모든 $U\in \mathrm{SU}(d)$ 와 모든 $\varepsilon\gt 0$ 에 대해 $\Vert U-W\Vert\lt \varepsilon$ 인 $W\in S\_\ell$ 이 $\ell\le K\log^c(1/\varepsilon)$ 로 존재한다[^1]. 근사식을 찾는 절차도 같은 한계 안에서 끝난다.

## 교환자 축소

$\Vert U-I\Vert\le\varepsilon$ 이고 $\Vert V-I\Vert\le\varepsilon$ 이면 $\Vert \lbrack U,V\rbrack-I\Vert\le 2\varepsilon^2$ 이다. $U=I+X$, $V=I+Y$ 로 놓고 전개하면 1차항이 상쇄되고 $XY-YX$ 가 남는다. 교환자는 오차를 제곱으로 줄인다.

증명에 쓰이는 것은 역방향이다. $\Vert W-I\Vert\le\varepsilon^2$ 이면 $\Vert U-I\Vert\le C\varepsilon$, $\Vert V-I\Vert\le C\varepsilon$ 이고 $\lbrack U,V\rbrack=W$ 인 $U,V$ 가 존재한다. $\mathrm{SU}(2)$ 에서는 $W$ 를 각 $\theta$ 의 회전으로 보고 축이 수직인 두 회전의 교환자가 각 $\theta$ 의 회전이 되게 각을 $\sqrt{\theta}$ 쯤으로 잡아 구성한다. 지수사상이 항등원 근처에서 미분동형이므로 일반 $d$ 로 옮긴다.

## 재귀와 지수

$\varepsilon\_0$ 그물을 나열로 한 번 만들어 둔다. $U$ 를 정확도 $\varepsilon\_n$ 으로 근사하는 절차를 $A\_n$ 이라 하고 그 길이를 $\ell\_n$ 이라 하면, 다음 단계는 세 조각으로 이루어진다. $A\_n$ 으로 $U$ 의 근사 $W$ 를 얻고, 오차 $\Delta=UW^{-1}$ 을 교환자 축소로 $\Delta=\lbrack V\_1,V\_2\rbrack$ 로 쓰고, $V\_1$ 과 $V\_2$ 를 각각 $A\_n$ 으로 근사한다. 근사식은 $W$ 하나와 $V\_1,V\_2$ 의 근사 넷을 합쳐 다섯 조각이다.

$$
\ell\_{n+1}=5\ell\_n,\qquad \varepsilon\_{n+1}=C\varepsilon\_n^{3/2}
$$

$\varepsilon\_n$ 이 $\varepsilon$ 에 이르는 단계 수는 $n=O(\log\log(1/\varepsilon))$ 이고 그때 길이는 $\ell\_n=5^n\ell\_0$ 이다. 두 식을 합치면 지수가 나온다.

$$
c=\frac{\log 5}{\log(3/2)}\approx 3.97
$$

## 하한

길이 $\ell$ 이하의 곱은 $|S|^\ell$ 개 이하이고 $\mathrm{SU}(d)$ 의 $\varepsilon$ 그물은 원소가 $\Omega(\varepsilon^{-(d^2-1)})$ 개 필요하다. 따라서 어떤 절차도 $\ell=\Omega(\log(1/\varepsilon))$ 을 피하지 못하고, 달성 가능한 지수는 $c\ge 1$ 이다. 정리가 주는 $3.97$ 과 이 하한 사이의 간격은 교환자를 더 깊이 엮는 변형으로 줄어들지만 일반 게이트 집합에서 $c=1$ 을 주는 절차는 알려져 있지 않다[^2].

## 조밀성의 판정

$S$ 가 생성하는 부분군이 조밀한지는 그 폐포가 닫힌 부분군이라는 점에서 판정한다. 폐포의 [Lie 대수](lie-algebras.md)가 $\mathfrak{su}(d)$ 전체이면 조밀하고, 그렇지 않으면 진부분군의 폐포에 갇힌다. 유한 부분군에 갇히는 경우가 보편성이 깨지는 전형이다.

# 활용

- [양자 회로](quantum-circuits.md) 컴파일. 하드웨어가 주는 게이트는 유한 집합이고 알고리즘이 요구하는 유니터리는 연속적이다. 이 정리가 정확도 $\varepsilon$ 을 $\mathrm{polylog}(1/\varepsilon)$ 개의 게이트로 사는 것을 보장하므로, 회로 깊이를 정확도의 다항으로 유지한 채 임의의 유니터리를 구현한다.
- 보편 게이트 집합의 기준. 유한 집합이 조밀한 부분군을 생성하는지만 확인하면 효율적 컴파일이 따라온다. 정확도마다 다른 게이트 집합을 설계할 필요가 없다.
- [애니온](anyons.md)의 보편성. Fibonacci 애니온의 땋임 표현의 상이 $\mathrm{SU}(V)$ 에서 조밀하다는 결과는 임의의 유니터리를 근사할 수 있다는 것까지만 준다. 이 정리가 그 근사를 다항 길이의 땋임으로 바꾸므로 땋기만으로 하는 계산이 실제 알고리즘이 된다.
- 수치적 Lie 군 계산. 조밀한 부분군의 원소로 군 원소를 다항 길이로 적는 절차 자체가 표현을 유한 자료로 다루는 방법이다.

[^1]: C. Dawson, M. Nielsen, *The Solovay–Kitaev algorithm*, Quantum Information and Computation **6** (2006), 81–95. 지수 $c=\log 5/\log(3/2)$ 의 유도와 절차의 세부가 여기 있다. 원래의 진술은 A. Kitaev, *Quantum computations: algorithms and error correction*, Russian Math. Surveys **52** (1997), 1191–1249 와 R. Solovay 의 미출간 결과다.
[^2]: A. Kitaev, A. Shen, M. Vyalyi, *Classical and Quantum Computation*, Graduate Studies in Mathematics **47**, AMS (2002), 8장. 교환자를 더 깊이 엮어 지수를 줄이는 변형과 하한 논의가 있다.

# 연관 문서

## 선수지식

- [Lie 군](lie-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #computation #differential_geometry #theorem
