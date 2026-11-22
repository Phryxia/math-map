# Γ 수렴

# 개요

**Γ 수렴(Γ-convergence)** 은 범함수의 열이 수렴할 때 최솟값과 최소점도 따라서 수렴하도록 정한 수렴이다. 함수 $x^2$ 에 폭이 점점 좁아지는 깊은 홈을 판 함수열은 각 점에서 $x^2$ 로 수렴하지만, 최솟값은 늘 홈의 바닥에 있어 $x^2$ 의 최솟값 $0$ 으로 가지 않는다.

Γ 수렴은 극한 함수가 홈의 바닥값을 그 위치에 기억하게 정의해서, 극한 함수의 최솟값이 함수열의 최솟값의 극한이 되게 한다.

# 직관

$\mathbb R$ 위의 함수 $F_k$ 를 $x^2$ 에서 구간 $\vert x-1-1/k\vert\lt 1/(2k)$ 위의 값만 $2$ 만큼 낮춘 것으로 둔다. 고정한 $x$ 에서 $k$ 가 커지면 홈이 $x$ 를 지나쳐 가므로 $F_k(x)\to x^2$ 이다. 그런데 $F_k$ 의 최솟값은 홈의 바닥 $(1+1/k)^2-2$ 근처의 값이고 $-1$ 로 간다. 점별 극한 $x^2$ 의 최솟값은 $0$ 이다.

점별 극한은 각 점에서 그 점만 본다. 최솟값을 잃지 않으려면 극한 함수가 $x$ 로 다가오는 점들에서 $F_k$ 가 갖는 값까지 보아야 한다. $x_k=1+1/k$ 는 $1$ 로 가고 $F_k(x_k)\to -1$ 이므로 극한 함수는 $1$ 에서 $-1$ 이어야 한다.

다가오는 모든 열에서 $F_k$ 의 값의 하극한 가운데 가장 작은 것을 극한값으로 잡는다. 이 함수 $F$ 는 $1$ 에서 $-1$, 그 밖에서 $x^2$ 이고, 최솟값 $-1$ 과 최소점 $1$ 이 $F_k$ 의 최솟값과 최소점의 극한이다.

# 정의

$X$ 는 거리공간이고 $F_k,F:X\to\lbrack-\infty,\infty\rbrack$ 다. 다음 두 조건이 성립하면 $F_k$ 가 $F$ 로 **Γ 수렴한다** 고 한다[^1].

- 하극한 부등식. $x_k\to x$ 인 모든 열에서 $F(x)\le\liminf_kF_k(x_k)$ 다.
- 회복열. 모든 $x$ 에 $x_k\to x$ 이고 $\limsup_kF_k(x_k)\le F(x)$ 인 열 $x_k$ 가 있다. 이 열을 **회복열(recovery sequence)** 이라 한다.

직관 절의 $F_k$ 에서 $x\ne 1$ 이면 $x$ 근처에 홈이 결국 오지 않으므로 하극한 부등식이 $x^2$ 로 성립하고, 상수열 $x_k=x$ 가 회복열이다. $x=1$ 에서는 $x_k=1+1/k$ 가 회복열이고 극한값은 $-1$ 이다.

$F_k(x)=\sin(kx)$ 는 점별 극한이 없지만 상수 $-1$ 로 Γ 수렴한다. 모든 $x$ 근처에 $\sin(kx_k)=-1$ 인 $x_k$ 가 있어 회복열이 되고, $\sin$ 은 $-1$ 아래로 내려가지 않는다.

# 성질

## 최솟값과 최소점의 수렴

정리. $F_k$ 가 $F$ 로 Γ 수렴하고 모든 $k$ 에서 $\inf F_k$ 가 한 콤팩트 집합 $K$ 위의 하한과 같다고 하자. 그러면 $\min_XF$ 가 존재하고 $\inf F_k\to\min F$ 이며, $F_k$ 의 근사 최소점 $x_k$ 의 모든 집적점은 $F$ 의 최소점이다[^1].

