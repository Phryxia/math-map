# 타원 곡면

# 개요

**타원 곡면(elliptic surface)** 은 곡선 위로 사상을 가져서 거의 모든 점 위의 올이 [타원곡선](elliptic-curves.md)인 곡면이다. 평면에서 두 삼차곡선 $F=0$, $G=0$ 을 잡고 $sF+tG=0$ 꼴의 곡선을 비율 $(s:t)$ 마다 하나씩 모으면, 평면이 삼차곡선들로 덮이고 그 가운데 몇 개는 꼬이거나 뾰족해진다.

타원 곡면은 이런 곡선 모임을 곡면 하나와 사상 하나로 적고, 특이한 올의 꼴과 개수로 곡면의 Euler 표수와 [Kodaira 차원](kodaira-dimension.md)을 계산한다.

# 직관

일반적인 두 평면 삼차곡선 $F=0$, $G=0$ 은 $9$ 점에서 만난다. 곡선 $sF+tG=0$ 은 모두 이 $9$ 점을 지나고, [Cayley–Bacharach 정리](cayley-bacharach-theorem.md)에 따라 그 가운데 $8$ 점을 지나는 삼차곡선은 모두 이 모임에 든다. 평면의 다른 점 $p$ 는 $sF(p)+tG(p)=0$ 이 정하는 비율 하나의 곡선에만 놓인다.

$9$ 점에서는 모든 곡선이 만나므로 비율이 정해지지 않는다. 그 $9$ 점을 부풀리면 사상 $p\mapsto(s:t)$ 가 곡면 $X$ 에서 사영직선 $\mathbb{CP}^1$ 로 가는 사상이 되고, 올은 곡선 $sF+tG=0$ 이다. 일반적인 올은 매끄러운 삼차곡선, 곧 원환면이다.

Euler 표수로 특이한 올의 개수를 센다. 사영평면의 Euler 표수는 $3$ 이고 한 점을 부풀릴 때마다 $1$ 씩 늘므로 $e(X)=12$ 다. 원환면의 Euler 표수는 $0$ 이므로 $12$ 는 모두 특이한 올에서 나온다. 일반적인 모임에서 특이한 올은 마디 하나를 가진 삼차곡선이고 그 Euler 표수가 $1$ 이므로, 그런 올이 $12$ 개다.

# 정의

매끄러운 콤팩트 복소곡면 $X$, 곡선 $C$, 전사 정칙사상 $f:X\to C$ 가 있어 일반적인 점 $c$ 위의 올 $f^{-1}(c)$ 가 종수 $1$ 의 연결된 매끄러운 곡선일 때, $f:X\to C$ 를 **타원 곡면** 이라 한다. 올 안에 자기교차수 $-1$ 인 사영직선이 없으면 **상대 극소(relatively minimal)** 라 한다. 직관 절의 $X\to\mathbb{CP}^1$ 은 상대 극소 타원 곡면이고, 이것을 **유리 타원 곡면(rational elliptic surface)** 이라 한다.

올 $F$ 가 어떤 곡선 $F'$ 의 $m$ 배 $(m\ge 2)$ 이면 $F$ 를 **중복 올(multiple fiber)** 이라 한다.

# 성질

## Kodaira 의 특이 올 분류

Kodaira 정리. 상대 극소 타원 곡면의 중복이 아닌 특이 올은 다음 가운데 하나다[^1].

| 종류 | 올의 모양 | Euler 표수 | 성분 수 |
| --- | --- | --- | --- |
| $\mathrm I_1$ | 마디 하나를 가진 유리곡선 | $1$ | $1$ |
| $\mathrm I_n$, $n\ge 2$ | 유리곡선 $n$ 개의 고리 | $n$ | $n$ |
| $\mathrm{II}$ | 첨점 하나를 가진 유리곡선 | $2$ | $1$ |
| $\mathrm{III}$ | 한 점에서 접하는 유리곡선 둘 | $3$ | $2$ |
| $\mathrm{IV}$ | 한 점을 지나는 유리곡선 셋 | $4$ | $3$ |
| $\mathrm I_n^\ast$, $n\ge 0$ | 유리곡선 $n+5$ 개 | $n+6$ | $n+5$ |
| $\mathrm{IV}^\ast$ | 유리곡선 $7$ 개 | $8$ | $7$ |
| $\mathrm{III}^\ast$ | 유리곡선 $8$ 개 | $9$ | $8$ |
| $\mathrm{II}^\ast$ | 유리곡선 $9$ 개 | $10$ | $9$ |

