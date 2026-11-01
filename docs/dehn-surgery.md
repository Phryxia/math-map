# Dehn 수술

# 개요

**Dehn 수술(Dehn surgery)** 은 3 다양체에서 매듭의 관다발 근방을 떼고 다시 붙여 새 3 다양체를 얻는 조작이다. 닫힌 3 차원 공간을 모두 목록으로 적으려면, 아는 공간 하나에서 다른 공간을 만들어 내는 조작이 있어야 한다. Dehn 수술은 매듭 근방을 떼고 붙이는 방법을 분수 하나로 적어, $S^3$ 안의 고리와 분수만으로 모든 닫힌 방향 가능 3 다양체를 적게 한다.

# 직관

닫힌 방향 가능 3 다양체를 모두 적어 보려 한다. $S^3$ 하나는 안다. $S^3$ 에서 조각을 떼고 다시 붙여 다른 것을 만들 수 있는지 본다.

$S^3$ 안의 매듭이 아닌 원, 곧 풀린 매듭 $U$ 를 잡는다. $U$ 의 두꺼운 근방 $N(U)$ 는 꽉 찬 원환면(solid torus) $S^1\times D^2$ 다. 떼어낸 나머지 $S^3\setminus\mathrm{int}\thinspace N(U)$ 도 꽉 찬 원환면이다. $S^3$ 은 두 꽉 찬 원환면을 경계에서 붙인 것이다.

떼어낸 꽉 찬 원환면을 다른 방법으로 다시 붙인다. 붙임은 경계 원환면 $T^2$ 사이의 미분동형이고, 꽉 찬 원환면의 원판 $\lbrace\mathrm{pt}\rbrace\times D^2$ 의 경계가 $T^2$ 위의 어떤 곡선으로 가는지가 결과를 정한다. $T^2$ 위의 단순 닫힌 곡선은 호몰로지류 $p\mu+q\lambda$ ($\gcd(p,q)=1$)로 분류된다. $\mu$ 는 $N(U)$ 안에서 원판의 경계가 되는 곡선이고, $\lambda$ 는 $U$ 를 따라 한 바퀴 도는 곡선이다.

$p/q=1/0$ 으로 붙이면 원판 경계가 원래대로 $\mu$ 로 가므로 $S^3$ 이 나온다. $p/q=0/1$ 로 붙이면 원판 경계가 $\lambda$ 로 가는데, $\lambda$ 는 바깥 꽉 찬 원환면에서도 원판의 경계이므로 두 원판이 맞붙어 구가 되고 결과가 $S^1\times S^2$ 다. 일반의 $p/q$ 로 붙이면 기본군이 위수 $p$ 의 순환군인 다양체가 나온다.

$$
\pi_1\bigl(S^3_{p/q}(U)\bigr)\cong\mathbb Z/p\mathbb Z
$$

원 하나와 유리수 하나로 무한히 많은 다양체가 나왔다. 풀린 매듭을 다른 매듭으로 바꾸고, 원 하나를 여러 개의 고리로 바꾸면 목록이 더 커진다. 이 목록에 닫힌 방향 가능 3 다양체가 전부 들어 있다. 다만 같은 다양체가 서로 다른 고리와 계수로 여러 번 나온다. 풀린 매듭에 $1/0$ 을 준 것과 아무 매듭도 쓰지 않은 것이 둘 다 $S^3$ 이다.

# 정의

## 기울기

$K$ 를 3 다양체 $M$ 안의 매듭, $N(K)$ 를 그 **관다발 근방(tubular neighborhood)**, $T=\partial N(K)$ 를 그 경계 원환면이라 한다. $T$ 위에서 원판의 경계가 아닌 단순 닫힌 곡선을 방향을 잊고 isotopy 로 묶은 류를 **기울기(slope)** 라 한다.

$H_1(T)\cong\mathbb Z^2$ 이고 기울기는 서로소인 정수쌍 $(p,q)$ 를 부호 $\pm$ 로 묶은 것과 일대일 대응한다. $M=S^3$ 일 때 기저를 다음으로 잡는다.

- **자오선(meridian)** $\mu$ : $N(K)$ 안에서 원판을 경계로 하는 곡선
- **경선(longitude)** $\lambda$ : $K$ 와 평행하고 $K$ 와의 고리수(linking number)가 $0$ 인 곡선

이 기저에서 기울기 $p\mu+q\lambda$ 를 $p/q\in\mathbb Q\cup\lbrace\infty\rbrace$ 로 적는다. $\lambda$ 를 고리수 $0$ 으로 고르는 것을 Seifert 틀(Seifert framing)이라 하고, 이 선택으로 $S^3$ 안의 매듭에서는 기울기가 유리수 하나로 정해진다.

- 직관의 풀린 매듭 $U$ 에서 $\mu$ 는 $1/0=\infty$, $\lambda$ 는 $0/1=0$ 이다.
- $T$ 위에서 $\lambda$ 방향으로 한 바퀴 돌며 $\mu$ 방향으로 두 바퀴 감기는 곡선의 기울기는 $2/1=2$ 다.

