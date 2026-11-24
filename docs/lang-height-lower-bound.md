# Lang 의 높이 하한 추측

# 개요

**Lang 의 높이 하한 추측(Lang's height lower bound conjecture)** 은 타원곡선의 유리점 가운데 비틀림점이 아닌 것은 곡선의 계수가 클수록 산술적으로 복잡해야 한다는 추측이다. $y^2=x^3+99$ 의 점 $(1,10)$ 은 $x$ 좌표가 $1$ 이라 가장 단순해 보이지만, 두 배 하면 $x$ 좌표가 $-791/400$ 으로 커진다. 이 추측은 점의 복잡도를 [Néron–Tate 높이](canonical-height.md)로 재고, 그 값이 곡선의 판별식의 로그에 비례하는 값보다 작을 수 없다고 예측한다.

# 직관

$y^2=x^3+99$ 는 $x=1$ 에서 $y^2=100$ 이므로 점 $P=(1,10)$ 을 지난다. $x=p/q$ 를 기약분수로 쓴 $\log\max(\vert p\vert,\vert q\vert)$ 로 점의 복잡도를 재면 $P$ 에서 이 값은 $\log 1=0$ 이다.

$P$ 에서 접선의 기울기는 $3x^2/(2y)=3/20$ 이므로 $2P$ 의 $x$ 좌표는 $(3/20)^2-2=-791/400$ 이다. 이 분수는 기약이고 복잡도는 $\log 791\approx 6.67$ 이다. 두 배 하면 복잡도가 대략 네 배가 되므로, 이것을 $4$ 로 나눈 $1.67$ 이 $P$ 의 복잡도에 더 가까운 값이다. 처음 값 $0$ 은 $P$ 의 복잡도를 재지 못했다.

$0$ 과 $1.67$ 의 차이는 곡선의 계수 $99$ 에서 온다. 곡선의 판별식은 $-432\cdot 99^2$ 이고 그 절댓값의 로그는 $15.26$ 이다. $1.67$ 은 그 $1/9$ 쯤이다. Lang 은 비틀림점이 아닌 모든 점에서 이 비가 곡선에 관계없는 양수 이상이라고 추측했다.

# 정의

$E/\mathbb Q$ 를 타원곡선, $\Delta_E$ 를 최소 Weierstrass 방정식의 판별식, $\hat h$ 를 Néron–Tate 높이 문서의 정준 높이라 한다. Lang 의 높이 하한 추측은 다음 진술이다. 절대상수 $c\gt 0$ 이 있어 모든 $E/\mathbb Q$ 와 비틀림점이 아닌 모든 $P\in E(\mathbb Q)$ 에서 다음이 성립한다.[^1]

$$
\hat h(P)\ge c\log\vert\Delta_E\vert
$$

직관 절의 $y^2=x^3+99$ 는 $\Delta_E=-2^4\cdot 3^7\cdot 11^2$ 이고, 어느 소수 $p$ 에서도 $p^{12}$ 이 $\Delta_E$ 를 나누지 않으므로 이 방정식이 최소다. $2P$ 의 $x$ 좌표가 정수가 아니므로 Nagell–Lutz 정리(Nagell–Lutz theorem)에 따라 $P$ 는 비틀림점이 아니다.

수체 $K$ 위에서는 $\log\vert\Delta_E\vert$ 를 최소 판별 아이디얼의 노름의 로그로 바꾸고, 상수 $c$ 가 $K$ 에 의존하는 꼴로 진술한다. $\hat h$ 를 $\tfrac12$ 배로 정규화하는 문헌도 있으므로 $c$ 의 값은 정규화에 따라 달라진다.

# 성질

## 순진한 높이와의 차

$x$ 좌표로 잰 높이를 $h(P)$ 라 하면 $\hat h(P)-h(P)$ 의 절댓값은 $\log\vert\Delta_E\vert$ 와 $j$ 불변량의 높이의 상수배로 유계다. 그래서 계수가 작은 곡선에서는 $\hat h$ 가 $h$ 와 가깝고, 계수가 큰 곡선에서는 직관 절처럼 $h(P)=0$ 인 점의 $\hat h(P)$ 가 양수일 수 있다. 이 추측은 그 차가 $\hat h$ 를 $0$ 가까이로 끌어내리지 못한다는 진술이다.

## Hindry–Silverman 정리

[Szpiro 추측](szpiro-conjecture.md)의 Szpiro 비 $\log\vert\Delta_E\vert/\log N_E$ 가 $\sigma$ 이하인 곡선에서는 이 추측이 성립한다. 곧 $\sigma$ 에만 의존하는 $c(\sigma)\gt 0$ 이 있어 그런 $E$ 와 비틀림점이 아닌 $P$ 에서 $\hat h(P)\ge c(\sigma)\log\vert\Delta_E\vert$ 이다.[^2]

Szpiro 추측이 참이면 모든 곡선의 Szpiro 비가 한 상수 이하이므로 Lang 의 높이 하한 추측이 따라 나온다. Szpiro 추측은 [abc 추측](abc-conjecture.md)에서 나오므로 abc 추측도 이 추측을 함의한다.

## 정수 j 불변량

$j$ 불변량이 정수인 곡선에서는 이 추측이 성립한다. Silverman 이 증명했다.[^3] 정수 $j$ 를 갖는 곡선은 곱셈적 환원을 하는 소수가 없고, 증명은 각 자리의 Néron 국소 높이의 하한을 더하는 것이다.

## 알려진 열린 문제

$\mathbb Q$ 위의 모든 타원곡선에 대한 진술은 증명되지 않았다.[^4]

# 활용

- 조절자의 하한. $E(\mathbb Q)$ 를 비틀림으로 나눈 몫은 높이 쌍을 내적으로 하는 [격자](lattices.md)이고, 이 추측은 그 격자의 가장 짧은 벡터의 길이 제곱이 $c\log\vert\Delta_E\vert$ 이상이라는 진술이다. 순위가 $r$ 인 곡선에서 Minkowski 제2 정리(Minkowski's second theorem)에 따라 조절자 $\mathrm{Reg}\_E$ 는 연속 최소의 제곱을 곱한 값의 상수배 이상이므로, $(c\log\vert\Delta_E\vert)^r$ 의 상수배 이상이다.
- 정수점 개수. Hindry 와 Silverman 은 같은 논문에서 높이 하한으로 높이가 작은 점의 개수를 세어, 정수점의 개수를 순위와 Szpiro 비로 쓴 상계를 얻었다.[^2]

[^1]: S. Lang, *Elliptic Curves: Diophantine Analysis*, Grundlehren der mathematischen Wissenschaften 231, Springer, 1978.
[^2]: M. Hindry, J. Silverman, *The canonical height and integral points on elliptic curves*, Invent. Math. **93** (1988), 419–450.
[^3]: J. H. Silverman, *Lower bound for the canonical height on elliptic curves*, Duke Math. J. **48** (1981), 633–648.
[^4]: J. H. Silverman, *The Arithmetic of Elliptic Curves*, 2nd ed., Springer, 2009, Section VIII.9.

# 연관 문서

## 선수지식

- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)
- [Szpiro 추측](szpiro-conjecture.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra
