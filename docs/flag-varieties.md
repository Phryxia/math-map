# 깃발다양체

# 개요

**깃발다양체(flag variety)** 는 차원이 하나씩 커지는 부분공간들의 사슬을 모두 모은 공간이다. 3 차원 공간에서 원점을 지나는 직선 하나와 그 직선을 포함하는 평면 하나의 쌍이 이런 사슬이고, 사영평면으로 옮기면 점 하나와 그 점을 지나는 직선 하나의 쌍이다. 깃발다양체는 이런 쌍 전체를 점과 직선의 좌표가 만족하는 방정식 $x_0y_0+x_1y_1+x_2y_2=0$ 으로 적어 사영다양체로 다루고, 가역행렬의 군이 깃발 위에 작용하는 방식으로 군의 표현을 연구한다.

# 직관

$n$ 차원 벡터공간에서 차원이 $1,2,\dots,n-1$ 인 부분공간을 하나씩 골라 앞의 것이 뒤의 것에 포함되게 늘어놓은 사슬을 깃발(flag)이라 한다.

$K^3$ 에서 깃발은 직선 $V\_1$ 과 그것을 포함하는 평면 $V\_2$ 의 쌍이다. 사영평면 $\mathbb P^2$ 로 옮기면 점 $p$ 와 그 점을 지나는 직선 $\ell$ 의 쌍이다. 점의 좌표를 $(x\_0:x\_1:x\_2)$, 직선 $y\_0X\_0+y\_1X\_1+y\_2X\_2=0$ 의 계수를 $(y\_0:y\_1:y\_2)$ 로 쓰면 깃발 전체는 $\mathbb P^2\times\mathbb P^2$ 안의 방정식 하나

$$
x\_0y\_0+x\_1y\_1+x\_2y\_2=0
$$

의 영점이다. 점을 고르는 데 $2$ 차원, 그 점을 지나는 직선을 고르는 데 $1$ 차원이므로 이 다양체는 $3$ 차원이다.

유한체 $\mathbb F\_q$ 위에서 깃발을 센다. 점이 $q^2+q+1$ 개이고 점마다 그 점을 지나는 직선이 $q+1$ 개이므로 깃발은 $(1+q+q^2)(1+q)$ 개다. 전개하면 $1+2q+2q^2+q^3$ 이고, 각 항이 깃발다양체를 아핀 공간 조각으로 나눈 것에 대응한다. 조각이 $1+2+2+1=6=3!$ 개다.

# 정의

## 완전 깃발과 부분 깃발

체 $K$ 위에서 $K^n$ 의 부분공간 사슬 $V\_1\subset\cdots\subset V\_{n-1}$, $\dim V\_i=i$ 를 **완전 깃발(complete flag)** 이라 하고, 그 전체를 $\mathrm{Fl}(n)$ 이라 쓴다. $0\lt d\_1\lt\cdots\lt d\_k\lt n$ 을 고르고 $\dim V\_{d\_j}=d\_j$ 인 사슬만 보면 **부분 깃발다양체(partial flag variety)** $\mathrm{Fl}(d\_1,\dots,d\_k;n)$ 이 된다.

