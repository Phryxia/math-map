# Talagrand 수송 부등식

# 개요

**Talagrand 수송 부등식(Talagrand's transportation inequality)** 은 한 분포를 기준 분포로 옮기는 비용을 두 분포의 정보량 차이로 누르는 부등식이다. 표준 [정규분포](normal-distribution.md)의 표본에서 어떤 집합 $A$ 에 든 것만 남기면 분포가 바뀌는데, 남은 표본을 원래 분포의 표본으로 바꾸려면 점들을 얼마나 멀리 옮겨야 하는지 묻는다. 이 부등식은 옮기는 거리의 제곱 평균이 $2\log(1/P(A))$ 이하임을 보이고, 그로부터 $A$ 에서 멀리 떨어진 점의 확률이 작다는 것을 얻는다.

# 직관

표준 정규분포 $\gamma=N(0,1)$ 과 평균만 옮긴 $\nu=N(m,1)$ 을 비교한다. $\nu$ 의 표본을 $\gamma$ 의 표본으로 바꾸는 가장 싼 방법은 모든 점을 $m$ 만큼 미는 것이고, 거리의 제곱 평균은 $m^2$ 이다. 두 분포의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)는 $D(\nu\Vert\gamma)=m^2/2$ 이다. 옮기는 비용이 정보량 차이의 두 배와 같다.

분산을 바꾼 $\nu=N(0,s^2)$ 에서는 $x\mapsto x/s$ 로 옮기는 것이 가장 싸고 비용은 $(s-1)^2$ 이다. 정보량 차이는 $D(\nu\Vert\gamma)=\frac12(s^2-1-\log s^2)$ 이다. 비용이 정보량 차이의 두 배 이하라는 것은 $(s-1)^2\le s^2-1-2\log s$, 곧 $\log s\le s-1$ 이므로 성립한다. $s=2$ 에서 비용은 $1$ 이고 정보량 차이의 두 배는 $3-\log 4\approx 1.61$ 이다.

개요의 질문으로 간다. $\gamma$ 를 집합 $A$ 에 제한하고 다시 정규화한 분포를 $\gamma_A$ 라 하면 $D(\gamma_A\Vert\gamma)=\log(1/\gamma(A))$ 다. 비용이 정보량 차이의 두 배 이하라면 $\gamma_A$ 를 $\gamma$ 로 옮기는 비용은 $2\log(1/\gamma(A))$ 이하다. $\gamma(A)=1/2$ 이면 이 값은 $2\log 2\approx 1.39$ 다.

# 정의

## 수송 부등식

$\mu$ 가 $\mathbb R^n$ 위의 확률측도이고 $C\gt 0$ 이라 한다. $\mu$ 가 상수 $C$ 의 **$T_2$ 부등식($T_2$ inequality)** 을 만족한다는 것은, $\mu$ 에 대해 밀도를 갖는 모든 확률측도 $\nu$ 에서 다음이 성립한다는 것이다.

$$
W_2(\nu,\mu)^2\le 2C\thinspace D(\nu\Vert\mu)
$$

$W_2$ 는 [최적 수송](optimal-transport.md)의 이차 Wasserstein 거리이고 $D$ 는 KL divergence 다. $W_2$ 를 $W_1$ 로 바꾼 것을 **$T_1$ 부등식($T_1$ inequality)** 이라 한다. 직관 절의 두 예는 표준 정규분포가 $C=1$ 의 $T_2$ 부등식을 만족할 때 성립해야 하는 사례이고, 평균을 옮긴 예에서 등호가 성립한다.

## Talagrand 부등식

$\mathbb R^n$ 의 표준 정규분포 $\gamma_n$ 은 상수 $C=1$ 의 $T_2$ 부등식을 만족한다[^1].

$$
W_2(\nu,\gamma_n)^2\le 2\thinspace D(\nu\Vert\gamma_n)
$$

상수는 차원에 의존하지 않고, 평균만 옮긴 $\nu=N(m,I_n)$ 에서 양변이 모두 $\vert m\vert^2$ 이다.

