# 분할수

# 개요

**분할수(partition number)** $p(n)$ 은 $n$ 을 순서를 무시하고 양의 정수의 합으로 쓰는 방법의 수다. $4=4=3+1=2+2=2+1+1=1+1+1+1$ 이므로 $p(4)=5$ 이고, $p(100)$ 은 $190569292$ 다. 이 크기는 경우를 나눠 세는 조합적 논증으로는 설명되지 않는다. 분할수의 [생성함수](generating-functions.md)를 복소함수로 보고 특이점 근방의 거동을 [모듈러 형식](modular-forms.md)의 변환 규칙으로 계산하면 $p(n)$ 의 점근식이 나온다.

# 직관

부분으로 $1$ 과 $2$ 만 쓰는 분할을 센다. $1$ 을 몇 번 쓰는지는 $1+q+q^2+\cdots$ 의 한 항으로, $2$ 를 몇 번 쓰는지는 $1+q^2+q^4+\cdots$ 의 한 항으로 고른다. 두 급수를 곱하면 $q^4$ 의 계수는 $q^4\cdot 1$, $q^2\cdot q^2$, $1\cdot q^4$ 의 셋이고, 이것이 $1+1+1+1$, $2+1+1$, $2+2$ 의 세 분할이다. 모든 부분 $k$ 에 대해 $1+q^k+q^{2k}+\cdots=\frac1{1-q^k}$ 를 곱하면 $q^n$ 의 계수가 $p(n)$ 이다.

$$
\sum_{n\ge0}p(n)q^n=\prod_{k\ge1}\frac1{1-q^k}
$$

이 곱을 전개하면 $p(n)$ 의 값은 차례로 나오지만, $n$ 이 커질 때 $p(n)$ 이 얼마나 빨리 자라는지는 보이지 않는다. 곱 $F(q)=\prod(1-q^k)^{-1}$ 을 복소함수로 보면 단위원 안에서 정칙이고, $q$ 가 $1$ 의 거듭제곱근에 다가가면 $1-q^k$ 꼴의 인자들이 $0$ 에 가까워져 발산한다. Cauchy 적분으로 $p(n)$ 을 꺼내고 이 발산점들 근방의 크기를 넣으면 점근식이 나온다.

$$
p(n)\sim\frac1{4n\sqrt3}\exp\Big(\pi\sqrt{\tfrac{2n}3}\Big)
$$

Hardy 와 Ramanujan 이 1918 년에 이 식을 얻었고, 그 방법이 [원법](circle-method.md)이다. 발산점 근방의 크기는 Dedekind eta 함수의 변환식에서 읽는다.

# 정의

## 분할

$\lambda_1\ge\cdots\ge\lambda_r\ge1$ 인 $n=\lambda_1+\cdots+\lambda_r$ 을 $n$ 의 **분할(partition)** 이라 하고 $\lambda=(\lambda_1,\dots,\lambda_r)$ 로 쓴다. $\lambda_i$ 를 부분(part)이라 한다. 그 개수가 **분할수(partition number)** $p(n)$ 이고, $p(0)=1$ 로 약속한다. $4=3+1$ 은 $4$ 의 분할 $(3,1)$ 이다.

## Ferrers 도표와 켤레 분할

**Ferrers 도표(Ferrers diagram)** 는 $i$ 번째 줄에 $\lambda_i$ 개의 점을 왼쪽부터 찍은 그림이다. Ferrers 도표의 행과 열을 바꾼 도표가 나타내는 분할을 **켤레 분할(conjugate partition)** $\lambda'$ 이라 한다. $(3,1)$ 의 도표는 첫 줄에 점 셋, 둘째 줄에 점 하나이고, 열마다 점을 세면 $2,1,1$ 이므로 $(3,1)'=(2,1,1)$ 이다.

## 생성함수

분할수의 생성함수는

$$
F(q)=\sum_{n\ge0}p(n)q^n=\prod_{k\ge1}\frac1{1-q^k}
$$

이다. 서로 다른 부분만 쓰는 분할의 생성함수는 $\prod_{k\ge1}(1+q^k)$ 이고, 홀수 부분만 쓰는 분할의 생성함수는 $\prod_{k\ \mathrm{odd}}(1-q^k)^{-1}$ 이다.

## Dedekind eta 함수

상반평면 $\mathbb H$ 의 $\tau$ 에 대해 **Dedekind eta 함수(Dedekind eta function)** 는

$$
\eta(\tau)=q^{1/24}\prod_{k\ge1}(1-q^k),\qquad q=e^{2\pi i\tau}
$$

