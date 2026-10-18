# Heegaard Floer 호몰로지

# 개요

**Heegaard Floer 호몰로지**는 닫힌 방향 가능 3 다양체에 붙는 아벨군이다. [순간자 Floer 호몰로지](instanton-floer-homology.md)가 게이지 이론의 해 공간을 쓰는 자리에, Heegaard 도식과 곡면의 대칭곱 안의 정칙 원판을 쓴다.

$Y$ 의 Heegaard 도식 $(\Sigma,\boldsymbol\alpha,\boldsymbol\beta)$ 에서 $g$ 차 대칭곱 $\mathrm{Sym}^g(\Sigma)$ 와 두 Lagrange 원환면 $\mathbb T\_\alpha,\mathbb T\_\beta$ 를 만들고, 그 둘의 Lagrange Floer 호몰로지를 센다. 결과는 $\mathrm{spin}^c$ 구조마다 갈라진 네 가지 군이다.

$$
\widehat{\mathrm{HF}}(Y),\qquad \mathrm{HF}^+(Y),\qquad \mathrm{HF}^-(Y),\qquad \mathrm{HF}^\infty(Y)
$$

순간자 판본과 달리 정의가 조합적으로 계산 가능하고, [Dehn 수술](dehn-surgery.md)에 대한 완전열이 명시적이다. 유리 호몰로지 구면에서 $\mathrm{HF}^+$ 의 꼬리에서 읽는 정수 $d(Y)$ 가 **$d$ 불변량**이고, 수술로 얻는 다양체에 부등식을 준다.

# 직관

3 다양체 $Y$ 의 불변량을 [Morse 이론](morse-theory.md)으로 만들려 한다. [순간자 Floer 호몰로지](instanton-floer-homology.md)는 접속 공간 위의 Chern–Simons 범함수를 Morse 함수로 보고 임계점과 순간자를 센다. 해 공간이 무한차원이라 횡단성과 compactification 을 손으로 다뤄야 한다.

유한차원에서 같은 일을 하려면 $Y$ 를 유한한 자료로 적어야 한다. Heegaard 분해가 그 자료다. $Y$ 를 두 손잡이체로 자르면 경계가 종수 $g$ 의 곡면 $\Sigma$ 이고, 각 손잡이체는 $\Sigma$ 위의 곡선 $g$ 개가 어디서 원판을 경계로 하는지로 정해진다. 그 두 벌의 곡선이 $\boldsymbol\alpha=\lbrace\alpha_1,\dots,\alpha_g\rbrace$ 와 $\boldsymbol\beta=\lbrace\beta_1,\dots,\beta_g\rbrace$ 다.

곡선 두 벌의 교차를 센다. $\alpha_i$ 와 $\beta_j$ 의 교차점을 하나씩 골라 짝지은 것이 $g$ 개의 점이고, 이 짝짓기 전체가 유한집합이다. 그런데 어느 $\alpha_i$ 가 어느 $\beta_j$ 와 짝인지를 따로 기억해야 해서 자료가 순서에 얽힌다.

순서를 지운다. $\Sigma$ 의 점 $g$ 개를 순서 없이 모은 공간이 대칭곱 $\mathrm{Sym}^g(\Sigma)=\Sigma^g/S_g$ 이고, 이것이 $2g$ 차원 복소다양체다. $\boldsymbol\alpha$ 의 곡선들의 곱 $\alpha_1\times\cdots\times\alpha_g$ 를 대칭곱으로 내려보낸 것이 $g$ 차원 원환면 $\mathbb T_\alpha$ 다. $\mathbb T_\beta$ 도 같다. 짝짓기 하나가 $\mathbb T_\alpha\cap\mathbb T_\beta$ 의 점 하나다.

두 원환면이 대칭곱의 심플렉틱 구조에 대해 Lagrange 부분다양체이므로 Lagrange Floer 호몰로지를 쓸 수 있다. 사슬군은 교차점이 생성하고, 미분은 두 교차점을 잇는 정칙 원판을 센다. 해 공간이 유한차원 다양체 안의 원판이므로 접속 공간을 다루지 않는다.

$$
\partial\thinspace\mathbf x=\sum\_{\mathbf y}\char35{}\lbrace\text{정칙 원판 }\mathbf x\to\mathbf y\rbrace\cdot\mathbf y
$$

같은 $Y$ 에서 Heegaard 도식은 여러 가지다. 두 도식은 안정화와 손잡이 미끄러짐으로 이어지고, 호몰로지가 그 이동에 불변이라는 것이 정의가 성립하는 근거다.

# 정의

## 가리킨 Heegaard 도식

$Y$ 의 **Heegaard 도식**은 종수 $g$ 곡면 $\Sigma$ 와 호몰로지에서 독립인 곡선 두 벌 $\boldsymbol\alpha,\boldsymbol\beta$ 의 쌍이다. 두 손잡이체를 $\Sigma$ 에서 붙인 것이 $Y$ 다.

