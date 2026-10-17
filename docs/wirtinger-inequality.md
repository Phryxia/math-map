# Wirtinger 부등식

# 개요

**Wirtinger 부등식(Wirtinger inequality)** 은 평균이 $0$ 인 주기함수의 $L^2$ 노름을 도함수의 $L^2$ 노름으로 누르는 부등식이다. 주기가 $2\pi$ 일 때 두 노름이 그대로 비교되고, 등호는 $a\cos t+b\sin t$ 에서만 성립한다.

증명은 [Fourier 급수](fourier-series.md)의 계수로 두 노름을 쓰고 $n$ 차 항에 붙는 $n^2$ 을 $1$ 로 누르는 것이다.

# 직관

평균이 $0$ 이고 주기가 $2\pi$ 인 함수에서 비 $\Vert f\Vert\_{L^2}/\Vert f'\Vert\_{L^2}$ 가 얼마나 커질 수 있는지 묻는다. $f(t)=\sin t$ 를 넣으면 $f'(t)=\cos t$ 이고 한 주기에서 두 함수의 제곱 적분이 모두 $\pi$ 이므로 비가 $1$ 이다.

$f(t)=\sin kt$ 를 넣으면 $f'(t)=k\cos kt$ 이므로 제곱 적분은 $\pi$ 와 $k^2\pi$ 이고 비가 $1/k$ 다. 진동이 빠를수록 도함수가 커져 비가 작아진다. 가장 느린 진동은 $k=1$ 이고, $k=0$ 은 상수함수인데 평균이 $0$ 이라는 조건이 그것을 막는다.

임의의 함수에서는 $\sin kt$ 와 $\cos kt$ 를 더해 쓴다. Fourier 계수를 $c\_n$ 이라 하면 한 주기에서 제곱 적분이 계수의 제곱 합으로 적히고, 미분은 $n$ 차 계수에 $in$ 을 곱하므로 도함수 쪽 합에는 $n^2$ 이 붙는다.

평균이 $0$ 이라는 조건은 $c\_0=0$ 이라는 뜻이므로 합에 남는 $n$ 은 모두 $\vert n\vert\ge 1$ 이고, 따라서 $n^2\ge 1$ 이다. 항마다 계수의 제곱이 $n^2$ 배 이하이므로 두 합을 비교하면 부등식이 나오고, 등호는 $\vert n\vert=1$ 인 항만 남을 때다.

# 정의

## 조건

$f:\mathbb{R}\to\mathbb{R}$ 가 주기 $2\pi$ 이고 절대연속이며 $f'\in L^2(0,2\pi)$ 라 한다. 평균 조건은 다음이다.

$$
\int\_0^{2\pi}f(t)\thinspace dt=0
$$

## 부등식

정리. 위 조건에서 다음이 성립한다[^1].

$$
\int\_0^{2\pi}f(t)^2\thinspace dt\le\int\_0^{2\pi}f'(t)^2\thinspace dt
$$

등호가 성립하는 것은 $f(t)=a\cos t+b\sin t$ 인 것과 동치다.

# 성질

## Fourier 계수로 쓴 증명

$f$ 의 Fourier 계수를 $c\_n=\frac{1}{2\pi}\int\_0^{2\pi}f(t)e^{-int}\thinspace dt$ 라 하면 Parseval 등식이 두 적분을 계수로 준다.

$$
\int\_0^{2\pi}f^2=2\pi\sum\_{n\in\mathbb{Z}}\vert c\_n\vert^2,\qquad\int\_0^{2\pi}(f')^2=2\pi\sum\_{n\in\mathbb{Z}}n^2\vert c\_n\vert^2
$$

도함수의 계수가 $inc\_n$ 인 것은 부분적분으로 얻는다. 평균 조건이 $c\_0=0$ 을 주므로 두 합에서 $n=0$ 항이 빠지고, 남은 항에서 $n^2\ge 1$ 이다. 두 합의 차는 $2\pi\sum(n^2-1)\vert c\_n\vert^2\ge 0$ 이고, 이 값이 $0$ 인 것은 $\vert n\vert\ge 2$ 인 모든 계수가 $0$ 인 것과 동치다.

## 상수의 최적성

주기를 $L$ 로 바꾸면 부등식은 다음 꼴이 된다.

$$
\int\_0^{L}f^2\le\Bigl(\frac{L}{2\pi}\Bigr)^2\int\_0^{L}(f')^2
$$

$f(t)=\sin(2\pi t/L)$ 에서 등호가 성립하므로 상수 $(L/2\pi)^2$ 보다 작은 상수로는 부등식이 거짓이다. 치환 $t\mapsto 2\pi t/L$ 로 주기 $2\pi$ 의 경우에서 옮긴다.

## Dirichlet 경계조건 판본

$f(0)=f(L)=0$ 이면 평균 조건 없이 다음이 성립한다.

$$
\int\_0^{L}f^2\le\Bigl(\frac{L}{\pi}\Bigr)^2\int\_0^{L}(f')^2
$$

증명은 $f$ 를 홀함수로 확장해 주기 $2L$ 의 경우로 옮기는 것이다. 홀함수의 평균이 $0$ 이고 확장한 함수의 Fourier 급수에 사인 항만 남으므로, $n$ 차 항의 주파수가 $n\pi/L$ 이고 가장 작은 것이 $\pi/L$ 이다. 등호는 $f(t)=a\sin(\pi t/L)$ 에서 성립한다.

## 고차원 판본

두 판본은 모두 [Sobolev 공간](sobolev-spaces.md)의 Poincaré 부등식의 일차원 경우다. 고차원에서는 최적 상수가 영역의 첫 Laplace 고윳값의 역수의 제곱근이고, 일차원 구간에서 그 고윳값이 $(\pi/L)^2$ 다. 고차원의 최적 상수는 공을 뺀 일반 영역에서 닫힌 꼴로 적히지 않는다.

# 활용

- 등주부등식의 Hurwitz 증명. 둘레가 $L$ 인 폐곡선을 호장으로 매개화하고 좌표함수의 평균을 평행이동으로 $0$ 으로 맞추면, 이 부등식이 둘러싼 면적을 둘레로 누르는 단계가 되어 [등주부등식](isoperimetric-inequality.md)이 나온다.
- 고윳값의 변분 특징. 부등식의 최적 상수를 찾는 문제는 Rayleigh 몫 $\int(f')^2/\int f^2$ 의 최소화이고, 그 최솟값이 [Sturm–Liouville 문제](sturm-liouville.md)의 첫 고윳값이다.
- 주기해의 유일성. 비선형 주기 경계값 문제에서 두 해의 차에 이 부등식을 쓰면, 비선형항의 Lipschitz 상수가 $1$ 보다 작을 때 차가 $0$ 이 된다.

[^1]: G. H. Hardy, J. E. Littlewood, G. Pólya, *Inequalities*, 2판, Cambridge University Press, 1952, 7.7 절.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
