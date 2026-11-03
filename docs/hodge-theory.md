# Hodge 이론

# 개요

**Hodge 이론(Hodge theory)** 은 콤팩트 Riemann 다양체의 코호몰로지류마다 조화형식 하나를 골라 코호몰로지를 해석으로 다루는 이론이다. 도넛 표면에서 한 바퀴 도는 고리를 따라 적분하면 $1$ 이 나오는 닫힌 미분형식은 무한히 많고, 그 가운데 어느 것을 대표로 골라야 할지 위상만으로는 정해지지 않는다. Hodge 이론은 [Riemann 계량](riemannian-metrics.md)으로 형식의 길이를 재어 가장 짧은 형식, 곧 조화형식을 대표로 고른다.

# 직관

[de Rham 코호몰로지](de-rham-cohomology.md)의 원소는 닫힘형식의 동치류다. 한 류 안에는 $\omega+d\eta$ 꼴의 형식이 무한히 많고, 코호몰로지가 위상적 대상인 이상 그중 어느 것도 특별하지 않다.

평평한 원환면 $T=\mathbb R^2/\mathbb Z^2$ 에서 $x$ 방향 고리를 따라 적분하면 $1$, $y$ 방향 고리를 따라 적분하면 $0$ 인 류를 본다. 주기함수 $f$ 마다 $dx+df$ 가 이 류에 든다. 형식의 길이를 $\Vert\alpha\Vert^2=\int_T\vert\alpha\vert^2\thinspace dx\thinspace dy$ 로 재면 $\int_T f_x\thinspace dx\thinspace dy=0$ 이므로 $\Vert dx+df\Vert^2=1+\Vert df\Vert^2$ 이다. 가장 짧은 것은 $f$ 가 상수일 때의 $dx$ 하나다.

콤팩트 [다양체](manifolds.md) 위의 $k$ 형식들에 이런 $L^2$ 내적이 있으면 같은 물음을 일반적으로 던질 수 있다. 류 $\lbrack\omega\rbrack$ 안에서 노름 $\Vert\omega+d\eta\Vert$ 를 최소화하는 것은 아핀 부분공간 $\omega+d\Omega^{k-1}$ 에 원점에서 수선의 발을 내리는 것이다. 최소점에서는 모든 $\eta$ 에 대해 $\langle\omega,d\eta\rangle=0$ 이고, $d$ 의 딸림작용소를 $\delta$ 라 하면 이 조건이 $\delta\omega=0$ 이다. 원환면에서 $\delta(dx)=0$ 이고 $d(dx)=0$ 이며, 이 두 조건을 만족하는 형식을 조화형식이라 부른다.

# 정의

아래에서 $M$ 은 방향지어진 $n$ 차원 Riemann 다양체이고, 정리를 말할 때는 콤팩트이고 경계가 없다고 가정한다.

## 형식의 내적과 부피형식

계량이 각 접공간에 주는 내적은 $\Lambda^k T^\ast\_pM$ 의 내적으로 유일하게 확장된다. 여접공간의 정규직교기저 $e^1,\dots,e^n$ 에 대해 $\lbrace e^{i_1}\wedge\cdots\wedge e^{i_k}\rbrace\_{i_1\lt\cdots\lt i_k}$ 가 정규직교기저가 되도록 잡는다. 방향과 계량이 함께 부피형식(volume form) $\mathrm{vol}=e^1\wedge\cdots\wedge e^n$ 을 결정한다. 평평한 원환면에서는 $dx,dy$ 가 정규직교이고 $\mathrm{vol}=dx\wedge dy$ 다.

## Hodge 별작용소

**Hodge 별작용소(Hodge star operator)** $\star\colon\Omega^k\to\Omega^{n-k}$ 는 모든 $k$ 형식 $\alpha,\beta$ 에 대해

$$
\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\thinspace\mathrm{vol}
$$

을 만족하는 작용소이고, 이 조건이 $\star\beta$ 를 유일하게 결정한다. 정규직교기저에서는 첨자의 여집합을 취하고 부호를 붙이는 연산이다. $\mathbb R^3$ 의 표준 계량에서

