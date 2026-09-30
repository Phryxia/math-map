# 기하학적 Satake 대응

# 개요

[Satake 동형](satake-isomorphism.md)에서 비분기 Hecke 대수는 쌍대군의 표현환과 같다.

$$
\mathcal H(G,K)\thickspace\cong\thickspace R(\widehat G)\otimes\mathbb C
$$

표현환은 Grothendieck 군이라 $V\oplus W$ 와 $V'\oplus W'$ 이 같은 원소를 줄 수 있고, 텐서곱의 분해 중복도는 기억하지만 분해를 실현하는 사상은 잊는다.

기하학적 Satake 대응은 같은 등식을 [범주](category.md) 수준에서 준다. $\mathcal H(G,K)$ 의 원소인 함수 자리에 층을 놓는다.

$$
\mathrm{Perv}\_{G(\mathcal O)}\bigl(\mathrm{Gr}\_G\bigr)
\thickspace\simeq\thickspace
\mathrm{Rep}(\widehat G)
$$

왼쪽은 **아핀 Grassmann 다양체** $\mathrm{Gr}\_G=G(F)/G(\mathcal O)$ 위의 $G(\mathcal O)$ 동변 퍼버스 층들의 범주이고 오른쪽은 쌍대군의 유한차원 표현 범주다. 동치는 텐서 범주의 동치이며 층의 합성곱이 표현의 [텐서곱](tensor-products.md)에 대응한다.

왼쪽은 $G$ 만으로 정의되고 $\widehat G$ 를 쓰지 않는다. 오른쪽을 Tannaka 형식주의로 복원하면 쌍대군이 근계를 뒤집은 구성이 아니라 $G$ 의 고리 공간의 기하에서 나오는 대상이 된다.

$$
\widehat G=\mathrm{Aut}^{\otimes}\bigl(\text{올림자 } H^\ast\bigr)
$$

이 정리가 [Langlands 강령](langlands-program.md)에서 쌍대군이 등장하는 근거이고, 기하학적 Langlands 강령이 이를 바탕으로 세워진다.

# 직관

Satake 동형의 좌변 $\mathcal H(G,K)$ 는 이중 잉여류의 지시함수 $1_{Kt^\lambda K}$ 들이 기저이고, 우변 $R(\widehat G)\otimes\mathbb C$ 는 기약지표 $\chi_\lambda$ 들이 기저다. 두 기저가 서로 대응하는지 보려면 지시함수 하나의 상을 계산하면 된다. $1_{Kt^\lambda K}$ 의 상은 $\chi_\lambda$ 가 아니고, 다른 지표들이 $q^{-1}$ 의 거듭제곱을 계수로 섞여 든다. 동형은 있지만 기저끼리는 어긋난다.

섞여 드는 계수가 어디서 오는지 보려면 함수 대신 층을 쓴다. [유한체](finite-fields.md) 위의 다양체에서 $\ell$ 진 [층](sheaves.md)의 각 유리점에 Frobenius 작용의 대각합을 재면 함수가 나오고, 지시함수 $1_{Kt^\lambda K}$ 를 주는 것은 궤도 $\mathrm{Gr}^\lambda$ 의 상수층이다. 궤도의 폐포는 특이점을 가지므로 상수층은 폐포 위에서 단순하지 않다. 폐포 위에서 단순한 층인 교차 코호몰로지 층으로 바꾸면 대각합 함수에 특이점의 기여가 더해지고, 그 기여가 앞의 $q^{-1}$ 계수여서 기약지표가 정확히 나온다. 기저가 맞는 쪽이 함수가 아니라 층이므로 동형을 층의 범주에서 세운다.

# 정의

## 아핀 Grassmann 다양체

$k$ 를 체라 하고 $F=k((t))$ 와 $\mathcal O=k[[t]]$ 로 두고 $G$ 를 $k$ 위의 연결 환원군이라 하자. **아핀 Grassmann 다양체**는 함자

$$
\mathrm{Gr}\_G(R)=\bigl\lbrace(\mathcal E,\beta)\bigr\rbrace/\cong
$$

로 정의된다. $\mathcal E$ 는 $\mathrm{Spec}\thinspace R[[t]]$ 위의 $G$ 다발이고 $\beta$ 는 $\mathrm{Spec}\thinspace R((t))$ 위의 자명화다. 이 함자가 ind-사영 ind-스킴으로 표현되고 $k$ 점이 $G(F)/G(\mathcal O)$ 다.