$\boldsymbol\alpha\cup\boldsymbol\beta$ 를 피한 기준점 $z\in\Sigma$ 를 하나 더 고정한 것이 **가리킨 Heegaard 도식** $(\Sigma,\boldsymbol\alpha,\boldsymbol\beta,z)$ 다. $z$ 는 정칙 원판이 기준점을 몇 번 지나는지를 세어 사슬복체에 등급을 매기는 데 쓴다.

## 사슬복체

$\mathbb T\_\alpha=\alpha_1\times\cdots\times\alpha_g$ 와 $\mathbb T\_\beta$ 를 $\mathrm{Sym}^g(\Sigma)$ 안의 $g$ 차원 원환면이라 한다. 교차점 $\mathbf x\in\mathbb T\_\alpha\cap\mathbb T\_\beta$ 마다 생성원을 하나 두고, 다음 네 복체를 만든다.

| 복체 | 계수환 | 생성원 |
| --- | --- | --- |
| $\widehat{\mathrm{CF}}$ | $\mathbb Z$ | $\mathbf x$ |
| $\mathrm{CF}^-$ | $\mathbb Z\lbrack U\rbrack$ | $U^n\mathbf x$ , $n\ge 0$ |
| $\mathrm{CF}^\infty$ | $\mathbb Z\lbrack U,U^{-1}\rbrack$ | $U^n\mathbf x$ , $n\in\mathbb Z$ |
| $\mathrm{CF}^+$ | $\mathrm{CF}^\infty/\mathrm{CF}^-$ | |

$U$ 는 기준점 $z$ 를 지나는 횟수를 세는 형식변수다. 미분은 두 교차점을 잇는 Whitney 원판의 모듈라이 공간에서 차원이 $0$ 인 것의 개수다.

$$
\partial\mathbf x=\sum\_{\mathbf y}\sum\_{\phi}\char35{}\widehat{\mathcal M}(\phi)\cdot U^{n_z(\phi)}\thinspace\mathbf y
$$

$n_z(\phi)$ 는 원판 $\phi$ 가 $z$ 를 지나는 중복도다. $\widehat{\mathrm{CF}}$ 는 $n_z(\phi)=0$ 인 원판만 센 것이다.

## spin^c 분해

교차점 $\mathbf x$ 마다 $Y$ 의 $\mathrm{spin}^c$ 구조 $\mathfrak s(\mathbf x)$ 가 정해진다. $\mathbf x$ 를 $\Sigma$ 를 지나는 궤적으로 보고 Morse 함수의 기울기 벡터장을 그 궤적 밖에서 비교하는 것이 정의다.

미분이 $\mathrm{spin}^c$ 구조를 보존하므로 복체가 분해된다.

$$
\mathrm{HF}^\circ(Y)=\bigoplus\_{\mathfrak s\in\mathrm{Spin}^c(Y)}\mathrm{HF}^\circ(Y,\mathfrak s)
$$

유한개의 $\mathfrak s$ 에서만 군이 $0$ 이 아니다.

## d 불변량

$Y$ 가 유리 호몰로지 구면이면 $\mathrm{Spin}^c(Y)$ 가 유한집합이고 각 $\mathfrak s$ 에서 $\mathrm{HF}^\infty(Y,\mathfrak s)\cong\mathbb Z\lbrack U,U^{-1}\rbrack$ 이다. 그러면 $\mathrm{HF}^+(Y,\mathfrak s)$ 가 충분히 높은 등급에서 $\mathbb Z\lbrack U,U^{-1}\rbrack/U\thinspace\mathbb Z\lbrack U\rbrack$ 과 같아진다.

그 꼴이 시작되는 최소 등급이 **$d$ 불변량** $d(Y,\mathfrak s)\in\mathbb Q$ 다. 유리수 값을 갖고, 방향을 뒤집으면 부호가 바뀐다.

$$
d(-Y,\mathfrak s)=-d(Y,\mathfrak s)
$$

# 성질

## 수술 완전 삼각형

> **정리.** 매듭 $K\subset Y$ 의 세 기울기 $\mu$ , $\lambda$ , $\mu+\lambda$ 에 대한 채움의 $\widehat{\mathrm{HF}}$ 가 완전 삼각형을 이룬다[^1].

$$
\cdots\to\widehat{\mathrm{HF}}(Y_\mu)\to\widehat{\mathrm{HF}}(Y_\lambda)\to\widehat{\mathrm{HF}}(Y_{\mu+\lambda})\to\cdots
$$

