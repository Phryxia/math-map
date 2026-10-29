# Alexander 다항식

# 개요

**Alexander 다항식(Alexander polynomial)** 은 $S^3$ 의 매듭 $K$ 에 붙는 정수 계수 Laurent 다항식 $\Delta_K(t)$ 다. 두 매듭 그림이 같은 매듭인지 가르려 할 때 그림을 이리저리 움직여 보는 것으로는 다르다는 결론을 낼 수 없고, 그림을 어떻게 그려도 같은 값이 나오는 양이 있어야 한다. Alexander 다항식은 매듭이 경계인 곡면 위 곡선들의 꼬임수를 [행렬](matrices.md)로 적고 그 행렬식으로 이런 양을 만들며, 삼엽매듭에서는 $t-1+t^{-1}$, 풀린 매듭에서는 $1$ 이어서 둘이 다른 매듭임을 보인다.

# 직관

삼엽매듭을 곡면의 경계로 만든다. 도식의 교차점마다 가닥을 방향에 맞게 다시 이으면 겹치지 않는 원 두 개가 생기고, 두 원에 원판을 붙인 뒤 교차점 세 곳을 꼬인 띠로 이으면 경계가 삼엽매듭인 방향을 준 곡면이 나온다. 이 곡면은 종수가 $1$ 이고 그 위에 서로 한 번 만나는 닫힌 곡선 $a_1$, $a_2$ 가 있다.

곡선 $a_j$ 를 곡면의 앞면 쪽으로 조금 띄운 것을 $a_j^+$ 라 하고 $a_i$ 와 $a_j^+$ 의 꼬임수를 센다. 꼬임수는 한 곡선이 다른 곡선이 경계인 곡면을 부호를 붙여 몇 번 뚫는지다. 삼엽매듭에서 이 수를 늘어놓으면 $V=\begin{pmatrix}-1&1\cr 0&-1\end{pmatrix}$ 이다.

$V$ 는 곡면과 곡선의 선택에 따라 바뀐다. 그래도 $\det(V-tV^T)=t^2-t+1$ 은 $t$ 의 거듭제곱 배를 빼면 바뀌지 않고, 이것이 삼엽매듭의 Alexander 다항식 $t-1+t^{-1}$ 이다.

$\pm t^k$ 배를 빼면 Alexander 다항식은 곡면의 선택에 의존하지 않는 [매듭 불변량](knot-invariants.md)이다.

# 정의

방향을 준 매듭 $K\subset S^3$ 을 경계로 갖는 콤팩트하고 연결된 방향을 준 곡면 $F\subset S^3$ 을 **Seifert 곡면(Seifert surface)** 이라 한다. 모든 매듭은 Seifert 곡면을 가진다. 도식에서 곡면을 만드는 직관 절의 절차를 Seifert 알고리즘(Seifert's algorithm)이라 한다.

$F$ 의 종수가 $g$ 이면 $H_1(F;\mathbb Z)\cong\mathbb Z^{2g}$ 이다. 기저 $a_1,\dots,a_{2g}$ 에 대해

$$
V_{ij}=\mathrm{lk}(a_i,a_j^+)
$$

로 정한 $2g\times 2g$ 정수 행렬을 **Seifert 행렬(Seifert matrix)** 이라 한다. $\mathrm{lk}$ 는 꼬임수(linking number)다.

$$
\Delta_K(t)=\det(V-tV^T)
$$

를 Alexander 다항식이라 한다. $\pm t^k$ 배를 빼고 같은 다항식을 같게 본다.

# 성질

## 불변성

같은 매듭의 두 Seifert 행렬은 기저 변환 $V\mapsto PVP^T$ 와 행렬 크기를 $2$ 늘리는 확장을 되풀이해 서로 옮겨진다. 두 연산 모두 $\det(V-tV^T)$ 를 $\pm t^k$ 배만큼만 바꾼다[^1].

## 대칭과 정규화

$V-V^T$ 는 $F$ 위의 교차형식이고 행렬식이 $1$ 이다. 그래서 $\Delta_K(1)=\pm 1$ 이다. 또 $\det(V-t^{-1}V^T)=\det(V^T-t^{-1}V)$ 에서 $\Delta_K(t^{-1})\doteq\Delta_K(t)$ 이다. 이 둘로 $\Delta_K(t^{-1})=\Delta_K(t)$ 와 $\Delta_K(1)=1$ 이 되게 정규화한다.

## 종수의 하한

$\Delta_K$ 의 최고차와 최저차의 차는 $2g$ 이하다. $V$ 가 $2g\times 2g$ 이기 때문이다. 그래서 매듭이 경계가 되는 Seifert 곡면의 최소 종수는 이 차의 절반 이상이다. 삼엽매듭은 차가 $2$ 이므로 종수가 $1$ 이고, 풀린 매듭과 다르다.

## Conway 관계

한 교차점에서만 다른 세 링크 도식 $L_+$, $L_-$, $L_0$ 에 대해 다음이 성립한다.

$$
\Delta_{L_+}(t)-\Delta_{L_-}(t)=(t^{1/2}-t^{-1/2})\thinspace\Delta_{L_0}(t)
$$

풀린 매듭에서 $\Delta=1$ 이므로 이 관계만으로 모든 링크의 값이 계산된다[^2]. 8 자 매듭은 $-t+3-t^{-1}$ 이다.

## 무한 순환 덮개

여공간 $X=S^3\setminus K$ 의 첫째 호몰로지는 $\mathbb Z$ 이고, 이 호몰로지를 따라 펼친 무한 순환 덮개 $\tilde X$ 의 $H_1(\tilde X)$ 는 덮개 변환이 $t$ 로 작용하는 $\mathbb Z\lbrack t^{\pm 1}\rbrack$ 가군이다. 이 가군의 차수 아이디얼(order ideal)은 주 아이디얼이고 그 생성원이 $\Delta_K(t)$ 이다. 이 관점에서 $\Delta_K$ 는 [덮개공간](covering-spaces.md)과 [기본군](fundamental-group.md)으로 정의되고 곡면을 쓰지 않는다.

# 활용

- [땋임군](braid-groups.md). 닫힌 땋임 $\hat\beta$ 의 Alexander 다항식은 감소 Burau 표현의 행렬식 $\det(I-\bar\rho(\beta))$ 를 $1+t+\cdots+t^{n-1}$ 로 나눈 것이다.
- [매듭 콩코던스](knot-concordance.md). 슬라이스 매듭의 Alexander 다항식은 $f(t)f(t^{-1})$ 꼴이고(Fox–Milnor 조건), Alexander 다항식이 $1$ 인 매듭은 위상적으로 슬라이스다.
- 카이랄성과의 비교. $\Delta_K(t^{-1})=\Delta_K(t)$ 이므로 Alexander 다항식은 매듭과 그 거울상을 구별하지 못한다. 삼엽매듭과 그 거울상을 가르는 것은 Jones 다항식이다.

[^1]: D. Rolfsen, *Knots and Links*, Publish or Perish (1976), 8장. Seifert 곡면, Seifert 행렬, S 동치를 다룬다.
[^2]: J. Conway, An enumeration of knots and links, and some of their algebraic properties, in *Computational Problems in Abstract Algebra*, Pergamon (1970), 329–358.

# 연관 문서

## 선수지식

- [매듭 불변량](knot-invariants.md)

## 더 알아보기

- [매듭 콩코던스](knot-concordance.md)

#topology #algebraic_topology