$$
\star\thinspace dx=dy\wedge dz,\qquad \star(dx\wedge dy)=dz,\qquad\star1=dx\wedge dy\wedge dz
$$

이다. 이 대응으로 $\mathbb R^3$ 의 1형식과 2형식이 모두 벡터장으로 적히고, 회전과 발산이 각각 1형식과 2형식 위의 $d$ 가 된다. 평평한 원환면에서는 $\star dx=dy$, $\star dy=-dx$ 다. Riemann 계량에서 $\star\star=(-1)^{k(n-k)}$ 다.

## L² 내적과 딸림미분

$$
\langle\negthinspace\langle\alpha,\beta\rangle\negthinspace\rangle=\int_M\alpha\wedge\star\beta=\int_M\langle\alpha,\beta\rangle\thinspace\mathrm{vol}
$$

이 내적에 대한 $d\colon\Omega^{k-1}\to\Omega^k$ 의 형식적 딸림작용소가 **여미분(codifferential)** $\delta\colon\Omega^k\to\Omega^{k-1}$ 이다. Riemann 계량에서는

$$
\delta=(-1)^{n(k+1)+1}\star d\thinspace\star
$$

이고, 콤팩트이고 경계가 없으면 [Stokes 정리](differential-forms.md)에서 $\langle\negthinspace\langle d\alpha,\beta\rangle\negthinspace\rangle=\langle\negthinspace\langle\alpha,\delta\beta\rangle\negthinspace\rangle$ 가 나온다. $d\circ d=0$ 의 딸림이 $\delta\circ\delta=0$ 이다. 평면에서 $n=2$, $k=1$ 이면 $\delta=-\star d\star$ 이고, $\delta(f\thinspace dx)=-\star d(f\thinspace dy)=-f\_x$ 다. 1형식 위의 $\delta$ 는 발산에 음수를 붙인 것이다.

## Laplace–de Rham 작용소와 조화형식

$$
\Delta=d\delta+\delta d:\Omega^k\to\Omega^k
$$

$\Delta$ 를 **Laplace–de Rham 작용소(Laplace–de Rham operator)** 라 하고, $\Delta\omega=0$ 인 형식이 **조화형식(harmonic form)** 이다. 조화 $k$ 형식의 공간을 $\mathcal H^k$ 로 쓴다. $k=0$ 이면 $\delta=0$ 이므로 $\Delta f=\delta df$ 이고, 부호 규약을 빼면 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)다. 국소좌표로는

$$
\Delta f=-\frac1{\sqrt{\vert g\vert}}\partial_i\big(\sqrt{\vert g\vert}\thinspace g^{ij}\partial_j f\big)
$$

이고 계량이 유클리드면 $-\sum\partial_i^2$ 다. 평평한 원환면에서는 $\Delta(f\thinspace dx+g\thinspace dy)=(-\Delta\_0f)\thinspace dx+(-\Delta\_0g)\thinspace dy$ 이고 $\Delta\_0=\partial\_x^2+\partial\_y^2$ 다. 조화형식은 $1$, $dx$, $dy$, $dx\wedge dy$ 의 상수배 합이다.

# 성질

## 조화형식의 특징

콤팩트이고 경계가 없으면

$$
\Delta\omega=0\iff d\omega=0\quad\text{그리고}\quad\delta\omega=0
$$

이다. 한 방향은 자명하고, 반대는 부분적분으로 나온다.

$$
\langle\negthinspace\langle\Delta\omega,\omega\rangle\negthinspace\rangle=\langle\negthinspace\langle d\omega,d\omega\rangle\negthinspace\rangle+\langle\negthinspace\langle\delta\omega,\delta\omega\rangle\negthinspace\rangle=\Vert d\omega\Vert^2+\Vert\delta\omega\Vert^2
$$

