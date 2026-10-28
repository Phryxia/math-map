# Stein 방법

# 개요

**Stein 방법(Stein's method)** 은 확률변수의 분포가 정규분포에 얼마나 가까운지를 수치로 위에서 누르는 방법이다. 동전 $100$ 개의 앞뒤에 $\pm 1$ 을 주고 더해 $10$ 으로 나눈 $W$ 는 [중심극한정리](central-limit-theorem.md)에 따라 정규분포에 가깝지만, 그 정리는 얼마나 가까운지를 주지 않는다. Stein 방법은 표준정규분포를 따르는 $Z$ 만이 모든 $f$ 에 대해 $\mathbb E\lbrack f'(Z)-Zf(Z)\rbrack=0$ 을 만족한다는 것을 쓰고, $W$ 가 이 항등식을 얼마나 어기는지 계산해 거리의 상한을 얻는다.

# 직관

Stein 방법은 확률변수 $W$ 의 분포와 표준정규분포 사이의 거리를, 정규분포만이 만족하는 항등식 $\mathbb E\lbrack f^\prime(Z)-Zf(Z)\rbrack=0$ 을 $W$ 가 얼마나 어기는지로 위에서 누르는 방법이다. Stein 이 1972 년에 도입했다[^1].

중심극한정리의 수렴 속도를 특성함수 없이 얻고, 독립이 아닌 합에도 같은 절차가 쓰인다. 같은 틀로 Poisson 분포 근사를 하는 것이 Chen–Stein 방법(Chen–Stein method)이다.

동전 $n$ 개를 던져 앞면에 $+1$, 뒷면에 $-1$ 을 주고 $W=(\xi_1+\cdots+\xi_n)/\sqrt n$ 이라 한다. 중심극한정리는 $W$ 가 $Z\sim N(0,1)$ 로 분포수렴한다고 하지만, $n=100$ 에서 얼마나 가까운지는 말하지 않는다. 특성함수를 쓰면 가까움이 [Fourier 변환](fourier-transform.md) 쪽에서 나오고, 분포 쪽으로 옮기는 데 다시 계산이 필요하다.

[정규분포](normal-distribution.md)의 밀도 $\varphi$ 는 $\varphi^\prime(z)=-z\varphi(z)$ 를 만족한다. 부분적분하면 매끄러운 $f$ 마다 $\mathbb E\lbrack Zf(Z)\rbrack=\mathbb E\lbrack f^\prime(Z)\rbrack$ 이다. $W$ 에서 이 두 기댓값의 차를 계산한다. $W^{(i)}=W-\xi_i/\sqrt n$ 은 $\xi_i$ 와 독립이고 $\mathbb E\xi_i=0$ 이므로

$$
\mathbb E\lbrack Wf(W)\rbrack=\frac{1}{\sqrt n}\sum_{i=1}^n\mathbb E\bigl\lbrack\xi_i\bigl(f(W)-f(W^{(i)})\bigr)\bigr\rbrack
$$

이다. $f(W)-f(W^{(i)})$ 를 Taylor 전개하면 첫 항이 $\tfrac{1}{\sqrt n}\xi_if^\prime(W^{(i)})$ 이고, $\xi_i^2=1$ 이므로 합의 주항이 $\tfrac1n\sum_i\mathbb E f^\prime(W^{(i)})$ 다. 이것과 $\mathbb E f^\prime(W)$ 의 차, 그리고 Taylor 나머지는 각각 $\Vert f^{\prime\prime}\Vert\_\infty/\sqrt n$ 규모다. 그래서 $\vert\mathbb E\lbrack f^\prime(W)-Wf(W)\rbrack\vert$ 가 $\Vert f^{\prime\prime}\Vert\_\infty/\sqrt n$ 규모이고, 남은 일은 이 차로 분포의 거리를 누르는 것이다.

# 정의

## Stein 특징화

> **정리 (Stein 보조정리).** 실확률변수 $W$ 가 $N(0,1)$ 을 따르는 것과, 도함수가 유계인 모든 $C^1$ 함수 $f$ 에서 $\mathbb E\lbrack f^\prime(W)-Wf(W)\rbrack=0$ 인 것이 동치다.

작용소 $(\mathcal Af)(w)=f^\prime(w)-wf(w)$ 를 정규분포의 **Stein 작용소(Stein operator)** 라 한다.

## Stein 방정식

함수 $h$ 에 대해 다음 미분방정식이 **Stein 방정식(Stein equation)** 이다.

$$
f^\prime(w)-wf(w)=h(w)-\mathbb Eh(Z)
$$

유계인 해는 하나이고 다음과 같다.

$$
f_h(w)=e^{w^2/2}\int_{-\infty}^{w}\bigl(h(x)-\mathbb Eh(Z)\bigr)e^{-x^2/2}\thinspace dx
$$

$w$ 에 $W$ 를 넣고 기댓값을 취하면 $\mathbb Eh(W)-\mathbb Eh(Z)=\mathbb E\lbrack f_h^\prime(W)-Wf_h(W)\rbrack$ 다. 분포의 차가 직관 절에서 계산한 양으로 바뀐다.

## Wasserstein 거리

$1$-Lipschitz 함수 전체를 $\mathcal H$ 라 할 때 다음을 **Wasserstein 거리(Wasserstein distance)** 라 한다.

$$
d\_W(W,Z)=\sup_{h\in\mathcal H}\bigl\vert\mathbb Eh(W)-\mathbb Eh(Z)\bigr\vert
$$

# 성질

## 해의 유계성

> **정리.** $h$ 가 Lipschitz 이면 Stein 방정식의 해가 다음을 만족한다[^2].

$$
\Vert f_h\Vert\_\infty\le 2\Vert h^\prime\Vert\_\infty,\qquad\Vert f_h^\prime\Vert\_\infty\le\sqrt{2/\pi}\thinspace\Vert h^\prime\Vert\_\infty,\qquad\Vert f_h^{\prime\prime}\Vert\_\infty\le 2\Vert h^\prime\Vert\_\infty
$$

증명은 위 적분 표현을 직접 추정하는 것이다. 정규밀도의 꼬리 $w\gt 0$ 에서 $\int_w^\infty e^{-x^2/2}dx\le e^{-w^2/2}/w$ 가 $e^{w^2/2}$ 의 증가를 상쇄한다.

## 독립합의 수렴 속도

> **정리.** $\xi_1,\dots,\xi_n$ 이 독립이고 평균 $0$, 분산 $1$, 3 차 절대적률이 $\rho$ 이하이면, $W=\sum_i\xi_i/\sqrt n$ 과 $n$ 에 무관한 절대상수 $C$ 에 대해 다음이 성립한다[^2].

$$
d\_W(W,Z)\le\frac{C\rho}{\sqrt n}
$$

증명의 요지는 직관 절의 계산에 해의 유계성을 넣는 것이다. $\Vert f_h^{\prime\prime}\Vert\_\infty\le 2$ 가 Taylor 나머지와 $\mathbb Ef^\prime(W^{(i)})$ 와 $\mathbb Ef^\prime(W)$ 의 차를 함께 누른다. 누적분포함수의 차로 재는 Kolmogorov 거리에서는 $h$ 가 지시함수라 매끄럽지 않으므로 더 섬세한 계산이 필요하고, 그 결과가 Berry–Esseen 부등식과 같은 차수다.

## 교환가능한 쌍

$\mathbb EW^2=1$ 이고 $(W,W^\prime)$ 가 교환가능한 쌍이며 어떤 $0\lt\lambda\lt 1$ 에 대해 $\mathbb E\lbrack W^\prime-W\mid W\rbrack=-\lambda W$ 이면, 다음 꼴의 상한이 성립한다.

$$
d\_W(W,Z)\le\sqrt{\frac2\pi}\thinspace\mathbb E\Bigl\vert 1-\frac{1}{2\lambda}\mathbb E\lbrack(W^\prime-W)^2\mid W\rbrack\Bigr\vert+\frac{1}{3\lambda}\mathbb E\vert W^\prime-W\vert^3
$$

독립이 없는 자리에서는 $W$ 를 조금 바꾼 $W^\prime$ 을 만들어 이 상한을 쓴다. 무작위 순열의 고정점 수나 그래프의 부분그래프 수처럼 항들이 서로 의존하는 합에 쓰인다.

# 활용

- **Poisson 근사.** Poisson 분포의 Stein 작용소는 $(\mathcal Af)(k)=\lambda f(k+1)-kf(k)$ 다. 같은 절차로 약하게 의존하는 지시함수 합의 분포와 Poisson 분포의 [전변동거리](total-variation-distance.md)를 위에서 누르는 것이 Chen–Stein 방법이다.
- **무작위 그래프.** [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)에서 삼각형의 개수가 정규분포나 Poisson 분포에 가까운 정도를 Stein 방법으로 정량화한다.
- **Malliavin 계산과의 결합.** Nourdin 과 Peccati 는 Gauss 공간의 다중 적분에서 Stein 방정식을 Malliavin 미분과 결합해, 4 차 적률이 $3$ 으로 가는 것만으로 정규 수렴이 따라오는 4 차 적률 정리에 거리 상한을 붙였다[^3].

[^1]: C. Stein, *A bound for the error in the normal approximation to the distribution of a sum of dependent random variables*, Proc. Sixth Berkeley Symp. Math. Statist. Prob. 2 (1972), 583–602.
[^2]: L. H. Y. Chen, L. Goldstein, Q.-M. Shao, *Normal Approximation by Stein's Method*, Springer (2011), Ch. 2–3.
[^3]: I. Nourdin, G. Peccati, *Stein's method on Wiener chaos*, Probab. Theory Related Fields 145 (2009), 75–118.

# 연관 문서

## 선수지식

- [중심극한정리](central-limit-theorem.md)
- [정규분포](normal-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #analysis
