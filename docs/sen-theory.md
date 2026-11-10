# Sen 이론

# 개요

**Sen 이론(Sen theory)** 은 $p$ 진 [Galois 표현](galois-representations.md)에 Galois 군 작용을 무한소로 미분한 선형작용소를 붙여, 표현이 Hodge–Tate 인지와 그 무게를 이 작용소의 고윳값으로 판정하는 이론이다. 순환지표의 $1/3$ 제곱 $\langle\chi\rangle^{1/3}$ 이 Hodge–Tate 인지 알고 싶어도, Hodge–Tate 의 정의는 표현을 큰 체 $\mathbb C_p$ 위에서 쪼개는 꼴이라 직접 확인할 방법을 주지 않는다. Sen 이론은 이 확인을 [행렬](matrices.md) 하나의 [고윳값](eigenvalues.md) 계산으로 바꾼다. $\langle\chi\rangle^{1/3}$ 에서는 그 고윳값이 정수가 아닌 $1/3$ 이므로 Hodge–Tate 가 아니다.

# 직관

[p 진 Hodge 이론](p-adic-hodge-theory.md)에서 표현 $V$ 가 Hodge–Tate 라는 것은 $\mathbb C_p\otimes V$ 가 $\mathbb C_p(h)$ 꼴의 조각들로 쪼개진다는 것이다. $V$ 가 지표 $\eta$ 하나로 주어진 $1$ 차원 표현이면, 이것은 $\mathbb C_p$ 에 $\eta$ 를 붙여 비튼 것이 어떤 정수 $k$ 의 $\mathbb C_p(k)$ 와 같다는 조건이다. $\eta=\chi^k$ 이면 성립한다. $\eta=\langle\chi\rangle^{1/3}$ 이면 이 조건이 무한차원 체 $\mathbb C_p$ 의 원소에 관한 진술이어서 정의만으로는 판정이 끝나지 않는다.

지표의 지수를 꺼내려고 로그를 취한다. $\eta(\gamma)=\chi(\gamma)^s$ 꼴이면 $\log\eta(\gamma)/\log\chi(\gamma)=s$ 이므로 지수 $s$ 가 수로 나온다. $\chi^k$ 에서는 $k$ 가, $\langle\chi\rangle^{1/3}$ 에서는 $1/3$ 이 나온다.

Sen 의 정리는 $\mathbb C_p(\eta)\cong\mathbb C_p(k)$ 인 것과 이 수가 $k$ 인 것이 동치라고 준다. $1/3$ 은 정수가 아니므로 $\langle\chi\rangle^{1/3}$ 은 Hodge–Tate 가 아니다.

차원이 $2$ 이상이면 $\gamma$ 는 수가 아니라 행렬 $A(\gamma)$ 로 작용하고, 같은 계산이 행렬 $\log A(\gamma)/\log\chi(\gamma)$ 를 준다. $\gamma$ 가 $\begin{pmatrix}1&\log\chi(\gamma)\cr 0&1\end{pmatrix}$ 로 작용하는 표현에서는 이 행렬이 $\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 이다. 고윳값 $0,0$ 은 정수지만 행렬이 대각화되지 않고, 이 표현은 Hodge–Tate 가 아니다. 이 행렬을 Sen 작용소라 한다.

# 정의

## 순환분체 확대와 Cp 표현

$K/\mathbb Q_p$ 를 유한 확대라 하고 다음과 같이 둔다.

$$
K\subset K_\infty=K(\mu_{p^\infty})\subset\bar K,\qquad
\Gamma=\mathrm{Gal}(K_\infty/K),\qquad
H_K=\mathrm{Gal}(\bar K/K_\infty)
$$