$G=\mathrm{GL}\_n$ 이면 $\mathrm{Gr}\_G$ 는 $F^n$ 안의 $\mathcal O$ [격자](lattices.md) 전체와 같다.

## 궤도와 IC 층

Cartan 분해가 $G(\mathcal O)$ 궤도를 지배적 쌍대지표로 분류한다.

$$
\mathrm{Gr}\_G=\bigsqcup_{\lambda\in X_\ast(T)^+}\mathrm{Gr}^\lambda,
\qquad
\mathrm{Gr}^\lambda=G(\mathcal O)\cdot t^\lambda
$$

$\mathrm{Gr}^\lambda$ 는 차원 $\langle\lambda,2\rho\rangle$ 의 매끄러운 준사영 다양체이고, 폐포는

$$
\overline{\mathrm{Gr}^\lambda}=\bigsqcup_{\mu\le\lambda}\mathrm{Gr}^\mu
$$

다. $\mu\le\lambda$ 는 $\lambda-\mu$ 가 양의 쌍대근의 음이 아닌 정수 결합이라는 지배 순서다. $\mathcal{IC}\_\lambda$ 를 $\overline{\mathrm{Gr}^\lambda}$ 의 교차 코호몰로지 층으로 둔다. $G(\mathcal O)$ 동변 퍼버스 층들이 이루는 아벨 범주 $\mathrm{Perv}\_{G(\mathcal O)}(\mathrm{Gr}\_G)$ 의 단순 대상이 정확히 $\mathcal{IC}\_\lambda$ 들이다.

## 합성곱과 정리

합성곱은 곱사상 $m:G(F)\times^{G(\mathcal O)}\mathrm{Gr}\_G\to\mathrm{Gr}\_G$ 을 따라 밀어내는 것이다.

$$
\mathcal F\ast\mathcal G=m_\ast\bigl(\mathcal F\thinspace\widetilde\boxtimes\thinspace\mathcal G\bigr)
$$

이 곱은 정의상 교환적이지 않으므로 교환 제약을 따로 준다. 곡선 $X$ 위의 두 점 $x_1,x_2$ 에 층을 하나씩 놓고 두 점을 충돌시키는 족(Beilinson–Drinfeld Grassmann 다양체)에서, 두 점이 떨어져 있을 때 곱이 교환적이고 충돌 극한에서 합성곱이 나온다. 점을 맞바꾸는 경로가 주는 제약이 **융합**(fusion) 교환 제약이다.

> **정리 (Lusztig, Ginzburg, Beilinson–Drinfeld, Mirković–Vilonen).** 합성곱과 융합 교환 제약에 대해 $\mathrm{Perv}\_{G(\mathcal O)}(\mathrm{Gr}\_G)$ 는 대칭 텐서 범주이고, 전체 코호몰로지 $H^\ast$ 를 올림자로 하는 Tannaka 쌍대성으로
> $$
> \mathrm{Perv}\_{G(\mathcal O)}(\mathrm{Gr}\_G)\thickspace\simeq\thickspace\mathrm{Rep}(\widehat G)
> $$
> 가 텐서 범주의 동치로 성립한다. $\mathcal{IC}\_\lambda$ 가 최고무게 $\lambda$ 의 기약표현 $V_\lambda$ 에 대응한다.[^1]

Mirković–Vilonen 은 임의의 가환환 계수에서 이를 증명했고, 그 결과 $\widehat G$ 가 $\mathbb Z$ 위의 군 스킴으로 나온다.

# 성질

## 합성곱의 완전성

퍼버스 층 둘의 합성곱은 다시 퍼버스 층이다. 증명은 $\mathrm{Gr}\_G$ 의 한 연결성분 안에서 궤도 차원 $\langle\lambda,2\rho\rangle$ 의 홀짝성이 일정하다는 것을 쓴다. 같은 성분의 두 궤도는 $\lambda-\mu$ 가 쌍대근의 정수 결합이고 쌍대근 $\alpha^\vee$ 마다 $\langle\alpha^\vee,2\rho\rangle$ 가 짝수이므로 차원의 차가 짝수다. 일반적인 층에서는 합성곱이 아벨 범주 밖으로 나가 텐서 범주 구조를 얻지 못한다.