## Dehn 채움과 Dehn 수술

경계가 원환면 $T$ 하나인 콤팩트 3 다양체 $X$ 와 기울기 $\gamma\subset T$ 에 대해, $S^1\times D^2$ 를 $\partial D^2$ 가 $\gamma$ 로 가도록 붙인 다양체를 **Dehn 채움(Dehn filling)** $X(\gamma)$ 라 한다.

$$
M_{p/q}(K)=\bigl(M\setminus\mathrm{int}\thinspace N(K)\bigr)\cup_\varphi (S^1\times D^2)
$$

$X=M\setminus\mathrm{int}\thinspace N(K)$ 의 기울기 $p/q$ 채움 $M_{p/q}(K)$ 를 $K$ 를 따른 $p/q$ Dehn 수술이라 하고, $p/q$ 를 **수술 계수(surgery coefficient)** 라 한다. 고리 $L=K_1\cup\cdots\cup K_n$ 의 성분마다 계수 $r_i$ 를 주면 $M_{r_1,\dots,r_n}(L)$ 이다. $q=\pm 1$ 인 수술을 **정수 수술(integral surgery)** 이라 한다.

- 직관의 세 경우가 $S^3_{1/0}(U)=S^3$, $S^3_{0}(U)=S^1\times S^2$, $S^3_{p/q}(U)$ 다. 마지막 것이 [렌즈 공간](lens-spaces.md) $L(p,q)$ 이다(방향 규약에 따라 $L(p,-q)$).
- $S^3_{\pm1}(U)=L(1,\pm1)=S^3$ 이므로 풀린 매듭의 $\pm1$ 수술은 다양체를 바꾸지 않는다.

## 틀 지은 고리 도형

성분마다 정수를 적은 고리의 평면 도형을 **틀 지은 고리 도형(framed link diagram)** 이라 한다. 정수 $n_i$ 가 그 성분의 수술 계수이고, 성분 사이의 고리수와 함께 다음 대칭 정수행렬을 정한다.

$$
Q_{ij}=\begin{cases}n_i & i=j\cr \mathrm{lk}(K_i,K_j) & i\ne j\end{cases}
$$

- 계수 $p$ 를 적은 풀린 매듭 하나의 도형은 $L(p,1)$ 을 주고 $Q=(p)$ 다.
- 계수 $0$ 과 $0$ 을 적은 Hopf 고리는 $Q=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이고, 결과 다양체는 $S^3$ 이다.

# 성질

## 4 차원 손잡이와 교차형식

$M=\partial W$ 이면 $M_{p}(K)$ 는 $W$ 에 2 손잡이를 $K$ 를 따라 $p$ 틀로 붙인 4 다양체의 경계다. $S^3=\partial D^4$ 에서 출발하면 틀 지은 고리 도형마다 4 다양체가 하나 정해지고, 그 [교차형식](intersection-form.md)이 $Q$ 다. 계수 $p$ 인 풀린 매듭 하나의 경우 4 다양체는 Euler 수 $p$ 인 $S^2$ 위의 원판다발이고 경계가 $L(p,1)$ 이다.

## Lickorish–Wallace 정리

모든 닫힌 방향 가능 3 다양체는 $S^3$ 안의 어떤 고리에 계수가 모두 $\pm 1$ 인 수술을 해서 얻어진다. 이것이 Lickorish–Wallace 정리(Lickorish–Wallace theorem)다[^1].

증명의 요지는 [사상류군](mapping-class-group.md)의 생성원을 쓰는 것이다. 닫힌 방향 가능 3 다양체는 Heegaard 분해(Heegaard splitting)를 가지므로 두 손잡이체를 경계 곡면의 미분동형 $\varphi$ 로 붙인 것이다. 곡면의 사상류군은 Dehn 비틀림(Dehn twist)으로 생성되고, 곡면 위의 곡선을 따라 Dehn 비틀림만큼 붙임을 바꾸는 것은 그 곡선을 손잡이체 안으로 밀어 넣은 매듭에 $\pm 1$ 수술을 하는 것과 같다. $\varphi$ 를 Dehn 비틀림의 곱으로 쓰면 그 개수만큼의 성분을 가진 고리가 나온다.

수술로 얻은 다양체는 항상 방향 가능하므로 방향 불가능 3 다양체는 이 목록에 없다.

## Kirby 이동

$S^3$ 안의 두 틀 지은 고리 도형이 같은 3 다양체를 주는 것과, 한쪽에서 다음 두 이동과 isotopy 로 다른 쪽에 닿는 것은 동치다[^2]. 이 두 이동이 [Kirby 계산법](kirby-calculus.md)의 Kirby 이동(Kirby moves)이다.

