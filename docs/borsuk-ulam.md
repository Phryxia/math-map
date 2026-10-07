# Borsuk–Ulam 정리

# 개요

Borsuk–Ulam 정리는 구면 $S^n$ 에서 $\mathbb R^n$ 으로 가는 연속사상이 대척점 쌍에서 같은 값을 갖는다는 정리다. 정의역의 차원이 공역보다 하나 크다는 것만으로 결론이 나온다. 증명은 그런 쌍이 없다고 가정해 $S^n$ 에서 $S^{n-1}$ 로 가는 대척점 보존 사상을 만들고, 그런 사상이 없음을 실사영공간의 $\mathbb Z/2$ 계수 [코호몰로지](cohomology.md)로 보이는 것이다.

# 직관

원 $S^1$ 위의 연속함수 $f\colon S^1\to\mathbb R$ 을 잡고 $f(x)=f(-x)$ 인 점을 찾는다. $g(x)=f(x)-f(-x)$ 로 두면 정의에서 $g(-x)=-g(x)$ 다. 원 위의 한 점 $p$ 에서 $g(p)\ge 0$ 이면 반대편 $-p$ 에서 $g(-p)\le 0$ 이고, $g$ 가 연속이므로 $p$ 에서 $-p$ 로 가는 반원에서 중간값 정리로 $g(c)=0$ 인 $c$ 가 있다. 그 점이 $f(c)=f(-c)$ 를 만족한다.

구면 $S^2$ 에서 같은 계산을 한다. $f\colon S^2\to\mathbb R^2$ 에 대해 $g(x)=f(x)-f(-x)$ 는 이제 평면의 벡터이고 $g(-x)=-g(x)$ 는 그대로지만 양수도 음수도 아니다. 비교할 부호가 없으니 중간값 정리를 적용할 자리가 없다. 대신 $g$ 가 어디서도 $0$ 이 아니라고 가정하면 $x\mapsto g(x)/\Vert g(x)\Vert$ 가 $S^2$ 에서 $S^1$ 로 가면서 대척점을 대척점으로 보내므로, 그런 사상이 없음을 보이면 $g$ 의 영점이 나온다.

# 정의

## 대척사상

$S^n=\lbrace x\in\mathbb R^{n+1}:\Vert x\Vert=1\rbrace$ 위의 사상 $x\mapsto -x$ 를 **대척사상**이라 하고 $x$ 와 $-x$ 를 **대척점** 쌍이라 한다. 연속사상 $h\colon S^n\to S^m$ 이 모든 $x$ 에서

$$
h(-x)=-h(x)
$$

를 만족하면 $h$ 를 **홀사상**(odd map)이라 한다. $\mathbb R^m$ 으로 가는 사상에도 같은 조건으로 같은 이름을 쓴다.

## 정리의 진술

> **정리 (Borsuk, 1933).** 연속사상 $f\colon S^n\to\mathbb R^n$ 에 대해 $f(x)=f(-x)$ 인 $x\in S^n$ 이 있다.[^1]

# 성질

## 동치 진술

세 진술이 서로 동치다.

1. 연속사상 $f\colon S^n\to\mathbb R^n$ 은 $f(x)=f(-x)$ 인 점을 갖는다.
2. 홀사상 $g\colon S^n\to\mathbb R^n$ 은 영점을 갖는다.
3. 홀사상 $h\colon S^n\to S^{n-1}$ 은 없다.

1 에서 2 는 홀사상 $g$ 에 1 을 적용해 $g(x)=g(-x)=-g(x)$, 곧 $g(x)=0$ 을 얻는 것이다. 2 에서 1 은 $g(x)=f(x)-f(-x)$ 가 홀사상이고 그 영점이 $f(x)=f(-x)$ 를 주는 것이다. 3 에서 2 는 $g$ 에 영점이 없을 때 $g/\Vert g\Vert$ 가 홀사상 $S^n\to S^{n-1}$ 이 되는 것이고, 2 에서 3 은 $S^{n-1}\subset\mathbb R^n$ 위로 가는 홀사상이 영점을 가질 수 없다는 것이다.

