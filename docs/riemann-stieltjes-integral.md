# Riemann–Stieltjes 적분

# 개요

Riemann–Stieltjes 적분은 분할의 구간 길이 $x\_i-x\_{i-1}$ 대신 적분자 $g$ 의 증분 $g(x\_i)-g(x\_{i-1})$ 로 무게를 주는 적분이다. $g(x)=x$ 로 두면 Riemann 적분이고, $g$ 가 계단함수면 합이 된다. 적분자가 [유계변동](bounded-variation.md)이고 피적분함수가 연속이면 적분이 존재하며, 이때 $g$ 는 Lebesgue–Stieltjes 측도를 정하고 적분은 그 측도에 대한 적분과 일치한다. 분포함수에 대한 기댓값과 수열의 부분합을 적분으로 바꾸는 계산이 이 적분의 자리다.

# 직관

동전을 던져 앞면이면 $0$ 을 얻고, 뒷면이면 $\lbrack 0,1\rbrack$ 에서 고르게 뽑은 수를 얻는다. 얻는 값 $X$ 의 평균을 구한다. 확률밀도로 계산하려면 $\int\_0^1 x\rho(x)\thinspace dx$ 를 써야 하는데, 질량 $1/2$ 이 점 $0$ 에 쌓여 있어 그 자리의 밀도가 유한한 값이 아니다. 밀도가 없으니 이 적분이 써지지 않는다. 한편 $X$ 는 값을 셀 수 있는 개수만 갖지 않으므로 $\sum\_k x\_kp\_k$ 꼴의 합으로도 쓸 수 없다.

