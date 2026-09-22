# 분할수

# 개요

$n$ 을 양의 정수의 합으로 쓰는 방법의 수를 $p(n)$ 이라 한다. 순서는 무시한다. $4=4=3+1=2+2=2+1+1=1+1+1+1$ 이므로 $p(4)=5$ 다.

[생성함수](generating-functions.md)는 즉시 나온다.

$$
\sum_{n\ge0}p(n)q^n=\prod_{k\ge1}\frac1{1-q^k}
$$

$p(n)$ 에는 닫힌 공식이 없다. 점화식으로 계산은 되지만 증가 속도가 드러나지 않는다. $p(100)=190569292$ 라는 크기는 조합적 논증으로 설명되지 않는다.

$F(q)=\prod(1-q^k)^{-1}$ 을 복소함수로 보면 단위원 안에서 정칙이고 단위원 위의 모든 유리점에서 폭발한다. Cauchy 적분으로 $p(n)$ 을 뽑고 각 특이점 근방의 거동을 넣으면 점근식이 나온다. 그 거동은 [모듈러 형식](modular-forms.md)의 변환 규칙, 구체적으로 Dedekind eta 함수의 $\tau\mapsto-1/\tau$ 변환식이 준다.

$$
p(n)\sim\frac1{4n\sqrt3}\exp\Big(\pi\sqrt{\tfrac{2n}3}\Big)
$$

Hardy 와 Ramanujan 이 1918 년에 얻은 이 결과에서 **원법**이 나왔고, 원법은 가법적 정수론의 표준 도구가 되었다.

# 직관

## 곱과 분할의 대응

$\frac1{1-q^k}=1+q^k+q^{2k}+\cdots$ 이므로 이 인자에서 $q^{mk}$ 를 고르는 것이 부분 $k$ 를 $m$ 번 쓰는 것이다. 모든 $k$ 에 대해 곱하면 각 항이 분할 하나에 대응하고 $q^n$ 의 계수가 $p(n)$ 이다.

서로 다른 부분만 쓰면 $\prod(1+q^k)$ 이고 홀수 부분만 쓰면 $\prod_{k\ \mathrm{odd}}(1-q^k)^{-1}$ 이다. 두 곱이 같은 급수를 준다는 계산이 Euler 의 항등식이다.

## 점근식의 난점

$p(n)$ 의 증가 속도 $\exp(c\sqrt n)$ 은 다항식보다 빠르고 지수보다 느리다. 크기가 $\sqrt n$ 규모인 부분을 $\sqrt n$ 개 쓰는 분할이 가장 많으므로 지수에 $\sqrt n$ 이 들어오는 것까지는 조합적으로 보인다. 상수 $c=\pi\sqrt{2/3}$ 는 생성함수의 해석적 성질에서만 나온다.

## 원법

$p(n)$ 은 Cauchy 적분으로 꺼낼 수 있다.

$$
p(n)=\frac1{2\pi i}\oint_{|q|=r}\frac{F(q)}{q^{n+1}}\thinspace dq\qquad(0\lt r\lt 1)
$$

$r\to1$ 로 보내면 분모 $q^{n+1}$ 이 작아지는 이득과 $F$ 가 폭발하는 손해가 균형을 이루는 곳에서 주된 기여가 나온다.

$F$ 의 폭발 방식은 단위원 위의 유리점 $e^{2\pi ih/k}$ 마다 다르고, 분모가 작을수록 심하며 $q=1$ 에서 가장 강하다. $q=1$ 근방의 작은 호가 주항을 주고 나머지 호가 보정항과 오차를 준다.

$q=e^{2\pi i\tau}$ 로 두면 $q\to1$ 은 $\tau\to0$ 이고, 이 점은 $\mathbb H$ 의 첨점이 아니라 실축 위에 있다. Dedekind eta 의 변환식