## 홀사상의 부재

> **정리.** $n\ge 1$ 에서 홀사상 $h\colon S^n\to S^{n-1}$ 은 없다.

증명의 요지. $h$ 가 대척사상과 교환하므로 두 몫을 지나 실사영공간 사이의 연속사상 $\bar h\colon\mathbb{RP}^n\to\mathbb{RP}^{n-1}$ 을 유도한다. $S^n\to\mathbb{RP}^n$ 과 $S^{n-1}\to\mathbb{RP}^{n-1}$ 은 이중 [덮개공간](covering-spaces.md)이고 $h$ 가 그 둘을 잇는다. 이중 덮개를 분류하는 원소가 $H^1(\cdot;\mathbb Z/2)$ 에 있으므로 $\bar h^\ast$ 는 $H^1(\mathbb{RP}^{n-1};\mathbb Z/2)$ 의 생성원 $w$ 를 $H^1(\mathbb{RP}^n;\mathbb Z/2)$ 의 생성원 $w'$ 로 보낸다.

$\mathbb Z/2$ 계수 코호몰로지환은

$$
H^\ast(\mathbb{RP}^m;\mathbb Z/2)\cong(\mathbb Z/2)\lbrack t\rbrack/(t^{m+1}),\qquad \deg t=1
$$