$\chi:\Gamma\to\mathbb Z_p^\times$ 는 순환분체 지표(cyclotomic character)이고, $\Gamma$ 는 $\chi$ 로 $\mathbb Z_p^\times$ 의 열린 부분군과 동형인 $1$ 차원 $p$ 진 [Lie 군](lie-groups.md)이다. **$\mathbb C_p$ 표현($\mathbb C_p$-representation)** $W$ 는 $G_K$ 가 반선형으로 작용하는 $\mathbb C_p$ 위의 유한차원 벡터공간이다. $p$ 진 표현 $V$ 에서 $W=\mathbb C_p\otimes_{\mathbb Q_p}V$ 를 얻는다.

$x\in\mathbb Z_p^\times$ 를 $x=\omega(x)\langle x\rangle$ 로 쪼개면 $\omega(x)$ 는 $1$ 의 거듭제곱근이고 $\langle x\rangle\in 1+p\mathbb Z_p$ 다($p$ 홀수). $s\in\mathbb Z_p$ 에 대해 $\langle\chi\rangle^s(\gamma)=\exp(s\log\chi(\gamma))$ 는 지표이고, 개요의 $\langle\chi\rangle^{1/3}$ 은 $p\ne 3$ 일 때 $s=1/3$ 인 경우다.

Sen 은 $W$ 에 $\Gamma$ 안정인 $K_\infty$ 위의 유한차원 부분공간 $W_{K_\infty}$ 가 있어 $\mathbb C_p\otimes_{K_\infty}W_{K_\infty}\cong W$ 이고, 그런 부분공간 가운데 가장 큰 것이 유일하다는 것을 증명했다. $H_K$ 의 작용은 Ax–Sen–Tate 정리(Ax–Sen–Tate theorem)로 처리되고, $W_{K_\infty}$ 에는 $\Gamma$ 만 남는다.

## Sen 작용소

$W_{K_\infty}$ 의 기저에서 $\gamma$ 의 행렬을 $A(\gamma)$ 라 하자. $\gamma$ 가 $1$ 에 충분히 가까우면 행렬 로그가 수렴하고, 다음 행렬은 $\gamma$ 의 선택에 무관하다.

$$
\Theta=\frac{\log A(\gamma)}{\log\chi(\gamma)}
$$

이 $\Theta$ 를 **Sen 작용소(Sen operator)** 라 한다. 기저를 바꾸면 $\Theta$ 가 켤레되므로 고윳값은 기저에 무관하다. $\Gamma$ 의 [군 작용](group-actions.md)을 미분해 [Lie 대수](lie-algebras.md)의 작용을 얻는 것과 같은 구성이다.

- $W=\mathbb C_p(k)$ 이면 $A(\gamma)=\chi(\gamma)^k$ 이고 $\Theta=k$ 다.
- $W=\mathbb C_p(\langle\chi\rangle^{1/3})$ 이면 $\Theta=1/3$ 이다.
- $\psi=\log\chi:G_K\to\mathbb Q_p$ 로 $V=\begin{pmatrix}1&\psi\cr 0&1\end{pmatrix}$ 이면 $\Theta=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 다.

## 일반화된 Hodge–Tate 무게

$\Theta$ 의 고윳값을 중복도와 함께 모은 것을 $W$ 의 **일반화된 Hodge–Tate 무게(generalized Hodge–Tate weight)** 라 한다. 앞 절의 세 예에서는 $\lbrace k\rbrace$, $\lbrace 1/3\rbrace$, $\lbrace 0,0\rbrace$ 이다.

# 성질

## Hodge–Tate 판정

$V$ 가 $G_K$ 의 $p$ 진 표현일 때, $V$ 가 Hodge–Tate 인 것과 $\Theta$ 가 대각화 가능하고 고윳값이 전부 정수인 것은 동치다. 이때 고윳값의 모임이 $V$ 의 Hodge–Tate 무게다. 대각화 가능하고 고윳값이 정수 $k$ 이면 $W$ 가 고유공간으로 쪼개지고, 각 조각이 $\mathbb C_p(k)$ 의 직합이다.

$V$ 가 de Rham 이면 Hodge–Tate 이므로, $\Theta$ 의 판정은 de Rham 성의 필요조건이 된다.

## Tate 의 계산

