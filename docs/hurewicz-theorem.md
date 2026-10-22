# Hurewicz 정리

# 개요

**Hurewicz 정리(Hurewicz theorem)** 는 $(n-1)$ 연결 공간에서 $n\ge2$ 이면 $n$ 차 [호모토피군](homotopy-groups.md)과 $n$ 차 [호몰로지](homology.md) 군이 Hurewicz 준동형으로 동형이라는 정리다. $n=1$ 에서는 경로연결 공간의 1 차 호몰로지가 [기본군](fundamental-group.md)의 아벨화와 동형이다. Hurewicz 가 1935 년에 증명했다.[^1]

호모토피군은 정의가 단순하지만 계산이 어렵고, 호몰로지는 [완전열](exact-sequences.md)로 계산된다. 이 정리는 처음으로 사라지지 않는 차수에서 둘이 같다고 말하므로, 그 차수의 호모토피군을 호몰로지로 계산할 수 있다.

# 직관

8 자 모양 공간 $S^1\vee S^1$ 에서 두 원을 한 바퀴씩 도는 고리를 $a,b$ 라 한다. 기본군은 $a,b$ 로 생성되는 자유군이고 $ab$ 와 $ba$ 는 서로 다른 원소다. 1 차 호몰로지에서는 $ab$ 와 $ba$ 가 둘 다 "첫 원을 한 번, 둘째 원을 한 번 돈 것" 이라 같은 류이고, $H_1=\mathbb Z^2$ 이다. 호몰로지는 고리를 도는 순서를 버리고 횟수만 남긴다.

$n\ge2$ 의 호모토피군은 처음부터 아벨군이라 버릴 순서가 없다. $S^n$ 에서 $S^n$ 으로 가는 사상을 감은 횟수만으로 분류하면 $\pi_n(S^n)$ 과 $H_n(S^n)$ 이 모두 $\mathbb Z$ 다. 공간에 $n$ 보다 낮은 차원의 구멍이 없으면, 첫 구멍을 재는 두 방법이 같은 답을 준다.

# 정의

## Hurewicz 준동형

$S^n$ 의 기본류를 $\lbrack S^n\rbrack\in H_n(S^n)\cong\mathbb Z$ 의 생성원으로 고정한다. 점을 가진 공간 $X$ 에서 **Hurewicz 준동형(Hurewicz homomorphism)** 은

$$
h\colon\pi_n(X)\longrightarrow H_n(X),\qquad \lbrack f\rbrack\longmapsto f\_{\ast}\lbrack S^n\rbrack
$$

이다. 호모토피인 사상은 같은 호몰로지 사상을 유도하므로 잘 정의되고, $n\ge1$ 에서 준동형이다.

## 연결성

$X$ 가 **$k$ 연결($k$-connected)** 이라는 것은 $0\le i\le k$ 인 모든 $i$ 에서 $\pi_i(X)=0$ 인 것이다. $0$ 연결은 경로연결, $1$ 연결은 단일연결이다.

# 성질

## 1 차원

**정리.** $X$ 가 경로연결이면 $h\colon\pi_1(X)\to H_1(X)$ 는 전사이고 핵은 교환자 부분군 $\lbrack\pi_1,\pi_1\rbrack$ 이다. 따라서

$$
H_1(X)\cong\pi_1(X)/\lbrack\pi_1(X),\pi_1(X)\rbrack
$$

이다.[^2]

$S^1\vee S^1$ 에서 자유군 $F_2$ 의 아벨화가 $\mathbb Z^2$ 이다. 유향 종수 $g$ 곡면에서는 기본군의 관계식 $\prod_{i=1}^g\lbrack a_i,b_i\rbrack=1$ 이 아벨화에서 자명해져 $H_1\cong\mathbb Z^{2g}$ 이다.

## 고차원

**정리(Hurewicz).** $n\ge2$ 이고 $X$ 가 $(n-1)$ 연결이면 $0\lt i\lt n$ 에서 $\tilde H_i(X)=0$ 이고 $h\colon\pi_n(X)\to H_n(X)$ 는 동형이며, $h\colon\pi_{n+1}(X)\to H_{n+1}(X)$ 는 전사다.[^2]

