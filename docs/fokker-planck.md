# Fokker–Planck 방정식

# 개요

Fokker–Planck 방정식은 [확률미분방정식](stochastic-differential-equations.md)의 해가 갖는 확률밀도가 만족하는 편미분방정식이다. 표류와 확산 계수로 만든 2계 연산자의 수반작용소가 밀도의 시간 변화를 준다. 경로 하나하나를 따라가는 대신 밀도의 방정식을 풀어 정상분포와 그 수렴 속도를 얻는다.

# 직관

확률미분방정식(stochastic differential equation, SDE) $dX_t=-X_t\thinspace dt+\sqrt2\thinspace dB_t$ 를 푼다. 시각 $t$ 가 크면 $X_t$ 가 어떤 분포를 따르는지 알고 싶다.

[Itô 공식](ito-calculus.md)은 매끄러운 $f$ 에 대해 $\frac{d}{dt}\mathbb E\lbrack f(X_t)\rbrack=\mathbb E\lbrack Lf(X_t)\rbrack$ 을 주고, 이 SDE 에서는 $Lf=-xf'+f''$ 다. $f(x)=x$ 를 넣으면 $\frac{d}{dt}\mathbb E\lbrack X_t\rbrack=-\mathbb E\lbrack X_t\rbrack$ 이고 $f(x)=x^2$ 를 넣으면 $\frac{d}{dt}\mathbb E\lbrack X_t^2\rbrack=-2\mathbb E\lbrack X_t^2\rbrack+2$ 다. 두 식이 닫혀 평균은 $0$ 으로, 2차 적률은 $1$ 로 간다.

표류항을 $-X_t^3$ 으로 바꾸면 이 방법이 막힌다. $f(x)=x^2$ 에서 $\frac{d}{dt}\mathbb E\lbrack X_t^2\rbrack=-2\mathbb E\lbrack X_t^4\rbrack+2$ 가 나오고, $\mathbb E\lbrack X_t^4\rbrack$ 의 식에는 $\mathbb E\lbrack X_t^6\rbrack$ 이 들어온다. 적률을 하나 구하려면 그보다 높은 적률이 필요해 식이 끝없이 이어진다.

$f$ 마다 다른 식이 나와서 막혔으니, 모든 $f$ 를 한꺼번에 다룬다. 밀도 $p(t,x)$ 로 $\mathbb E\lbrack f(X_t)\rbrack=\int f(x)p(t,x)\thinspace dx$ 라 쓰고 $\int(Lf)p\thinspace dx$ 를 부분적분해 미분을 $p$ 쪽으로 넘기면 $\int f\thinspace(L^\ast p)\thinspace dx$ 가 된다. 두 식이 모든 $f$ 에 대해 같으므로 $\partial_tp=L^\ast p$ 다.

처음의 SDE 에서 $L^\ast p=\partial_x(xp)+\partial_x^2p$ 이므로 정상해는 $xp+\partial_xp=0$ 을 풀어 $p(x)\propto e^{-x^2/2}$ 다. 적률을 차례로 구하지 않고 밀도를 바로 얻는다.

# 정의

$d$ 차원 SDE $dX_t=a(X_t)\thinspace dt+b(X_t)\thinspace dB_t$ 의 생성원은 2계 미분연산자다.

$$
Lf=\sum_{i}a_i\partial_if+\tfrac12\sum_{i,j}\Sigma_{ij}\partial_i\partial_jf,
\qquad
\Sigma=bb^{\mathsf T}
$$

$X_t$ 의 밀도 $p(t,x)$ 는 $L$ 의 수반작용소가 주는 방정식을 만족한다. 이것이 **Fokker–Planck 방정식**이고, 전진 Kolmogorov 방정식이라고도 한다.

$$
\partial_tp=L^\ast p=-\sum_i\partial_i\bigl(a_ip\bigr)+\tfrac12\sum_{i,j}\partial_i\partial_j\bigl(\Sigma_{ij}p\bigr)
$$

초기조건은 $X_0$ 의 분포 $p(0,\cdot)=p_0$ 다. $X_0$ 이 한 점 $y$ 에 집중하면 해는 전이밀도 $p(t,x\mid y)$ 다.

## 확률흐름

방정식을 발산 꼴로 다시 쓰면 보존법칙이 된다.

$$
\partial_tp+\nabla\cdot J=0,
\qquad
J_i=a_ip-\tfrac12\sum_j\partial_j\bigl(\Sigma_{ij}p\bigr)
$$

$J$ 를 확률흐름이라 한다. 경계에서 $J\cdot n=0$ 이면 질량이 보존되고(반사 경계), 경계에서 $p=0$ 이면 질량이 새어 나간다(흡수 경계).

## 후진방정식과의 쌍대성

$u(t,x)=\mathbb E^x\lbrack f(X_t)\rbrack$ 은 후진방정식 $\partial_tu=Lu$ 를 만족한다. 두 방정식은 쌍 $\int up\thinspace dx$ 에 대해 수반이고, 같은 과정을 관측량의 변화와 밀도의 변화로 각각 적은 것이다. 후진방정식에 퍼텐셜 항과 원천 항을 더한 것이 [Feynman–Kac 공식](feynman-kac.md)이다.

# 성질

## 질량과 양의 보존

