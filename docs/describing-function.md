# 기술 함수

# 개요

**기술 함수(describing function)** 는 비선형 소자에 사인파를 넣었을 때 나오는 신호의 기본 진동수 성분만 남겨, 그 소자를 진폭에 따라 바뀌는 이득으로 바꿔 쓴 것이다. 켜고 끄기만 하는 난방기로 온도를 조절하면 온도가 목표 둘레에서 일정한 폭과 주기로 오르내린다. 켜기와 끄기는 상수배가 아니어서 선형 되먹임의 판정법으로는 그 폭과 주기를 계산할 수 없다. 기술 함수는 켜고 끄기를 진폭마다 정해지는 이득으로 바꿔, 선형 고리의 계산으로 진동의 폭과 주기를 어림한다.

# 직관

[Nyquist 판정법](nyquist-criterion.md) 문서의 장치 $G(s)=1/(s+1)^3$ 을 계전기(relay)로 되먹임한다. 계전기는 입력이 양수이면 $1$, 음수이면 $-1$ 을 낸다. 목표값이 $0$ 이면 계전기의 입력은 $e=-y$ 이고, 장치의 출력은 $0$ 둘레에서 진동한다.

진동이 자리 잡아 $e(t)=a\sin\omega t$ 에 가깝다고 한다. 계전기의 출력은 높이가 $\pm 1$ 인 네모파다. 네모파의 [Fourier 급수](fourier-series.md)는 다음이다.

$$
\frac{4}{\pi}\left(\sin\omega t+\frac13\sin 3\omega t+\frac15\sin 5\omega t+\cdots\right)
$$

장치는 높은 진동수를 크게 줄이므로 $3\omega$ 이상의 항은 출력에 거의 남지 않는다. 기본 진동수만 보면 계전기는 사인파 $a\sin\omega t$ 를 $(4/\pi)\sin\omega t$ 로 바꾸므로 이득 $4/(\pi a)$ 인 소자와 같다. 진폭이 작으면 이득이 크고, 진폭이 크면 이득이 작다.

이득이 $k$ 인 고리가 사인파를 유지하려면 $kG(i\omega)=-1$ 이어야 한다. $G(i\omega)$ 의 편각이 $-180^\circ$ 인 진동수는 $3\arctan\omega=\pi$ 에서 $\omega=\sqrt 3$ 이고, 그때 $\vert G\vert=1/8$ 이다. 그래서 $4/(\pi a)=8$ 이고 다음이 나온다.

$$
a=\frac{1}{2\pi}\approx 0.159,\qquad T=\frac{2\pi}{\sqrt 3}\approx 3.63
$$

진동의 진폭은 약 $0.159$, 주기는 약 $3.63$ 으로 어림된다.

# 정의

비선형 소자 $\phi$ 에 $x(t)=a\sin\omega t$ 를 넣은 출력 $\phi(a\sin\omega t)$ 를 Fourier 급수로 전개하고, 기본 진동수 성분을 $b_1\sin\omega t+a_1\cos\omega t$ 라 한다. 다음 복소수를 $\phi$ 의 기술 함수라 한다[^1].

$$
N(a)=\frac{b_1+ia_1}{a},\qquad b_1=\frac{1}{\pi}\int_0^{2\pi}\phi(a\sin\theta)\sin\theta\thinspace d\theta,\qquad a_1=\frac{1}{\pi}\int_0^{2\pi}\phi(a\sin\theta)\cos\theta\thinspace d\theta
$$

$\phi$ 가 기억이 없고 홀함수이면 $a_1=0$ 이라 $N(a)$ 는 실수이고 $\omega$ 에 달리지 않는다. 직관 절의 계전기는 높이가 $M$ 이면 다음이다.

$$
N(a)=\frac{4M}{\pi a}
$$

기울기 $1$ 로 늘다가 $\pm\delta$ 에서 멈추는 포화 소자는 $a\le\delta$ 이면 $N(a)=1$ 이고, $a\gt\delta$ 이면 다음이다.

