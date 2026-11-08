# 로그 Sobolev 부등식

# 개요

**로그 Sobolev 부등식(logarithmic Sobolev inequality)** 은 함수의 엔트로피를 기울기의 크기로 누르는 부등식이다. 표준 정규분포를 따르는 $X$ 의 절댓값이 $3$ 이상일 확률은 약 $0.0027$ 인데, 분산이 $1$ 이라는 것만 쓰면 Chebyshev 부등식이 주는 상한은 $1/9$ 다. 분산 대신 엔트로피를 기울기로 누르면 $X$ 의 매끄러운 함수가 평균에서 $t$ 이상 벗어날 확률이 $e^{-t^2/2}$ 이하라는 상한이 나온다.

# 직관

표준 정규분포 $\gamma$ 에서 $\mathrm{Var}(X)=1$ 이고, [Poincaré 부등식](poincare-inequality.md)의 Gauss 측도 판본은 $f$ 의 분산이 $\int\vert f'\vert^2d\gamma$ 이하라고 한다. 분산만 알면 꼬리 확률은 $\mathrm{Var}/t^2$ 로밖에 누르지 못한다. 꼬리를 $e^{-t^2/2}$ 꼴로 누르려면 $\mathbb E\thinspace e^{\lambda X}$ 를 알아야 하고, 이 값은 분산이 아닌 다른 양으로 다룬다.

음이 아닌 함수 $g$ 에 대해 $\mathbb E\lbrack g\log g\rbrack-\mathbb E g\log\mathbb E g$ 를 계산한다. $g=e^{\lambda X}$ 이면 $\mathbb E g=e^{\lambda^2/2}$ 이고, 부분적분으로 $\mathbb E\lbrack Xe^{\lambda X}\rbrack=\lambda e^{\lambda^2/2}$ 이므로 $\mathbb E\lbrack g\log g\rbrack=\lambda^2e^{\lambda^2/2}$ 다. 두 값을 빼면 $\frac{\lambda^2}{2}e^{\lambda^2/2}$ 이다.

$g=f^2$ 으로 쓰면 $f=e^{\lambda X/2}$ 이고 $f'=\frac{\lambda}{2}e^{\lambda X/2}$ 이므로 $2\thinspace\mathbb E\lbrack f'^2\rbrack=\frac{\lambda^2}{2}\mathbb E\thinspace e^{\lambda X}=\frac{\lambda^2}{2}e^{\lambda^2/2}$ 다. 앞 문단의 값과 같다. Gross 는 모든 매끄러운 $f$ 에서 앞 문단의 양이 $2\thinspace\mathbb E\lbrack f'^2\rbrack$ 이하임을 보였고, 지수함수는 그 부등식의 등호 경우다.

부등식의 왼쪽에 $e^{\lambda F}$ 를 넣으면 $H(\lambda)=\mathbb E\thinspace e^{\lambda F}$ 의 미분이 들어간 부등식이 나온다. 이것을 $\lambda$ 에 대해 적분하면 $H(\lambda)\le e^{\lambda\mathbb EF+\lambda^2/2}$ 이고, Chernoff 기법이 꼬리 확률 $e^{-t^2/2}$ 를 준다. 이 계산은 성질 절의 Herbst 논법이다.

# 정의

## 엔트로피 범함수

$\mu$ 가 확률측도이고 $g\ge 0$ 이 $\int g\log(1+g)\thinspace d\mu\lt\infty$ 를 만족한다고 한다. $g$ 의 $\mu$ 에 대한 **엔트로피(entropy)** 는 다음이다.

$$
\mathrm{Ent}\_\mu(g)=\int g\log g\thinspace d\mu-\Bigl(\int g\thinspace d\mu\Bigr)\log\Bigl(\int g\thinspace d\mu\Bigr)
$$

$t\mapsto t\log t$ 가 볼록이므로 [Jensen 부등식](jensen-inequality.md)으로 $\mathrm{Ent}\_\mu(g)\ge 0$ 이다. $\int g\thinspace d\mu=1$ 이면 $\mathrm{Ent}\_\mu(g)$ 는 밀도가 $g$ 인 확률측도 $\nu=g\mu$ 의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence) $D(\nu\Vert\mu)$ 와 같다. 직관 절의 $g=e^{\lambda X}$ 에서 $\mathrm{Ent}\_\gamma(g)=\frac{\lambda^2}{2}e^{\lambda^2/2}$ 다.

## 로그 Sobolev 부등식

$\mathbb R^n$ 위의 확률측도 $\mu$ 가 상수 $C\gt 0$ 의 로그 Sobolev 부등식을 만족한다는 것은 모든 매끄러운 $f$ 에 대해 다음이 성립한다는 것이다.

$$
\mathrm{Ent}\_\mu(f^2)\le 2C\int\vert\nabla f\vert^2d\mu
$$

이런 $C$ 가운데 가장 작은 것을 $\mu$ 의 로그 Sobolev 상수라 한다. 직관 절의 계산은 표준 정규분포에서 $C=1$ 이 최적임을 보인다. $f=e^{\lambda x/2}$ 에서 양변이 모두 $\frac{\lambda^2}{2}e^{\lambda^2/2}$ 이기 때문이다.

