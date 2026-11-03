# 올화

# 개요

**올화(fibration)** 는 호모토피를 올릴 수 있는 사상이다. 원의 호모토피군은 덮개 $\mathbb R\to S^1$ 로 사상을 올려 구하지만, 구면 $S^2$ 는 단순연결이라 자기 자신 말고는 덮개가 없어 같은 방법을 쓸 수 없다. 올화는 올이 이산이 아닌 사상에서도 올림을 허용해, 올, 전체공간, 밑공간의 [호모토피군](homotopy-groups.md)을 잇는 긴 완전열로 구면의 호모토피군을 계산한다.

# 직관

구면의 호모토피군을 구하려고 한다. $\pi_n(S^1)$ 은 [덮개공간](covering-spaces.md) $\mathbb R\to S^1$ 으로 구했다. $S^1$ 안의 $n$ 차원 공 사상을 $\mathbb R$ 로 올리면 $\mathbb R$ 이 수축가능하므로 올린 사상을 한 점으로 줄이고 그 과정을 다시 내려 $n\ge 2$ 에서 $\pi_n(S^1)=0$ 을 얻는다. $S^2$ 에 같은 방법을 쓰려면 덮개가 있어야 하는데 $S^2$ 는 단순연결이라 덮개가 자기 자신뿐이다. 대신 $S^3$ 을 $\mathbb C^2$ 의 단위구면으로 보고 $(z_1,z_2)$ 를 비 $z_1:z_2$ 로 보내면 값이 복소 사영직선, 곧 $S^2$ 의 점이고, 한 점의 역상은 $\vert\lambda\vert=1$ 인 $\lambda$ 에 대한 $(\lambda z_1,\lambda z_2)$ 전체여서 원이다.

덮개에서는 역상이 이산이어서 시작점을 정하면 올린 경로가 하나였지만, 역상이 원이면 시작점을 정해도 경로가 원을 따라 어디로 흐르는지가 남아 올림이 유일하지 않다. 그래서 유일성은 요구하지 않고 $S^2$ 안의 $n$ 차원 공 사상과 그 호모토피를 $S^3$ 으로 올릴 수 있다는 것만 요구한다. 올린 것을 다시 내리면 원래 것이 나오므로 차이는 한 점의 역상인 원에서만 생기고, $n\ge 3$ 에서 $\pi_n(S^1)=\pi_{n-1}(S^1)=0$ 이므로 $\pi_n(S^3)\cong\pi_n(S^2)$ 다. $\pi_3(S^3)=\mathbb Z$ 는 사상의 차수로 계산되므로 $\pi_3(S^2)=\mathbb Z$ 이고, 이 계산에 쓴 것은 올림이 존재한다는 성질 하나다.

# 정의

## 호모토피 올림 성질

연속사상 $p\colon E\to B$ 가 공간 $X$ 에 대해 **호모토피 올림 성질(homotopy lifting property)** 을 가진다는 것은, 사상 $f\colon X\to E$ 와 호모토피 $H\colon X\times\lbrack 0,1\rbrack\to B$ 가 $H(\cdot,0)=p\circ f$ 를 만족할 때마다 다음을 만족하는 $\tilde H$ 가 있다는 것이다.

$$
\tilde H\colon X\times\lbrack 0,1\rbrack\to E,\qquad \tilde H(\cdot,0)=f,\qquad p\circ\tilde H=H
$$

곱공간의 사영 $p\colon B\times F\to B$ 는 모든 $X$ 에 대해 이 성질을 가진다. $f=(f_B,f_F)$ 이면 $\tilde H(x,t)=\bigl(H(x,t),f_F(x)\bigr)$ 가 올림이다.

## 올화

모든 공간 $X$ 에 대해 호모토피 올림 성질을 가지는 $p$ 를 **Hurewicz 올화(Hurewicz fibration)** 라 하고, 모든 정육면체 $X=\lbrack 0,1\rbrack^k$ 에 대해 가지는 $p$ 를 **Serre 올화(Serre fibration)** 라 한다. $B$ 가 경로연결일 때 한 점의 역상 $F=p^{-1}(b\_0)$ 를 **올(fiber)** 이라 하고, 이 자료를 $F\to E\to B$ 로 쓴다. 직관 절의 사상 $S^3\to S^2$ 는 Serre 올화이고 올이 $S^1$ 이며, 이것을 **Hopf 올화(Hopf fibration)** 라 한다.

## 올다발

**올다발(fiber bundle)** 은 $B$ 의 각 점이 근방 $U$ 를 가져 $p^{-1}(U)$ 가 $U\times F$ 와 올을 보존하며 위상동형인 사상 $p\colon E\to B$ 다. Hopf 올화는 올이 $S^1$ 인 올다발이고, 덮개공간은 올이 이산인 올다발이다. 올화는 국소적으로 곱일 것을 요구하지 않는다. 삼각형 $E=\lbrace(x,y):0\le y\le x\le 1\rbrace$ 에서 $(x,y)\mapsto x$ 는 $\tilde H(\cdot,t)$ 의 둘째 성분을 $\min\bigl(f_2,H(\cdot,t)\bigr)$ 로 두어 올림이 있으므로 Hurewicz 올화이지만, $x=0$ 위의 올은 점이고 $x\gt 0$ 위의 올은 선분이므로 올다발이 아니다.

# 성질

## 호모토피군의 긴 완전열

$p\colon E\to B$ 가 Serre 올화이고 $F=p^{-1}(b\_0)$ 이면 다음은 완전열이다.

$$
\cdots\to\pi_n(F)\to\pi_n(E)\xrightarrow{\ p_\ast\ }\pi_n(B)\to\pi_{n-1}(F)\to\cdots\to\pi_0(E)
$$

