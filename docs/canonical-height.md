# Néron–Tate 높이와 Mordell–Weil 정리

# 개요

**Néron–Tate 높이(Néron–Tate height)** 는 [타원곡선](elliptic-curves.md)의 유리점마다 붙이는 음이 아닌 [실수](real-numbers.md)로, 점을 $m$ 배 하면 정확히 $m^2$ 배가 되는 높이다. 유리점의 좌표를 기약분수로 적으면, 점을 두 배 할 때마다 분자와 분모의 자릿수가 대략 네 배로 늘어난다. Néron–Tate 높이는 이 근사 관계를 정확한 등식으로 고친 것이다. 이 등식으로 무한강하법이 작동해, 유리점 전체가 유한 개의 점에서 생성된다는 Mordell–Weil 정리가 증명된다.

# 직관

타원곡선의 유리점 전체 $E(\mathbb Q)$ 에서 약한 Mordell–Weil 정리(weak Mordell–Weil theorem), 곧 $E(\mathbb Q)/2E(\mathbb Q)$ 가 유한하다는 것은 하강(descent)으로 증명된다.

하강이 주는 것은 이 몫의 유한성뿐이다. 여기서 유한생성을 얻으려면 $Q=2Q_1+(\text{대표원})$ 으로 쓰고 $Q_1$ 에 같은 조작을 반복할 때 이 과정이 멈춤을 보여야 한다. 점마다 실수를 붙여 $Q_1$ 에 붙은 값이 $Q$ 에 붙은 값보다 확실히 작고, 값이 주어진 경계 이하인 점은 유한 개뿐이게 하면 된다.

$x=p/q$ 를 기약분수로 쓴 $\log\max(\vert p\vert,\vert q\vert)$ 가 두 조건에 가깝다. $y^2=x^3-2$ 의 점 $P=(3,5)$ 에서 이 값은 $\log3\approx1.10$ 이다. 접선의 기울기가 $27/10$ 이라 $2P$ 의 $x$ 좌표는 $(27/10)^2-6=129/100$ 이고 값은 $\log129\approx4.86$ 이다. 네 배인 $4.39$ 와 가깝지만 같지 않다.

$x$ 좌표를 두 배 하는 식이 $x$ 의 4 차 유리함수이므로 이 차이는 점에 무관한 상수로 유계다. 그래서 $2^nP$ 의 값을 $4^n$ 으로 나눈 수열은 연속한 두 항의 차가 $C/4^{n+1}$ 이하이고 수렴한다. $P=(3,5)$ 에서 이 수열은 $1.10,\ 1.22,\ 1.35,\ 1.35,\dots$ 이다. 극한에서는 두 배 하면 정확히 네 배가 된다.

# 정의

## 순진한 높이

$P=(x,y)\in E(\mathbb Q)$ 에서 $x=p/q$ 를 기약분수로 쓰고 다음으로 둔다.

$$
h(P)=\log\max(\vert p\vert,\vert q\vert)
$$

이것을 **순진한 높이(naive height)** 라 하고, 무한원점 $O$ 에서는 $h(O)=0$ 으로 둔다. 직관 절의 $P=(3,5)$ 에서 $h(P)=\log3$, $h(2P)=\log129$ 다.

## 정준 높이

$$
\hat h(P)=\lim_{n\to\infty}4^{-n}h(2^nP)\ \in\mathbb R_{\ge0}
$$

를 **Néron–Tate 높이** 또는 **정준 높이(canonical height)** 라 한다. $y^2=x^3-2$ 의 $P=(3,5)$ 에서 $\hat h(P)\approx1.35$ 이고, 비틀림점 $O$ 에서 $\hat h(O)=0$ 이다.

## 높이 쌍과 조절자

$$
\langle P,Q\rangle=\tfrac12\bigl(\hat h(P+Q)-\hat h(P)-\hat h(Q)\bigr)
$$

