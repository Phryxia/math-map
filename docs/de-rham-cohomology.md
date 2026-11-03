# de Rham 코호몰로지

# 개요

**de Rham 코호몰로지(de Rham cohomology)** 는 다양체 위에서 미분하면 $0$ 이 되는 형식 가운데 어떤 형식의 미분으로도 적히지 않는 것이 얼마나 있는지 세는 벡터공간이다. 원점을 뺀 평면의 벡터장 $\bigl(-y/(x^2+y^2),\ x/(x^2+y^2)\bigr)$ 는 회전이 $0$ 인데도 어떤 함수의 기울기도 아니다. de Rham 코호몰로지는 이런 벡터장이 이루는 공간의 차원으로 영역의 구멍을 센다.

# 직관

평면의 벡터장 $F=(P,Q)$ 가 어떤 함수 $f$ 의 기울기 $(\partial f/\partial x,\ \partial f/\partial y)$ 인지 묻는다. 기울기이면 $\partial Q/\partial x=\partial^2 f/\partial x\partial y=\partial P/\partial y$ 이므로 $\partial Q/\partial x=\partial P/\partial y$ 가 필요하다. 평면 전체에서는 이 조건이 충분하다. 원점에서 점 $(x,y)$ 까지 선분을 따라 $F$ 를 적분한 값을 $f(x,y)$ 로 두면 그 기울기가 $F$ 다.

원점을 뺀 평면 $M$ 에서 $P=-y/(x^2+y^2)$, $Q=x/(x^2+y^2)$ 로 두면 $\partial Q/\partial x$ 와 $\partial P/\partial y$ 가 둘 다 $(y^2-x^2)/(x^2+y^2)^2$ 이다. 그런데 단위원 $x=\cos t$, $y=\sin t$ 를 따라 적분하면 $P\thinspace dx+Q\thinspace dy=\sin^2 t\thinspace dt+\cos^2 t\thinspace dt=dt$ 이므로 한 바퀴의 적분이 $2\pi$ 다. $F$ 가 $f$ 의 기울기이면 닫힌 곡선을 따라 적분한 값은 출발점과 도착점의 $f$ 값의 차이인 $0$ 이어야 한다. 그러므로 $F$ 는 기울기가 아니다. 선분을 따라 적분해 $f$ 를 만드는 방법은 선분이 원점을 지날 수 있어서 $M$ 에서 쓸 수 없다.

조건을 만족하는 $M$ 위의 벡터장 $G$ 마다 단위원을 따라 적분한 값을 $2\pi c$ 라 두면, $G-cF$ 는 단위원 위 적분이 $0$ 이고 이때 $G-cF$ 는 기울기다. 조건을 만족하는 벡터장에서 기울기를 무시하면 남는 것은 수 $c$ 하나이고, 원점이라는 구멍 하나에 차원 하나가 대응한다. 벡터장 $(P,Q)$ 를 [미분형식](differential-forms.md) $P\thinspace dx+Q\thinspace dy$ 로, 기울기를 $df$ 로, 조건을 $d(P\thinspace dx+Q\thinspace dy)=0$ 으로 바꿔 쓰고 이 몫을 모든 차수에서 정의한 것이 de Rham 코호몰로지다.

# 정의

## de Rham 복합체

매끄러운 다양체 $M$ 위에서 외미분 $d$ 는 $d\circ d=0$ 을 만족하므로 다음 열은 [사슬 복합체](chain-complexes.md)다. 이것을 **de Rham 복합체(de Rham complex)** 라 한다.

$$
0\to\Omega^0(M)\xrightarrow{\ d\ }\Omega^1(M)\xrightarrow{\ d\ }\cdots\xrightarrow{\ d\ }\Omega^n(M)\to0
$$

## 닫힘형식과 완전형식

$d\omega=0$ 인 $k$-형식 $\omega$ 를 **닫힘형식(closed form)** 이라 하고, 어떤 $(k-1)$-형식 $\eta$ 로 $\omega=d\eta$ 인 $\omega$ 를 **완전형식(exact form)** 이라 한다. $d\circ d=0$ 이므로 완전형식은 닫힘형식이다. 직관 절의 $\omega=P\thinspace dx+Q\thinspace dy$ 는 $M$ 에서 닫힘형식이고 완전형식이 아니다. $\mathbb R^2$ 의 $x\thinspace dx+y\thinspace dy$ 는 $d\bigl((x^2+y^2)/2\bigr)$ 이므로 완전형식이다.

## de Rham 코호몰로지

$k$ 번째 **de Rham 코호몰로지군(de Rham cohomology group)** 은 닫힘형식을 완전형식으로 나눈 실벡터공간이다.

$$
H^k_{\mathrm{dR}}(M)=\frac{Z^k}{B^k},\qquad Z^k=\ker d\vert\_{\Omega^k},\quad B^k=\mathrm{im}\thinspace d\vert\_{\Omega^{k-1}}
$$

