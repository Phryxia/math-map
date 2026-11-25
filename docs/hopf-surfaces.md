# Hopf 곡면

# 개요

**Hopf 곡면(Hopf surface)** 은 원점을 뺀 $\mathbb C^2$ 를 $z\mapsto 2z$ 같은 축소 사상이 생성하는 군으로 나눈 콤팩트 복소곡면이다. 콤팩트 복소곡면이면 사영공간에 들어가는지, Kähler 계량을 갖는지를 물을 수 있다.

Hopf 곡면은 첫째 Betti 수가 $1$ 로 홀수여서 Kähler 계량을 갖지 않는다. 그래서 콤팩트 복소다양체와 사영 대수다양체가 다르다는 것을 보이는 가장 단순한 예가 된다.

# 직관

$W=\mathbb C^2\setminus\lbrace 0\rbrace$ 에서 $g(z)=2z$ 를 생각한다. $g$ 의 거듭제곱 $g^n$ $(n\in\mathbb Z)$ 은 고정점이 없고, 점 $z$ 의 궤도 $\lbrace 2^nz\rbrace$ 는 $W$ 안에서 띄엄띄엄 놓인다. 몫 $X=W/\langle g\rangle$ 은 [덮개공간](covering-spaces.md)의 몫이므로 매끄러운 복소곡면이다.

$z$ 를 크기와 방향으로 나누면 $z=r\cdot u$ $(r\gt 0,\ \lvert u\rvert=1)$ 이고 $g$ 는 $r$ 만 두 배로 한다. $\log\_2 r$ 을 정수로 나눈 나머지가 원 $S^1$ 의 점이고 $u$ 는 $3$ 차원 구면 $S^3$ 의 점이므로, $X$ 는 $S^1\times S^3$ 과 미분동형이다. 그래서 $b\_1(X)=1$, $b\_2(X)=0$ 이다.

[Kähler 다양체](kahler-manifolds.md)는 Hodge 분해 때문에 홀수 차 Betti 수가 짝수여야 한다. $b\_1=1$ 이므로 $X$ 는 Kähler 계량을 갖지 않는다.

# 정의

$W=\mathbb C^2\setminus\lbrace 0\rbrace$ 위의 정칙 자기동형 $g$ 가 원점을 끌개로 갖는 축소 사상, 곧 $g^n(z)\to 0$ $(n\to\infty)$ 이 모든 $z$ 에서 성립하는 사상이면 $W/\langle g\rangle$ 을 **1차 Hopf 곡면(primary Hopf surface)** 이라 한다. 보편 덮개가 $W$ 인 콤팩트 복소곡면을 **Hopf 곡면** 이라 하고, 이것은 1차 Hopf 곡면의 유한 몫이다[^1].

직관 절의 곡면은 $g(z)=2z$ 인 1차 Hopf 곡면이다. $g(z\_1,z\_2)=(\alpha z\_1,\beta z\_2)$ $(0\lt\lvert\alpha\rvert,\lvert\beta\rvert\lt 1)$ 도 같은 꼴이고, Kodaira 는 1차 Hopf 곡면의 $g$ 를 대각형과 $(\alpha^m z\_1+\lambda z\_2^m,\thinspace\alpha z\_2)$ $(\lambda\ne 0)$ 꼴의 둘로 정규화했다[^1].

# 성질

## 위상

1차 Hopf 곡면은 모두 $S^1\times S^3$ 과 미분동형이고 기본군은 $\mathbb Z$ 다. Euler 표수는 $0$ 이고 부호수도 $0$ 이다.

## Hodge 수

$g(z)=2z$ 인 경우 정칙 $1$ 형식은 없고 $h^{1,0}=0$ 이지만 $h^{0,1}=1$ 이다. $h^{1,0}=h^{0,1}$ 이 성립하지 않으므로 Hodge 대칭이 깨지고, $b\_1=h^{1,0}+h^{0,1}$ 는 그대로 성립한다. 다중표준다발의 단면이 없어 [Kodaira 차원](kodaira-dimension.md)은 $-\infty$ 다.

## 타원 올 구조

$g(z)=2z$ 이면 $(z\_1,z\_2)\mapsto(z\_1:z\_2)$ 가 $X$ 에서 사영직선으로 내려간다. 올은 원점을 지나는 복소직선에서 원점을 뺀 $\mathbb C^\ast$ 를 $w\mapsto 2w$ 로 나눈 것이고, 지수사상으로 $\mathbb C/(2\pi i\mathbb Z+\log 2\thinspace\mathbb Z)$ 와 같은 [타원곡선](elliptic-curves.md)이다. 모든 올이 같은 타원곡선이지만 $X$ 는 곱 곡면이 아니고, $b\_2=0$ 이라 올의 류가 코호몰로지에서 $0$ 이다.

## 사영 다양체가 아님

사영 다양체는 Kähler 이므로 Hopf 곡면은 사영 다양체가 아니다. 사영 다양체의 초평면 단면은 자기교차수가 양인 곡선을 주지만, $b\_2=0$ 인 Hopf 곡면에서는 모든 곡선의 자기교차수가 $0$ 이다.

# 활용

- Kähler 조건의 검사. Kähler 다양체 문서의 Kähler 가 아닌 예가 Hopf 곡면이고, $b\_1$ 의 홀짝이 첫 검사다.
- 곡면의 분류. Kodaira 분류에서 $b\_1=1$ 인 콤팩트 복소곡면을 class VII 라 하고, Hopf 곡면이 그 기본 예다. 콤팩트 복소곡면이 Kähler 일 필요충분조건이 $b\_1$ 이 짝수인 것이라는 정리가 있다[^2].
- 복소구조의 존재. $S^1\times S^3$ 처럼 $b\_2=0$ 인 $4$ 차원 다양체도 복소구조를 가질 수 있다. [Kodaira 매장 정리](kodaira-embedding-theorem.md)가 요구하는 정수 Kähler 류가 없는 대표적인 경우다.

[^1]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter V, Section 18.

[^2]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter IV, Theorem 3.1.

# 연관 문서

## 선수지식

- [Kähler 다양체](kahler-manifolds.md)
- [덮개공간](covering-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #differential_geometry #topology