완전성과 분해 정리에서 합성곱이 $\mathcal{IC}$ 층들의 직합으로 쪼개지고, 그 중복도가 텐서곱 분해의 중복도와 같다.

$$
\mathcal{IC}\_\lambda\ast\mathcal{IC}\_\mu\cong\bigoplus_\nu\mathcal{IC}\_\nu^{\oplus c^\nu_{\lambda\mu}},
\qquad
V_\lambda\otimes V_\mu\cong\bigoplus_\nu V_\nu^{\oplus c^\nu_{\lambda\mu}}
$$

## Tannaka 올림자

Tannaka 쌍대성은 텐서 범주에서 벡터공간으로 가는 충실한 텐서 [함자](functors.md)로 군을 복원한다. 여기서 그 함자는 전체 코호몰로지다.

$$
H^\ast:\mathrm{Perv}\_{G(\mathcal O)}(\mathrm{Gr}\_G)\to\mathrm{Vect},
\qquad
\mathcal F\mapsto\bigoplus_kH^k(\mathrm{Gr}\_G,\mathcal F)
$$

Künneth 공식이 $H^\ast(\mathcal F\ast\mathcal G)\cong H^\ast(\mathcal F)\otimes H^\ast(\mathcal G)$ 를 주므로 $H^\ast$ 가 텐서 함자이고, 그 텐서 자기동형군이 $\widehat G$ 다. 쌍대군을 근 자료 없이 아핀 Grassmann 다양체의 코호몰로지에서 얻는다.

## MV 순환과 무게 공간

표현 $V_\lambda$ 의 무게 공간 분해를 기하 쪽에서 실현하는 것이 **반무한 낟가리**(semi-infinite cell)다. 멱단군 $N(F)$ 궤도로 자르면

$$
H^\ast\bigl(\mathrm{Gr}\_G,\mathcal{IC}\_\lambda\bigr)
=\bigoplus_{\mu}H^{\ast}\_{S_\mu}\bigl(\mathcal{IC}\_\lambda\bigr),
\qquad
S_\mu=N(F)\cdot t^\mu
$$

이고 오른쪽 $\mu$ 항이 무게 $\mu$ 의 무게 공간이다. 그 차원을 세는 것이 $\overline{\mathrm{Gr}^\lambda}\cap\overline{S_\mu}$ 의 기약성분들, 곧 **MV 순환**(Mirković–Vilonen)이다.

$$
\dim V_\lambda(\mu)=\char35{}\bigl\lbrace\text{MV 순환}\bigr\rbrace
$$

무게 중복도가 기하적 순환의 개수다. Kostant 분할 함수나 Littelmann 경로가 세던 수를 기하가 직접 준다. MV 다면체가 이 순환들을 조합적으로 나타낸 것이고 결정 기저(crystal basis)와 맞물린다.

## 고전적 Satake 의 회복

유한체 $\mathbb F_q$ 위에서 $\ell$ 진 층 $\mathcal F$ 의 유리점마다 Frobenius 대각합을 재면 함수가 나온다.

$$
f_{\mathcal F}(x)=\mathrm{tr}\bigl(\mathrm{Frob}\_x,\mathcal F_{\bar x}\bigr)
$$

이 대응이 **함수-층 사전**(Grothendieck)이고, 층의 합성곱이 함수의 합성곱으로 간다. $\mathcal{IC}\_\lambda$ 의 대각합 함수는 $\mathcal H(G,K)$ 의 원소이고 그 Satake 상이 기약지표 $\chi_\lambda$ 다.

고전적 Satake 동형에서 $1_{K t^\lambda K}$ 의 상은 $\chi_\lambda$ 가 아니라 낮은 항이 $q^{-1}$ 배로 섞인 꼴이다. $1_{Kt^\lambda K}$ 가 궤도 $\mathrm{Gr}^\lambda$ 의 상수층에, $\chi_\lambda$ 가 폐포의 $\mathcal{IC}$ 층에 대응하고, 둘의 차이가 교차 코호몰로지 줄기의 차원인 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)이다.

$$
\chi_\lambda=\sum_{\mu\le\lambda}P_{\mu\lambda}(q^{-1})\cdot\bigl[1_{Kt^\mu K}\bigr]
$$

함수 수준의 보정항이 층 수준에서는 특이점의 국소 위상수학이다.

