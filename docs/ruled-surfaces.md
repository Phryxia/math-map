# 선직곡면

# 개요

**선직곡면(ruled surface)** 은 곡선 위의 점마다 사영직선이 하나씩 올로 붙은 곡면이다. 타원곡선 $C$ 와 사영직선의 곱 $C\times\mathbb P^1$ 이 가장 단순한 예이고, 사영직선을 비틀어 붙이면 곱과 다른 곡면이 생긴다.

$C$ 가 같을 때 이런 곡면이 몇 가지 있는지, 곱과 어떻게 구별되는지를 물을 수 있다. 선직곡면은 $C$ 위의 계수 $2$ 벡터다발 하나로 적히고, 가장 음인 단면의 자기교차수 $-e$ 와 $C$ 의 종수가 그 곡면의 교차수와 표준류를 정한다.

# 직관

$C$ 를 타원곡선이라 한다. 곱 $C\times\mathbb P^1$ 에서 $C\times\lbrace a\rbrace$ 꼴의 곡선은 올마다 한 점에서 만나는 단면이고, 서로 다른 $a$ 의 단면은 만나지 않으므로 자기교차수가 $0$ 이다.

$C$ 의 한 점 $p$ 에 대해 $C$ 위의 선다발 $\mathcal O(-p)$ 와 자명한 선다발의 합 $\mathcal O\oplus\mathcal O(-p)$ 을 만들고, 각 올의 $2$ 차원 벡터공간에서 원점을 지나는 직선들의 모임을 올로 삼는다. 이 곡면 $S$ 도 $C$ 위의 사영직선 다발이다. 그런데 첫째 성분 쪽 직선들이 이루는 단면 $C\_0$ 은 자기교차수가 $-1$ 이다.

자기교차수가 음인 곡선이 한쪽에만 있으므로 $S$ 는 곱과 동형이 아니다. $C\_0$ 은 $C$ 와 동형이라 사영직선이 아니므로, [부풀림](blow-ups.md)의 (−1) 곡선처럼 한 점으로 수축되지도 않는다.

# 정의

매끄러운 사영곡선 $C$ 위의 **선직곡면** 은 매끄러운 사영곡면 $S$ 와 사상 $\pi:S\to C$ 의 쌍으로, 모든 올이 사영직선과 동형인 것이다. 이렇게 모든 올이 사영직선인 것을 강조할 때는 기하적 선직곡면(geometrically ruled surface)이라 하고, $C\times\mathbb P^1$ 과 쌍유리 동치인 곡면 전체를 선직곡면이라 부르기도 한다.

## 벡터다발의 사영화

$C$ 위의 계수 $2$ [벡터다발](vector-bundles.md) $\mathcal E$ 에 대해, 각 올에서 원점을 지나는 직선의 모임을 모은 곡면을 $\mathbb P(\mathcal E)$ 라 쓴다. 직관 절의 두 곡면은 $\mathbb P(\mathcal O\oplus\mathcal O)$ 와 $\mathbb P(\mathcal O\oplus\mathcal O(-p))$ 다.