증명의 요지는 $p_\ast\colon\pi_n(E,F,e_0)\to\pi_n(B,b\_0)$ 가 모든 $n\ge 1$ 에서 동형임을 보이는 것이다. 전사성은 $B$ 안의 공 사상을 경계가 $F$ 에 놓이도록 올리는 것이고, 단사성은 두 올림을 잇는 $B$ 안의 호모토피를 다시 올리는 것이다. 둘 다 정육면체에 대한 올림 성질을 한 번씩 쓴다. 그다음 쌍 $(E,F)$ 의 긴 완전열에서 $\pi_n(E,F)$ 를 $\pi_n(B)$ 로 바꾸면 위 열이 된다. 경계 사상 $\pi_n(B)\to\pi_{n-1}(F)$ 는 $B$ 안의 공 사상을 올린 뒤 그 경계를 올 안의 구면 사상으로 보는 것이다.

Hopf 올화에서는 $\pi_n(S^1)\to\pi_n(S^3)\to\pi_n(S^2)\to\pi_{n-1}(S^1)$ 이 되어 직관 절의 동형 $\pi_n(S^3)\cong\pi_n(S^2)$ ($n\ge 3$) 이 나온다.

## 올다발의 올림

국소 자명한 올다발은 Serre 올화이고, 밑공간이 파라콤팩트이면 Hurewicz 올화다. 증명은 정육면체 $\lbrack 0,1\rbrack^k\times\lbrack 0,1\rbrack$ 을 잘게 나눠 각 조각의 상이 자명화 근방 하나에 들어가게 한다. 조각마다 $U\times F$ 에서 둘째 성분을 그대로 두어 올림을 정의하고, 이미 올린 면 위에서 값이 일치하도록 이어 붙인다. 조각의 수가 유한하므로 절차가 끝난다.

## 덮개공간의 긴 완전열

덮개공간 $\tilde X\to X$ 는 올이 이산인 올화이고 올림이 유일하다. $n\ge 1$ 에서 $\pi_n(F)=0$ 이므로 긴 완전열에서 $n\ge 2$ 이면 $\pi_n(\tilde X)\cong\pi_n(X)$ 이다. 낮은 차수에서는 $0\to\pi_1(\tilde X)\to\pi_1(X)\to\pi_0(F)\to\pi_0(\tilde X)$ 이므로 $\tilde X$ 가 연결이면 $\pi_1(\tilde X)\to\pi_1(X)$ 가 단사이고 그 상의 지표가 올의 원소 수다.

## 사상의 올화 치환

임의의 연속사상 $f\colon X\to Y$ 에 대해 다음 공간을 두고 $q(x,\gamma)=\gamma(1)$ 이라 하면 $q$ 는 Hurewicz 올화다.

$$
E_f=\lbrace (x,\gamma)\in X\times Y^{\lbrack 0,1\rbrack}:\gamma(0)=f(x)\rbrace
$$

$x$ 를 $(x,\text{상수경로})$ 로 보내는 사상 $i$ 는 호모토피 동치이고 $f=q\circ i$ 이다. 그러므로 모든 사상은 호모토피 동치를 무시하면 올화로 바꿔 쓸 수 있다. $q$ 의 올을 $f$ 의 **호모토피 올(homotopy fiber)** 이라 한다.

## 경로 올화

$B$ 의 밑점에서 시작하는 경로 전체의 공간 $PB$ 에서 $\gamma\mapsto\gamma(1)$ 은 올화이고 올은 고리공간(loop space) $\Omega B$ 다. $PB$ 는 경로를 시작점 쪽으로 줄여 수축가능하므로 긴 완전열에서 $\pi_n(PB)=0$ 이고 다음을 얻는다.

$$
\pi_n(\Omega B)\cong\pi_{n+1}(B)
$$

# 활용

- 구면의 호모토피군. Hopf 올화 $S^1\to S^3\to S^2$ 로 $\pi_3(S^2)=\mathbb Z$ 가 나온다. $S^3\to S^7\to S^4$ 와 $S^7\to S^{15}\to S^8$ 도 같은 방법으로 쓰이고, 각각 $\pi_7(S^4)$ 와 $\pi_{15}(S^8)$ 에 무한 차수 원소가 있음을 보인다. 이 사상의 [Hopf 불변량](hopf-invariant.md)은 $1$ 이다.
- [Postnikov 탑](postnikov-tower.md). 탑의 각 단계 $X_n\to X_{n-1}$ 은 올이 [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)인 올화이고, 그 올화를 분류하는 것이 $k$-불변량이다.
- [장애 이론](obstruction-theory.md). 올다발의 단면을 세포 하나씩 늘릴 때 나오는 장애는 올의 호모토피군에 값을 갖는 코호몰로지류다.
- [벡터다발](vector-bundles.md)의 분류. 연결 구조군 $G$ 의 보편다발 $G\to EG\to BG$ 의 긴 완전열에서 $\pi_k(BG)\cong\pi_{k-1}(G)$ 이고, 그래서 $S^k$ 위의 $G$ 다발은 $\pi_{k-1}(G)$ 의 원소로 분류된다.
- [스펙트럼 수열](spectral-sequences.md). Serre 스펙트럼 수열(Serre spectral sequence)은 올화 하나에서 올과 밑공간의 코호몰로지로 전체공간의 코호몰로지를 계산한다.

# 연관 문서

## 선수지식

- [덮개공간](covering-spaces.md)
- [호모토피군](homotopy-groups.md)

## 더 알아보기

- [Hopf 불변량](hopf-invariant.md)
- [스펙트럼 수열](spectral-sequences.md)

#algebraic_topology #topology