# 성질

## 일차원 증명

$n=1$ 에서 $\gamma$ 의 분포함수를 $\Phi$, $\nu$ 의 분포함수를 $G$ 라 하면 $\gamma$ 를 $\nu$ 로 옮기는 최적 사상은 $T=G^{-1}\circ\Phi$ 다. $\nu$ 의 밀도를 $g$, 정규 밀도를 $\varphi$ 라 하면 $T$ 는 $g(T(x))T'(x)=\varphi(x)$ 를 만족한다. 로그를 잡아 $\gamma$ 로 적분하면

$$
D(\nu\Vert\gamma)=\int\log\frac{g(T(x))}{\varphi(T(x))}\thinspace d\gamma(x)=\int\Bigl(\frac{T(x)^2-x^2}{2}-\log T'(x)\Bigr)\thinspace d\gamma(x)
$$

이다. $\frac{T^2-x^2}{2}=\frac{(T-x)^2}{2}+x(T-x)$ 이고, Gauss 부분적분 $\int xh(x)\thinspace d\gamma=\int h'(x)\thinspace d\gamma$ 로 $\int x(T-x)\thinspace d\gamma=\int(T'-1)\thinspace d\gamma$ 다. 따라서 오른쪽은 $\int\frac{(T-x)^2}{2}d\gamma+\int(T'-1-\log T')\thinspace d\gamma$ 다. 둘째 적분은 $\log t\le t-1$ 로 $0$ 이상이고, 첫째 적분이 $W_2(\nu,\gamma)^2/2$ 다[^1].

## 텐서화

$\mu_i$ 가 $\mathbb R^{n_i}$ 위에서 상수 $C$ 의 $T_2$ 부등식을 만족하면 곱측도 $\mu_1\otimes\cdots\otimes\mu_k$ 도 상수 $C$ 의 $T_2$ 부등식을 만족한다[^2]. KL divergence 가 조건부 분포로 쪼개지는 연쇄 법칙(chain rule)과, 좌표마다의 최적 결합을 이어 붙인 결합의 비용이 좌표 비용의 합이라는 것으로 증명한다. 일차원 증명과 이것으로 $\gamma_n$ 의 부등식이 나온다. $T_1$ 부등식은 같은 방법으로 텐서화하면 상수가 좌표 수 $k$ 배로 커진다.

## Marton 논법

$\mu$ 가 상수 $C$ 의 $T_2$ 부등식을 만족하면 $\mu(A)\ge 1/2$ 인 집합 $A$ 와 $r\ge\sqrt{2C\log 2}$ 에서 다음이 성립한다[^3].

$$
\mu\bigl(\lbrace x:\mathrm{dist}(x,A)\ge r\rbrace\bigr)\le\exp\Bigl(-\frac{\bigl(r-\sqrt{2C\log 2}\bigr)^2}{2C}\Bigr)
$$

증명의 요지. $B=\lbrace x:\mathrm{dist}(x,A)\ge r\rbrace$ 라 하고 $\mu$ 를 $A$ 와 $B$ 에 제한해 정규화한 분포를 $\mu_A,\mu_B$ 라 한다. $A$ 의 점과 $B$ 의 점은 거리가 $r$ 이상이므로 $W_2(\mu_A,\mu_B)\ge r$ 다. 삼각부등식과 $D(\mu_A\Vert\mu)=\log(1/\mu(A))$ 로

$$
r\le W_2(\mu_A,\mu)+W_2(\mu,\mu_B)\le\sqrt{2C\log\frac1{\mu(A)}}+\sqrt{2C\log\frac1{\mu(B)}}
$$

를 얻고, $\mu(A)\ge 1/2$ 를 넣어 $\mu(B)$ 에 대해 푼다. 직관 절의 마지막 계산은 이 증명의 첫 항이다. $W_1\le W_2$ 이므로 $T_1$ 부등식만으로도 같은 논법이 돌아간다.