## Gauss 로그 Sobolev 부등식

$\mathbb R^n$ 의 표준 정규분포 $\gamma_n$ 은 상수 $C=1$ 의 로그 Sobolev 부등식을 만족한다[^1].

$$
\int f^2\log f^2\thinspace d\gamma_n-\int f^2d\gamma_n\log\int f^2d\gamma_n\le 2\int\vert\nabla f\vert^2d\gamma_n
$$

상수는 차원 $n$ 에 의존하지 않는다.

## 두 점 공간

$\lbrace -1,1\rbrace$ 위의 균등분포 $\mu$ 와 $f(1)=a$, $f(-1)=b$ 에 대해 다음이 성립한다[^1].

$$
\mathrm{Ent}\_\mu(f^2)\le\frac{(a-b)^2}{2}
$$

$a=1$, $b=0$ 이면 왼쪽은 $\frac12\log 2\approx 0.347$ 이고 오른쪽은 $0.5$ 다. 오른쪽은 기울기 $(a-b)/2$ 의 제곱의 두 배이므로 상수 $C=1$ 의 이산 판본이다. Gross 는 이 부등식을 곱공간으로 옮기고 [중심극한정리](central-limit-theorem.md)로 Gauss 판본을 얻었다.

# 성질

## Poincaré 부등식의 함의

상수 $C$ 의 로그 Sobolev 부등식은 상수 $C$ 의 Poincaré 부등식 $\mathrm{Var}\_\mu(g)\le C\int\vert\nabla g\vert^2d\mu$ 를 함의한다.

증명의 요지. $f=1+\varepsilon g$ 를 넣고 $\varepsilon$ 에 대해 전개하면 $\mathrm{Ent}\_\mu(f^2)=2\varepsilon^2\mathrm{Var}\_\mu(g)+o(\varepsilon^2)$ 이고 오른쪽은 $2C\varepsilon^2\int\vert\nabla g\vert^2d\mu$ 다. $\varepsilon^2$ 으로 나누고 $\varepsilon\to 0$ 으로 보낸다.

역은 성립하지 않는다. 밀도가 $\frac12e^{-\vert x\vert}$ 인 Laplace 분포는 상수 $4$ 의 Poincaré 부등식을 만족하지만 $P(X\gt t)=\frac12e^{-t}$ 이므로 아래 Herbst 논법이 주는 꼬리 $e^{-t^2/(2C)}$ 를 어떤 $C$ 로도 만족하지 못한다.

## Herbst 논법

$\mu$ 가 상수 $C$ 의 로그 Sobolev 부등식을 만족하고 $F$ 가 1-Lipschitz 이면 모든 $t\gt 0$ 에서 다음이 성립한다[^2].

$$
\mu\bigl(F-\textstyle\int F\thinspace d\mu\ge t\bigr)\le e^{-t^2/(2C)}
$$

증명의 요지. $H(\lambda)=\int e^{\lambda F}d\mu$ 라 하면 $\mathrm{Ent}\_\mu(e^{\lambda F})=\lambda H'(\lambda)-H\log H$ 다. $f=e^{\lambda F/2}$ 는 $\vert\nabla f\vert^2\le\frac{\lambda^2}{4}e^{\lambda F}$ 를 만족하므로 부등식이 $\lambda H'-H\log H\le\frac{C\lambda^2}{2}H$ 를 준다. 양변을 $\lambda^2H$ 로 나누면 $\frac{d}{d\lambda}\bigl(\frac1\lambda\log H\bigr)\le\frac C2$ 이고, $\lambda\to 0$ 에서 $\frac1\lambda\log H\to\int F\thinspace d\mu$ 이므로 $H(\lambda)\le e^{\lambda\int F+C\lambda^2/2}$ 다. Markov 부등식(Markov's inequality)을 $e^{\lambda(F-\int F)}$ 에 쓰고 $\lambda=t/C$ 로 놓는다.

Gauss 측도에서는 $C=1$ 이므로 1-Lipschitz 함수가 평균에서 $t$ 이상 벗어날 확률이 차원과 무관하게 $e^{-t^2/2}$ 이하다.

## 텐서화

$\mu_1,\dots,\mu_n$ 이 각각 상수 $C_i$ 의 로그 Sobolev 부등식을 만족하면 곱측도 $\mu_1\otimes\cdots\otimes\mu_n$ 은 상수 $\max_iC_i$ 의 로그 Sobolev 부등식을 만족한다[^2]. 증명은 엔트로피의 부분가법성(subadditivity) $\mathrm{Ent}\_{\mu}(g)\le\sum_i\int\mathrm{Ent}\_{\mu_i}(g)\thinspace d\mu$ 이다. 오른쪽의 $i$ 번째 항은 $i$ 번째 좌표 이외를 고정하고 그 좌표의 측도로 잰 엔트로피다. 상수가 $n$ 에 의존하지 않는 Gauss 판본은 일차원 판본에서 이것으로 나온다.

## Bakry–Émery 판정

$\mu$ 의 밀도가 $e^{-V}$ 에 비례하고 모든 점에서 [Hessian 행렬](hessian.md)이 $\nabla^2V\succeq\rho I$ ($\rho\gt 0$) 이면 $\mu$ 는 상수 $1/\rho$ 의 로그 Sobolev 부등식을 만족한다. 이것이 **Bakry–Émery 판정(Bakry–Émery criterion)** 이다[^2]. 표준 정규분포는 $V(x)=\vert x\vert^2/2$, $\nabla^2V=I$ 이므로 $C=1$ 이다.

## 유계 섭동

$\mu$ 가 상수 $C$ 의 로그 Sobolev 부등식을 만족하고 $d\nu=Z^{-1}e^{-W}d\mu$ 에서 $W$ 가 유계이면 $\nu$ 는 상수 $Ce^{\sup W-\inf W}$ 의 로그 Sobolev 부등식을 만족한다. 이것이 **Holley–Stroock 섭동 보조정리(Holley–Stroock perturbation lemma)** 다[^2]. 강볼록이 아닌 $V$ 도 강볼록 $V_0$ 와의 차가 유계이면 이것으로 다룬다.

## 초축약성

[Ornstein–Uhlenbeck 과정](ornstein-uhlenbeck-process.md)의 반군 $P_tf(x)=\mathbb E\thinspace f(e^{-t}x+\sqrt{1-e^{-2t}}\thinspace Z)$ 에 대해, $1\lt p\lt q\lt\infty$ 이고 $q-1\le e^{2t}(p-1)$ 이면 $\Vert P_tf\Vert\_{L^q(\gamma_n)}\le\Vert f\Vert\_{L^p(\gamma_n)}$ 이다. 이 성질을 [초축약성](hypercontractivity.md)이라 하고, Gauss 로그 Sobolev 부등식과 동치다[^1]. 부등식에서 초수축성으로 가는 증명은 $q(t)=1+e^{2t}(p-1)$ 로 놓고 $\log\Vert P_tf\Vert\_{q(t)}$ 를 $t$ 로 미분하는 것이고, 그 미분에 엔트로피와 $\int\vert\nabla f\vert^2$ 가 나타난다.

## 엔트로피의 지수 감소

$V$ 에 대한 [확률미분방정식](stochastic-differential-equations.md) $dX_t=-\nabla V(X_t)\thinspace dt+\sqrt2\thinspace dB_t$ 에서 $X_t$ 의 분포를 $p_t$, 정상분포를 $\mu\propto e^{-V}$ 라 한다. $\mu$ 가 상수 $C$ 의 로그 Sobolev 부등식을 만족하면 다음이 성립한다.

$$
D(p_t\Vert\mu)\le e^{-2t/C}D(p_0\Vert\mu)
$$

증명의 요지. $\frac{d}{dt}D(p_t\Vert\mu)=-\int\bigl\vert\nabla\log\frac{p_t}{\mu}\bigr\vert^2dp_t$ 이다. 로그 Sobolev 부등식에 $f^2=p_t/\mu$ 를 넣으면 $\int\vert\nabla f\vert^2d\mu$ 가 오른쪽 적분의 $1/4$ 이므로 그 적분이 $\frac2CD(p_t\Vert\mu)$ 이상이다. 남은 것은 미분부등식 $D'\le-\frac2CD$ 다.

# 활용

- [집중부등식](concentration-inequalities.md)의 엔트로피 방법(entropy method)이 Herbst 논법이다. Gauss 측도 위 Lipschitz 함수의 꼬리, 곱측도 위 함수의 꼬리를 이 부등식과 텐서화로 얻는다.
- [Fokker–Planck 방정식](fokker-planck.md)의 해가 정상분포로 가는 속도와 [Langevin 동역학](langevin-dynamics.md)으로 표본을 뽑을 때의 수렴 속도를 엔트로피의 지수 감소로 잰다.
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)에서 로그 Sobolev 부등식은 [Talagrand 수송 부등식](talagrand-transport-inequality.md) $W_2(\nu,\mu)^2\le 2C\thinspace D(\nu\Vert\mu)$ 를 함의한다. 이것이 Otto–Villani 정리(Otto–Villani theorem)다.
- [부울 함수의 Fourier 해석](boolean-fourier.md)의 초축약성은 두 점 공간 판본을 텐서화한 것이고, [Kahn–Kalai–Linial 정리](kkl-theorem.md)의 증명에 쓰인다.

[^1]: Leonard Gross, "Logarithmic Sobolev inequalities", *American Journal of Mathematics* 97 (1975), 1061–1083.
[^2]: Dominique Bakry, Ivan Gentil, Michel Ledoux, *Analysis and Geometry of Markov Diffusion Operators*, Springer, 2014, 5 장. Herbst 논법과 텐서화는 Michel Ledoux, *The Concentration of Measure Phenomenon*, American Mathematical Society, 2001, 5 장에도 있다.

# 연관 문서

## 선수지식

- [Poincaré 부등식](poincare-inequality.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

- [초축약성](hypercontractivity.md)
- [Talagrand 수송 부등식](talagrand-transport-inequality.md)

#probability #analysis #information_theory
