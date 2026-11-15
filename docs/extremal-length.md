# 극값 길이

# 개요

**극값 길이(extremal length)** 는 영역 안의 곡선들의 모임이 얼마나 길고 가는지를 곡선의 길이와 영역의 넓이만으로 재는 수이고, 영역을 등각사상으로 옮겨도 바뀌지 않는다. 가로 $a$, 세로 $1$ 인 직사각형에서 왼쪽 변과 오른쪽 변을 잇는 곡선들의 극값 길이는 $a$ 다. 경계에 네 점을 표시한 아무 영역이 어느 직사각형과 등각동치인지는 사상의 식이 없으면 계산하기 어렵다.

극값 길이는 그 직사각형의 가로세로비와 같아서, 사상을 찾지 않고 길이와 넓이를 비교하는 부등식만으로 그 비를 위아래에서 잡는다.

# 직관

직사각형 $R=\lbrack 0,a\rbrack\times\lbrack 0,1\rbrack$ 에서 왼쪽 변과 오른쪽 변을 잇는 곡선을 모두 모은다. 곡선의 길이를 잴 때 점마다 다른 무게 $\rho\ge 0$ 를 주어, 곡선 $\gamma$ 의 길이를 $\int_\gamma\rho\thinspace\vert dz\vert$ 로 잰다. 모든 곡선 가운데 가장 짧은 길이를 $L$, 무게를 제곱해 $R$ 위에서 적분한 값을 $A$ 라 하면 $L^2/A$ 는 $\rho$ 를 상수배해도 바뀌지 않는다.

$\rho=1$ 이면 모든 곡선의 길이가 $a$ 이상이고 가로 선분은 길이가 $a$ 이므로 $L=a$ 다. 넓이는 $A=a$ 이므로 $L^2/A=a$ 다.