를 **높이 쌍(height pairing)** 이라 한다. 자유 부분의 생성원 $P_1,\dots,P_r$ 에 대해 다음 [행렬식](determinants.md)을

$$
\mathrm{Reg}\_E=\det\bigl(\langle P_i,P_j\rangle\bigr)\_{1\le i,j\le r}
$$

**조절자(regulator)** 라 한다. $y^2=x^3-2$ 는 $P=(3,5)$ 가 생성하는 순위 $1$ 곡선이라 $\mathrm{Reg}\_E=\langle P,P\rangle=\hat h(P)$ 다.

## 국소 분해

$$
\hat h(P)=\sum_{v}\lambda_v(P)
$$

로 각 자리의 기여로 쪼갤 수 있고 $\lambda_v$ 를 **Néron 국소 높이(Néron local height)** 라 한다. 아르키메데스 자리에서는 타원 로그와 Weierstrass $\sigma$ 함수로, 유한 자리에서는 환원의 성분군 위의 교차수로 주어진다. 각 $\lambda_v$ 가 빠르게 수렴하는 급수라 실제 계산은 이 분해로 한다.

# 성질

## Northcott 성질과 이차성

높이가 $B$ 이하인 유리점은 분자와 분모가 모두 $e^B$ 이하라 유한 개뿐이다. 이 유한성이 Northcott 성질(Northcott property)이다. 배가 공식이 $x$ 를 4 차 유리함수로 보내므로 $\vert h(2P)-4h(P)\vert\le C$ 인 상수 $C$ 가 있고, 그래서 정준 높이의 극한이 존재하며 $\hat h=h+O(1)$ 이다.

$\hat h(2P)=4\hat h(P)$ 와 $\hat h(mP)=m^2\hat h(P)$ 가 오차 없이 성립하고, 평행사변형 법칙 $\hat h(P+Q)+\hat h(P-Q)=2\hat h(P)+2\hat h(Q)$ 도 성립한다. 그러므로 높이 쌍은 쌍선형이고 $E(\mathbb Q)\otimes\mathbb R$ 위에서 양의 정부호다. 조절자는 [격자](lattices.md) $E(\mathbb Q)/\mathrm{tors}$ 의 공부피의 제곱이다.

## Mordell–Weil 정리의 증명

Mordell–Weil 정리(Mordell–Weil theorem)는 $E(\mathbb Q)$ 가 유한생성 아벨군이라는 진술이다.

$$
E(\mathbb Q)\ \cong\ \mathbb Z^r\ \oplus\ E(\mathbb Q)\_{\mathrm{tors}}
$$

증명의 요지. $E(\mathbb Q)/2E(\mathbb Q)$ 의 대표원 유한 개를 고르고 정준 높이가 경계 $B$ 이하인 점들을 모으면 Northcott 성질로 유한집합 $S$ 다. 임의의 $Q\in E(\mathbb Q)$ 를 $Q=2Q_1+(\text{대표원})$ 으로 쓰면 $\hat h(Q_1)$ 이 $\hat h(Q)$ 의 약 $1/4$ 이므로 반복할 때마다 높이가 네 배씩 줄어든다. 유한 번 만에 높이가 $B$ 이하로 내려가 멈추므로 $S$ 와 대표원들이 $E(\mathbb Q)$ 를 생성한다.

## 높이의 소멸과 비틀림

$$
\hat h(P)=0\iff P\ \text{는 비틀림점}
$$

증명의 요지. $P$ 가 위수 $m$ 이면 $m^2\hat h(P)=\hat h(mP)=\hat h(O)=0$ 이다. 역으로 $\hat h(P)=0$ 이면 모든 $nP$ 의 높이가 0 이라 유계이고, 높이 유계인 점은 유한 개뿐이므로 $\lbrace nP\rbrace$ 가 유한집합이며 $P$ 는 유한 위수다.

## Lang 의 하한 추측

Lang 은 비틀림이 아닌 점의 정준 높이에 최소판별식으로 주어지는 하한