$p_0$ 이 음이 아니고 적분이 $1$ 이면 해도 그렇다. 방정식이 발산 꼴이어서 $\frac{d}{dt}\int p\thinspace dx=-\int\nabla\cdot J\thinspace dx=0$ 이고, 양의 보존은 포물형 방정식의 최대원리에서 나온다. 타원형 연산자에 대한 같은 논법이 [최대값 원리](maximum-principle.md)다.

## 정상분포

$\partial_tp=0$ 은 $\nabla\cdot J=0$ 과 같다. 1차원에서는 $J$ 가 상수이고 적분가능한 해에서는 $J=0$ 이므로 정상밀도가 1계 상미분방정식으로 정해진다.

$$
p_\infty(x)\propto\frac{1}{\Sigma(x)}\exp\negthinspace\left(\int^x\frac{2a(s)}{\Sigma(s)}\thinspace ds\right)
$$

$\Sigma$ 가 상수 $2\varepsilon$ 이고 $a=-\nabla V$ 이면 정상밀도는 Gibbs 측도 $p_\infty\propto e^{-V/\varepsilon}$ 다. $V$ 의 성장이 느려 $e^{-V/\varepsilon}$ 이 적분가능하지 않으면 정상분포가 없고 질량이 퍼져 나간다.

## 세부균형

$J=0$ 인 정상해를 가진 과정을 가역이라 한다. $\Sigma$ 가 상수이고 표류가 퍼텐셜의 기울기 $a=-\nabla V$ 꼴이면 $J=0$ 을 풀 수 있어 가역이다. 표류에 $\nabla\cdot(\Sigma\gamma)=0$ 을 만족하는 회전 성분 $\gamma$ 가 섞이면 정상분포는 그대로지만 $J\ne0$ 이어서 과정이 비가역이고, 정상상태에서 확률이 순환한다.

## 상대엔트로피의 감소

정상분포가 $p_\infty$ 이고 과정이 가역이면 상대엔트로피가 감소하고 그 속도가 Fisher 정보로 적힌다.

$$
\frac{d}{dt}\int p_t\log\frac{p_t}{p_\infty}\thinspace dx
=-\varepsilon\negthinspace\int p_t\Bigl\lvert\nabla\log\frac{p_t}{p_\infty}\Bigr\rvert^2dx
$$

우변이 $0$ 이하이므로 $p_t$ 는 $p_\infty$ 로 간다. $V$ 가 $\lambda$ 강볼록이면 로그 Sobolev 부등식이 우변을 좌변의 상수배로 눌러 상대엔트로피가 $e^{-2\lambda\varepsilon t}$ 의 비율로 줄어든다[^1]. 같은 감소를 분포 공간의 경사하강으로 다시 쓴 것이 [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)이다.

## 시간역전

$X_t$ 가 위 SDE 를 만족하면 시간을 뒤집은 과정 $\tilde X_s=X_{T-s}$ 도 SDE 를 만족하고, 그 표류항에 밀도의 로그기울기가 들어간다[^2].

$$
d\tilde X_s=\bigl(-a(\tilde X_s)+\Sigma\nabla\log p(T-s,\tilde X_s)\bigr)ds+b(\tilde X_s)\thinspace dB_s
$$

증명의 요지는 역전 과정의 전이밀도를 Bayes 규칙으로 적고 Fokker–Planck 방정식을 써서 그 밀도가 만족하는 방정식을 확인하는 것이다.

# 활용

- 퍼텐셜 $V$ 안의 입자에 열잡음을 더한 [Langevin 동역학](langevin-dynamics.md)에서 정상밀도가 $e^{-V/\varepsilon}$ 이므로, 이 SDE 를 이산화해 돌리면 Gibbs 측도의 표본이 나온다. 표본의 편향은 이산화 간격과 위 수렴 속도가 함께 정한다.
- [확산모형](diffusion-models.md)은 자료에 잡음을 더하는 전진 SDE 와 위 시간역전 식을 쓴다. 역전 식의 $\nabla\log p$ 를 신경망으로 근사하는 것이 점수 적합이다.
- [Black–Scholes 방정식](black-scholes-equation.md)의 전이밀도는 기하 Brown 운동의 Fokker–Planck 방정식을 푼 로그정규밀도이고, 옵션 가격이 그 밀도에 대한 적분으로 적힌다.
- 두 우물 퍼텐셜에서 한 우물을 벗어나는 평균 시간은 흐름 $J$ 를 상수로 두고 적분해 얻는다. 장벽 높이 $\Delta V$ 에 대해 $e^{\Delta V/\varepsilon}$ 에 비례하는 Kramers 공식이 나온다[^3].

[^1]: G. A. Pavliotis, *Stochastic Processes and Applications*, Springer, 2014, Chapter 4 (엔트로피 소산과 로그 Sobolev 부등식에서 나오는 지수 수렴).
[^2]: B. D. O. Anderson, "Reverse-time diffusion equation models", Stochastic Processes and their Applications 12 (1982), 313–326.
[^3]: H. Risken, *The Fokker–Planck Equation: Methods of Solution and Applications*, 2nd ed., Springer, 1989 (수반작용소 유도, 정상해, 탈출 시간).

# 연관 문서

## 선수지식

- [확률미분방정식](stochastic-differential-equations.md)

## 더 알아보기

- [Langevin 동역학](langevin-dynamics.md)

#probability #analysis #machine_learning
