# Chabauty 방법

# 개요

**Chabauty 방법(Chabauty's method)** 은 종수 $2$ 이상인 곡선의 유리점을 $p$ 진 해석함수의 영점으로 바꾸어 세는 방법이다. 곡선 $y^2=x^5+1$ 처럼 종수가 $2$ 인 곡선의 유리점이 유한 개라는 것은 [Faltings 정리](faltings-theorem.md)로 나오지만, 그 증명은 유리점이 몇 개이고 어디 있는지 알려 주지 않는다. Chabauty 방법은 유리점들이 어떤 $p$ 진 해석함수의 영점에 놓이게 하고 그 영점을 세어 유리점 개수의 상한을 계산한다.

# 직관

$\mathbb Q$ 위의 종수 $g\ge2$ 곡선 $C$ 의 유리점을 전부 구하려고 한다. 점 하나를 기준으로 삼아 $C$ 를 [Jacobi 다양체](jacobian-variety.md) $J$ 에 넣으면 $C(\mathbb Q)\subseteq J(\mathbb Q)$ 이고, [Mordell–Weil 정리](canonical-height.md)로 $J(\mathbb Q)$ 는 계수 $r$ 인 유한생성 아벨군이다. $r\ge1$ 이면 $J(\mathbb Q)$ 는 무한집합이고, 그 안에서 $C$ 위에 놓인 점을 가려내는 조건이 대수적으로는 주어지지 않는다.

[p 진수](p-adic-numbers.md) 체 $\mathbb Q_p$ 로 옮기면 차원을 비교할 수 있다. $J(\mathbb Q_p)$ 는 차원 $g$ 인 $p$ 진 해석다양체이고 $C(\mathbb Q_p)$ 는 그 안의 차원 $1$ 인 부분집합이며, $J(\mathbb Q)$ 의 $p$ 진 닫음은 차원이 $r$ 이하다. $r\lt g$ 이면 차원 $r$ 인 집합 위에서 $0$ 이 되는 $p$ 진 해석함수 가운데 $J(\mathbb Q_p)$ 전체에서 $0$ 은 아닌 것이 있다. 그 함수를 $C(\mathbb Q_p)$ 로 제한하면 영점이 유한 개이고, $C(\mathbb Q)$ 는 그 영점 안에 있다.

# 정의

## Chabauty 조건

$C$ 가 $\mathbb Q$ 위의 종수 $g\ge2$ 곡선이고 $J$ 가 그 Jacobi 다양체일 때, $r=\mathrm{rank}\thinspace J(\mathbb Q)$ 가 $g$ 보다 작은 것을 **Chabauty 조건(Chabauty condition)** 이라 한다. 종수 $2$ 곡선에서는 $r=0$ 또는 $r=1$ 이 이 조건이다.

## 소멸 미분형식

$J$ 위의 불변 $1$ 형식의 공간 $H^0(J,\Omega^1)$ 을 $C$ 로 당겨 $H^0(C,\Omega^1)$ 과 동일시한다. $\mathbb Q_p$ 계수로 넓힌 공간에서

$$
V=\lbrace \omega: \textstyle\int_0^{Q}\omega=0\thickspace\text{ 모든 } Q\in J(\mathbb Q)\rbrace
$$

를 **소멸 미분형식(annihilating differentials)** 의 공간이라 한다. 적분은 $J(\mathbb Q_p)$ 위의 $p$ 진 적분이다. $g=2$, $r=1$ 이면 생성원 $Q_1$ 하나에서 조건 $\int_0^{Q_1}\omega=0$ 하나가 나와 $\dim V=1$ 이다.

## 잔차 원판과 Coleman 적분

$C$ 가 $p$ 에서 좋은 환원을 가지면 환원 사상 $C(\mathbb Q_p)\to C(\mathbb F_p)$ 의 올을 **잔차 원판(residue disc)** 이라 한다. 각 원판은 국소 매개변수 $t$ 로 $p\mathbb Z_p$ 와 동일시된다. $y^2=x^5+1$ 은 $p=7$ 에서 좋은 환원을 갖고 $C(\mathbb F_7)$ 는 $(0,\pm1),(1,\pm3),(5,\pm2),(6,0)$ 과 무한원점의 $8$ 점이므로 잔차 원판이 $8$ 개다.

원판 위에서 $\omega$ 를 $t$ 의 [멱급수](power-series.md)로 적고 항별로 적분한 것이 [Coleman 적분](coleman-integration.md) $\int_{P_0}^{P}\omega$ 다. 서로 다른 원판의 값은 Frobenius 작용과의 정합성으로 이어 붙인다.

# 성질

## 소멸 미분형식의 존재

조건 $\int_0^Q\omega=0$ 은 $\omega$ 에 대한 선형 조건이고, $J(\mathbb Q)$ 의 생성원 $r$ 개에서만 확인하면 된다. 그러므로 $\dim V\ge g-r$ 이고, Chabauty 조건 아래에서 $V\ne0$ 이다.

## Chabauty 정리

Chabauty 정리(Chabauty's theorem)는 Chabauty 조건이 성립하면 $C(\mathbb Q)$ 가 유한집합이라는 진술이다.[^1]

증명의 요지. $V$ 에서 $0$ 이 아닌 $\omega$ 를 잡으면 $P\mapsto\int_{P_0}^P\omega$ 는 $C(\mathbb Q)$ 위에서 $0$ 이고, 각 잔차 원판에서 $0$ 이 아닌 $p$ 진 해석함수다. Strassmann 정리(Strassmann's theorem)로 원판마다 영점이 유한 개이고 원판도 유한 개이므로 $C(\mathbb Q)$ 는 유한하다.

## Coleman 의 상한

Coleman 의 상한(Coleman's bound)은 다음 진술이다. $p\gt 2g$ 가 좋은 환원 소수이고 $r\lt g$ 이면

$$
\char35{}C(\mathbb Q)\le\char35{}C(\mathbb F_p)+2g-2
$$

이다.[^2]

$V$ 에서 $0$ 이 아닌 $\omega$ 를 잡으면 $C(\mathbb Q)$ 의 점은 모두 $\int\omega=0$ 의 해다. 잔차 원판 하나에서 이 적분은 $t$ 의 멱급수이고, [Newton 다각형](newton-polygon.md)이 그 원판 안의 영점 개수에 $1$ 과 그 원판에서의 $\omega$ 의 영점 차수를 더한 값으로 상계를 준다. 이 상계에 $p\gt 2g$ 조건을 쓴다.

원판마다 $1$ 을 더하면 $\char35{}C(\mathbb F_p)$ 이고 영점 차수를 모두 더하면 $2g-2$ 다. $y^2=x^5+1$ 의 $J(\mathbb Q)$ 계수가 $2$ 보다 작으면 $p=7$ 에서 상한은 $8+2=10$ 이다.

## 계수 조건의 한계

$r\ge g$ 이면 $J(\mathbb Q)$ 의 닫음이 $J(\mathbb Q_p)$ 의 열린 부분군일 수 있어 차원을 세는 논법이 적용되지 않는다. 이때는 $C$ 대신 덮개 곡선으로 옮겨 계수를 낮추거나, 적분을 반복해 얻는 이중 Coleman 적분으로 조건을 $r\lt g+s-1$ 로 바꾼다. $s$ 는 $J$ 의 Néron–Severi 군(Néron–Severi group)의 계수다.[^3] 후자는 [Chabauty–Kim 방법](chabauty-kim.md)의 깊이 $2$ 경우다.

# 활용

- 유리점의 결정: 상한이 이미 찾은 점의 개수와 같으면 목록이 완결된다. 종수 $2$ 곡선에서 계수가 $0$ 이나 $1$ 인 경우가 이 방법으로 계산된다.
- 일반화 Fermat 방정식(generalized Fermat equation): 지수가 고정된 방정식이 종수 $2$ 이상 곡선을 주고, 그 곡선에 Chabauty 방법을 적용해 정수해를 전부 결정한다.
- 분해 Cartan 모듈러 곡선(split Cartan modular curve): 이중 Coleman 적분을 쓴 이차 Chabauty(quadratic Chabauty)로 $X\_{\mathrm{s}}^{+}(13)$ 의 유리점이 결정되었고, 이것이 [모듈러 곡선](modular-curves.md)의 유리점 분류에서 남아 있던 경우 가운데 하나다.[^3]
- 계수 확인: [Selmer 군](selmer-tate-shafarevich.md)의 계산으로 계수 상한을 얻은 뒤 그 값이 $g$ 보다 작은지 먼저 확인한다. 이 단계가 방법의 적용 가능 여부를 가른다.

[^1]: C. Chabauty, "Sur les points rationnels des courbes algébriques de genre supérieur à l'unité", *C. R. Acad. Sci. Paris* **212** (1941).
[^2]: R. Coleman, "Effective Chabauty", *Duke Math. J.* **52** (1985).
[^3]: J. Balakrishnan, N. Dogra, J. Müller, J. Tuitman, J. Vonk, "Explicit Chabauty–Kim for the split Cartan modular curve of level 13", *Ann. of Math.* **189** (2019).

# 연관 문서

## 선수지식

- [Jacobi 다양체](jacobian-variety.md)
- [p 진수](p-adic-numbers.md)

## 더 알아보기

- [Coleman 적분](coleman-integration.md)
- [Mordell–Weil 시브](mordell-weil-sieve.md)

#number_theory #algebra #complex_analysis
