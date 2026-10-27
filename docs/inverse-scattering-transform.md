# 역산란 변환

# 개요

**역산란 변환(inverse scattering transform)** 은 비선형 편미분방정식의 초기값 문제를 산란 자료의 선형 흐름으로 바꾸는 방법이다. 얕은 수로에서 일어난 물결 덩어리가 모양을 잃지 않고 멀리까지 가는 현상을 적는 Korteweg–de Vries 방정식(KdV)은 비선형이어서 Fourier 변환으로 풀리지 않는다. 역산란 변환은 해를 Schrödinger 연산자의 포텐셜로 보고, 시간에 따라 단순하게 움직이는 그 산란 자료를 따라간 뒤 포텐셜을 복원해 해를 얻는다.

# 직관

$$
u\_t=6uu\_x-u\_{xxx}
$$

이 식의 해 $u(\cdot,t)$ 를 Schrödinger 연산자 $L=-\partial\_x^2+u$ 의 포텐셜로 보면, [Lax 쌍](lax-pairs.md)이 $L$ 의 스펙트럼을 시간에 변하지 않게 한다. 포텐셜 대신 그 스펙트럼 자료를 좌표로 쓰면 자료마다 [상미분방정식](ordinary-differential-equations.md) 하나가 나오고, 그 해에서 포텐셜을 복원하는 것이 역산란이다.

초기값에서 산란 자료를 읽고, 자료를 시간 $t$ 로 보내고, 자료에서 포텐셜을 복원하는 세 단계로 KdV 를 푼다.

선형 편미분방정식은 Fourier 변환으로 푼다. [열방정식](heat-equation.md) $u\_t=u\_{xx}$ 의 양변을 $x$ 에 대해 변환하면 $\hat u\_t=-k^2\hat u$ 이고, 각 $k$ 에서 상미분방정식 하나가 따로 풀려 $\hat u(k,t)=\hat u(k,0)e^{-k^2t}$ 다. 변환하고, $k$ 마다 지수를 곱하고, 되돌리면 끝난다.

KdV 에 같은 것을 해 본다. $u\_{xxx}$ 항은 $(ik)^3\hat u$ 로 잘 넘어간다. 그런데 $uu\_x$ 를 변환하면 $\hat u$ 와 $ik\hat u$ 의 [합성곱](convolution.md)이 되어, $k$ 에서의 변화율이 모든 $k'$ 에서의 $\hat u(k')$ 에 걸린다. $k$ 마다 따로 풀리는 상미분방정식이 나오지 않는다.

$e^{ikx}$ 가 섞이는 것은 그것을 $u$ 와 무관하게 골랐기 때문이다. $u$ 에 맞춘 함수를 쓴다. $-\psi\_{xx}+u\psi=k^2\psi$ 를 푸는 $\psi$ 를 모으면 되고, Lax 쌍이 $u$ 가 KdV 를 따를 때 이 방정식의 $k$ 가 시간에 변하지 않음을 준다. $u$ 가 먼 곳에서 $0$ 으로 가면 거기서 $\psi$ 는 $e^{ikx}$ 와 $e^{-ikx}$ 의 결합이고, 왼쪽에서 들어온 파가 오른쪽으로 얼마나 지나가고 얼마나 되돌아오는지를 수 몇 개로 적을 수 있다.

그 수들의 시간 변화를 계산하면 되돌아오는 파의 진폭이 $e^{8ik^3t}$ 배로 간다. 열방정식에서 $\hat u(k,0)$ 에 $e^{-k^2t}$ 를 곱한 것과 같은 꼴이고, $k$ 마다 따로 움직인다. 처음 막혔던 자리가 풀린다.

# 정의

## 산란 자료

$u$ 가 $\vert x\vert\to\infty$ 에서 충분히 빨리 $0$ 으로 가는 함수일 때, [Sturm–Liouville 이론](sturm-liouville.md)의 스펙트럼 문제

$$
-\psi\_{xx}+u\psi=E\psi
$$

을 생각한다. 스펙트럼은 음의 고윳값 유한 개 $E=-\kappa\_n^2$ ($\kappa\_1\gt \dots\gt \kappa\_N\gt 0$)와 연속 스펙트럼 $E=k^2\ge0$ 으로 갈린다.

연속 스펙트럼에서는 $x\to-\infty$ 에서 $\psi\sim e^{-ikx}$ 인 해를 잡는다. 이 해가 $x\to+\infty$ 에서

$$
\psi\sim a(k)e^{-ikx}+b(k)e^{ikx}
$$

꼴일 때 $r(k)=b(k)/a(k)$ 를 **반사계수**, $1/a(k)$ 를 **투과계수**라 한다.

