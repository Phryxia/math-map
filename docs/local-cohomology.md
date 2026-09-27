# 국소 코호몰로지

# 개요

[Koszul 복합체](koszul-complex.md)는 아이디얼의 생성원 하나하나로 깊이를 재고, 생성원의 거듭제곱을 키우면 복합체가 달라진다. 그 극한을 취하면 생성원 선택에서 자유로운 대상이 남는다.

**국소 코호몰로지** $H^i\_I(M)$ 는 아이디얼 $I$ 로 소멸되는 부분을 뽑는 함자의 [유도 함자](derived-functors.md)다. 깊이와 차원이 이 가군이 $0$ 이 아닌 차수의 처음과 끝으로 나타난다.

# 직관

$R=k\lbrack x,y\rbrack$ 를 두고 평면에서 원점을 뺀 $U$ 위의 다항함수를 찾는다. $U$ 는 $x\neq0$ 인 부분과 $y\neq0$ 인 부분 둘로 덮이고, 두 부분에서의 함수환은 $R_x$ 와 $R_y$ 다. $U$ 위의 함수는 두 부분에서 함수 하나씩을 골라 겹치는 곳 $xy\neq0$ 에서 값이 같은 것이다.

$R_x$ 의 원소는 $x$ 의 음의 거듭제곱을 허용하는 다항식이고 $R_y$ 의 원소는 $y$ 의 음의 거듭제곱을 허용한다. 두 환의 원소가 $R_{xy}$ 에서 같으면 항마다 $x$ 와 $y$ 의 지수가 모두 음이 아니므로 그 원소는 $R$ 에 있다. 원점을 빼도 새 함수가 생기지 않는다.

겹치는 곳에서 값을 맞추는 쌍을 셌으니, 이제 맞추지 못하는 것을 센다. $R_{xy}$ 의 원소 $1/(xy)$ 를 $R_x$ 의 원소와 $R_y$ 의 원소의 차로 쓰려 하면, 앞의 것은 $y$ 의 지수가 음이 아니고 뒤의 것은 $x$ 의 지수가 음이 아니므로 $x$ 와 $y$ 의 지수가 모두 $-1$ 인 항이 나오지 않는다. 같은 이유로 $x^{-a}y^{-b}$ 는 $a,b\ge1$ 마다 차로 쓸 수 없고, 이들이 몫 $R_{xy}/(R_x+R_y)$ 의 $k$ 기저를 이룬다.

두 부분으로 덮고 겹침에서의 차를 본 이 계산이 $R$ 의 원점에 대한 국소 코호몰로지다. 지금 나온 두 값은 $H^1=0$ 과 무한차원인 $H^2\neq0$ 이고, 처음으로 $0$ 이 아닌 차수 $2$ 가 $R$ 의 깊이다.

# 정의

## 꼬임 부분가군의 유도 함자

Noether 환 $R$, 아이디얼 $I$, $R$-가군 $M$ 에 대해

$$\Gamma\_I(M)=\lbrace m\in M: I^nm=0 \text{ 인 } n\ge1 \text{ 이 있다}\rbrace$$

라 둔다. $\Gamma\_I$ 는 $R$-가군의 범주에서 자신으로 가는 좌완전 함자이고, 그 $i$ 번째 우유도함자를 $H^i\_I$ 로 적어 $I$ 에 대한 **국소 코호몰로지 함자**라 한다. $\Gamma\_I(M)$ 은 $\mathrm{Hom}\_R(R/I^n,M)$ 들의 귀납적 극한과 같다.

$H^i\_I$ 는 $I$ 의 근기에만 의존한다. $(R,\mathfrak m)$ 이 국소환일 때 $I=\mathfrak m$ 인 경우를 $H^i\_{\mathfrak m}$ 로 적는다.

## Čech 복합체

$I=(x_1,\dots,x_n)$ 일 때 $M$ 의 **확장 Čech 복합체**는

$$0\to M\to\bigoplus_i M\_{x_i}\to\bigoplus_{i\lt j}M\_{x_ix_j}\to\cdots\to M\_{x_1\cdots x_n}\to0$$

이고 사상은 국소화 사상의 부호 붙은 교대합이다. 이 복합체의 $i$ 번째 코호몰로지가 $H^i\_I(M)$ 이다.

같은 가군을 $x_1^t,\dots,x_n^t$ 로 만든 Koszul 복합체의 코호몰로지를 $t$ 에 대해 귀납적 극한으로 보내도 얻는다. 직관 절의 계산이 $n=2$ 인 Čech 복합체다.

# 성질

## 깊이와 차원

**정리.** $M$ 이 유한생성이고 $IM\neq M$ 이면

$$\mathrm{depth}(I,M)=\min\lbrace i:H^i\_I(M)\neq0\rbrace$$

이다.[^1]

증명의 요지. $x\in I$ 가 $M$ 의 비영인자이면 짧은 완전열 $0\to M\to M\to M/xM\to0$ 의 긴 완전열과 $\Gamma\_I(M)=0$ 에서 $H^i\_I(M)\cong H^{i-1}\_I(M/xM)$ 를 얻는다. 정칙열의 길이만큼 차수를 내려 $H^0$ 이 $0$ 이 아닌 자리에 닿는다. ∎

**정리.** $(R,\mathfrak m)$ 이 $d$ 차원 국소환이고 $M$ 이 $0$ 이 아닌 유한생성 가군이면 $i\gt\dim M$ 에서 $H^i\_{\mathfrak m}(M)=0$ 이고 $H^{\dim M}\_{\mathfrak m}(M)\neq0$ 이다.[^1]

두 정리를 합치면 $H^i\_{\mathfrak m}(M)$ 이 $0$ 이 아닌 차수가 $\mathrm{depth}\thinspace M$ 에서 시작해 $\dim M$ 에서 끝난다. 두 값이 같다는 것이 [Cohen–Macaulay 환](cohen-macaulay-rings.md)의 조건이므로, Cohen–Macaulay 가군은 국소 코호몰로지가 차수 하나에만 있는 가군이다.

## 국소 쌍대성

**정리.** $(R,\mathfrak m)$ 이 $d$ 차원 [Gorenstein 환](gorenstein-rings.md)이고 $M$ 이 유한생성이면 $H^i\_{\mathfrak m}(M)$ 의 Matlis 쌍대가 $\mathrm{Ext}^{d-i}\_R(M,R)$ 와 동형이다.[^2]

$M=R$ 를 넣으면 $H^d\_{\mathfrak m}(R)$ 의 쌍대가 $R$ 이고 다른 차수는 $0$ 이다. Gorenstein 조건이 최고차 국소 코호몰로지를 환 자신으로 나타낸다는 말이 이 동형이다.

## 열린집합의 코호몰로지와의 관계

$X=\mathrm{Spec}\thinspace R$ 와 $U=X\setminus V(I)$ 에 대해 긴 완전열

$$\cdots\to H^i\_I(M)\to H^i(X,\mathcal F)\to H^i(U,\mathcal F)\to H^{i+1}\_I(M)\to\cdots$$

가 있고 $\mathcal F$ 는 $M$ 이 주는 층이다.[^1] $H^i(X,\mathcal F)$ 가 $i\ge1$ 에서 $0$ 이므로 $H^i(U,\mathcal F)\cong H^{i+1}\_I(M)$ 가 $i\ge1$ 에서 성립한다. 직관 절의 $H^2$ 는 원점을 뺀 평면의 첫 [층 코호몰로지](sheaf-cohomology.md)다.

# 활용

- **Cohen–Macaulay 판정.** 깊이와 차원을 따로 계산하는 대신 $H^i\_{\mathfrak m}(R)$ 이 한 차수에만 있는지 본다. [Koszul 복합체](koszul-complex.md)의 깊이 등식이 이 계산의 유한 단계 판본이다.
- **Gorenstein 조건의 서술.** [Gorenstein 환](gorenstein-rings.md)의 정의에서 소클 자리를 차원이 양수일 때 맡는 것이 $H^d\_{\mathfrak m}(R)$ 이다.
- **여차원의 하한.** $V(I)$ 를 뺀 열린집합의 코호몰로지가 $H^i\_I$ 로 계산되므로, 아이디얼을 생성하는 데 필요한 원소의 개수에 하한이 붙는다. $H^i\_I(R)\neq0$ 인 $i$ 가 있으면 $I$ 는 $i$ 개 미만의 원소로 생성되지 않는다.[^2]

[^1]: M. P. Brodmann and R. Y. Sharp, *Local Cohomology: An Algebraic Introduction with Geometric Applications*, 2판 (2013), 1장, 3장, 6장, 20장. 깊이의 특성화, Grothendieck 소멸과 비소멸, 열린집합의 코호몰로지와의 완전열.

[^2]: R. Hartshorne, Local cohomology, *Lecture Notes in Mathematics* 41 (1967). 국소 쌍대성과 생성원 개수의 하한.

# 연관 문서

## 선수지식

- [Koszul 복합체](koszul-complex.md)
- [유도 함자](derived-functors.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #algebraic_topology #category_theory
