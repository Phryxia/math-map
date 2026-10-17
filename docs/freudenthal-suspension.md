# Freudenthal 매달기 정리

# 개요

**Freudenthal 매달기 정리(Freudenthal suspension theorem)** 는 공간을 한 차원 늘리는 매달기가 호모토피군에 주는 사상이 어느 차수까지 동형인지 말한다. $n$ 연결 공간에서 그 범위가 $2n$ 차까지이고, 구면에 적용하면 $\pi\_{n+j}(S^n)$ 이 $n$ 을 키울 때 어느 지점부터 값이 멈춘다. 멈춘 값이 안정 호모토피군이다.

# 직관

구면의 호모토피군을 차수가 같은 것부터 적어 본다. $\pi_1(S^1)=\mathbb Z$ , $\pi_2(S^2)=\mathbb Z$ , $\pi_3(S^3)=\mathbb Z$ 다. 한 칸 위를 적으면 $\pi_2(S^1)=0$ , $\pi_3(S^2)=\mathbb Z$ , $\pi_4(S^3)=\mathbb Z/2$ , $\pi_5(S^4)=\mathbb Z/2$ , $\pi_6(S^5)=\mathbb Z/2$ 다. 앞의 셋은 서로 다르고 뒤로는 같은 값이 이어진다.

같은 값이 이어지는 까닭을 보려면 차수를 하나 올리는 조작을 적어야 한다. $S^{n+1}$ 은 $S^n$ 을 구간 $\lbrack 0,1\rbrack$ 과 곱한 뒤 양 끝의 $S^n\times\lbrace 0\rbrace$ 과 $S^n\times\lbrace 1\rbrace$ 을 각각 한 점으로 조인 것이다. 사상 $f:S^k\to S^n$ 에 같은 조작을 하면 양 끝에서 상수인 사상 $S^{k+1}\to S^{n+1}$ 이 나오고, $f$ 를 호모토피로 움직이면 그 결과도 호모토피로 움직인다.

그래서 사상 $\pi_k(S^n)\to\pi\_{k+1}(S^{n+1})$ 이 생긴다. 위의 값으로 보면 $\pi_4(S^3)\to\pi_5(S^4)$ 와 $\pi_5(S^4)\to\pi_6(S^5)$ 는 동형이고 $\pi_2(S^1)\to\pi_3(S^2)$ 는 동형이 아니다.

어디서부터 동형이 이어지는지를 정하는 기준은 차수의 차이 $k-n$ 이다. 차이를 고정하고 $n$ 을 키우면 어느 지점부터 동형이 계속되고, 그 뒤로 변하지 않는 값이 안정 호모토피군이다.

# 정의

## 매달기

위상공간 $X$ 의 **매달기**는 $X\times\lbrack 0,1\rbrack$ 에서 $X\times\lbrace 0\rbrace$ 과 $X\times\lbrace 1\rbrace$ 을 각각 한 점으로 조인 몫공간이다.

$$
\Sigma X=(X\times\lbrack 0,1\rbrack)/(X\times\lbrace 0\rbrace,\thinspace X\times\lbrace 1\rbrace)
$$

$\Sigma S^n\cong S^{n+1}$ 이다. 밑점을 가진 공간에서는 $\lbrace x_0\rbrace\times\lbrack 0,1\rbrack$ 까지 한 점으로 조여 **축소 매달기**를 쓰고, $X$ 가 [CW 복합체](cw-complexes.md)(closure-finite weak topology)이면 두 구성이 호모토피 동치다.

## 매달기 사상

$f:S^k\to X$ 에 $\Sigma$ 를 적용하면 $\Sigma f:S^{k+1}\to\Sigma X$ 가 되고, 호모토피류가 호모토피류로 간다. 이렇게 얻는 준동형

$$
\Sigma:\pi_k(X)\to\pi\_{k+1}(\Sigma X)
$$

를 **매달기 사상**이라 한다.

## 안정 호모토피군

매달기 사상을 거듭 적용한 극한

