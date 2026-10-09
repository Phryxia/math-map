# 등주부등식

# 개요

평면의 단순닫힌곡선이 길이 $L$ 이고 둘러싼 넓이가 $A$ 이면 다음이 성립한다.

$$
4\pi A\le L^2
$$

등호는 곡선이 원일 때만 성립한다. 길이를 고정하고 넓이를 최대로 하는 문제이므로 [변분법](calculus-of-variations.md)의 구속조건 문제이고, 정류 조건을 풀면 곡선이 원으로 나온다.

# 직관

길이가 $L$ 로 정해진 끈으로 평면의 영역을 둘러싼다. 넓이가 가장 큰 모양을 찾으려 하는데, 곡선의 후보가 무한히 많으므로 하나씩 재어 비교할 수는 없다.

후보를 먼저 줄인다. 곡선이 볼록하지 않으면 볼록하지 않은 부분의 양 끝을 잇는 선분을 잡아 그 조각을 선분에 대해 뒤집는다. 조각의 길이는 그대로이고 뒤집힌 조각이 선분 바깥으로 나가므로 넓이가 늘어난다. 그러므로 최대가 있다면 볼록한 곡선 가운데 있다.

볼록한 곡선은 서로 비교할 길이 없으므로 곡선을 조금씩 바꿔 본다. 길이가 변하지 않고 넓이가 늘지도 않는 조건을 적으면 곡선이 만족해야 하는 미분방정식이 나온다. 넓이와 길이를 모두 곡선의 범함수로 쓰면 그 조건이 변분법의 정류 조건이다.

# 정의

$\gamma:\lbrack 0,L\rbrack\to\mathbb R^2$ 를 호의 길이로 매개화한 단순닫힌곡선이라 하고 $\gamma=(x,y)$ 로 쓴다. 호의 길이 매개화는 $x'^2+y'^2=1$ 을 뜻한다.

길이와 넓이는 다음 두 범함수다. 넓이 쪽은 Green 정리로 얻은 꼴이다.

$$
L\lbrack\gamma\rbrack=\oint\sqrt{x'^2+y'^2}\thinspace dt,\qquad A\lbrack\gamma\rbrack=\frac12\oint(xy'-yx')\thinspace dt
$$

$L\lbrack\gamma\rbrack$ 를 고정하고 $A\lbrack\gamma\rbrack$ 를 최대로 하는 문제를 **등주 문제**라 한다.

# 성질

## 정류 곡선

구속조건을 Lagrange 곱수로 넣으면 피적분함수가 다음이다.

$$
F=\frac12(xy'-yx')-\lambda\sqrt{x'^2+y'^2}
$$

$x$ 와 $y$ 각각에 대한 Euler–Lagrange 방정식을 쓰고 호의 길이 매개화를 넣으면 다음 두 식이 남는다.

$$
\lambda x''=-y',\qquad \lambda y''=x'
$$

한 번 적분하면 상수 $c_1,c_2$ 로 $\lambda x'=-y+c_1$ 과 $\lambda y'=x+c_2$ 가 된다. 두 식을 제곱해 더하고 $x'^2+y'^2=1$ 을 쓰면 다음이 나온다.

$$
(x+c_2)^2+(y-c_1)^2=\lambda^2
$$

정류 곡선은 반지름 $\lvert\lambda\rvert$ 인 원이고, 곱수 $\lambda$ 가 그 반지름이다.

이 계산은 최대가 있다는 것을 가정하고 그것이 무엇인지만 정한다. 최대의 존재는 따로 증명해야 하고, Fourier 급수를 쓰는 Hurwitz 의 증명은 존재를 가정하지 않는다.

## Hurwitz 의 증명

**정리(Hurwitz).** 단순닫힌곡선에서 $4\pi A\le L^2$ 이고 등호는 원일 때만 성립한다.[^1]

$L=2\pi$ 로 크기를 맞추면 호의 길이 매개화에서 $x'^2+y'^2=1$ 이므로 $\oint(x'^2+y'^2)\thinspace dt=2\pi$ 다. 넓이 공식과 합치면 다음이 성립한다.

$$
2\pi-2A=\oint\Bigl(x'^2+y'^2-xy'+yx'\Bigr)\thinspace dt
$$

$x$ 와 $y$ 의 Fourier 급수를 넣고 평행이동으로 평균을 $0$ 으로 맞추면 오른쪽이 계수의 제곱들을 음이 아닌 계수로 더한 꼴이 된다. 따라서 $A\le\pi$ 이고 이것이 $4\pi A\le L^2$ 이다. 오른쪽이 $0$ 이 되는 것은 $1$ 차 항만 남을 때이고 그때 곡선은 원이다.

Fourier 급수의 $n$ 차 항에 붙는 계수가 $n^2-n$ 이므로 $n=1$ 에서만 소멸한다. Wirtinger 부등식이 이 소멸 조건을 따로 떼어 쓴 꼴이다.

## 고차원

$\mathbb R^n$ 의 유계 영역 $\Omega$ 에 대해 다음이 성립하고 등호는 공일 때만 성립한다.

$$
n\thinspace\omega_n^{1/n}\lvert\Omega\rvert^{(n-1)/n}\le\mathcal H^{n-1}(\partial\Omega)
$$

여기서 $\omega_n$ 은 단위공의 부피이고 $\mathcal H^{n-1}$ 은 $n-1$ 차원 Hausdorff 측도다. 증명은 [Brunn–Minkowski 부등식](brunn-minkowski.md)에서 나온다.[^2]

# 활용

- **변분법의 구속조건 문제.** 넓이와 길이 가운데 하나를 고정하고 다른 쪽을 최적화하는 문제의 본보기이고, [변분법](calculus-of-variations.md)의 Lagrange 곱수 절이 드는 예가 이것이다. [현수선](catenary.md)도 같은 꼴의 문제다.
- **Weierstrass 의 비판.** Steiner 는 비볼록 곡선을 고치는 논법으로 원 말고는 최대가 될 수 없음을 보였으나 최대의 존재를 증명하지 않았다. Weierstrass 가 존재가 빠진 것을 지적한 뒤 변분 문제에서 최소화 열의 수렴을 따로 증명하는 방식이 자리 잡았다.
- **스펙트럼 부등식.** 영역의 등주 상수를 Laplace 작용소의 첫 고윳값으로 누르는 Cheeger 부등식이 같은 모양이고, [확장 그래프](expander-graphs.md)에서 그 이산 판본을 쓴다.

[^1]: A. Hurwitz, *Sur le problème des isopérimètres*, C. R. Acad. Sci. Paris **132** (1901), 401–403. Fourier 급수로 등주부등식을 얻은 논문이다.
[^2]: H. Federer, *Geometric Measure Theory*, Springer, 1969, 3.2 절. Brunn–Minkowski 부등식에서 고차원 등주부등식을 얻는 논증이 실려 있다.

# 연관 문서

## 선수지식

- [변분법](calculus-of-variations.md)
- [Brunn–Minkowski 부등식](brunn-minkowski.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #measure_theory #optimization