증명의 요지. [CW 복합체](cw-complexes.md)(closure-finite weak topology)로 근사하면 $X$ 를 $0$ 세포 하나와 $n$ 차원 이상의 세포만으로 된 복합체로 잡을 수 있다. 그러면 $n+1$ 골격까지만 보면 되고, $n$ 골격은 구 $S^n$ 의 한 점 합 $\bigvee S^n$ 이다. $n\ge2$ 에서 $\pi_n(\bigvee S^n)$ 과 $H_n(\bigvee S^n)$ 은 둘 다 세포마다 $\mathbb Z$ 하나씩인 자유 아벨군이고 $h$ 가 그 사이의 항등이다. $n+1$ 세포를 붙이면 두 군 모두 붙임 사상들이 생성하는 부분군으로 나누어지므로 몫도 같다.

## 따름정리

- $\pi_n(S^n)\cong\mathbb Z$ 다. $S^n$ 은 $(n-1)$ 연결이다.
- $n\ge2$ 이고 $G$ 가 아벨군이면 [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md) $K(G,n)$ 에서 $H_n(K(G,n))\cong G$ 이다.
- **호몰로지 Whitehead 정리(homology Whitehead theorem).** 단일연결 CW 복합체 사이의 사상이 모든 차수의 호몰로지에서 동형을 유도하면 호모토피 동치다. 사상의 사상원뿔에 Hurewicz 정리를 적용해 상대 호모토피군이 모두 $0$ 임을 얻고 Whitehead 정리로 끝낸다.
- 단일연결 CW 복합체의 축약 호몰로지가 모두 $0$ 이면 그 복합체는 축약 가능하다.

## Serre 류의 판본

Serre 는 아벨군의 모임 $\mathcal C$ 를 정해 $\mathcal C$ 에 속하는 군을 $0$ 처럼 다루는 판본을 증명했다. 단일연결 $X$ 에서 $i\lt n$ 인 $\pi_i(X)$ 가 모두 $\mathcal C$ 에 속하면 $i\lt n$ 인 $H_i(X)$ 도 그렇고, $h\colon\pi_n\to H_n$ 의 핵과 여핵이 $\mathcal C$ 에 속한다.[^3] $\mathcal C$ 를 꼬임 아벨군 전체로 잡으면 유리수 계수에서의 Hurewicz 정리가 된다.

# 활용

- [Freudenthal 매달기 정리](freudenthal-suspension.md): 안정 범위에서 $\pi_{n+k}(S^n)$ 을 계산할 때 첫 단계 $\pi_n(S^n)\cong\mathbb Z$ 가 이 정리에서 나온다.
- [장애 이론](obstruction-theory.md): $(n-1)$ 연결 공간 $Y$ 로 가는 사상을 확장할 때 첫 장애류는 $H^{n+1}(X;\pi_n(Y))$ 에 놓이고, 계수군 $\pi_n(Y)$ 를 Hurewicz 동형으로 $H_n(Y)$ 에서 계산한다.
- [Postnikov 탑](postnikov-tower.md): $(n-1)$ 연결 공간 $X$ 의 탑에서 첫 사상 $X\to K(\pi_n(X),n)$ 은 $H^n(X;\pi_n(X))\cong\mathrm{Hom}(H_n(X),\pi_n(X))$ 에서 Hurewicz 동형의 역에 대응하는 류가 정한다. 이 동형은 보편계수 정리(universal coefficient theorem)에서 나온다.

[^1]: W. Hurewicz, *Beiträge zur Topologie der Deformationen I–IV*, Proc. Akad. Wetensch. Amsterdam **38–39** (1935–1936).
[^2]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 정리 2A.1 과 정리 4.32, 4.37.
[^3]: J.-P. Serre, *Groupes d'homotopie et classes de groupes abéliens*, Ann. of Math. **58** (1953), 258–294.

# 연관 문서

## 선수지식

- [호모토피군](homotopy-groups.md)
- [단체 호몰로지](homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #group_theory
