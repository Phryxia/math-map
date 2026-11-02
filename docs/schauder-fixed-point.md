# Schauder 고정점 정리

# 개요

**Schauder 고정점 정리(Schauder fixed point theorem)** 는 무한차원 공간에서 연속사상이 움직이지 않는 점을 갖는 조건을 주는 정리다. 유한차원의 닫힌 공을 자기 안으로 보내는 연속사상은 항상 고정점을 갖지만, 제곱합이 유한한 수열들의 공간 $\ell^2$ 에서는 좌표를 한 칸씩 밀고 첫 좌표를 채워 넣는 사상이 닫힌 단위공을 자기 안으로 보내면서도 고정점이 없다. 이 정리는 정의역을 콤팩트 볼록집합으로 바꾸고, 그 집합을 유한차원 조각으로 근사해 유한차원의 결과를 쓴다.

# 직관

[Banach 공간](banach-spaces.md) $\ell^2$ 의 닫힌 단위공에서 연속사상이 고정점을 갖는지 본다. 좌표를 한 칸씩 미는 사상에 첫 좌표를 채워 넣어

$$
T(x)=\Big(\sqrt{1-\Vert x\Vert^2},\thinspace x_1,\thinspace x_2,\dots\Big)
$$

로 두면 $T$ 는 닫힌 단위공을 자기 안으로 보내는 연속사상이고, $T(x)=x$ 는 $\Vert x\Vert=1$ 과 $x_1=0$ 과 $x_{k+1}=x_k$ 를 함께 요구해 해가 없다. 무한차원에서는 공만으로 고정점이 나오지 않는다. $T(e_k)=e\_{k+1}$ 이므로 이 사상의 상은 서로 거리가 $\sqrt2$ 인 점 $e_2,e_3,\dots$ 을 포함하고, 콤팩트집합에 들어가지 않는다.

유한차원에서 고정점을 주는 [Brouwer 고정점 정리](brouwer-fixed-point.md)의 증명에서 쓴 것은 공의 [콤팩트성](compactness.md)과 [볼록성](convexity.md)이고, 유한차원의 닫힌 단위공은 콤팩트이지만 무한차원의 것은 아니다. 그래서 정의역을 콤팩트 볼록집합으로 바꾼다. 콤팩트집합은 유한 개의 점으로 $\varepsilon$ 까지 덮이므로 그 점들이 생성하는 유한차원 볼록포 위의 문제로 근사할 수 있고, 그 위에서는 Brouwer 정리가 그대로 쓰인다. $\varepsilon$ 을 줄이며 얻은 근사 고정점들이 콤팩트성 덕분에 수렴하고 극한이 고정점이다.

# 정의

## 콤팩트 사상

노름공간 $X$ 의 부분집합 $A$ 에서 $X$ 로 가는 사상 $T$ 가 연속이고 $T(A)$ 의 닫힘이 콤팩트이면 $T$ 를 $A$ 위의 **콤팩트 사상(compact map)** 이라 한다.

직관 절의 $T$ 는 상이 $e_2,e_3,\dots$ 을 포함하므로 닫힌 단위공 위의 콤팩트 사상이 아니다. 반면 $S(x)=(x_1,x_2/2,x_3/3,\dots)$ 는 닫힌 단위공을 집합 $Q=\lbrace y:\vert y_k\vert\le 1/k\rbrace$ 안으로 보낸다. $\sum_k 1/k^2\lt\infty$ 이므로 $Q$ 는 $\ell^2$ 에서 콤팩트이고, $S$ 는 닫힌 단위공 위의 콤팩트 사상이다.

## 정리의 진술

Schauder 고정점 정리(1930). $K$ 가 Banach 공간 $X$ 의 비어 있지 않은 콤팩트 볼록집합이고 $T\colon K\to K$ 가 연속이면 $T$ 는 고정점을 갖는다.

정의역을 닫힌 유계 볼록집합으로 넓히는 대신 사상에 조건을 붙인 형태도 같은 이름으로 부른다.

$C$ 가 $X$ 의 비어 있지 않은 닫힌 볼록집합이고 $T\colon C\to C$ 가 콤팩트 사상이면 $T$ 는 고정점을 갖는다.

첫 형태의 예. 위의 $Q$ 는 콤팩트 볼록집합이고 $R(x)=\big(\frac12(1+x_1^2),\thinspace x_1/2,\thinspace x_2/2,\dots\big)$ 로 둔다. $\vert x_1\vert\le 1$ 이면 $\frac12(1+x_1^2)\le 1$ 이고, $k\ge 2$ 에서 $\vert x\_{k-1}\vert/2\le\frac{1}{2(k-1)}\le\frac1k$ 이므로 $R$ 는 $Q$ 를 $Q$ 안으로 보내는 연속사상이다. 정리가 주는 고정점은 $x_1=\frac12(1+x_1^2)$ 과 $x_k=x\_{k-1}/2$ 를 풀어 얻는 $(1,\frac12,\frac14,\dots)$ 다.

