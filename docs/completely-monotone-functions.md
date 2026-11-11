# 완전 단조 함수

# 개요

**완전 단조 함수(completely monotone function)** 는 줄어들고, 줄어드는 속도도 줄어들고, 그런 식으로 모든 차수의 도함수의 부호가 번갈아 나오는 함수다. 반감기가 다른 방사성 원소 여러 개를 섞은 시료에서 남은 양은 지수함수 $e^{-\lambda s}$ 의 가중합으로 줄어든다. 거꾸로 줄어드는 곡선 하나를 받았을 때, 그것이 지수적 감소를 섞은 것으로 적히는지를 곡선의 모양만으로 판정할 수 있는가가 이런 물음이다.

Bernstein 정리는 도함수의 부호가 끝까지 번갈아 나오는 것과 지수적 감소의 혼합으로 적히는 것이 동치라고 답한다.

# 직관

붕괴율 $\lambda$ 인 원소 하나는 시간 $s$ 뒤에 $e^{-\lambda s}$ 만큼 남는다. 이 함수를 미분하면 $-\lambda e^{-\lambda s}$, $\lambda^2e^{-\lambda s}$, $-\lambda^3e^{-\lambda s}$ 으로 부호가 번갈아 나온다.

붕괴율이 $1$ 과 $3$ 인 원소를 반씩 섞으면 남은 양은 $f(s)=\frac12e^{-s}+\frac12e^{-3s}$ 이다. 각 항의 $n$ 계 도함수의 부호가 $(-1)^n$ 이므로 그 합도 같은 부호를 갖는다. 붕괴율이 연속적으로 퍼져 있으면 가중합이 적분이 되고, 부호의 규칙은 그대로 남는다.

$e^{-s^2}$ 은 줄어드는 곡선이지만 이차 도함수 $(4s^2-2)e^{-s^2}$ 이 $s\lt 1/\sqrt2$ 에서 음수다. 그러므로 $e^{-s^2}$ 은 어떤 지수적 감소의 혼합으로도 적히지 않는다. Bernstein 정리는 이 부호 검사가 혼합 여부를 정확히 가른다고 말한다.

# 정의

$(0,\infty)$ 에서 무한 번 미분가능한 함수 $f$ 가 모든 $n\ge 0$ 과 $s\gt 0$ 에 대해 다음을 만족하면 $f$ 를 **완전 단조** 라 한다.

$$
(-1)^nf^{(n)}(s)\ge 0
$$

$n=0$ 은 $f\ge 0$, $n=1$ 은 $f$ 가 줄어든다는 것, $n=2$ 는 $f$ 가 아래로 볼록하다는 것이다.

직관 절의 $\frac12e^{-s}+\frac12e^{-3s}$ 는 완전 단조이고 $e^{-s^2}$ 은 $n=2$ 에서 조건을 어긴다. $1/s$ 와 $s^{-1/2}$ 도 완전 단조다.

# 성질

## Bernstein 정리

*정리.* $f$ 가 $(0,\infty)$ 에서 완전 단조인 것과, $\lbrack 0,\infty)$ 위의 음이 아닌 측도 $\mu$ 가 있어 모든 $s\gt 0$ 에서 다음이 성립하는 것은 동치다. 이때 $\mu$ 는 하나뿐이다[^1].

$$
f(s)=\int_{\lbrack 0,\infty)}e^{-st}\thinspace d\mu(t)
$$

$f(s)=\frac12e^{-s}+\frac12e^{-3s}$ 은 $t=1$ 과 $t=3$ 에 무게 $\frac12$ 씩을 둔 $\mu$ 이고, $1/s$ 는 $\lbrack 0,\infty)$ 위의 길이 측도다. 우변은 측도 $\mu$ 의 [Laplace 변환](laplace-transform.md)이다.

*증명의 요지.* 우변이 완전 단조인 것은 적분 안에서 미분하면 $(-1)^nf^{(n)}(s)=\int t^ne^{-st}\thinspace d\mu(t)\ge 0$ 이 되는 데서 나온다. 거꾸로 $a,h\gt 0$ 을 잡고 수열 $c_n=f(a+nh)$ 를 본다. $(-1)^k(\Delta^kc)\_n$ 은 $h^k(-1)^kf^{(k)}$ 의 평균값으로 적히므로 음이 아니고, [Hausdorff 적률 문제](hausdorff-moment-problem.md)의 정리로 $c_n$ 은 $\lbrack 0,1\rbrack$ 위의 측도의 적률이다. 적률 변수 $x$ 를 $x=e^{-ht}$ 로 바꾸면 $f(a+nh)=\int e^{-nht}\thinspace d\mu_h(t)$ 이고, $h\to 0$ 과 $a\to 0$ 에서 측도의 극한을 잡으면 $\mu$ 가 나온다. 유일성은 Laplace 변환의 유일성이다. ∎

## 곱과 합성

완전 단조 함수 둘의 합은 완전 단조다. 두 측도의 합성곱의 Laplace 변환이 두 변환의 곱이므로 곱도 완전 단조다. $f$ 가 완전 단조이고 $g$ 가 양수이며 $g'$ 이 완전 단조이면 $f\circ g$ 도 완전 단조다. $e^{-\sqrt s}$ 는 $f(u)=e^{-u}$ 와 $g(s)=\sqrt s$ 로 이 꼴이다.

# 활용

- 음이 아닌 확률변수 $X$ 의 분포는 $s\mapsto\mathbb E\lbrack e^{-sX}\rbrack$ 로 정해진다. Bernstein 정리로 이런 함수는 정확히 $f(0+)=1$ 인 완전 단조 함수이고, [적률생성함수](moment-generating-function.md)를 음의 실수에서 본 것이다.
- [구 채우기](sphere-packing.md)의 보편 최적성은 거리 제곱의 완전 단조 함수로 주어진 모든 위치 에너지에서 격자가 에너지를 최소화한다는 진술이다. Bernstein 정리로 그런 위치 에너지는 Gauss 함수 $e^{-tr^2}$ 의 혼합이므로, Gauss 함수마다 최소화를 보이면 된다.
- [Schoenberg 정리](schoenberg-theorem.md)는 $f(\Vert x\Vert^2)$ 이 모든 차원에서 양의 정부호 핵인 것과 $f$ 가 완전 단조인 것이 동치라고 말한다[^2]. [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)의 Gauss 핵이 이 꼴이다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley, 1971, §XIII.4 — 완전 단조 함수와 Bernstein 정리.
[^2]: I. J. Schoenberg, "Metric spaces and completely monotone functions", *Annals of Mathematics* 39 (1938) 811–841.

# 연관 문서

## 선수지식

- [Hausdorff 적률 문제](hausdorff-moment-problem.md)
- [Laplace 변환](laplace-transform.md)

## 더 알아보기

- [Schoenberg 정리](schoenberg-theorem.md)

#analysis #probability #measure_theory
