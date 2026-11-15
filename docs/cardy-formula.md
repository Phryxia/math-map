# Cardy 공식

# 개요

**Cardy 공식(Cardy's formula)** 은 평면 영역을 작은 육각형 칸으로 덮고 칸마다 동전을 던져 검게 또는 희게 칠할 때, 경계의 두 호를 검은 칸의 경로로 이을 확률이 칸이 작아지는 극한에서 얼마인지를 주는 공식이다. 정사각형에서 왼쪽 변과 오른쪽 변을 이을 확률은 대칭으로 $1/2$ 이지만, 가로가 세로의 두 배인 직사각형에서는 대칭으로 값을 구할 수 없다. 이 공식은 영역을 등각사상으로 정삼각형에 옮기면 그 확률이 한 변 위의 길이의 비가 된다는 것으로 답한다.

# 직관

육각형 칸으로 덮은 정사각형에서 칸마다 확률 $1/2$ 로 검게 칠한다. 왼쪽 변과 오른쪽 변을 잇는 검은 경로가 없으면, 그 경로를 막는 흰 칸들이 위 변과 아래 변을 잇는다. 육각형은 이웃한 세 칸이 한 점에서 만나므로, 검은 경로와 흰 경로는 서로 엇갈려 지나가지 못한다. 그래서 "왼쪽과 오른쪽을 검게 잇는다" 와 "위와 아래를 희게 잇는다" 가운데 정확히 하나가 일어난다.

정사각형을 $90^\circ$ 돌리고 색을 바꾸면 둘째 사건이 첫째 사건이 되고, 확률 $1/2$ 의 색칠은 색을 바꾸어도 분포가 같다. 두 사건의 확률이 같고 합이 $1$ 이므로 각각 $1/2$ 이다.

가로가 세로의 두 배인 직사각형에서는 왼쪽과 오른쪽이 멀어지므로 확률이 $1/2$ 보다 작아야 하지만, 돌리면 다른 직사각형이 되어 같은 논법이 통하지 않는다. J. Cardy 는 칸이 작아지는 극한의 확률이 영역의 등각사상으로 바뀌지 않는다고 놓고 그 값을 계산했다[^1].

# 정의

$\Omega$ 가 Jordan 곡선으로 둘러싸인 평면 영역이고 $a,b,c,d$ 가 경계 위에 반시계 방향으로 놓인 네 점이라 하자. 지름이 $\delta$ 인 육각형 칸으로 평면을 덮고 칸마다 서로 독립으로 확률 $1/2$ 로 검게 칠한다. $\Omega$ 안의 검은 칸만 지나 호 $\lbrack a,b\rbrack$ 와 호 $\lbrack c,d\rbrack$ 를 잇는 경로가 있을 확률을 $P\_\delta(\Omega;a,b,c,d)$ 라 한다. 이것은 [침투](percolation.md)의 삼각 격자 점 침투(site percolation)를 임계 확률 $1/2$ 에서 본 것이다.

상반평면의 실수축 위 네 점 $z_1\lt z_2\lt z_3\lt z_4$ 의 교차비를 다음으로 둔다.

$$
\eta=\frac{(z_2-z_1)(z_4-z_3)}{(z_3-z_1)(z_4-z_2)}
$$

$\eta$ 는 $0$ 과 $1$ 사이이고, 상반평면의 Möbius 변환으로 네 점을 옮겨도 바뀌지 않는다. 호 $\lbrack z_1,z_2\rbrack$ 가 짧아지면 $\eta\to 0$ 이다.

# 성질

## Smirnov 정리

$\delta\to 0$ 에서 $P\_\delta(\Omega;a,b,c,d)$ 는 극한 $P(\Omega;a,b,c,d)$ 로 수렴한다. 극한은 등각사상으로 바뀌지 않는다. 곧 $\varphi$ 가 $\Omega$ 를 $\Omega'$ 으로 보내는 등각사상이면 다음이 성립한다.

$$
P(\Omega;a,b,c,d)=P(\Omega';\varphi(a),\varphi(b),\varphi(c),\varphi(d))
$$

[Riemann 사상정리](riemann-mapping-theorem.md)로 $\Omega$ 를 상반평면으로 보내 $a,b,c,d$ 가 $z_1,\dots,z_4$ 로 가면 다음이 성립한다[^2].

$$
P=\frac{\int_0^\eta t^{-2/3}(1-t)^{-2/3}\thinspace dt}{\int_0^1t^{-2/3}(1-t)^{-2/3}\thinspace dt}
$$

분모는 $\Gamma(1/3)^2/\Gamma(2/3)$ 다([감마 함수](gamma-function.md)). 분자를 초기하급수로 적으면 Cardy 가 낸 꼴이 된다.

$$
P=\frac{3\thinspace\Gamma(2/3)}{\Gamma(1/3)^2}\thinspace\eta^{1/3}{}\_2F\_1\left(\frac13,\frac23;\frac43;\eta\right)
$$

정사각형의 네 꼭짓점은 대칭에서 $\eta=1/2$ 로 가고, 피적분함수가 $t$ 와 $1-t$ 를 바꾸어도 같으므로 $P=1/2$ 다. 직관 절의 값과 같다.

## 정삼각형의 꼴

$F(z)=\int_0^zt^{-2/3}(1-t)^{-2/3}\thinspace dt$ 는 상반평면을 세 꼭짓점이 $F(0)$, $F(1)$, $F(\infty)$ 인 정삼각형으로 보내는 등각사상이다. 실수축에서 지수 $-2/3$ 이 붙은 점마다 경계가 $\pi/3$ 만큼 꺾인다.

네 점을 Möbius 변환으로 $0,\eta,1,\infty$ 로 옮기고 $F$ 를 쓰면, 호 $\lbrack 0,\eta\rbrack$ 는 변 $F(0)F(1)$ 위의 선분 $F(0)F(\eta)$ 로, 호 $\lbrack 1,\infty\rbrack$ 는 변 $F(1)F(\infty)$ 로 간다. 위 공식에서 교차 확률은 다음과 같다.

$$
P=\frac{\vert F(\eta)-F(0)\vert}{\vert F(1)-F(0)\vert}
$$

정삼각형 $ABC$ 에서 변 $AB$ 위의 점 $X$ 를 잡으면, 변 $BC$ 와 선분 $AX$ 를 검은 경로로 잇는 확률이 $\vert AX\vert/\vert AB\vert$ 다. L. Carleson 이 이 꼴을 찾았다.

## 증명의 요지

S. Smirnov 는 정삼각형의 꼴을 직접 증명한다. 영역 안의 점 $z$ 마다 세 함수를 둔다. $h\_A(z)$ 는 $z$ 를 맞은편 변 $BC$ 와 떼어 놓는 검은 경로가 변 $AB$ 와 $AC$ 사이에 있을 확률이고, $h\_B$, $h\_C$ 도 같다.

육각형 칸에서 이 세 확률 사이에 이산 Cauchy–Riemann 관계가 성립한다. 그래서 $\tau=e^{2\pi i/3}$ 일 때 $h\_A+\tau h\_B+\tau^2h\_C$ 의 극한이 정칙함수다. 경계값에서 이 함수가 영역을 정삼각형으로 보내는 등각사상이 되고, 경계 위의 점에서 세 함수의 값이 교차 확률이다[^2].

## 짧은 호의 지수

$\eta\to 0$ 에서 분자가 $3\eta^{1/3}$ 과 같은 크기이므로 $P$ 는 $\eta^{1/3}$ 에 비례해 $0$ 으로 간다. 경계의 짧은 호에서 멀리까지 검은 경로가 뻗어 나갈 확률은 호의 길이의 $1/3$ 제곱에 비례한다.

# 활용

- [Schramm–Loewner 진화](schramm-loewner-evolution.md)(Schramm–Loewner evolution, SLE). 임계 침투에서 검은 칸과 흰 칸의 경계를 따라가는 탐색 경로가 $\kappa=6$ 인 SLE 로 수렴한다는 정리의 증명에 Cardy 공식의 등각 불변성을 쓴다. 역으로 $\mathrm{SLE}\_6$ 이 정삼각형의 한 변에 처음 닿는 점의 분포가 균등하다는 계산에서 Cardy 공식이 다시 나온다.
- 임계 지수. Smirnov 의 수렴 정리와 SLE 의 계산을 함께 써서 임계 침투의 한 팔 지수 $5/48$ 같은 값이 삼각 격자에서 증명되었다[^3].
- 등각장론. Cardy 는 경계 등각장론(boundary conformal field theory)의 경계 조건을 바꾸는 연산자로 이 공식을 유도했다.

[^1]: J. L. Cardy, "Critical percolation in finite geometries", Journal of Physics A 25 (1992).
[^2]: S. Smirnov, "Critical percolation in the plane: conformal invariance, Cardy's formula, scaling limits", Comptes Rendus de l'Académie des Sciences 333 (2001).
[^3]: S. Smirnov, W. Werner, "Critical exponents for two-dimensional percolation", Mathematical Research Letters 8 (2001).

# 연관 문서

## 선수지식

- [침투](percolation.md)
- [Riemann 사상정리](riemann-mapping-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #complex_analysis #combinatorics
