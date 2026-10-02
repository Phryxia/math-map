# Chabauty–Kim 방법

# 개요

[Chabauty 방법](chabauty-method.md)은 [Jacobi 다양체](jacobian-variety.md)의 계수 $r$ 이 종수 $g$ 보다 작을 때 곡선의 유리점을 $p$ 진 적분의 영점으로 가둔다. $r\ge g$ 이면 쓸 수 있는 적분이 없어진다.

**Chabauty–Kim 방법**은 Jacobi 다양체 대신 곡선의 단일값 기본군을 쓴다. 기본군의 하강 중심열을 따라 몫을 깊이 $n$ 까지 취하면 자리마다 조건이 늘어나고, 깊이 $2$ 에서는 $r\lt g+s-1$ 에서 유리점이 유한집합에 갇힌다. $s$ 는 Jacobi 다양체의 Néron–Severi 군의 계수다.

# 직관

종수 $3$ 인 곡선 $X\_s(13)$ 의 계수는 $3$ 이라 Chabauty 방법의 조건 $r\lt g$ 가 깨진다. 그 방법은 $J(\mathbb Q)$ 의 $p$ 진 폐포가 $J(\mathbb Q_p)$ 안에서 차원 $r$ 이라는 것만 쓰고, 차원 $g$ 인 공간 안의 차원 $r$ 부분군에 소멸하는 정칙 $1$ 형식은 $r\lt g$ 일 때만 있다. Jacobi 다양체는 곡선의 기본군에서 아벨 몫만 남긴 것이므로, 아벨 몫에서 나오는 정보를 다 쓰면 거기서 멈춘다.

기본군의 하강 중심열에서 둘째 단계를 남기면 새로 생기는 좌표는 $1$ 형식 두 개의 이중 반복 [Coleman 적분](coleman-integration.md)이고, 아벨 좌표의 이차식으로 정해지지 않으므로 조건을 더 놓을 자리가 있다. 조건은 [$p$ 진 높이](p-adic-height.md)에서 온다. 점 $x$ 에 인자 $\lbrack(x)-(b)\rbrack$ 를 대응시키면 그 $p$ 진 높이가 전역으로는 $J(\mathbb Q)\otimes\mathbb Q_p$ 위의 이차형식이라 아벨 좌표만으로 정해지고, 국소 분해로는 $v=p$ 항이 이중 반복 적분이며 나머지 자리의 항은 유한 개의 값만 갖는다. 두 표현을 같다고 놓으면 $X(\mathbb Q_p)$ 위의 해석함수 하나가 얻어지고, 유리점은 그 함수가 유한집합의 값을 갖는 자리에만 있다.

# 정의

## 단일값 기본군

$X$ 가 $\mathbb Q$ 위의 매끄러운 곡선이고 $b\in X(\mathbb Q)$ 다. [기본군](fundamental-group.md)의 [에탈 판](etale-fundamental-group.md)을 $\mathbb Q_p$ 계수로 단일값화한 군 $U=\pi_1^{\mathrm{un}}(X\_{\bar{\mathbb Q}},b)$ 는 $G\_{\mathbb Q}=\mathrm{Gal}(\bar{\mathbb Q}/\mathbb Q)$ 의 작용을 받는다. 하강 중심열 $U=U^{(1)}\supset U^{(2)}\supset\cdots$ 의 몫 $U_n=U/U^{(n+1)}$ 을 **깊이 $n$ 의 몫**이라 한다. $U_1$ 은 Jacobi 다양체의 $p$ 진 Tate 가군 $V_pJ$ 다.

## Selmer 다양체

$$
\mathrm{Sel}\_n(X)=H^1_f(G\_{\mathbb Q},U_n)
$$

는 $p$ 에서 결정적이고 다른 자리에서 불분기인 국소 조건을 만족하는 연속 코호몰로지 류의 공간이며, $\mathbb Q_p$ 위의 아핀 다양체다.[^1] 이것을 **Selmer 다양체**라 한다. $n=1$ 이면 [Selmer 군](selmer-tate-shafarevich.md)에 $\mathbb Q_p$ 계수를 준 것이다.

## 단일값 Albanese 사상

$$
X(\mathbb Q)\ \longrightarrow\ \mathrm{Sel}\_n(X)\ \xrightarrow{\ \mathrm{loc}\_p\ }\ H^1_f(G\_{\mathbb Q_p},U_n)\ \longleftarrow\ X(\mathbb Q_p)
$$

오른쪽 사상 $j_n$ 이 **단일값 Albanese 사상**이고, 그 좌표가 깊이 $n$ 까지의 반복 Coleman 적분으로 적힌다. 왼쪽 사상은 유리점의 Galois 코호몰로지 류를 대응시킨다. 두 사상의 상이 $H^1_f(G\_{\mathbb Q_p},U_n)$ 안에서 만나는 자리에 유리점이 들어간다.

## Kim 의 절단

$$
X(\mathbb Q_p)\_n=j_n^{-1}\bigl(\mathrm{loc}\_p(\mathrm{Sel}\_n(X))\bigr)
$$

