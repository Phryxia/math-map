# Hardy–Littlewood–Sobolev 부등식

# 개요

**Hardy–Littlewood–Sobolev 부등식(Hardy–Littlewood–Sobolev inequality)** 은 거리의 거듭제곱에 반비례하는 가중치로 함수를 평균 낸 결과가 얼마나 적분가능한지를 정하는 부등식이다. 공간에 퍼진 질량의 밀도 $f$ 를 알 때 각 점의 중력 퍼텐셜은 질량을 거리로 나누어 더한 값인데, $f$ 의 거듭제곱 적분을 알면 퍼텐셜의 어느 거듭제곱이 적분가능한지 묻게 된다. 이 부등식은 가중치를 가까운 부분과 먼 부분으로 갈라 각각을 눌러, 퍼텐셜이 $f$ 보다 큰 지수에서 적분가능하다고 답한다.

# 직관

$\mathbb R^3$ 에 밀도 $f\ge 0$ 으로 퍼진 질량의 중력 퍼텐셜을 상수배를 빼고 쓰면 다음과 같다.

$$
u(x)=\int_{\mathbb R^3}\frac{f(y)}{\vert x-y\vert}\thinspace dy
$$

$u$ 는 $f$ 와 $K(x)=\vert x\vert^{-1}$ 의 [합성곱](convolution.md)이다. [Young 의 합성곱 부등식](young-convolution-inequality.md)을 쓰려면 $K$ 가 어떤 $L^s$ 에 들어야 한다. 원점 근처의 $\int\vert x\vert^{-s}\thinspace dx$ 는 $s\lt 3$ 일 때만, 무한대 쪽은 $s\gt 3$ 일 때만 수렴한다. 두 조건을 함께 만족하는 $s$ 가 없으므로 Young 부등식을 바로 쓸 수 없다.

가까운 쪽과 먼 쪽이 서로 다른 지수를 요구하니 $K$ 를 반지름 $R$ 에서 둘로 가른다. 가까운 조각 $K\mathbf 1\_{\lbrace\vert x\vert\le R\rbrace}$ 는 적분가능하고, $f$ 와의 합성곱은 $x$ 둘레의 공 평균으로 눌린다. 먼 조각은 $s\gt 3$ 인 $L^s$ 에 들어 [Hölder 부등식](holder-inequality.md)으로 눌린다. 반지름 $R$ 을 점마다 두 조각이 같은 크기가 되게 고르면 $u$ 의 크기가 나온다.

# 정의

$0\lt\alpha\lt n$ 이고 $f$ 가 $\mathbb R^n$ 위의 가측함수일 때 다음 함수를 $f$ 의 **Riesz 퍼텐셜(Riesz potential)** 이라 한다.

$$
I_\alpha f(x)=\int_{\mathbb R^n}\frac{f(y)}{\vert x-y\vert^{n-\alpha}}\thinspace dy
$$

정규화 상수는 빼고 쓴다. 직관 절의 중력 퍼텐셜은 $n=3$, $\alpha=2$ 인 경우다.

$f=\mathbf 1\_{\lbrace\vert y\vert\le 1\rbrace}$ 이면 $\vert x\vert\ge 2$ 에서 $\vert x-y\vert$ 가 $\vert x\vert$ 의 두 배 안에 있으므로 $I_\alpha f(x)$ 는 $\vert x\vert^{\alpha-n}$ 의 상수배 안에 있다. 이 함수의 $q$ 제곱은 무한대 쪽에서 $q\gt n/(n-\alpha)$ 일 때만 적분가능하다.

# 성질

## 부등식의 진술

$0\lt\alpha\lt n$, $1\lt p\lt q\lt\infty$ 이고 다음 등식이 성립하면, $n,\alpha,p$ 에만 의존하는 상수 $C$ 가 있어 모든 $f\in L^p(\mathbb R^n)$ 에서 $\Vert I_\alpha f\Vert\_q\le C\Vert f\Vert\_p$ 다.

$$
\frac1q=\frac1p-\frac{\alpha}{n}
$$

직관 절의 $n=3$, $\alpha=2$ 에서 $p=6/5$ 이면 $q=6$ 이다. 밀도가 $L^{6/5}$ 에 들면 퍼텐셜이 $L^6$ 에 든다.

## 지수 등식의 필요성

$f_\lambda(x)=f(\lambda x)$ 로 두면 변수를 바꾸어 $I_\alpha f_\lambda(x)=\lambda^{-\alpha}I_\alpha f(\lambda x)$ 다. 따라서 $\Vert f_\lambda\Vert\_p=\lambda^{-n/p}\Vert f\Vert\_p$ 이고 $\Vert I_\alpha f_\lambda\Vert\_q=\lambda^{-\alpha-n/q}\Vert I_\alpha f\Vert\_q$ 다. 두 지수가 같지 않으면 $\lambda\to 0$ 이나 $\lambda\to\infty$ 에서 비가 한없이 커지므로, 부등식이 성립하려면 $\alpha+n/q=n/p$ 여야 한다.

## 증명의 요지

L. I. Hedberg 의 증명이다[^1]. $Mf$ 를 [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)로 두고 $f\ge 0$ 이라 하자.

가까운 조각은 원점 둘레를 반지름 $2^{-k}R$ 의 껍질로 나눈다. 각 껍질에서 핵은 $(2^{-k-1}R)^{\alpha-n}$ 이하이고 $f$ 의 적분은 $(2^{-k}R)^n Mf(x)$ 의 상수배 이하이므로, 껍질의 몫은 $(2^{-k}R)^\alpha Mf(x)$ 의 상수배다. 등비급수를 더하면 다음이 나온다.

$$
\int_{\vert y\vert\le R}\frac{f(x-y)}{\vert y\vert^{n-\alpha}}\thinspace dy\le CR^\alpha Mf(x)
$$

먼 조각에는 Hölder 부등식을 쓴다. $q\lt\infty$ 에서 $\alpha\lt n/p$ 이므로 핵의 먼 조각은 $L^{p'}$ 에 들고, 그 노름은 $R^{\alpha-n/p}$ 의 상수배다. 먼 조각의 몫은 $CR^{\alpha-n/p}\Vert f\Vert\_p$ 이하다.

$R^{n/p}=\Vert f\Vert\_p/Mf(x)$ 로 고르면 두 몫이 같아지고 다음이 나온다.

$$
I_\alpha f(x)\le C\thinspace Mf(x)^{1-\alpha p/n}\thinspace\Vert f\Vert\_p^{\alpha p/n}
$$

지수 등식에서 $q(1-\alpha p/n)=p$ 이므로 양변을 $q$ 제곱해 적분하면 $\Vert Mf\Vert\_p^p\Vert f\Vert\_p^{q-p}$ 가 남는다. 극대함수가 $p\gt 1$ 에서 $L^p$ 유계이므로 $\Vert I_\alpha f\Vert\_q\le C\Vert f\Vert\_p$ 다.

## 끝점 p = 1

$p=1$ 이면 $q=n/(n-\alpha)$ 이고 강한 부등식은 성립하지 않는다. 정의 절의 $f=\mathbf 1\_{\lbrace\vert y\vert\le 1\rbrace}$ 에서 $I_\alpha f$ 가 정확히 이 $q$ 에서 적분가능하지 않다. 대신 $\lbrace I_\alpha f\gt\lambda\rbrace$ 의 측도가 $(\Vert f\Vert\_1/\lambda)^q$ 의 상수배 이하라는 약한 유형 추정이 성립하고, 이 추정 둘을 [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md)로 이으면 $p\gt 1$ 의 부등식이 다시 나온다.

## 쌍선형 꼴과 최적 상수

$0\lt\lambda\lt n$, $1\lt p,r\lt\infty$ 이고 $1/p+1/r+\lambda/n=2$ 이면 다음이 성립하며, 이 꼴은 위의 부등식과 쌍대성으로 동치다.

$$
\int\int\frac{f(x)g(y)}{\vert x-y\vert^{\lambda}}\thinspace dx\thinspace dy\le C\Vert f\Vert\_p\Vert g\Vert\_r
$$

E. H. Lieb 는 $p=r=2n/(2n-\lambda)$ 인 경우의 최적 상수를 구했고, 등호가 $(1+\vert x\vert^2)^{-(2n-\lambda)/2}$ 를 평행이동하고 늘인 함수에서 나온다는 것을 보였다[^2].

# 활용

- [Sobolev 공간](sobolev-spaces.md)의 매장 정리. $u\in C_c^1(\mathbb R^n)$ 이면 $\vert u(x)\vert\le C\thinspace I_1\vert\nabla u\vert(x)$ 이고, $\alpha=1$ 의 부등식이 $1\lt p\lt n$ 에서 $\Vert u\Vert\_{p^\ast}\le C\Vert\nabla u\Vert\_p$ 를 준다. $p^\ast=np/(n-p)$ 는 지수 등식에서 나온다.
- [Green 함수](greens-function.md)와 Poisson 방정식. $\mathbb R^3$ 에서 $-\Delta u=f$ 의 해는 $f$ 와 $1/(4\pi\vert x\vert)$ 의 합성곱이므로 $\Vert u\Vert\_6\le C\Vert f\Vert\_{6/5}$ 다.
- [분수 Laplace 연산자](fractional-laplacian.md). $0\lt 2s\lt n$ 이면 $(-\Delta)^{-s}$ 는 $I\_{2s}$ 의 상수배이므로, $(-\Delta)^{s}u\in L^p$ 이면 $u\in L^q$, $1/q=1/p-2s/n$ 이다.
- Young 의 합성곱 부등식의 약한 꼴. 핵 $\vert x\vert^{\alpha-n}$ 은 $L^{n/(n-\alpha)}$ 에 들지 않지만 그 약한 공간에 들고, 이 부등식은 약한 꼴 Young 부등식의 이 핵에 대한 경우다.

[^1]: L. I. Hedberg, "On certain convolution inequalities", Proceedings of the American Mathematical Society 36 (1972), 505–510.
[^2]: E. H. Lieb, "Sharp constants in the Hardy–Littlewood–Sobolev and related inequalities", Annals of Mathematics 118 (1983), 349–374.

# 연관 문서

## 선수지식

- [Young 의 합성곱 부등식](young-convolution-inequality.md)
- [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
