# Bloch 군

# 개요

**Bloch 군(Bloch group)** 은 체의 원소를 생성원으로 하는 자유 아벨군을 이중로그의 함수방정식으로 나눈 군이다. 쌍곡 3 다양체의 부피와 [대수적 K 이론](algebraic-k-theory.md)의 $K_3$ 이 이 군을 거쳐 같은 양이 된다.

# 직관

쌍곡 3 다양체의 부피는 다양체를 이상 사면체로 잘라서 센다. 8자 매듭의 여집합은 정이상사면체 두 개로 분할되고, 사면체 하나의 부피가 $3\Lambda(\pi/3)=1.0149416\ldots$ 이므로 전체 부피는 $2.0298832\ldots$ 다. 여기서 $\Lambda$ 는 [Lobachevsky 함수](lobachevsky-function.md)다. 같은 여집합을 사면체 세 개로 자르는 분할도 있고, 그때 사면체의 모양을 정하는 복소수는 정이상사면체의 $e^{i\pi/3}$ 와 전혀 다른 값 셋이 된다. 두 분할에서 부피의 합은 같다.

그러므로 모양값의 목록 $(z_1,\dots,z_n)$ 은 다양체의 불변량이 아니다. 목록을 바꾸면서 $\sum_i D(z_i)$ 를 보존하는 변형이 있고, 그 변형들을 모두 상쇄한 뒤 남는 것이 불변량이다. 여기서 $D$ 는 사면체 하나의 부피를 모양값으로 적은 Bloch–Wigner 이중로그다.

변형의 목록은 $D$ 가 만족하는 등식에서 나온다. $D$ 는 다섯 항 등식

$$
D(x)-D(y)+D\Big(\frac yx\Big)-D\Big(\frac{1-x^{-1}}{1-y^{-1}}\Big)+D\Big(\frac{1-x}{1-y}\Big)=0
$$

을 만족한다. 모양값의 목록을 형식적 합 $\sum_i\lbrack z_i\rbrack$ 으로 보고 이 등식으로 나눈 군을 만들면, 분할을 바꾸어도 그 군의 원소는 변하지 않는다. 그 군이 Bloch 군이고 $D$ 는 그 군 위의 준동형이 된다.

# 정의

## Bloch–Wigner 이중로그

$$
D(z)=\mathrm{Im}\thinspace\mathrm{Li}\_2(z)+\arg(1-z)\log\vert z\vert,
\qquad \mathrm{Li}\_2(z)=\sum_{n\ge1}\frac{z^n}{n^2}
$$

$\mathrm{Li}\_2$ 는 $z=1$ 에서 분기하므로 $\vert z\vert\lt 1$ 밖에서 한 값으로 정해지지 않는다. $D$ 는 분기의 차이가 $\arg(1-z)\log\vert z\vert$ 항에서 상쇄되어 $\mathbb C\setminus\lbrace 0,1\rbrace$ 에서 실해석적이고, $0$ 과 $1$ 에서 값 $0$ 으로 연속 확장된다. 이상 사면체의 모양값이 $z$ 이면 그 부피가 $D(z)$ 다.

## 전 Bloch 군

$F$ 를 체, $F^\flat=F\setminus\lbrace 0,1\rbrace$ 이라 한다. $\mathbb Z\lbrack F^\flat\rbrack$ 는 $x\in F^\flat$ 마다 생성원 $\lbrack x\rbrack$ 를 하나 둔 자유 아벨군이다. **전 Bloch 군** $\mathcal P(F)$ 는 $\mathbb Z\lbrack F^\flat\rbrack$ 를 **다섯 항 관계**

$$
\lbrack x\rbrack-\lbrack y\rbrack+\Big\lbrack\frac yx\Big\rbrack-\Big\lbrack\frac{1-x^{-1}}{1-y^{-1}}\Big\rbrack+\Big\lbrack\frac{1-x}{1-y}\Big\rbrack=0
\qquad (x\ne y)
$$

이 생성하는 부분군으로 나눈 몫군이다.

다섯 항은 사영직선 위의 다섯 점이 만드는 복비의 다섯 가지 조합이다. 네 점의 복비가 $x$ 이고 한 점을 더하면 네 점을 고르는 방법이 다섯이고, 각 선택의 복비가 위 다섯 인자다.

## Bloch 군

$\wedge^2F^\times$ 를 곱셈군 $F^\times$ 의 두 번째 외부거듭제곱이라 한다. 사상

$$
\lambda:\mathcal P(F)\to\wedge^2F^\times,\qquad \lbrack x\rbrack\mapsto x\wedge(1-x)
$$

는 다섯 항 관계를 $0$ 으로 보내므로 잘 정의된다. **Bloch 군** $B(F)$ 는 $\lambda$ 의 핵이다.

# 성질

## 다섯 항 관계와 이중로그

> **정리 (Abel).** $x\ne y$ 인 $x,y\in\mathbb C^\flat$ 에 대해 위 다섯 항 관계에서 $\lbrack\cdot\rbrack$ 를 $D(\cdot)$ 로 바꾼 등식이 성립한다.

증명의 요지는 $y$ 를 고정하고 양변을 $x$ 에 대해 미분하는 것이다. $\mathrm{Li}\_2$ 의 미분이 $-\log(1-z)/z$ 이므로 다섯 항의 미분은 로그의 값들로 적히고, 로그의 덧셈 법칙으로 합이 $0$ 이 된다. 한 점에서 등식을 확인하면 전 영역에서 성립한다.

그래서 $D$ 는 준동형 $\mathcal P(\mathbb C)\to\mathbb R$ 로 내려가고, 제한하면 $B(\mathbb C)\to\mathbb R$ 를 얻는다.

