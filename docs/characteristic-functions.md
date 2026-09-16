# 특성함수와 Lévy 연속성 정리

# 개요

[분포 수렴](weak-convergence.md)의 정의는 모든 유계 연속 시험함수에 대한 적분을 요구한다. 함수가 너무 많아 그대로는 확인하기 어렵다. $\mathbb R^d$ 에서는 시험함수를 복소지수 $e^{i\langle t,x\rangle}$ 한 종류로 줄일 수 있고, 그렇게 얻은 함수가 **특성함수**다.

특성함수는 확률측도를 남김없이 결정하고, 독립합을 곱으로 바꾸며, 약수렴을 각점 수렴으로 번역한다. [확률변수](random-variables.md)를 다루는 해석적 도구 가운데 가장 쓸모가 넓은 이유가 이 세 성질에 모두 들어 있다. 적률생성함수가 같은 일을 하려다 존재성에서 걸리는 것과 대비된다.

# 직관

분포를 함수 하나로 압축해 보려는 시도는 여럿 있다. 적률열 $\mathbb E[X^n]$ 이 가장 먼저 떠오르지만 두 군데서 무너진다. 적률이 아예 없을 수 있고(Cauchy 분포), 모든 적률이 같은데 분포가 다른 경우도 있다(로그정규 분포의 유명한 예). 적률생성함수 $\mathbb E[e^{tX}]$ 는 무거운 꼬리에서 발산해 정의 자체가 안 된다.

$t$ 를 순허수로 바꾸면 이 문제가 한꺼번에 사라진다. $|e^{itX}|=1$ 이므로 기댓값이 **언제나** 존재하고 절댓값이 1 이하다. 존재성을 공짜로 얻는 대신 값이 복소수가 된다.

기하로 보면 이렇다. $e^{itx}$ 는 단위원 위의 점이고, $t$ 는 $x$ 축을 감는 속도다. 특성함수 $\varphi(t)$ 는 질량을 원 위에 그 속도로 감아 올린 뒤 잰 무게중심이다. $t$ 가 작으면 거의 감기지 않아 무게중심이 1 근처에 있고, $t$ 가 커질수록 질량이 원을 여러 바퀴 돌며 상쇄되어 무게중심이 원점으로 끌려간다. 분포가 넓게 퍼져 있을수록 상쇄가 빨리 일어나므로, $\varphi$ 가 0 근방에서 얼마나 급히 떨어지는지가 분포의 퍼짐을 재는 셈이다.

이 그림이 그대로 [Fourier 변환](fourier.md)이다. 실제로 특성함수는 확률측도의 Fourier 변환이고, 아래 성질은 전부 Fourier 해석의 일반 사실이 확률 쪽으로 번역된 것이다. 합성곱이 곱으로 가는 것, 변환이 함수를 결정하는 것, 국소 매끄러움이 꼬리 감쇠에 대응하는 것 모두 그렇다.

# 정의

$\mathbb R^d$ 위 확률측도 $\mu$ 의 **특성함수**는

$$
\varphi_\mu(t)=\int_{\mathbb R^d}e^{i\langle t,x\rangle}\thinspace d\mu(x),\qquad t\in\mathbb R^d
$$

이다. 확률변수 $X\sim\mu$ 로 쓰면 $\varphi_X(t)=\mathbb E\bigl[e^{i\langle t,X\rangle}\bigr]$ 다. [상측도](pushforward-measure.md)로 정의한 분포만 보므로 확률공간이 무엇인지는 상관이 없다.

기본 성질은 정의에서 바로 나온다.

- $\varphi(0)=1$ 이고 모든 $t$ 에 대해 $|\varphi(t)|\le1$ 이다.
- $\varphi$ 는 $\mathbb R^d$ 전체에서 균등연속이다. $|\varphi(t+h)-\varphi(t)|\le\mathbb E\bigl[|e^{i\langle h,X\rangle}-1|\bigr]$ 이고 우변이 [지배 수렴 정리](dominated-convergence.md)로 $h\to0$ 일 때 0 이 되며, 이 평가에 $t$ 가 나타나지 않는다.
- $\varphi_{-X}(t)=\overline{\varphi_X(t)}$ 이므로 $X$ 가 $-X$ 와 같은 분포이면, 그리고 그때만, $\varphi$ 가 실함수다.
- $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$ 다.

## 예