$$
\pi_j^s=\mathop{\mathrm{colim}}\_n\thinspace\pi\_{n+j}(S^n)
$$

을 **$j$ 차 안정 호모토피군**이라 한다.

# 성질

## Freudenthal 매달기 정리

**정리.** $X$ 가 $n$ 연결 CW 복합체이면 매달기 사상 $\Sigma:\pi_k(X)\to\pi\_{k+1}(\Sigma X)$ 는 $k\le 2n$ 에서 동형이고 $k=2n+1$ 에서 전사다[^1].

증명의 요지. $\Sigma X$ 를 두 뿔 $C_+X$ 와 $C_-X$ 의 합집합으로 쓰면 교집합이 $X$ 다. 뿔은 축약 가능하므로 쌍의 호모토피 완전열에서 $\pi\_{k+1}(\Sigma X)\cong\pi\_{k+1}(\Sigma X,C_-X)$ 이고, 뿔 쪽에서는 $\pi\_{k+1}(C_+X,X)\cong\pi_k(X)$ 다. 두 상대 호모토피군을 잇는 사상이 동형인 차수의 범위를 주는 것이 Blakers–Massey 절단 정리이고, 그 범위가 $X$ 의 $n$ 연결성에서 $k\le 2n$ 으로 나온다.

## 구면에 적용한 범위

$S^n$ 은 $(n-1)$ 연결이므로 정리의 범위는 $k\le 2n-2$ 다. $k=n+j$ 로 쓰면 다음이 된다.

$$
n\ge j+2\quad\Longrightarrow\quad \pi\_{n+j}(S^n)\cong\pi\_{n+j+1}(S^{n+1})
$$

그래서 $j$ 를 고정하면 $n\ge j+2$ 에서 값이 $n$ 에 의존하지 않고, 그 값이 $\pi_j^s$ 다.

| j | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\pi_j^s$ | $\mathbb Z$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z/24$ | $0$ | $0$ | $\mathbb Z/2$ | $\mathbb Z/240$ |

## 안정 범위 밖의 값

$j=1$ 에서 안정 범위는 $n\ge 3$ 이므로 $\pi_3(S^2)=\mathbb Z$ 는 범위 밖이다. 그 값이 안정값 $\mathbb Z/2$ 와 다르고, 매달기 사상 $\pi_3(S^2)\to\pi_4(S^3)$ 은 전사이지만 단사가 아니다. $k=2n+1$ 에서 전사까지만 주장하는 것이 이 자리에 대응한다.

## 안정 호모토피군의 유한성

**정리.** $j\ge 1$ 에서 $\pi_j^s$ 는 유한군이다[^2].

Serre 의 유리 호모토피 계산이 근거다. $\pi_k(S^n)\otimes\mathbb Q$ 가 $k=n$ 과 $n$ 이 짝수인 $k=2n-1$ 을 빼고 $0$ 이므로, 안정 범위에서 유리 성분이 남지 않는다.

# 활용

- [호모토피군](homotopy-groups.md)은 $\pi\_{n+k}(S^n)$ 이 $n\gt k+1$ 에서 $n$ 에 무관하다고 적는다. 그 조건이 위 범위 $n\ge k+2$ 이고 근거가 이 정리다.
- [Hopf 불변량](hopf-invariant.md)이 다루는 $\pi\_{2n-1}(S^n)$ 은 $j=n-1$ 이라 안정 범위 밖이다. Hopf 사상이 주는 무한 위수 원소가 매달기를 거치며 $\mathbb Z/2$ 로 떨어진다.
- [실사영공간](real-projective-space.md)처럼 세포가 차원마다 하나인 공간에서는 매달기가 세포를 한 차원씩 올리므로, 정리의 $n$ 연결 조건을 세포 구조에서 바로 읽는다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, Theorem 4.23.
[^2]: J.-P. Serre, "Groupes d'homotopie et classes de groupes abéliens", *Annals of Mathematics* 58 (1953), 258–294.

# 연관 문서

## 선수지식

- [호모토피군](homotopy-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology
