# Hölder 부등식

# 개요

Hölder 부등식(Hölder's inequality)은 두 함수의 곱의 적분을 각 함수의 거듭제곱 적분으로 누르는 부등식이다. 누르는 데 쓰는 두 지수는 역수의 합이 $1$ 이어야 한다. 이 한 부등식에서 [Lᵖ 공간](lp-spaces.md)의 삼각부등식과 쌍대성이 나온다.

# 직관

구간 $(0,1\rbrack$ 에서 $f(x)=x^{-1/2}$ 와 $g(x)=1$ 의 곱을 적분하면 $\int_0^1 x^{-1/2}\thinspace dx=2$ 다. 두 함수의 크기만으로 이 값을 위에서 누르려면 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓴다. 그 상계는 $f$ 를 제곱해 적분한 값의 제곱근을 쓰는데, $\int_0^1 x^{-1}\thinspace dx$ 는 발산한다. 상계가 무한대로 나와 실제 값에 대해 아무것도 말해 주지 않는다.

$f$ 를 제곱한 것이 발산했으니 제곱 대신 $3/2$ 제곱을 쓴다. $\int_0^1 x^{-3/4}\thinspace dx=4$ 는 유한하다. $g$ 쪽은 지수를 $3$ 으로 올려 $\left(\int_0^1 1\thinspace dx\right)^{1/3}=1$ 이다. 두 지수 $3/2$ 와 $3$ 은 역수의 합이 $1$ 이고, 이 짝에서 상계 $4^{2/3}\approx 2.52$ 가 나와 실제 값 $2$ 를 누른다.

# 정의

$1\lt p\lt \infty$ 이고 $1/p+1/q=1$ 인 두 수 $p,q$ 를 **켤레 지수**(conjugate exponents)라 한다. 측도공간 $(X,\mu)$ 위의 가측함수 $f,g$ 에 대해 다음이 성립한다.

$$\int_X \lvert fg\rvert\thinspace d\mu \le \left(\int_X \lvert f\rvert^p\thinspace d\mu\right)^{1/p}\left(\int_X \lvert g\rvert^q\thinspace d\mu\right)^{1/q}$$

[Lᵖ 공간](lp-spaces.md)의 노름으로 적으면 $\Vert fg\Vert\_1\le \Vert f\Vert\_p\Vert g\Vert\_q$ 다. $p=1$ 과 $q=\infty$ 의 짝도 켤레 지수로 세며, 이때 $\Vert g\Vert\_\infty$ 는 본질적 상한이다.

# 성질

## Young 부등식에서의 유도

$a,b\ge 0$ 이면 $ab\le a^p/p+b^q/q$ 이고 이것을 Young 부등식(Young's inequality)이라 한다. 로그가 오목하므로 $\log(a^p/p+b^q/q)\ge (1/p)\log a^p+(1/q)\log b^q=\log ab$ 가 되고, 이 단계가 [볼록성](convexity.md)이 주는 가중평균 부등식이다.

$\Vert f\Vert\_p=\Vert g\Vert\_q=1$ 인 경우에 Young 부등식을 점마다 적용하고 적분하면 우변이 $1/p+1/q=1$ 이 된다. 일반의 $f,g$ 는 각 노름으로 나누어 이 경우로 옮긴다.

## 등호 조건

$\lvert f\rvert^p$ 와 $\lvert g\rvert^q$ 가 거의 모든 점에서 상수배로 비례하면 등호가 성립하고, 등호가 성립하면 그 비례가 따라온다.

## Cauchy–Schwarz 부등식

$p=q=2$ 인 경우가 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)이다.

## Minkowski 부등식

$\Vert f+g\Vert\_p\le \Vert f\Vert\_p+\Vert g\Vert\_p$ 가 Hölder 부등식에서 유도되며 이것을 Minkowski 부등식(Minkowski's inequality)이라 한다. 증명의 요지는 $\lvert f+g\rvert^p\le \lvert f\rvert\lvert f+g\rvert^{p-1}+\lvert g\rvert\lvert f+g\rvert^{p-1}$ 로 쪼갠 뒤 두 항에 켤레 지수 $p,q$ 로 부등식을 적용하는 것이다. $\lvert f+g\rvert^{p-1}$ 의 $q$ 제곱이 $\lvert f+g\rvert^p$ 이므로 양변에서 같은 양을 약분한다.

## 세 함수 이상

$\sum_{i=1}^n 1/p_i=1$ 이면 $\Vert f_1\cdots f_n\Vert\_1\le \prod_{i=1}^n \Vert f_i\Vert\_{p_i}$ 다. 두 함수의 경우를 되풀이해 얻는다.

# 활용

- **[Lᵖ 공간](lp-spaces.md)의 노름 공리.** Minkowski 부등식이 삼각부등식이므로 $\Vert\cdot\Vert\_p$ 가 노름이 된다.
- **쌍대성.** $1\lt p\lt\infty$ 에서 $g\in L^q$ 가 $f\mapsto \int fg\thinspace d\mu$ 로 $L^p$ 위의 유계 범함수를 준다는 쪽을 이 부등식이 증명한다. 그 대응이 전사라는 쪽은 [쌍대 공간](dual-space.md)에서 다룬다.
- **보간.** $\Vert f\Vert\_p$ 가 $1/p$ 에 대해 로그 볼록이라는 성질이 이 부등식에서 나오고, [Riesz–Thorin 정리](riesz-thorin.md)의 증명이 그 성질을 쓴다.
- **적률 부등식.** 확률변수에 적용하면 $\mathrm E\lvert XY\rvert\le (\mathrm E\lvert X\rvert^p)^{1/p}(\mathrm E\lvert Y\rvert^q)^{1/q}$ 가 되어 서로 다른 차수의 적률을 잇는다.

# 연관 문서

## 선수지식

- [Lᵖ 공간](lp-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #measure_theory #probability