좌변이 0 이면 두 항이 각각 0 이다. 같은 식에서 $\Delta$ 가 양의 준정부호임도 나온다. 콤팩트성이 없으면 성립하지 않는다. $\mathbb R^n$ 위에는 상수가 아닌 [조화함수](harmonic-functions.md)가 얼마든지 있다.

## Hodge 분해

$$
\Omega^k(M)=\mathcal H^k\oplus d\thinspace\Omega^{k-1}\oplus\delta\thinspace\Omega^{k+1}
$$

세 조각은 $L^2$ 내적에 대해 서로 직교한다. 직교성은 $\langle\negthinspace\langle d\alpha,\delta\beta\rangle\negthinspace\rangle=\langle\negthinspace\langle dd\alpha,\beta\rangle\negthinspace\rangle=0$ 으로 바로 나오고, 셋이 전체를 덮는다는 부분에 $\Delta$ 의 타원성과 Fredholm 이론(Fredholm theory)을 쓴다. 이 분해를 Hodge 분해(Hodge decomposition)라 한다.

$\mathbb R^3$ 의 벡터장으로 번역하면 임의의 벡터장이 조화 성분, 기울기 성분, 회전 성분의 합이라는 Helmholtz 분해(Helmholtz decomposition)다.

## Hodge 정리

닫힘형식은 $\delta\Omega^{k+1}$ 성분을 갖지 않으므로 $Z^k=\mathcal H^k\oplus d\Omega^{k-1}$ 이고, 몫을 취하면

$$
H^k_{\mathrm{dR}}(M)\cong\mathcal H^k
$$

이다. 각 코호몰로지류에 조화 대표원이 정확히 하나 있으므로 $b_k=\dim\mathcal H^k$ 가 유한하고 계량을 바꿔도 변하지 않는다. $\Delta$ 는 계량에 의존하지만 그 핵의 차원은 위상이 결정한다. 이것이 Hodge 정리(Hodge theorem)다. 평평한 원환면에서 $\mathcal H^1$ 은 $dx,dy$ 가 펼치므로 $b_1=2$ 다.

## Poincaré 쌍대성

$\star\Delta=\Delta\star$ 이므로 $\star:\mathcal H^k\to\mathcal H^{n-k}$ 가 동형이고

$$
b_k=b_{n-k}
$$

다. 이 동형이 조화형식으로 본 [Poincaré 쌍대성](poincare-duality.md)이다. $\star^2=\pm\mathrm{id}$ 이므로 전단사이고 역은 부호를 붙인 $\star$ 다. 방향지어진 콤팩트 다양체라는 가정이 $\mathrm{vol}$ 과 경계항 소거에 쓰이며, 방향이 없으면 실계수에서도 성립하지 않는다.

$4k$ 차원에서는 $\star$ 가 $\mathcal H^{2k}$ 를 자기 자신으로 보내고 $\star^2=\mathrm{id}$ 이므로 고유공간 $\mathcal H^\pm$ 로 쪼개진다. 그 차원의 차 $b^+-b^-$ 가 부호수이고, 4 차원 다양체 이론과 [Yang–Mills 이론](yang-mills-theory.md)의 자기쌍대 방정식이 이 분해 위에서 전개된다.

## Bochner 소멸 정리

Weitzenböck 공식(Weitzenböck formula)은 $\Delta$ 를 접속 Laplace 작용소(connection Laplacian) $\nabla^\ast\nabla$ 와 곡률항의 합으로 쓴다. 1-형식에서는

$$
\Delta=\nabla^\ast\nabla+\mathrm{Ric}
$$

이므로 Ricci 곡률이 양의 준정부호면 조화 1-형식 $\omega$ 에 대해 $0=\Vert\nabla\omega\Vert^2+\langle\negthinspace\langle\mathrm{Ric}\thinspace\omega,\omega\rangle\negthinspace\rangle$ 이고 두 항이 모두 0 이어야 한다. $\mathrm{Ric}\gt 0$ 이면 $\omega=0$ 이므로

$$
\mathrm{Ric}\gt 0\quad\Longrightarrow\quad b_1(M)=0
$$

이다. 이것이 Bochner 소멸 정리(Bochner vanishing theorem)다. 원환면은 $b_1=2$ 이므로 $\mathrm{Ric}\gt 0$ 인 계량을 갖지 않는다.

# 활용

## 스펙트럼 기하

$\Delta$ 의 고윳값 전체가 다양체의 스펙트럼이다. 고윳값 0 의 중복도가 $b_k$ 이고 0 이 아닌 고윳값은 계량에 의존한다.

함수에 대한 첫 비영 고윳값 $\lambda_1$ 은 다양체가 얼마나 잘록한지를 잰다. 잘록한 목이 있으면 $\lambda_1$ 이 작다. 이를 정량화한 [Cheeger 부등식](cheeger-inequality.md)은 [그래프 Laplacian](graph-laplacian.md)의 스펙트럼 군집화에서 같은 변분 문제로 다시 나온다.

Kac 의 물음 "북의 모양을 들을 수 있는가(Can one hear the shape of a drum?)" 의 답은 아니오다. 스펙트럼이 같으면서 등거리가 아닌 [등스펙트럼 다양체](isospectral-manifolds.md) 쌍이 존재한다. 함수의 스펙트럼에서 차원, 부피, 스칼라 곡률의 적분이 복원되고, 곡면에서는 [Euler 지표](euler-characteristic.md)도 복원된다.

## 조화 1-형식과 사상

$b_1(M)=r$ 이면 조화 1-형식이 $r$ 차원만큼 있다. 각각을 적분하면 $M$ 에서 원환면 $\mathbb R^r/\Lambda$ 로 가는 Albanese 사상(Albanese map)이 나온다.

복소 다양체에서는 $\Delta$ 가 $\partial$ 과 $\bar\partial$ 에 대해 같은 값을 주는 Kähler 항등식(Kähler identities)으로 조화형식 공간이 $(p,q)$ 형으로 쪼개지고 $H^k=\bigoplus_{p+q=k}H^{p,q}$ 와 $h^{p,q}=h^{q,p}$ 가 나온다. [Kähler 다양체](kahler-manifolds.md)에서 홀수 Betti 수가 짝수라는 결론이 따라오고, 어떤 다양체가 복소구조를 가질 수 없는지를 이것으로 판정한다.

## 물리의 장방정식

진공의 Maxwell 방정식(Maxwell's equations)은 전자기장 2-형식 $F$ 에 대해 $dF=0$ 과 $\delta F=0$ 이고, $F$ 가 조화형식이라는 진술이다. $\star$ 가 전기장과 자기장을 맞바꾸는 쌍대성이 된다.

Hodge 분해로 게이지 고정(gauge fixing)을 설명한다. 퍼텐셜 $A$ 의 $d\Omega^0$ 성분이 게이지 변환으로 바꿀 수 있는 부분이고, Lorenz 게이지(Lorenz gauge) $\delta A=0$ 이 그 성분을 제거해 물리적 자유도만 남긴다. 남는 조화 성분이 위상적 자유도이며 Aharonov–Bohm 효과(Aharonov–Bohm effect)에 해당한다.

## 계산기하와 데이터

이산 미분형식으로 곡면 메시 위의 벡터장을 조화, 기울기, 회전 성분으로 분해하는 것이 기하 처리의 표준 도구이고 매개화, 벡터장 설계, 유체 시뮬레이션에 쓰인다.

순위 집계에도 같은 구조가 나타난다. 비교 결과를 그래프 위의 1-형식으로 보면 기울기 성분이 일관된 점수로 설명되는 부분이고 나머지가 비일관성이다. 조화 성분은 전역적 순환에 해당해 어떤 점수로도 설명되지 않으며, 그 크기가 데이터의 비일관성을 정량화한다.

# 연관 문서

## 선수지식

- [de Rham 코호몰로지](de-rham-cohomology.md)
- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

- [Kähler 다양체](kahler-manifolds.md)
- [지표 정리](index-theorem.md)

#differential_geometry #algebraic_topology #analysis
