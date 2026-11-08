# 초축약성

# 개요

**초축약성(hypercontractivity)** 은 함수의 입력에 무작위 잡음을 섞어 평균을 내면, 함수의 4제곱 평균 같은 높은 지수의 평균이 2제곱 평균 같은 낮은 지수의 평균 이하로 줄어든다는 성질이다. 동전 $n$ 개의 앞뒤로 값을 정하는 함수가 동전 두 개에 대한 곱 $(1+x_1)(1+x_2)/4$ 처럼 차수가 낮은 다항식이라고 하자. 이 함수는 $0$ 이 아닌 값을 확률 $1/4$ 에서 갖는데, 차수가 $k$ 인 다항식이 $0$ 이 아닌 값을 얼마나 드문 경우에만 가질 수 있는지를 묻는다. 초축약성은 차수 $k$ 인 다항식의 4제곱 평균을 2제곱 평균의 $9^k$ 배 이하로 누르고, 이 부등식에서 $0$ 이 아닐 확률이 $9^{-k}$ 이상이라는 하한이 나온다.

# 직관

동전 $n$ 개를 던져 앞면을 $1$, 뒷면을 $-1$ 로 적은 것을 $x=(x_1,\dots,x_n)$ 이라 한다. $f(x)=(1+x_1)(1+x_2)/4$ 는 $x_1=x_2=1$ 일 때 $1$ 이고 그 밖에서 $0$ 이다. 전개하면 $\frac14(1+x_1+x_2+x_1x_2)$ 이므로 차수 $2$ 인 다항식이고, $0$ 이 아닐 확률은 $1/4$ 이다. 좌표 $k$ 개를 $1$ 로 고정한 경우의 곱 $\prod_{i\le k}(1+x_i)/2$ 는 차수 $k$ 이고 $0$ 이 아닐 확률은 $2^{-k}$ 다.

$0$ 이 아닌 값이 드문지는 4제곱 평균과 2제곱 평균의 비로 잴 수 있다. $f$ 가 확률 $\delta$ 인 집합 $A$ 밖에서 $0$ 이면, $f^2=f^2\cdot 1_A$ 에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓴 $(\mathbb E f^2)^2\le\delta\thinspace\mathbb E f^4$ 에서 다음이 나온다.

$$
\frac{\mathbb E f^4}{(\mathbb E f^2)^2}\ge\frac1\delta
$$

곱 $\prod_{i\le k}(1+x_i)/2$ 는 값이 $0$ 과 $1$ 뿐이라 $\mathbb E f^4=\mathbb E f^2=2^{-k}$ 이고, 비가 정확히 $2^k$ 다. 그러므로 차수 $k$ 인 다항식에서 이 비가 얼마까지 커질 수 있는지를 알면 $\delta$ 의 하한이 나온다.

차수 $1$ 인 $f=a_1x_1+\dots+a_nx_n$ 을 계산한다. $f^4$ 를 전개한 항 $a_ia_ja_ka_l\thinspace\mathbb E\lbrack x_ix_jx_kx_l\rbrack$ 은 첨자가 두 쌍으로 짝지어질 때만 $0$ 이 아니다. 네 첨자가 모두 같은 항이 $\sum a_i^4$, 서로 다른 두 쌍으로 짝짓는 방법이 세 가지라 그 항이 $3\sum_{i\ne j}a_i^2a_j^2$ 이므로

$$
\mathbb E f^4=3\Bigl(\sum_ia_i^2\Bigr)^2-2\sum_ia_i^4\le 3\thinspace(\mathbb E f^2)^2
$$

이다. $f=x_1+x_2$ 이면 값이 $2,0,0,-2$ 이고 $\mathbb E f^4=8\le 12$ 다. 차수 $k$ 에서 상수 $3$ 이 $9^k$ 로 바뀐 부등식이 성질 절의 Bonami 보조정리이고, 위의 비와 합치면 $\delta\ge 9^{-k}$ 다. 이 부등식을 잡음 연산자의 노름 부등식으로 쓴 것이 초축약성이다.

# 정의

## Lᵖ 노름

$\lbrace-1,1\rbrace^n$ 에 균등분포를 주고, $p\ge 1$ 에 대해 $f\colon\lbrace-1,1\rbrace^n\to\mathbb R$ 의 노름을 $\Vert f\Vert_p=(\mathbb E\vert f\vert^p)^{1/p}$ 로 둔다. [Hölder 부등식](holder-inequality.md)으로 $p\le q$ 이면 $\Vert f\Vert_p\le\Vert f\Vert_q$ 다. 직관 절의 비는 $\Vert f\Vert_4^4/\Vert f\Vert_2^4$ 이고, $\Vert f\Vert_4\le C\Vert f\Vert_2$ 꼴의 부등식이 그 비를 $C^4$ 이하로 누른다.

