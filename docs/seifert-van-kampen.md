# Seifert–van Kampen 정리

# 개요

**Seifert–van Kampen 정리(Seifert–van Kampen theorem)** 는 공간을 열린 두 조각으로 덮었을 때 [기본군](fundamental-group.md)을 두 조각의 기본군으로 계산하는 정리다. 두 원을 한 점에서 붙인 8자 모양 공간에서 고리는 두 원을 번갈아 도는 낱말로 적히지만, 두 원의 고리 사이에 어떤 관계가 있는지는 고리를 그려 보는 것만으로는 알 수 없다. 이 정리는 조각마다 생성원을 얻고 두 조각이 겹치는 부분에서 관계를 얻어 기본군을 계산한다.

# 직관

원의 기본군은 $\mathbb Z$ 이고 생성원은 한 바퀴 도는 고리다. 두 원을 한 점에서 붙인 8자 공간의 기본군을 구하려고 한다.

두 원을 각각 $a$ 와 $b$ 라 하면 붙인 점에서 출발하는 고리는 $a$ 와 $b$ 를 번갈아 도는 낱말로 적힌다. 생성원 둘은 분명하므로 남은 물음은 $a$ 와 $b$ 사이의 관계다. 토러스(torus)를 사각형의 변을 붙여 만들면 사각형의 내부가 고리 $aba^{-1}b^{-1}$ 을 한 점으로 줄이는 호모토피를 주므로, 토러스에서는 두 고리가 $ab=ba$ 를 만족한다. 8자 공간에는 그런 면이 없고 공간이 두 원뿐이다.

관계는 두 조각이 겹치는 부분에서 온다. 토러스를 한 점을 뺀 조각과 그 점 근처의 작은 원판으로 덮으면, 두 조각이 겹치는 부분은 고리 모양이다. 그 고리를 한 바퀴 도는 길은 첫 조각에서는 $aba^{-1}b^{-1}$ 로 읽히고 원판에서는 한 점으로 줄어든다. 두 읽기가 같아야 하므로 관계 $aba^{-1}b^{-1}=1$ 이 생긴다.

8자 공간을 열린 두 조각으로 덮어 각각이 원 하나로 수축하게 하면, 겹치는 부분은 붙인 점의 근방이고 한 점으로 수축한다. 겹치는 부분의 고리가 모두 자명하므로 관계가 생기지 않는다. 8자 공간의 기본군은 관계 없이 생성원 둘을 갖는 군, 곧 계수 $2$ 의 자유군이다.

# 정의

## 자유곱

군 $G$ 와 $H$ 의 **자유곱(free product)** $G\ast H$ 는 $G$ 와 $H$ 의 자명하지 않은 원소를 번갈아 늘어놓은 낱말 전체에, 두 낱말을 이어 붙인 뒤 같은 군에서 온 인접 글자를 합치는 곱을 준 군이다. [군의 표시](group-presentations.md) $G=\langle S\mid R\rangle$ 와 $H=\langle T\mid Q\rangle$ 에 대해 $G\ast H=\langle S\cup T\mid R\cup Q\rangle$ 다.

$\mathbb Z=\langle a\rangle$ 와 $\mathbb Z=\langle b\rangle$ 의 자유곱은 $\langle a,b\mid\thinspace\rangle$, 곧 계수 2 의 자유군이다. $a^2$ 과 $b^{-1}a$ 의 곱은 $a^2b^{-1}a$ 이고, $ab$ 와 $ba$ 는 다른 원소다. $\mathbb Z/2=\langle s\mid s^2\rangle$ 둘의 자유곱 $\langle s,t\mid s^2,t^2\rangle$ 에서는 $st$, $stst$, $ststst,\dots$ 가 모두 다르므로 이 군은 무한군이다.

## 정규폐포

군 $G$ 의 부분집합 $A$ 의 **정규폐포(normal closure)** 는 $A$ 를 포함하는 정규부분군(normal subgroup) 가운데 가장 작은 것이고, $A$ 의 원소의 켤레 $gag^{-1}$ 들이 생성하는 부분군이다. 자유군 $\langle a,b\mid\thinspace\rangle$ 을 $aba^{-1}b^{-1}$ 의 정규폐포로 나눈 몫은 $\mathbb Z^2$ 이다.

## 정리의 진술

Seifert–van Kampen 정리는 다음 진술이다. 위상공간 $X$ 가 열린집합 $U$ 와 $V$ 의 합집합이고 $U$, $V$, $U\cap V$ 가 모두 경로연결(path-connected)이며 $x\_0\in U\cap V$ 이면

$$
\pi\_1(X,x\_0)\cong\frac{\pi\_1(U,x\_0)\ast\pi\_1(V,x\_0)}{N}
$$

이다. 여기서 $i\_U$ 와 $i\_V$ 는 포함사상이 유도한 준동형이고, $N$ 은 $U\cap V$ 의 고리 $\gamma$ 마다 원소 $i\_U(\gamma)\thinspace i\_V(\gamma)^{-1}$ 을 모은 집합의 정규폐포다.

직관 절의 토러스에서 $U$ 는 한 점을 뺀 토러스, $V$ 는 작은 원판이다. $\pi\_1(U)=\langle a,b\mid\thinspace\rangle$, $\pi\_1(V)=1$ 이고, $U\cap V$ 의 고리 $\gamma$ 는 $i\_U(\gamma)=aba^{-1}b^{-1}$, $i\_V(\gamma)=1$ 이다. 따라서 $\pi\_1$ 은 $\langle a,b\mid aba^{-1}b^{-1}\rangle\cong\mathbb Z^2$ 이다.

# 성질

## 증명의 요지

고리 $\gamma\colon\lbrack 0,1\rbrack\to X$ 를 잡으면 $\gamma^{-1}(U)$ 와 $\gamma^{-1}(V)$ 가 $\lbrack 0,1\rbrack$ 의 열린 덮개이므로 구간을 유한 개로 잘라 각 조각이 $U$ 나 $V$ 안에 들어가게 할 수 있다. 자른 점들을 $U\cap V$ 의 경로로 $x\_0$ 에 이으면 $\gamma$ 가 $U$ 안의 고리와 $V$ 안의 고리의 곱으로 적히고, 이것이 자유곱에서 오는 사상의 전사성이다.

핵이 정확히 $N$ 이라는 것은 호모토피를 사각형에서 쪼개어 얻는다. 두 낱말이 $X$ 에서 호모토픽하면 그 호모토피 $\lbrack 0,1\rbrack^2\to X$ 를 격자로 잘라 각 칸이 $U$ 나 $V$ 안에 들어가게 하고, 칸 하나를 지날 때마다 낱말이 $N$ 의 원소를 곱한 만큼만 바뀐다.

## 여러 조각의 덮개

열린 덮개 $\lbrace U\_\alpha\rbrace$ 의 각 원소와 각 교집합 $U\_\alpha\cap U\_\beta$ 가 경로연결이고 모두 $x\_0$ 을 포함하며, 세 겹 교집합 $U\_\alpha\cap U\_\beta\cap U\_\gamma$ 도 경로연결이면, $\pi\_1(X,x\_0)$ 은 $\pi\_1(U\_\alpha,x\_0)$ 들의 자유곱을 $U\_\alpha\cap U\_\beta$ 의 고리가 주는 관계의 정규폐포로 나눈 군이다.

## 쐐기합

두 경로연결 공간 $X$, $Y$ 를 각각의 점 $x$, $y$ 에서 붙인 공간을 쐐기합(wedge sum) $X\vee Y$ 라 한다. $x$ 와 $y$ 가 각각 그 점으로 변형수축되는 열린 근방을 가지면 $\pi\_1(X\vee Y)\cong\pi\_1(X)\ast\pi\_1(Y)$ 다. 8자 공간은 $S^1\vee S^1$ 이고 기본군은 $\mathbb Z\ast\mathbb Z$ 다.

증명의 요지. 붙인 점의 근방을 양쪽에 조금씩 넣어 $U$ 와 $V$ 를 만들면 각각이 $X$ 와 $Y$ 로 수축하고 교집합이 한 점으로 수축한다. 교집합의 기본군이 자명하므로 $N$ 이 자명군이다.

## 2차원 세포의 부착

경로연결 공간 $X$ 에 사상 $\varphi\colon S^1\to X$ 를 따라 2차원 세포를 붙여 얻은 공간 $X'$ 의 기본군은 $\pi\_1(X)$ 를 $\lbrack\varphi\rbrack$ 의 정규폐포로 나눈 몫이다. 원 $S^1=\langle a\rangle$ 에 $a^2$ 을 따라 세포를 붙이면 [실사영공간](real-projective-space.md) $\mathbb{RP}^2$ 이 나오고 기본군은 $\mathbb Z/2$ 다.

증명의 요지. $U$ 를 세포의 내부, $V$ 를 $X$ 에 세포의 경계 근방을 더한 것으로 잡는다. $U$ 는 원판이라 기본군이 자명하다. 교집합은 고리 모양이라 기본군이 $\mathbb Z$ 이고, 그 생성원이 $V$ 에서 $\lbrack\varphi\rbrack$ 로 읽힌다. 따라서 $N$ 이 $\lbrack\varphi\rbrack$ 의 정규폐포다.

따름정리로 모든 유한표시군(finitely presented group)이 어떤 2차원 [CW 복합체](cw-complexes.md)(closure-finite weak topology)의 기본군이다. 생성원마다 원을 하나 쓰고 관계마다 2차원 세포를 하나 붙이면 된다.

## 교집합의 경로연결 조건

$S^1$ 을 두 열린 호 $U$, $V$ 로 덮으면 $U$ 와 $V$ 가 각각 구간이라 기본군이 자명하다. 교집합은 두 조각으로 갈라져 경로연결이 아니다. 자유곱이 자명군인데 $\pi\_1(S^1)=\mathbb Z$ 이므로 경로연결 조건이 없으면 정리의 결론이 성립하지 않는다.

# 활용

- 곡면. 다각형의 변을 붙여 만든 닫힌 곡면은 원의 쐐기합에 2차원 세포 하나를 붙인 것이므로, 기본군이 변 낱말 하나를 관계로 갖는 표시로 나온다. [곡면의 분류](classification-of-surfaces.md)에서 서로 다른 곡면을 가르는 데 이 표시를 쓴다.
- 매듭군. 매듭 여공간을 매듭의 다이어그램에 따라 조각으로 덮으면 가닥마다 생성원, 교차마다 관계를 얻는다. 이것이 [매듭 불변량](knot-invariants.md)에서 쓰는 Wirtinger 표시(Wirtinger presentation)다.
- [그래프](graphs.md). 연결 그래프는 1차원 CW 복합체이므로 2차원 세포가 없고 기본군이 자유군이다. 신장트리(spanning tree)를 한 점으로 줄이면 원의 쐐기합이 되므로, 계수는 신장트리 밖의 간선 수다.
- 호몰로지. [Mayer–Vietoris 완전열](mayer-vietoris.md)은 호몰로지에서 같은 분해를 쓴다. 기본군은 아벨군이 아니어서 완전열 대신 자유곱의 몫으로 답이 나온다.

# 연관 문서

## 선수지식

- [기본군](fundamental-group.md)
- [군의 표시](group-presentations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #group_theory
