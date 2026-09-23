# Jacobi 다양체

# 개요

종수 $g$ 인 콤팩트 [Riemann 곡면](riemann-surfaces.md) $X$ 의 Jacobi 다양체는 정칙 $1$ 형식의 쌍대공간을 주기 격자로 나눈 $g$ 차원 복소 토러스다. Abel–Jacobi 사상이 차수 $0$ 인 divisor 를 이 토러스의 점으로 보낸다.

Abel 정리는 그 점이 $0$ 인 것과 divisor 가 주 divisor 인 것이 동치라고 말한다. 따라서 Jacobi 다양체는 [Picard 군](picard-group.md)의 항등원 성분 $\mathrm{Pic}^0(X)$ 와 같다.

# 직관

원환면 $\mathbb C/\Lambda$ 에서 점 $p$ 에만 1차 영점을 갖고 점 $q$ 에만 1차 극점을 갖는 유리형 함수는 없다. 어떤 영점과 극점의 배치가 함수에서 오는지 판정하는 조건을 찾는다.

유리형 함수 $f$ 를 잡고 기본 평행사변형의 경계 $\partial P$ 에서 $z\thinspace df/f$ 를 적분한다. [유수 정리](residue-theorem.md)로

$$
\frac{1}{2\pi i}\oint\_{\partial P} z\thinspace \frac{df}{f} = \sum\_i n\_i p\_i
$$

이고 오른쪽은 영점과 극점의 위치에 차수를 곱해 더한 것이다. 왼쪽에서 마주 보는 두 변의 기여를 맞대면 $f$ 가 [주기함수](elliptic-functions.md)이므로 $df/f$ 가 같고 $z$ 만 주기 $\omega$ 만큼 어긋나, 남는 값은 격자 $\Lambda$ 의 원소다.

그러므로 배치 $\sum n\_i p\_i$ 를 $\mathbb C/\Lambda$ 의 한 점으로 읽으면 그 점이 $0$ 이어야 한다. $p-q$ 는 $p=q$ 일 때만 이 조건을 만족하므로 앞의 함수가 없다.

종수가 $g$ 이면 적분할 미분형식이 하나가 아니라 $g$ 개이고, 격자는 그 형식들을 곡면의 순환마다 적분한 주기가 만든다. 배치의 값이 사는 자리가 $g$ 차원 토러스다.

# 정의

## 주기 격자

$X$ 위의 정칙 $1$ 형식이 이루는 공간 $H^0(X,\Omega^1\_X)$ 는 차원이 $g$ 다. 그 쌍대공간을 $V$ 라 하면 적분

$$
H\_1(X,\mathbb Z) \to V, \qquad \gamma \mapsto \left(\omega \mapsto \oint\_\gamma \omega\right)
$$

가 단사이고 상 $\Lambda$ 는 계수 $2g$ 인 격자다. 이 격자의 생성원을 형식의 기저로 적은 $g \times 2g$ 행렬을 **주기 행렬**이라 한다.

## Jacobi 다양체

**Jacobi 다양체**는 몫 $J(X) = V/\Lambda$ 다.[^1] $g$ 차원 복소 토러스이고 덧셈으로 아벨군이다.

## Abel–Jacobi 사상

기준점 $x\_0$ 를 잡고

$$
\mathrm{AJ}(x) = \left(\omega \mapsto \int\_{x\_0}^{x}\omega\right) \bmod \Lambda
$$

로 둔다. 경로를 바꾸면 값이 $\Lambda$ 의 원소만큼 달라지므로 $J(X)$ 에서는 정해진다. divisor 로는 $\mathrm{AJ}(\sum n\_i p\_i) = \sum n\_i \mathrm{AJ}(p\_i)$ 로 넓히고, 차수가 $0$ 이면 이 값이 $x\_0$ 의 선택과 무관하다.

# 성질

## Abel 정리

**정리.** 차수 $0$ 인 divisor $D$ 가 주 divisor 일 필요충분조건은 $\mathrm{AJ}(D)=0$ 이다.

한 방향은 직관 절의 계산을 종수 $g$ 로 옮긴 것이다. $D = \mathrm{div}(f)$ 이면 $f$ 를 $\mathbb P^1$ 로 가는 사상으로 보고 $0$ 과 $\infty$ 를 잇는 경로를 당겨 올려 적분값이 주기가 됨을 본다. 반대 방향은 $\mathrm{AJ}(D)=0$ 에서 나오는 자료로 유리형 함수를 구성하는 것이고 Riemann 세타 함수를 쓴다. ∎

**따름정리.** $\mathrm{AJ}$ 가 군 동형 $\mathrm{Pic}^0(X) \cong J(X)$ 를 준다.

## Jacobi 역 정리

**정리.** 차수 $g$ 인 유효 divisor 를 보내는 사상 $\mathrm{Sym}^g X \to J(X)$ 는 전사다.

$J(X)$ 의 어느 점도 곡면 위의 점 $g$ 개로 표현된다. 차원이 양쪽 다 $g$ 이고 사상이 정칙이므로 상이 열려 있으며, $\mathrm{Sym}^g X$ 가 콤팩트라 상이 닫혀 있다. ∎

## 편극

주기 행렬은 Riemann 쌍선형 관계를 만족하고, 그 관계가 $J(X)$ 위에 주편극을 준다. 편극을 갖춘 복소 토러스는 사영공간에 매장되므로 $J(X)$ 는 아벨 다양체다. 편극의 세타 divisor 는 $\mathrm{Sym}^{g-1}X$ 의 상이다.

## Torelli 정리

**정리.** 편극을 갖춘 $J(X)$ 가 $X$ 를 동형을 무시하고 결정한다.

## 종수 1

$g=1$ 이면 $\mathrm{AJ}: X \to J(X)$ 가 동형이다. [타원곡선](elliptic-curves.md)이 자기 Jacobi 다양체와 같다는 것이 이 경우다.

# 활용

- [Riemann–Roch 정리](riemann-roch.md)에서 특수 divisor 를 다룬다. 세타 divisor 위의 점이 전역 단면을 여분으로 갖는 류에 대응하고, Riemann 특이점 정리가 그 여분을 세타 함수의 중복도로 준다.
- 곡선의 유리점을 센다. 수체 위의 곡선에서 $J(X)$ 의 유리점이 Mordell–Weil 정리로 유한생성이고, 계수가 $g$ 보다 작으면 Chabauty 방법이 곡선의 유리점을 유한 개로 묶는다.
- 세타 함수를 정의한다. 주기 행렬로 쓴 [세타 급수](theta-series.md)가 $J(X)$ 위의 단면이 되고, 적분가능계의 해를 이 함수로 적는다.
- 곡면의 모듈라이를 비교한다. Torelli 정리로 곡선의 모듈라이 공간이 주편극 아벨 다양체의 모듈라이 공간에 들어간다.

[^1]: Phillip Griffiths, Joseph Harris, *Principles of Algebraic Geometry*, Wiley (1978), 2장. 주기 격자, Abel 정리, Jacobi 역 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [Riemann 곡면과 균일화 정리](riemann-surfaces.md)
- [Picard 군](picard-group.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebraic_topology #number_theory