성분이 여럿인 올에서 성분마다 점을 찍고 만나는 성분끼리 이으면 확장 Dynkin 도형이 나온다. $\mathrm I_n$, $\mathrm I_n^\ast$, $\mathrm{IV}^\ast$, $\mathrm{III}^\ast$, $\mathrm{II}^\ast$ 는 차례로 $\tilde A\_{n-1}$, $\tilde D\_{n+4}$, $\tilde E\_6$, $\tilde E\_7$, $\tilde E\_8$ 이다. 직관 절의 $12$ 개 올은 $\mathrm I_1$ 이다.

## Euler 표수와 Noether 공식

매끄러운 올의 Euler 표수가 $0$ 이므로 곡면의 Euler 표수는 특이 올의 Euler 표수의 합이다.

$$
e(X)=\sum_{c\in C}e\bigl(f^{-1}(c)\bigr)
$$

상대 극소 타원 곡면은 $K_X^2=0$ 이므로 [Noether 공식](noether-formula.md)에서 $e(X)=12\chi(\mathcal O_X)$ 다. 직관 절의 곡면은 $\chi(\mathcal O_X)=1$, $e(X)=12$ 다.

## 표준다발 공식

Kodaira 표준다발 공식(Kodaira's canonical bundle formula). 상대 극소 타원 곡면 $f:X\to C$ 의 중복 올이 $m\_iF\_i$ 이면 다음이 성립한다. $L$ 은 $C$ 위의 차수 $\chi(\mathcal O_X)$ 인 선다발이다[^1].

$$
K_X=f^\ast(K_C\otimes L)\otimes\mathcal O_X\Bigl(\sum_i(m_i-1)F_i\Bigr)
$$

## Kodaira 차원

중복 올이 없고 $C$ 의 종수가 $g$ 이면 $K_X$ 는 차수 $2g-2+\chi(\mathcal O_X)$ 인 $C$ 위 선다발을 당긴 것이다. 그러므로 이 수가 음, $0$, 양에 따라 $\kappa(X)=-\infty,0,1$ 이다.

- $g=0$, $\chi=1$. 수는 $-1$ 이고, 직관 절의 유리 타원 곡면이다.
- $g=0$, $\chi=2$. 수는 $0$ 이고, $e=24$ 인 타원 [K3 곡면](k3-surfaces.md)이다. 일반적인 경우 $\mathrm I_1$ 올이 $24$ 개다.
- $g=0$, $\chi=3$. 수는 $1$ 이고 $\kappa=1$ 이다.

Kodaira 차원이 $1$ 인 극소 곡면은 모두 타원 곡면이다[^1].

# 활용

- 곡면의 분류. Kodaira 차원 $1$ 인 곡면이 타원 곡면이고, Kodaira 차원 $0$ 인 [Enriques 곡면](enriques-surfaces.md)과 K3 곡면도 타원 곡면 구조를 갖는 것이 많다.
- Mordell–Weil 격자. 단면이 있는 타원 곡면에서 단면들은 함수체 $\mathbb C(t)$ 위 타원곡선의 유리점이다. 유리 타원 곡면에서 그 군은 특이 올이 모두 $\mathrm I_1$ 이면 [E₈ 격자](e8-lattice.md)와 같은 격자를 이룬다.
- 4 차원 위상. 타원 곡면 $E(n)$ 은 $\chi(\mathcal O)=n$ 인 단순연결 타원 곡면이고, 올 하나를 중복 올로 바꾸는 로그 변환(logarithmic transform)으로 위상은 같지만 미분구조가 다른 4 차원 다양체들이 나온다.

[^1]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter V.

# 연관 문서

## 선수지식

- [Kodaira 차원](kodaira-dimension.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #algebraic_topology
