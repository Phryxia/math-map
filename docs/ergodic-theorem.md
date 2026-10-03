# 에르고딕 정리

# 개요

에르고딕 정리는 한 점의 궤도에서 재는 시간평균이 공간 전체에서 재는 적분과 같다는 정리다. 측도를 보존하는 변환 $T$ 와 적분가능한 $f$ 에 대해 다음이 성립한다.

$$
\lim_{N\to\infty}\frac1N\sum_{n=0}^{N-1}f(T^nx)=\int_X f\thinspace d\mu
$$

오른쪽이 $x$ 와 무관한 상수가 되려면 $T$ 가 공간을 불변인 조각으로 가르지 않아야 한다. 그 조건이 에르고딕성이다.

# 직관

주사위를 여러 번 굴려 눈의 평균을 내면 기댓값으로 간다. [큰 수의 법칙](law-of-large-numbers.md)은 굴림이 서로 독립일 때를 다룬다. 그런데 한 점에서 출발해 같은 규칙을 되풀이해 얻은 값들은 독립이 아니다. $\lbrack 0,1)$ 의 점 $x$ 에서 시작해 매번 $\alpha$ 를 더하고 소수부만 남기면 궤도는 $x, x+\alpha, x+2\alpha,\dots$ 이고, 다음 값이 앞 값으로 완전히 정해진다. 이런 궤도에서 함수 값의 평균은 무엇으로 가는가.

$f(x)=e^{2\pi ix}$ 로 두면 궤도 값의 합이 등비수열의 합이다.

$$
\frac1N\sum_{n=0}^{N-1}e^{2\pi i(x+n\alpha)}=e^{2\pi ix}\cdot\frac1N\cdot\frac{e^{2\pi iN\alpha}-1}{e^{2\pi i\alpha}-1}
$$

$\alpha$ 가 무리수이면 $e^{2\pi i\alpha}\ne1$ 이라 분모가 $0$ 이 아니고 분자의 절댓값은 $2$ 이하다. 따라서 전체가 $N\to\infty$ 에서 $0$ 으로 가고, 이는 $\int_0^1 e^{2\pi ix}\thinspace dx=0$ 과 같은 값이다.

$\alpha=p/q$ 이면 같은 식의 분모가 $0$ 이고 계산이 다르게 끝난다. 궤도는 $x, x+1/q,\dots,x+(q-1)/q$ 의 $q$ 개 점만 돌고, 시간평균은 그 $q$ 점에서 $f$ 의 평균이라 출발점 $x$ 에 따라 달라진다. 두 경우를 가르는 것은 되풀이로 옮겨도 제자리로 오는 조각이 있는지다. $\alpha=p/q$ 에서는 $\lbrack 0,1/q)$ 를 $q$ 번 옮긴 합집합이 그런 조각이고, 무리수 회전에서는 그런 조각이 측도 $0$ 이거나 전체뿐이다. 이 조건을 에르고딕성이라 한다.

# 정의

## 측도보존변환

$(X,\mathcal B,\mu)$ 를 확률공간이라 하자. 가측사상 $T:X\to X$ 가 모든 $A\in\mathcal B$ 에서

$$
\mu(T^{-1}A)=\mu(A)
$$

를 만족하면 $T$ 를 **측도보존변환**이라 한다. 원 회전 $Tx=x+\alpha \bmod 1$ 은 Lebesgue 측도를 보존하고, 유한집합 위의 순환치환은 균등측도를 보존한다.

## 에르고딕성

측도보존변환 $T$ 가 $T^{-1}A=A$ 인 모든 $A\in\mathcal B$ 에서 $\mu(A)=0$ 또는 $\mu(A)=1$ 을 만족하면 $T$ 를 **에르고딕**이라 한다.

$T^{-1}A=A$ 인 집합 전체는 $\sigma$ 대수이고 이를 **불변 $\sigma$ 대수** $\mathcal I$ 라 한다. $T$ 가 에르고딕인 것은 $\mathcal I$ 가 영집합까지 $\lbrace\varnothing, X\rbrace$ 와 같다는 것과 동치다.

## 시간평균

$f:X\to\mathbb R$ 가 가측일 때 $N$ 번째 **시간평균**은 다음이다.

$$
A_Nf(x)=\frac1N\sum_{n=0}^{N-1}f(T^nx)
$$

# 성질

## Birkhoff 개별 에르고딕 정리

> **정리**(Birkhoff)**.** $T$ 가 확률공간 $(X,\mathcal B,\mu)$ 의 측도보존변환이고 $f\in L^1(\mu)$ 이면 $A_Nf$ 는 거의 모든 $x$ 에서 수렴하고, 극한은 [조건부 기댓값](conditional-expectation.md) $E\lbrack f\mid\mathcal I\rbrack$ 와 거의 모든 곳에서 같다. $T$ 가 에르고딕이면 극한은 상수 $\int_X f\thinspace d\mu$ 다.

증명의 요지는 극대 에르고딕 부등식이다. $f^\ast(x)=\sup_{N\ge1}A_Nf(x)$ 에 대해 $\lambda\gt 0$ 이면

$$
\mu(\lbrace f^\ast\gt \lambda\rbrace)\le\frac{\Vert f\Vert\_1}{\lambda}
$$

