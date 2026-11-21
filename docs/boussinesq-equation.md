# Boussinesq 방정식

# 개요

**Boussinesq 방정식(Boussinesq equation)** 은 얕은 수로의 긴 물결을 오른쪽과 왼쪽 두 방향 모두로 나아갈 수 있게 적는 편미분방정식이다. 수로 가운데에 물을 부어 혹을 만들면 혹은 둘로 갈라져 양쪽으로 나아가는데, [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)은 한 방향으로 나아가는 물결만 적는다. Boussinesq 방정식은 [파동방정식](wave-equation.md)에 비선형 항과 분산 항을 더해 두 방향의 물결을 한 식으로 다룬다.

# 직관

파동방정식 $u_{tt}=u_{xx}$ 의 해는 d'Alembert 공식으로 $F(x-t)+G(x+t)$ 이고, 처음 혹은 모양을 유지한 두 혹으로 갈라져 속도 $1$ 로 양쪽으로 간다. 실제 물결에서는 KdV 문서의 두 효과, 곧 높은 물이 빨리 가는 효과와 파장마다 속도가 다른 효과가 더해진다.

두 효과를 2계 미분 꼴로 더한 방정식 $u_{tt}-u_{xx}-(3u^2)\_{xx}-u_{xxxx}=0$ 에서 속도 $c$ 로 나아가는 해 $u=\phi(x-ct)$ 를 찾는다. 넣으면 $(c^2-1)\phi''-3(\phi^2)''-\phi''''=0$ 이고, 먼 곳에서 $0$ 인 조건으로 두 번 적분하면 다음이 나온다.

$$
\phi''=(c^2-1)\phi-3\phi^2
$$

KdV 고립파의 식에서 속도 $c$ 자리에 $c^2-1$ 이 들어간 꼴이다. 그래서 $\vert c\vert\gt 1$ 이면 $\phi=\frac{c^2-1}{2}\mathrm{sech}^2\bigl(\frac{\sqrt{c^2-1}}{2}\xi\bigr)$ 이 해이고, $c$ 와 $-c$ 가 같은 모양을 준다. $c=\pm2$ 이면 높이 $3/2$ 인 같은 혹이 오른쪽과 왼쪽으로 각각 속도 $2$ 로 나아간다.

# 정의

함수 $u(x,t)$ 에 대한 다음 두 방정식을 **Boussinesq 방정식** 이라 한다.

$$
u_{tt}-u_{xx}-(3u^2)\_{xx}\mp u_{xxxx}=0
$$

$-u_{xxxx}$ 인 쪽을 bad Boussinesq 방정식, $+u_{xxxx}$ 인 쪽을 good Boussinesq 방정식이라 한다. Boussinesq 가 얕은 물에서 처음 유도한 것은 bad 쪽이고, 직관 절의 식이 그것이다[^1]. $u$ 를 $-u$ 로, 계수를 척도로 바꾸어 다른 꼴로 쓰기도 한다.

# 성질

## 분산 관계와 잘 놓임

선형 부분에 $e^{i(kx-\omega t)}$ 를 넣으면 bad 쪽은 $\omega^2=k^2-k^4$, good 쪽은 $\omega^2=k^2+k^4$ 이다. bad 쪽에서 $\vert k\vert\gt 1$ 이면 $\omega$ 가 허수가 되어 $e^{\vert k\vert\sqrt{k^2-1}\thinspace t}$ 로 자라는 성분이 있고, 짧은 파장의 작은 흔들림이 한없이 빨리 커지므로 초기값 문제가 잘 놓이지 않는다(ill-posed). 물리 유도는 $\vert k\vert$ 가 작은 긴 물결에서만 맞으므로 이 문제는 모형이 쓰이는 범위 밖에서 생긴다. good 쪽은 모든 $k$ 에서 $\omega$ 가 실수다.

## 고립파

bad 쪽의 고립파는 직관 절의 $\frac{c^2-1}{2}\mathrm{sech}^2\bigl(\frac{\sqrt{c^2-1}}{2}(x-ct)\bigr)$, $\vert c\vert\gt 1$ 이다. good 쪽에서 같은 계산을 하면 $\phi''=(1-c^2)\phi+3\phi^2$ 이 나오고, $\vert c\vert\lt 1$ 에서 아래로 파인 고립파 $-\frac{1-c^2}{2}\mathrm{sech}^2\bigl(\frac{\sqrt{1-c^2}}{2}(x-ct)\bigr)$ 가 해다.

## KdV 로의 환원

한 방향으로만 나아가는 긴 물결만 보면 Boussinesq 방정식은 KdV 가 된다. 오른쪽으로 가는 물결을 $\xi=x-t$ 와 느린 시간 $\tau$ 의 함수로 놓고 $u_{tt}-u_{xx}$ 를 $\xi$ 와 $\tau$ 로 바꾸면, 가장 낮은 차수에서 $u_\tau$ 와 $uu_\xi$, $u_{\xi\xi\xi}$ 의 관계식이 남고 그것이 KdV 다[^2].

## 적분가능성

Boussinesq 방정식은 3계 미분연산자 $L=\partial_x^3+a\partial_x+b$ 의 [Lax 쌍](lax-pairs.md) 방정식으로 쓸 수 있고, $u$ 는 계수 $a$ 의 상수배다. 그래서 역산란 변환으로 풀리고 보존량이 무한히 많다[^2]. [KdV 위계](kdv-hierarchy.md) 문서의 Gelfand–Dickey 위계에서 $n=3$ 인 경우가 이 방정식의 위계다.

# 활용

- 얕은 물의 두 방향 물결. 수로에서 양쪽으로 갈라지는 물결과 벽에 반사되어 돌아오는 물결을 한 식으로 적는다. 수치 계산에는 잘 놓인 변형 방정식을 쓴다.
- 결정 격자의 긴 파동. 이웃 원자끼리 비선형 용수철로 이어진 1차원 격자에서 원자 간격보다 훨씬 긴 파동은 Boussinesq 방정식을 따른다. Fermi, Pasta, Ulam 이 수치로 다룬 격자가 이 꼴이고, Zabusky 와 Kruskal 은 그 연속 극한에서 한 방향 물결만 남겨 KdV 로 풀었다.

[^1]: J. Boussinesq, "Théorie des ondes et des remous qui se propagent le long d'un canal rectangulaire horizontal, en communiquant au liquide contenu dans ce canal des vitesses sensiblement pareilles de la surface au fond", *Journal de Mathématiques Pures et Appliquées* 17 (1872), 55–108.
[^2]: M. J. Ablowitz, H. Segur, *Solitons and the Inverse Scattering Transform*, SIAM Studies in Applied Mathematics 4, SIAM, 1981.

# 연관 문서

## 선수지식

- [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)
- [파동방정식](wave-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