를 **깊이 $n$ 의 절단**이라 한다. $X(\mathbb Q)\subseteq X(\mathbb Q_p)\_n$ 이고, 깊이가 깊어지면 집합이 줄어든다.

# 성질

## 차원 조건

**정리.** $\dim\mathrm{Sel}\_n(X)\lt\dim H^1_f(G\_{\mathbb Q_p},U_n)$ 이면 $X(\mathbb Q_p)\_n$ 이 유한하다.[^1]

증명의 요지. $\mathrm{loc}\_p$ 의 상이 진부분다양체이므로 그 위에서 소멸하지 않는 정칙함수가 있고, 그 함수를 $j_n$ 으로 당기면 $X(\mathbb Q_p)$ 위의 $p$ 진 해석함수가 된다. 잔차 원판마다 이 함수가 영점을 유한 개만 가지므로 전체도 유한하다. ∎

## 깊이 1

$U_1=V_pJ$ 에서 $\dim\mathrm{Sel}\_1=r$ 이고 $\dim H^1_f(G\_{\mathbb Q_p},U_1)=g$ 다. 차원 조건이 $r\lt g$ 이고 $X(\mathbb Q_p)\_1$ 이 Chabauty–Coleman 의 영점집합이다.

## 이차 Chabauty

$s=\mathrm{rk}\thinspace\mathrm{NS}(J)$ 라 한다.

**정리.** $r\lt g+s-1$ 이면 $X(\mathbb Q_p)\_2$ 가 유한하다.[^2]

증명의 요지. 깊이 $2$ 의 좌표 가운데 $\mathrm{NS}(J)$ 의 원소가 주는 것들을 $p$ 진 높이로 바꿔 적는다. 전역 높이는 $J(\mathbb Q)\otimes\mathbb Q_p$ 위의 이차형식이라 아벨 좌표 $r$ 개로 정해지고, 국소 분해에서 $v\ne p$ 항은 나쁜 환원 자리마다 유한집합의 값을 가지므로 국소 높이의 이중 적분 표현과 견주면 자리마다 등식이 하나씩 나온다. $\mathrm{NS}(J)$ 의 계수가 $s$ 이므로 독립인 등식이 $s-1$ 개 늘고, 차원 조건이 $r\lt g+s-1$ 이 된다. ∎

$s=1$ 이면 조건이 깊이 $1$ 과 같아진다. $J$ 가 자기준동형을 많이 가지면 $s$ 가 커지고 조건이 느슨해진다.

## 계산

$1$ 형식의 기저와 Frobenius 행렬을 [Kedlaya 알고리즘](kedlaya-algorithm.md)으로 구하고 이중 반복 적분을 그 행렬로 계산한다. 나쁜 자리의 국소 높이가 갖는 유한집합은 각 자리의 모델에서 열거한다. 남은 절차는 $X(\mathbb Q_p)\_2$ 의 점 가운데 유리점이 아닌 것을 걸러내는 일이고 Mordell–Weil 시브를 쓴다.

# 활용

- **$X\_s(13)$ 의 유리점.** 종수 $3$, 계수 $3$ 이라 Chabauty 방법의 조건이 깨지지만 $s=3$ 이어서 $r\lt g+s-1=5$ 가 성립한다. 깊이 $2$ 의 절단과 Mordell–Weil 시브로 유리점 전체를 결정했다.[^3] 이 곡선은 준수 $13$ 의 분해 Cartan 모듈러 곡선이고, 유리점 결정이 Serre 의 일양성 문제의 남은 준수 하나를 채운다.
- **Siegel 정리.** $\mathbb P^1$ 에서 $\lbrace 0,1,\infty\rbrace$ 를 뺀 공간에 이 방법을 적용하면 정수점이 유한하다는 Siegel 정리가 다시 나온다. Kim 이 이 경우로 방법을 처음 제시했다.[^4]
- **모듈러 곡선의 유리점.** 종수가 작고 자기준동형이 많은 모듈러 곡선에서 계수가 종수 이상인 경우가 많고, 깊이 $2$ 의 조건이 그런 곡선에 적용된다.

[^1]: M. Kim, "The unipotent Albanese map and Selmer varieties for curves", *Publ. Res. Inst. Math. Sci.* **45** (2009), 89–133. Selmer 다양체의 구성과 차원 조건이 여기 있다.
[^2]: J. Balakrishnan, N. Dogra, "Quadratic Chabauty and rational points I: $p$-adic heights", *Duke Math. J.* **167** (2018), 1981–2038.
[^3]: J. Balakrishnan, N. Dogra, J. S. Müller, J. Tuitman, J. Vonk, "Explicit Chabauty–Kim for the split Cartan modular curve of level 13", *Ann. of Math.* **189** (2019), 885–944.
[^4]: M. Kim, "The motivic fundamental group of $\mathbb P^1\setminus\lbrace 0,1,\infty\rbrace$ and the theorem of Siegel", *Invent. Math.* **161** (2005), 629–656.

# 연관 문서

## 선수지식

- [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)
- [에탈 기본군](etale-fundamental-group.md)
- [p 진 높이](p-adic-height.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #computation
