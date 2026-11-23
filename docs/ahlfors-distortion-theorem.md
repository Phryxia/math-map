# Ahlfors 왜곡 정리

# 개요

**Ahlfors 왜곡 정리(Ahlfors distortion theorem)** 는 폭이 바뀌는 긴 통로 모양 영역을 곧은 띠로 펴는 등각사상이 통로의 길이 방향을 얼마나 늘이는지를, 통로의 단면 폭만으로 아래에서 잡는 정리다. 폭이 $1$ 인 구간과 폭이 $2$ 인 구간이 이어진 통로의 입구에서 입자를 놓으면, 먼 끝까지 갈 확률은 통로를 따라가며 폭의 역수를 더한 값으로 정해지는 지수 속도로 작아진다.

이 정리는 [극값 길이](extremal-length.md)의 계량 하나로 통로를 가로지르는 곡선들을 재어, 사상의 식을 구하지 않고 그 확률의 위 한계를 준다.

# 직관

폭이 $\pi$ 인 곧은 띠 $S\_\pi=\lbrace 0\lt\mathrm{Im}\thinspace z\lt\pi\rbrace$ 의 점 $i\pi/2$ 에서 입자를 놓는다. 입자가 경계 가운데 $\mathrm{Re}\thinspace z\gt d$ 인 부분에 처음 닿을 확률은 그 부분의 [조화 측도](harmonic-measure.md)다. $e^z$ 는 $S\_\pi$ 를 상반평면으로 보내고, $i\pi/2$ 를 $i$ 로, $\mathrm{Re}\thinspace z\gt d$ 인 경계를 실수축의 $\vert t\vert\gt e^d$ 로 보낸다.

상반평면에서 $i$ 가 본 $\vert t\vert\gt R$ 의 조화 측도는 $(2/\pi)\arctan(1/R)$ 이다. $R=e^d$ 를 넣으면 확률은 $d$ 가 클 때 $(2/\pi)e^{-d}$ 에 가깝다. 띠의 폭이 $w$ 이면 $z\mapsto\pi z/w$ 로 폭을 $\pi$ 로 맞추므로 확률은 $e^{-\pi d/w}$ 에 비례한다.

폭이 곳마다 다르면 짧은 토막마다 그 자리의 폭 $\theta(x)$ 로 같은 계산을 하고 지수를 더한다. 토막 길이 $dx$ 마다 지수가 $\pi\thinspace dx/\theta(x)$ 만큼 늘어나므로, $a$ 에서 $b$ 까지 가는 확률은 다음 값 정도로 짐작된다.

$$
\exp\Bigl(-\pi\int\_a^b\frac{dx}{\theta(x)}\Bigr)
$$

폭 $1$ 인 구간이 길이 $5$, 폭 $2$ 인 구간이 길이 $5$ 이면 적분은 $5+5/2=7.5$ 다. Ahlfors 왜곡 정리는 이 짐작을 상수배를 뺀 위 한계로 증명한다.

# 정의

**띠 영역(strip domain)** 은 단순연결 영역 $\Omega$ 와 그 경계의 두 끝 $-\infty$, $+\infty$ 의 짝이다. 띠 영역과 표준 띠 $S=\lbrace \vert\mathrm{Im}\thinspace w\vert\lt\pi/2\rbrace$ 사이에는 $\Omega$ 의 두 끝을 $S$ 의 두 끝 $\mathrm{Re}\thinspace w\to\pm\infty$ 로 보내는 [등각사상](conformal-mapping.md) $f:\Omega\to S$ 가 존재한다. 이것은 [Riemann 사상정리](riemann-mapping-theorem.md)에서 나온다.

실수 $x$ 마다 세로선 $\lbrace\mathrm{Re}\thinspace z=x\rbrace$ 와 $\Omega$ 가 겹치는 부분이 하나의 선분이라 하고, 그 길이를 $\theta(x)$ 라 쓴다. $\theta(x)$ 를 $x$ 에서의 **단면 폭(cross-sectional width)** 이라 한다. 직관 절의 띠 $S\_\pi$ 는 모든 $x$ 에서 $\theta(x)=\pi$ 다.

$\Omega$ 의 $x$ 단면을 $\sigma\_x$ 라 쓴다. $f(\sigma\_x)$ 는 $S$ 를 가로지르는 곡선이다.

# 성질

## 단면 폭이 주는 극값 길이의 아래 한계

$\Gamma$ 가 $\Omega$ 안에서 $\sigma\_a$ 와 $\sigma\_b$ 를 잇는 곡선 모임이면 다음이 성립한다.

$$
\lambda(\Gamma)\ge\int\_a^b\frac{dx}{\theta(x)}
$$

증명의 요지. 무게를 $\rho(z)=1/\theta(\mathrm{Re}\thinspace z)$ 로 잡는다. $\Gamma$ 의 곡선은 $\mathrm{Re}\thinspace z$ 가 $a$ 에서 $b$ 까지 가므로 길이가 $\int\_a^b dx/\theta(x)$ 이상이다. 넓이는 각 $x$ 에서 폭 $\theta(x)$ 에 $\rho^2=1/\theta(x)^2$ 을 곱해 적분한 $\int\_a^b dx/\theta(x)$ 다. 두 값을 극값 길이의 정의에 넣으면 된다.

## 왜곡 정리

다음 조건이 성립한다고 하자.

$$
\int\_a^b\frac{dx}{\theta(x)}\ge 2
$$

그러면 다음이 성립한다.[^1]

$$
\min\_{\sigma\_b}\mathrm{Re}\thinspace f-\max\_{\sigma\_a}\mathrm{Re}\thinspace f\ge\pi\int\_a^b\frac{dx}{\theta(x)}-4\pi
$$

증명의 요지. 앞 절의 아래 한계는 등각사상으로 옮겨도 그대로이므로, $S$ 안에서 $f(\sigma\_a)$ 와 $f(\sigma\_b)$ 를 잇는 곡선 모임의 극값 길이가 $\int\_a^b dx/\theta$ 이상이다. $S$ 안에서 두 가로지르는 곡선을 잇는 곡선 모임의 극값 길이는, 두 곡선의 실수부가 떨어진 거리를 $\pi$ 로 나눈 값에 각 곡선의 실수부가 흔들리는 폭을 더한 것 이하다. 적분이 $2$ 이상이면 흔들리는 폭이 상수로 묶이고, 그 상수가 $4\pi$ 다.

## 조화 측도의 추정

$z\_0\in\Omega$ 이고 $\mathrm{Re}\thinspace z\_0\le a$ 이면, $\Omega$ 의 경계 가운데 $\sigma\_b$ 의 오른쪽에 있는 부분 $E\_b$ 에 대해 다음이 성립하는 절대상수 $C$ 가 존재한다.[^1]

$$
\omega(z\_0,E\_b,\Omega)\le C\exp\Bigl(-\pi\int\_a^b\frac{dx}{\theta(x)}\Bigr)
$$

증명의 요지. $\sigma\_a$ 가 $z\_0$ 과 $E\_b$ 를 가르므로 $\mathrm{Re}\thinspace f(z\_0)\le\max\_{\sigma\_a}\mathrm{Re}\thinspace f$ 이고, 왜곡 정리로 $f(E\_b)$ 는 실수부가 그보다 $t=\pi\int\_a^b dx/\theta-4\pi$ 이상 큰 경계 부분에 들어간다. $S$ 에서 그런 부분의 조화 측도는 직관 절의 계산으로 $e^{-t}$ 의 상수배 이하이고, 조화 측도는 등각사상으로 옮겨도 같다.

## Warschawski 정리

왜곡 정리는 늘이는 정도의 아래 한계만 준다. 경계가 매끄럽고 폭의 변화율 $\theta'$ 가 작으면, Warschawski 정리(Warschawski's theorem)가 같은 차이를 다음처럼 양쪽에서 잡는다.[^2]

$$
\mathrm{Re}\thinspace f(b)-\mathrm{Re}\thinspace f(a)=\pi\int\_a^b\frac{dx}{\theta(x)}+O\Bigl(\int\_a^b\frac{\theta'(x)^2}{\theta(x)}\thinspace dx\Bigr)
$$

여기서 $f(a)$, $f(b)$ 는 단면 $\sigma\_a$, $\sigma\_b$ 의 가운데 점의 상이다.

# 활용

- [Denjoy–Carleman–Ahlfors 정리](denjoy-carleman-ahlfors-theorem.md). 증가 위수(order)가 $\rho$ 인 정함수(entire function)는 서로 다른 유한 점근값(asymptotic value)을 많아야 $2\rho$ 개 갖는다. Ahlfors 는 점근값 사이의 영역들을 띠 영역으로 보고 이 정리로 각 영역에서 함수가 커지는 속도를 잡아 이 추측을 증명했다.[^3]
- [Phragmén–Lindelöf 원리](phragmen-lindelof.md)의 일반화. 각이나 띠가 아닌 통로 모양 영역에서 정칙함수가 얼마나 빨리 커져야 상수가 되는지를, 띠로 펴는 사상의 실수부 아래 한계로 정한다.
- [Makarov 정리](makarov-theorem.md)의 직관에 쓰는 좁은 만의 추정. 폭 $w$, 깊이 $d$ 인 만의 바닥이 받는 조화 측도가 $Ce^{-\pi d/w}$ 이하라는 것은 조화 측도 추정 절에서 $\theta=w$ 로 둔 것이다.

[^1]: L. V. Ahlfors, *Conformal Invariants: Topics in Geometric Function Theory*, McGraw-Hill, 1973, 4장 6절; J. B. Garnett, D. E. Marshall, *Harmonic Measure*, Cambridge University Press, 2005, 4장 6절.
[^2]: S. E. Warschawski, "On conformal mapping of infinite strips", *Transactions of the American Mathematical Society* 51 (1942), 280–335.
[^3]: L. Ahlfors, "Untersuchungen zur Theorie der konformen Abbildung und der ganzen Funktionen", *Acta Societatis Scientiarum Fennicae, Nova Series A* 1 (1930), no. 9.

# 연관 문서

## 선수지식

- [극값 길이](extremal-length.md)
- [조화 측도](harmonic-measure.md)

## 더 알아보기

- [Denjoy–Carleman–Ahlfors 정리](denjoy-carleman-ahlfors-theorem.md)

#complex_analysis #analysis #probability