| 분포 | 특성함수 |
| --- | --- |
| 점질량 $\delta_c$ | $e^{itc}$ |
| 베르누이 $\mathrm{Bernoulli}(p)$ | $1-p+pe^{it}$ |
| 푸아송 $\mathrm{Poisson}(\lambda)$ | $\exp\bigl(\lambda(e^{it}-1)\bigr)$ |
| 정규 $N(m,\sigma^2)$ | $\exp\bigl(itm-\tfrac12\sigma^2t^2\bigr)$ |
| 지수 $\mathrm{Exp}(\lambda)$ | $\lambda/(\lambda-it)$ |
| 코시 | $e^{-\Vert t\Vert}$ |

정규분포의 특성함수가 다시 정규형이라는 점, 그리고 코시의 특성함수가 원점에서 미분불가능하다는 점을 기억해 두면 좋다. 뒤의 사실이 코시 분포에 평균이 없다는 것의 특성함수 쪽 표현이다.

# 성질

## 독립합은 곱

$X$ 와 $Y$ 가 독립이면

$$
\varphi_{X+Y}(t)=\varphi_X(t)\thinspace\varphi_Y(t).
$$

독립성으로 기댓값이 분리되기 때문이다. 분포의 합성곱이 특성함수의 곱이 되므로, 합의 분포를 다루는 문제가 곱셈 문제로 바뀐다. 독립 정규분포의 합이 정규분포라는 사실은 $\exp$ 안의 지수가 더해진다는 계산 한 줄로 끝난다.

## 유일성과 반전

$\varphi_\mu=\varphi_\nu$ 이면 $\mu=\nu$ 다. 분포함수의 연속점 $a<b$ 에서 반전공식

$$
\mu\bigl((a,b)\bigr)=\lim_{T\to\infty}\frac1{2\pi}\int_{-T}^{T}\frac{e^{-ita}-e^{-itb}}{it}\thinspace\varphi_\mu(t)\thinspace dt
$$

가 성립하고, $\varphi_\mu$ 가 적분가능하면 $\mu$ 는 유계 연속 밀도

$$
f(x)=\frac1{2\pi}\int_{\mathbb R}e^{-itx}\varphi_\mu(t)\thinspace dt
$$

를 가진다. 특성함수가 분포를 완전히 결정한다는 것이 이 문서 전체의 전제다.

## 적률과 원점에서의 미분

$\mathbb E[|X|^n]<\infty$ 이면 $\varphi$ 는 $n$ 번 연속미분가능하고

$$
\varphi^{(n)}(0)=i^n\thinspace\mathbb E[X^n],\qquad
\varphi(t)=\sum_{k=0}^{n}\frac{(it)^k}{k!}\mathbb E[X^k]+o(|t|^n).
$$

적률 유한성이 원점에서의 매끄러움으로 번역된다. 역은 짝수 차수에서만 성립한다. $\varphi''(0)$ 이 존재하면 $\mathbb E[X^2]<\infty$ 이지만, 1 차 미분 가능성만으로는 평균의 존재가 보장되지 않는다.

적률이 분포를 결정하지 못하는 경우가 있는 것과 달리 특성함수는 언제나 결정한다. 위 전개는 국소 정보일 뿐이고, 유일성은 $t$ 전체에서의 값에서 나오기 때문이다.

## Lévy 연속성 정리

이 도구가 극한정리에서 힘을 쓰는 지점이다.

**정리.** $\mu_n$ 이 $\mathbb R^d$ 위 확률측도열이라 하자.

1. $\mu_n\Rightarrow\mu$ 이면 모든 $t$ 에 대해 $\varphi_{\mu_n}(t)\to\varphi_\mu(t)$ 다.
2. 역으로 $\varphi_{\mu_n}(t)$ 가 각 $t$ 에서 어떤 함수 $\psi(t)$ 로 수렴하고 $\psi$ 가 $t=0$ 에서 연속이면, $\psi$ 는 어떤 확률측도 $\mu$ 의 특성함수이고 $\mu_n\Rightarrow\mu$ 다.

1 은 $e^{i\langle t,x\rangle}$ 가 유계 연속이므로 정의에서 곧바로 나온다. 2 가 본체이며, 0 에서의 연속성이 **tightness 를 대신한다**는 것이 핵심이다. 실제로 증명은 $\psi$ 의 원점 근방 적분으로 꼬리질량을 평가해

$$
\mu_n\bigl(\lbrace|x|>2/\delta\rbrace\bigr)\le\frac1\delta\int_{-\delta}^{\delta}\bigl(1-\varphi_{\mu_n}(t)\bigr)\thinspace dt
$$

같은 부등식을 얻고, 여기서 tightness 를 끌어낸 뒤 Prokhorov 정리로 수렴 부분열을 잡고 유일성으로 극한을 확정하는 순서를 밟는다.

