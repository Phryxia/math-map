# Jordan 보조정리

# 개요

**Jordan 보조정리(Jordan's lemma)** 는 상반평면의 큰 반원 위에서 $e^{iaz}$ 가 곱해진 함수의 적분이 반원의 반지름이 커질 때 $0$ 으로 간다는 정리다. $\int_0^\infty\sin x/x\thinspace dx$ 를 [유수 정리](residue-theorem.md)로 계산하려고 실축을 큰 반원으로 닫으면, 반원 위에서 $\lvert e^{iz}/z\rvert\le 1/R$ 이고 반원의 길이가 $\pi R$ 이라서 단순한 상한으로는 반원 위 적분이 $0$ 으로 가는지 알 수 없다. 이 보조정리는 $e^{iaz}$ 가 반원의 대부분에서 매우 작다는 것을 써서 반원 위 적분을 $\pi/a$ 곱하기 함숫값의 최댓값으로 누른다.

# 직관

실축 구간 $\lbrack -R,R\rbrack$ 과 상반평면의 반원 $C_R=\lbrace Re^{i\theta}:0\le\theta\le\pi\rbrace$ 를 이어 닫힌 경로를 만든다. 유수 정리로 닫힌 경로 적분을 계산하고 $R\to\infty$ 로 보내면, 반원 위 적분이 $0$ 으로 갈 때 실축 위의 [이상적분](improper-integral.md)이 나온다.

$e^{iz}/(1+z^2)$ 에서는 반원 위의 절댓값이 $1/(R^2-1)$ 이하이고 길이가 $\pi R$ 이므로 곱이 $0$ 으로 간다. $e^{iz}/z$ 에서는 절댓값의 상한이 $1/R$ 이라 곱이 $\pi$ 로 남는다. 그래서 반원 위에서 $e^{iz}$ 의 크기를 더 자세히 봐야 한다.

$z=Re^{i\theta}$ 에서 $\lvert e^{iz}\rvert=e^{-R\sin\theta}$ 이다. $\theta$ 가 $0$ 이나 $\pi$ 근처가 아니면 $\sin\theta$ 가 양수로 떨어져 있어서 $e^{-R\sin\theta}$ 는 $R$ 이 커질수록 빠르게 $0$ 으로 간다. $e^{iz}$ 가 작지 않은 곳은 실축 근처의 짧은 두 호뿐이고, 그 호의 길이는 $R$ 이 커져도 늘어나지 않는다. 그래서 반원 위 적분은 $\pi R$ 대신 상수 $\pi$ 곱하기 $1/R$ 로 눌린다.

# 정의

## Jordan 부등식

$0\le\theta\le\pi/2$ 에서 다음이 성립한다. 이것을 **Jordan 부등식(Jordan's inequality)** 이라 한다.

$$
\sin\theta\ge\frac{2\theta}{\pi}
$$

$\sin\theta$ 는 이 구간에서 위로 볼록하므로 그래프가 두 끝점 $(0,0)$ 과 $(\pi/2,1)$ 을 잇는 선분 위에 있다. $\theta=\pi/6$ 이면 좌변이 $1/2$, 우변이 $1/3$ 이다.

## Jordan 보조정리

$a\gt 0$ 이고 $g$ 가 반원 $C_R$ 위에서 연속이라 하자. $M_R$ 을 $C_R$ 위의 $\lvert g\rvert$ 의 최댓값으로 두면 다음이 성립한다[^1].

$$
\left\lvert\int_{C_R}e^{iaz}g(z)\thinspace dz\right\rvert\le\frac{\pi}{a}M_R
$$

$R\to\infty$ 에서 $M_R\to 0$ 이면 반원 위 적분은 $0$ 으로 간다. $g(z)=1/z$ 이면 $M_R=1/R$ 이므로 $e^{iz}/z$ 의 반원 위 적분은 $0$ 으로 간다.

# 성질

## 증명의 요지

$z=Re^{i\theta}$ 로 매개화하면 $\lvert dz\rvert=R\thinspace d\theta$ 이고 $\lvert e^{iaz}\rvert=e^{-aR\sin\theta}$ 이다. $\sin\theta$ 가 $\theta=\pi/2$ 에 대해 대칭이므로 적분을 반으로 접고 Jordan 부등식을 쓴다.

$$
\int_0^\pi e^{-aR\sin\theta}R\thinspace d\theta=2R\int_0^{\pi/2}e^{-aR\sin\theta}\thinspace d\theta\le 2R\int_0^{\pi/2}e^{-2aR\theta/\pi}\thinspace d\theta=\frac{\pi}{a}\left(1-e^{-aR}\right)
$$

우변은 $\pi/a$ 보다 작으므로 적분의 절댓값이 $M_R\pi/a$ 이하다.

## 하반평면과 다른 방향

$a\lt 0$ 이면 $e^{iaz}$ 는 하반평면에서 작아지므로 하반평면의 반원으로 닫으면 같은 부등식이 $\pi/\lvert a\rvert$ 로 성립한다. $e^{iaz}$ 대신 $e^{sz}$ 를 쓰는 경우에는 $e^{sz}$ 가 작아지는 반평면 쪽의 반원으로 닫는다.

## 작은 반원 보조정리

$f$ 가 $z_0$ 에서 1 차 극을 갖고, $C_\varepsilon$ 이 $z_0$ 를 중심으로 하고 반지름이 $\varepsilon$ 인 상반평면 쪽 반원을 시계 방향으로 도는 경로이면 다음이 성립한다[^1].

$$
\lim_{\varepsilon\to 0}\int_{C_\varepsilon}f(z)\thinspace dz=-\pi i\thinspace\mathrm{Res}\_{z=z_0}f
$$

$f(z)=c/(z-z_0)+h(z)$ 로 쓰면 $h$ 는 $z_0$ 근처에서 유계라서 그 적분은 $0$ 으로 가고, $c/(z-z_0)$ 의 반원 적분은 $-\pi i c$ 다. 실축 위에 1 차 극이 있을 때 경로를 그 극 위로 작은 반원만큼 비켜 가는 데 쓴다.

# 활용

## Dirichlet 적분

$e^{iz}/z$ 를 다음 닫힌 경로에서 적분한다. 실축의 $\lbrack -R,-\varepsilon\rbrack$, 원점 위의 작은 반원 $C_\varepsilon$, 실축의 $\lbrack\varepsilon,R\rbrack$, 큰 반원 $C_R$ 이다. 경로 안에 극이 없으므로 합은 $0$ 이다.

$R\to\infty$ 에서 $C_R$ 위 적분은 Jordan 보조정리로 $0$ 으로 가고, $\varepsilon\to 0$ 에서 $C_\varepsilon$ 위 적분은 작은 반원 보조정리로 $-\pi i$ 로 간다. 그래서 실축 위 두 구간의 적분의 합은 $\pi i$ 로 간다.

$$
\int_{-R}^{-\varepsilon}\frac{e^{ix}}{x}\thinspace dx+\int_{\varepsilon}^{R}\frac{e^{ix}}{x}\thinspace dx=2i\int_\varepsilon^R\frac{\sin x}{x}\thinspace dx
$$

$\cos x/x$ 는 홀함수라서 두 구간에서 지워지고 $\sin x/x$ 는 짝함수라서 두 배가 된다. 그러므로 $\int_0^\infty\sin x/x\thinspace dx=\pi/2$ 다.

## 분모와 분자의 차수가 하나 차이 나는 Fourier 적분

$x\sin x/(x^2+1)$ 처럼 유리함수 부분이 $1/x$ 정도로만 줄어드는 적분은 단순한 상한으로 반원 위 적분을 누를 수 없다. Jordan 보조정리에서 $g(z)=z/(z^2+1)$ 은 $M_R\le R/(R^2-1)\to 0$ 이므로 반원 위 적분이 $0$ 으로 간다. 상반평면의 극 $z=i$ 에서 유수를 계산하면 다음이 나온다.

$$
\int_{-\infty}^{\infty}\frac{x e^{ix}}{x^2+1}\thinspace dx=2\pi i\cdot\frac{ie^{-1}}{2i}=\frac{\pi i}{e}
$$

허수부를 비교하면 $\int_{-\infty}^{\infty}x\sin x/(x^2+1)\thinspace dx=\pi/e$ 다. 같은 방법으로 차수가 하나 이상 차이 나는 유리함수 $g$ 에 대해 $g(x)e^{iax}$ 의 적분, 곧 [Fourier 변환](fourier-transform.md)의 값을 유수의 합으로 계산한다.

## Laplace 역변환

[Laplace 변환](laplace-transform.md)의 Bromwich 적분은 수직선 위의 적분이다. $t\gt 0$ 에서 $e^{st}$ 는 왼쪽 반평면에서 작아지므로 왼쪽으로 큰 반원을 그려 닫고, 하반평면과 다른 방향 절의 변형으로 그 반원 위 적분을 $0$ 으로 보낸다. 그러면 역변환이 $F(s)e^{st}$ 의 극에서의 유수의 합이 된다.

[^1]: J. W. Brown, R. V. Churchill, Complex Variables and Applications, 8th ed., McGraw-Hill, 2009, 7장.

# 연관 문서

## 선수지식

- [유수 정리](residue-theorem.md)
- [이상적분](improper-integral.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #theorem
