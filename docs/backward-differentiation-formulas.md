# 후진 차분 공식

# 개요

**후진 차분 공식(backward differentiation formula, BDF)** 은 [상미분방정식](ordinary-differential-equations.md)을 한 걸음 풀 때, 지나온 값들과 구하려는 새 값을 지나는 다항식을 세우고 그 다항식의 새 점에서의 기울기를 방정식의 우변과 같게 놓아 새 값을 정하는 방법이다. $x'=-50x$ 처럼 해가 아주 빨리 $0$ 으로 줄어드는 성분이 있으면, 지나온 기울기만 쓰는 양함수 공식은 걸음 $0.1$ 에서 값이 걸음마다 몇 배씩 커진다. 후진 차분 공식은 새 점의 기울기를 쓰는 음함수 공식이어서 같은 걸음에서도 그 성분을 줄이고, 걸음 크기를 정확도만으로 정하게 한다.

# 직관

[강성 방정식](stiff-equations.md) 문서처럼 $x'=-50x$, $x_0=1$ 을 걸음 $h=0.1$ 로 푼다. 참해 $e^{-50t}$ 는 $t=0.1$ 에서 이미 $0.007$ 이다.

[선형 다단계 방법](linear-multistep-methods.md) 문서의 2 단계 Adams–Bashforth 공식에 $f=-50x$, $h=0.1$ 을 넣으면 다음이 나온다.

$$x\_{n+2}=x\_{n+1}+h\Bigl(\frac32f\_{n+1}-\frac12f_n\Bigr)=-6.5\thinspace x\_{n+1}+2.5\thinspace x_n$$

특성다항식 $\zeta^2+6.5\zeta-2.5$ 의 근 하나가 약 $-6.86$ 이어서 값이 걸음마다 거의 일곱 배씩 커진다.

지나온 기울기 대신 새 점의 기울기를 쓴다. 세 점 $(t_n,x_n)$, $(t\_{n+1},x\_{n+1})$, $(t\_{n+2},x\_{n+2})$ 를 지나는 이차식의 $t\_{n+2}$ 에서의 기울기를 그 점의 $f=-50x\_{n+2}$ 와 같게 놓는다.

$$\frac{3x\_{n+2}-4x\_{n+1}+x_n}{2h}=-50\thinspace x\_{n+2}$$

$h=0.1$ 을 넣고 정리하면 다음이 나온다.

$$6.5\thinspace x\_{n+2}=2\thinspace x\_{n+1}-0.5\thinspace x_n$$

특성다항식 $6.5\zeta^2-2\zeta+0.5$ 의 두 근은 $(2\pm 3i)/13$ 이고 절댓값이 $1/\sqrt{13}\approx 0.28$ 이다. 그래서 값이 걸음마다 $0.28$ 배 이하로 줄어 참해처럼 $0$ 으로 간다. 이렇게 보간 다항식의 새 점 기울기로 만든 공식을 후진 차분 공식이라 한다.

# 정의

## k 단계 후진 차분 공식

후진 차분 $\nabla x\_{m}=x\_{m}-x\_{m-1}$, $\nabla^{j}=\nabla(\nabla^{j-1})$ 로 쓴다. 다음 식을 **$k$ 단계 후진 차분 공식** 이라 한다[^1].

$$\sum\_{j=1}^{k}\frac1j\nabla^{j}x\_{n+k}=h\thinspace f(t\_{n+k},x\_{n+k})$$

좌변을 $h$ 로 나눈 것은 $x\_{n},\dots,x\_{n+k}$ 를 지나는 차수 $k$ 의 보간 다항식을 $t\_{n+k}$ 에서 미분한 값이다. $k=1$ 은 음함수 [Euler 방법](euler-method.md) $x\_{n+1}-x_n=hf\_{n+1}$ 이다. $k=2$ 는 다음과 같고, 직관 절의 공식을 $2$ 로 나눈 것이다.

$$\frac32x\_{n+2}-2x\_{n+1}+\frac12x_n=hf\_{n+2}$$

$k=3$ 은 다음과 같다.

$$\frac{11}{6}x\_{n+3}-3x\_{n+2}+\frac32x\_{n+1}-\frac13x_n=hf\_{n+3}$$

## A(α)-안정성

$x'=\lambda x$ 에 적용한 선형 다단계 방법이 음의 실수축을 가운데 두고 반각이 $\alpha$ 인 부채꼴 $\lbrace z=h\lambda:\vert\arg(-z)\vert\lt\alpha\rbrace$ 의 모든 $z$ 에서 근 조건을 만족하면 **A(α)-안정(A(α)-stable)** 이라 한다. $\alpha=90^\circ$ 이면 A-안정이다.

