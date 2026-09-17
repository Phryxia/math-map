# Picard 정리

# 개요

Liouville 정리는 상수 아닌 전해석함수의 상이 유계일 수 없다고 말한다. Picard 정리는 그 결론을 끝까지 밀어붙인다. 상수 아닌 전해석함수의 상은 복소평면에서 많아야 한 점만 빠진 집합이고, 본질적 특이점 근방에서는 그 빠진 값 하나를 빼고 모든 값이 무한히 자주 나타난다. $e^z$ 가 $0$ 만 빼놓는 것이 예외가 아니라 한계다.

# 직관

정칙함수가 두 값을 모두 피하면 상이 $\mathbb C\setminus\lbrace 0,1\rbrace$ 안에 갇힌다. 이 영역의 보편 덮개가 상반평면이므로 피하는 함수는 상반평면으로 들어올려지고, 상반평면은 원판과 등각동치이므로 들어올린 함수는 유계가 된다. 유계인 전해석함수는 상수다. 두 값을 피하는 것이 유계성과 같은 힘을 갖는 이유가 이 덮개에 있다.

# 정의

## 본질적 특이점

$f$ 가 뚫린 원판 $0<\vert z-a\vert<r$ 에서 정칙이고 $a$ 에서의 Laurent 전개에 음의 차수 항이 무한히 많으면 $a$ 를 $f$ 의 **본질적 특이점**이라 한다. $e^{1/z}$ 의 $z=0$ 이 그런 점이다.

## 정규족

영역 $\Omega$ 위의 정칙함수족 $\mathcal F$ 가 **정규족**이라는 것은 $\mathcal F$ 의 모든 수열이 $\Omega$ 의 콤팩트 부분집합마다 균등수렴하는 부분수열을 갖는다는 뜻이다. 극한을 $\widehat{\mathbb C}$ 에서 잡으면 상수 $\infty$ 로의 수렴도 허용한다.

# 성질

## Casorati–Weierstrass 정리

$a$ 가 $f$ 의 본질적 특이점이면 임의의 뚫린 근방의 상이 $\mathbb C$ 에서 조밀하다.

증명은 귀류법이다. 어떤 $w$ 와 $\varepsilon>0$ 에 대해 상이 $\vert f(z)-w\vert\ge\varepsilon$ 를 만족하면 $g=1/(f-w)$ 가 유계 정칙이므로 $a$ 에서 제거 가능한 특이점을 갖고, 되돌리면 $f$ 는 $a$ 에서 극이거나 정칙이다.

## Montel 정리

콤팩트 집합마다 균등유계인 정칙함수족은 정규족이다. Cauchy 추정으로 도함수가 균등유계임을 얻어 동등연속성을 보이고 Arzelà–Ascoli 정리를 쓴다.

확장된 형태가 Picard 정리의 열쇠다. 서로 다른 두 값 $\alpha,\beta$ 를 모두 피하는 $\Omega$ 위의 정칙함수족은 $\widehat{\mathbb C}$ 값 함수로서 정규족이다[^1].

## 작은 Picard 정리

상수가 아닌 전해석함수 $f$ 에 대해 $\mathbb C\setminus f(\mathbb C)$ 는 많아야 한 점이다.

고전적 증명은 모듈러 람다 함수를 쓴다. $\lambda$ 는 상반평면 $\mathbb H$ 에서 $\mathbb C\setminus\lbrace 0,1\rbrace$ 로 가는 보편 덮개다. $f$ 가 두 값 $\alpha\neq\beta$ 를 피하면 아핀 변환으로 그 둘을 $0,1$ 로 옮길 수 있고, $\mathbb C$ 가 단순연결이므로 $f$ 는 $\mathbb H$ 로 가는 전해석함수 $F$ 로 들어올려진다. $\mathbb H$ 는 단위원판과 등각동치이므로 $F$ 는 유계이고, Liouville 정리로 상수다.

$e^z$ 는 $0$ 을 빼고 모든 값을 취하므로 "많아야 한 점" 은 개선되지 않는다.

## 큰 Picard 정리

$a$ 가 $f$ 의 본질적 특이점이면, $a$ 의 임의의 뚫린 근방에서 $f$ 는 많아야 한 값을 빼고 모든 복소값을 무한히 자주 취한다.

증명은 $f_n(z)=f(a+z/2^n)$ 꼴로 정의역을 수축시킨 족에 확장된 Montel 정리를 적용한다. $f$ 가 두 값을 피하면 이 족이 정규족이므로 부분수열이 유계 극한이나 $\infty$ 로 균등수렴하고, 어느 쪽이든 $a$ 가 제거 가능한 특이점이거나 극이 되어 본질성에 어긋난다.

작은 Picard 정리는 큰 정리의 따름이다. 상수 아닌 전해석함수가 다항식이 아니면 $\infty$ 가 본질적 특이점이고, 다항식이면 대수학의 기본정리로 모든 값을 취한다.

## 위수와 예외값

[Weierstrass 인수분해 정리](weierstrass-factorization.md)의 위수 $\rho$ 가 정수가 아니면 예외값이 없다. Hadamard 인수분해에서 $f-w$ 가 영점을 갖지 않으면 $f-w=e^{g}$ 이고 $g$ 는 차수 $\le\rho$ 다항식이므로 $\rho$ 가 정수가 된다. $e^z$ 의 위수 $1$ 이 정수인 것이 예외값 $0$ 을 허용하는 조건이다.

# 활용

- [해석적 연속](analytic-continuation.md): 큰 Picard 정리는 본질적 특이점 근방의 거동을 값 분포로 기술하므로, 자연 경계를 갖는 함수와 고립 특이점만 갖는 함수를 가르는 기준이 된다.
- [등각사상](conformal-mapping.md): Riemann 사상정리의 증명도 Montel 정리로 극값 문제의 해를 얻는다. 같은 정규족 논법이 두 정리를 잇는다.
- 값 분포 이론: Nevanlinna 이론은 예외값의 개수를 세는 대신 값 $w$ 가 취해지는 빈도를 특성함수로 재고, 그 결과의 특수한 경우로 Picard 정리를 얻는다.

[^1]: J. B. Conway, *Functions of One Complex Variable I*, 2nd ed., 12장 (Montel–Carathéodory 정리와 Picard 정리).

# 연관 문서

## 선수지식

- [Laurent 급수와 유수 정리](residue-theorem.md)
- [Weierstrass 인수분해 정리](weierstrass-factorization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #topology
