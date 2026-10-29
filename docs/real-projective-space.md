# 실사영공간

# 개요

**실사영공간(real projective space)** $\mathbb{RP}^n$ 은 $\mathbb R^{n+1}$ 에서 원점을 지나는 직선 전체의 공간이다. 평면에서 원점을 지나는 직선은 기울기로 정해지는데, 기울기를 $+\infty$ 로 보내도 $-\infty$ 로 보내도 같은 수직선에 닿으므로 직선 전체는 실직선의 양 끝을 붙인 원이다. 공간의 직선은 단위구면 위 맞은편 두 점의 쌍으로 정해지므로, 반구 하나를 그리고 테두리의 맞은편 점끼리 붙이면 직선 전체의 공간이 나온다.

# 직관

평면에서 원점을 지나는 직선 하나는 기울기 하나로 정해진다. 기울기는 실수 전체를 훑고 수직선 하나가 남는다. 기울기를 키워 $+\infty$ 로 보내도, 줄여 $-\infty$ 로 보내도 같은 수직선에 닿는다. 그래서 직선 전체의 집합은 실선의 양 끝을 붙인 것이고 원이 된다.

차원을 올려 $\mathbb R^3$ 에서 같은 일을 한다. 원점을 지나는 직선은 방향벡터 하나로 정해지고 그 길이를 $1$ 로 맞추면 단위구면의 점이다. 그런데 $v$ 와 $-v$ 가 같은 직선을 주므로 직선 전체의 집합은 구면에서 대척점 쌍을 한 점으로 본 것이다.

구면 전체를 쓰면 직선마다 점이 두 개씩이니 북반구만 남긴다. 위쪽 닫힌 반구에서는 직선마다 점이 하나씩 나오는데 적도는 예외다. 적도의 점 $v$ 와 $-v$ 가 둘 다 남아 있다. 위쪽 반구는 원판이므로, 직선 전체의 집합은 원판에서 테두리의 대척점만 붙인 것이다.

테두리에서 대척점을 붙인 결과는 한 차원 낮은 같은 공간이다. 그래서 $\mathbb{RP}^n$ 은 $\mathbb{RP}^{n-1}$ 에 $n$ 차원 원판 하나를 붙여 만들어진다. $n=1$ 에서 첫 문단의 원이 나오고, $n=2$ 에서 실사영평면이 나온다.

$\mathbb{RP}^n$ 은 단위구면 $S^n$ 에서 대척점 쌍을 한 점으로 보아 얻는 것과 같고, 차원마다 세포가 하나인 [CW 복합체](cw-complexes.md)(closure-finite weak topology) 구조를 갖는다. 그 구조로 호몰로지와 $\mathbb Z/2$ 계수 코호몰로지환이 계산된다.

# 정의

## 직선의 공간

**실사영공간**은 $\mathbb R^{n+1}\setminus\lbrace 0\rbrace$ 에서 $x\sim\lambda x$ ($\lambda\in\mathbb R^\times$)로 정한 동치관계의 몫공간이다.

$$
\mathbb{RP}^n=(\mathbb R^{n+1}\setminus\lbrace 0\rbrace)/\mathbb R^\times
$$

점 $(x_0,\dots,x_n)$ 의 류를 $\lbrack x_0:\cdots:x_n\rbrack$ 으로 쓰고 **동차좌표**라 한다.

## 구면의 대척 몫

구면 $S^n$ 을 $\mathbb R^{n+1}\setminus\lbrace 0\rbrace$ 에 포함시키면 모든 직선이 구면과 두 점에서 만나므로 다음 위상동형이 성립한다.

$$
\mathbb{RP}^n\cong S^n/(v\sim-v)
$$

몫사상 $S^n\to\mathbb{RP}^n$ 은 올이 두 점인 덮개사상이고, 이것을 $\mathbb{RP}^n$ 의 **이중덮개**라 한다.

## CW 구조

직관 절의 구성에서 $\mathbb{RP}^n$ 은 $\mathbb{RP}^{n-1}$ 에 $n$ 세포 하나를 붙인 것이고, 붙이는 사상은 이중덮개 $S^{n-1}\to\mathbb{RP}^{n-1}$ 이다. $\mathbb{RP}^0$ 이 한 점이므로 귀납으로 세포 구조가 정해지고, 차원 $0$ 부터 $n$ 까지 세포가 하나씩이다.

# 성질

## 정수 계수 호몰로지

세포가 차원마다 하나이므로 세포 사슬군은 $C_k\cong\mathbb Z$ ($0\le k\le n$)다. 붙이는 사상이 이중덮개라 경계 연산자의 차수는 다음과 같다.

$$
\partial_k=1+(-1)^k
$$

$k$ 가 짝수이면 $2$ 를 곱하는 사상이고 홀수이면 영사상이다.

