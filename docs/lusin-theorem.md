# Lusin 정리

# 개요

**Lusin 정리(Lusin's theorem)** 는 구간 위의 [가측함수](measurable-functions.md)가 길이가 얼마든지 작은 집합 하나를 빼면 나머지에서 연속이라는 정리다. 유리수에서 $1$, 무리수에서 $0$ 인 함수는 $[0,1]$ 의 모든 점에서 불연속이다. 그런데 유리수를 길이의 합이 $\varepsilon$ 인 열린구간들로 덮어 빼면 남은 점은 모두 무리수이고, 거기서 함수는 상수 $0$ 이어서 연속이다. Lusin 정리는 모든 가측함수에서 이렇게 작은 집합을 빼 연속인 부분을 얻을 수 있음을 증명해, 가측함수에 관한 문제를 연속함수에 관한 문제로 가져간다.

# 직관

가측함수는 연속함수와 거리가 멀어 보이지만, 측도로 재면 거의 연속함수다.

증명은 [Egorov 정리](egorov-theorem.md)를 쓴다. 연속함수열로 근사한 다음 수렴이 균등하지 않은 점들을 작은 집합으로 모아 빼면, 남은 곳에서 연속함수의 균등극한이 되어 연속이다.

$[0,1]$ 에서 유리수에서 $1$, 무리수에서 $0$ 인 함수 $f$ 는 모든 점에서 불연속이다. 어느 점 근처에도 유리수와 무리수가 함께 있어서 값 $1$ 과 $0$ 이 섞이기 때문이다.

유리수를 $q_1,q_2,\dots$ 로 줄 세우고 $q_n$ 을 길이 $\varepsilon/2^n$ 인 열린구간으로 덮는다. 이 구간들의 합집합 $U$ 는 길이가 $\varepsilon$ 이하이고 유리수를 전부 포함한다. 남은 집합 $F=[0,1]\setminus U$ 에는 무리수만 있으므로 $f$ 는 $F$ 위에서 상수 $0$ 이고, $F$ 위로 제한한 $f$ 는 연속이다.

여기서 연속인 것은 $F$ 로 제한한 함수다. $F$ 의 점 근처에도 유리수가 있으므로 $[0,1]$ 위의 $f$ 는 여전히 불연속이지만, $F$ 의 점만 보면 값이 모두 $0$ 이다. Lusin 정리는 모든 가측함수에서 이런 $F$ 를 찾을 수 있다는 정리다.

# 정의

## 정리

$f:[a,b]\to\mathbb R$ 가 Lebesgue 가측이면, 임의의 $\varepsilon\gt 0$ 에 대해 닫힌집합 $F\subseteq[a,b]$ 가 존재해 $\lambda([a,b]\setminus F)\lt\varepsilon$ 이고 $F$ 로 제한한 $f\vert\_F$ 가 연속이다. 여기서 $\lambda$ 는 Lebesgue 측도다.

$f$ 가 거의 어디서나 유한한 확장실숫값 함수여도 같다. 값이 $\pm\infty$ 인 점은 측도 $0$ 인 집합이므로 작은 열린집합으로 덮어 뺀다.

## 연속 확장

$F$ 가 닫힌집합이므로 Tietze 확장 정리(Tietze extension theorem)로 $f\vert\_F$ 를 $[a,b]$ 전체의 연속함수 $g$ 로 넓힐 수 있다([분리공리](separation-axioms.md)). 그러면 $\lambda(\lbrace f\ne g\rbrace)\lt\varepsilon$ 이고, $\lvert f\rvert\le M$ 이면 $\lvert g\rvert\le M$ 으로 잡을 수 있다. 이 형태도 Lusin 정리라 부른다.

# 성질

## 증명

$f$ 가 유계라고 둔다. 유계가 아니면 $\arctan f$ 에 적용한 뒤 $\tan$ 을 합성한다. 유계 가측함수는 $L^1$ 에 들고, $[a,b]$ 위의 연속함수가 $L^1$ 에서 조밀하므로([Lᵖ 공간](lp-spaces.md)) $\int\lvert g_n-f\rvert\thinspace d\lambda\to 0$ 인 연속함수열 $g_n$ 이 있다. 부분열을 잡으면 $g_n$ 이 거의 어디서나 $f$ 로 수렴한다.

Egorov 정리로 $\lambda(E)\lt\varepsilon/2$ 이고 $[a,b]\setminus E$ 에서 $g_n$ 이 $f$ 로 균등수렴하는 $E$ 를 잡는다. Lebesgue 측도는 안쪽 정칙이므로 $[a,b]\setminus E$ 안에 $\lambda\bigl(([a,b]\setminus E)\setminus F\bigr)\lt\varepsilon/2$ 인 닫힌집합 $F$ 가 있다. $F$ 위에서 연속함수 $g_n$ 이 $f$ 로 균등수렴하므로 $f\vert\_F$ 는 연속이고 $\lambda([a,b]\setminus F)\lt\varepsilon$ 이다.

## 역

역도 성립한다. 모든 $\varepsilon$ 에서 위와 같은 닫힌집합 $F_\varepsilon$ 이 있으면 $f$ 는 가측이다. $F_{1/k}$ 들의 합집합 밖은 측도가 $0$ 이고, 각 $F_{1/k}$ 위에서 $\lbrace f\gt c\rbrace\cap F_{1/k}$ 는 $F_{1/k}$ 의 상대 열린집합이므로 Borel 집합이다. Lebesgue 측도가 완비이므로 영집합 위의 값은 가측성에 영향이 없다.

## 일반 측도 공간

$X$ 가 국소 콤팩트 Hausdorff 공간이고 $\mu$ 가 Radon 측도이면, $\mu(A)\lt\infty$ 인 집합 $A$ 밖에서 $0$ 인 가측함수 $f$ 에 대해 $\mu(\lbrace f\ne g\rbrace)\lt\varepsilon$ 인 콤팩트 받침 연속함수 $g$ 가 존재한다. 증명은 같은 구조이고 Lebesgue 측도의 정칙성 자리에 Radon 측도의 정칙성을 쓴다.

## 연속성의 뜻

$f\vert\_F$ 가 연속이라는 것은 $f$ 가 $F$ 의 점에서 연속이라는 것과 다르다. 직관 절의 함수는 $F$ 로 제한하면 연속이지만 $[0,1]$ 의 함수로서는 어느 점에서도 연속이 아니다. 정리는 제한한 함수의 연속성만 준다.

# 활용

- Littlewood 의 세 원리(Littlewood's three principles)는 가측집합이 거의 유한 개 구간의 합집합이고, 가측함수가 거의 연속이며, 수렴하는 가측함수열이 거의 균등수렴한다는 세 진술이다. 둘째가 Lusin 정리이고 셋째가 Egorov 정리다.
- 가측함수는 연속함수열의 거의 어디서나 극한이다. 연속 확장 형태로 $\lambda(\lbrace f\ne g_n\rbrace)\lt 2^{-n}$ 인 연속함수 $g_n$ 을 잡으면 $\sum_n 2^{-n}\lt\infty$ 이므로 거의 모든 점이 유한 개의 $n$ 에서만 $f\ne g_n$ 을 만족하고, 그 점에서 $g_n\to f$ 다.
- 증명 절과 순서를 바꾸어 쓸 수도 있다. Rudin 의 교과서는 측도의 정칙성에서 Lusin 정리를 먼저 증명하고, 그 연속 확장 형태로 콤팩트 받침 연속함수가 Lᵖ 공간에서 조밀함을 유도한다[^1].

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed. (1987), 정리 2.24 와 정리 3.14.

# 연관 문서

## 선수지식

- [Egorov 정리](egorov-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis #topology #theorem
