# Lie 대수

# 개요

**Lie 대수(Lie algebra)** 는 Lie 괄호라는 쌍선형 연산을 갖춘 벡터공간이다. 공을 한 축으로 조금 돌리고 다른 축으로 조금 돌린 뒤 두 회전을 거꾸로 같은 만큼 하면, 공은 제자리로 오지 않고 셋째 축으로 아주 조금 돌아가 있다. Lie 대수는 이런 회전의 어긋남을 [행렬](matrices.md)의 교환자 $XY-YX$ 하나로 적어, 연속 대칭군의 문제를 [선형사상](linear-maps.md)의 계산으로 바꾼다.

# 직관

$\mathrm{SO}(3)$ , $\mathrm{U}(n)$ , $\mathrm{GL}\_n$ 같은 연속 대칭군은 [다양체](manifolds.md)이면서 군이다. 항등원의 접공간은 벡터공간이고, 군 곱셈의 비가환성은 그 위의 쌍선형 연산 하나로 압축된다.

$$
[X,Y]=XY-YX
$$

이 괄호를 갖춘 벡터공간이 Lie 대수다. 결합법칙 대신 Jacobi 항등식을 만족하는 비결합 대수이며, [Lie 군](lie-groups.md)의 문제를 선형사상의 문제로 옮긴다.

$X$ 방향으로 시간 $t$ , $Y$ 방향으로 $t$ , 다시 $X$ 로 $-t$ , $Y$ 로 $-t$ 만큼 흐르면 가환인 경우에만 제자리로 돌아온다. 남는 오차의 최저차항이 교환자다.

$$
e^{tX}e^{tY}e^{-tX}e^{-tY}=e^{t^2[X,Y]+O(t^3)}
$$

$[X,Y]$ 는 군의 비가환성을 무한소 수준에서 재는 양이다. $x$ 축 회전과 $y$ 축 회전을 번갈아 하면 $z$ 축 회전이 남으므로 $\mathfrak{so}(3)$ 의 괄호는 벡터곱 $[e_1,e_2]=e_3$ , $[e_2,e_3]=e_1$ , $[e_3,e_1]=e_2$ 다. 군 곱셈을 괄호로 되돌리는 것이 Baker–Campbell–Hausdorff 공식이다.

$$
\log\left(e^Xe^Y\right)=X+Y+\tfrac12[X,Y]+\tfrac1{12}\big([X,[X,Y]]-[Y,[X,Y]]\big)+\cdots
$$

오른쪽에는 괄호밖에 없으므로 군 곱셈이 괄호만으로 복원되고, 국소적으로 군의 정보가 대수에 전부 들어 있다.

# 정의

## Lie 대수

**Lie 대수** 는 체 $k$ 위의 벡터공간 $\mathfrak g$ 와 쌍선형 사상 $[\cdot,\cdot]:\mathfrak g\times\mathfrak g\to\mathfrak g$ 의 쌍 가운데 다음을 만족하는 것이다.