$\omega$ 의 동치류 $\lbrack\omega\rbrack$ 를 **코호몰로지류(cohomology class)** 라 한다. 직관 절의 계산은 $M=\mathbb R^2\setminus\lbrace 0\rbrace$ 에서 $H^1_{\mathrm{dR}}(M)=\mathbb R\lbrack\omega\rbrack$ 이라는 것이고, 동형사상은 $\lbrack\eta\rbrack\mapsto\frac{1}{2\pi}\oint_{S^1}\eta$ 다. $H^0_{\mathrm{dR}}(M)$ 은 $df=0$ 인 함수, 곧 연결 성분마다 상수인 함수의 공간이다. $M$ 은 연결이므로 $H^0_{\mathrm{dR}}(M)=\mathbb R$ 이다.

## 곱과 당김

쐐기곱으로 $\lbrack\alpha\rbrack\lbrack\beta\rbrack=\lbrack\alpha\wedge\beta\rbrack$ 를 정의한다. 원환면 $T^2=\mathbb R^2/\mathbb Z^2$ 에서 $dx$, $dy$ 는 닫힘형식이고 $\lbrack dx\rbrack\lbrack dy\rbrack=\lbrack dx\wedge dy\rbrack$ 다. $dx\wedge dy$ 의 $T^2$ 위 적분이 $1$ 이므로 이 곱은 $0$ 이 아니다.

매끄러운 사상 $F\colon N\to M$ 은 당김(pullback)으로 $F^\ast\colon H^k_{\mathrm{dR}}(M)\to H^k_{\mathrm{dR}}(N)$, $F^\ast\lbrack\omega\rbrack=\lbrack F^\ast\omega\rbrack$ 를 정의한다. 단위원의 포함 $\iota\colon S^1\to M$ 에서 $\iota^\ast\omega=dt$ 이고, $\oint_{S^1}dt=2\pi$ 이므로 $\iota^\ast\lbrack\omega\rbrack\ne 0$ 이다.

# 성질

## 잘 정의됨과 함자성

$\alpha$ 가 닫힘형식이면 $\alpha\wedge d\eta=\pm d(\alpha\wedge\eta)$ 이므로 곱은 대표원의 선택과 무관하다. 이 곱으로 $\bigoplus_k H^k_{\mathrm{dR}}(M)$ 은 등급 가환 대수(graded commutative algebra)다. $F^\ast$ 는 $d$ 와 교환하므로 코호몰로지에서 잘 정의되고, $(G\circ F)^\ast=F^\ast\circ G^\ast$ 이므로 $M\mapsto H^\ast_{\mathrm{dR}}(M)$ 은 반변 [함자](functors.md)다.

## 호모토피 불변성

$F,G\colon N\to M$ 이 매끄럽게 호모토픽하면 $F^\ast=G^\ast$ 다. 증명의 요지는 다음을 만족하는 호모토피 작용소(homotopy operator) $K\colon\Omega^k(M)\to\Omega^{k-1}(N)$ 의 구성이다.

$$
G^\ast\omega-F^\ast\omega=d(K\omega)+K(d\omega)
$$

$\omega$ 가 닫혀 있으면 둘째 항이 $0$ 이고 차이가 완전형식이다. 그러므로 호모토피 동치인 두 다양체의 코호몰로지는 동형이다. 수축가능한 다양체의 코호몰로지가 점의 것과 같다는 사실을 Poincaré 보조정리(Poincaré lemma)라 한다.

$$
H^k_{\mathrm{dR}}(\mathbb R^n)=\begin{cases}\mathbb R&k=0\cr 0&k\gt 0\end{cases}
$$

## Mayer–Vietoris 수열

[Mayer–Vietoris 완전열](mayer-vietoris.md)은 de Rham 코호몰로지에서도 성립한다. $M=U\cup V$ 가 열린집합 둘의 합이면 다음 긴 완전열이 있다.

$$
\cdots\to H^k(M)\to H^k(U)\oplus H^k(V)\to H^k(U\cap V)\xrightarrow{\ \delta\ }H^{k+1}(M)\to\cdots
$$

연결 준동형 $\delta$ 는 [단위분할](partitions-of-unity.md)로 정의된다. 아래 표의 값은 이 수열과 호모토피 불변성으로 계산된다.

| 다양체 | H⁰ | H¹ | H² |
|---|---|---|---|
| $\mathbb R^n$ | $\mathbb R$ | $0$ | $0$ |
| $S^1$ | $\mathbb R$ | $\mathbb R$ | $0$ |
| $S^2$ | $\mathbb R$ | $0$ | $\mathbb R$ |
| $T^2$ | $\mathbb R$ | $\mathbb R^2$ | $\mathbb R$ |
| $\mathbb R^2\setminus\lbrace 0\rbrace$ | $\mathbb R$ | $\mathbb R$ | $0$ |

$\mathbb R^2\setminus\lbrace 0\rbrace$ 은 $S^1$ 과 호모토피 동치이므로 두 줄이 같다.

## de Rham 정리

de Rham 정리(de Rham theorem)는 매끄러운 다양체 $M$ 에서 형식을 특이 사슬 위에서 적분하는 사상이 동형을 유도한다는 것이다.

$$
H^k_{\mathrm{dR}}(M)\cong H^k(M;\mathbb R)
$$

오른쪽은 실계수 특이 [코호몰로지](cohomology.md)다. 증명은 좋은 덮개(good cover)를 잡아 두 이론에 Mayer–Vietoris 수열을 적용하고 다섯 보조정리(five lemma)로 열린집합의 개수에 대한 귀납을 한다.

계수가 [실수](real-numbers.md)이므로 비틀림은 보이지 않는다. $\mathbb{RP}^2$ 에서 $H^2(\mathbb{RP}^2;\mathbb Z)=\mathbb Z/2$ 이고 $H^2_{\mathrm{dR}}(\mathbb{RP}^2)=0$ 이다. $H^1_{\mathrm{dR}}(M)\cong\mathrm{Hom}\bigl(\pi_1(M),\mathbb R\bigr)$ 이므로 [기본군](fundamental-group.md)에서는 실수로 가는 준동형만 남는다.

## Euler 지표

콤팩트 다양체에서 차원의 교대합은 [Euler 지표](euler-characteristic.md)다.

$$
\chi(M)=\sum_k(-1)^k\dim H^k_{\mathrm{dR}}(M)
$$

de Rham 정리와 특이 코호몰로지의 계산으로 이 값은 삼각분할의 꼭짓점, 변, 면 수의 교대합과 같다. 표에서 $\chi(S^2)=2$, $\chi(T^2)=0$ 이다.

## 조화형식

$M$ 이 콤팩트이고 가향이며 [Riemann 계량](riemannian-metrics.md)을 가지면 코호몰로지류마다 조화형식(harmonic form) 대표원이 하나씩 있다.

$$
H^k_{\mathrm{dR}}(M)\cong\mathcal H^k=\ker\Delta\vert\_{\Omega^k},\qquad\Delta=d\delta+\delta d
$$

$\Delta$ 가 타원형 작용소(elliptic operator)이므로 $\mathcal H^k$ 는 유한차원이고, 따라서 $H^k_{\mathrm{dR}}(M)$ 도 유한차원이다. Hodge 별작용소(Hodge star operator)는 $\mathcal H^k$ 와 $\mathcal H^{n-k}$ 사이의 동형이고, 이것으로 [Poincaré 쌍대성](poincare-duality.md) $H^k\cong H^{n-k}$ 이 증명된다. [Hodge 이론](hodge-theory.md)은 복소다양체에서 $\mathcal H^k$ 를 $(p,q)$ 형으로 쪼갠다.

# 활용

- 벡터해석. $\mathbb R^3$ 의 영역에서 회전이 $0$ 인 벡터장이 기울기인지는 그 영역의 $H^1_{\mathrm{dR}}$ 로 정해진다. 영역이 수축가능하면 항상 기울기이고, $z$ 축을 뺀 영역에서는 $z$ 축을 도는 적분이 $0$ 인 것만 기울기다.
- Aharonov–Bohm 효과(Aharonov–Bohm effect). 솔레노이드 바깥 영역에서 자기장은 $0$ 이지만 퍼텐셜 1-형식은 닫힘형식이고 완전형식이 아니다. 이 형식을 솔레노이드 둘레로 적분한 값이 자기 선속이고, 이 값이 관측되는 위상차를 정한다.
- [Gauss–Bonnet 정리](gauss-bonnet.md)와 [지표 정리](index-theorem.md)는 곡률로 만든 닫힘형식의 적분이 Euler 지표 같은 위상 불변량과 같다는 진술이다. 두 계량에서 만든 형식의 차가 완전형식이므로 두 형식의 코호몰로지류가 같고 적분값도 같다.
- 복소다양체에서는 Dolbeault 코호몰로지(Dolbeault cohomology)로 세분되고, Hodge 추측(Hodge conjecture)은 사영 복소다양체에서 $(p,p)$ 형 유리 코호몰로지류가 대수적 부분다양체들이 정하는 코호몰로지류의 유리 선형결합인지를 묻는다.
- de Rham 복합체는 상수층 $\underline{\mathbb R}$ 의 분해이므로 de Rham 코호몰로지는 [층](sheaves.md) 코호몰로지 $H^k(M;\underline{\mathbb R})$ 와 같다.

# 연관 문서

## 선수지식

- [미분형식](differential-forms.md)
- [단체 호몰로지](homology.md)

## 더 알아보기

- [Hodge 이론](hodge-theory.md)
- [특성류](characteristic-classes.md)
- [Chern–Simons 이론](chern-simons.md)

#algebraic_topology #differential_geometry #analysis
