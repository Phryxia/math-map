# Bogdanov–Takens 분기

# 개요

**Bogdanov–Takens 분기(Bogdanov–Takens bifurcation)** 는 매개변수가 둘인 평면 자율 미분방정식에서 평형점의 일차 근사가 고윳값 $0$ 을 두 번 갖고 대각화되지 않을 때 일어나는 분기다. 매개변수 평면의 한 점에서 평형점 둘이 합쳐지는 곡선, [Hopf 분기](hopf-bifurcation.md)가 일어나는 곡선, 극한 순환이 평형점을 지나는 닫힌 궤도로 바뀌어 사라지는 곡선이 만난다. 셋째 곡선의 위치와 극한 순환이 하나뿐이라는 것은 [약한 Hilbert 16 번째 문제](weak-hilbert-sixteenth-problem.md)의 Abel 적분으로 증명된다.

# 직관

매개변수 $\beta=(\beta_1,\beta_2)$ 를 가진 방정식

$$
x'=y,\qquad y'=\beta_1+\beta_2y+x^2-xy
$$

의 평형점과 그 근처의 해가 $\beta$ 에 따라 어떻게 바뀌는지 알고 싶다. 평형점은 $y=0$, $x^2=-\beta_1$ 이다. $\beta_1\gt 0$ 이면 평형점이 없고, $\beta_1\lt 0$ 이면 $x_\pm=\pm\sqrt{-\beta_1}$ 둘이 있으며, $\beta_1=0$ 에서 둘이 합쳐진다.

$(x,0)$ 에서 일차 근사의 행렬은 $\begin{pmatrix}0&1\cr 2x&\beta_2-x\end{pmatrix}$ 이다. $x_+$ 에서는 행렬식이 $-2x_+\lt 0$ 이라 안장점이다. $x_-$ 에서는 행렬식이 $2\sqrt{-\beta_1}\gt 0$ 이고 대각합이 $\beta_2+\sqrt{-\beta_1}$ 이므로, 곡선 $\beta_2=-\sqrt{-\beta_1}$ 위에서 고윳값이 허수축 위의 켤레 복소수가 되어 Hopf 분기가 일어난다. $\beta=0$ 에서는 두 곡선이 만나고 행렬이 $\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 이 되어 고윳값이 $0$ 두 개다.

$\beta$ 가 원점 둘레를 한 바퀴 돌면 Hopf 곡선에서 극한 순환이 생긴다. 평면의 닫힌 궤도는 안쪽에 평형점을 두어야 하므로 평형점이 없는 $\beta_1\gt 0$ 에 닿기 전에 극한 순환이 사라져야 한다. 그래서 원점에서 나오는 셋째 곡선이 있고, 그 곡선 위에서 극한 순환은 안장점 $x_+$ 에서 나가 다시 $x_+$ 로 들어오는 궤도가 된다.

셋째 곡선은 축척을 바꿔 찾는다. $\beta_1=-\delta^4$, $\beta_2=\gamma\delta^2$, $x=\delta^2u$, $y=\delta^3v$, $t=\tau/\delta$ 로 두면 방정식은

$$
\frac{du}{d\tau}=v,\qquad \frac{dv}{d\tau}=-1+u^2+\delta(\gamma-u)v
$$

이다. $\delta=0$ 이면 $H=v^2/2+u-u^3/3$ 이 보존되는 Hamilton 계이고, $u=-1$ 둘레의 닫힌 궤도들은 $h=H$ 가 $-2/3$ 에서 $2/3$ 으로 갈 때 점 $u=-1$ 에서 안장점 $u=1$ 을 지나는 고리까지 커진다. 한 바퀴 동안 $H$ 의 변화는

$$
\delta\oint(\gamma-u)v\thinspace du+O(\delta^2)=\delta\bigl(\gamma I_0(h)-I_1(h)\bigr)+O(\delta^2),\qquad I_0=\oint v\thinspace du,\quad I_1=\oint uv\thinspace du
$$

이므로 극한 순환은 $\gamma=I_1(h)/I_0(h)$ 인 궤도 근처에 있다. 닫힌 궤도가 점으로 줄어드는 끝에서 이 비는 $-1$ 로 다가가 Hopf 곡선 $\gamma=-1$ 을 주고, 안장점을 지나는 고리에서는 $-5/7$ 이 되어 셋째 곡선 $\gamma=-5/7$ 을 준다.

# 정의

$x'=f(x,\alpha)$ 가 평면에서 정의되고 매개변수 $\alpha\in\mathbb R^2$ 에 매끄럽게 의존하며 $f(0,0)=0$ 이다. 다음 조건을 만족하는 $(0,0)$ 을 **Bogdanov–Takens 점(Bogdanov–Takens point)** 이라 한다.

1. $D_xf(0,0)$ 은 영행렬이 아니고 고윳값이 $0$ 두 개다. 좌표를 바꾸면 $D_xf(0,0)=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 이다.
2. 그 좌표에서 $\alpha=0$ 인 방정식을 $x_1'=x_2+\dots$, $x_2'=a x_1^2+b x_1x_2+\dots$ 로 쓸 때 $ab\ne 0$ 이다.
3. 사상 $(x,\alpha)\mapsto(f(x,\alpha),\ \mathrm{tr}\thinspace D_xf(x,\alpha),\ \det D_xf(x,\alpha))$ 의 $(0,0)$ 에서의 미분이 가역이다.

**정리(Bogdanov, Takens).** Bogdanov–Takens 점 근처에서 방정식은 원점 근처의 매개변수와 상태에서