## 로그 Sobolev 부등식과의 관계

[로그 Sobolev 부등식](log-sobolev-inequality.md)을 상수 $C$ 로 만족하는 $\mu$ 는 상수 $C$ 의 $T_2$ 부등식을 만족한다. 이것이 **Otto–Villani 정리(Otto–Villani theorem)** 다[^4]. 증명은 [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)에서 $\nu$ 를 출발점으로 한 상대엔트로피의 흐름을 따라가며, 흐름이 지나간 $W_2$ 거리를 엔트로피의 감소량으로 누르는 것이다.

상수 $C$ 의 $T_2$ 부등식은 상수 $C$ 의 [Poincaré 부등식](poincare-inequality.md)을 함의한다[^4]. $\nu=(1+\varepsilon g)\mu$ 를 넣고 $\varepsilon\to 0$ 으로 보내면 양변의 $\varepsilon^2$ 차 항에서 나온다. $T_2$ 부등식에서 로그 Sobolev 부등식으로 가는 함의는 일반적으로 성립하지 않는다[^5].

## Bobkov–Götze 판정

$\mu$ 가 상수 $C$ 의 $T_1$ 부등식을 만족하는 것은, 모든 1-Lipschitz 함수 $F$ 와 모든 $\lambda\in\mathbb R$ 에서 다음이 성립하는 것과 동치다[^6].

$$
\int e^{\lambda(F-\int F\thinspace d\mu)}d\mu\le e^{C\lambda^2/2}
$$

증명은 [볼록 공액](convex-conjugate.md)으로 쓴 KL divergence 의 변분 표현 $\log\int e^{h}d\mu=\sup_\nu\bigl(\int h\thinspace d\nu-D(\nu\Vert\mu)\bigr)$ 과 $W_1$ 의 Kantorovich–Rubinstein 쌍대 표현이다. 오른쪽 꼴은 [집중부등식](concentration-inequalities.md)의 sub-Gaussian 조건이다.

# 활용

- [집중부등식](concentration-inequalities.md). Marton 논법은 곱측도와 [Markov 연쇄](markov-chains.md)에서 집합의 확대에 대한 집중을 텐서화로 얻는 방법이다.
- [Langevin 동역학](langevin-dynamics.md)의 표본추출 오차를 $W_2$ 로 잴 때, KL divergence 의 상한을 이 부등식으로 $W_2$ 의 상한으로 바꾼다.
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)의 HWI 부등식(HWI inequality, entropy H, Wasserstein distance W, Fisher information I)은 상대엔트로피, $W_2$, [Fisher 정보](fisher-information.md) 사이의 부등식이고, 퍼텐셜이 강볼록이면 로그 Sobolev 부등식을 함의한다. 거기에 Otto–Villani 정리를 쓰면 이 부등식이 나온다.

[^1]: M. Talagrand, "Transportation cost for Gaussian and other product measures", *Geometric and Functional Analysis* 6 (1996), 587–600.
[^2]: Cédric Villani, *Optimal Transport: Old and New*, Springer, 2009, 22 장.
[^3]: K. Marton, "A simple proof of the blowing-up lemma", *IEEE Transactions on Information Theory* 32 (1986), 445–446.
[^4]: F. Otto, C. Villani, "Generalization of an inequality by Talagrand and links with the logarithmic Sobolev inequality", *Journal of Functional Analysis* 173 (2000), 361–400.
[^5]: P. Cattiaux, A. Guillin, "On quadratic transportation cost inequalities", *Journal de Mathématiques Pures et Appliquées* 86 (2006), 341–361.
[^6]: S. G. Bobkov, F. Götze, "Exponential integrability and transportation cost related to logarithmic Sobolev inequalities", *Journal of Functional Analysis* 163 (1999), 1–28.

# 연관 문서

## 선수지식

- [로그 Sobolev 부등식](log-sobolev-inequality.md)
- [최적 수송](optimal-transport.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #optimization #information_theory