이다. $\bar h^\ast$ 가 환 준동형이므로 $\bar h^\ast(w^n)={w'}^n$ 이다. 왼쪽은 $w^n\in H^n(\mathbb{RP}^{n-1};\mathbb Z/2)=0$ 의 상이라 $0$ 이고, 오른쪽은 $H^n(\mathbb{RP}^n;\mathbb Z/2)$ 의 생성원이라 $0$ 이 아니다. $n=1$ 에서는 코호몰로지 대신 [연결성](connectedness.md)을 쓴다. $S^1$ 은 연결이고 $S^0$ 은 두 점이므로 전사인 연속사상이 없다.

## Brouwer 고정점 정리와의 관계

홀사상의 부재에서 [Brouwer 고정점 정리](brouwer-fixed-point.md)가 나온다. $D^n$ 에서 경계 $S^{n-1}$ 로의 수축 $r$ 가 있다고 하자. $S^n$ 의 점을 $(x,t)$ 로 쓰고 $\Vert x\Vert^2+t^2=1$ 이라 하면 $t\ge 0$ 인 상반구가 $(x,t)\mapsto x$ 로 $D^n$ 과 위상동형이다. 이 동일시로

$$
u(x,t)=\begin{cases}r(x)&t\ge 0\cr -r(-x)&t\le 0\end{cases}
$$

을 정한다. 적도 $t=0$ 에서는 $\Vert x\Vert=1$ 이라 $r(x)=x$ 이고 $-r(-x)=x$ 이므로 두 식이 일치하고 $u$ 는 연속이다. 정의에서 $u(-x,-t)=-u(x,t)$ 이므로 $u$ 는 홀사상 $S^n\to S^{n-1}$ 이고 앞 정리에 모순이다. 수축이 없으면 $D^n$ 의 연속사상에 고정점이 있다.

## Lusternik–Schnirelmann 덮개 정리

> **정리.** $S^n$ 을 닫힌집합 $A_1,\dots,A_{n+1}$ 로 덮으면 어떤 $i$ 에서 $A_i$ 가 대척점 쌍을 포함한다.

증명의 요지. $f(x)=(d(x,A_1),\dots,d(x,A_n))$ 로 두면 거리함수가 연속이므로 $f\colon S^n\to\mathbb R^n$ 이 연속이고, Borsuk–Ulam 정리로 $f(x)=f(-x)$ 인 $x$ 가 있다. 어떤 $i\le n$ 에서 $d(x,A_i)=0$ 이면 $A_i$ 가 닫혀 있으므로 $x$ 와 $-x$ 가 모두 $A_i$ 에 있다. 모든 $i\le n$ 에서 $d(x,A_i)\gt 0$ 이면 $x$ 도 $-x$ 도 $A_1,\dots,A_n$ 에 없으므로 덮개이기 때문에 둘 다 $A_{n+1}$ 에 있다.

## 햄 샌드위치 정리

> **정리.** $\mathbb R^n$ 의 유한 Borel 측도 $\mu_1,\dots,\mu_n$ 이 모든 아핀 초평면에서 값 $0$ 을 가지면, $n$ 개의 측도를 동시에 이등분하는 아핀 초평면이 있다.

증명의 요지. $S^n$ 의 점 $(a,b)$ 에 반공간 $H(a,b)=\lbrace y\in\mathbb R^n:\langle a,y\rangle\le b\rbrace$ 를 대응시키고 $f_i(a,b)=\mu_i(H(a,b))$ 로 둔다. 초평면의 측도가 $0$ 이므로 $f_i$ 는 연속이다. Borsuk–Ulam 정리로 $f(a,b)=f(-a,-b)$ 인 점이 있고, $H(-a,-b)$ 가 $H(a,b)$ 의 여집합의 폐포이므로 그 등식은 각 $\mu_i$ 가 두 반공간에서 같은 값을 갖는다는 뜻이다. $a=0$ 인 경우는 $f_i(0,1)=\mu_i(\mathbb R^n)$ 과 $f_i(0,-1)=0$ 이 다르므로 일어나지 않는다.

# 활용

- **Kneser 추측.** Kneser 그래프 $K(n,k)$ 는 $\lbrace 1,\dots,n\rbrace$ 의 $k$ 원소 부분집합을 정점으로 하고 서로 만나지 않는 두 집합을 간선으로 잇는다. Lovász 는 이 그래프의 채색수가 $n-2k+2$ 임을 Lusternik–Schnirelmann 판본으로 증명했다.[^2] 색을 $n-2k+1$ 개만 쓴다고 가정하면 색류를 $S^{n-2k+1}$ 의 덮개로 옮기고, 한 색류가 서로 만나지 않는 두 집합을 담는다는 결론을 얻어 색칠의 정의에 모순이 생긴다.
- **[그래프 색칠](graph-coloring.md)의 하한.** [Erdős–Ko–Rado 정리](erdos-ko-rado.md)가 주는 독립수 $\binom{n-1}{k-1}$ 을 정점 수 $\binom nk$ 와 견주면 $K(n,k)$ 의 채색수 하한 $n/k$ 가 나온다. Lovász 의 값 $n-2k+2$ 가 이보다 크므로 독립수만으로는 이 하한에 닿지 않는다.
- **목걸이 분할.** $t$ 종류의 구슬이 꿰인 열린 목걸이를 두 사람이 각 종류의 개수를 똑같이 갖도록 나누려면 $t$ 번의 자르기로 충분하다. 증명은 구슬의 분포를 구간 위의 측도로 바꾸고 햄 샌드위치 정리를 쓰는 것이다.[^3]
- **Tucker 보조정리.** 대척 대칭인 단체 분할의 꼭짓점에 $\pm 1,\dots,\pm n$ 의 라벨을 홀사상으로 붙이면 두 끝의 라벨이 $i$ 와 $-i$ 인 간선이 있다는 진술이다. 홀사상의 부재와 동치이고, [Sperner 보조정리](sperner-lemma.md)가 Brouwer 고정점 정리에 대응하는 것과 같은 자리에 있다.

[^1]: K. Borsuk, *Drei Sätze über die $n$-dimensionale euklidische Sphäre*, Fund. Math. **20** (1933), 177–190. 정리를 추측한 사람은 S. Ulam 이다.

[^2]: L. Lovász, *Kneser's conjecture, chromatic number, and homotopy*, J. Combin. Theory Ser. A **25** (1978), 319–324.

[^3]: N. Alon, *Splitting necklaces*, Adv. Math. **63** (1987), 247–253.

# 연관 문서

## 선수지식

- [Brouwer 고정점 정리](brouwer-fixed-point.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #combinatorics #graph_theory #theorem