- 교대성(alternating property): 모든 $X$ 에 대해 $[X,X]=0$ 이다. 따라서 $[X,Y]=-[Y,X]$ 다.
- Jacobi 항등식(Jacobi identity): $[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0$ 이다.

결합대수 $A$ 는 $[a,b]=ab-ba$ 로 Lie 대수가 된다. $\mathfrak{gl}\_n=M_n(k)$ 가 그런 예다. $\mathbb R^3$ 에 벡터곱을 괄호로 준 것도 Lie 대수이고, 직관 절의 $\mathfrak{so}(3)$ 가 이것이다. $[e_1,e_1]=0$ 이고, $X=e_1$, $Y=e_2$, $Z=e_3$ 에서 Jacobi 항등식의 세 항은 $[e_1,e_1]+[e_2,e_2]+[e_3,e_3]=0$ 이다.

**부분대수(subalgebra)** 는 괄호에 닫힌 부분공간이고, **아이디얼(ideal)** $\mathfrak a$ 는 $[\mathfrak g,\mathfrak a]\subset\mathfrak a$ 인 부분공간이다. 아이디얼로 몫 $\mathfrak g/\mathfrak a$ 를 만든다.

$\mathfrak{gl}\_n$ 에서 대각합이 $0$ 인 행렬 전체 $\mathfrak{sl}\_n$ 은 $\mathrm{tr}(XY-YX)=0$ 이므로 아이디얼이다. 상삼각행렬 전체는 곱에 닫혀 있으므로 부분대수이지만 아이디얼이 아니다.

## 딸림표현과 Killing 형식

**딸림표현(adjoint representation)** 은 $\mathrm{ad}:\mathfrak g\to\mathfrak{gl}(\mathfrak g)$ , $\mathrm{ad}\_X(Y)=[X,Y]$ 다. **Killing 형식(Killing form)** 은 딸림표현에서 만든 다음 대칭 쌍선형형식이다.

$$
\kappa(X,Y)=\mathrm{tr}\left(\mathrm{ad}\_X\circ\mathrm{ad}\_Y\right)
$$

$\mathfrak{so}(3)$ 에서 $\mathrm{ad}\_{e_1}$ 은 $e_1\mapsto 0$, $e_2\mapsto e_3$, $e_3\mapsto -e_2$ 이다. $\mathrm{ad}\_{e_1}^2$ 은 $e_2,e_3$ 을 각각 $-e_2,-e_3$ 으로 보내므로 $\kappa(e_1,e_1)=-2$ 이고, 같은 계산으로 $\kappa(e_i,e_j)=-2\delta\_{ij}$ 다.

## 가해, 멱영, 반단순

유도열과 하향 중심열을 다음으로 정의한다.

$$
\mathfrak g^{(0)}=\mathfrak g,\quad \mathfrak g^{(k+1)}=[\mathfrak g^{(k)},\mathfrak g^{(k)}]
$$

$$
\mathfrak g^{1}=\mathfrak g,\quad \mathfrak g^{k+1}=[\mathfrak g,\mathfrak g^{k}]
$$

어떤 $k$ 에서 $\mathfrak g^{(k)}=0$ 이면 **가해(solvable)** 이고, $\mathfrak g^{k}=0$ 이면 **멱영(nilpotent)** 이다. 상삼각행렬이 가해의 표준 예이고, 대각성분이 0 인 엄격 상삼각행렬이 멱영의 예다. $2\times 2$ 상삼각행렬에서 $\mathfrak g^{(1)}$ 은 엄격 상삼각행렬 $\lbrace\begin{pmatrix}0&b\cr 0&0\end{pmatrix}\rbrace$ 이고 $\mathfrak g^{(2)}=0$ 이다.

가해 아이디얼 중 최대인 것이 **근기(radical)** $\mathrm{rad}\mathfrak g$ 다. $\mathrm{rad}\mathfrak g=0$ 이면 **반단순(semisimple)** 이고, 진아이디얼이 $0$ 뿐이며 가환이 아니면 **단순(simple)** 이다. $\mathfrak{so}(3)$ 은 단순이다. 영이 아닌 아이디얼이 원소 $X\ne 0$ 을 가지면 $X$ 에 수직인 $Y$ 와의 벡터곱 $[X,Y]$ 와 $[X,[X,Y]]$ 가 $X$ 와 함께 $\mathbb R^3$ 을 채운다.

# 성질

## 딸림표현의 성질

괄호는 결합적이지 않고 $[[X,Y],Z]\ne[X,[Y,Z]]$ 다. Jacobi 항등식이 그 자리를 대신하며, $\mathrm{ad}\_X(Y)=[X,Y]$ 로 두면 같은 식이

$$
\mathrm{ad}\_X([Y,Z])=[\mathrm{ad}\_XY,Z]+[Y,\mathrm{ad}\_XZ]
$$

가 된다. $\mathrm{ad}\_X$ 가 괄호에 대한 도함수라는 뜻이고, 대칭의 무한소 작용이 미분이라는 관점에서 Jacobi 항등식은 Leibniz 규칙이다.

Jacobi 항등식은 $\mathrm{ad}$ 가 Lie 대수 준동형임을 뜻하고, $\mathrm{ad}$ 의 핵은 중심 $Z(\mathfrak g)$ 다. Killing 형식은 구조상수만으로 계산되고 불변성 $\kappa([X,Y],Z)=\kappa(X,[Y,Z])$ 을 만족한다. 귀납법으로 $\mathfrak g^{(k)}\subset\mathfrak g^{k+1}$ 이므로 멱영이면 가해다.

[Ado 정리](ado-theorem.md)로 모든 유한차원 Lie 대수는 어떤 $\mathfrak{gl}\_n$ 의 부분대수다.

## Cartan 판정법

Killing 형식이 가해성과 반단순성을 판정한다.

$$
\mathfrak g\ \text{가해}\iff \kappa(\mathfrak g,[\mathfrak g,\mathfrak g])=0
$$

$$
\mathfrak g\ \text{반단순}\iff \kappa\ \text{가 비퇴화}
$$

반단순이면 단순 아이디얼의 직합으로 유일하게 분해된다.

$$
\mathfrak g=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_r
$$

일반 Lie 대수는 [Levi 분해](levi-decomposition.md) $\mathfrak g=\mathrm{rad}\mathfrak g\rtimes\mathfrak s$ 로 가해 부분과 반단순 부분으로 나뉜다. 분류는 반단순 쪽에서 근계로 완결되고, 가해 쪽은 낮은 차원에서만 목록이 있다.

## sl₂ 의 표현

$\mathfrak{sl}\_2$ 는 대각합이 $0$ 인 $2\times2$ 행렬들이고 기저와 괄호가 다음과 같다.

$$
H=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix},\quad
E=\begin{pmatrix}0&1\cr 0&0\end{pmatrix},\quad
F=\begin{pmatrix}0&0\cr 1&0\end{pmatrix}
$$