$$
\eta\Big(-\frac1\tau\Big)=\sqrt{-i\tau}\thinspace\eta(\tau)
$$

이 $\tau\to0$ 의 문제를 $\tau\to i\infty$ 의 문제로 바꾼다. 후자에서는 $q$ 전개의 첫 항만 보면 거동이 읽힌다. 모듈러 대칭이 어려운 극한을 쉬운 극한으로 옮기는 것이 원법의 기술적 핵심이다.

# 정의

## 분할

$\lambda_1\ge\cdots\ge\lambda_r\ge1$ 인 $n=\lambda_1+\cdots+\lambda_r$ 을 $n$ 의 분할이라 하고 그 개수를 $p(n)$ 이라 한다. $p(0)=1$ 로 약속한다.

Ferrers 도표는 $i$ 번째 줄에 $\lambda_i$ 개의 점을 찍은 그림이다. 행과 열을 바꾸면 켤레 분할이 된다. 이 대합으로 부분이 $m$ 개 이하인 분할과 부분이 모두 $m$ 이하인 분할의 개수가 같음이 나온다.

## 생성함수와 오각수 정리

$$
F(q)=\sum_{n\ge0}p(n)q^n=\prod_{k\ge1}\frac1{1-q^k}
$$

역수 쪽 전개가 Euler 의 오각수 정리다.

$$
\prod_{k\ge1}(1-q^k)=\sum_{j\in\mathbb Z}(-1)^jq^{j(3j-1)/2}
=1-q-q^2+q^5+q^7-q^{12}-q^{15}+\cdots
$$

지수 $j(3j-1)/2$ 가 오각수다. 무한곱을 전개하면 부호를 바꾸는 대합으로 대부분의 항이 상쇄되고 오각수 지수만 남는다.

$F(q)\cdot\prod(1-q^k)=1$ 과 결합하면 점화식이 나온다.

$$
p(n)=\sum_{j\ge1}(-1)^{j+1}\Big[p\big(n-\tfrac{j(3j-1)}2\big)+p\big(n-\tfrac{j(3j+1)}2\big)\Big]
$$

항의 개수가 $O(\sqrt n)$ 이라 $p(n)$ 을 빠르게 계산할 수 있다.

## Dedekind eta

$$
\eta(\tau)=q^{1/24}\prod_{k\ge1}(1-q^k),\qquad q=e^{2\pi i\tau}
$$

$\eta$ 는 무게 $1/2$ 의 모듈러 형식처럼 변환한다.

$$
\eta(\tau+1)=e^{\pi i/12}\eta(\tau),\qquad
\eta\Big(-\frac1\tau\Big)=\sqrt{-i\tau}\thinspace\eta(\tau)
$$

따라서 $F(q)=q^{1/24}/\eta(\tau)$ 이고 분할 생성함수는 모듈러 대상의 역수다. $\eta^{24}=\Delta$ 이므로 판별식 형식과도 이어진다.

# 성질

## Hardy–Ramanujan 과 Rademacher

원법을 $q=1$ 근방에서만 적용하면 주항이 나온다.

$$
p(n)\sim\frac1{4n\sqrt3}\thinspace e^{\pi\sqrt{2n/3}}
$$

수렴은 느려서 $n=400$ 에서도 오차가 2 퍼센트 남는다. 다른 유리점의 기여를 모두 더하면 Rademacher 의 수렴급수가 되고, 이 급수는 $p(n)$ 을 정확히 준다.

$$
p(n)=\frac1{\pi\sqrt2}\sum_{k\ge1}A_k(n)\sqrt k\thinspace\frac{d}{dn}\left(\frac{\sinh\big(\frac\pi k\sqrt{\frac23(n-\frac1{24})}\big)}{\sqrt{n-\frac1{24}}}\right)
$$

$A_k(n)$ 은 Kloosterman 합 꼴의 유한합이다. 몇 항만 더해 반올림하면 $p(n)$ 이 나온다.