증명의 요지는 세 도식을 한 곡면 위에 겹쳐 놓는 것이다. 세 번째 곡선 벌 $\boldsymbol\gamma$ 를 더하면 사슬사상이 삼각형의 정칙 사각형을 세어 정의되고, 삼각형이 네 번째 곡선 벌과 맺는 관계가 완전성을 준다.

[순간자 Floer 호몰로지](instanton-floer-homology.md)의 수술 완전 삼각형과 같은 모양이고, 여기서는 사상이 조합적으로 적힌다. 이 완전열로 [Dehn 수술](dehn-surgery.md) 도형에서 불변량을 귀납으로 계산한다.

## d 불변량의 수술 부등식

> **정리.** $K\subset S^3$ 의 $p/q\gt 0$ 수술에 대해 $d\bigl(S^3_{p/q}(K),\mathfrak s\bigr)$ 가 풀린 매듭의 같은 수술 값보다 크지 않다[^2].

$$
d\bigl(S^3_{p/q}(K),i\bigr)\le d\bigl(S^3_{p/q}(U),i\bigr)
$$

증명의 요지는 매듭 Floer 복체의 필터로 수술 공식을 적고, 필터의 길이가 비음이라는 것을 쓰는 것이다.

따름정리로 렌즈 공간 수술의 제약이 나온다. $S^3_p(K)$ 가 렌즈 공간이면 $d$ 불변량이 풀린 매듭의 값과 같아야 하고, 이 조건이 가능한 $(K,p)$ 를 크게 줄인다. 어떤 매듭의 어떤 수술이 렌즈 공간을 주는지의 분류에 이 부등식을 쓴다.

## 4 다양체의 교차형식 제약

> **정리.** $X$ 가 경계 $\partial X=Y$ 를 가진 매끄러운 4 다양체이고 교차형식이 음정부호이면 다음이 성립한다[^2].

$$
c_1(\mathfrak s)^2+\mathrm{rank}\thinspace H^2(X)\le 4d(Y,\mathfrak s\vert_Y)+4b_2(X)
$$

$d$ 불변량이 채울 수 있는 4 다양체의 교차형식에 상한을 준다. 이 부등식으로 Donaldson 의 대각화 정리를 Floer 이론 쪽에서 다시 얻는다.

## 순간자 판본과의 관계

> **정리.** Seiberg–Witten Floer 호몰로지와 Heegaard Floer 호몰로지가 동형이다[^3].

두 이론은 정의가 완전히 다르다. 한쪽은 3 다양체 위의 Seiberg–Witten 방정식 해를 세고, 다른 쪽은 대칭곱 안의 원판을 센다. 동형의 증명은 양쪽을 접촉 기하의 중간 이론인 매장 접촉 호몰로지(embedded contact homology, ECH)에 연결하는 두 단계를 거친다.

$\mathrm{spin}^c$ 분해와 $d$ 불변량, 수술 완전 삼각형이 양쪽에서 대응한다. 그래서 조합적 계산이 쉬운 Heegaard 쪽에서 계산하고 게이지 이론 쪽 결론으로 옮긴다.

# 활용

- **수술 분류.** 위 $d$ 불변량 부등식으로 렌즈 공간을 주는 수술의 목록을 좁힌다. $S^3_p(K)$ 가 렌즈 공간이 되는 $(K,p)$ 가 원환면 매듭과 Berge 목록에 들어간다는 결과의 증명에 쓰인다.

- **매듭의 종수.** 매듭 Floer 호몰로지의 필터 길이가 매듭의 Seifert 종수와 같다. 종수를 아래에서 재는 고전적 방법(Alexander 다항식의 차수)보다 강하고, [매듭 불변량](knot-invariants.md)의 slice 종수에도 하한을 준다.

- **접촉 구조.** 접촉 3 다양체마다 $\widehat{\mathrm{HF}}$ 의 원소 하나가 정해지고, 그것이 $0$ 이 아닌 것이 접촉 구조가 채울 수 있음의 필요조건이다. 접촉 구조의 분류에 이 원소를 쓴다.

- **순간자 판본의 계산.** [순간자 Floer 호몰로지](instanton-floer-homology.md)의 Brieskorn 구면 계산을 Heegaard 쪽 조합 계산으로 대체한다. Seiberg–Witten 판본과의 동형을 거쳐 순간자 쪽 결론으로 옮긴다.

[^1]: P. Ozsváth, Z. Szabó, *Holomorphic disks and topological invariants for closed three-manifolds*, Ann. of Math. 159 (2004), 1027–1158.
[^2]: P. Ozsváth, Z. Szabó, *Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary*, Adv. Math. 173 (2003), 179–261.
[^3]: Ç. Kutluhan, Y.-J. Lee, C. H. Taubes, *HF=HM I–V*, Geom. Topol. 24 (2020), 2829–3062.

# 연관 문서

## 선수지식

- [순간자 Floer 호몰로지](instanton-floer-homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