$n=2$ 이면 완전 깃발은 $K^2$ 의 직선 하나이므로 $\mathrm{Fl}(2)$ 는 사영직선 $\mathbb P^1$ 이다. $n=3$ 이면 직관 절의 점과 그 점을 지나는 직선의 쌍이다. 부분 깃발에서 $k=1$ 이면 $d\_1$ 차원 부분공간 하나만 고르므로 $\mathrm{Fl}(d\_1;n)$ 은 [Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(d\_1,n)$ 이고, $\mathrm{Fl}(1;n)=\mathbb P^{n-1}$ 이다.

## 일반 깃발다양체

연결 반단순 [대수군](algebraic-groups.md) $G$ 의 Borel 부분군 $B$ 에 대해 $G/B$ 를 $G$ 의 **깃발다양체** 라 하고, $B$ 를 포함하는 부분군 $P$ 에 대해 $G/P$ 를 부분 깃발다양체라 한다.

$G=\mathrm{SL}\_2$ 이고 $B$ 가 상삼각행렬이면 $G/B$ 는 $B$ 가 고정하는 직선 $\langle e\_1\rangle$ 의 궤도, 곧 $K^2$ 의 직선 전체 $\mathbb P^1=\mathrm{Fl}(2)$ 다.

# 성질

## 사영다양체로서의 깃발다양체

사슬의 각 성분을 Grassmann 다양체의 점으로 보내면

$$
\mathrm{Fl}(n)\hookrightarrow\prod\_{i=1}^{n-1}\mathrm{Gr}(i,n)
$$

이고, 상은 포함 관계 $V\_i\subset V\_{i+1}$ 을 나타내는 다항식으로 정의되는 닫힌 부분다양체다. 각 $\mathrm{Gr}(i,n)$ 을 Plücker 매장으로 사영공간에 넣으면 $\mathrm{Fl}(n)$ 은 [사영다양체](projective-varieties.md)다.

## 등질공간

$\mathrm{GL}\_n(K)$ 는 깃발 위에 추이적으로 작용한다. 표준 깃발 $\langle e\_1\rangle\subset\langle e\_1,e\_2\rangle\subset\cdots$ 의 안정자는 가역 상삼각행렬의 군 $B$ 이므로 $\mathrm{Fl}(n)=\mathrm{GL}\_n(K)/B$ 이고, 차원은 $B$ 바깥의 대각선 아래 성분 수 $n(n-1)/2$ 다. $G/B$ 는 매끄러운 사영다양체이고 차원은 양근의 개수다.

## Bruhat 분해와 Schubert 세포

$\mathrm{GL}\_n$ 의 Bruhat 분해 $\mathrm{GL}\_n=\bigsqcup\_{w\in S\_n}BwB$ 를 $B$ 로 나누면

$$
\mathrm{Fl}(n)=\bigsqcup\_{w\in S\_n}BwB/B,\qquad BwB/B\cong K^{\ell(w)}
$$

이다. $w$ 는 순열행렬이고 $\ell(w)$ 는 $w$ 의 반전 수, 곧 [Coxeter 군](coxeter-groups.md)으로서의 길이다. 조각 $BwB/B$ 를 Schubert 세포라 한다. 일반적인 $G/B$ 에서는 $S\_n$ 자리에 Weyl 군이 온다.

## 점의 개수

Schubert 세포가 $\mathbb F\_q$ 위에서 $q^{\ell(w)}$ 개의 점을 가지므로

$$
\char35{}\mathrm{Fl}(n)(\mathbb F\_q)=\sum\_{w\in S\_n}q^{\ell(w)}=\prod\_{i=1}^{n}(1+q+\cdots+q^{i-1})
$$

이다. 둘째 등호는 $V\_1$ 을 고르는 방법이 $1+q+\cdots+q^{n-1}$ 가지이고, $V\_1$ 을 고정하면 나머지가 $K^n/V\_1$ 의 깃발이라는 귀납에서 나온다. $n=3$ 이면 직관 절의 $(1+q)(1+q+q^2)$ 다.

## 코호몰로지

$K=\mathbb C$ 이면 Schubert 세포가 짝수 차원 세포만으로 된 [CW 복합체](cw-complexes.md)(CW complex) 구조를 주므로 [코호몰로지](cohomology.md)는 짝수 차수에만 있고, Poincaré 다항식은 위 식에서 $q$ 를 $t^2$ 로 바꾼 것이며 [Euler 지표](euler-characteristic.md)는 $n!$ 이다. 환 구조는 Borel 표시(Borel presentation)

$$
H^\ast(\mathrm{Fl}(n);\mathbb Z)\cong\mathbb Z\lbrack x\_1,\dots,x\_n\rbrack/(e\_1,\dots,e\_n)
$$

으로 주어진다[^1]. $x\_i$ 는 직선다발 $V\_i/V\_{i-1}$ 의 첫째 Chern 류의 부호를 바꾼 것이고, $e\_k$ 는 $k$ 차 기본 대칭다항식이다.

# 활용

- **표현론.** $G/B$ 위의 직선다발의 단면 공간이 $G$ 의 기약 표현을 준다. [Borel–Weil–Bott 정리](borel-weil-bott.md)가 그 진술이고, [Beilinson–Bernstein 국소화](beilinson-bernstein.md)는 [Lie 대수](lie-algebras.md)의 표현 범주를 $G/B$ 위의 $\mathcal D$ 가군의 범주로 옮긴다.
- **열거 기하.** Schubert 세포의 폐포가 주는 코호몰로지 류의 곱으로 깃발의 상대 위치에 대한 조건을 센다. [Schubert 계산](schubert-calculus.md)이 Grassmann 다양체에서 그 곱 규칙이다.
- **Kazhdan–Lusztig 다항식.** Schubert 세포 폐포의 특이점에서 교차 코호몰로지의 차원이 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)의 계수다.
- **유한군.** $\mathrm{GL}\_n(\mathbb F\_q)$ 가 $\mathrm{Fl}(n)(\mathbb F\_q)$ 에 작용하는 치환 표현은 그 군의 표현론에서 주계열 표현을 만든다.

[^1]: W. Fulton, *Young Tableaux*, London Mathematical Society Student Texts 35, Cambridge University Press, 1997, 10 장. 깃발다양체의 Schubert 세포와 Borel 표시.

# 연관 문서

## 선수지식

- [대수군](algebraic-groups.md)
- [Grassmann 다양체](grassmannian.md)

## 더 알아보기

- [Borel–Weil–Bott 정리](borel-weil-bott.md)

#algebra #algebraic_topology #group_theory