가 성립한다. 상극한 $\bar f=\limsup_N A_Nf$ 와 하극한 $\underline f=\liminf_N A_Nf$ 는 둘 다 $T$ 불변이다. $\bar f\gt \underline f$ 인 집합이 양측도이면 유리수 $a\lt b$ 를 잡아 $\underline f\lt a\lt b\lt \bar f$ 인 불변집합 $E$ 가 양측도가 된다. $E$ 에 제한해 극대 부등식을 쓰면 $\int_E f\ge b\thinspace\mu(E)$ 와 $\int_E f\le a\thinspace\mu(E)$ 가 함께 나와 모순이다. 따라서 $\bar f=\underline f$ 가 거의 모든 곳에서 성립한다.

## von Neumann 평균 에르고딕 정리

> **정리**(von Neumann)**.** $Uf=f\circ T$ 는 [Hilbert 공간](hilbert-spaces.md) $L^2(\mu)$ 의 등거리사상이고, 모든 $f\in L^2(\mu)$ 에서 $A_Nf$ 는 $L^2$ 노름으로 $\ker(U-I)$ 위의 직교사영 $Pf$ 로 수렴한다.

증명의 요지는 직교분해다. $U$ 가 등거리이므로

$$
L^2(\mu)=\ker(U-I)\oplus\overline{\mathrm{im}}(U-I)
$$

이다. $f=h-Uh$ 이면 $A_Nf=(h-U^Nh)/N$ 이고 노름이 $2\Vert h\Vert\_2/N$ 이라 $0$ 으로 간다. $f\in\ker(U-I)$ 이면 $A_Nf=f$ 다. 두 성분에서 결론이 성립하고 $A_N$ 의 작용소 노름이 $1$ 이하이므로 조밀성으로 일반 $f$ 에 넘어간다.

개별 정리는 각 점에서의 수렴을, 평균 정리는 $L^2$ 노름에서의 수렴을 준다. $L^2\subseteq L^1$ 인 확률공간에서 Birkhoff 정리가 평균 정리의 결론을 함의하지만, 평균 정리의 증명이 훨씬 짧고 극한의 정체를 사영으로 바로 준다.

## 무리수 회전의 에르고딕성

> **정리.** $\alpha$ 가 무리수이면 $Tx=x+\alpha \bmod 1$ 은 Lebesgue 측도에 대해 에르고딕이다.

불변인 $f\in L^2$ 의 [Fourier 계수](fourier-series.md)를 $c_n$ 이라 하면 $f\circ T=f$ 가 모든 $n$ 에서 $c_ne^{2\pi in\alpha}=c_n$ 을 준다. $\alpha$ 가 무리수이므로 $n\ne0$ 에서 $e^{2\pi in\alpha}\ne1$ 이고 따라서 $c_n=0$ 이다. 즉 $f$ 가 상수이므로 불변집합의 지시함수도 상수이고 측도가 $0$ 또는 $1$ 이다.

$\alpha=p/q$ 이면 $A=\bigcup_{k=0}^{q-1}\lbrack k/q, k/q+1/(2q))$ 가 불변이고 측도가 $1/2$ 이므로 에르고딕이 아니다.

# 활용

- **강한 큰 수의 법칙.** 독립 동일분포 열은 곱공간 $\mathbb R^{\mathbb N}$ 위의 이동변환 $T(x_1,x_2,\dots)=(x_2,x_3,\dots)$ 로 보면 측도보존이고, 꼬리 사건이 자명하다는 사실이 에르고딕성을 준다. Birkhoff 정리의 결론이 [확률변수](random-variables.md) 평균의 거의 확실한 수렴이다.
- **연분수의 부분몫 분포.** [Gauss 사상](gauss-map.md) $Tx=1/x \bmod 1$ 은 $d\mu=\frac{1}{\log 2}\frac{dx}{1+x}$ 를 보존하고 에르고딕이다. [연분수](continued-fractions.md) 전개의 부분몫에 지시함수를 넣어 Birkhoff 정리를 쓰면 $k$ 가 나타나는 빈도가 $\log_2(1+1/(k(k+2)))$ 다.
- **등분포.** 무리수 회전에 구간 $I$ 의 지시함수를 넣으면 궤도가 $I$ 에 들어가는 빈도가 $I$ 의 길이와 같다. 이것이 수열 $\lbrace n\alpha\rbrace$ 의 [등분포](equidistribution.md)다.
- **혼합성의 위계.** 에르고딕성은 $\mu(A\cap T^{-n}B)$ 의 시간평균이 $\mu(A)\mu(B)$ 로 가는 조건이고, 각 $n$ 에서의 수렴을 요구하면 [혼합성](mixing.md)이 된다. 혼합이면 에르고딕이지만 역은 성립하지 않고, 무리수 회전이 반례다.

# 연관 문서

## 선수지식

- [큰 수의 법칙](law-of-large-numbers.md)
- [조건부 기댓값](conditional-expectation.md)

## 더 알아보기

- [혼합성](mixing.md)
- [등분포](equidistribution.md)
- [Gauss 사상](gauss-map.md)

#measure_theory #probability #analysis #theorem
