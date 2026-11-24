# Runge 정리

# 개요

**Runge 정리(Runge's theorem)** 는 복소평면의 닫힌 유계 집합 위에서 정칙인 함수를 다항식이나 유리함수로 얼마든지 가깝게 근사할 수 있는 조건을 주는 정리다. $1/z$ 는 원환 $1\le\lvert z\rvert\le 2$ 위에서 정칙이지만 어떤 다항식으로도 이 원환 전체에서 가깝게 근사되지 않는다. 원환에서 가는 부채꼴 하나를 잘라 내면 다항식으로 근사된다. 이 정리는 그 차이가 집합의 바깥이 한 덩어리로 이어져 있는지로 정해진다는 것을 보인다.

# 직관

원환 $K=\lbrace 1\le\lvert z\rvert\le 2\rbrace$ 위에서 $1/z$ 를 다항식 $p$ 로 근사한다고 하자. 단위원을 따라 적분하면 [정칙함수](holomorphic-functions.md)의 Cauchy–Goursat 정리(Cauchy–Goursat theorem)로 $\oint p\thinspace dz=0$ 이고, $\oint dz/z=2\pi i$ 다. 단위원 위에서 $\lvert p-1/z\rvert\le\varepsilon$ 이면 두 적분의 차가 $2\pi\varepsilon$ 이하이므로, $\varepsilon\lt 1$ 인 근사는 없다. 극 $0$ 이 $K$ 의 구멍 안에 갇혀 있어서 막힌다.

이번에는 원환에서 음의 실축 근처의 부채꼴을 잘라 낸 집합을 $K'$ 로 둔다. $K'$ 의 바깥은 잘라 낸 틈을 통해 구멍과 무한히 먼 쪽이 이어진다. 극을 그 틈을 따라 조금씩 밖으로 옮길 수 있다. 극을 $a$ 에서 가까운 점 $b$ 로 옮기는 계산은 다음 등비급수다.

$$
\frac{1}{z-a}=\frac{1}{(z-b)-(a-b)}=\sum_{k\ge 0}\frac{(a-b)^k}{(z-b)^{k+1}}
$$

$\lvert a-b\rvert$ 가 $b$ 에서 $K'$ 까지의 거리보다 작으면 이 급수는 $K'$ 위에서 [균등수렴](uniform-convergence.md)하므로, 극이 $a$ 인 함수가 극이 $b$ 인 유리함수로 근사된다. 이것을 되풀이해 극을 $\lvert c\rvert\gt 2$ 인 점 $c$ 까지 옮기면 마지막 단계는 다음 멱급수다.

$$
\frac{1}{z-c}=-\sum_{k\ge 0}\frac{z^k}{c^{k+1}}
$$

$K'$ 위에서 $\lvert z/c\rvert\lt 1$ 이 한결같이 성립하므로 부분합인 다항식이 $1/(z-c)$ 를 균등하게 근사한다. 그래서 $1/z$ 는 $K'$ 위에서 다항식으로 근사된다.

# 정의

## 콤팩트 집합 위의 정칙함수와 균등근사

$K$ 를 복소평면의 [콤팩트](compactness.md) 집합으로 둔다. $f$ 가 $K$ 를 포함하는 열린집합에서 정칙이면 $f$ 를 **$K$ 위의 정칙함수(holomorphic function on $K$)** 라 한다. $1/z$ 는 원환 $K$ 와 $K'$ 위의 정칙함수다.

함수열 $g_n$ 이 $K$ 위에서 $f$ 로 균등수렴하면 $f$ 가 $g_n$ 들로 $K$ 위에서 **균등근사(uniform approximation)** 된다고 한다. 두 다항식의 몫을 **유리함수(rational function)** 라 하고, 분모의 근을 그 유리함수의 극이라 한다.

## 여집합의 연결성분

$\mathbb C\setminus K$ 는 열린집합이고 [연결성](connectedness.md)으로 서로 겹치지 않는 연결성분들로 나뉜다. $K$ 가 유계이므로 그 가운데 정확히 하나가 유계가 아니다. 원환 $K$ 의 여집합은 유계 성분 $\lbrace\lvert z\rvert\lt 1\rbrace$ 와 유계가 아닌 성분 $\lbrace\lvert z\rvert\gt 2\rbrace$ 로 나뉘고, $K'$ 의 여집합은 유계가 아닌 성분 하나다.

## Runge 정리

$K$ 가 콤팩트 집합이고 집합 $A$ 가 $\mathbb C\setminus K$ 의 유계 연결성분마다 점을 하나 이상 포함한다고 하자. $K$ 위의 정칙함수는 극이 모두 $A$ 에 있는 유리함수로 $K$ 위에서 균등근사된다. 특히 $\mathbb C\setminus K$ 가 연결이면 $K$ 위의 정칙함수는 다항식으로 균등근사된다[^1].

원환 $K$ 에서는 $A=\lbrace 0\rbrace$ 로 잡을 수 있고, 극이 $0$ 에만 있는 유리함수는 $\sum_{k=-m}^{m}c_kz^k$ 꼴이다. $K'$ 에서는 $A$ 가 비어 있어도 되므로 다항식으로 근사된다.

# 성질

## 증명의 요지

증명은 세 단계다[^1].

1. $f$ 가 정칙인 열린집합 $U$ 안에서 $K$ 를 감싸는 선분들의 합 $\Gamma$ 를 잡는다. 평면을 작은 정사각형 격자로 나누고 $K$ 와 만나는 정사각형들의 둘레 가운데 이웃과 겹치지 않는 변만 남기면 된다. Cauchy 적분 공식(Cauchy integral formula)으로 $K$ 위에서 $f(z)=\frac{1}{2\pi i}\int_\Gamma\frac{f(w)}{w-z}\thinspace dw$ 다.
2. 이 적분의 Riemann 합은 극이 $\Gamma$ 위에 있는 유리함수다. $\Gamma$ 와 $K$ 사이의 거리가 양수이므로 피적분함수가 $w$ 에 대해 $z\in K$ 와 상관없이 고르게 연속이고, Riemann 합이 $K$ 위에서 $f$ 로 균등수렴한다.
3. 직관 절의 등비급수로 극을 옮긴다. $\mathbb C\setminus K$ 의 한 연결성분 안에서, 극을 $a$ 에 둔 함수가 극을 $b$ 에 둔 유리함수로 균등근사되는 점 $b$ 들의 집합은 열려 있고 닫혀 있다. 그래서 이 집합은 성분 전체이고, 극을 $A$ 의 점까지, 유계가 아닌 성분에서는 무한히 먼 쪽까지 옮길 수 있다.

## 여집합 조건의 필요성

$\mathbb C\setminus K$ 에 유계 연결성분 $V$ 가 있고 $a\in V$ 이면 $1/(z-a)$ 는 다항식으로 균등근사되지 않는다. $K$ 위에서 $\lvert p(z)-1/(z-a)\rvert\le\varepsilon$ 이면 $q(z)=(z-a)p(z)-1$ 은 $K$ 위에서 $\lvert q\rvert\le\varepsilon M$ 이다. 여기서 $M$ 은 $K$ 위의 $\lvert z-a\rvert$ 의 최댓값이다.

$V$ 의 경계는 $K$ 에 포함되므로 [최대 절댓값 원리](maximum-modulus-principle.md)로 $V$ 안에서도 $\lvert q\rvert\le\varepsilon M$ 이다. 그런데 $q(a)=-1$ 이므로 $\varepsilon M\lt 1$ 이면 모순이다. 그래서 다항식 근사에는 여집합이 연결이라는 조건이 필요하고 충분하다.

## Mergelyan 정리

Runge 정리는 $f$ 가 $K$ 를 포함하는 열린집합에서 정칙이라고 가정한다. Mergelyan 정리(Mergelyan's theorem)는 이 가정을 약하게 바꾼 것이다. $\mathbb C\setminus K$ 가 연결이고 $f$ 가 $K$ 위에서 연속이며 $K$ 의 내부에서 정칙이면, $f$ 는 $K$ 위에서 다항식으로 균등근사된다[^2].

# 활용

- [Stone–Weierstrass 정리](stone-weierstrass.md)와의 대비. 실구간 $\lbrack -1,1\rbrack$ 위의 연속함수는 모두 다항식으로 근사된다. 단위원 $\lbrace\lvert z\rvert=1\rbrace$ 위의 $\bar z$ 는 연속이지만 단위원 위에서 $\bar z=1/z$ 이므로 직관 절의 적분 논법으로 $z$ 의 다항식으로 근사되지 않는다. 단위원의 여집합은 연결이 아니다.
- [Bernstein–Walsh 정리](bernstein-walsh-theorem.md). 여집합이 연결인 콤팩트 집합에서 다항식 근사가 된다는 Runge 정리의 결론에, 근사 오차가 차수에 따라 줄어드는 빠르기를 더한다. 그 빠르기는 $f$ 를 정칙으로 연장할 수 있는 범위로 정해진다.
- 일반 열린집합에서의 Mittag-Leffler 정리(Mittag-Leffler theorem). 지정한 극과 주부를 갖는 유리형함수를 만들 때, 평면 전체에서는 [Weierstrass 인수분해 정리](weierstrass-factorization.md) 문서처럼 Taylor 다항식을 빼서 급수를 수렴시킨다. 일반 열린집합에서는 Taylor 다항식 대신 Runge 정리가 주는 유리함수를 뺀다[^2].

[^1]: E. M. Stein, R. Shakarchi, Complex Analysis, Princeton University Press, 2003, 2장 5절.
[^2]: W. Rudin, Real and Complex Analysis, 3rd ed., McGraw-Hill, 1987, 13장, 20장.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [균등수렴](uniform-convergence.md)

## 더 알아보기

- [Bernstein–Walsh 정리](bernstein-walsh-theorem.md)

#complex_analysis #analysis #theorem
