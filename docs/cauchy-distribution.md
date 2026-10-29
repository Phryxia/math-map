# Cauchy 분포

# 개요

**Cauchy 분포(Cauchy distribution)** 는 꼬리가 두꺼워 평균이 존재하지 않는 분포다. 벽에서 $1$ m 떨어진 등대가 아무 방향으로나 고르게 빛을 쏘면 빛이 벽에 닿는 위치가 이 분포를 따르고, 이 위치를 여러 번 재어 평균을 내도 한 번 잰 값보다 정확해지지 않는다. 큰 수의 법칙과 중심극한정리가 기댓값의 존재를 가정해야 하는 이유를 이 분포로 확인한다.

# 직관

등대가 벽과 수직인 방향에서 각 $\Theta$ 만큼 돌려 빛을 쏜다고 하고, $\Theta$ 가 $(-\pi/2,\pi/2)$ 의 [균등분포](uniform-distribution.md)를 따른다고 하자. 빛이 닿는 위치는 $X=\tan\Theta$ 이고, $X\le x$ 는 $\Theta\le\arctan x$ 와 같으므로 $P(X\le x)=\frac12+\frac1\pi\arctan x$ 다. 미분하면 밀도 $\frac1{\pi(1+x^2)}$ 가 나온다.

$\Theta$ 가 $\pm\pi/2$ 에 가까우면 빛이 벽과 거의 나란해져 $X$ 가 아주 커진다. 밀도는 큰 $x$ 에서 $\frac1{\pi x^2}$ 정도로만 줄어들어 $\int_0^\infty x\cdot\frac1{\pi(1+x^2)}\thinspace dx=\infty$ 이고, 평균을 정할 수 없다. 측정값 $n$ 개의 평균을 내도 그 평균이 다시 같은 분포를 따르므로 평균이 참값 $0$ 으로 다가가지 않는다.

# 정의

위치 모수 $x_0$ 과 척도 모수 $\gamma\gt 0$ 인 Cauchy 분포는 [확률밀도](probability-density.md)가 다음과 같은 분포이고, $\mathrm{Cauchy}(x_0,\gamma)$ 로 쓴다. $x_0=0$, $\gamma=1$ 인 경우를 표준 Cauchy 분포라 한다.

$$
f(x)=\frac{1}{\pi\gamma}\cdot\frac{1}{1+\left((x-x_0)/\gamma\right)^2}
$$

# 성질

## 기댓값의 부재

$X\sim\mathrm{Cauchy}(0,1)$ 이면 $\mathbb E\lbrack\max(X,0)\rbrack$ 와 $\mathbb E\lbrack\max(-X,0)\rbrack$ 가 모두 $\infty$ 이므로 $\mathbb E\lbrack X\rbrack$ 가 정의되지 않는다. $0\lt r\lt 1$ 인 적률 $\mathbb E\lbrack\vert X\vert^r\rbrack$ 은 유한하고 $r\ge 1$ 이면 무한하다.

## 특성함수

**정리.** $X\sim\mathrm{Cauchy}(x_0,\gamma)$ 의 [특성함수](characteristic-functions.md)는 $\varphi(t)=e^{ix_0t-\gamma\vert t\vert}$ 다.[^1]

증명의 요지. 표준 경우에 $\int e^{itx}\frac{dx}{\pi(1+x^2)}$ 를 계산한다. $t\gt 0$ 이면 위 반평면을 도는 경로로 [유수 정리](residue-theorem.md)를 쓰고, 극 $x=i$ 의 유수에서 $e^{-t}$ 가 나온다. $t\lt 0$ 이면 아래 반평면을 돈다.

## 표본평균

**정리.** $X_1,\dots,X_n$ 이 독립이고 모두 $\mathrm{Cauchy}(x_0,\gamma)$ 를 따르면 표본평균 $\bar X=(X_1+\cdots+X_n)/n$ 도 $\mathrm{Cauchy}(x_0,\gamma)$ 를 따른다.

증명의 요지. $\bar X$ 의 특성함수는 $\varphi(t/n)^n=e^{ix_0t-\gamma\vert t\vert}$ 이고, 특성함수가 분포를 정한다.

[큰 수의 법칙](law-of-large-numbers.md)은 $\mathbb E\lbrack\vert X\vert\rbrack\lt\infty$ 를 가정하고, 이 정리로 그 가정을 뺄 수 없음이 확인된다.

## 정규분포의 비

$Z_1$, $Z_2$ 가 독립이고 모두 표준 [정규분포](normal-distribution.md)를 따르면 $Z_1/Z_2$ 는 표준 Cauchy 분포를 따른다. $(Z_1,Z_2)$ 의 분포가 회전에 대해 변하지 않으므로 점 $(Z_2,Z_1)$ 의 각이 고르게 분포하고, 비는 그 각의 탄젠트다. 같은 이유로 표준 Cauchy 분포는 자유도 $1$ 인 [t 분포](t-distribution.md)다.

# 활용

- [확률변수](random-variables.md)의 기댓값은 양의 부분과 음의 부분의 적분 가운데 하나가 유한할 때만 정의되고, Cauchy 분포는 두 적분이 모두 무한한 예다.
- [중심극한정리](central-limit-theorem.md)는 분산이 유한하다고 가정한다. Cauchy 확률변수의 합을 $\sqrt n$ 으로 나누면 퍼짐이 $\sqrt n$ 배로 커져 정규분포로 가지 않는다.
- [지수족](exponential-families.md)에 위치 모수를 가진 Cauchy 분포족은 들지 않는다.
- 위 반평면의 Poisson 핵(Poisson kernel) $\frac{y}{\pi(x^2+y^2)}$ 는 $\mathrm{Cauchy}(0,y)$ 의 밀도다. 경계값이 $g$ 인 위 반평면의 [조화함수](harmonic-functions.md)는 $g$ 와 이 밀도의 합성곱이다.

[^1]: R. Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press (2019), Chapter 3. 특성함수의 계산과 Cauchy 분포의 표본평균.

# 연관 문서

## 선수지식

- [확률밀도](probability-density.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
