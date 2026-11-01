# Picard 정리

# 개요

**Picard 정리(Picard theorem)** 는 상수 아닌 전해석함수의 상이 복소평면에서 많아야 한 점만 빠진 집합이고, 본질적 특이점 근방에서는 그 빠진 값 하나를 빼고 모든 값이 무한히 자주 나타난다는 정리다. $e^z$ 는 $0$ 을 값으로 갖지 않는데, 복소평면 전체에서 정칙인 함수가 $0$ 과 $1$ 처럼 두 값을 함께 피할 수 있는지가 문제다. 두 값을 피하는 함수는 $\mathbb C\setminus\lbrace 0,1\rbrace$ 의 보편 덮개인 상반평면으로 들어올려 유계 함수로 바꿀 수 있고, 유계인 전해석함수는 상수이므로 상수 아닌 함수는 두 값을 피하지 못한다.

# 직관

상수 아닌 다항식 $p$ 에 대해 $p(z)-w=0$ 은 언제나 근을 가지므로, $p$ 는 [복소수](complex-numbers.md) 값을 하나도 빠뜨리지 않는다. $e^z$ 는 다르다. $e^z=0$ 인 $z$ 는 없지만, $w
e 0$ 이면 $e^z=w$ 의 해가 $z=log w+2pi ik$ 로 무한히 많다. 복소평면 전체에서 정칙인 함수가 $0$ 과 $1$ 처럼 두 값을 함께 빠뜨릴 수 있는가.

$f$ 가 $0$ 과 $1$ 을 모두 빠뜨린다고 하자. 그러면 $f$ 의 값은 두 점이 뚫린 평면 $mathbb Csetminuslbrace 0,1brace$ 안에 있다. 이 뚫린 평면을 상반평면에서 덮는 정칙함수 $lambda$ 가 있어서, $f$ 를 $f=lambdacirc F$ 로 쓰는 상반평면 값 함수 $F$ 가 생긴다. 상반평면은 정칙 전단사로 단위원판에 옮겨지므로 $F$ 는 복소평면 전체에서 정칙이고 값이 유계인 함수가 되고, 그런 함수는 상수다. 그러므로 $f$ 도 상수다.

# 정의

## 전해석함수와 예외값

$mathbb C$ 전체에서 정칙인 함수를 **전해석함수(entire function)** 라 한다. 정칙함수 $f$ 의 정의역 안의 집합 $U$ 에서 $f$ 가 값 $w$ 를 한 번도 취하지 않으면 $w$ 를 $U$ 에서의 **예외값(exceptional value)** 이라 한다. $e^z$ 는 전해석함수이고, $0$ 은 $mathbb C$ 에서 $e^z$ 의 예외값이다.

## 본질적 특이점

$f$ 가 뚫린 원판 $0ltert z-aertlt r$ 에서 정칙이고 $a$ 에서의 Laurent 전개(Laurent series)에 음의 차수 항이 무한히 많으면 $a$ 를 $f$ 의 **본질적 특이점(essential singularity)** 이라 한다.

$e^{1/z}=sum_{nge 0}z^{-n}/n!$ 은 음의 차수 항이 무한히 많으므로 $z=0$ 이 본질적 특이점이다. $z_k=1/(2pi ik)$ 에서 $e^{1/z_k}=1$ 이고 $z_k	o 0$ 이므로, $0$ 의 어느 뚫린 근방에서도 값 $1$ 이 무한히 자주 나온다. 반면 $0$ 은 어디서도 나오지 않는 예외값이다.

## 정규족

영역 $Omega$ 위의 정칙함수족 $mathcal F$ 가 **정규족(normal family)** 이라는 것은 $mathcal F$ 의 모든 수열이 $Omega$ 의 콤팩트 부분집합마다 [균등수렴](uniform-convergence.md)하는 부분수열을 갖는다는 뜻이다. 이 문서에서는 극한을 $widehat{mathbb C}=mathbb Ccuplbraceinftybrace$ 에서 잡아 상수 $infty$ 로의 수렴도 허용한다.

$lbrace z^nbrace_{nge 1}$ 은 $ert zertlt 1$ 에서 $0$ 으로, $ert zertgt 1$ 에서 $infty$ 로 국소 균등수렴하므로 두 영역 각각에서 정규족이다.

# 성질

## Casorati–Weierstrass 정리

$a$ 가 $f$ 의 본질적 특이점이면 임의의 뚫린 근방의 상이 $\mathbb C$ 에서 조밀하다.

증명은 귀류법이다. 어떤 $w$ 와 $\varepsilon\gt 0$ 에 대해 상이 $\vert f(z)-w\vert\ge\varepsilon$ 를 만족하면 $g=1/(f-w)$ 가 유계 정칙이므로 $a$ 에서 제거 가능한 특이점(removable singularity)을 갖고, $f=w+1/g$ 이므로 $f$ 는 $a$ 에서 극(pole)이거나 정칙이다. $a$ 가 본질적 특이점이라는 가정과 어긋난다.