이다. 정의에서 $F(q)=q^{1/24}/\eta(\tau)$ 다.

# 성질

## 켤레 분할의 대칭

$\lambda\mapsto\lambda'$ 은 대합(involution)이고, 부분이 $m$ 개 이하인 분할을 부분이 모두 $m$ 이하인 분할로 보낸다. 그래서 두 종류의 분할은 개수가 같다. $(3,1)$ 은 부분이 $2$ 개이고 $(2,1,1)$ 은 부분이 모두 $2$ 이하다.

## Euler 항등식

서로 다른 부분으로 된 $n$ 의 분할과 홀수 부분으로 된 $n$ 의 분할은 개수가 같다. $\prod(1+q^k)=\prod\frac{1-q^{2k}}{1-q^k}$ 에서 분자의 짝수 지수 인자가 분모의 짝수 지수 인자와 약분되어 $\prod_{k\ \mathrm{odd}}(1-q^k)^{-1}$ 이 남는다. $n=5$ 에서 앞의 것은 $5,\thinspace 4+1,\thinspace 3+2$ 이고 뒤의 것은 $5,\thinspace 3+1+1,\thinspace 1+1+1+1+1$ 로 셋씩이다.

## 오각수 정리

Euler 의 오각수 정리(pentagonal number theorem)는 다음 전개다.

$$
\prod_{k\ge1}(1-q^k)=\sum_{j\in\mathbb Z}(-1)^jq^{j(3j-1)/2}
=1-q-q^2+q^5+q^7-q^{12}-q^{15}+\cdots
$$

지수 $j(3j-1)/2$ 가 오각수다. 무한곱을 전개하면 부호를 바꾸는 대합으로 대부분의 항이 상쇄되고 오각수 지수만 남는다.

$F(q)\cdot\prod(1-q^k)=1$ 의 양변에서 $q^n$ 의 계수를 비교하면 점화식이 나온다.

$$
p(n)=\sum_{j\ge1}(-1)^{j+1}\Big[p\big(n-\tfrac{j(3j-1)}2\big)+p\big(n-\tfrac{j(3j+1)}2\big)\Big]
$$

음수에서 $p$ 는 $0$ 이다. $p(5)=p(4)+p(3)-p(0)=5+3-1=7$ 이다. 항의 개수가 $O(\sqrt n)$ 이라 $p(n)$ 을 빠르게 계산할 수 있다.

## eta 의 변환식

$\eta$ 는 무게 $1/2$ 의 모듈러 형식처럼 변환한다.

$$
\eta(\tau+1)=e^{\pi i/12}\eta(\tau),\qquad
\eta\Big(-\frac1\tau\Big)=\sqrt{-i\tau}\thinspace\eta(\tau)
$$

$\eta^{24}$ 은 판별식 형식(discriminant form) $\Delta$ 와 같다.

## 원법

$p(n)$ 의 증가 속도 $\exp(c\sqrt n)$ 은 다항식보다 빠르고 지수보다 느리다. 크기가 $\sqrt n$ 규모인 부분을 $\sqrt n$ 개 쓰는 분할이 가장 많으므로 지수에 $\sqrt n$ 이 들어오는 것까지는 조합적으로 보이지만, 상수 $c=\pi\sqrt{2/3}$ 는 생성함수의 해석적 성질에서 나온다. 그 성질을 쓰려면 $p(n)$ 을 Cauchy 적분으로 꺼낸다.

$$
p(n)=\frac1{2\pi i}\oint_{|q|=r}\frac{F(q)}{q^{n+1}}\thinspace dq\qquad(0\lt r\lt 1)
$$

$r\to1$ 로 보내면 분모 $q^{n+1}$ 이 작아지는 효과와 $F$ 가 커지는 효과가 맞서는 반지름에서 주된 기여가 나오고, 그 근방의 적분은 [Laplace 방법](laplace-method.md)으로 계산한다. $F$ 의 발산 정도는 단위원 위의 점 $e^{2\pi ih/k}$ 마다 다르고, $k$ 가 작을수록 심하며 $q=1$ 에서 가장 강하다. $q=1$ 근방의 작은 호가 주항을 주고 나머지 호가 보정항과 오차를 준다.

$q=e^{2\pi i\tau}$ 로 두면 $q\to1$ 은 $\tau\to0$ 이고, 이 점은 실축 위에 있다. 변환식 $\eta(-1/\tau)=\sqrt{-i\tau}\thinspace\eta(\tau)$ 가 $\tau\to0$ 의 문제를 $\tau\to i\infty$ 의 문제로 바꾸고, 후자에서는 $q$ 전개의 첫 항만 보면 크기가 나온다.