# 성질

## 유한차원의 콤팩트 사상

유한차원에서는 유계집합의 닫힘이 콤팩트이므로 상이 유계인 연속사상은 콤팩트 사상이다. 그래서 둘째 형태는 유한차원에서 Brouwer 정리와 같은 꼴이 된다.

## 유한차원 근사

첫 형태를 증명한다. $\varepsilon\gt 0$ 에 대해 콤팩트집합 $K$ 를 반지름 $\varepsilon$ 인 공 유한 개로 덮고 중심을 $y_1,\dots,y_m$ 이라 한다. Schauder 사영(Schauder projection)

$$
P_\varepsilon(x)=\frac{\sum_{j}\lambda_j(x)\thinspace y_j}{\sum_j\lambda_j(x)},\qquad \lambda_j(x)=\max\lbrace 0,\thinspace\varepsilon-\Vert x-y_j\Vert\rbrace
$$

은 연속이고 상이 $\mathrm{conv}\lbrace y_1,\dots,y_m\rbrace$ 안에 있으며 $\Vert P_\varepsilon(x)-x\Vert\lt \varepsilon$ 을 만족한다. 볼록성에서 이 볼록포는 $K$ 에 들어간다.

$K_\varepsilon=\mathrm{conv}\lbrace y_1,\dots,y_m\rbrace$ 은 유한차원의 콤팩트 볼록집합이고 $P_\varepsilon\circ T$ 가 그 위의 연속사상이므로 Brouwer 정리로 고정점 $x_\varepsilon$ 이 있다. 그러면

$$
\Vert T(x_\varepsilon)-x_\varepsilon\Vert=\Vert T(x_\varepsilon)-P_\varepsilon(T(x_\varepsilon))\Vert\lt \varepsilon
$$

이다. $\varepsilon=1/n$ 으로 두고 $K$ 의 콤팩트성으로 수렴하는 부분열 $x_{n_k}\to x^\ast$ 를 잡으면 $T$ 의 연속성에서 $T(x^\ast)=x^\ast$ 다.

## 콤팩트성 조건

무한차원에서 조건을 빼면 정리가 깨진다. 직관 절의 사상 $T$ 는 $\ell^2$ 의 닫힌 단위공을 자기 안으로 보내는 연속사상이면서 고정점이 없고, 모든 무한차원 Banach 공간에서 닫힌 단위공에 고정점 없는 연속 자기사상이 있다는 것이 Klee 정리(Klee's theorem)다. 유한차원과 무한차원을 가르는 것은 닫힌 단위공의 콤팩트성이고, 닫힌 단위공이 콤팩트인 노름공간은 유한차원뿐이라는 것이 Riesz 정리(Riesz's theorem)다.

## 다른 고정점 정리와의 관계

[Banach 고정점 정리](banach-fixed-point.md)는 [완비성](completeness.md)과 축약 조건으로 유일한 고정점과 그것을 찾는 반복을 준다. Schauder 정리는 축약을 요구하지 않는 대신 콤팩트성을 요구하고 존재만 준다. 두 정리를 합친 Krasnoselskii 정리(Krasnoselskii's fixed point theorem)는 $T=T_1+T_2$ 가 축약과 콤팩트 사상의 합일 때 고정점을 준다. 집합값 사상으로 넓힌 것이 [Kakutani 고정점 정리](kakutani-fixed-point.md)의 무한차원 판인 Ky Fan–Glicksberg 정리(Ky Fan–Glicksberg theorem)다.

# 활용

- [Peano 존재정리](peano-existence-theorem.md). 초깃값 문제를 적분방정식 $y(t)=y_0+\int_{t_0}^t F(s,y(s))\thinspace ds$ 로 바꾸면 우변이 연속함수 공간 위의 작용소다. [Arzelà–Ascoli 정리](arzela-ascoli.md)가 그 상의 상대콤팩트성을 주므로 Schauder 정리가 해를 준다. Lipschitz 조건이 없어 유일성은 나오지 않는다.
- 비선형 타원 방정식의 경계값 문제를 선형 문제의 해 작용소와 비선형 항의 합성으로 쓰면 그 합성이 콤팩트 사상이고, 선험적 상한(a priori bound)으로 불변 볼록집합을 만들면 약해의 존재가 나온다.
- 핵이 연속인 Hammerstein 적분방정식(Hammerstein integral equation)에서 적분작용소가 콤팩트이므로 같은 논법이 적용된다.
- [Leray–Schauder 차수](leray-schauder-degree.md)는 고정점을 대수적 개수로 세는 이론이고, 유한차원 [Brouwer 차수](brouwer-degree.md)를 항등사상의 콤팩트 섭동 $I-T$ 에 대해 정의한다.

# 연관 문서

## 선수지식

- [Brouwer 고정점 정리](brouwer-fixed-point.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

- [Leray–Schauder 차수](leray-schauder-degree.md)

#functional_analysis #analysis #topology #theorem