## 두 값을 피하는 족의 정규성

서로 다른 두 값 $\alpha,\beta$ 를 모두 피하는 $\Omega$ 위의 정칙함수족은 $\widehat{\mathbb C}$ 값 함수로서 정규족이다.[^1] 이것이 [Montel 정리](montel-theorem.md)의 근본 판(fundamental normality test)이다. 유계인 족이 정규족이라는 Montel 정리의 기본 판은 Cauchy 추정으로 동등연속을 얻고 [Arzelà–Ascoli 정리](arzela-ascoli.md)를 써서 증명된다.

## 작은 Picard 정리

**작은 Picard 정리(little Picard theorem)** 는 다음이다. 상수가 아닌 전해석함수 $f$ 에 대해 $\mathbb C\setminus f(\mathbb C)$ 는 많아야 한 점이다.

고전적 증명은 모듈러 $\lambda$ 함수(modular lambda function)를 쓴다. $\lambda$ 는 상반평면 $\mathbb H$ 에서 $\mathbb C\setminus\lbrace 0,1\rbrace$ 로 가는 보편 덮개(universal cover)다. $f$ 가 두 값 $\alpha\neq\beta$ 를 피하면 아핀 변환으로 그 둘을 $0,1$ 로 옮길 수 있고, $\mathbb C$ 가 단순연결이므로 $f$ 는 $\mathbb H$ 로 가는 전해석함수 $F$ 로 들어올려진다. $\mathbb H$ 는 단위원판과 등각동치이므로 $F$ 는 유계이고, Liouville 정리(Liouville's theorem)로 상수다. 직관 절의 논증이 이것이다.

$e^z$ 는 $0$ 을 빼고 모든 값을 취하므로 "많아야 한 점" 은 개선되지 않는다.

## 큰 Picard 정리

**큰 Picard 정리(great Picard theorem)** 는 다음이다. $a$ 가 $f$ 의 본질적 특이점이면, $a$ 의 임의의 뚫린 근방에서 $f$ 는 많아야 한 값을 빼고 모든 복소값을 무한히 자주 취한다.

증명의 요지. 고리 $A=\lbrace 1/2\lt\vert z\vert\lt 2\rbrace$ 위에서 $f_n(z)=f(a+z/2^n)$ 을 본다. $f$ 가 $a$ 근방에서 두 값을 피하면 이 족이 두 값을 피하는 족의 정규성에 따라 정규족이므로, 부분수열이 원 $\vert z\vert=1$ 위에서 유계 극한이나 $\infty$ 로 균등수렴한다. 유계 극한이면 $f$ 가 원 $\vert z-a\vert=2^{-n\_k}$ 들 위에서 유계이고 최대 절댓값 원리로 그 사이 고리에서도 유계이므로 $a$ 가 제거 가능한 특이점이다. $\infty$ 이면 $1/f$ 에 같은 논법을 써서 $a$ 가 극이 된다. 어느 쪽이든 본질적 특이점이라는 가정과 어긋난다.

작은 Picard 정리는 큰 정리의 따름이다. 상수 아닌 전해석함수가 다항식이 아니면 $\infty$ 가 본질적 특이점이고, 다항식이면 대수학의 기본정리(fundamental theorem of algebra)로 모든 값을 취한다.

## 위수와 예외값

전해석함수의 위수(order) $\rho$ 가 유한하고 정수가 아니면 예외값이 없다. [Weierstrass 인수분해 정리](weierstrass-factorization.md)를 위수로 정밀하게 한 Hadamard 인수분해(Hadamard factorization)에서, $f-w$ 가 영점을 갖지 않으면 $f-w=e^{g}$ 이고 $g$ 는 차수 $\le\rho$ 인 다항식이다. 이때 $f$ 의 위수는 $g$ 의 차수와 같아 정수다. $e^z$ 는 위수 $1$ 에서 예외값 $0$ 을 갖는다.

# 활용

- [등각사상](conformal-mapping.md). [Riemann 사상정리](riemann-mapping-theorem.md)의 증명도 Montel 정리로 극값 문제의 해를 얻는다.
- 값 분포 이론(value distribution theory). Nevanlinna 이론(Nevanlinna theory)은 예외값의 개수를 세는 대신 값 $w$ 가 취해지는 빈도를 특성함수로 재고, 그 결과의 특수한 경우로 Picard 정리를 얻는다.

[^1]: J. B. Conway, *Functions of One Complex Variable I*, 2nd ed., 12장 (Montel–Carathéodory 정리와 Picard 정리).

# 연관 문서

## 선수지식

- [유수 정리](residue-theorem.md)
- [Weierstrass 인수분해 정리](weierstrass-factorization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #topology
