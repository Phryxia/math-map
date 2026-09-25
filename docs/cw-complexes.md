# CW 복합체

# 개요

**CW 복합체**(CW complex, closure-finite weak topology)는 원판을 테두리째 붙여 차원 순으로 쌓아 만든 위상공간이다. 삼각형 조각으로 쪼개는 [단체복합체](homology.md)보다 조각이 적어 같은 공간의 호몰로지를 더 짧은 계산으로 준다. 세포 하나에 사슬군의 생성원 하나가 대응하고, 그렇게 얻은 세포 호몰로지가 특이 호몰로지와 동형이다. Whitehead 정리, [Postnikov 탑](postnikov-tower.md), [장애 이론](obstruction-theory.md)의 진술이 이 구조를 조건으로 단다.

# 직관

구면 $S^2$ 의 호몰로지를 구하려고 한다. 단체 호몰로지는 공간을 삼각형으로 쪼갠다. $S^2$ 는 사면체의 겉면과 위상동형이므로 꼭짓점 4 개, 변 6 개, 삼각형 4 개로 쪼개진다. 사슬군은 $\mathbb Z^4$, $\mathbb Z^6$, $\mathbb Z^4$ 이고 경계 연산자는 $6\times 4$ 행렬과 $4\times 6$ 행렬이다.

$S^3$ 에서는 꼭짓점 5 개, 변 10 개, 삼각형 10 개, 사면체 5 개로 조각이 30 개가 된다. $S^n$ 에서는 $2^{n+2}-2$ 개다. 구멍은 차원마다 하나뿐인데 계산할 행렬만 커진다.

조각을 삼각형으로 제한해서 수가 늘었으니 제한을 푼다. $S^2$ 를 점 하나와 원판 하나로 만든다. 원판의 테두리를 전부 그 점으로 보내면 테두리가 한 점으로 오므라들고 원판이 구면이 된다. 조각이 둘이다.

조각이 점 하나와 2 차원 원판 하나뿐이므로 1 차원 조각이 없다. 사슬군은 $\mathbb Z$, $0$, $\mathbb Z$ 이고 경계 연산자는 갈 곳이 없어 전부 $0$ 이다. 그러므로 $H_0=\mathbb Z$, $H_1=0$, $H_2=\mathbb Z$ 가 행렬 없이 나온다.

$S^n$ 도 같다. 점 하나에 $n$ 차원 원판 하나를 테두리째 붙이면 되고, 사슬군은 0 차와 $n$ 차에만 $\mathbb Z$ 가 있다. 원판을 테두리째 붙여 차원 순으로 쌓는 이 방식이 CW 복합체다.

# 정의

## 세포 붙이기

$D^n$ 은 $n$ 차원 닫힌 원판이고 그 경계 $\partial D^n$ 은 $S^{n-1}$ 이다. 위상공간 $Y$ 와 연속사상 $\varphi\colon S^{n-1}\to Y$ 에 대해 $Y$ 에 $n$ 차원 세포를 붙인 공간은 다음 몫공간이다.

$$Y\cup_\varphi D^n=\bigl(Y\sqcup D^n\bigr)\big/\bigl(x\sim\varphi(x)\thinspace\text{ for }x\in S^{n-1}\bigr)$$

$\varphi$ 를 **붙임사상**이라 한다.

## CW 복합체

CW 복합체는 세포를 차원 순으로 붙여 만든 위상공간이다. 골격 $X^{(n)}$ 을 귀납으로 정의한다.

- $X^{(0)}$ 은 이산공간이고 그 점 하나하나가 **0-세포**다.
- $X^{(n)}$ 은 $X^{(n-1)}$ 에 원판 $D^n\_\alpha$ 들을 붙임사상 $\varphi\_\alpha\colon S^{n-1}\to X^{(n-1)}$ 로 붙인 것이다.

$$X^{(n)}=\Bigl(X^{(n-1)}\sqcup\coprod_\alpha D^n\_\alpha\Bigr)\Big/\bigl(x\sim\varphi\_\alpha(x)\bigr)$$

- $X=\bigcup_n X^{(n)}$ 이고, $A\subseteq X$ 가 닫힌집합인 것은 모든 $n$ 에서 $A\cap X^{(n)}$ 이 $X^{(n)}$ 의 닫힌집합인 것과 같다.

$D^n\_\alpha$ 의 내부가 $X$ 로 가는 상을 **$n$-세포**라 하고 $e^n\_\alpha$ 로 쓴다. 몫사상이 유도하는 $\Phi\_\alpha\colon D^n\_\alpha\to X$ 를 **특성사상**이라 한다. 세포의 개수가 유한하면 **유한 CW 복합체**라 한다.

이름은 두 조건에서 왔다. 세포마다 그 닫힘이 유한 개의 세포만 만나고(closure-finite), $X$ 의 위상이 골격들이 주는 약위상(weak topology)이다. 세포가 유한 개이면 두 조건이 자동으로 성립한다.

## 예

- $S^n$ 은 0-세포 하나와 $n$-세포 하나다. 붙임사상은 $S^{n-1}$ 을 그 점으로 보내는 상수사상이다.
- 원환면 $T^2$ 는 0-세포 하나, 1-세포 둘 $a,b$, 2-세포 하나다. 2-세포의 붙임사상은 $aba^{-1}b^{-1}$ 을 따라 도는 사상이다.
- 실사영공간 $\mathbb{RP}^n$ 은 차원 $0$ 부터 $n$ 까지 세포가 하나씩이다. $k$-세포의 붙임사상은 이중덮개 $S^{k-1}\to\mathbb{RP}^{k-1}$ 이다.
- 단체복합체의 실현은 단체마다 세포를 하나 두면 CW 복합체다. 역은 성립하지 않는다.