정리. 모든 선직곡면은 어떤 계수 $2$ 벡터다발의 사영화이고, $\mathbb P(\mathcal E)\cong\mathbb P(\mathcal E')$ 일 필요충분조건은 어떤 선다발 $\mathcal L$ 이 있어 $\mathcal E'\cong\mathcal E\otimes\mathcal L$ 인 것이다[^1].

## 불변량 e

$\mathcal E$ 에 선다발을 곱해, $\mathcal E$ 는 $0$ 이 아닌 단면을 갖고 차수가 음인 모든 $\mathcal L$ 에 대해 $\mathcal E\otimes\mathcal L$ 은 단면을 갖지 않도록 맞출 수 있다. 이렇게 맞춘 $\mathcal E$ 의 행렬식 다발의 차수를 $-e$ 라 한다[^1]. $\mathcal E$ 의 단면이 정하는 단면 곡선 $C\_0$ 은 다음을 만족한다.

$$
C_0^2=-e
$$

직관 절에서 곱은 $\mathcal E=\mathcal O\oplus\mathcal O$ 로 $e=0$ 이고, $S$ 는 $\mathcal E=\mathcal O\oplus\mathcal O(-p)$ 로 $e=1$ 이다.

# 성질

## Picard 군과 교차수

올의 류를 $f$ 라 하면 [Picard 군](picard-group.md)은 $\mathbb ZC\_0\oplus\pi^\ast\mathrm{Pic}(C)$ 이다. 교차수는 다음과 같다[^1].

$$
C_0^2=-e,\qquad C_0\cdot f=1,\qquad f^2=0
$$

## 표준류

$C$ 의 종수를 $g$ 라 하면 표준류는 수치적으로 다음과 같다[^1].

$$
K\equiv -2C_0+(2g-2-e)f
$$

[딸림 공식](adjunction-formula.md)으로 확인한다. 올 $f$ 는 종수 $0$ 이므로 $-2=f^2+K\cdot f=K\cdot f$ 이고, 위 식에서 $K\cdot f=-2$ 다. 단면 $C\_0$ 은 종수 $g$ 이므로 $2g-2=C\_0^2+K\cdot C\_0$ 이고, 위 식에서 $K\cdot C\_0=2e+2g-2-e=e+2g-2$ 라서 $C\_0^2+K\cdot C\_0=2g-2$ 가 맞다.

이 식에서 $K^2=8(1-g)$ 이다. $e$ 와 무관하다.

## 곡면의 불변량

$S$ 의 정칙 $1$ 형식은 $C$ 의 것을 당긴 것뿐이고 정칙 $2$ 형식은 없다. 그래서 $q=g$, $p_g=0$ 이고, $K\cdot f=-2\lt 0$ 이므로 모든 다중표준다발에 단면이 없어 [Kodaira 차원](kodaira-dimension.md)이 $-\infty$ 다.

위상적 Euler 표수는 올과 밑공간의 곱 $2\cdot(2-2g)=4-4g$ 다. [Noether 공식](noether-formula.md)으로 $\chi(\mathcal O_S)=(8-8g+4-4g)/12=1-g$ 이고, 이것은 $1-q+p_g$ 와 같다.

## e 의 범위

$\mathcal E$ 가 두 선다발의 합으로 쪼개지면 $e\ge 0$ 이고, $e$ 는 음이 아닌 정수 모두가 나온다. 쪼개지지 않으면 $e\ge -g$ 다(Nagata 정리, Nagata's theorem)[^1]. $C$ 가 사영직선이면 모든 계수 $2$ 다발이 쪼개지므로 선직곡면은 [Hirzebruch 곡면](hirzebruch-surfaces.md) $\mathbb F\_e$ 뿐이다.

## 기본 변환

올 위의 점 하나를 부풀리고 그 올의 고유 변환을 수축하면 같은 $C$ 위의 다른 선직곡면이 나오고, $e$ 가 $1$ 바뀐다. 같은 $C$ 위의 두 선직곡면은 이런 기본 변환(elementary transformation)을 유한 번 해서 서로 옮겨진다. 그래서 선직곡면은 모두 $C\times\mathbb P^1$ 과 쌍유리 동치다.

## 올 구조의 유일성

$g\ge 1$ 이면 사영직선에서 $C$ 로 가는 사상은 상수뿐이다. 그래서 $S$ 위의 모든 유리곡선은 올 안에 들어가고, 올 구조와 밑곡선 $C$ 가 $S$ 에서 하나로 정해진다. $g=0$ 이면 $\mathbb F\_0=\mathbb P^1\times\mathbb P^1$ 이 두 방향의 올 구조를 갖는다.

# 활용

- 곡면의 분류. Kodaira 차원이 $-\infty$ 인 극소 곡면은 사영평면이거나 선직곡면이다(Enriques 정리, Enriques' theorem)[^2]. [Castelnuovo 유리성 판정법](castelnuovo-rationality-criterion.md)은 $q=0$ 인 쪽을 유리곡면으로 가른다.
- 벡터다발의 모듈라이. 직관 절처럼 같은 $C$ 위의 선직곡면을 세는 일은 계수 $2$ 다발을 선다발 곱으로 묶어 세는 일이고, [벡터다발의 모듈라이 공간](moduli-of-vector-bundles.md)에서 정규화한 $\mathcal E$ 가 안정일 필요충분조건은 $e\lt 0$ 이다. 차수가 양인 부분 선다발이 없고 $\mathcal O\subset\mathcal E$ 가 차수 $0$ 이므로, 기울기 $-e/2$ 와 비교하면 이 조건이 나온다.

[^1]: R. Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977, Chapter V, Section 2.

[^2]: A. Beauville, *Complex Algebraic Surfaces*, 2nd ed., London Mathematical Society Student Texts 34, Cambridge University Press, 1996, Chapters III 과 VI.

# 연관 문서

## 선수지식

- [딸림 공식](adjunction-formula.md)
- [벡터다발](vector-bundles.md)

## 더 알아보기

- [Hirzebruch 곡면](hirzebruch-surfaces.md)
- [극소 모형 프로그램](minimal-model-program.md)

#algebra #complex_analysis #differential_geometry