## 잡음 연산자

$\rho\in\lbrack 0,1\rbrack$ 이라 한다. $y\sim N_\rho(x)$ 는 각 좌표가 독립으로 확률 $\frac{1+\rho}{2}$ 로 $x_i$ 와 같고 나머지 확률로 $-x_i$ 인 분포다. [부울 함수의 Fourier 해석](boolean-fourier.md)의 **잡음 연산자(noise operator)** 는

$$
T_\rho f(x)=\mathbb E_{y\sim N_\rho(x)}\lbrack f(y)\rbrack=\sum_{S}\rho^{\vert S\vert}\hat f(S)\thinspace\chi_S(x)
$$

다. 차수 $k$ 인 항을 $\rho^k$ 배로 줄인다. $T_\rho f(x)$ 는 $f$ 값의 평균이므로 [Jensen 부등식](jensen-inequality.md)으로 $\vert T_\rho f\vert^p\le T_\rho\vert f\vert^p$ 이고, 양변의 기댓값을 취하면 모든 $p$ 에서 $\Vert T_\rho f\Vert_p\le\Vert f\Vert_p$ 다. 노름을 늘리지 않으므로 $T_\rho$ 는 **축약(contraction)** 이다.

## 초축약성

$1\le p\le q$ 와 $\rho$ 에 대해 모든 $f$ 에서

$$
\Vert T_\rho f\Vert_q\le\Vert f\Vert_p
$$

가 성립하면 $T_\rho$ 가 **$(p,q)$ 초축약(hypercontractive)** 이라 한다. $q\gt p$ 이면 오른쪽의 노름이 왼쪽보다 약하므로 축약보다 강한 진술이다.

좌표가 하나인 $f(x)=1+ax$ 로 $(2,4)$ 경우를 확인한다. $T_\rho f=1+\rho ax$ 이고 $x^2=1$ 이므로

$$
\Vert T_\rho f\Vert_4^4=1+6\rho^2a^2+\rho^4a^4,\qquad \Vert f\Vert_2^4=(1+a^2)^2=1+2a^2+a^4
$$

이다. $\rho^2=1/3$ 이면 왼쪽이 $1+2a^2+a^4/9$ 라서 부등식이 성립한다. $\rho^2\gt 1/3$ 이면 $a$ 가 작을 때 $6\rho^2a^2\gt 2a^2$ 이 다른 항보다 커서 부등식이 깨진다. 그러므로 $(2,4)$ 초축약이 되는 가장 큰 $\rho$ 는 $1/\sqrt3$ 이다.

# 성질

## Bonami 보조정리

$f$ 의 차수가 $k$ 이하이면 다음이 성립한다. 이것이 **Bonami 보조정리(Bonami lemma)** 다[^1][^3].

$$
\Vert f\Vert_4\le\sqrt3^{\thinspace k}\thinspace\Vert f\Vert_2
$$

증명의 요지. 좌표 수 $n$ 에 대한 귀납법이다. $f=x_ng+h$ 로 쓰면 $g$ 는 차수 $k-1$ 이하, $h$ 는 차수 $k$ 이하이고 둘 다 $x_n$ 을 포함하지 않는다. $x_n$ 의 홀수 거듭제곱 항은 기댓값이 $0$ 이므로 $\mathbb E f^4=\mathbb E h^4+6\thinspace\mathbb E g^2h^2+\mathbb E g^4$ 이다. 가운데 항을 Cauchy–Schwarz 부등식과 귀납 가정으로 $3^{k-1}\cdot 3^k\thinspace\mathbb E g^2\thinspace\mathbb E h^2$ 이하로 누르면 전체가 $9^k(\mathbb E g^2+\mathbb E h^2)^2=9^k(\mathbb E f^2)^2$ 이하가 된다.

직관 절의 결론이 여기서 나온다. 차수 $k$ 인 $f$ 가 확률 $\delta$ 인 집합 밖에서 $0$ 이면 $1/\delta\le 9^k$ 다.

## Bonami–Beckner 정리

$1\le p\le q\lt\infty$ 이고 $0\le\rho\le\sqrt{(p-1)/(q-1)}$ 이면 $T_\rho$ 는 $(p,q)$ 초축약이다. 이것이 **Bonami–Beckner 정리(Bonami–Beckner theorem)** 다[^1][^2].