가정이 왜 필요한지는 $\mu_n=\delta_n$ 이 보여 준다. $\varphi_n(t)=e^{int}$ 는 $t=0$ 에서만 수렴하므로 전제부터 성립하지 않는다. $\mu_n=N(0,n)$ 이면 $\varphi_n(t)=e^{-nt^2/2}$ 가 각 점에서 수렴하지만 극한이 $t=0$ 에서만 1 이고 나머지에서 0 인 불연속 함수다. 질량이 무한히 퍼져 확률측도로 수렴하지 못하는 상황이 원점에서의 불연속으로 정확히 드러난다.

## Bochner 정리

어떤 함수가 특성함수가 될 수 있는지에 대한 답이다. $\varphi:\mathbb R^d\to\mathbb C$ 가 어떤 확률측도의 특성함수인 것과 다음 세 조건이 동시에 성립하는 것이 동치다.

- $\varphi(0)=1$,
- $\varphi$ 가 연속,
- $\varphi$ 가 **양정치**다. 즉 임의의 $t_1,\dots,t_n$ 과 복소수 $c_1,\dots,c_n$ 에 대해 $\sum_{j,k}c_j\overline{c_k}\thinspace\varphi(t_j-t_k)\ge0$.

양정치성은 $\bigl|\sum_jc_je^{i\langle t_j,X\rangle}\bigr|^2$ 의 기댓값이 음수가 될 수 없다는 사실의 이름이며, 위 합을 전개하면 곧바로 나온다. 어려운 방향은 양정치 연속함수에서 측도를 복원하는 쪽이다. 이 정리는 Gauss 과정의 공분산 핵을 설계할 때 그대로 쓰인다. 정상 핵이 유효하려면 그 Fourier 변환이 음이 아닌 측도여야 한다는 조건이 정확히 Bochner 정리다.

# 활용

## 중심극한정리

[중심극한정리](central-limit-theorem.md)의 표준 증명이 이 도구 세 개를 순서대로 쓴다. $X_i$ 가 독립동일분포이고 평균 0, 분산 1 이라 하자. $S_n=(X_1+\dots+X_n)/\sqrt n$ 의 특성함수는 독립성으로

$$
\varphi_{S_n}(t)=\Bigl[\varphi_X\bigl(t/\sqrt n\bigr)\Bigr]^n
$$

이고, 2 차 적률이 유한하므로 원점 전개를 쓰면 $\varphi_X(s)=1-s^2/2+o(s^2)$ 다. 대입하면

$$
\varphi_{S_n}(t)=\Bigl[1-\frac{t^2}{2n}+o\bigl(1/n\bigr)\Bigr]^n\longrightarrow e^{-t^2/2}
$$

이고, 우변이 $N(0,1)$ 의 특성함수이며 0 에서 연속이므로 Lévy 연속성 정리가 분포 수렴을 준다. "독립합이 곱, 적률이 국소 전개, 각점 수렴이 약수렴" 이라는 세 번역이 맞물려 극한정리가 미적분 계산으로 환원된다.

같은 골격으로 희박 극한에서 이항분포가 푸아송으로 가는 것도 한 줄이다. $\bigl(1-\lambda/n+\lambda e^{it}/n\bigr)^n\to\exp\bigl(\lambda(e^{it}-1)\bigr)$ 이다.

## 안정분포와 무한분해가능성

특성함수는 분포족을 방정식으로 규정할 수 있게 해 준다. $\varphi$ 가 임의의 $n$ 에 대해 어떤 특성함수의 $n$ 제곱으로 쓰이면 그 분포를 **무한분해가능**하다고 하며, 이 조건은 Lévy–Khintchine 공식으로 완전히 분류된다. 정규, 푸아송, 코시가 모두 여기에 속하고, 이 분류가 Lévy 과정과 [Brown 운동](brownian-motion.md)의 구성으로 이어진다.

$\varphi_X(t)^n=\varphi_X(c_nt)e^{id_nt}$ 꼴을 요구하면 **안정분포**가 나오고, 특성함수가 $\exp(-|t|^\alpha)$ 꼴이 되는 $\alpha\in(0,2]$ 로 매개된다. $\alpha=2$ 가 정규, $\alpha=1$ 이 코시다. 분산이 없는 무거운 꼬리에서 중심극한정리가 깨질 때 그 자리를 채우는 것이 이 족이다.

# 연관 문서

## 선수지식

- [분포 수렴과 Prokhorov 정리](weak-convergence.md)
- [확률변수와 기댓값](random-variables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #theorem
