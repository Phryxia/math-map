# Fekete 보조정리

# 개요

**Fekete 보조정리(Fekete's lemma)** 는 실수열 $(a_n)$ 이 모든 $m,n\ge 1$ 에서 $a_{m+n}\le a_m+a_n$ 을 만족하면 $a_n/n$ 이 수렴하고 그 극한이 $\inf_n a_n/n$ 이라는 정리다. 극한은 $-\infty$ 일 수 있다. Fekete 가 1923 년에 증명했다.[^1]

길이 $n$ 인 대상의 개수나 크기가 $n$ 에 대해 지수적으로 자랄 때, 그 지수를 정확히 계산하지 않고도 증가율이 존재함을 보이는 데 쓴다. 증명에는 [수열의 극한](limits.md)의 상극한과 하극한만 쓴다.

# 직관

$0$ 과 $1$ 로 된 길이 $n$ 인 문자열 가운데 $11$ 이 연달아 나오지 않는 것의 개수를 $c_n$ 이라 한다. $c_1=2$, $c_2=3$, $c_3=5$ 이다. 개수가 대략 $\lambda^n$ 처럼 자란다면 $\lambda$ 가 얼마인지, 곧 $\frac1n\log c_n$ 이 수렴하는지 알고 싶다.

길이 $m+n$ 인 문자열을 앞의 $m$ 글자와 뒤의 $n$ 글자로 자르면, 두 조각에도 $11$ 이 연달아 나오지 않는다. 따라서 $c_{m+n}\le c_mc_n$ 이고 $a_n=\log c_n$ 은 $a_{m+n}\le a_m+a_n$ 을 만족한다. $m$ 을 하나 고정하고 $n=qm+r$ ($0\le r\lt m$) 로 나누면 이 부등식을 $q$ 번 써서 $a_n\le qa_m+a_r$ 을 얻는다. 양변을 $n$ 으로 나누고 $n\to\infty$ 로 보내면 $q/n\to 1/m$ 이고 $a_r/n\to 0$ 이므로 $\frac1n a_n$ 의 상극한이 $a_m/m$ 이하다.

$m$ 은 아무것이나 골라도 되므로 상극한은 $\inf_m a_m/m$ 이하다. 하극한은 언제나 $\inf_m a_m/m$ 이상이므로 둘이 같고 극한이 존재한다. 이 예에서는 $c_n$ 이 [Fibonacci 수](fibonacci-numbers.md) $F_{n+2}$ 이므로 극한이 $\log\frac{1+\sqrt5}{2}$ 이지만, 증명에는 $c_n$ 의 값이 쓰이지 않았다.

# 정의

## 부분가법 수열

실수열 $(a_n)\_{n\ge 1}$ 이 모든 $m,n\ge 1$ 에서

$$
a_{m+n}\le a_m+a_n
$$

을 만족하면 **부분가법(subadditive)** 이라 한다. 부등호가 반대이면 **초가법(superadditive)** 이라 한다. 양수열 $(b_n)$ 이 $b_{m+n}\le b_mb_n$ 을 만족하면 **부분곱셈적(submultiplicative)** 이라 하고, 이것은 $\log b_n$ 이 부분가법인 것과 같다.

# 성질

## Fekete 보조정리

> **정리.** $(a_n)$ 이 부분가법이면 $\lim_{n\to\infty}a_n/n=\inf_{n\ge 1}a_n/n$ 이다.

증명은 직관 절의 계산이다. $\inf_m a_m/m=-\infty$ 이면 같은 계산이 상극한이 $-\infty$ 임을 준다.

## 변형

- 초가법 수열에서는 $-a_n$ 에 적용해 $\lim a_n/n=\sup a_n/n$ 이다.
- 부분곱셈적 양수열에서는 $\lim b_n^{1/n}=\inf b_n^{1/n}$ 이다.
- 상수 $C$ 에 대해 $a_{m+n}\le a_m+a_n+C$ 이면 $a_n+C$ 가 부분가법이므로 $a_n/n$ 이 수렴한다. 두 쪽 부등식 $a_m+a_n-C\le a_{m+n}\le a_m+a_n+C$ 가 성립하면 극한이 유한하다.

# 활용

- **회전수.** [Poincaré 회전수](poincare-rotation-number.md)의 존재 증명에서 올림의 반복 $F^n(0)$ 이 두 쪽 부등식을 $C=1$ 로 만족한다.
- **엔트로피.** [Kolmogorov–Sinai 엔트로피](kolmogorov-sinai-entropy.md)의 분할 엔트로피 $H(\mathcal P\vee\cdots\vee T^{-(n-1)}\mathcal P)$ 와 [유한형 이동](shifts-of-finite-type.md)의 위상 엔트로피 $\log\vert B\_n\vert$ 가 부분가법이어서, $n$ 으로 나눈 극한이 정의된다.
- **Shannon 용량.** [Lovász 세타 함수](lovasz-theta.md)가 상한을 주는 그래프의 Shannon 용량 $\Theta(G)=\lim\alpha(G^{\boxtimes n})^{1/n}$ 은 독립수가 초곱셈적이어서 존재한다.
- **스펙트럼 반지름.** 행렬 노름 $\Vert A^n\Vert$ 는 부분곱셈적이므로 $\lim\Vert A^n\Vert^{1/n}$ 이 존재한다. 그 값이 고윳값의 절댓값의 최댓값이라는 것이 Gelfand 공식(Gelfand's formula)이다.
- **자기회피 보행.** 정수 격자 위에서 같은 점을 두 번 지나지 않는 길이 $n$ 인 경로의 개수 $c_n$ 은 $c_{m+n}\le c_mc_n$ 이므로 연결 상수(connective constant) $\lim c_n^{1/n}$ 이 존재한다.

부분가법 확률과정으로 넓힌 것이 [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)이고, 가법인 경우가 [에르고딕 정리](ergodic-theorem.md)다.

[^1]: M. Fekete, "Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten", *Mathematische Zeitschrift* 17 (1923), 228–249.

# 연관 문서

## 선수지식

- [수열의 극한](limits.md)

## 더 알아보기

- [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)

#analysis #combinatorics #probability
