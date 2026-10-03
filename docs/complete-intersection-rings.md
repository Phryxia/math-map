# 완전교차환

# 개요

완전교차환은 완비화가 정칙 국소환을 정칙열로 나눈 몫인 Noether 국소환이다. 정칙 국소환보다 넓고 Gorenstein 환보다 좁은 부류이며, 자유분해가 Koszul 복합체로 주어지므로 호몰로지 불변량이 생성원의 개수만으로 계산된다.

Betti 수의 증가 속도가 이 부류를 특징짓는다. 정칙환에서는 Betti 수가 유한 단계에서 끊기고, 완전교차환에서는 다항식 규모로 자라며, 그렇지 않은 환에서는 지수 규모로 자라는 가군이 있다.

# 직관

정칙 국소환 $A$ 에서 원소 하나로 나눈 몫 $A/(f)$ 의 자유분해를 구한다. $f$ 가 영인자가 아니므로 다음이 완전열이다.

$$
0\to A\xrightarrow{\ f\ }A\to A/(f)\to 0
$$

분해의 길이가 $1$ 이고 각 항의 순위가 $1$ 이다. 원소 둘로 나눈 $A/(f_1,f_2)$ 에서는 관계를 하나 더 찾아야 한다. $f_1\cdot f_2-f_2\cdot f_1=0$ 이라는 관계가 있고, $f_1,f_2$ 가 정칙열이면 관계는 이것뿐이다. 그래서 분해가 순위 $1,2,1$ 로 끝난다.

원소 $c$ 개로 나누면 관계들이 교대곱의 형태로만 생기고 $p$ 번째 항의 순위가 $\binom{c}{p}$ 다. 분해의 길이가 $c$ 로 끝나므로 몫환의 사영차원이 $c$ 이고, 마지막 항의 순위가 $1$ 이라 Gorenstein 조건이 따라온다. 나누는 원소가 정칙열이 아니면 관계가 교대곱 밖에서도 생겨 분해가 길어지고, 이 차이가 부류를 가른다.

# 정의

$(R,\mathfrak m)$ 를 Noether 국소환, $\widehat R$ 를 $\mathfrak m$ 진 완비화라 한다. $R$ 가 **완전교차환**(complete intersection ring)이라 함은 정칙 국소환 $A$ 와 $A$ 정칙열 $f_1,\dots,f_c$ 가 있어 다음이 성립하는 것이다.

$$
\widehat R\cong A/(f_1,\dots,f_c)
$$

$c$ 는 $A$ 의 선택에 의존하지 않고 $\dim A-\dim R$ 와 같으며, 이 값을 $R$ 의 **여차원**이라 한다.

완비화를 거치는 이유는 Cohen 구조정리다. 완비 Noether 국소환은 정칙 국소환의 몫으로 쓸 수 있지만 완비화하지 않은 국소환은 그렇지 않을 수 있다.

## 등급 완전교차

등급환 $S=k\lbrack x_0,\dots,x_n\rbrack$ 와 동차 정칙열 $f_1,\dots,f_c$ 에 대해 $S/(f_1,\dots,f_c)$ 를 등급 완전교차라 한다. 사영공간에서 여차원 $c$ 인 부분다양체가 동차식 $c$ 개의 공통 영점집합인 경우가 이것이고, [집합론적 완전교차](set-theoretic-complete-intersection.md)는 아이디얼이 아니라 영점집합만 일치하면 되는 약한 조건이다.

# 성질

## 부류의 포함 관계

정칙 국소환은 $c=0$ 인 완전교차환이다. 완전교차환은 [Gorenstein 환](gorenstein-rings.md)이고, Gorenstein 환은 Cohen–Macaulay 환이다. 두 포함 모두 진포함이다.

$R=A/(f_1,\dots,f_c)$ 의 $A$ 위 자유분해는 Koszul 복합체 $K\_\bullet(f_1,\dots,f_c)$ 이고, 이 복합체의 쌍대가 차수를 뒤집은 자기 자신이므로 $R$ 의 유형이 $1$ 이다. 유형 $1$ 이 Gorenstein 조건이다. 역이 성립하지 않는 예로 유형은 $1$ 이지만 여차원이 $c$ 인 어떤 $A$ 로도 표현되지 않는 환이 있다.

## Betti 수의 증가

$R$ 가 완전교차환이면 유한생성 $R$ 가군 $M$ 의 Betti 수 $\beta_i(M)=\dim_k\mathrm{Tor}^R_i(M,k)$ 가 차수 $c-1$ 이하의 다항식 두 개로 짝수 자리와 홀수 자리에서 각각 주어진다.[^1]

**정리**(Gulliksen). $R$ 가 완전교차환이면 모든 유한생성 가군의 Poincaré 급수 $\sum_i\beta_i(M)t^i$ 가 유리함수이고 분모가 $(1-t^2)^c$ 를 나눈다.

증명은 $\mathrm{Ext}\_R^\ast(M,k)$ 에 여차원 $c$ 만큼의 다항식환이 작용하고 그 작용에 대해 유한생성이라는 데서 나온다. 이 작용의 생성원을 Eisenbud 작용소라 한다.

**정리**(Avramov). 국소환 $R$ 의 모든 유한생성 가군의 Poincaré 급수가 유리이고 분모가 공통이면 그 사실만으로는 완전교차성이 따라오지 않지만, Betti 수가 다항식 규모로 유계라는 조건은 완전교차성과 동치다.[^2]

## 특이점의 판정

$R$ 가 완전교차환이면 Andre–Quillen 호몰로지 $D_n(k\to R)$ 이 $n\ge 3$ 에서 소멸한다. $n\ge 2$ 에서 소멸하면 정칙환이다. 세 부류가 이 호몰로지의 소멸 차수로 갈린다.

여차원 $1$ 의 완전교차환은 초곡면환 $A/(f)$ 이고, 이 경우 [국소 코호몰로지](local-cohomology.md)와 행렬 인수분해로 무한 자유분해가 주기 $2$ 로 반복된다.

# 활용

- 대수기하에서 사영 다양체가 등급 완전교차이면 차수와 산술 종수가 정의 방정식의 차수만으로 계산된다. 여차원 $c$ 인 완전교차의 표준층은 $\mathcal O(\sum d_i-n-1)$ 이고, 이 공식이 Calabi–Yau 초곡면의 차수 조건을 준다.
- 변형 이론에서 완전교차 특이점은 장애 없는 변형을 갖는다. 축소 변형 공간이 매끄러워 특이점 해소와 모듈라이 계산의 출발점이 된다.
- 가환대수의 호몰로지 추측 가운데 여러 개가 완전교차환에서 먼저 증명되었다. Betti 수의 다항식 증가가 [Koszul 복합체](koszul-complex.md)로 환원되는 계산을 허용하기 때문이다.

[^1]: L. Avramov, Infinite Free Resolutions, in: Six Lectures on Commutative Algebra, Birkhauser, 1998, 8 장.
[^2]: L. Avramov, Local rings over which all modules have rational Poincare series, Journal of Pure and Applied Algebra 91 (1994), 29-48.

# 연관 문서

## 선수지식

- [Gorenstein 환](gorenstein-rings.md)

## 더 알아보기

- [집합론적 완전교차](set-theoretic-complete-intersection.md)

#ring_theory #algebra #algebraic_topology