음의 고윳값 $-\kappa\_n^2$ 에서는 고유함수 $\psi\_n$ 이 $L^2$ 에 들어가고, $\Vert\psi\_n\Vert\_2=1$ 로 맞춘 뒤 $x\to+\infty$ 에서의 꼬리를 $\psi\_n\sim c\_ne^{-\kappa\_nx}$ 로 적는다. $c\_n$ 을 **규격화 상수**라 한다.

$$
S=\lbrace r(k)\colon k\in\mathbb R\rbrace\cup\lbrace(\kappa\_n,c\_n)\colon n=1,\dots,N\rbrace
$$

을 $u$ 의 **산란 자료**라 한다.

## 변환

**역산란 변환**은 포텐셜을 산란 자료로 보내는 사상 $u\mapsto S$ 의 역과 그 역을 이용한 풀이법이다. KdV 의 초기값 $u(x,0)$ 에서 $S(0)$ 을 얻고, 아래 성질의 식으로 $S(t)$ 를 적고, $S(t)$ 에서 $u(x,t)$ 를 복원한다.

# 성질

## 산란 자료의 시간 변화

**정리.** $u$ 가 KdV 를 따르면 $\kappa\_n$ 은 상수이고

$$
r(k,t)=r(k,0)e^{8ik^3t},\qquad c\_n(t)=c\_n(0)e^{4\kappa\_n^3t}
$$

다.

$\kappa\_n$ 이 상수인 것은 등스펙트럼성이다. 나머지는 고유함수의 시간 변화에서 나온다. $L\psi=E\psi$ 와 Lax 방정식 $\dot L=\lbrack P,L\rbrack$ 에서 $E$ 가 상수이면 $\psi\_t-P\psi$ 가 다시 고윳값 $E$ 의 해이므로, $\psi\_t=P\psi+\lambda\psi$ 가 상수 $\lambda$ 하나로 성립한다. $u\to0$ 인 먼 곳에서 $P\to-4\partial\_x^3$ 이고, 이것이 $e^{-ikx}$ 에 $-4ik^3$ 을, $e^{ikx}$ 에 $4ik^3$ 을 곱한다. 입사파 $e^{-ikx}$ 의 계수를 $1$ 로 고정하려면 $\lambda=4ik^3$ 이어야 하고, 그러면 $e^{ikx}$ 의 계수는 $8ik^3$ 배의 비율로 자란다. 묶인 상태에서는 $-4\partial\_x^3$ 이 $e^{-\kappa\_nx}$ 에 $4\kappa\_n^3$ 을 주고 $\lambda=0$ 이다. ∎

반사계수의 절댓값이 변하지 않으므로 투과계수도 보존량이다. $\log\vert a(k)\vert$ 를 $k$ 로 전개한 계수가 KdV 의 무한히 많은 보존량을 준다.[^1]

## Gelfand–Levitan–Marchenko 방정식

산란 자료에서 포텐셜로 되돌아가는 단계는 적분방정식 하나다. 자료에서

$$
F(\xi)=\sum\_{n=1}^N c\_n^2e^{-\kappa\_n\xi}+\frac{1}{2\pi}\int\_{-\infty}^{\infty}r(k)e^{ik\xi}\thinspace dk
$$

을 만들고, $y\gt x$ 에서

$$
K(x,y)+F(x+y)+\int\_x^{\infty}K(x,z)F(z+y)\thinspace dz=0
$$

을 $K$ 에 대해 푼다. 이것을 **Gelfand–Levitan–Marchenko 방정식**이라 한다. 포텐셜은

$$
u(x)=-2\frac{d}{dx}K(x,x)
$$

로 복원된다.[^2] 핵 $F$ 가 $t$ 를 담고 있으므로 매 $t$ 마다 이 방정식을 풀면 $u(x,t)$ 가 나온다.

$F$ 가 작을 때 Neumann 급수로 풀리고, 묶인 상태만 있고 $r\equiv0$ 인 경우에는 유한 차원 선형계가 되어 닫힌 꼴로 풀린다.

## 고립파 해

$r\equiv0$ 이고 묶인 상태가 $\kappa$ 하나인 자료를 넣으면

$$
u(x,t)=-2\kappa^2\mathrm{sech}^2\lbrack\kappa(x-4\kappa^2t)\rbrack
$$

이 나온다. $K(x,y)=A(x)e^{-\kappa y}$ 로 두면 방정식이 $A$ 에 대한 일차식이 되고, $\beta=\frac{c^2}{2\kappa}e^{-2\kappa x}$ 로 쓰면 $K(x,x)=\frac{d}{dx}\log(1+\beta)$ 이므로 $u=-2\frac{d^2}{dx^2}\log(1+\beta)$ 다. $c^2(t)=c^2(0)e^{8\kappa^3t}$ 를 넣으면 $\beta$ 가 $x-4\kappa^2t$ 만의 함수가 된다.

