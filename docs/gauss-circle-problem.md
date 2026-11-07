# Gauss 원 문제

# 개요

**Gauss 원 문제(Gauss circle problem)** 는 원점을 중심으로 한 원 안에 놓인 정수 좌표점의 개수가 원의 넓이와 얼마나 차이 나는지를 묻는 문제다. 반지름 $10$ 인 원 안에는 정수점이 $317$ 개 있고 넓이는 $100\pi=314.16\ldots$ 이다. 반지름이 커질 때 이 차이가 반지름의 몇 제곱 크기로 자라는지를 정하는 것이 이 문제이고, 점들을 단위 정사각형으로 바꾸어 세거나 [Poisson 합 공식](poisson-summation.md)으로 차이를 진동하는 급수로 적어 다룬다.

# 직관

반지름 $2$ 인 원 $a^2+b^2\le 4$ 안의 정수점은 원점 $1$ 개, $(\pm1,0)$ 과 $(0,\pm1)$ 의 $4$ 개, $(\pm1,\pm1)$ 의 $4$ 개, $(\pm2,0)$ 과 $(0,\pm2)$ 의 $4$ 개로 $13$ 개다. 넓이는 $4\pi=12.57\ldots$ 이다.

정수점 $(a,b)$ 마다 그 점을 중심으로 한 변의 길이 $1$ 인 정사각형을 놓는다. 정사각형들은 겹치지 않고 하나의 넓이가 $1$ 이므로, 점의 개수는 정사각형들의 넓이 합과 같다. 정사각형의 한 점은 중심에서 $\frac{\sqrt2}{2}$ 이내에 있으므로, 반지름 $r$ 인 원 안의 점에 놓인 정사각형은 반지름 $r+\frac{\sqrt2}2$ 인 원 안에 들어가고, 반지름 $r-\frac{\sqrt2}2$ 인 원을 덮는다. 따라서 점의 개수는 $\pi(r-\frac{\sqrt2}2)^2$ 와 $\pi(r+\frac{\sqrt2}2)^2$ 사이에 있고, 넓이 $\pi r^2$ 와의 차이는 $\sqrt2\pi r+\frac\pi2$ 이하다.

이 차이는 원둘레 근처의 정사각형이 원 안팎에 걸치는 데서 생기고, 그런 정사각형은 둘레 길이에 비례하는 개수만큼 있다. 반지름 $10$ 에서 실제 차이는 $2.84$ 로 이 상한 $46$ 보다 훨씬 작다. 원둘레를 따라 걸친 조각들이 넘치는 쪽과 모자라는 쪽으로 서로 상쇄되기 때문이다.

# 정의

$x\ge 0$ 에 대해

$$
N(x)=\char35{}\lbrace(a,b)\in\mathbb Z^2:a^2+b^2\le x\rbrace,\qquad P(x)=N(x)-\pi x
$$

로 둔다. $N(x)$ 는 반지름 $\sqrt x$ 인 원 안의 정수점 수이고, $P(x)$ 를 원 문제의 **오차항(error term)** 이라 한다. $n$ 을 두 정수의 제곱의 합으로 쓰는 방법의 수를 $r_2(n)$ 이라 하면 $N(x)=\sum_{0\le n\le x}r_2(n)$ 이다. 모든 $\varepsilon\gt 0$ 에서 $P(x)=O(x^{\theta+\varepsilon})$ 인 $\theta$ 의 하한을 $\theta^\ast$ 로 적고, $\theta^\ast$ 를 정하는 문제를 Gauss 원 문제라 한다. 직관 절에서 $N(4)=13$, $P(4)=0.43\ldots$, $N(100)=317$, $P(100)=2.84\ldots$ 이다.

# 성질

## Gauss 의 상계

직관 절의 정사각형 논증으로 $\lvert P(x)\rvert\le\sqrt{2x}\thinspace\pi+\frac\pi2$ 이고, $\theta^\ast\le\frac12$ 다.

## 약수 문제와의 관계

Jacobi 의 두 제곱수 정리(Jacobi's two-square theorem)에 따라 $n\ge 1$ 에서

$$
r_2(n)=4\sum_{d\mid n}\chi(d)
$$

이다. $\chi$ 는 $d$ 가 짝수이면 $0$, $d\equiv 1\pmod 4$ 이면 $1$, $d\equiv 3\pmod 4$ 이면 $-1$ 인 함수다. 따라서 $N(x)-1$ 은 $4\sum_{ab\le x}\chi(a)$ 이고, [Dirichlet 약수 문제](dirichlet-divisor-problem.md)의 쌍곡선 아래 격자점 합에서 $a$ 에 $\chi(a)$ 를 곱한 것이다. 같은 쌍곡선 방법으로 주항 $4x\sum_a\chi(a)/a=4x\cdot\frac\pi4=\pi x$ 와 $O(\sqrt x)$ 의 오차가 나온다.

## Hardy 의 항등식

$x$ 가 정수가 아니면

$$
P(x)=\sqrt x\sum_{n=1}^{\infty}\frac{r_2(n)}{\sqrt n}\thinspace J_1\bigl(2\pi\sqrt{nx}\bigr)
$$

이다[^1]. $J_1$ 은 1 차 [Bessel 함수](bessel-functions.md)다. 원판의 지시함수에 Poisson 합 공식을 적용하면 정수점 위의 합이 [Fourier 변환](fourier-transform.md)의 정수점 위 합과 같고, 반지름 $R$ 인 원판의 Fourier 변환은 $\xi$ 에서 $RJ_1(2\pi R\vert\xi\vert)/\vert\xi\vert$ 다. $\xi=0$ 항이 넓이 $\pi x$ 이고, $\vert\xi\vert^2=n$ 인 $r_2(n)$ 개의 항을 모으면 위 급수다. 지시함수가 불연속이어서 급수는 조건수렴하고, 증명은 지시함수를 매끄럽게 한 뒤 극한을 취한다. $J_1(t)\approx\sqrt{2/(\pi t)}\cos(t-\frac{3\pi}4)$ 를 넣으면 $P(x)$ 는 진폭이 $x^{1/4}$ 크기인 코사인들의 합이다.

## 상계의 개선과 하계

Sierpiński 는 Voronoi 의 방법으로 $P(x)=O(x^{1/3})$, 곧 $\theta^\ast\le\frac13$ 을 증명했다[^2]. 이후의 개선은 Hardy 의 항등식을 절단한 유한합을 지수합으로 보고 상쇄를 얻는 것이며, Huxley 는 약수 문제와 같은 $\theta^\ast\le\frac{131}{416}$ 을 얻었다[^3]. 반대로 Hardy 는 $P(x)$ 가 $x^{1/4}$ 의 상수배보다 큰 값과 그 음수보다 작은 값을 무한히 자주 가진다는 것을 증명했고, $\theta^\ast\ge\frac14$ 이다[^1].

# 활용

- 두 제곱수의 합의 평균. $N(x)/x\to\pi$ 이므로, 두 제곱수의 합으로 쓰는 방법의 수 $r_2(n)$ 은 평균으로 $\pi$ 다. 개별 $r_2(n)$ 은 $n\equiv 3\pmod 4$ 이면 $0$ 이고 $n$ 이 $1\pmod 4$ 인 소수를 많이 가지면 커진다.
- 원환면의 고윳값 세기. 평평한 원환면 $\mathbb R^2/(2\pi\mathbb Z)^2$ 위 [Laplace 연산자](laplace-operator.md) $-\Delta$ 의 고윳값은 $a^2+b^2$ 이고 고유함수는 $e^{i(as+bt)}$ 다. 고윳값이 $x$ 이하인 고유함수의 개수가 $N(x)$ 이므로, [Weyl 법칙](weyl-law.md)의 오차항이 원 문제의 $P(x)$ 다.
- 일반 영역의 격자점. 경계가 매끄럽고 곡률이 양수인 볼록 영역을 $t$ 배 늘린 것 안의 격자점 수도 넓이와 $O(t^{2/3})$ 이하로 차이 나고, 지수를 줄이는 방법은 원 문제와 같다.

[^1]: G. H. Hardy, "On the expression of a number as the sum of two squares", *Quarterly Journal of Mathematics* 46 (1915), 263–283.
[^2]: W. Sierpiński, "O pewnem zagadnieniu z rachunku funkcyj asymptotycznych", *Prace Matematyczno-Fizyczne* 17 (1906), 77–118.
[^3]: M. N. Huxley, "Exponential sums and lattice points III", *Proceedings of the London Mathematical Society* 87 (2003), 591–609.

# 연관 문서

## 선수지식

- [Poisson 합 공식](poisson-summation.md)
- [Dirichlet 약수 문제](dirichlet-divisor-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