증명의 요지. $x_k$ 를 $F_k(x_k)\le\inf F_k+1/k$ 로 $K$ 에서 잡고 수렴하는 부분열의 극한을 $x$ 라 하면, 하극한 부등식으로 $F(x)\le\liminf\inf F_k$ 다. 임의의 $y$ 의 회복열 $y_k$ 에서 $\limsup\inf F_k\le\limsup F_k(y_k)\le F(y)$ 다. 두 부등식에서 $F(x)\le F(y)$ 이고 $\inf F_k\to F(x)$ 다.

## 하반연속성과 완화

Γ 극한은 언제나 하반연속이다. 상수열 $F_k=G$ 의 Γ 극한은 $G$ 의 하반연속 포락, 곧 $G$ 이하인 하반연속 함수 가운데 가장 큰 것이다. 적분 범함수 $\int f(\nabla u)$ 의 약수렴에 대한 하반연속 포락이 [Morrey 준볼록성](morrey-quasiconvexity.md)의 준볼록 포락으로 쓴 $\int Qf(\nabla u)$ 다.

## 연속 섭동과 콤팩트성

$F_k$ 가 $F$ 로 Γ 수렴하고 $G$ 가 연속이면 $F_k+G$ 는 $F+G$ 로 Γ 수렴한다. 경계조건이나 외력 항을 더해도 Γ 극한을 다시 구하지 않아도 된다. 가분 거리공간에서는 모든 함수열이 Γ 수렴하는 부분열을 가진다[^2].

## 점별 수렴과의 관계

Γ 수렴과 점별 수렴은 서로를 함의하지 않는다. 직관 절의 $F_k$ 는 두 극한이 다르고, $\sin(kx)$ 는 Γ 극한만 있다. $F_k$ 가 고르게 수렴하고 극한이 연속이면 두 극한이 같다.

# 활용

- 균질화의 에너지. 계수가 진동하는 Dirichlet 에너지 $\int a(x/\varepsilon)\vert u'\vert^2$ 는 $L^2$ 에서 $\int a^\ast\vert u'\vert^2$ 로 Γ 수렴하고, $a^\ast$ 는 $a$ 의 조화평균이다. 대칭 계수에서 에너지의 Γ 수렴은 [H 수렴](h-convergence.md)과 동치다.
- 상전이와 둘레. $W(s)=(1-s^2)^2$ 에서 Modica–Mortola 범함수 $\int(\varepsilon\vert\nabla u\vert^2+W(u)/\varepsilon)$ 은 $L^1$ 에서, $u=\pm 1$ 인 함수 $u$ 에 집합 $\lbrace u=1\rbrace$ 의 둘레의 $8/3$ 배를 주는 범함수로 Γ 수렴한다[^3]. 상수 $8/3$ 은 $2\int_{-1}^1\sqrt{W}$ 다. [Allen–Cahn 방정식](allen-cahn-equation.md)의 해의 경계면이 [극소곡면](minimal-surfaces.md)으로 가까워진다는 결론이 여기서 나온다.
- 영상 분할. Ambrosio–Tortorelli 범함수는 경계 집합을 보조 함수로 바꾼 매끄러운 범함수로, 경계 길이가 들어간 [Mumford–Shah 범함수](mumford-shah-functional.md)로 Γ 수렴한다. 수치 계산은 매끄러운 범함수를 최소화한다.
- 이산 모형의 연속 극한. 격자 위의 상호작용 에너지를 격자 간격으로 나눈 열의 Γ 극한으로 탄성 에너지와 표면 에너지를 유도한다.

[^1]: A. Braides, *Γ-convergence for Beginners*, Oxford University Press (2002), Chapter 1.

[^2]: G. Dal Maso, *An Introduction to Γ-Convergence*, Birkhäuser (1993), Chapters 7–8.

[^3]: L. Modica, S. Mortola, "Un esempio di Γ⁻-convergenza", *Bollettino dell'Unione Matematica Italiana* (5) **14-B** (1977), 285–299.

# 연관 문서

## 선수지식

- [변분법의 직접법](direct-method.md)

## 더 알아보기

- [Allen–Cahn 방정식](allen-cahn-equation.md)
- [Mumford–Shah 범함수](mumford-shah-functional.md)

#analysis #functional_analysis #optimization