$$
H^0(G_K,\mathbb C_p(k))=\begin{cases}K,&k=0\cr 0,&k\neq0\end{cases},\qquad
H^1(G_K,\mathbb C_p(k))=\begin{cases}K,&k=0\cr 0,&k\neq0\end{cases}
$$

$H^0$ 의 계산으로 $\mathbb C_p(k)$ 들은 서로 동형이 아니고, 조각 $\mathbb C_p(k)$ 의 $k$ 가 무게로 정해진다. $H^1(G_K,\mathbb C_p)$ 는 $\log\chi$ 의 류로 생성되며, 이 류가 정의 절의 셋째 예다.

## 대각화되지 않는 경우

$\mathbb C_p(k)$ 를 $\mathbb C_p(k')$ 로 확장한 표현은 $k\ne k'$ 이면 $H^1(G_K,\mathbb C_p(k-k'))=0$ 이어서 항상 쪼개진다. 그래서 $\Theta$ 가 대각화되지 않는 일은 같은 무게끼리의 확장에서만 생기고, 그 확장의 류가 $H^1(G_K,\mathbb C_p)$ 의 $0$ 아닌 원소일 때 생긴다.

[Tate 곡선](tate-curve.md)의 $p$ 진 Tate 가군은 $\begin{pmatrix}\chi&\ast\cr 0&1\end{pmatrix}$ 꼴의 쪼개지지 않는 확장이지만, 무게 $1$ 과 $0$ 이 달라 $\mathbb C_p$ 위에서는 쪼개지고 Hodge–Tate 다. 비분지 지표 $\psi$ 로 만든 $\begin{pmatrix}1&\psi\cr 0&1\end{pmatrix}$ 도 $\psi$ 의 류가 $H^1(G_K,\mathbb C_p)$ 에서 $0$ 이어서 Hodge–Tate 다.

## Sen 작용소가 담는 정보

$\Theta$ 는 Hodge–Tate 무게만 본다. $B_{\mathrm{dR}}$ 이 보는 여과와 $B_{\mathrm{cris}}$ 가 보는 Frobenius 는 $\Theta$ 에 나타나지 않는다.

$\Gamma$ 작용을 미분해 작용소를 얻는 구성은 다른 대상으로 확장되었다. $B_{\mathrm{dR}}$ 표현의 Sen 작용소(Fontaine), $(\varphi,\Gamma)$ [가군](modules.md) 위의 Sen 작용소(Colmez, Kedlaya–Liu), 프리즘 코호몰로지(prismatic cohomology)의 Sen 작용소(Bhatt–Lurie)가 있다.

# 활용

## p 진 족

자기동형 형식의 $p$ 진 족에서는 무게가 $p$ 진적으로 변하고, 족의 점에 붙은 Galois 표현의 Hodge–Tate 무게가 정수가 아닐 수 있다. Coleman–Mazur 고윳값 곡선(Coleman–Mazur eigencurve) 위에서 일반화된 Hodge–Tate 무게는 해석함수로 변하고, 고전적 점에서는 정수다.

## de Rham 성의 검사

[Fontaine–Mazur 추측](fontaine-mazur.md)은 기하에서 오는 표현을 de Rham 성으로 가른다. $\Theta$ 의 고윳값이 정수가 아니거나 $\Theta$ 가 대각화되지 않으면 표현은 de Rham 이 아니므로, $\Theta$ 의 계산이 판정의 첫 단계로 쓰인다.

## p 진 국소 Langlands 대응

$\mathrm{GL}\_2(\mathbb Q_p)$ 의 $p$ 진 국소 Langlands 대응(Colmez)에서 Galois 쪽의 Sen 무게가 표현 쪽의 무한소 지표(infinitesimal character)에 대응한다. 무한 자리에서 $(\mathfrak g,K)$ 가군의 무한소 지표가 맡는 역할을 $p$ 진 자리에서 $\Theta$ 가 맡는다.

# 연관 문서

## 선수지식

- [p 진 Hodge 이론](p-adic-hodge-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #linear_algebra