다른 무게로 이 값을 키울 수 없다. 높이 $y$ 의 가로 선분도 곡선 모임에 들어 있으므로 $L\le\int_0^a\rho(x,y)\thinspace dx$ 다. [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $L^2\le a\int_0^a\rho(x,y)^2dx$ 이고, 이것을 $y$ 에 대해 $0$ 에서 $1$ 까지 적분하면 $L^2\le aA$ 다. 그러므로 $L^2/A$ 의 상한은 $a$ 이고, 이 상한이 극값 길이다.

# 정의

**극값 길이** 는 곡선 모임에 대해, 길이를 재는 무게를 모두 시험해 얻는 (가장 짧은 길이)²/(넓이) 의 상한이다. 영역 $\Omega$ 안의 곡선 모임 $\Gamma$ 와 $\Omega$ 위의 Borel 가측 함수 $\rho\ge 0$ 에 대해 다음을 정의한다.

$$L(\Gamma,\rho)=\inf_{\gamma\in\Gamma}\int_\gamma\rho\thinspace\vert dz\vert,\qquad A(\rho)=\iint_\Omega\rho^2\thinspace dx\thinspace dy$$

$0\lt A(\rho)\lt\infty$ 인 $\rho$ 를 **허용 계량(admissible metric)** 이라 한다. $\Gamma$ 의 극값 길이는 다음이다[^1].

$$\lambda(\Gamma)=\sup_\rho\frac{L(\Gamma,\rho)^2}{A(\rho)}$$

$1/\lambda(\Gamma)$ 를 $\Gamma$ 의 **모듈러스(modulus)** 라 한다. 직관 절의 직사각형에서 왼쪽 변과 오른쪽 변을 잇는 곡선 모임은 $\lambda=a$ 이고, 위 변과 아래 변을 잇는 곡선 모임은 같은 계산을 세로로 해서 $\lambda=1/a$ 다.

# 성질

## 등각 불변성

$f:\Omega\to\Omega'$ 가 전단사 [등각사상](conformal-mapping.md)이면 $\lambda(f(\Gamma))=\lambda(\Gamma)$ 다.

증명의 요지. $\Omega'$ 위의 무게 $\rho'$ 에 $\Omega$ 위의 무게 $\rho=(\rho'\circ f)\vert f'\vert$ 를 대응시킨다. $\int_\gamma\rho\thinspace\vert dz\vert=\int_{f\circ\gamma}\rho'\thinspace\vert dw\vert$ 이고, $f$ 의 Jacobi 행렬식(Jacobian determinant)이 $\vert f'\vert^2$ 이므로 넓이도 같다. 이 대응은 양쪽 무게 사이의 전단사다.

## 사각형의 모듈러스

경계에 네 점을 차례로 표시한 Jordan 영역 $Q$ 에서 첫째 호와 셋째 호를 잇는 곡선 모임의 극값 길이는 $Q$ 의 [준등각 사상](quasiconformal-maps.md) 문서의 모듈러스 $m(Q)$ 다. [Riemann 사상정리](riemann-mapping-theorem.md)와 경계 확장으로 $Q$ 를 직사각형으로 옮기고 등각 불변성과 직관 절의 계산을 쓰면 나온다.

다각형이면 [Schwarz–Christoffel 공식](schwarz-christoffel-formula.md)으로 그 직사각형을 실제로 구할 수 있다. 사상이 없으면 시험 무게 하나가 $L^2/A\le m(Q)$ 로 아래 한계를 준다. 둘째 호와 넷째 호를 잇는 곡선 모임의 극값 길이는 $1/m(Q)$ 이므로, 그 모임의 시험 무게 하나는 위 한계를 준다.

## 고리

고리 $\lbrace 1\lt\vert z\vert\lt r\rbrace$ 에서 두 경계원을 잇는 곡선 모임의 극값 길이는 $(\log r)/2\pi$ 이고, 고리를 한 바퀴 도는 곡선 모임의 극값 길이는 $2\pi/\log r$ 다. 무게 $\rho=1/\vert z\vert$ 와 반지름 방향 선분에 직관 절과 같은 Cauchy–Schwarz 논법을 쓰면 나온다. 그래서 반지름의 비가 다른 두 고리는 등각동치가 아니다.

## 직렬 법칙

$\Omega_1$, $\Omega_2$ 가 서로 겹치지 않고, $\Gamma$ 의 모든 곡선이 $\Gamma_1$ 의 곡선 하나와 $\Gamma_2$ 의 곡선 하나를 부분으로 포함하면 $\lambda(\Gamma)\ge\lambda(\Gamma_1)+\lambda(\Gamma_2)$ 다.

증명의 요지. 상수배로 $L(\Gamma_i,\rho_i)=A(\rho_i)$ 가 되게 $\rho_i$ 를 고르면 $L_i^2/A_i=L_i$ 다. $\Omega_i$ 에서 $\rho=\rho_i$ 로 두면 $L(\Gamma,\rho)\ge L_1+L_2$, $A(\rho)=L_1+L_2$ 이므로 $\lambda(\Gamma)\ge L_1+L_2$ 다. $L_i^2/A_i$ 를 $\lambda(\Gamma_i)$ 에 가깝게 고르면 된다.

전기 회로에서 직렬 저항이 더해지는 것과 같은 꼴이다. 무게 $\rho$ 를 전류 밀도로 보면 극값 길이는 균질한 판의 두 경계 사이 저항이다.

## 준등각 사상의 기하적 정의

동형사상 $f$ 가 $K$ 준등각일 필요충분조건은 모든 곡선 모임 $\Gamma$ 에 대해 다음이 성립하는 것이다[^1].

$$\frac1K\lambda(\Gamma)\le\lambda(f(\Gamma))\le K\lambda(\Gamma)$$

가로 $a$ 인 직사각형을 가로 $b\ge a$ 인 직사각형으로 꼭짓점끼리 보내는 $K$ 준등각 사상이 있으면 왼쪽 변과 오른쪽 변을 잇는 곡선 모임의 극값 길이가 $a$ 에서 $b$ 로 가므로 $b\le Ka$ 다. [Teichmüller 정리](teichmuller-theorem.md) 문서의 Grötzsch 정리(Grötzsch's theorem)의 부등식이 이것이다.

# 활용

- 조화 측도의 추정. 띠 모양 영역에서 한 끝의 경계가 받는 [조화 측도](harmonic-measure.md)를 단면 폭 $\theta(x)$ 의 적분 $\int dx/\theta(x)$ 로 위에서 잡는 Ahlfors 왜곡 정리(Ahlfors distortion theorem)가 직렬 법칙으로 증명된다[^1].
- [Teichmüller 공간](teichmuller-space.md). 곡면 위 단순 닫힌 곡선의 자유 호모토피류마다 그 류에 든 곡선 모임의 극값 길이를 대응시킨다. Kerckhoff 공식(Kerckhoff's formula)은 두 점 $X$, $Y$ 사이의 Teichmüller 거리를 $Y$ 와 $X$ 에서의 극값 길이의 비의 상한에 로그를 취해 절반으로 쓴다.
- 이산 극값 길이(discrete extremal length). 그래프의 정점이나 간선에 무게를 주어 같은 식으로 정의하며, 간선 판본은 전기 회로망의 유효 저항과 같다. 정점 판본은 Cannon 의 조합적 Riemann 사상 정리(combinatorial Riemann mapping theorem)에서 쓴다.

[^1]: L. V. Ahlfors, *Conformal Invariants: Topics in Geometric Function Theory*, McGraw-Hill, 1973, 4장.

# 연관 문서

## 선수지식

- [준등각 사상](quasiconformal-maps.md)
- [Schwarz–Christoffel 공식](schwarz-christoffel-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #differential_geometry
