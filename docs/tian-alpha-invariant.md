# Tian α 불변량

# 개요

**Tian α 불변량(Tian's alpha invariant)** 은 [Fano 다양체](fano-varieties.md)의 반표준 인자가 얼마나 심하게 특이할 수 있는지를 수 하나로 잰 값이다. 사영직선의 반표준 인자는 점 두 개인데, 두 점이 한 점으로 겹친 인자가 가장 특이하고 그 정도가 $1/2$ 이라는 수로 적힌다.

[K-안정성](k-stability.md)을 판정하려면 퇴화나 인자를 무한히 많이 보아야 하지만, α 불변량이 차원으로 정한 문턱 $n/(n+1)$ 을 넘으면 그것만으로 [Kähler–Einstein 계량](kahler-einstein-metrics.md)이 존재한다.

# 직관

사영직선 $\mathbb P^1$ 의 반표준 인자 $-K$ 는 차수가 $2$ 다. 그 선형계의 인자는 점 두 개 $p+q$ 이고, $p=q$ 이면 $2p$ 다.

인자의 특이한 정도는 다음 적분으로 잰다. 점 $p$ 근처의 좌표를 $z$ 라 하고 $2p$ 를 $z^2=0$ 으로 쓰면, $c\gt 0$ 에 대해 $\vert z^2\vert^{-2c}$ 가 $p$ 근처에서 적분 가능한지 본다. 극좌표에서 $\int r^{-4c}\thinspace r\thinspace dr$ 이므로 $c\lt 1/2$ 일 때만 유한하다. $p\ne q$ 이면 각 점에서 $\vert z\vert^{-2c}$ 를 보므로 $c\lt 1$ 까지 유한하다.

그래서 가장 나쁜 인자 $2p$ 에서 적분이 깨지는 문턱 $1/2$ 이 사영직선의 α 불변량이다. 사영평면 $\mathbb P^2$ 에서는 반표준 인자 가운데 직선 하나를 세 번 겹친 $3L$ 이 가장 나쁘고, 같은 계산으로 문턱이 $1/3$ 이다.

Tian 의 판정은 이 값이 $n/(n+1)$ 보다 크면 Kähler–Einstein 계량이 있다는 것이다. 사영평면에서는 $1/3\lt 2/3$ 이라 판정이 아무것도 말하지 않지만, 사영평면에는 Fubini–Study 계량이 있다. 가장 나쁜 인자 하나만 보아서는 모자라서, 모든 인자를 평균해서 보는 δ 불변량이 그 차이를 메운다.

# 정의

## 로그 정준 문턱

매끄러운 다양체 $X$ 위의 유효 인자 $D$ 가 국소적으로 $f=0$ 으로 적힐 때, 모든 점 근처에서 $\vert f\vert^{-2c}$ 가 적분 가능한 $c\gt 0$ 의 상한을 $D$ 의 **로그 정준 문턱(log canonical threshold)** $\mathrm{lct}(X,D)$ 라 한다. 유리수 계수 인자 $D/m$ 에 대해서는 $\mathrm{lct}(X,D/m)=m\thinspace\mathrm{lct}(X,D)$ 다. 직관 절에서 $\mathrm{lct}(\mathbb P^1,2p)=1/2$ 이고 $\mathrm{lct}(\mathbb P^1,p+q)=1$ 이다.

## α 불변량

$n$ 차원 Fano 다양체 $X$ 의 α 불변량은 다음 값이다.

$$
\alpha(X)=\inf\_{m\ge 1}\thinspace\inf\_{D\in\vert -mK\_X\vert}\mathrm{lct}\Bigl(X,\frac1mD\Bigr)
$$

Tian 은 이 값을 Kähler 퍼텐셜 $\varphi$ 들에 대해 $\int\_Xe^{-\alpha(\varphi-\sup\varphi)}\omega^n$ 이 고르게 유계인 $\alpha$ 의 상한으로 정의했고, 두 정의가 같다는 것은 Demailly 가 보였다[^1][^2]. 직관 절에서 $\alpha(\mathbb P^1)=1/2$ 이고, $\vert -K\vert$ 의 인자 $3L$ 에서 $\alpha(\mathbb P^2)=1/3$ 이다. 일반적으로 $\alpha(\mathbb P^n)=1/(n+1)$ 이다.

## δ 불변량

K-안정성 문서의 소인자 $E$ 와 로그 불일치 $A\_X(E)$ 에 대해 다음 값을 둔다.

$$
S\_X(E)=\frac{1}{\mathrm{vol}(-K\_X)}\int\_0^\infty\mathrm{vol}(-K\_X-tE)\thinspace dt,\qquad\delta(X)=\inf\_E\frac{A\_X(E)}{S\_X(E)}
$$

$\delta(X)$ 를 **δ 불변량(delta invariant)** 또는 안정성 문턱(stability threshold)이라 한다[^3][^4]. $S\_X(E)$ 는 반표준 인자들이 $E$ 를 따라 갖는 중복도의 평균이다. 사영평면의 직선 $L$ 에서 다음이 나온다.

$$
S(L)=\frac19\int\_0^3(3-t)^2\thinspace dt=1,\qquad\frac{A(L)}{S(L)}=1
$$

# 성질

## Tian 의 판정

**정리(Tian, 1987).** $n$ 차원 Fano 다양체가 $\alpha(X)\gt n/(n+1)$ 을 만족하면 Kähler–Einstein 계량을 갖는다[^1].

증명은 Kähler–Einstein 방정식을 연속법으로 풀 때 퍼텐셜의 상한이 유계임을 보이는 것이다. α 불변량의 적분 부등식이 퍼텐셜의 지수 적분을 누르고, 문턱 $n/(n+1)$ 은 이 부등식을 에너지 범함수의 하계로 바꾸는 단계에서 나온다.

## 삼차곡면

**정리(Cheltsov, 2008).** 매끄러운 삼차곡면 $X$ 는 Eckardt 점(Eckardt point), 곧 직선 셋이 지나는 점이 있으면 $\alpha(X)=2/3$ 이고, 없으면 $\alpha(X)=3/4$ 이다[^5].

Eckardt 점에서 그 점의 접평면이 곡면을 자른 단면은 한 점을 지나는 직선 셋이고, 이 인자의 로그 정준 문턱이 $2/3$ 이다. 곡면에서 문턱 $n/(n+1)$ 은 $2/3$ 이므로, Eckardt 점이 없는 [삼차곡면](cubic-surfaces.md)은 Tian 의 판정으로 Kähler–Einstein 계량을 갖는다.

## α 와 δ 의 부등식

**정리(Blum–Jonsson).** $n$ 차원 Fano 다양체에서 다음이 성립한다[^4].

$$
\frac{n+1}{n}\thinspace\alpha(X)\le\delta(X)\le(n+1)\thinspace\alpha(X)
$$

또 $X$ 가 K-반안정인 것은 $\delta(X)\ge 1$ 과 동치이고, 고른 K-안정(uniformly K-stable)인 것은 $\delta(X)\gt 1$ 과 동치다. $\alpha\gt n/(n+1)$ 이면 왼쪽 부등식으로 $\delta\gt 1$ 이므로, Tian 의 판정은 이 정리와 고른 K-안정성에서 Kähler–Einstein 계량을 얻는 정리로 다시 증명된다.

사영평면은 $\alpha=1/3$, $\delta=1$ 로 오른쪽 부등식의 등호다. 한 점에서 부풀린 사영평면의 예외 곡선 $E$ 에서는 K-안정성 문서의 계산으로 $S(E)=(28/3)/8=7/6$ 이므로 $\delta\le 6/7\lt 1$ 이고 K-반안정이 아니다.

# 활용

- Kähler–Einstein 계량의 존재. 자기동형군이 유한하고 토릭이 아닌 Fano 다양체에서 α 불변량은 계산할 수 있는 몇 안 되는 충분조건이다. 군 $G$ 가 작용하면 $G$ 불변 인자만으로 정한 $\alpha\_G$ 로 같은 판정을 쓴다.
- 쌍유리 강성. 로그 정준 문턱은 특이한 반표준 인자의 존재를 막는 데 쓰여, Fano 다양체의 쌍유리 자기사상을 다루는 [극소 모형 프로그램](minimal-model-program.md)의 논증에도 나온다.
- K-모듈라이의 계산. δ 불변량은 족 안에서 하반연속이어서, K-반안정 Fano 다양체의 모듈라이 공간을 만드는 데 쓰인다.

[^1]: G. Tian, "On Kähler–Einstein metrics on certain Kähler manifolds with C₁(M) > 0", *Inventiones Mathematicae* 89 (1987), 225–246.
[^2]: I. Cheltsov, K. Shramov, "Log canonical thresholds of smooth Fano threefolds", *Russian Mathematical Surveys* 63 (2008), 859–958, J.-P. Demailly 의 부록 포함.
[^3]: K. Fujita, Y. Odaka, "On the K-stability of Fano varieties and anticanonical divisors", *Tohoku Mathematical Journal* 70 (2018), 511–521.
[^4]: H. Blum, M. Jonsson, "Thresholds, valuations, and K-stability", *Advances in Mathematics* 365 (2020), 107062.
[^5]: I. Cheltsov, "Log canonical thresholds of del Pezzo surfaces", *Geometric and Functional Analysis* 18 (2008), 1118–1144.

# 연관 문서

## 선수지식

- [K-안정성](k-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #algebra #complex_analysis
