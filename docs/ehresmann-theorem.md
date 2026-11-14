# Ehresmann 정리

# 개요

**Ehresmann 정리(Ehresmann's theorem)** 는 매끄러운 사상의 올들이 어느 때 모두 같은 모양인지를 정하는 정리다. 평면에서 원점을 뺀 곳의 점을 원점까지 거리의 제곱으로 보내면 각 값의 역상은 원이고, 반지름이 달라도 원은 서로 미분동형이다. 반면 같은 평면의 점을 $x$ 좌표로 보내면 $x=0$ 의 역상만 두 조각으로 끊어진다. Ehresmann 정리는 사상의 미분이 어디서나 전사이고 유계 닫힌 집합의 역상이 유계 닫힌 집합이면 올들이 같은 모양이고 국소적으로 곱처럼 놓인다고 답한다.

# 직관

$M=\mathbb R^2\setminus\lbrace 0\rbrace$ 에서 두 사상을 견준다. $f(x,y)=x^2+y^2$ 는 값 $c\gt0$ 의 역상이 반지름 $\sqrt c$ 인 원이다. $g(x,y)=x$ 는 $c\ne0$ 의 역상이 세로 직선 하나이고, $c=0$ 의 역상은 원점이 빠진 $y$ 축이라 반직선 두 개다.

두 사상의 미분은 어디서도 $0$ 이 아니다. 그러니 한 올에서 이웃한 올로 옮겨 가는 방향이 각 점에 있다. $f$ 에서는 $f$ 를 단위 속도로 늘리는 [벡터장](vector-fields.md) $X=\frac{x\partial_x+y\partial_y}{2(x^2+y^2)}$ 을 따라 흐르면 원 $f=c$ 가 시간 $t$ 뒤 원 $f=c+t$ 로 옮겨진다. 흐름은 미분동형이므로 두 원이 미분동형이라는 것이 이렇게 증명된다.

$g$ 에서 $x$ 를 늘리는 벡터장 $\partial_x$ 를 따라 흐르면, 직선 $x=-1$ 위의 점 $(-1,0)$ 은 시간 $1$ 에 원점에 닿는데 원점은 $M$ 에 없다. 흐름이 정해진 시간 전에 공간 밖으로 새어 나갔다. 역상 $g^{-1}(\lbrack -1,1\rbrack)$ 은 원점 근처에서 열려 있어 유계 닫힌 집합이 아니고, $f^{-1}(\lbrack a,b\rbrack)$ 는 닫힌 고리라서 흐름이 새어 나갈 곳이 없다. 그래서 $f$ 의 올은 모두 같고 $g$ 의 올은 다르다.

# 정의

## 침몰

매끄러운 사상 $f\colon M\to N$ 이 모든 점 $p$ 에서 미분 $df_p\colon T_pM\to T_{f(p)}N$ 이 전사이면 **침몰(submersion)** 이라 한다. [역함수 정리](inverse-function-theorem.md)의 계수 정리에 따라 침몰은 각 점 근처에서 좌표를 바꾸면 사영 $(x_1,\dots,x_m)\mapsto(x_1,\dots,x_n)$ 이다. 직관 절의 $f$ 와 $g$ 는 둘 다 침몰이다.

## 고유 사상

연속사상 $f\colon M\to N$ 이 모든 콤팩트 집합 $K\subseteq N$ 에 대해 $f^{-1}(K)$ 가 콤팩트이면 **고유 사상(proper map)** 이라 한다. $M$ 이 콤팩트이면 모든 연속사상이 고유하다. 직관 절의 $f\colon M\to(0,\infty)$ 는 고유하고 $g\colon M\to\mathbb R$ 은 고유하지 않다.

## 국소 자명 올다발

$f\colon M\to N$ 이 **국소 자명(locally trivial)** 하다는 것은 $N$ 의 각 점에 근방 $U$ 와 미분동형 $f^{-1}(U)\cong U\times F$ 가 있어 이 동형이 $f$ 를 첫 성분의 사영으로 보낸다는 것이다. 이때 $f$ 를 올이 $F$ 인 매끄러운 올다발(fiber bundle)이라 한다.

# 성질

## Ehresmann 정리

$f\colon M\to N$ 이 전사이고 고유한 침몰이면 $f$ 는 국소 자명 올다발이다[^1]. $N$ 이 연결이면 모든 올이 서로 미분동형이다.

증명의 요지. $N$ 의 한 점 근처를 좌표 원판 $U$ 로 잡고 좌표 벡터장을 $\partial_1,\dots,\partial_n$ 이라 한다. 침몰이므로 $f^{-1}(U)$ 의 각 점 근처에서 $df(X_i)=\partial_i$ 인 벡터장 $X_i$ 가 있고, [단위분할](partitions-of-unity.md)로 붙이면 $f^{-1}(U)$ 전체에서 이 식을 만족한다.

$X_i$ 의 흐름 $\phi^i_t$ 는 올을 올로 옮기고 $f$ 의 값을 $i$ 번째 좌표 방향으로 $t$ 만큼 옮긴다. 고유성 때문에 적분곡선은 $U$ 안에 머무는 동안 콤팩트 집합을 벗어나지 않아 끝까지 정의된다. 그러면 다음 사상이 $U\times F\to f^{-1}(U)$ 의 미분동형이다.

$$
(t_1,\dots,t_n,p)\mapsto\phi^1_{t_1}\circ\cdots\circ\phi^n_{t_n}(p)
$$

$F$ 는 원판의 중심 위의 올이다.

## 두 조건의 역할

- 침몰 조건이 빠지면 임계값에서 올이 바뀐다. 원환면을 세워 높이를 재는 함수는 고유하지만, 임계값 네 개를 지날 때마다 올이 점, 원 하나, 원 둘 사이에서 바뀐다. 임계값을 지날 때 일어나는 변화를 [Morse 이론](morse-theory.md)이 다룬다.
- 고유성이 빠지면 직관 절의 $g$ 처럼 침몰이어도 올이 바뀐다.
- 고유성 대신 $M$ 위의 완비 [Riemann 계량](riemannian-metrics.md)에 대해 $f$ 가 Riemann 침몰(Riemannian submersion)이라는 조건을 두어도 같은 결론이 나온다. 수평 방향으로 올린 측지선이 끝까지 정의되기 때문이다.

## 모노드로미

$f$ 가 올다발이면 $N$ 의 닫힌 경로를 따라 흐름으로 올을 한 바퀴 옮긴 미분동형이 정해지고, 그 동위류는 경로의 호모토피류에만 의존한다. 이렇게 기본군 $\pi_1(N)$ 이 올의 사상류군에 작용하는 것을 모노드로미(monodromy)라 한다. 올의 코호몰로지에 대한 이 작용이 자명하지 않으면 다발은 곱이 아니다. [Leray–Hirsch 정리](leray-hirsch-theorem.md)의 Klein 병이 원 위의 원다발에서 모노드로미가 올의 방향을 뒤집는 예다.

# 활용

- [소멸 사이클](vanishing-cycles.md). 복소 곡면이나 초곡면의 족에서 특이한 올을 빼면 나머지는 Ehresmann 정리로 올다발이고, 특이점 둘레를 도는 모노드로미를 Picard–Lefschetz 공식이 계산한다.
- 매끄러운 사영 곡선의 족. $\mathbb{CP}^2$ 의 매끄러운 삼차곡선 전체는 계수 공간 $\mathbb{CP}^9$ 에서 판별식 초곡면을 뺀 연결된 집합이고, 그 위의 족은 고유한 침몰이다. 그래서 매끄러운 평면 삼차곡선은 모두 원환면과 미분동형이다.
- 다양체의 변형. 콤팩트 다양체 위의 매끄러운 구조나 복소구조를 연속으로 바꾸어도 밑의 미분 다양체는 변하지 않는다. 변형의 족이 매개변수 공간 위의 고유한 침몰이기 때문이다.

[^1]: C. Ehresmann, "Les connexions infinitésimales dans un espace fibré différentiable", *Colloque de Topologie (Espaces Fibrés), Bruxelles 1950*, 1951.

# 연관 문서

## 선수지식

- [벡터장](vector-fields.md)
- [단위분할](partitions-of-unity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology
