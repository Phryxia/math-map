# Lusternik–Schnirelmann 범주

# 개요

**Lusternik–Schnirelmann 범주(Lusternik–Schnirelmann category)** 는 공간을 덮는 데 드는, 공간 안에서 한 점으로 줄어드는 열린 집합의 최소 개수에서 $1$ 을 뺀 수다. 구면 위의 높이 함수는 꼭대기와 바닥 두 곳에서만 기울기가 $0$ 인데, 도넛 겉면 위의 매끄러운 함수는 어떻게 잡아도 기울기가 $0$ 인 점이 셋 이상이다. 이 수는 공간의 모양만으로 그 하한을 주고, 코호몰로지의 곱으로 그 값을 아래에서 어림한다.

# 직관

구면 $S^2$ 에서 북극을 뺀 부분과 남극을 뺀 부분은 각각 평면과 위상동형이라 한 점으로 줄어들고, 둘이 구면을 덮는다. 열린 집합 하나로는 구면 전체를 덮어야 하는데 구면은 한 점으로 줄어들지 않으므로 두 개가 최소다. 높이 함수의 임계점도 둘이다.

도넛 겉면 $T^2$ 를 정사각형의 마주 보는 변을 붙인 것으로 본다. 정사각형 안쪽의 열린 원판들은 줄어들지만, 고리 방향으로 한 바퀴 도는 띠는 겉면 안에서 줄어들지 않는다. 겉면을 점 하나, 그 점에서 나가는 고리 두 개, 정사각형 하나로 나누고 각 조각을 조금 두껍게 하면, 꼭짓점 둘레, 두 고리의 가운데 부분을 합친 것, 정사각형의 안쪽이 줄어드는 열린 집합 셋이 되어 겉면을 덮는다.

두 개로는 덮을 수 없다는 것은 성질 절의 컵 길이로 증명된다. 매끄러운 함수의 기울기가 $0$ 인 점이 셋 이상이라는 결론이 이 셈에서 나온다.

# 정의

공간 $X$ 의 부분집합 $U$ 의 포함사상 $U\hookrightarrow X$ 가 상수사상과 호모토픽하면 $U$ 가 **$X$ 안에서 축약 가능(contractible in $X$)** 하다고 한다. $U$ 자신이 축약 가능할 필요는 없다. 구면에서 적도는 원이라 축약 가능하지 않지만 구면 안에서는 한 점으로 줄어든다.

$X$ 의 **Lusternik–Schnirelmann 범주** $\mathrm{cat}(X)$ 는 $X$ 안에서 축약 가능한 열린 집합 $k+1$ 개로 $X$ 를 덮을 수 있는 가장 작은 $k$ 다. 그런 $k$ 가 없으면 $\infty$ 로 둔다. 한 점은 $\mathrm{cat}=0$ 이고, 직관 절에서 $\mathrm{cat}(S^2)=1$, $\mathrm{cat}(T^2)=2$ 다. 범주론(category theory)의 범주와는 다른 개념이다.

# 성질

## 컵 길이 하한

$X$ 의 [코호몰로지](cohomology.md)에서 양의 차수 원소 $\alpha_1,\dots,\alpha_k$ 의 컵곱 $\alpha_1\cup\cdots\cup\alpha_k$ 가 $0$ 이 아닌 가장 큰 $k$ 를 **컵 길이(cup length)** 라 한다. 다음이 성립한다.

$$
\mathrm{cat}(X)\ge\text{컵 길이}
$$

증명의 요지. $X=U_0\cup\dots\cup U_k$ 이고 각 $U_i$ 가 $X$ 안에서 축약 가능하면, 양의 차수 원소 $\alpha_i$ 는 $U_i$ 로 제한하면 $0$ 이므로 상대 코호몰로지 $H^\ast(X,U_i)$ 의 원소로 끌어올려진다. 상대 컵곱으로 $\alpha_0\cup\cdots\cup\alpha_k$ 는 $H^\ast(X,U_0\cup\dots\cup U_k)=H^\ast(X,X)=0$ 에서 온다. 그러므로 $k+1$ 개의 곱은 언제나 $0$ 이고 컵 길이는 $k$ 이하다.