## Suslin 정리

> **정리 (Suslin).** $F$ 가 대수적으로 닫힌 체이면 완전열
> $$0\to\mathbb Q/\mathbb Z\to K_3^{\mathrm{ind}}(F)\to B(F)\to 0$$
> 이 있다.[^1]

$K_3^{\mathrm{ind}}(F)=K_3(F)/K_3^{M}(F)$ 는 $K_3$ 에서 [Milnor K 이론](milnor-k-theory.md)의 상을 뺀 몫이다. 완전열의 꼬임 부분이 $\mathbb Q/\mathbb Z$ 뿐이므로, $B(F)$ 는 $K_3^{\mathrm{ind}}(F)$ 를 꼬임을 빼고 본 군이다. 대수적 K 이론의 정의는 분류공간의 호모토피군이고 Bloch 군의 정의는 생성원과 관계이므로, 이 정리가 $K_3$ 을 체의 원소로 적는 표현을 준다.

## Borel 조절자

수체 $k$ 와 $n\ge2$ 에 대해 Borel 은 준동형

$$
r_n:K_{2n-1}(k)\to\mathbb R^{d_n}
$$

을 만들었다. 이것이 **Borel 조절자**이고, $d_n$ 은 $n$ 이 짝수일 때 복소 자리의 수, 홀수일 때 실 자리와 복소 자리의 수를 더한 값이다.

> **정리 (Borel).** $r_n$ 의 핵은 꼬임이고 상은 격자이며, 그 격자의 공변량이 $\zeta_k(1-n)$ 과 $0$ 이 아닌 유리수 배수 차이로 같다.[^2]

$n=2$ 에서 $r_2$ 의 정의역은 $K_3(k)$ 이고 치역은 복소 자리의 수만큼의 실수다. Suslin 정리로 $K_3^{\mathrm{ind}}(\mathbb C)$ 를 $B(\mathbb C)$ 로 바꾸면 $r_2$ 의 각 성분이 $D$ 의 유리수 배가 된다. 그래서 $n=2$ 인 Borel 정리는 $\zeta_k(-1)$ 을 $B(k)$ 의 원소에서 계산한 $D$ 값으로 표현한다.

## 쌍곡 부피

> **정리 (Neumann–Yang).** 유한 부피 완비 쌍곡 3 다양체 $M$ 은 Bloch 군의 원소 $\beta(M)\in B(k_M)$ 를 정하고, $D(\beta(M))=\mathrm{Vol}(M)$ 이다. 여기서 $k_M$ 은 $M$ 의 불변 대각합체다.[^3]

증명의 요지는 세 단계다. 이상 사면체 분할의 모양값 $z_i$ 로 $\sum_i\lbrack z_i\rbrack\in\mathcal P(k_M)$ 를 만든다. 모서리 조건과 cusp 조건이 $\lambda\big(\sum_i\lbrack z_i\rbrack\big)=0$ 을 주므로 이 원소가 $B(k_M)$ 에 들어간다. 두 분할 사이를 잇는 Pachner 이동 하나하나가 다섯 항 관계이므로 원소는 분할에 의존하지 않는다.

부피가 조절자 값이라는 데서 두 양의 성격 차이가 설명된다. $\beta(M)$ 은 수체 $k_M$ 의 원소들로 적히고, $D$ 는 초월함수이므로 그 값이 초월수일 수 있다.

# 활용

- **쌍곡 3 다양체의 부피.** [쌍곡 3 다양체](hyperbolic-3-manifolds.md)의 부피 공식에 나오는 모양값의 목록을 분할에 무관한 불변량으로 바꾼다. 부피가 초월수인데 불변 대각합체가 수체라는 대비를 조절자로 설명한다.
- **Dedekind 제타의 특수값.** $n=2$ 인 Borel 정리가 수체 $k$ 의 $\zeta_k(-1)$ 을 $B(k)$ 의 생성원들의 $D$ 값으로 적는다. 고차 조절자로 $\zeta_k(1-n)$ 을 $n$ 차 다중로그로 적으려는 것이 Zagier 추측이다.
- **$K_3$ 의 계산.** 대수적 K 이론의 $K_3^{\mathrm{ind}}$ 를 생성원과 관계로 제시한다. 대수적으로 닫히지 않은 체에서는 Suslin 정리의 자리에 $B(F)$ 와 $K_3^{\mathrm{ind}}(F)$ 사이의 사상만 남고, 그 사상의 핵과 여핵이 체의 산술을 담는다.
- **볼륨 추측의 진술.** [볼륨 추측](volume-conjecture.md)이 비교하는 두 양 가운데 쌍곡 부피 쪽을 $\beta(M)$ 의 조절자로 바꾸어, Chern–Simons 불변량을 함께 담는 복소 판본으로 적는다.

[^1]: A. A. Suslin, "$K_3$ of a field, and the Bloch group", Proceedings of the Steklov Institute of Mathematics 183 (1991), 217–239.

[^2]: A. Borel, "Cohomologie de $\mathrm{SL}\_n$ et valeurs de fonctions zêta aux points entiers", Annali della Scuola Normale Superiore di Pisa 4 (1977), 613–636.

[^3]: W. D. Neumann, J. Yang, "Bloch invariants of hyperbolic 3-manifolds", Duke Mathematical Journal 96 (1999), 29–59.

# 연관 문서

## 선수지식

- [대수적 K 이론](algebraic-k-theory.md)
- [쌍곡 3 다양체](hyperbolic-3-manifolds.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #number_theory #differential_geometry