- 1 이동: 계수 $\pm 1$ 인 풀린 성분을 다른 성분과 얽히지 않게 더하거나 뺀다.
- 2 이동: 한 성분 $K_i$ 를 다른 성분 $K_j$ 의 평행사본과 띠 합으로 더한다. 계수는 $n_i+n_j\pm 2\thinspace\mathrm{lk}(K_i,K_j)$ 로 바뀐다.

증명의 요지는 두 도형이 주는 4 다양체를 비교하는 것이다. 두 4 다양체를 잇는 5 차원 코보디즘의 손잡이 분해를 Cerf 이론으로 정돈하고 3 차원 경계에서 읽으면 위 두 이동이 된다.

유리수 계수에서는 Rolfsen 비틀림(Rolfsen twist)을 더 쓴다. 계수 $r$ 인 풀린 성분 $U$ 를 따라 $n$ 번 비틀면 $U$ 의 계수는 $1/(n+1/r)$ 로, 다른 성분 $K_j$ 의 계수 $r_j$ 는 $r_j+n\thinspace\mathrm{lk}(K_j,U)^2$ 으로 바뀌고 결과 다양체는 같다. 이 이동으로 유리수 계수를 정수 계수로 바꿀 수 있다.

## Gordon–Luecke 정리

$S^3$ 안의 매듭 $K$ 에 대해 $S^3_{p/q}(K)\cong S^3$ 이면 $p/q=1/0$ 이거나 $K$ 가 풀린 매듭이다. 이것이 Gordon–Luecke 정리(Gordon–Luecke theorem)다[^3]. 따름정리로 두 매듭의 여집합이 방향을 보존하며 미분동형이면 두 매듭이 같다.

증명은 수술로 생긴 $S^3$ 안에 매듭의 경계 곡면을 넣고 교차 개수를 줄이는 조합 논법이다. 결론이 $S^3$ 에만 한정되는 것은 원환면 매듭의 수술에서 렌즈 공간이 나오기 때문이다.

## 예외 수술

$X$ 가 경계 원환면 하나를 가진 유한 부피 [쌍곡 3 다양체](hyperbolic-3-manifolds.md)이면, 유한개의 기울기를 뺀 모든 채움이 다시 쌍곡이다(Thurston). 채움이 쌍곡이 아닌 기울기를 **예외 기울기(exceptional slope)** 라 한다.

경계 원환면의 Euclid 구조에서 길이가 $6$ 보다 큰 기울기의 채움은 쌍곡이다. 이것이 6 정리(6-theorem)이며, Agol 과 Lackenby 의 결과에 [기하화 정리](geometrization.md)를 더해 얻는다[^4]. 길이 $6$ 이하인 기울기의 수는 경계 단면의 넓이로 유계이므로 예외 기울기의 개수가 유계다. 8 자 매듭의 예외 기울기는 $\infty,0,\pm1,\pm2,\pm3,\pm4$ 의 10 개다.

# 활용

- [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)은 틀 지은 고리 도형에 색칠한 매듭 불변량의 합을 붙여 정의된다. 그 합이 Kirby 이동에 불변이므로 다양체의 불변량이 된다.
- 렌즈 공간 $L(p,q)\cong L(p,q^\prime)$ 인 것은 $q^\prime\equiv\pm q^{\pm 1}\bmod p$ 와 동치이고, 이 판정에 [Reidemeister 비틀림](reidemeister-torsion.md)을 쓴다.
- 쌍곡 3 다양체의 부피 집합이 순서형 $\omega^\omega$ 인 정렬집합이라는 Jørgensen–Thurston 정리(Jørgensen–Thurston theorem)의 증명에서, 채우는 기울기를 길게 하면 채움의 부피가 원래 부피에 아래에서 수렴한다.
- 주어진 대칭 정수행렬을 교차형식으로 갖는 단일연결 4 다양체를 만들 때 틀 지은 고리 도형과 교차형식의 대응을 쓴다.
- 매듭의 $0$ 수술이 $S^1\times S^2$ 이면 매듭이 풀린 것이라는 Property R 은 Gabai 가 엽층(foliation) 이론으로 증명했다.

[^1]: W. B. R. Lickorish, *A representation of orientable combinatorial 3-manifolds*, Ann. of Math. 76 (1962), 531–540.
[^2]: R. Kirby, *A calculus for framed links in $S^3$*, Invent. Math. 45 (1978), 35–56.
[^3]: C. McA. Gordon, J. Luecke, *Knots are determined by their complements*, J. Amer. Math. Soc. 2 (1989), 371–415.
[^4]: I. Agol, *Bounds on exceptional Dehn filling*, Geom. Topol. 4 (2000), 431–449. M. Lackenby, *Word hyperbolic Dehn surgery*, Invent. Math. 140 (2000), 243–282.

# 연관 문서

## 선수지식

- [매듭 불변량](knot-invariants.md)

## 더 알아보기

- [렌즈 공간](lens-spaces.md)
- [Kirby 계산법](kirby-calculus.md)

#topology #algebraic_topology #differential_geometry #group_theory
