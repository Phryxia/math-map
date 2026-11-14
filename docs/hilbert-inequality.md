# Hilbert 부등식

# 개요

**Hilbert 부등식(Hilbert's inequality)** 은 두 수열을 첨자의 합으로 나누어 곱한 이중합이 두 수열의 제곱합의 제곱근의 곱의 $\pi$ 배를 넘지 않는다는 부등식이다. $m$ 행 $n$ 열의 성분이 $1/(m+n)$ 인 무한 행렬을 수열에 곱할 때, 각 행의 합 $\sum_n 1/(m+n)$ 이 발산하므로 결과가 제곱합이 유한한 수열로 남는지 바로 알 수 없다. 이 부등식은 행마다 무게를 달리 준 행의 합을 써서 이 행렬이 제곱합을 $\pi^2$ 배 넘게 키우지 않는다고 답한다.

# 직관

음이 아닌 수열 $a,b$ 에 대해 이중합 $\sum_{m,n\ge 1}a_mb_n/(m+n)$ 을 위에서 누르려 한다. 성분마다 $a_mb_n\le\frac12(a_m^2+b_n^2)$ 로 누르면 $a_m^2$ 에 행의 합 $\sum_n 1/(m+n)$ 이 곱해지는데 이 합은 조화급수처럼 발산한다. 상계가 무한대로 나와 쓸 수 없다.

행의 합이 발산하는 것은 큰 $n$ 의 성분이 $a_m^2$ 에 모두 같은 무게로 붙기 때문이다. 그래서 $a_mb_n$ 을 $\sqrt{m/n}$ 과 $\sqrt{n/m}$ 을 곱한 두 인수로 나누어 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓴다. 그러면 $a_m^2$ 에 붙는 무게는 다음 합이 된다.

$$
\sum_{n\ge 1}\frac{1}{m+n}\sqrt{\frac mn}\le\int_0^\infty\frac{1}{m+y}\sqrt{\frac my}\thinspace dy=\int_0^\infty\frac{dt}{(1+t)\sqrt t}=\pi
$$

피적분함수가 $y$ 에 대해 감소하므로 합이 적분 이하이고, $t=y/m$ 으로 바꾸면 $m$ 이 사라진다. 무게가 행마다 $\pi$ 이하로 유계이므로 이중합이 $\pi\sqrt{\sum a_m^2}\sqrt{\sum b_n^2}$ 이하가 된다.

# 정의

수열 $a,b\in\ell^2$ 에 대해 다음 이중합을 **Hilbert 형식(Hilbert form)** 이라 하고, 성분이 $1/(m+n)$ 인 무한 행렬을 그 행렬이라 한다.

$$
H(a,b)=\sum_{m,n\ge 1}\frac{a_mb_n}{m+n}
$$

$\ell^2$ 는 [Lᵖ 공간](lp-spaces.md)의 $p=2$ 이고 자연수 위의 셈측도에 대한 경우다. $a=b=(1,1,0,0,\dots)$ 이면 다음과 같다.

$$
H(a,b)=\frac12+\frac13+\frac13+\frac14=\frac{17}{12}
$$

성분이 $1/(m+n-1)$ 인 행렬을 Hilbert 행렬(Hilbert matrix)이라 한다.

# 성질

## 부등식의 진술

$a,b\in\ell^2$ 이면 다음이 성립한다[^1].

$$
\vert H(a,b)\vert\le\pi\thinspace\Vert a\Vert\_2\thinspace\Vert b\Vert\_2
$$

$a$ 나 $b$ 가 $0$ 이 아니면 등호는 성립하지 않는다. 상수 $\pi$ 는 줄일 수 없다. $\varepsilon\gt 0$ 에서 $a_n=b_n=n^{-1/2-\varepsilon}$ 을 넣으면 $\varepsilon\to 0$ 에서 $H(a,b)/(\Vert a\Vert\_2\Vert b\Vert\_2)$ 가 $\pi$ 로 간다.

## Schur 판정법

음이 아닌 행렬 $K_{mn}$ 과 양수 $w_n$ 이 모든 $m,n$ 에서 다음을 만족한다고 하자.

$$
\sum_n K_{mn}w_n\le Cw_m,\qquad\sum_m K_{mn}w_m\le Cw_n
$$

그러면 $\sum_{m,n}K_{mn}a_mb_n\le C\Vert a\Vert\_2\Vert b\Vert\_2$ 다. 이것을 Schur 판정법(Schur test)이라 한다. 증명은 $K_{mn}a_mb_n$ 을 $\bigl(K_{mn}w_n/w_m\bigr)^{1/2}a_m$ 과 $\bigl(K_{mn}w_m/w_n\bigr)^{1/2}b_n$ 의 곱으로 쓰고 Cauchy–Schwarz 부등식을 쓰는 것이다.

직관 절의 계산은 $K_{mn}=1/(m+n)$, $w_n=n^{-1/2}$, $C=\pi$ 인 경우다. I. Schur 는 성분이 $1/(m+n-1)$ 인 Hilbert 행렬의 노름도 $\pi$ 임을 보였다.

## 적분 꼴

$f,g\in L^2(0,\infty)$ 이면 다음이 성립한다.

$$
\int_0^\infty\int_0^\infty\frac{f(x)g(y)}{x+y}\thinspace dx\thinspace dy\le\pi\thinspace\Vert f\Vert\_2\thinspace\Vert g\Vert\_2
$$

증명은 무게 $w(y)=y^{-1/2}$ 의 Schur 판정법이고, 직관 절의 적분이 그대로 상수가 된다. $1\lt p\lt\infty$ 이고 $p'$ 이 켤레 지수이면 같은 방법으로 $\Vert f\Vert\_2\Vert g\Vert\_2$ 를 $\Vert f\Vert\_p\Vert g\Vert\_{p'}$ 로, $\pi$ 를 $\pi/\sin(\pi/p)$ 로 바꾼 부등식이 나오고, 이 상수도 줄일 수 없다[^1].

# 활용

- [큰 체](large-sieve.md). 쌍대 꼴의 교차항을 누르는 데 H. L. Montgomery 와 R. C. Vaughan 의 일반화된 Hilbert 부등식을 쓴다. 서로 $\delta$ 이상 떨어진 실수 $\lambda_r$ 에 대해 다음이 성립한다[^2].

$$
\Bigl\vert\sum_{r\ne s}\frac{c_r\bar c_s}{\lambda_r-\lambda_s}\Bigr\vert\le\frac{\pi}{\delta}\sum_r\vert c_r\vert^2
$$

- [행렬 분해](matrix-factorizations.md)의 조건수. 크기 $n$ 의 Hilbert 행렬은 노름이 $\pi$ 이하로 유계이지만 가장 작은 고윳값이 지수적으로 작아져 조건수가 지수적으로 커진다.
- [Riesz–Thorin 정리](riesz-thorin.md). 무게가 모두 $1$ 인 Schur 판정법은 행의 합과 열의 합으로 얻은 $\ell^1$ 과 $\ell^\infty$ 추정을 보간한 것으로도 증명된다.

[^1]: G. H. Hardy, J. E. Littlewood, G. Pólya, Inequalities, 2nd ed., Cambridge University Press (1952), 9 장.
[^2]: H. L. Montgomery, R. C. Vaughan, "Hilbert's inequality", Journal of the London Mathematical Society (2) 8 (1974), 73–82.

# 연관 문서

## 선수지식

- [Cauchy–Schwarz 부등식](cauchy-schwarz.md)
- [Lᵖ 공간](lp-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #number_theory