$$
x'=y,\qquad y'=\beta_1+\beta_2y+x^2+sxy,\qquad s=\mathrm{sign}(ab)
$$

와 위상 동치다. 곧 매개변수의 연속인 좌표 변환 $\alpha\mapsto\beta$ 와, $\beta$ 마다 해 곡선을 방향을 지키며 옮기는 위상동형사상이 존재한다.[^1][^2]

직관 절의 방정식은 $s=-1$ 인 경우다. $s=1$ 인 경우는 $t$ 를 $-t$ 로, $y$ 를 $-y$ 로 바꾸면 $s=-1$ 인 경우로 옮겨진다.

# 성질

## 분기 곡선

$s=-1$ 일 때 $\beta$ 평면의 원점에서 다음 세 곡선이 나온다.[^1]

| 곡선 | 식 | 해의 변화 |
| ---- | -- | ---- |
| 안장점 마디점 곡선 | $\beta_1=0$ | 평형점 둘이 합쳐져 사라진다 |
| Hopf 곡선 | $\beta_1=-\beta_2^2$, $\beta_2\lt 0$ | $x_-$ 에서 극한 순환이 생긴다 |
| 호모클리닉 곡선 | $\beta_1=-\frac{49}{25}\beta_2^2+o(\beta_2^2)$, $\beta_2\lt 0$ | 극한 순환이 안장점의 호모클리닉 궤도가 되어 사라진다 |

평형점 둘이 합쳐지는 첫째 분기를 **안장점 마디점 분기(saddle-node bifurcation)**, 안장점에서 나가 같은 안장점으로 들어오는 궤도를 **호모클리닉 궤도(homoclinic orbit)** 라 한다. 호모클리닉 곡선의 계수 $49/25$ 는 직관 절의 $\gamma=-5/7$ 을 $\beta_2=\gamma\sqrt{-\beta_1}$ 에 넣어 얻는다. Hopf 곡선에서 첫 Lyapunov 계수는 음수여서 Hopf 분기가 초임계이고, 생긴 극한 순환은 안정하다.

## 극한 순환의 유일성

**정리.** $s=-1$ 일 때 Hopf 곡선과 호모클리닉 곡선 사이의 매개변수에서 극한 순환은 정확히 하나이고 안정하다. 그 밖의 매개변수에서는 극한 순환이 없다.[^1]

증명의 요지. 직관 절의 축척에서 극한 순환은 첫 Melnikov 함수 $\gamma I_0(h)-I_1(h)$ 의 영점에 대응한다. 비 $R(h)=I_1(h)/I_0(h)$ 가 $(-2/3,2/3)$ 에서 순증가해 $-1$ 에서 $-5/7$ 로 가므로, $-1\lt\gamma\lt -5/7$ 이면 영점이 하나이고 단순 영점이며 그 밖에서는 영점이 없다. $I_0$, $I_1$ 이 만족하는 Picard–Fuchs 방정식(Picard–Fuchs equation)으로 $R$ 이 만족하는 Riccati 방정식을 얻고, 그 방정식의 해의 부호로 단조성을 보인다. 작은 $\delta$ 에서 닫힌 궤도 족의 두 끝 근처는 Hopf 분기 정리와 호모클리닉 궤도 근처의 귀환 사상으로 따로 다룬다.[^1]

## 여차원

Bogdanov–Takens 분기는 매개변수 둘을 써야 일반적으로 나타난다. 매개변수가 하나인 방정식의 족에서 고윳값 $0$ 이 두 개인 평형점은 일반적으로 생기지 않고, 매개변수 둘인 족에서는 매개변수 평면의 고립점으로 생긴다. 이런 뜻에서 Bogdanov–Takens 분기는 여차원(codimension) $2$ 의 분기이고, 안장점 마디점 분기와 Hopf 분기는 여차원 $1$ 이다.

# 활용

- **분기도의 조립.** 매개변수 둘인 방정식의 분기도를 그릴 때 안장점 마디점 곡선과 Hopf 곡선이 만나는 점을 찾으면, 그 점에서 호모클리닉 곡선이 나온다는 것을 계산 없이 알 수 있다. 수치 분기 해석은 이 점에서 호모클리닉 곡선의 추적을 시작한다.[^1]
- **약한 Hilbert 16 번째 문제의 예.** 극한 순환의 유일성 증명은 3 차 Hamilton 함수의 Abel 적분 두 개의 비가 단조라는 것으로 영점 개수를 정확히 센 예다.
- **개체군 모형과 신경 모형.** 포식자-피식자 모형과 FitzHugh–Nagumo 모형 같은 평면 모형에서 매개변수 둘을 움직이면 Bogdanov–Takens 점이 나타나고, 그 근처에서 진동이 생기는 영역의 경계가 위 세 곡선으로 주어진다.[^1]

[^1]: Yu. A. Kuznetsov, *Elements of Applied Bifurcation Theory*, 3rd ed., Springer, 2004, 8 장 4 절.
[^2]: R. I. Bogdanov, "Versal deformations of a singular point of a vector field on the plane in the case of zero eigenvalues", Functional Analysis and Its Applications 9 (1975), 144–145. F. Takens, "Forced oscillations and bifurcations", Communications of the Mathematical Institute, Rijksuniversiteit Utrecht 3 (1974), 1–59.

# 연관 문서

## 선수지식

- [Hopf 분기](hopf-bifurcation.md)
- [약한 Hilbert 16 번째 문제](weak-hilbert-sixteenth-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology
