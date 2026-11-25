# Bode 감도 적분

# 개요

**Bode 감도 적분(Bode sensitivity integral)** 은 되먹임 고리가 외란을 줄이는 정도의 로그를 모든 주파수에서 더한 값이 열린 고리의 불안정한 극으로 정해진다는 등식이다. 열린 고리 $3/(s+1)^2$ 로 되먹임을 걸면 느린 외란은 $4$ 분의 $1$ 로 줄지만, 주파수 $\sqrt{2.5}$ 위의 외란은 오히려 커지고 $\sqrt6$ 에서 $1.32$ 배가 된다. 이 등식은 줄인 만큼 어딘가에서 반드시 커진다는 것을 적분 하나로 보이고, 불안정한 극이 있으면 커지는 쪽이 더 많아야 한다는 것을 준다.

# 직관

[Bode 선도](bode-plot.md)의 고리에서 출력에 더해지는 외란 $d$ 를 생각한다. 열린 고리 전달 함수가 $L(s)$ 이면 출력은 $d$ 에 $S=1/(1+L)$ 을 곱한 것이 된다. 주파수 $\omega$ 의 사인파 외란은 $\vert S(i\omega)\vert$ 배가 되므로, $\vert S\vert\lt 1$ 인 주파수에서 되먹임이 외란을 줄이고 $\vert S\vert\gt 1$ 인 주파수에서 키운다.

$L(s)=3/(s+1)^2$ 이면 닫힌 고리의 극은 $s^2+2s+4=0$ 의 근 $-1\pm i\sqrt3$ 이라 안정하다. $x=\omega^2$ 으로 두면 다음이 나온다.

$$
\vert S(i\omega)\vert^2=\frac{(1+x)^2}{(4-x)^2+4x}=\frac{(1+x)^2}{x^2-4x+16}
$$

$\omega=0$ 에서 $\vert S\vert=1/4$ 이다. 분자가 분모보다 큰 것은 $6x\gt 15$, 곧 $\omega\gt\sqrt{2.5}\approx 1.58$ 일 때이고, 미분해 보면 $x=6$ 에서 가장 커서 $\vert S\vert=\sqrt{49/28}\approx 1.32$ 다.

이득을 $8$ 로 키우면 $\omega=0$ 에서 $1/9$ 로 더 줄지만, $\omega\gt\sqrt5$ 에서 커지고 $\omega=\sqrt{11}$ 에서 $\sqrt3\approx 1.73$ 배가 된다. 두 경우 모두 $\log\vert S(i\omega)\vert$ 를 $\omega$ 에 대해 $0$ 부터 $\infty$ 까지 적분하면 $0$ 이다. 낮은 주파수에서 음수인 넓이를 높은 주파수의 양수인 넓이가 정확히 갚는다.

# 정의

## 감도 함수

열린 고리 전달 함수 $L(s)$ 가 실계수 유리함수이고 분모의 차수가 분자의 차수보다 크다고 하자. 다음 함수를 **감도 함수(sensitivity function)** 라 한다.

$$
S(s)=\frac{1}{1+L(s)}
$$

$S$ 의 극은 [Nyquist 판정법](nyquist-criterion.md)의 닫힌 고리의 극이고, $S$ 의 영점은 $L$ 의 극이다. 직관 절에서 $S$ 의 분자는 $(s+1)^2$, 분모는 $s^2+2s+4$ 다.

## 상대 차수

$L$ 의 분모 차수에서 분자 차수를 뺀 값을 **상대 차수(relative degree)** 라 한다. 상대 차수가 $2$ 이상이면 $sL(s)\to 0$ 이고, $1$ 이면 $sL(s)$ 가 $0$ 아닌 상수 $\kappa$ 로 간다. 직관 절의 $L$ 은 상대 차수가 $2$ 다.

# 성질

## Bode 감도 적분

닫힌 고리가 안정하고 $L$ 의 오른쪽 반평면 극이 $p_1,\dots,p_m$ 이면 다음이 성립한다[^1][^2].

$$
\int_0^\infty\log\vert S(i\omega)\vert\thinspace d\omega=\pi\sum_{k=1}^m\mathrm{Re}\thinspace p_k-\frac{\pi}{2}\kappa
$$

상대 차수가 $2$ 이상이면 $\kappa=0$ 이다. 직관 절은 $m=0$, $\kappa=0$ 이라 적분이 $0$ 이다.

증명의 요지. 실수부가 $0$ 아닌 복소수 $c$, $c'$ 에 대해, 대칭 극한으로 다음이 성립한다.

$$
\int_{-\infty}^{\infty}\bigl(\log\vert i\omega-c\vert-\log\vert i\omega-c'\vert\bigr)\thinspace d\omega=\pi\bigl(\vert\mathrm{Re}\thinspace c\vert-\vert\mathrm{Re}\thinspace c'\vert\bigr)
$$