$$
[H,E]=2E,\qquad [H,F]=-2F,\qquad [E,F]=H
$$

표현 $V$ 에서 $H$ 의 [고유벡터](eigenvalues.md) $v$ 의 고윳값을 $\lambda$ 라 하면

$$
H(Ev)=EHv+[H,E]v=(\lambda+2)Ev
$$

이므로 $E$ 는 고윳값을 $2$ 올리고 $F$ 는 $2$ 내린다. 유한차원이면 올리다가 멈추므로 최고무게 벡터가 있고, 거기서 $F$ 를 반복 적용해 얻는 벡터들이 표현 전체의 기저다. 각 차원마다 기약표현이 정확히 하나씩이고, 이 올림·내림이 양자역학의 각운동량 올림·내림 연산자다. 일반 반단순 Lie 대수의 표현론은 근계를 따라 $\mathfrak{sl}\_2$ 부분대수 여러 개를 붙인 것으로 다룬다.

## 근계와 Dynkin 도표

복소 반단순 $\mathfrak g$ 에서 극대 가환 부분대수 $\mathfrak h$ (Cartan 부분대수)를 잡으면 $\mathrm{ad}\mathfrak h$ 가 동시대각화되어 근공간 분해를 준다.

$$
\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha,\qquad \mathfrak g_\alpha=\lbrace X:[H,X]=\alpha(H)X\ \forall H\in\mathfrak h\rbrace
$$

$\Phi\subset\mathfrak h^\ast$ 가 **근계**이고 각 $\dim\mathfrak g_\alpha=1$ 이다. 근계는 Weyl 군이 작용하는 조합적 대상이라 조합론으로 분류되며, 단순근 사이의 각도를 그린 그래프가 **Dynkin 도표**다.

네 무한 계열은 고전 Lie 대수이고, 예외형 다섯 $E_6,E_7,E_8,F_4,G_2$ 는 계열 밖에 홀로 선다.