## Hardy–Ramanujan 점근식과 Rademacher 급수

원법을 $q=1$ 근방에서만 적용하면 주항이 나온다.

$$
p(n)\sim\frac1{4n\sqrt3}\thinspace e^{\pi\sqrt{2n/3}}
$$

수렴은 느려서 $n=400$ 에서도 오차가 2 퍼센트 남는다. 다른 유리점의 기여를 모두 더하면 Rademacher 급수(Rademacher series)가 되고, 이 급수는 $p(n)$ 을 정확히 준다.

$$
p(n)=\frac1{\pi\sqrt2}\sum_{k\ge1}A_k(n)\sqrt k\thinspace\frac{d}{dn}\left(\frac{\sinh\big(\frac\pi k\sqrt{\frac23(n-\frac1{24})}\big)}{\sqrt{n-\frac1{24}}}\right)
$$

$A_k(n)$ 은 [Kloosterman 합](kloosterman-sums.md) 꼴의 유한합이다. 몇 항만 더해 반올림하면 $p(n)$ 이 나온다.

## Ramanujan 합동

Ramanujan 합동(Ramanujan congruences)은 Ramanujan 이 $p(n)$ 의 값 표에서 찾은 합동이다.

$$
p(5n+4)\equiv0\ (5),\qquad p(7n+5)\equiv0\ (7),\qquad p(11n+6)\equiv0\ (11)
$$

$2,3,13$ 에는 같은 형태가 없다. 증명은 생성함수의 항등식으로 한다.

$$
\sum_{n\ge0}p(5n+4)q^n=5\prod_{k\ge1}\frac{(1-q^{5k})^5}{(1-q^k)^6}
$$

이고 우변에 5 가 붙어 있다. 이런 항등식은 $\eta$ 몫(eta quotient)이 [모듈러 곡선](modular-curves.md) 위의 함수라는 데서 나온다.

Dyson 은 분할에 rank 라는 통계량(statistic)을 붙여 $5,7$ 의 경우 분할 집합을 다섯 덩이와 일곱 덩이로 실제로 나눌 수 있다고 추측했고, $11$ 에는 rank 가 통하지 않아 [crank](dyson-rank-crank.md) 가 필요하다고 예측했다. crank 는 1988 년 Andrews 와 Garvan 이 찾았다.

합동은 이 셋으로 끝나지 않는다. Ono 는 5 이상의 모든 소수 $\ell$ 에 대해 어떤 등차수열에서 $p(n)\equiv0\pmod\ell$ 이 성립함을 $\eta$ 몫에 붙는 [Galois 표현](galois-representations.md)으로 증명했다.

# 활용

- 대칭군의 표현. $S_n$ 의 기약표현은 $n$ 의 분할과 일대일 대응한다. 그래서 $p(n)$ 이 기약표현의 개수이고, 켤레류의 개수이기도 하다. 분할의 Ferrers 도표를 상자로 그린 Young 도표(Young diagram)로 표현의 차원과 지표를 계산하고, [대칭함수](symmetric-functions.md)의 기저도 분할로 번호가 붙는다.
- 통계역학. 에너지 준위가 정수인 보손(boson) 계의 상태수가 분할수다. $\log p(n)\sim c\sqrt n$ 이 엔트로피를 준다.
- 가환대수와 기하. 유한 아벨 $p$ 군의 동형류가 분할로 분류되고, [Hilbert 스킴](hilbert-scheme.md)과 Nakajima 다양체(Nakajima quiver variety)의 셈 문제에서도 분할이 셈의 단위로 나타난다.
- 정수론. $\eta$ 몫이 만드는 모듈러 형식은 [theta 급수](theta-series.md)와 함께 이차형식의 표현 개수를 세는 데 쓰인다.
- 집합 분할과의 대비. 원소를 구별하지 않고 개수만 보면 분할수 $p(n)$ 이 세고, 원소를 구별하면 [Bell 수](bell-numbers.md)가 센다. $n=4$ 에서 $p(4)=5$ 이고 $B_4=15$ 다.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)
- [모듈러 형식](modular-forms.md)
- [Laplace 방법](laplace-method.md)

## 더 알아보기

- [원법](circle-method.md)
- [Dyson 의 rank 와 crank](dyson-rank-crank.md)
- [대칭함수](symmetric-functions.md)

#combinatorics #number_theory #complex_analysis