## 변형과 확장

- $G=\mathrm{GL}\_n$ 이면 $\mathrm{Gr}\_G$ 의 궤도 폐포가 아핀 Schubert 다양체이고, MV 순환의 조합이 Young 표와 Littlewood–Richardson 규칙을 재현한다.
- 계수를 $\mathbb Z$ 나 표수 $p$ 체로 바꾸면 대응하는 것은 $\widehat G$ 의 **대수적 표현** 범주다. 표수 $p$ 의 표현론(Lusztig 추측 등)이 기하 문제로 번역된다.
- $\mathrm{Gr}\_G$ 대신 아핀 깃발 다양체를 쓰면 반복 Hecke 범주가 나오고, 그것이 아핀 Hecke 대수의 범주화다.

# 활용

## 쌍대군의 개념적 정의

Langlands 쌍대군의 원래 정의는 근 자료 $(X^\ast,\Phi,X_\ast,\Phi^\vee)$ 에서 $X^\ast\leftrightarrow X_\ast$ 와 $\Phi\leftrightarrow\Phi^\vee$ 를 맞바꾸는 것이고, 그 정의만으로는 쌍대군이 자기동형 형식을 지배하는 까닭이 나오지 않는다.

기하학적 Satake 는 $\widehat G$ 를 $G$ 의 고리 공간의 코호몰로지의 자기동형군으로 정의하고, 근 자료를 뒤집는 일이 정리의 결론으로 나온다.

## 기하학적 Langlands 강령

고전적 Langlands 강령에서 자기동형 형식은 $\mathrm{Bun}\_G$ 위의 함수이고 기하학적 판에서는 층이다. [Hecke 작용소](hecke-operators.md) 자리에 오는 **Hecke 함자**를 $\widehat G$ 의 표현으로 매개하는 것이 기하학적 Satake 다.

$$
\mathrm{Hecke}\_V:\mathrm{D}(\mathrm{Bun}\_G)\to\mathrm{D}(\mathrm{Bun}\_G\times X),
\qquad V\in\mathrm{Rep}(\widehat G)
$$

기하학적 Langlands 추측은 이 함자들의 동시 고유층(Hecke 고유층)과 $\widehat G$ 국소계의 대응이고, 진술에 기하학적 Satake 가 필요하다. Gaitsgory 와 공저자들이 2024 년에 증명을 발표했다.

## 함수성과 기본 보조정리

쌍대군 준동형 $\widehat H\to\widehat G$ 가 표현 범주 사이의 함자를 주고 그것이 층 범주 사이의 함자로 번역된다. 함수성을 기하적으로 실현하려는 Braverman–Kazhdan 과 L. Lafforgue 의 제안이 이 구도를 쓴다. Ngô 의 기본 보조정리 증명도 Hitchin 올뭉치의 기하로 궤도적분을 다룬다.

## 표현론에의 적용

기하 쪽 결과가 표현론 정리를 준다.

- MV 순환이 결정 기저의 기하적 실현을 주고, 텐서곱 중복도의 새로운 조합적 모형이 나온다.
- 표수 $p$ 계수의 기하학적 Satake 가 Lusztig 추측과 Williamson 의 반례로 이어졌다.
- 대칭공간과 상대적 Langlands 강령에서 "상대적 Satake" 가 같은 방식으로 연구된다.

[^1]: G. Lusztig, *Singularities, character formulas, and a q-analog of weight multiplicities*, Astérisque **101–102** (1983). V. Ginzburg, *Perverse sheaves on a loop group and Langlands duality*, arXiv:alg-geom/9511007. I. Mirković, K. Vilonen, *Geometric Langlands duality and representations of algebraic groups over commutative rings*, Ann. of Math. **166** (2007), 95–143. 융합 해석은 A. Beilinson, V. Drinfeld, *Quantization of Hitchin's integrable system and Hecke eigensheaves* (미출간). 해설로는 X. Zhu, *An introduction to affine Grassmannians and the geometric Satake equivalence*, IAS/Park City 강의록 (2016).

# 연관 문서

## 선수지식

- [Satake 동형](satake-isomorphism.md)
- [범주](category.md)

## 더 알아보기

- [MV 순환](mv-cycles.md)
- [기하학적 Langlands 강령](geometric-langlands.md)

#number_theory #category_theory #algebraic_topology #group_theory