## Ramanujan 합동

Ramanujan 이 $p(n)$ 의 값 표에서 찾은 합동이다.

$$
p(5n+4)\equiv0\ (5),\qquad p(7n+5)\equiv0\ (7),\qquad p(11n+6)\equiv0\ (11)
$$

$2,3,13$ 에는 같은 형태가 없다. 증명은 생성함수의 항등식으로 한다.

$$
\sum_{n\ge0}p(5n+4)q^n=5\prod_{k\ge1}\frac{(1-q^{5k})^5}{(1-q^k)^6}
$$

이고 우변에 5 가 붙어 있다. 이런 항등식은 $\eta$ 몫이 [모듈러 곡선](modular-curves.md) 위의 함수라는 데서 나온다.

Dyson 은 분할에 rank 라는 통계량을 붙여 $5,7$ 의 경우 분할 집합을 다섯 덩이와 일곱 덩이로 실제로 나눌 수 있다고 추측했고, $11$ 에는 rank 가 통하지 않아 crank 가 필요하다고 예측했다. crank 는 1988 년 Andrews 와 Garvan 이 찾았다.

합동은 이 셋으로 끝나지 않는다. Ono 는 5 이상의 모든 소수 $\ell$ 에 대해 어떤 등차수열에서 $p(n)\equiv0\pmod\ell$ 이 성립함을 $\eta$ 몫에 붙는 [Galois 표현](galois-representations.md)으로 증명했다.

## 원법의 적용 범위

Hardy–Littlewood 가 원법을 가법적 문제 전반으로 확장했다.

- **Waring 문제.** 모든 큰 정수를 $s$ 개의 $k$ 제곱수의 합으로 쓸 수 있는가. 주 호에서 나오는 특이급수가 답의 개수에 대한 점근식을 준다.
- **삼소수 정리.** 충분히 큰 홀수는 세 소수의 합이다. Vinogradov 가 원법으로 증명했다.
- **Goldbach.** 짝수 경우는 주 호와 부 호의 균형이 깨져 원법만으로는 닿지 않는다.

절차는 공통이다. 생성함수를 만들고, 단위원을 주 호와 부 호로 나누고, 주 호에서 주항을 계산하고, 부 호를 오차로 통제한다. 분할 문제에서는 모듈러 변환식이 주 호의 계산을 정확히 주므로 오차 없는 공식까지 간다.

# 활용

- **대칭군의 표현.** $S_n$ 의 기약표현은 $n$ 의 분할과 일대일 대응한다. 그래서 $p(n)$ 이 기약표현의 개수이고, 켤레류의 개수이기도 하다. Young 도표의 조합이 표현론의 계산을 그대로 대신한다.
- **통계역학.** 에너지 준위가 정수인 보손계의 상태수가 분할수다. $\log p(n)\sim c\sqrt n$ 이 엔트로피를 주고, 여기서 Hagedorn 온도 같은 물리량이 나온다.
- **가환대수와 기하.** 유한 아벨 $p$ 군의 동형류가 분할로 분류되고, Hilbert 스킴과 Nakajima 다양체의 셈 문제에서도 분할이 기본 단위로 등장한다.
- **정수론의 도구.** $\eta$ 몫이 만드는 모듈러 형식은 theta 급수와 함께 이차형식의 표현 개수를 세는 데 쓰인다.
- **집합 분할과의 대비.** 원소를 구별하지 않고 개수만 보면 분할수 $p(n)$ 이 세고, 원소를 구별하면 [Bell 수](bell-numbers.md)가 센다. $n=4$ 에서 $p(4)=5$ 이고 $B_4=15$ 다.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)
- [모듈러 형식](modular-forms.md)
- [Laplace 방법](laplace-method.md)

## 더 알아보기

- [Dyson 의 rank 와 crank](dyson-rank-crank.md)

#combinatorics #number_theory #complex_analysis