$S$ 를 영점 $z_i$ 와 극 $q_j$ 의 일차인수로 쓰고 이 등식을 인수마다 더하면 $\int_{-\infty}^{\infty}\log\vert S\vert$ 는 $\pi(\sum\vert\mathrm{Re}\thinspace z_i\vert-\sum\vert\mathrm{Re}\thinspace q_j\vert)$ 다. 상대 차수가 $2$ 이상이면 $z_i$ 를 근으로 하는 $L$ 의 분모와 $q_j$ 를 근으로 하는 $1+L$ 의 분자가 위의 두 계수를 공유해 $\sum z_i=\sum q_j$ 다. 모든 $q_j$ 가 왼쪽 반평면에 있으므로 $\sum\vert\mathrm{Re}\thinspace q_j\vert=-\sum\mathrm{Re}\thinspace z_i$ 이고, 차가 $2\sum\_{\mathrm{Re}\thinspace z_i\gt 0}\mathrm{Re}\thinspace z_i$ 로 줄어든다. $\vert S(i\omega)\vert$ 는 $\omega$ 에 대해 짝함수이므로 절반이 $0$ 부터 $\infty$ 까지의 적분이다.

## 상대 차수 1 의 예

$L(s)=1/(s+1)$ 이면 $S=(s+1)/(s+2)$ 이고 $\kappa=1$ 이다. 다음 적분은 앞 절의 등식으로 직접 계산된다.

$$
\int_0^\infty\frac12\log\frac{1+\omega^2}{4+\omega^2}\thinspace d\omega=\frac{\pi}{2}(1-2)=-\frac{\pi}{2}
$$

정리의 오른쪽 $-\pi\kappa/2$ 와 같다. 상대 차수가 $1$ 이면 고리가 높은 주파수까지 이득을 유지해 음의 넓이가 남는다.

## 불안정한 극의 비용

$L(s)=4/\bigl((s-1)(s+2)\bigr)$ 이면 닫힌 고리의 극은 $s^2+s+2=0$ 의 근이라 안정하고, 오른쪽 반평면 극 $p=1$ 이 하나다. 그래서 $\int_0^\infty\log\vert S\vert\thinspace d\omega=\pi$ 이다. 같은 대역에서 같은 만큼 외란을 줄이려면 열린 고리가 안정할 때보다 $\pi$ 만큼 더 큰 양의 넓이를 다른 주파수에서 치러야 한다.

## 대역 제한과 감도의 봉우리

가로축이 $\omega$ 그대로라 양의 넓이는 아주 넓은 대역에 얇게 퍼질 수 있다. 실제 고리는 어느 주파수 $\omega_c$ 위에서 $\vert L(i\omega)\vert\le\varepsilon(\omega_c/\omega)^2$ 처럼 빨리 줄어야 하므로, $\omega\gt\omega_c$ 에서 $\log\vert S\vert$ 가 $\vert\log(1-\vert L\vert)\vert$ 이하이고 그 적분은 $\omega_c$ 에 비례하는 작은 값이다. 그래서 낮은 주파수 대역에서 $\log\vert S\vert\le -a$ 를 넓은 범위로 요구하면 남은 유한한 대역에서 $\max\vert S\vert$ 가 커져야 한다. 이것을 물침대 효과(waterbed effect)라 한다.

# 활용

- 외란 억제 설계의 한계. [PID 제어](pid-control.md)(proportional–integral–derivative)의 적분 동작은 $\omega\to 0$ 에서 $\vert S\vert\to 0$ 을 만들고, 이 등식은 그 대가로 교차 주파수 근처에 $\vert S\vert\gt 1$ 인 봉우리가 생긴다는 것을 준다. 봉우리의 높이는 Nyquist 선도가 점 $-1$ 에 가장 가까이 간 거리의 역수다.
- 불안정한 장치의 안정화. 오른쪽 반평면 극 $p$ 가 큰 장치일수록 $\pi\sum\mathrm{Re}\thinspace p_k$ 가 커서, 같은 대역폭으로는 감도의 봉우리를 낮게 둘 수 없다. 거꾸로 선 진자를 안정화하려면 극 $p$ 보다 빠른 작동기가 있어야 한다.
- 이산시간 고리. 단위원 위에서 $\log\vert S(e^{i\theta})\vert$ 의 평균이 단위원 밖의 열린 고리 극 $p_k$ 의 $\log\vert p_k\vert$ 의 합과 같다. [Jensen 공식](jensen-formula.md)을 $S$ 에 쓴 것이다.
- 오른쪽 반평면 영점. 열린 고리에 오른쪽 반평면 영점이 있으면 Poisson 적분 꼴의 가중 적분 제약이 더해지고, [Bode 선도](bode-plot.md)의 이득–위상 관계가 깨지는 것과 같은 원인으로 대역폭에 상한이 생긴다.

[^1]: H. W. Bode, *Network Analysis and Feedback Amplifier Design*, Van Nostrand, 1945, 13 장.
[^2]: J. S. Freudenberg, D. P. Looze, "Right half plane poles and zeros and design tradeoffs in feedback systems", *IEEE Transactions on Automatic Control* 30 (1985), 555–565.

# 연관 문서

## 선수지식

- [Bode 선도](bode-plot.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #optimization #signal_processing