## 계산 예

- $\mathrm{cat}(S^n)=1$ 이다. 두 극을 각각 뺀 두 열린 집합이 덮는다.
- $\mathrm{cat}(T^n)=n$ 이다. 차수 $1$ 의 생성원 $n$ 개의 곱이 최고차 생성원이라 컵 길이가 $n$ 이고, 아래의 차원 상한으로 $\mathrm{cat}(T^n)\le n$ 이다.
- $\mathrm{cat}(\mathbb{CP}^n)=n$ 이다. 2 차 생성원 $x$ 에 대해 $x^n\ne 0$ 이라 컵 길이가 $n$ 이고, 좌표 $z_i\ne 0$ 인 아핀 조각 $n+1$ 개가 덮는다.
- $\mathrm{cat}(\mathbb{RP}^n)=n$ 이다. $\mathbb Z/2$ 계수에서 1 차 생성원의 $n$ 제곱이 $0$ 이 아니다.

연결된 $n$ 차원 [CW 복합체](cw-complexes.md)(closure-finite weak topology)에서는 $\mathrm{cat}(X)\le n$ 이다.

## Lusternik–Schnirelmann 정리

닫힌 매끄러운 다양체 $M$ 위의 매끄러운 함수 $f$ 는 임계점을 $\mathrm{cat}(M)+1$ 개 이상 갖는다(Lusternik–Schnirelmann, 1934)[^1].

증명의 요지. $j=0,1,\dots,\mathrm{cat}(M)$ 에 대해 $c_j$ 를 $M$ 안의 범주가 $j$ 이상인 닫힌 집합 $A$ 들에 걸친 $\max_A f$ 의 최솟값으로 둔다. 기울기 흐름이 아래 등위 집합 $\lbrace f\le c\rbrace$ 을 임계값이 없는 구간에서 아래로 변형하므로 각 $c_j$ 는 임계값이다. $c_j=c_{j+1}$ 이면 그 높이의 임계점 집합이 범주 $1$ 이상이어서 무한 집합이다. 그러므로 서로 다른 임계점이 $\mathrm{cat}(M)+1$ 개 이상이다.

$T^2$ 위의 함수는 임계점이 셋 이상이다. [Morse 이론](morse-theory.md)의 Morse 부등식은 임계점이 모두 비퇴화인 함수에 대해 Betti 수의 합 $1+2+1=4$ 를 하한으로 주고, 비퇴화 조건이 없으면 임계점이 셋인 함수가 있다.

# 활용

- 변분 문제의 해의 개수. 닫힌 다양체 위의 범함수에서 서로 다른 임계점의 개수를 범주로 어림한다. Lusternik 과 Schnirelmann 은 이 방법으로 볼록한 곡면 위에 스스로 만나지 않는 닫힌 측지선이 셋 이상 있다는 정리를 증명했다.
- 위상적 복잡도. 공간 $X$ 안에서 두 점을 잇는 경로를 연속하게 고르는 문제의 복잡도는 $X\times X$ 위의 범주와 같은 꼴의 수로 정의되고, 로봇 팔의 운동 계획에서 연속 선택이 불가능한 정도를 잰다.
- 공간의 구별. 범주는 호모토피 불변량이므로 $\mathrm{cat}(S^1\vee S^1\vee S^2)=1$ 과 $\mathrm{cat}(T^2)=2$ 로 두 공간이 [호모토피 동치](homotopy-equivalence.md)가 아님을 가른다. 두 공간의 호몰로지는 같다.

[^1]: L. Lusternik, L. Schnirelmann, *Méthodes topologiques dans les problèmes variationnels*, Hermann, Paris, 1934.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)
- [Morse 이론](morse-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