# 성질

## 세포 사슬복합체

$n$-세포의 개수를 $c_n$ 이라 하면 상대 호몰로지가 자유 아벨군을 준다.

$$C^{\mathrm{CW}}\_n(X)=H_n\bigl(X^{(n)},X^{(n-1)}\bigr)\cong\mathbb Z^{c_n}$$

기저는 $n$-세포다. 경계사상 $d_n\colon C^{\mathrm{CW}}\_n\to C^{\mathrm{CW}}\_{n-1}$ 은 차수로 준다.

$$d_n(e^n\_\alpha)=\sum_\beta d\_{\alpha\beta}\thinspace e^{n-1}\_\beta$$

$d\_{\alpha\beta}$ 는 합성 $S^{n-1}\xrightarrow{\varphi\_\alpha}X^{(n-1)}\to X^{(n-1)}/X^{(n-2)}\to S^{n-1}$ 의 차수다. 마지막 사상은 $\beta$ 번째 세포만 남기고 나머지 세포를 한 점으로 보낸다.

**정리.** $H^{\mathrm{CW}}\_n(X)\cong H_n(X)$.[^1]

증명의 요지는 쌍 $\bigl(X^{(n)},X^{(n-1)}\bigr)$ 의 긴 완전열이다. $i\gt n$ 에서 $H_i\bigl(X^{(n)}\bigr)=0$ 이고 $i\le n-1$ 에서 $H_i\bigl(X^{(n)}\bigr)\cong H_i(X)$ 이므로, 완전열의 항들이 세포 사슬복합체의 핵과 상으로 바뀐다.

## 사영공간의 호몰로지

$\mathbb{RP}^n$ 에서 $k$-세포의 붙임사상은 이중덮개이고 그 차수는 $1+(-1)^k$ 다. 대척점을 바꾸는 사상의 차수가 $(-1)^k$ 이기 때문이다. 그러므로 경계사상이 교대한다.

$$d_k=\begin{cases}2 & k\text{ 가 짝수}\cr 0 & k\text{ 가 홀수}\end{cases}$$

여기서 정수 계수 호몰로지가 나온다.

| $k$ | $H_k(\mathbb{RP}^n)$ |
| --- | --- |
| $0$ | $\mathbb Z$ |
| $0\lt k\lt n$, $k$ 홀수 | $\mathbb Z/2$ |
| $0\lt k\lt n$, $k$ 짝수 | $0$ |
| $k=n$, $n$ 홀수 | $\mathbb Z$ |
| $k=n$, $n$ 짝수 | $0$ |

세포가 차원마다 하나뿐이므로 사슬군이 $\mathbb Z$ 하나씩이고, 위 교대만으로 계산이 끝난다.

## Euler 지표

유한 CW 복합체에서 [Euler 지표](euler-characteristic.md)는 세포 수의 교대합이다.

$$\chi(X)=\sum_n(-1)^n c_n$$

세포 호몰로지가 특이 호몰로지와 동형이므로 이 값은 Betti 수의 교대합과 같고, 따라서 세포 분할을 어떻게 잡아도 변하지 않는다.

## Whitehead 정리

**정리.** CW 복합체 사이의 연속사상 $f\colon X\to Y$ 가 모든 $n$ 에서 [호모토피군](homotopy-groups.md)의 동형 $\pi_n(X)\to\pi_n(Y)$ 를 유도하면 $f$ 는 호모토피 동치다.[^1]

증명은 $X$ 의 세포를 차원 순으로 훑으며 역사상을 만든다. $n$-세포 위에서 역사상을 정하는 장애가 $\pi_n$ 에 있고 가정이 그것을 없앤다. 약위상이므로 단계마다 만든 호모토피가 $X$ 전체에서 이어진다.

## CW 근사

**정리.** 위상공간 $X$ 마다 CW 복합체 $Z$ 와 모든 호모토피군의 동형을 유도하는 사상 $Z\to X$ 가 있다.[^1]

$X$ 의 호모토피군에 생성원마다 세포를 하나 두고, 관계마다 한 차원 높은 세포로 막는 구성을 반복한다. 호모토피군만 보는 논의는 이 정리로 CW 복합체의 경우로 환원된다.

# 활용

- [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)의 정의는 연결 CW 복합체 $K$ 에 $\pi_n(K)\cong G$ 와 나머지 차수의 소멸을 요구한다. 코호몰로지의 표현가능성 $\lbrack X,K(G,n)\rbrack\cong H^n(X;G)$ 도 $X$ 가 CW 복합체일 때 성립한다.
- [Postnikov 탑](postnikov-tower.md)은 연결 CW 복합체마다 존재하고 호모토피 동치를 무시하면 유일하다.
- [장애 이론](obstruction-theory.md)은 골격 $X^{(n)}$ 을 따라 사상을 세포 하나씩 늘리고, 다음 세포로 넘어가는 장애를 코호몰로지류로 읽는다.
- [스펙트럼 열](spectral-sequences.md)의 Serre 판은 밑공간의 CW 구조로 전체공간을 여과해 얻는다. $p$ 골격의 역상까지를 $p$ 단계로 잡는다.
- [Reidemeister 비틀림](reidemeister-torsion.md)은 보편덮개의 세포 사슬복합체에 표현을 먹여 정의하고, 그 값이 CW 구조에 의존하지 않는다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002. 세포 호몰로지는 정리 2.35, Whitehead 정리는 정리 4.5, CW 근사는 정리 4.13 이다.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)
- [호모토피군](homotopy-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #algebra
