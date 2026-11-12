# 행렬 로그

# 개요

**행렬 로그(matrix logarithm)** 는 정사각[행렬](matrices.md) $B$ 에 대해 $e^X=B$ 인 행렬 $X$ 다. 평면에서 $60^\circ$ 회전을 한 번에 하는 행렬이 있을 때, 같은 회전을 시간 $1$ 동안 고르게 나눠 하는 [미분방정식](ordinary-differential-equations.md) $x'=Xx$ 의 계수를 찾는 것이 이 문제다. 수의 로그처럼 $e^X=B$ 의 해는 여럿이고, 고윳값의 허수부를 $(-\pi,\pi)$ 에 두는 해 하나를 골라 주 로그라 부른다.

# 직관

[행렬 지수](matrix-exponential.md) 문서에서 $J=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 의 지수 $e^{tJ}$ 는 각 $t$ 의 회전이었다. 그래서 $60^\circ$ 회전 $B$ 는 $X=\tfrac\pi3J$ 의 지수다.

$$
B=\begin{pmatrix}\tfrac12&-\tfrac{\sqrt3}2\cr \tfrac{\sqrt3}2&\tfrac12\end{pmatrix}=e^{\frac\pi3J}
$$

$e^{2\pi J}=I$ 이므로 $X=(\tfrac\pi3+2\pi k)J$ 도 모두 $e^X=B$ 를 만족한다. $k=1$ 이면 시간 $1$ 동안 한 바퀴를 더 돌아 같은 자리에 온다. 가장 적게 도는 $k=0$ 이 주 로그다. $X$ 의 고윳값은 $\pm i\pi/3$ 이고 허수부가 $(-\pi,\pi)$ 에 있다.

# 정의

$n\times n$ 복소행렬 $B$ 에 대해 $e^X=B$ 인 $X$ 를 $B$ 의 **로그** 라 한다. $B$ 가 음의 실수축 $(-\infty,0\rbrack$ 위에 [고윳값](eigenvalues.md)을 갖지 않으면, 고윳값의 허수부가 모두 $(-\pi,\pi)$ 에 있는 로그가 하나뿐이다.[^1] 이것을 $B$ 의 **주 로그(principal logarithm)** 라 하고 $\log B$ 로 쓴다. 직관 절의 $\tfrac\pi3J$ 가 $B$ 의 주 로그다.

# 성질

## 존재

복소행렬 $B$ 가 로그를 갖는 것은 $B$ 가 가역인 것과 동치다. [Jordan 표준형](jordan-canonical-form.md)의 블록 $\lambda I+N$ 에서 $\lambda\ne 0$ 이면 다음 급수가 $N^k=0$ 에서 끝나 로그를 준다.

$$
\log(\lambda I+N)=(\log\lambda)I+\sum\_{j=1}^{k-1}\frac{(-1)^{j+1}}{j}\Bigl(\frac N\lambda\Bigr)^j
$$

$e^X$ 의 [행렬식](determinants.md)은 $e^{\mathrm{tr}\thinspace X}\ne 0$ 이므로 가역이 아닌 행렬은 로그가 없다.

## 실수 로그

실행렬 $B$ 가 실행렬 로그를 갖는 것은 $B$ 가 가역이고, 음의 고윳값마다 그 Jordan 블록들이 크기별로 짝수 개씩 있는 것과 동치다.[^2] $-I=e^{\pi J}$ 는 고윳값 $-1$ 의 블록이 두 개라 실수 로그 $\pi J$ 를 갖는다.

$\mathrm{diag}(-1,-2)$ 는 블록이 하나씩이라 실수 로그가 없다. 실수 로그 $X$ 가 있다면 그 고윳값 $\mu_1$, $\mu_2$ 는 $e^{\mu}$ 가 음수라 실수가 아니고, 실행렬의 고윳값이라 서로 켤레다. 그러면 $e^{\mu_2}=\overline{e^{\mu_1}}=-1$ 이 되어 $-2$ 와 어긋난다.

## 급수와 계산

$\Vert B-I\Vert\lt 1$ 인 노름이 있으면 주 로그는 다음 급수다.

$$
\log B=\sum\_{j=1}^\infty\frac{(-1)^{j+1}}{j}(B-I)^j
$$

$B$ 가 $I$ 에서 멀면 수렴이 느리므로, 제곱근을 $s$ 번 거듭 취해 $B^{1/2^s}$ 를 $I$ 근처로 가져온 뒤 급수나 Padé 근사로 로그를 구하고 $2^s$ 를 곱한다. 이것을 역 척도 조정과 제곱(inverse scaling and squaring)이라 한다.[^1] 행렬 지수의 척도 조정과 제곱을 거꾸로 돌린 것이다.

# 활용

- 회전의 보간. 회전 $R_0$, $R_1$ 사이를 $R_0\exp\bigl(t\log(R_0^{\mathsf T}R_1)\bigr)$ 로 이으면 $t\in\lbrack 0,1\rbrack$ 에서 일정한 각속도로 도는 경로가 된다. [Lie 군](lie-groups.md)의 [측지선](geodesics.md)이 이 꼴이다.
- [연속시간 Markov 연쇄](continuous-time-markov-chains.md)의 끼워 넣기 문제. 한 시간 간격의 전이확률 행렬 $P$ 가 어떤 전이율 행렬 $Q$ 의 $e^Q$ 인지를 묻는다. $\log P$ 가 비대각 성분이 음이 아니고 행의 합이 $0$ 인 행렬이면 그런 $Q$ 가 있다.
- [공분산](covariance.md) 행렬의 평균. 양의 정부호 행렬들을 $\log$ 로 대칭행렬 공간에 옮겨 평균한 뒤 $\exp$ 로 되돌리는 로그 Euclid 평균이 확산 텐서 영상에서 쓰인다.

[^1]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 11 장. 주 로그의 존재와 유일성, 역 척도 조정과 제곱.
[^2]: W. J. Culver, "On the existence and uniqueness of the real logarithm of a matrix", *Proceedings of the American Mathematical Society* 17 (1966), 1146–1151.

# 연관 문서

## 선수지식

- [행렬 지수](matrix-exponential.md)

## 더 알아보기

- [Floquet 이론](floquet-theory.md)

#analysis #linear_algebra #algorithms
