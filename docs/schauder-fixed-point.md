# Schauder 고정점 정리

# 개요

Schauder 고정점 정리는 [Banach 공간](banach-spaces.md)의 콤팩트 볼록집합 위에서 연속사상이 고정점을 갖는다는 정리다. 유한차원에서 정의역의 [콤팩트성](compactness.md)과 [볼록성](convexity.md)만으로 고정점을 주는 [Brouwer 고정점 정리](brouwer-fixed-point.md)를 무한차원으로 옮긴 것이고, 옮기는 대가로 사상의 상이 콤팩트라는 조건이 붙는다. 증명은 콤팩트집합을 유한차원 조각으로 근사해 Brouwer 정리를 쓰고 근사를 지우는 것이다.

# 직관

$\ell^2$ 의 닫힌 단위공에서 연속사상이 고정점을 갖는지 본다. 좌표를 한 칸씩 미는 사상 $S(x_1,x_2,\dots)=(0,x_1,x_2,\dots)$ 를 잡으면 $S(x)=x$ 는 $x=0$ 만 준다. 여기에 첫 좌표를 채워 넣어

$$
T(x)=\Big(\sqrt{1-\Vert x\Vert^2},\thinspace x_1,\thinspace x_2,\dots\Big)
$$

로 두면 $T$ 는 닫힌 단위공을 자기 안으로 보내는 연속사상이고, $T(x)=x$ 는 $\Vert x\Vert=1$ 과 $x_1=0$ 과 $x_{k+1}=x_k$ 를 함께 요구해 해가 없다. 무한차원에서는 공만으로 고정점이 나오지 않는다.

Brouwer 정리의 증명에서 쓴 것은 공이 아니라 콤팩트성이었다. 유한차원의 닫힌 단위공은 콤팩트이고 무한차원의 것은 아니다. 위 사상의 상은 단위구면 전체를 훑으므로 콤팩트집합에 들어가지 않는다.

그래서 정의역을 콤팩트 볼록집합으로 바꾼다. 콤팩트집합은 유한 개의 점으로 $\varepsilon$ 까지 덮이므로 그 점들이 생성하는 유한차원 볼록포 위의 문제로 근사할 수 있고, 그 위에서는 Brouwer 정리가 그대로 쓰인다. $\varepsilon$ 을 줄이며 얻은 근사 고정점들이 콤팩트성 덕분에 수렴하고 극한이 고정점이다.

# 정의

## 콤팩트 작용소

노름공간 $X$ 의 부분집합 $A$ 에서 $X$ 로 가는 사상 $T$ 가 연속이고 $T(A)$ 의 닫힘이 콤팩트이면 $T$ 를 $A$ 위의 **콤팩트 사상**이라 한다. 유한차원에서는 유계집합의 닫힘이 콤팩트이므로 연속이면 자동으로 콤팩트 사상이다.

## 정리의 진술

> **정리 (Schauder, 1930).** $K$ 가 Banach 공간 $X$ 의 비어 있지 않은 콤팩트 볼록집합이고 $T\colon K\to K$ 가 연속이면 $T$ 는 고정점을 갖는다.

정의역을 닫힌 유계 볼록집합으로 넓히는 대신 사상에 조건을 붙인 형태도 같은 이름으로 부른다.

> **정리.** $C$ 가 $X$ 의 비어 있지 않은 닫힌 볼록집합이고 $T\colon C\to C$ 가 콤팩트 사상이면 $T$ 는 고정점을 갖는다.

# 성질

## 유한차원 근사

첫 형태를 증명한다. $\varepsilon\gt 0$ 에 대해 콤팩트집합 $K$ 를 반지름 $\varepsilon$ 인 공 유한 개로 덮고 중심을 $y_1,\dots,y_m$ 이라 한다. Schauder 사영

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

무한차원에서 조건을 빼면 정리가 깨진다. 직관 절의 사상 $T$ 는 $\ell^2$ 의 닫힌 단위공을 자기 안으로 보내는 연속사상이면서 고정점이 없고, 모든 무한차원 Banach 공간에서 닫힌 단위공에 고정점 없는 연속 자기사상이 있다는 것이 Klee 의 정리다. 유한차원과 무한차원을 가르는 것은 닫힌 단위공의 콤팩트성이며, 그것이 유한차원과 동치라는 것이 Riesz 의 정리다.

## 다른 고정점 정리와의 관계

[Banach 고정점 정리](banach-fixed-point.md)는 완비성과 축약 조건으로 유일한 고정점과 그것을 찾는 반복을 준다. Schauder 정리는 축약을 요구하지 않는 대신 콤팩트성을 요구하고 존재만 준다. 두 정리를 합친 Krasnoselskii 정리는 $T=T_1+T_2$ 가 축약과 콤팩트 사상의 합일 때 고정점을 준다. 집합값 사상으로 넓힌 것이 Kakutani 정리의 무한차원 판인 Ky Fan–Glicksberg 정리다.

# 활용

- **[Peano 존재정리](peano-existence-theorem.md).** 초기값 문제를 적분방정식 $y(t)=y_0+\int_{t_0}^t F(s,y(s))\thinspace ds$ 로 바꾸면 우변이 연속함수 공간 위의 작용소다. [Arzelà–Ascoli 정리](arzela-ascoli.md)가 그 상의 상대콤팩트성을 주므로 Schauder 정리가 해를 준다. Lipschitz 조건이 없어 유일성은 나오지 않는다.
- **비선형 타원 방정식.** 경계값 문제를 선형 문제의 해 작용소와 비선형 항의 합성으로 쓰면 그 합성이 콤팩트 사상이고, 선험적 상한으로 불변 볼록집합을 만들면 약해의 존재가 나온다.
- **적분방정식.** 핵이 연속인 Hammerstein 형 방정식에서 적분작용소가 콤팩트이므로 같은 논법이 적용된다.
- **Leray–Schauder 차수.** 고정점의 존재를 넘어 개수를 세는 이론으로, 유한차원 Brouwer 차수를 콤팩트 섭동에 대해 확장한 것이다.

# 연관 문서

## 선수지식

- [Brouwer 고정점 정리](brouwer-fixed-point.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #topology #theorem
