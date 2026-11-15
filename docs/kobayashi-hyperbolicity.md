# Kobayashi 쌍곡성

# 개요

**Kobayashi 쌍곡성(Kobayashi hyperbolicity)** 은 복소 영역이나 복소다양체 위에, 정칙함수가 늘리지 않는 거리를 원판의 쌍곡 거리로부터 만들고, 그 거리가 서로 다른 두 점을 실제로 떼어 놓는지를 보는 성질이다. 원판에서는 정칙함수가 쌍곡 거리를 줄이지만, 평면 전체에서는 반지름이 아무리 큰 원판도 들어가므로 같은 방법으로 만든 거리가 $0$ 이 된다. 이 거리가 참거리인 공간에는 평면 전체에서 정의된 상수가 아닌 정칙사상이 들어갈 수 없으므로, 쌍곡성은 그런 사상이 있는지를 거리 하나로 판정하는 방법이 된다.

# 직관

[Schwarz–Pick 보조정리](schwarz-pick-lemma.md)는 원판 $\mathbb D$ 를 자기 안으로 보내는 정칙함수가 쌍곡 거리 $d$ 를 늘리지 않는다고 한다. 다른 영역 $X$ 의 두 점 $p,q$ 사이에도, 원판에서 $X$ 로 가는 정칙사상 $\phi$ 와 $\phi(a)=p$, $\phi(b)=q$ 인 원판의 두 점을 골라 $d(a,b)$ 를 재고, 그 가운데 가장 작은 값으로 거리를 줄 수 있다.

$X=\mathbb C$ 에서 $p=0$, $q=1$ 이라 하자. $\phi(z)=Rz$ 는 $0$ 을 $0$ 으로, $1/R$ 을 $1$ 로 보내므로 후보 값은 $d(0,1/R)=\log\bigl((R+1)/(R-1)\bigr)$ 이다. $R$ 을 키우면 이 값은 $0$ 으로 가고, 평면의 두 점 사이의 이 거리는 $0$ 이다.

$X$ 가 원판이면 같은 방법으로 만든 거리가 쌍곡 거리 그대로다. 두 경우의 차이는 $X$ 안에 큰 원판의 상이 들어가는지에 있다.

# 정의

복소다양체 $X$ 의 두 점 $p,q$ 에 대해 다음을 생각한다. 점 $p=x_0,x_1,\dots,x_m=q$ 와 정칙사상 $\phi_i:\mathbb D\to X$, 원판의 점 $a_i,b_i$ 가 $\phi_i(a_i)=x_{i-1}$, $\phi_i(b_i)=x_i$ 를 만족한다. 이런 사슬 전체에 대해 $\sum_i d(a_i,b_i)$ 의 하한을 $d_X(p,q)$ 라 하고, 이것을 **Kobayashi 의사거리(Kobayashi pseudo-distance)** 라 한다. 사슬을 쓰는 것은 삼각부등식을 얻기 위해서다.

$d_X$ 가 참거리, 곧 $p\ne q$ 이면 $d_X(p,q)\gt 0$ 일 때 $X$ 를 **Kobayashi 쌍곡적(Kobayashi hyperbolic)** 이라 한다. 직관 절에서 $d_{\mathbb D}$ 는 쌍곡 거리이고 $d_{\mathbb C}=0$ 이므로, 원판은 쌍곡적이고 평면은 쌍곡적이 아니다.

# 성질

## 거리 축소

정칙사상 $f:X\to Y$ 는 $d_Y(f(p),f(q))\le d_X(p,q)$ 를 만족한다. $X$ 의 사슬을 $f$ 로 옮기면 $Y$ 의 사슬이 되므로 하한이 커지지 않는다. $X=Y=\mathbb D$ 이면 Schwarz–Pick 보조정리이고, 쌍곡 거리는 이 성질을 가진 거리 가운데 원판에서 가장 큰 것이다.

## 평면에서 오는 사상

$X$ 가 쌍곡적이면 $\mathbb C$ 에서 $X$ 로 가는 정칙사상 $f$ 는 상수다. 거리 축소에서 $d_X(f(p),f(q))\le d_{\mathbb C}(p,q)=0$ 이므로 $f(p)=f(q)$ 다. 원판에서 [Liouville 정리](liouville-theorem.md)가 이 경우다.

## 두 점을 뺀 평면

$\mathbb C\setminus\lbrace 0,1\rbrace$ 은 쌍곡적이다. 이 영역의 보편 덮개가 원판이고, 덮개 사상을 따라 쌍곡 거리를 내려 보낸 거리가 Kobayashi 거리와 같다. 앞 절과 합치면 두 값을 갖지 않는 정칙함수 $\mathbb C\to\mathbb C$ 는 상수이고, 이것이 [Picard 정리](picard-theorems.md)의 작은 정리다.

## Brody 정리

$X$ 가 콤팩트 복소다양체이면, $X$ 가 쌍곡적인 것은 상수가 아닌 정칙사상 $\mathbb C\to X$ 가 없는 것과 동치다.[^1] 이것이 **Brody 정리(Brody's theorem)** 다. 콤팩트가 아니면 동치가 깨지는 예가 있다.

# 활용

- 고차원 Picard 정리. 복소 사영공간 $\mathbb P^n$ 에서 일반 위치의 초평면 $2n+1$ 개를 뺀 영역은 쌍곡적이고, 그래서 그 영역으로 가는 평면의 정칙사상은 상수다.
- 대수다양체의 유리점. Lang 은 쌍곡적인 사영다양체가 수체 위에서 유리점을 유한개만 갖는다고 추측했다. 곡선에서는 종수 $2$ 이상인 곡선이 쌍곡적이고, 유리점이 유한개라는 것이 [Faltings 정리](faltings-theorem.md)다.
- Kobayashi 추측(Kobayashi conjecture). $\mathbb P^n$ 의 차수가 충분히 큰 일반 초곡면은 쌍곡적이라는 추측이다.

[^1]: R. Brody, "Compact manifolds and hyperbolicity", Transactions of the American Mathematical Society 235 (1978).

# 연관 문서

## 선수지식

- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #differential_geometry #analysis
