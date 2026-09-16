# Lie 대수

# 개요

회전군 $\mathrm{SO}(3)$ 과 유니터리군 $\mathrm{U}(n)$ 과 가역행렬군 $\mathrm{GL}_n$ 같은 연속 대칭군은 [다양체](manifolds.md)이면서 군이다. 이런 대상을 직접 다루면 곡률과 위상이 섞여 들어와 곤란한데, 항등원 근처만 보면 이야기가 완전히 달라진다. 항등원의 접공간은 그냥 벡터공간이고, 군 곱셈의 비가환성이 그 위의 쌍선형 연산 하나로 압축된다.

$$
[X,Y]=XY-YX
$$

이 **괄호**를 갖춘 벡터공간이 **Lie 대수**다. 결합법칙 대신 Jacobi 항등식을 만족하는 비결합 대수이며, 곡선 대상인 Lie 군의 문제를 [선형사상](linear-maps.md)의 문제로 바꾼다. 군의 부분군은 부분대수에, 정규부분군은 아이디얼에, 준동형은 준동형에 대응한다. 게다가 이 대응은 단연결 Lie 군에 대해서는 범주 동치다. 곧 잃는 정보가 없다.

$$
\lbrace\text{단연결 Lie 군}\rbrace\ \simeq\ \lbrace\text{유한차원 실 Lie 대수}\rbrace
$$

무한히 많은 원소를 가진 연속군의 분류 문제가 유한차원 선형대수로 내려온다는 뜻이다. 실제로 복소수 위의 단순 Lie 대수는 완전히 분류되어 있고, 답은 네 개의 무한 계열 $A_n,B_n,C_n,D_n$ 과 다섯 개의 예외 $E_6,E_7,E_8,F_4,G_2$ 뿐이다. 이 목록은 [군의 표현](group-representations.md)에서 유한군의 지표표가 하는 역할을 연속군 쪽에서 맡는다.

# 직관

## 교환자는 순서 바꾸기의 오차다

$X$ 방향으로 시간 $t$ 만큼 흐르고, $Y$ 방향으로 $t$ 만큼, 다시 $X$ 로 $-t$ 만큼, $Y$ 로 $-t$ 만큼 흘러 보자. 가환이면 제자리로 돌아온다. 일반적으로는 그렇지 않고, 남는 오차의 최저차항이 정확히 교환자다.

$$
e^{tX}e^{tY}e^{-tX}e^{-tY}=e^{t^2[X,Y]+O(t^3)}
$$

$[X,Y]$ 는 "군이 얼마나 비가환인가" 를 무한소 수준에서 재는 양이다. 회전을 예로 들면 $x$ 축 회전과 $y$ 축 회전을 번갈아 하면 $z$ 축 회전이 남고, 이것이 $\mathfrak{so}(3)$ 의 괄호가 벡터곱인 이유다.

$$
[e_1,e_2]=e_3,\quad [e_2,e_3]=e_1,\quad [e_3,e_1]=e_2
$$

반대 방향도 성립한다. Baker–Campbell–Hausdorff 공식은 군 곱셈을 괄호만으로 복원한다.

$$
\log\left(e^Xe^Y\right)=X+Y+\tfrac12[X,Y]+\tfrac1{12}\big([X,[X,Y]]-[Y,[X,Y]]\big)+\cdots
$$

오른쪽에는 괄호밖에 없다. 국소적으로 군의 정보가 대수에 전부 들어 있다는 것이 이 공식의 내용이다.

## Jacobi 항등식은 결합법칙의 잔해가 아니다

괄호는 결합적이지 않다. $[[X,Y],Z]$ 와 $[X,[Y,Z]]$ 는 다르다. 대신 성립하는 것이

$$
[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0
$$

이고, 다시 쓰면 의미가 분명해진다. $\operatorname{ad}_X(Y)=[X,Y]$ 로 두면 Jacobi 항등식은

$$
\operatorname{ad}_X([Y,Z])=[\operatorname{ad}_XY,Z]+[Y,\operatorname{ad}_XZ]
$$

곧 **$\operatorname{ad}_X$ 가 곱셈에 대한 도함수(Leibniz 규칙)** 라는 말이다. 미분이 곱을 다루는 방식 그대로다. 대칭이 무한소로 작용하는 방식이 미분이라는 관점에서 보면 Jacobi 항등식은 공리라기보다 필연이다.

## $\mathfrak{sl}_2$ 의 사다리

$\mathfrak{sl}_2$ 는 대각합이 0 인 $2\times2$ 행렬들이고, 기저와 괄호가 다음과 같다.

$$
H=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix},\quad
E=\begin{pmatrix}0&1\cr 0&0\end{pmatrix},\quad
F=\begin{pmatrix}0&0\cr 1&0\end{pmatrix}
$$

$$
[H,E]=2E,\qquad [H,F]=-2F,\qquad [E,F]=H
$$

표현 $V$ 에서 $H$ 의 [고유벡터](eigenvalues.md) $v$ 를 잡고 고유값을 $\lambda$ 라 하면

$$
H(Ev)=EHv+[H,E]v=(\lambda+2)Ev
$$

이므로 $E$ 는 고유값을 $2$ 올리고 $F$ 는 $2$ 내린다. 유한차원이면 올리다가 멈춰야 하므로 최고무게 벡터가 있고, 거기서 $F$ 를 반복 적용해 얻는 사다리가 표현 전체다. 결론은 각 차원마다 기약표현이 정확히 하나씩이라는 것이다.

이 사다리 논법이 양자역학의 각운동량 올림·내림 연산자이고, 반단순 Lie 대수 표현론 전체의 축소판이다. 일반 경우는 $\mathfrak{sl}_2$ 부분대수 여러 개를 근계를 따라 붙여 놓은 것으로 본다.

# 정의

## Lie 대수

체 $k$ 위의 벡터공간 $\mathfrak g$ 와 쌍선형 사상 $[\cdot,\cdot]:\mathfrak g\times\mathfrak g\to\mathfrak g$ 가 다음을 만족하면 **Lie 대수**라 한다.

- 교대성: 모든 $X$ 에 대해 $[X,X]=0$ 이다. 따라서 $[X,Y]=-[Y,X]$ 다.
- Jacobi 항등식: $[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0$ 이다.

결합대수 $A$ 가 있으면 $[a,b]=ab-ba$ 로 Lie 대수가 된다. $\mathfrak{gl}_n=M_n(k)$ 가 이렇게 얻어지고, Ado 정리에 의해 모든 유한차원 Lie 대수는 어떤 $\mathfrak{gl}_n$ 의 부분대수다.

**부분대수**는 괄호에 닫힌 부분공간, **아이디얼** $\mathfrak a$ 는 $[\mathfrak g,\mathfrak a]\subset\mathfrak a$ 인 부분공간이다. 아이디얼로 몫 $\mathfrak g/\mathfrak a$ 를 만들 수 있고, 군의 정규부분군에 대응한다.

## 딸림표현과 Killing 형식

$\operatorname{ad}:\mathfrak g\to\mathfrak{gl}(\mathfrak g)$ 곧 $\operatorname{ad}_X(Y)=[X,Y]$ 를 **딸림표현**이라 한다. Jacobi 항등식이 이것이 Lie 대수 준동형임을 보장한다. 핵은 중심 $Z(\mathfrak g)$ 다.

딸림표현에서 대칭 쌍선형형식을 만든 것이 **Killing 형식**이다.

$$
\kappa(X,Y)=\operatorname{tr}\left(\operatorname{ad}_X\circ\operatorname{ad}_Y\right)
$$

구조상수만으로 계산되는 내재적 형식이고, 불변성 $\kappa([X,Y],Z)=\kappa(X,[Y,Z])$ 을 만족한다.

## 가해, 멱영, 반단순

유도열과 하향 중심열을 정의한다.

$$
\mathfrak g^{(0)}=\mathfrak g,\quad \mathfrak g^{(k+1)}=[\mathfrak g^{(k)},\mathfrak g^{(k)}]
$$

$$
\mathfrak g^{1}=\mathfrak g,\quad \mathfrak g^{k+1}=[\mathfrak g,\mathfrak g^{k}]
$$

어떤 $k$ 에서 $\mathfrak g^{(k)}=0$ 이면 **가해**, $\mathfrak g^{k}=0$ 이면 **멱영**이다. 멱영이면 가해다. 상삼각행렬이 가해의 표준 예이고, 대각성분이 0 인 엄격 상삼각행렬이 멱영의 예다.

가해 아이디얼 중 최대인 것을 **근기** $\operatorname{rad}\mathfrak g$ 라 한다. $\operatorname{rad}\mathfrak g=0$ 이면 **반단순**, 게다가 진아이디얼이 $0$ 뿐이고 가환이 아니면 **단순**이라 한다.

# 성질

## Cartan 판정법

Killing 형식 하나가 구조를 판정한다.

$$
\mathfrak g\ \text{가해}\iff \kappa(\mathfrak g,[\mathfrak g,\mathfrak g])=0
$$

$$
\mathfrak g\ \text{반단순}\iff \kappa\ \text{가 비퇴화}
$$

무한히 많은 부분대수를 뒤지는 대신 하나의 쌍선형형식의 행렬식을 보면 된다. 반단순이면 나아가 단순 아이디얼의 직합으로 유일하게 분해된다.

$$
\mathfrak g=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_r
$$

일반 Lie 대수는 Levi 분해 $\mathfrak g=\operatorname{rad}\mathfrak g\rtimes\mathfrak s$ 로 가해 부분과 반단순 부분으로 나뉜다. 가해 쪽은 분류가 사실상 불가능하지만 반단순 쪽은 완전히 알려져 있고, 그래서 대부분의 이론이 반단순에 집중된다.

## 근계와 Dynkin 도표

복소 반단순 $\mathfrak g$ 에서 극대 가환 부분대수 $\mathfrak h$ (Cartan 부분대수)를 잡으면 $\operatorname{ad}\mathfrak h$ 가 동시대각화되어 근공간 분해가 나온다.

$$
\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha,\qquad \mathfrak g_\alpha=\lbrace X:[H,X]=\alpha(H)X\ \forall H\in\mathfrak h\rbrace
$$

$\Phi\subset\mathfrak h^*$ 가 **근계**이고 각 $\dim\mathfrak g_\alpha=1$ 이다. 근계는 유한 반사군(Weyl 군)이 작용하는 조합적 대상이라 순전히 조합론으로 분류되고, 단순근 사이의 각도를 그래프로 그린 것이 **Dynkin 도표**다.

```mermaid
graph TD
  G["복소 단순 Lie 대수"] --> A["A_n = sl(n+1)"]
  G --> B["B_n = so(2n+1)"]
  G --> C["C_n = sp(2n)"]
  G --> D["D_n = so(2n)"]
  G --> E["예외형 5 개"]
  E --> E6["E_6"]
  E --> E7["E_7"]
  E --> E8["E_8"]
  E --> F4["F_4"]
  E --> G2["G_2"]
```

$E_8$ 은 248 차원이고 근이 240 개다. 그 240 개의 근이 이루는 [격자](lattices.md)가 8 차원 [구 채우기](sphere-packing.md)의 최적 격자이며, [theta 급수](theta-functions.md)에서 $\Theta_{E_8}=E_4$ 로 나타난 바로 그 대상이다. 대수적 분류의 예외가 기하의 최적해로 다시 나온다.

## 무한차원으로 나가기

유한차원 분류가 끝난 뒤 자연스러운 다음 질문은 무한차원이다. 두 방향이 중요하다.

- **affine Kac–Moody 대수.** 유한차원 $\mathfrak g$ 에 Laurent 다항식환을 텐서하고 중심 확대를 붙인 $\hat{\mathfrak g}=\mathfrak g\otimes\mathbb C[t,t^{-1}]\oplus\mathbb Cc$ 다. Dynkin 도표를 확장한 형태로 분류되며 표현의 지표가 [모듈러 형식](modular-forms.md)이 된다.
- **Virasoro 대수.** 원 위의 벡터장 대수의 중심 확대다.

$$
[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}m(m^2-1)\delta_{m+n,0}
$$

중심원소 $c$ 를 **중심전하**라 한다. 이 두 대수가 2 차원 등각장론의 대칭이고, 그 표현론을 대수 구조로 공리화한 것이 정점작용소대수다. [괴물 달빛](monstrous-moonshine.md)에서 $\mathbb M$ 이 작용하는 $V^\natural$ 이 중심전하 24 의 그런 대수이며, Borcherds 가 쓴 일반화된 Kac–Moody 대수도 이 계보에 있다.

# 활용

## 물리의 대칭

각운동량 대수가 $\mathfrak{su}(2)\cong\mathfrak{sl}_2$ 이고, 스핀 $j$ 표현이 $2j+1$ 차원 기약표현이다. 사다리 연산자가 그대로 $E,F$ 다. 게이지 이론에서는 $\mathfrak{su}(3)\times\mathfrak{su}(2)\times\mathfrak u(1)$ 이 표준모형의 대칭이고, 힘을 매개하는 입자의 개수가 대수의 차원이다. $\mathfrak{su}(3)$ 이 8 차원이라 글루온이 8 개다.

## 미분방정식의 대칭

Lie 가 애초에 이 이론을 만든 동기다. 대수방정식의 대칭을 [Galois 이론](galois-theory.md)이 유한군으로 다루듯, 미분방정식의 연속대칭을 Lie 군으로 다루려 했다. 방정식을 보존하는 무한소 변환들이 Lie 대수를 이루고, 그 구조에서 적분인자와 해의 축소가 나온다.

## 표현론과 정수론

- **조화해석.** $\mathrm{SO}(3)$ 의 기약표현 분해가 [구면조화함수](spherical-harmonics.md)이고, 각 표현의 차원 $2\ell+1$ 이 Lie 대수의 사다리에서 나온다.
- **Langlands 강령.** [Langlands 강령](langlands-program.md)의 쌍대군 ${}^L\negthinspace G$ 는 근계의 근과 쌍대근을 맞바꿔 얻는다. 근계라는 조합적 대상 없이는 진술 자체가 서술되지 않는다.
- **대수기하.** 반단순군의 깃발다양체, Schubert 셈법, 기하학적 표현론이 모두 근계 조합론 위에서 돌아간다.

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)
- [다양체](manifolds.md)
- [추상대수 개관](abstract-algebra-overview.md)

## 더 알아보기

- [Lie 군과 지수사상](lie-groups.md)
- [근계와 Weyl 군](root-systems.md)
- [정점작용소대수](vertex-operator-algebras.md)
- [Wess–Zumino–Witten 모형과 벌크–경계 대응](wess-zumino-witten.md)
- [범주 O 와 BGG 상반성](category-o.md)

#algebra #linear_algebra #group_theory