# 성질

## 차수와 영안정성

$k$ 단계 후진 차분 공식의 차수는 $k$ 다. $k$ 차 이하의 다항식에서 보간 다항식이 그 다항식 자신이므로 좌변이 정확한 도함수가 되기 때문이다. $k\le 6$ 이면 영안정이고, $k\ge 7$ 이면 첫째 특성다항식에 절댓값이 $1$ 보다 큰 근이 있어 영안정이 아니다[^2].

## 부채꼴의 각

$k=1,2$ 는 A-안정이다. $k=3,4,5,6$ 은 A-안정이 아니고, A(α)-안정인 가장 큰 각이 차례로 약 $86.03^\circ$, $73.35^\circ$, $51.84^\circ$, $17.84^\circ$ 다[^3]. 고윳값이 음의 실수축 가까이 모인 강성 방정식에는 $k$ 를 $5$ 까지 쓰고, 허수부가 큰 고윳값이 있으면 $k$ 를 줄인다.

$k=2$ 가 A-안정인 차수 $2$ 의 방법이라는 것은, A-안정인 선형 다단계 방법의 차수가 $2$ 이하라는 Dahlquist 둘째 장벽(Dahlquist's second barrier)이 허용하는 최고 차수다.

## 무한대에서의 감쇠

$z=h\lambda\to-\infty$ 이면 $\rho(\zeta)-z\sigma(\zeta)=0$ 의 근은 $\sigma(\zeta)=\beta_k\zeta^k=0$ 의 근인 $0$ 으로 간다. 그래서 아주 빨리 줄어드는 성분은 한 걸음에 거의 $0$ 이 된다. 직관 절에서 $z=-5$ 의 근의 절댓값 $0.28$ 은 $z$ 가 더 작아지면 $0$ 에 가까워진다. 사다리꼴 규칙은 같은 극한에서 증폭률이 $-1$ 로 가서 빠른 성분이 부호를 바꾸며 남는다.

## 음함수 방정식

걸음마다 다음 꼴의 방정식을 푼다. $r_n$ 은 지나온 값으로 정해진다.

$$x\_{n+k}-h\beta_kf(t\_{n+k},\thinspace x\_{n+k})=r_n$$

강성 방정식에서는 $h\beta_k\Vert\partial f/\partial x\Vert$ 가 커서 고정점 반복이 수렴하지 않으므로, Jacobi 행렬 $I-h\beta_k\thinspace\partial f/\partial x$ 로 [Newton 법](newton-method.md)을 쓴다. Newton 반복의 시작점은 [예측자–수정자 방법](predictor-corrector-methods.md)처럼 지나온 값의 외삽으로 정한다.

# 활용

- 강성 방정식 풀이기. Gear 가 후진 차분 공식을 가변 걸음, 가변 차수로 구현한 뒤로, 화학 반응 속도론과 회로 모의의 강성 방정식 풀이기 다수가 $k=1$ 부터 $5$ 까지의 후진 차분 공식을 쓴다[^1].
- [미분대수방정식](differential-algebraic-equations.md). $F(t,x,x')=0$ 꼴에서 $x'$ 자리에 후진 차분 공식의 좌변을 $h$ 로 나눈 것을 넣으면 걸음마다 대수방정식 하나가 된다. Petzold 의 DASSL(differential algebraic system solver)이 이 방법이다[^4].
- 편미분방정식의 시간 적분. 열 방정식을 공간에서 이산화한 계는 고윳값이 음의 실수축에 퍼진 강성 계이므로, 시간 방향을 $k=2$ 의 공식으로 푼다.

[^1]: C. W. Gear, *Numerical Initial Value Problems in Ordinary Differential Equations*, Prentice-Hall (1971).
[^2]: C. W. Cryer, "On the instability of high order backward-difference multistep methods", *BIT* 12 (1972), 17–25.
[^3]: E. Hairer, G. Wanner, *Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems*, 2nd ed., Springer (1996), V.2 절.
[^4]: K. E. Brenan, S. L. Campbell, L. R. Petzold, *Numerical Solution of Initial-Value Problems in Differential-Algebraic Equations*, SIAM (1996).

# 연관 문서

## 선수지식

- [선형 다단계 방법](linear-multistep-methods.md)
- [강성 방정식](stiff-equations.md)

## 더 알아보기

- [미분대수방정식](differential-algebraic-equations.md)

#analysis #computation #algorithms