$$
N(a)=\frac{2}{\pi}\left(\arcsin\frac{\delta}{a}+\frac{\delta}{a}\sqrt{1-\frac{\delta^2}{a^2}}\right)
$$

$a$ 가 커지면 포화된 부분이 길어져 $N(a)$ 가 $1$ 에서 $0$ 으로 준다.

# 성질

## 조화 균형

선형 장치 $G$ 와 비선형 소자 $\phi$ 를 음의 되먹임으로 이은 고리에서, 진폭 $a$ 와 진동수 $\omega$ 의 진동이 있으려면 다음 **조화 균형 방정식(harmonic balance equation)** 을 만족해야 한다는 것이 기술 함수 법의 어림이다.

$$
G(i\omega)=-\frac{1}{N(a)}
$$

$N$ 이 실수이면 $G(i\omega)$ 의 Nyquist 선도가 음의 실수축을 지나는 점에서 $\omega$ 가 정해지고, 그 점의 값으로 $a$ 가 정해진다. 직관 절의 계산이 이것이다.

## 어림의 근거

$\phi$ 의 출력 가운데 $k\omega$ 성분은 장치를 지나며 $\vert G(ik\omega)\vert$ 배가 된다. 장치가 높은 진동수를 충분히 줄이면 되먹임되는 신호가 사인파에 가깝고, 어림이 맞는다. 직관 절에서 $\vert G(3\sqrt 3\thinspace i)\vert=1/28^{3/2}\approx 1/148$ 이다. 계전기 출력의 셋째 조화는 기본의 $1/3$ 이므로, 장치 출력에서 셋째 조화는 기본의 약 $(1/3)(8/148)\approx 0.018$ 배다.

이것은 정리가 아니라 어림이다. 장치가 높은 진동수를 덜 줄이면 예측한 진동이 없거나 진폭이 크게 다를 수 있다[^1].

## 진동의 안정성

$-1/N(a)$ 를 $a$ 에 따라 움직이는 점으로 보고, Nyquist 선도가 감는 영역에 그 점이 들어가면 진폭이 자라고, 영역 밖이면 진폭이 준다고 어림한다. $a$ 가 커질 때 $-1/N(a)$ 가 선도와 만나는 점을 지나 감긴 영역 안에서 밖으로 나가면 예측한 진동은 안정한 [극한 순환](poincare-bendixson.md)이다.

직관 절에서 $-1/N(a)=-\pi a/4$ 는 $a$ 가 커지면 $0$ 에서 음의 실수축을 따라 왼쪽으로 간다. $-1/8$ 보다 오른쪽은 선도가 감는 영역이고 왼쪽은 밖이다. 진폭이 작으면 자라고 크면 줄어 $a=1/(2\pi)$ 에 머문다.

# 활용

- 계전기 자동 조율. 제어기 자리에 계전기를 넣어 장치를 진동시키고 진폭 $a$ 와 주기 $T$ 를 잰다. 조화 균형에서 $4M/(\pi a)$ 가 고리가 지속 진동을 시작하는 이득이고 $T$ 가 그 주기이므로, [PID 제어](pid-control.md)(proportional–integral–derivative control) 문서의 Ziegler–Nichols 조율에 이 두 값을 넣는다[^2]. 직관 절에서는 이득 $8$ 과 주기 $3.63$ 이다.
- 포화와 마찰로 생기는 진동. 구동기의 포화, 기어의 틈, 마찰이 있는 위치 제어에서 진동이 생길지와 그 폭을 미리 어림한다.
- 비선형 안정성 판정과의 비교. [원 판정법](circle-criterion.md)은 기울기 구간의 모든 비선형에 대해 진동이 없음을 증명하고, 기술 함수 법은 특정 비선형에서 진동이 있을 자리를 어림한다.

[^1]: H. K. Khalil, Nonlinear Systems, 3rd ed., Prentice Hall, 2002, §7.2.

[^2]: K. J. Åström, T. Hägglund, "Automatic tuning of simple regulators with specifications on phase and amplitude margins", Automatica 20 (1984), 645–651.

# 연관 문서

## 선수지식

- [Nyquist 판정법](nyquist-criterion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #complex_analysis #analysis