| k | Hₖ(RPⁿ;Z) |
| --- | --- |
| $0$ | $\mathbb Z$ |
| 홀수, $0\lt k\lt n$ | $\mathbb Z/2$ |
| 짝수, $0\lt k\lt n$ | $0$ |
| $n$ 이 홀수인 $k=n$ | $\mathbb Z$ |
| $n$ 이 짝수인 $k=n$ | $0$ |

$\mathbb{RP}^1\cong S^1$ 에서 $H_1=\mathbb Z$ 이고, $\mathbb{RP}^2$ 에서 $H_1=\mathbb Z/2$ 이며 $H_2=0$ 이다.

## Z/2 계수 코호몰로지환

계수를 $\mathbb Z/2$ 로 바꾸면 경계 연산자의 차수 $1+(-1)^k$ 가 모든 $k$ 에서 $0$ 이 되므로 사슬군이 그대로 남는다.

$$
H^k(\mathbb{RP}^n;\mathbb Z/2)\cong\mathbb Z/2\quad(0\le k\le n)
$$

컵곱을 넣으면 환 구조가 절단 다항식환이다.

$$
H^\ast(\mathbb{RP}^n;\mathbb Z/2)\cong\mathbb Z/2\lbrack t\rbrack/(t^{n+1}),\qquad\deg t=1
$$

증명의 요지. 1 차 생성원 $t$ 의 $k$ 제곱이 $k$ 차 생성원임을 $n$ 에 대한 귀납으로 본다. 포함 $\mathbb{RP}^{n-1}\hookrightarrow\mathbb{RP}^n$ 이 $k\lt n$ 에서 코호몰로지의 동형을 주므로 낮은 차수의 곱은 한 차원 아래에서 결정된다. 최고차에서 $t^n\ne 0$ 인 것은 $\mathbb{RP}^n$ 이 $\mathbb Z/2$ 계수로 [Poincaré 쌍대성](poincare-duality.md)을 만족하는 닫힌 다양체라는 데서 나온다.

## 방향 가능성

$\mathbb{RP}^n$ 은 $n$ 이 홀수일 때만 방향 가능하다.

증명의 요지. 이중덮개의 덮개변환은 대척 사상 $a(v)=-v$ 뿐이고 그 차수는 $(-1)^{n+1}$ 이다. 몫이 방향 가능할 필요충분조건은 덮개변환이 방향을 보존하는 것이므로 $(-1)^{n+1}=1$ , 곧 $n$ 이 홀수여야 한다. 위 호몰로지 표에서 $H_n$ 이 $n$ 홀수일 때만 $\mathbb Z$ 인 것이 같은 사실이다.

## 복사영공간과의 대조

복사영공간 $\mathbb{CP}^n$ 은 같은 구성을 $\mathbb C^{n+1}$ 에서 한 것이고, 세포가 짝수 차원마다 하나씩 놓인다. 붙이는 사상이 Hopf 사상이라 경계 연산자가 전부 영사상이고 비틀림이 생기지 않는다.

| | RPⁿ | CPⁿ |
| --- | --- | --- |
| 실차원 | $n$ | $2n$ |
| 세포 | 차원 $0,1,\dots,n$ 에 하나씩 | 차원 $0,2,\dots,2n$ 에 하나씩 |
| 정수 호몰로지 | $\mathbb Z/2$ 비틀림이 생긴다 | $H\_{2k}\cong\mathbb Z$, 나머지 $0$ |
| 코호몰로지환 | $\mathbb Z/2\lbrack t\rbrack/(t^{n+1})$, $\deg t=1$ | $\mathbb Z\lbrack u\rbrack/(u^{n+1})$, $\deg u=2$ |
| 방향 가능성 | $n$ 이 홀수일 때만 | 항상 |

# 활용

- [Borsuk–Ulam 정리](borsuk-ulam.md)의 홀사상 부재 증명은 홀사상 $S^n\to S^{n-1}$ 이 $\mathbb{RP}^n\to\mathbb{RP}^{n-1}$ 을 유도한다는 데서 출발해, 위 코호몰로지환에서 $t^n=0$ 과 $t^n\ne 0$ 이 동시에 성립해야 한다는 모순을 얻는다.
- [CW 복합체](cw-complexes.md)의 세포 호몰로지는 세포마다 사슬군의 생성원 하나를 두는 계산법이고, $\mathbb{RP}^n$ 이 경계 연산자가 자명하지 않은 가장 짧은 예다.
- [Mayer–Vietoris 완전열](mayer-vietoris.md)의 활용 절은 실사영평면의 호몰로지를 언급한다. 구면의 이중덮개를 반구 둘로 가르면 같은 결과가 완전열로도 나온다.
- [사영다양체](projective-varieties.md)는 $\mathbb{CP}^n$ 의 닫힌 부분다양체로 정의되고, 그 동차좌표가 위 정의의 복소 판본이다.

# 연관 문서

## 선수지식

- [CW 복합체](cw-complexes.md)
- [코호몰로지](cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology
