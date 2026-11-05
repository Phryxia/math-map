# sine-Gordon 방정식

# 개요

**sine-Gordon 방정식(sine-Gordon equation)** 은 줄을 따라 늘어선 진자들이 이웃끼리 용수철로 이어진 체계의 운동을 나타내는 비선형 [파동방정식](wave-equation.md)이다. 예로 이 줄에서 진자들이 한쪽부터 차례로 한 바퀴씩 넘어가는 비틀림은 모양을 유지한 채 일정한 속도로 줄을 따라 이동한다. 이 방정식은 그런 비틀림을 정확한 해로 적고, 두 비틀림이 부딪친 뒤에도 모양을 유지함을 보인다.

# 직관

줄을 따라 늘어선 진자들의 각을 위치 $x$ 와 시각 $t$ 의 함수 $u(x,t)$ 로 적으면, 단위를 맞춘 운동방정식은 $u\_{tt}-u\_{xx}+\sin u=0$ 이다. Korteweg–de Vries(KdV) 방정식의 [솔리톤](solitons.md)은 모양을 유지하며 일정한 속도로 움직이고, 진폭이 정해지면 속도가 따라 정해진다. 이 방정식에서도 모양을 유지하며 움직이는 해를 찾는다.

$u(x,t)=\phi(z)$, $z=x-ct$ 를 넣으면 $(c^2-1)\phi''+\sin\phi=0$ 이다. 한 번 적분하면

$$
\frac{c^2-1}{2}(\phi')^2-\cos\phi=C
$$

다. $\phi$ 가 유계이고 $z\to\pm\infty$ 에서 $\phi'\to0$ 이려면 양쪽 끝에서 $\sin\phi=0$ 이어야 하므로 $\phi$ 는 $2\pi$ 의 정수배로 간다. 끝값을 $\phi(-\infty)=0$ 과 $\phi(+\infty)=2\pi$ 로 잡으면 $C=-1$ 이고 위 식이

$$
\frac{c^2-1}{2}(\phi')^2=\cos\phi-1=-2\sin^2\frac{\phi}{2}
$$

가 된다. 오른쪽이 음수이므로 $c^2\lt 1$ 이어야 하고, 그 아래에서 $\phi'=\dfrac{2}{\sqrt{1-c^2}}\sin\dfrac{\phi}{2}$ 를 적분하면

$$
\phi(z)=4\arctan\exp\frac{z}{\sqrt{1-c^2}}
$$

가 나온다.

이 해는 KdV 솔리톤과 다르다. 양쪽 끝값의 차가 $2\pi$ 로 고정되어 진폭을 고를 수 없고, 대신 속도는 $\lvert c\rvert\lt 1$ 안에서 아무 값이나 된다. 속도를 키우면 폭이 $\sqrt{1-c^2}$ 배로 줄어든다.

끝값의 차가 고정되는 것은 $\sin u$ 의 영점이 $2\pi$ 간격이라는 사실에서 나왔으므로, 그 차를 $2\pi$ 로 나눈 정수가 해마다 붙는다. 해를 연속으로 변형해도 양쪽 끝에서 $\sin u=0$ 을 유지하는 동안 이 정수는 뛰지 않는다.

# 정의

## sine-Gordon 방정식

**sine-Gordon 방정식** 은 다음 편미분방정식이다.

$$
u\_{tt}-u\_{xx}+\sin u=0
$$

이름은 Klein–Gordon 방정식(Klein–Gordon equation) $u\_{tt}-u\_{xx}+u=0$ 의 선형 항 $u$ 를 $\sin u$ 로 바꾼 데서 왔다. 직관 절의 $4\arctan\exp(z/\sqrt{1-c^2})$, $z=x-ct$ 가 이 방정식의 해다.

## 두 좌표계

빛원뿔 좌표(light-cone coordinates) $\xi=(x-t)/2$, $\eta=(x+t)/2$ 를 쓴다. $\partial\_x=\tfrac12(\partial\_\xi+\partial\_\eta)$ 와 $\partial\_t=\tfrac12(\partial\_\eta-\partial\_\xi)$ 이므로 $u\_{tt}-u\_{xx}=-u\_{\xi\eta}$ 다. 그래서 $u\_{tt}-u\_{xx}+\sin u=0$ 과

$$
u\_{\xi\eta}=\sin u
$$

가 같은 방정식이다. 솔리톤 계산은 앞 꼴로, 기하와 Bäcklund 변환은 뒤 꼴로 한다.

## 위상 전하

$u$ 가 양쪽 끝에서 $\sin u=0$ 의 근으로 가는 해일 때

$$
N=\frac{1}{2\pi}\lbrack u(+\infty,t)-u(-\infty,t)\rbrack
$$

을 **위상 전하(topological charge)** 라 한다. $N$ 은 정수다. $N=1$ 인 해를 **kink**, $N=-1$ 인 해를 **antikink** 라 한다. 직관 절의 해는 $u(-\infty)=0$, $u(+\infty)=2\pi$ 이므로 $N=1$ 인 kink 이고, $x$ 를 $-x$ 로 바꾼 해는 $N=-1$ 인 antikink 다.

# 성질

## 위상 전하의 보존

위상 전하는 $t$ 에 따라 변하지 않는다. $N=\frac{1}{2\pi}\int\_{\mathbb R}u\_x\thinspace dx$ 이고, $\frac{d}{dt}\int u\_x\thinspace dx=\int u\_{xt}\thinspace dx=u\_t(+\infty)-u\_t(-\infty)=0$ 이다. 에너지나 운동량과 달리 이 양은 방정식의 대칭이 아니라 경계 조건에서 나온다.

## kink 해

$\lvert c\rvert\lt 1$ 마다

$$
u(x,t)=4\arctan\exp\frac{x-ct}{\sqrt{1-c^2}}
$$

는 위상 전하 $1$ 인 해다.

증명의 요지. $\gamma=(1-c^2)^{-1/2}$ 로 두면 $u\_x=2\gamma\thinspace\mathrm{sech}\thinspace\gamma(x-ct)$ 이고 $\sin\tfrac{u}{2}=\mathrm{sech}\thinspace\gamma(x-ct)$ 이므로 $u\_x=2\gamma\sin\tfrac u2$ 다. 양변을 미분하고 $u\_t=-cu\_x$ 를 쓰면 방정식이 나온다.

폭이 $\gamma^{-1}=\sqrt{1-c^2}$ 이므로 속도가 $1$ 에 가까워지면 해가 좁아진다. 속도 $1$ 은 선형 항 $u\_{tt}-u\_{xx}$ 의 특성 속도이고 kink 가 그것을 넘지 못한다.

## breather

$0\lt\omega\lt 1$ 마다 다음 함수는 위상 전하 $0$ 이고 주기 $2\pi/\omega$ 로 진동하는 해이고, 이를 breather 라 한다.

$$
u(x,t)=4\arctan\Bigl(\frac{\sqrt{1-\omega^2}}{\omega}\thinspace\frac{\cos\omega t}{\cosh\bigl(x\sqrt{1-\omega^2}\bigr)}\Bigr)
$$

위상 전하가 $0$ 이고 kink 와 antikink 가 묶인 상태다. $\omega\to1$ 에서 진폭이 $0$ 으로 가고 해가 선형 방정식의 작은 진동으로 간다. $\omega\to0$ 에서는 kink 와 antikink 가 멀어진다. KdV 방정식에는 이런 주기해가 없다.

## Bäcklund 변환

$u\_0$ 이 $u\_{\xi\eta}=\sin u$ 의 해이고 $a\ne0$ 일 때, 일차 계

$$
\partial\_\xi\frac{u\_1-u\_0}{2}=a\sin\frac{u\_1+u\_0}{2},\qquad \partial\_\eta\frac{u\_1+u\_0}{2}=\frac1a\sin\frac{u\_1-u\_0}{2}
$$

를 풀어 얻은 $u\_1$ 도 해다. 이 변환을 **Bäcklund 변환(Bäcklund transformation)** 이라 하고 $a$ 를 그 매개변수라 한다.

$u\_0=0$ 에서 출발하면 두 식이 $\partial\_\xi u\_1=2a\sin\tfrac{u\_1}2$ 와 $\partial\_\eta u\_1=\tfrac2a\sin\tfrac{u\_1}2$ 로 풀려 kink 가 나온다. 매개변수를 $a\_1$ 과 $a\_2$ 로 두 번 쓰면 순서를 바꿔도 같은 해가 나오고, 그 교환법칙이 두 kink 의 합성을 대수식으로 준다. 이렇게 $n$ 솔리톤 해를 적분 없이 얻는다.

## 의사구면과의 대응

곡률이 $-1$ 인 곡면을 의사구면(pseudospherical surface)이라 한다. 이 곡면을 점근선 좌표(asymptotic coordinates) $(\xi,\eta)$ 로 적으면 제1기본형식(first fundamental form)이

$$
ds^2=d\xi^2+2\cos u\thinspace d\xi\thinspace d\eta+d\eta^2
$$

이고 $u$ 는 두 점근 방향이 이루는 각이다. 이 계량의 [곡률](curvature.md)을 계산하면 $-1$ 이라는 조건이 $u\_{\xi\eta}=\sin u$ 와 같다.[^1]

Bäcklund 변환은 이 대응에서 곡면을 곡면으로 보내는 기하적 구성이다. 한 곡면의 접평면에 접하고 거리가 일정한 선분의 다른 끝점이 그리는 곡면이 새 해에 대응한다.

# 활용

- 솔리톤 방정식의 분류. sine-Gordon 방정식은 [Lax 쌍](lax-pairs.md)을 가지므로 [역산란 변환](inverse-scattering-transform.md)으로 풀린다. 역산란 변환이 다루는 $2\times2$ 일차 산란 문제에서 sine-Gordon 은 비선형 Schrödinger 방정식과 같은 계열에 든다. 산란 데이터의 시간 전개만 방정식마다 다르다.
- 격자 모형의 연속 극한. 이웃끼리 비틀림으로 이어진 회전자 사슬의 운동방정식에서 간격을 $0$ 으로 보내면 이 방정식이 나온다. kink 는 사슬에서 한 바퀴 꼬임이 이동하는 해다.
- 상수 음곡률 곡면의 구성. Bäcklund 변환을 되풀이해 의사구면에서 새 곡면을 얻는다. 한 번 변환한 것이 Dini 곡면이고, kink 둘을 합성한 해가 Kuen 곡면에 대응한다.

[^1]: Chuu-Lian Terng, Karen Uhlenbeck, *Geometry of solitons*, Notices Amer. Math. Soc. **47** (2000), 17–25. 점근선 좌표의 계량, Gauss 방정식과 sine-Gordon 의 동일시, Bäcklund 변환의 기하적 구성을 다룬다. kink 와 breather 해의 유도는 G. L. Lamb, *Elements of Soliton Theory*, Wiley, 1980, 5 장과 6 장을 따른다.

# 연관 문서

## 선수지식

- [솔리톤](solitons.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #functional_analysis