모양이 변하지 않고 속도 $4\kappa^2$ 로 움직이는 이 해를 **고립파**라 한다. 속도가 고윳값으로 정해지므로 깊은 우물이 빠르다. $-2\kappa^2\mathrm{sech}^2(\kappa x)$ 는 반사계수가 $0$ 이고 묶인 상태가 정확히 하나인 포텐셜이며, 고유함수는 $\mathrm{sech}(\kappa x)$ 다.

## N 고립파 해

$r\equiv0$ 이고 묶인 상태가 $\kappa\_1,\dots,\kappa\_N$ 인 자료에서는 $K(x,y)=\sum\_n A\_n(x)e^{-\kappa\_ny}$ 가 $N$ 차 선형계를 풀어

$$
u(x,t)=-2\frac{\partial^2}{\partial x^2}\log\det\lbrack I+C(x,t)\rbrack,\qquad C\_{mn}=\frac{c\_m(t)c\_n(t)}{\kappa\_m+\kappa\_n}e^{-(\kappa\_m+\kappa\_n)x}
$$

을 준다.[^3] $t\to\pm\infty$ 에서 이 해는 속도 $4\kappa\_n^2$ 인 고립파 $N$ 개로 갈라지고, 각 고립파의 $\kappa\_n$ 이 양쪽에서 같다. 충돌로 바뀌는 것은 위치뿐이다.

## 다른 방정식

같은 구조가 $L$ 을 다른 연산자로 바꾸어 되풀이된다. 비선형 Schrödinger 방정식과 [sine-Gordon 방정식](sine-gordon-equation.md)은 $2\times2$ 일차 계의 산란 문제에 대응하고, 이 꼴을 Ablowitz–Kaup–Newell–Segur 체계라 한다.[^3] 산란 자료가 존재하려면 $L$ 의 스펙트럼 문제가 $u$ 에 대해 적분가능한 계를 이루어야 하므로, 역산란 변환이 적용되는 방정식은 Lax 쌍을 갖는 것에 한정된다.

# 활용

- [Lax 쌍](lax-pairs.md)의 미분연산자 판본이 쓰이는 자리다. 유한 행렬에서는 $\mathrm{tr}(L^k)$ 가 보존량을 주지만 $L$ 이 미분연산자이면 대각합이 없고, 대신 산란 자료가 보존량과 선형으로 움직이는 좌표를 함께 준다.
- [Sturm–Liouville 이론](sturm-liouville.md)의 스펙트럼 문제를 거꾸로 쓴다. 포텐셜에서 스펙트럼을 구하는 것이 순방향이고, 산란 자료에서 포텐셜을 정하는 Gelfand–Levitan–Marchenko 방정식이 역방향이다.
- [적분가능계](integrable-systems.md)의 작용-각 좌표에 대응한다. 유한 자유도에서 작용 변수가 상수이고 각 변수가 선형으로 흐르는 것처럼, $\vert a(k)\vert$ 와 $\kappa\_n$ 이 상수이고 $r(k)$ 의 위상과 $\log c\_n$ 이 선형으로 흐른다.
- [Fourier 변환](fourier-transform.md)의 비선형 대응으로 쓰인다. $u$ 가 작으면 Gelfand–Levitan–Marchenko 방정식의 일차 항만 남아 $r(k)$ 가 $\hat u$ 에 비례하고, 자료의 시간 인자 $e^{8ik^3t}$ 는 선형화한 KdV $u\_t=-u\_{xxx}$ 의 분산 인자와 같다.

[^1]: Clifford S. Gardner, John M. Greene, Martin D. Kruskal, Robert M. Miura, "Method for solving the Korteweg-de Vries equation", *Physical Review Letters* 19 (1967), 1095-1097. 산란 자료로 KdV 를 푸는 방법이 처음 나온 논문이다.
[^2]: Philip G. Drazin, Robin S. Johnson, *Solitons: an Introduction*, Cambridge University Press, 1989, 3 장과 4 장. 산란 자료의 정의, 시간 변화의 유도, Gelfand–Levitan–Marchenko 방정식의 부호 규약을 다룬다.
[^3]: Mark J. Ablowitz, Peter A. Clarkson, *Solitons, Nonlinear Evolution Equations and Inverse Scattering*, Cambridge University Press, 1991, 2 장. N 고립파의 행렬식 꼴과 Ablowitz-Kaup-Newell-Segur 체계가 여기 있다.

# 연관 문서

## 선수지식

- [Sturm–Liouville 이론](sturm-liouville.md)
- [Lax 쌍](lax-pairs.md)

## 더 알아보기

- [솔리톤](solitons.md)

#differential_geometry #analysis #functional_analysis