| 계열 | Lie 대수 | 차원 |
| --- | --- | --- |
| $A_n$ | $\mathfrak{sl}\_{n+1}$ | $n(n+2)$ |
| $B_n$ | $\mathfrak{so}\_{2n+1}$ | $n(2n+1)$ |
| $C_n$ | $\mathfrak{sp}\_{2n}$ | $n(2n+1)$ |
| $D_n$ | $\mathfrak{so}\_{2n}$ | $n(2n-1)$ |

$E_8$ 은 248 차원이고 근이 240 개다. 그 240 개의 근이 이루는 [격자](lattices.md)가 8 차원 [구 채우기](sphere-packing.md)의 최적 격자이며, [theta 급수](theta-series.md)에서 $\Theta_{E_8}=E_4$ 로 나타나는 대상이다.

## 무한차원 확장

- **affine Kac–Moody 대수.** 유한차원 $\mathfrak g$ 에 Laurent [다항식환](polynomial-rings.md)을 텐서하고 중심 확대를 붙인 $\hat{\mathfrak g}=\mathfrak g\otimes\mathbb C[t,t^{-1}]\oplus\mathbb Cc$ 다. 확장된 Dynkin 도표로 분류되며 표현의 지표가 [모듈러 형식](modular-forms.md)이 된다.
- **Virasoro 대수.** 원 위의 벡터장 대수의 중심 확대다.

$$
[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}m(m^2-1)\delta_{m+n,0}
$$

중심원소 $c$ 가 **중심전하**다. [아핀 Lie 대수](affine-lie-algebras.md)와 [Virasoro 대수](virasoro-algebra.md)가 2 차원 등각장론의 대칭이고, 그 표현론을 공리화한 것이 정점작용소대수다. [괴물 달빛](monstrous-moonshine.md)의 $V^\natural$ 은 중심전하 24 의 그런 대수이며, Borcherds 의 일반화된 Kac–Moody 대수도 이 계보에 있다.

# 활용

- **양자역학.** 각운동량 대수가 $\mathfrak{su}(2)\cong\mathfrak{sl}\_2$ 이고 스핀 $j$ 표현이 $2j+1$ 차원 기약표현이다. 사다리 연산자가 $E,F$ 다.
- **게이지 이론.** $\mathfrak{su}(3)\times\mathfrak{su}(2)\times\mathfrak u(1)$ 이 표준모형의 대칭이고, 매개 입자의 개수가 대수의 차원이다. $\mathfrak{su}(3)$ 이 8 차원이라 글루온이 8 개다.
- **미분방정식.** 방정식을 보존하는 무한소 변환이 Lie 대수를 이루고, 그 구조에서 적분인자와 해의 축소가 나온다. [Galois 이론](galois-theory.md)이 대수방정식에 대해 하는 일의 연속군 판이다.
- **조화해석.** $\mathrm{SO}(3)$ 의 기약표현 분해가 [구면조화함수](spherical-harmonics.md)이고 각 표현의 차원이 $2\ell+1$ 이다.
- **Langlands 강령.** [Langlands 강령](langlands-program.md)의 쌍대군 ${}^L\negthinspace G$ 는 근계의 근과 쌍대근을 맞바꿔 얻는다.
- **대수기하.** 반단순군의 [깃발다양체](flag-varieties.md)와 Schubert 셈법이 근계 조합론 위에서 계산된다.

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)
- [다양체](manifolds.md)
- [추상대수 개관](abstract-algebra-overview.md)

## 더 알아보기

### 구조와 표현론

- [Lie 군](lie-groups.md)
- [근계](root-systems.md)
- [보편포락대수](universal-enveloping-algebra.md)

### 무한차원 대수

- [Virasoro 대수](virasoro-algebra.md)
- [정점작용소대수](vertex-operator-algebras.md)
- [Wess–Zumino–Witten 모형](wess-zumino-witten.md)

#algebra #linear_algebra #group_theory