밀도 대신 분포함수를 쓴다. $F(x)=P(X\le x)$ 는 $x\lt 0$ 에서 $0$ , $\lbrack 0,1\rbrack$ 에서 $1/2+x/2$ , $x\gt 1$ 에서 $1$ 이다. 구간 $(u,v\rbrack$ 에 담긴 질량은 밀도를 거치지 않고 $F(v)-F(u)$ 로 바로 읽힌다.

$\lbrack 0,1\rbrack$ 을 $0=x\_0\lt x\_1\lt\cdots\lt x\_n=1$ 로 자르고, 조각마다 그 안의 값 하나 $\xi\_i$ 에 그 조각의 질량 $F(x\_i)-F(x\_{i-1})$ 을 곱해 더한다.

$$
\sum\_{i=1}^{n}\xi\_i\thinspace\lbrack F(x\_i)-F(x\_{i-1})\rbrack
$$

첫 조각 $\lbrack 0,x\_1\rbrack$ 의 질량은 $F(x\_1)-F(0^-)=1/2+x\_1/2$ 이고 점 $0$ 의 질량 $1/2$ 을 품는다. 조각을 잘게 하면 $\xi\_1\to 0$ 이므로 그 항은 $0$ 으로 가고, 나머지 조각에서는 $F$ 의 증분이 $(x\_i-x\_{i-1})/2$ 이므로 합이 $\int\_0^1 x\cdot\tfrac12\thinspace dx=1/4$ 로 간다. 평균은 $1/4$ 다.

구간의 길이를 쓰지 않고 $F$ 의 증분을 쓴 이 합의 극한을 $\int\_0^1 x\thinspace dF(x)$ 로 쓰고, Riemann–Stieltjes 적분이라 한다.

# 정의

$f$ 와 $g$ 를 $\lbrack a,b\rbrack$ 에서 정의된 실함수라 하자. 분할 $P:a=x\_0\lt x\_1\lt\cdots\lt x\_n=b$ 와 표본점 $\xi\_i\in\lbrack x\_{i-1},x\_i\rbrack$ 에 대해 **Riemann–Stieltjes 합**은 다음이다.

$$
S(f,g,P,\xi)=\sum\_{i=1}^{n}f(\xi\_i)\thinspace\lbrack g(x\_i)-g(x\_{i-1})\rbrack
$$

분할의 세분 $\Vert P\Vert=\max\_i(x\_i-x\_{i-1})$ 이 $0$ 으로 갈 때 표본점의 선택과 무관하게 $S(f,g,P,\xi)$ 가 극한 $I$ 로 수렴하면, $f$ 가 $g$ 에 대해 Riemann–Stieltjes 적분 가능하다고 하고 다음으로 쓴다.

$$
\int\_a^b f\thinspace dg=I
$$

$f$ 를 피적분함수, $g$ 를 **적분자**라 한다. $g(x)=x$ 이면 정의가 [Riemann 적분](riemann-integral.md)의 정의와 글자까지 같다.

적분자가 증가함수일 때는 상합과 하합으로 정의해도 된다. 조각마다 $f$ 의 상한과 하한을 쓴 다음 두 양의 하한과 상한이 일치하는 것을 적분 가능으로 삼는다.

$$
\overline{S}(f,g,P)=\sum\_{i=1}^{n}\Big(\sup\_{\lbrack x\_{i-1},x\_i\rbrack}f\Big)\lbrack g(x\_i)-g(x\_{i-1})\rbrack
$$

# 성질

## 존재 정리

*정리.* $f$ 가 $\lbrack a,b\rbrack$ 에서 연속이고 $g$ 가 유계변동이면 $\int\_a^b f\thinspace dg$ 가 존재하고 다음 부등식이 성립한다[^1].

$$
\Big\vert\int\_a^b f\thinspace dg\Big\vert\le\Big(\sup\_{\lbrack a,b\rbrack}\vert f\vert\Big)V\_a^b(g)
$$

*증명의 요지.* 분할 $P$ 를 세분해 $Q$ 를 얻으면 쪼개진 조각 안에서 $f$ 의 값이 $\xi$ 의 선택에 따라 바뀌는 폭이 진동 $\omega(f;\Vert P\Vert)$ 로 눌린다. 각 조각의 기여 차이에 $g$ 의 증분의 절댓값을 곱해 더하면 다음이 나온다.

$$
\vert S(f,g,P,\xi)-S(f,g,Q,\eta)\vert\le\omega(f;\Vert P\Vert)\thinspace V\_a^b(g)
$$

$f$ 가 콤팩트 구간에서 연속이므로 [균등연속](uniform-continuity.md)이고 $\omega(f;\delta)\to 0$ 이다. 따라서 Riemann–Stieltjes 합이 Cauchy 조건을 만족하고 극한이 존재한다. ∎

유계변동은 적분자 쪽의 조건으로 최선에 가깝다. $g$ 가 유계변동이 아니면 연속함수 $f$ 를 잡아 $S(f,g,P,\xi)$ 를 발산시킬 수 있다.

## 선형성

적분은 $f$ 에 대해서도 $g$ 에 대해서도 선형이다.

$$
\int\_a^b f\thinspace d(\alpha g\_1+\beta g\_2)=\alpha\int\_a^b f\thinspace dg\_1+\beta\int\_a^b f\thinspace dg\_2
$$

적분 구간에 대한 가법성은 $g$ 가 쪼갠 점에서 뛰지 않을 때만 곧바로 성립한다. $g$ 가 $c\in(a,b)$ 에서 뛰면 $\int\_a^b$ 가 존재해도 $\int\_a^c$ 와 $\int\_c^b$ 가 따로는 존재하지 않을 수 있다.

## 부분적분

*정리.* $\int\_a^b f\thinspace dg$ 가 존재하면 $\int\_a^b g\thinspace df$ 도 존재하고 다음이 성립한다.

$$
\int\_a^b f\thinspace dg+\int\_a^b g\thinspace df=f(b)g(b)-f(a)g(a)
$$

*증명의 요지.* $S(f,g,P,\xi)$ 에서 $f(\xi\_i)g(x\_i)-f(\xi\_i)g(x\_{i-1})$ 을 $\xi$ 를 분할점으로 삼아 묶어 다시 쓰면 $f(b)g(b)-f(a)g(a)-S(g,f,P',\xi')$ 가 된다. 여기서 $P'$ 는 $\xi\_i$ 들로 된 분할이고 $\Vert P'\Vert\le 2\Vert P\Vert$ 다. 한쪽 극한이 있으면 다른 쪽도 같은 극한을 갖는다. ∎

이 식은 $f$ 와 $g$ 의 역할이 바뀌어도 성립한다. 두 함수 중 하나가 연속이고 다른 하나가 유계변동이면 양쪽 적분이 모두 존재한다.

## 적분자에 따른 환원

| 적분자 $g$ | $\int\_a^b f\thinspace dg$ |
| --- | --- |
| $g(x)=x$ | Riemann 적분 $\int\_a^b f(x)\thinspace dx$ |
| $g$ 가 $C^1$ | $\int\_a^b f(x)g'(x)\thinspace dx$ |
| $g$ 가 $c$ 에서 뜀 $J=g(c^+)-g(c^-)$ | 그 점의 기여가 $f(c)J$ |
| $g$ 가 계단함수, 뜀 $J\_k$ 가 $c\_k$ 에 | $\sum\_k f(c\_k)J\_k$ |

$g$ 가 $C^1$ 인 경우는 평균값 정리로 $g(x\_i)-g(x\_{i-1})=g'(\eta\_i)(x\_i-x\_{i-1})$ 을 대입해 얻는다. 일반적인 유계변동 $g$ 는 Lebesgue 분해로 절대연속 부분과 뜀 부분과 특이 부분으로 갈라지고, 앞의 둘이 표의 두 꼴을 준다.

## 공통 불연속점에서의 실패

$f$ 와 $g$ 가 같은 점에서 불연속이면 적분이 존재하지 않을 수 있다. $c\in(a,b)$ 에 대해 $f=g=\mathbf 1\_{\lbrack c,b\rbrack}$ 로 두면, $c$ 를 품은 조각에서 표본점을 $c$ 보다 작게 잡으면 그 항이 $0$ 이고 $c$ 이상으로 잡으면 $1$ 이다. 분할을 잘게 해도 두 값이 갈려 극한이 없다.

## Lebesgue–Stieltjes 측도와의 대응

$g$ 가 증가하고 우연속이면 $\mu\_g((u,v\rbrack)=g(v)-g(u)$ 로 정해지는 Borel [측도](measure.md)가 유일하게 있다. $f$ 가 연속이면 두 적분이 일치한다[^2].

$$
\int\_a^b f\thinspace dg=\int\_{(a,b\rbrack}f\thinspace d\mu\_g
$$

일반적인 유계변동 $g$ 에는 전변동이 유한한 부호 측도가 대응한다. 그 측도의 Jordan 분해는 $g$ 를 증가함수 둘의 차로 쓴 분해와 같다. 측도 쪽으로 옮기면 [Lebesgue 적분](lebesgue-integral.md)의 수렴 정리를 쓸 수 있고, 불연속인 $f$ 도 다룰 수 있다.

# 활용

- 확률변수 $X$ 의 분포함수를 $F$ 라 하면 $E\lbrack h(X)\rbrack=\int h\thinspace dF$ 다. 이산 분포와 연속 분포와 그 섞음을 한 식으로 쓰는 것이 이 표기다. 적률생성함수와 특성함수의 정의도 같은 꼴이다.
- $C\lbrack a,b\rbrack$ 위의 유계 선형범함수는 모두 $\Lambda(f)=\int\_a^b f\thinspace dg$ 꼴이고, $g$ 를 정규화된 유계변동 함수로 잡으면 유일하다. 이 대응이 연속함수 공간의 쌍대공간을 기술한다[^2].
- 수열 $(a\_n)$ 의 부분합을 $A(t)=\sum\_{n\le t}a\_n$ 이라 하면 $\sum\_{n\le x}a\_nf(n)=\int\_{1^-}^{x}f\thinspace dA$ 이고, 부분적분으로 $A(x)f(x)-\int\_1^x A(t)f'(t)\thinspace dt$ 가 된다. [Dirichlet 급수](dirichlet-series.md)를 적분으로 바꾸는 Abel 합산이 이 계산이다.
- 곡선 $t\mapsto(x(t),y(t))$ 를 따라가는 일은 $\int F\_1\thinspace dx+\int F\_2\thinspace dy$ 로 쓰이고, 두 좌표함수가 유계변동이면 이 적분이 정의된다.
- [Brown 운동](brownian-motion.md)의 경로는 1차변동이 거의 확실하게 무한이므로 유계변동이 아니다. 따라서 $\int f\thinspace dB$ 를 경로마다 Riemann–Stieltjes 적분으로 정의할 수 없고, [Itô 적분](ito-calculus.md)이 그 자리를 대신한다. 표본점을 조각의 왼쪽 끝으로 고정하는 것이 Itô 적분의 정의이고, 위의 표본점 무관성이 깨지는 것이 두 적분의 차이다.

[^1]: T. M. Apostol, *Mathematical Analysis*, 2nd ed., Chapter 7 (The Riemann–Stieltjes Integral) — 적분의 정의, 부분적분, 적분자가 유계변동일 때의 존재 정리, 환원 공식.

[^2]: F. Riesz, B. Sz.-Nagy, *Functional Analysis*, Chapter 3 — Lebesgue–Stieltjes 측도와의 대응, 연속함수 공간의 쌍대성.

# 연관 문서

## 선수지식

- [유계변동 함수](bounded-variation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis #probability #functional_analysis