증명의 요지. 정의 절의 계산처럼 좌표가 하나인 경우를 먼저 증명한다. $n$ 좌표의 경우는 $T_\rho$ 가 좌표마다의 연산자의 곱이라는 것과 Minkowski 적분 부등식(Minkowski's integral inequality)으로 한 좌표씩 귀납한다. 상수가 $n$ 에 의존하지 않는 것이 이 귀납에서 나온다.

$p=2$, $q=4$ 이면 $\rho=1/\sqrt3$ 이다. 차수 $k$ 이하인 $f$ 에 $g=\sum_S 3^{\vert S\vert/2}\hat f(S)\chi_S$ 를 두면 $f=T_{1/\sqrt3}\thinspace g$ 이고 $\Vert g\Vert_2\le 3^{k/2}\Vert f\Vert_2$ 이므로 Bonami 보조정리가 다시 나온다. $p=1+\rho^2$, $q=2$ 로 두면 [Kahn–Kalai–Linial 정리](kkl-theorem.md)의 증명이 쓰는 꼴이 나온다.

$$
\Vert T_\rho f\Vert_2\le\Vert f\Vert_{1+\rho^2}
$$

## 저차 다항식의 모멘트와 꼬리

$q\ge 2$ 이고 $f$ 의 차수가 $k$ 이하이면 $\Vert f\Vert_q\le\sqrt{q-1}^{\thinspace k}\Vert f\Vert_2$ 다. Bonami–Beckner 정리를 $p=2$, $\rho=1/\sqrt{q-1}$ 로 쓰고 위와 같이 $f=T_\rho g$ 로 놓으면 나온다.

$t\ge\sqrt{2e}^{\thinspace k}$ 이면 다음이 성립한다[^3].

$$
\Pr\bigl\lbrack\vert f\vert\ge t\Vert f\Vert_2\bigr\rbrack\le\exp\Bigl(-\frac{k}{2e}\thinspace t^{2/k}\Bigr)
$$

증명의 요지. $\vert f\vert^q$ 에 Markov 부등식(Markov's inequality)을 쓰면 확률이 $(q^{k/2}/t)^q$ 이하다. $q=t^{2/k}/e$ 로 놓으면 괄호 안이 $e^{-k/2}$ 이다. 조건 $q\ge 2$ 가 $t$ 의 범위다. $k=1$ 이면 꼬리가 $e^{-t^2/(2e)}$ 이고, [집중부등식](concentration-inequalities.md)의 Hoeffding 부등식(Hoeffding's inequality)이 주는 $2e^{-t^2/2}$ 와 지수의 상수가 다르다.

## 작은 집합의 확장

$A\subseteq\lbrace-1,1\rbrace^n$ 의 확률이 $\alpha$ 이고 $0\lt\rho\lt 1$ 이라 한다. $x$ 를 균등하게 뽑고 $y\sim N_\rho(x)$ 로 두면 다음이 성립한다. 이것이 **작은 집합 확장 정리(small-set expansion theorem)** 다[^3].

$$
\Pr\lbrack y\in A\mid x\in A\rbrack\le\alpha^{(1-\rho)/(1+\rho)}
$$

증명의 요지. $T_\rho=T_{\sqrt\rho}T_{\sqrt\rho}$ 이고 $T_{\sqrt\rho}$ 가 대칭이므로 $\Pr\lbrack x\in A,\ y\in A\rbrack=\langle 1_A,T_\rho 1_A\rangle=\Vert T_{\sqrt\rho}1_A\Vert_2^2$ 다. 위의 $(1+\rho,2)$ 꼴로 이 값은 $\Vert 1_A\Vert_{1+\rho}^2=\alpha^{2/(1+\rho)}$ 이하이고, $\alpha$ 로 나눈다.

직관 절의 곱에 대응하는 집합, 곧 좌표 $k$ 개가 $1$ 인 점의 집합은 $\alpha=2^{-k}$ 이고 실제 값은 $(\frac{1+\rho}{2})^k$ 다. $\rho=1/2$ 이면 실제 값이 $(3/4)^k\approx 2^{-0.415k}$ 이고 상한은 $2^{-k/3}$ 이다. 확률이 작은 집합에서 출발하면 잡음을 섞은 뒤 대부분 그 집합 밖으로 나간다.

## 로그 Sobolev 부등식과의 동치

$t\ge 0$ 에 대해 $\rho=e^{-t}$ 로 두면 $T_{e^{-t}}$ 는 $t$ 에 대한 반군이다. 다음 두 진술은 동치다. 이것이 **Gross 정리(Gross's theorem)** 다[^4].

- $1\lt p\lt q$ 이고 $q-1\le e^{2t}(p-1)$ 이면 $\Vert T_{e^{-t}}f\Vert_q\le\Vert f\Vert_p$ 다.
- 모든 $f$ 에서 $\mathrm{Ent}(f^2)\le 2\sum_S\vert S\vert\thinspace\hat f(S)^2$ 다.

둘째 진술은 [로그 Sobolev 부등식](log-sobolev-inequality.md)의 두 점 공간 판본을 텐서화한 것이다. 오른쪽은 좌표마다 $\bigl(f(x)-f(x^{\oplus i})\bigr)^2/4$ 의 평균을 더한 값과 같다. 첫째에서 둘째로 가는 증명은 $p=2$, $q(t)=1+e^{2t}$ 로 두고 $\Vert T_{e^{-t}}f\Vert_{q(t)}\le\Vert f\Vert_2$ 의 양변을 $t=0$ 에서 미분하는 것이다. 그 미분에서 엔트로피와 $\sum_S\vert S\vert\hat f(S)^2$ 이 나타난다.

## Gauss 판본

$\mathbb R^n$ 의 표준 정규분포 $\gamma_n$ 위에서 [Ornstein–Uhlenbeck 과정](ornstein-uhlenbeck-process.md)의 반군 $P_tf(x)=\mathbb E\thinspace f(e^{-t}x+\sqrt{1-e^{-2t}}\thinspace Z)$ 는 $q-1\le e^{2t}(p-1)$ 이면 $\Vert P_tf\Vert\_{L^q(\gamma_n)}\le\Vert f\Vert\_{L^p(\gamma_n)}$ 를 만족한다. 이것이 **Nelson 정리(Nelson's theorem)** 다[^5]. 초입방체 판본의 좌표를 $m$ 개씩 묶어 그 합을 $\sqrt m$ 으로 나누고 $m\to\infty$ 로 보내면 [중심극한정리](central-limit-theorem.md)로 이 판본이 나온다. 같은 조건의 $\rho=e^{-t}$ 가 쓰이므로 상수는 초입방체와 같다.

# 활용

- [Kahn–Kalai–Linial 정리](kkl-theorem.md). 좌표 방향의 미분 $D_if$ 는 값이 $0$ 이 아닐 확률이 영향력 $\mathrm{Inf}\_i\lbrack f\rbrack$ 다. $(1+\rho^2,2)$ 꼴을 $D_if$ 에 쓰면 영향력이 작은 좌표의 미분은 무게가 높은 준위에 몰려야 한다는 부등식이 나오고, 이것으로 어떤 좌표의 영향력이 $\Omega(\log n/n)$ 이상임을 보인다.
- [다항식의 불변 원리](invariance-principle-polynomials.md). Lindeberg 치환의 3차 나머지항 $\mathbb E\vert S_i\vert^3$ 을 $(\mathbb E S_i^2)^{3/2}$ 의 $2^{O(d)}$ 배로 누르는 데 저차 다항식의 모멘트 비교를 쓴다.
- [유일게임 추측과 2-to-2 정리](unique-games.md). 유일게임 추측에서 최대 절단(maximum cut) 문제의 근사 불가능성을 얻는 환원은 Majority is Stablest 정리를 쓰고, 그 정리의 증명이 불변 원리를 거쳐 초축약성을 쓴다.
- [로그 Sobolev 부등식](log-sobolev-inequality.md)의 Gauss 판본은 Gross 정리로 Nelson 정리와 동치다.

[^1]: Aline Bonami, "Étude des coefficients de Fourier des fonctions de Lᵖ(G)", *Annales de l'Institut Fourier* 20 (1970), 335–402.
[^2]: William Beckner, "Inequalities in Fourier analysis", *Annals of Mathematics* 102 (1975), 159–182.
[^3]: Ryan O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press, 2014, 9 장과 10 장. Bonami 보조정리, 저차 다항식의 꼬리, 작은 집합 확장 정리가 9 장에 있다.
[^4]: Leonard Gross, "Logarithmic Sobolev inequalities", *American Journal of Mathematics* 97 (1975), 1061–1083.
[^5]: Edward Nelson, "The free Markoff field", *Journal of Functional Analysis* 12 (1973), 211–227.

# 연관 문서

## 선수지식

- [부울 함수의 Fourier 해석](boolean-fourier.md)
- [로그 Sobolev 부등식](log-sobolev-inequality.md)

## 더 알아보기

- [Kahn–Kalai–Linial 정리](kkl-theorem.md)
- [다항식의 불변 원리](invariance-principle-polynomials.md)

#combinatorics #probability #analysis #complexity