$$
\hat h(P)\ \gg\ \log\vert\Delta_E\vert
$$

을 추측했다[^1]. $\gg$ 의 상수는 곡선에 의존하지 않아야 한다. 이 추측이 참이면 순위가 큰 곡선의 조절자가 아래로 유계가 되어 BSD 선행계수의 크기를 통제할 수 있다. Hindry 와 Silverman 은 Szpiro 비(Szpiro ratio)가 유계인 곡선족에서 이 하한을 증명했다[^2].

## 계산 비용

$4^{-n}h(2^nP)$ 의 정확도는 $4^{-n}$ 으로 좋아지지만 $2^nP$ 의 $x$ 좌표 자릿수가 $4^n$ 으로 늘어나므로 극한을 직접 쓰면 비용이 정확도보다 빨리 자란다. 표준 알고리즘은 국소 분해를 쓰고 각 $\lambda_v$ 를 몇십 자리까지 얻는 데 상수 시간이 든다. Silverman 과 Cremona 의 구현이 이 방식이며 순위가 큰 곡선의 조절자도 실용적으로 계산된다.

# 활용

## BSD 의 선행계수

[BSD 추측](birch-swinnerton-dyer.md)(Birch–Swinnerton-Dyer)의 강한 형태는 조절자를 선행계수에 넣는다.

$$
\frac{L^{(r)}(E,1)}{r!}=\frac{\Omega_E\cdot\mathrm{Reg}\_E\cdot\char35{}\text{Ш}\cdot\prod_p c_p}{\bigl(\char35{}E(\mathbb Q)\_{\mathrm{tors}}\bigr)^2}
$$

좌변을 수치로 계산하고 $\mathrm{Reg}\_E$ 를 포함한 우변의 다른 인자를 구하면 $\char35{}\text{Ш}$ 의 예측값이 나온다. 이 값이 완전제곱수 근처의 정수로 떨어지는지가 공식의 정합성 검사이며, 조절자를 충분한 정확도로 계산할 수 있어야 한다.

## Gross–Zagier 공식

$$
L'(E,1)=c\cdot\hat h(P_K)
$$

꼴로 $L$ 함수의 미분이 Heegner 점의 정준 높이와 같다. 좌변은 $L$ 함수의 미분이고, 우변은 [Heegner 점](heegner-points.md)의 정준 높이다. 증명은 양변을 국소 항으로 쪼개 자리마다 맞추며, 우변의 국소 항이 Néron 국소 높이 $\lambda_v$ 다.

## 정수점의 결정

Baker 의 방법이 타원곡선 위 정수점의 크기에 유효한 상한을 주고, 정준 높이의 하한과 결합하면 정수점을 전부 찾았다고 증명할 수 있다. 격자 축소로 후보를 걸러내는 이 절차가 Diophantine 방정식 풀이의 표준 도구다.

[^1]: 구성과 증명은 J. Silverman, *The Arithmetic of Elliptic Curves* (2판, 2009) 8장. 국소 분해와 계산 알고리즘은 같은 저자의 *Advanced Topics in the Arithmetic of Elliptic Curves* (1994) 6장, 그리고 J. Cremona, *Algorithms for Modular Elliptic Curves* (2판, 1997) 3장. Lang 의 하한 추측은 S. Lang, *Elliptic Curves: Diophantine Analysis* (1978). Gross–Zagier 는 B. Gross, D. Zagier, *Heegner points and derivatives of L-series*, Invent. Math. **84** (1986).
[^2]: M. Hindry, J. Silverman, *The canonical height and integral points on elliptic curves*, Invent. Math. **93** (1988), 419–450. 하한의 상수가 Szpiro 비에 의존하는 꼴로 나온다.

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)

## 더 알아보기

- [Faltings 정리](faltings-theorem.md)
- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)
- [p 진 높이](p-adic-height.md)
- [Arakelov 기하](arakelov-geometry.md)

#number_theory #computation #theorem
