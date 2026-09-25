# Chabauty 방법

# 개요

종수 $2$ 이상인 곡선의 유리점이 유한 개라는 것은 Faltings 정리가 말하지만, 그 증명은 유리점의 목록을 내놓지 않는다.

**Chabauty 방법**은 [Jacobi 다양체](jacobian-variety.md)의 유리점 계수가 종수보다 작을 때 유리점을 $p$ 진 해석함수의 영점으로 바꾸어 센다. Coleman 이 이 영점을 세는 방법을 주어 유리점 개수의 상한이 나온다.

# 직관

수체 $\mathbb Q$ 위의 종수 $g\ge2$ 곡선 $C$ 의 유리점을 전부 구하려고 한다. 점 하나를 기준으로 삼아 $C$ 를 Jacobi 다양체 $J$ 에 넣으면 $C(\mathbb Q)\subseteq J(\mathbb Q)$ 이고, Mordell–Weil 정리로 $J(\mathbb Q)$ 는 유한생성이다.

여기까지로는 답이 나오지 않는다. 계수 $r$ 이 $1$ 이상이면 $J(\mathbb Q)$ 는 무한집합이고, 그 안에서 $C$ 위에 놓인 점이 어느 것인지 가릴 조건이 없다. 두 집합 모두 대수적으로 주어져서 크기를 견줄 자가 없다.

$p$ 진수로 옮기면 잴 자가 생긴다. [$p$ 진수](p-adic-numbers.md) 체 $\mathbb Q_p$ 위에서 $J(\mathbb Q_p)$ 는 차원 $g$ 인 $p$ 진 해석다양체이고 $C(\mathbb Q_p)$ 는 그 안의 차원 $1$ 짜리 부분집합이다. $J(\mathbb Q)$ 의 $p$ 진 위상에서의 닫음은 차원이 $r$ 을 넘지 않는다.

$r\lt g$ 이면 차원 $r$ 인 것과 차원 $1$ 인 것이 차원 $g$ 안에서 만나므로 교집합의 차원이 $0$ 이다. 콤팩트성까지 더하면 교집합이 유한이고, $C(\mathbb Q)$ 가 그 안에 들어 있으므로 유한이다.

# 정의

## Chabauty 조건

$C$ 가 $\mathbb Q$ 위의 종수 $g\ge2$ 곡선이고 $J$ 가 그 Jacobi 다양체일 때, $r=\mathrm{rank}\thinspace J(\mathbb Q)$ 가 $g$ 보다 작은 것을 **Chabauty 조건**이라 한다.

## 소멸 미분형식

$J$ 위의 불변 $1$ 형식의 공간 $H^0(J,\Omega^1)$ 을 $C$ 로 당겨 $H^0(C,\Omega^1)$ 과 동일시한다. $\mathbb Q_p$ 계수로 넓힌 공간에서

$$
V=\lbrace \omega: \textstyle\int_0^{Q}\omega=0\thickspace\text{ 모든 } Q\in J(\mathbb Q)\rbrace
$$

를 **소멸 미분형식**의 공간이라 한다. 적분은 $J(\mathbb Q_p)$ 위의 $p$ 진 적분이고, 선형 조건이 $r$ 개이므로 $\dim V\ge g-r$ 이다. Chabauty 조건 아래에서 $V$ 는 $0$ 이 아니다.

## Coleman 적분

$C$ 가 $p$ 에서 좋은 환원을 가지면 환원 사상 $C(\mathbb Q_p)\to C(\mathbb F_p)$ 의 올을 **잔차 원판**이라 한다. 각 원판은 국소 매개변수 $t$ 로 $\mathbb Z_p$ 와 동일시된다.

원판 위에서 $\omega$ 를 $t$ 의 멱급수로 적고 항별로 적분한 것이 [Coleman 적분](coleman-integration.md) $\int_{P_0}^{P}\omega$ 다. 원판마다 이 적분은 $t$ 의 $p$ 진 해석함수이고, 서로 다른 원판의 값은 Frobenius 작용과의 정합성으로 이어 붙인다.

# 성질

## Chabauty 정리

**정리.** Chabauty 조건이 성립하면 $C(\mathbb Q)$ 는 유한집합이다.[^1]

$J(\mathbb Q)$ 의 $p$ 진 닫음은 $\mathbb Z_p$ 위의 계수 $r$ 자유가군을 품는 $p$ 진 Lie 부분군이고 차원이 $r$ 이다. $C(\mathbb Q_p)$ 는 차원 $1$ 인 콤팩트 해석 부분다양체다. 두 집합의 교집합이 무한이면 집적점을 가지므로 어느 잔차 원판에서 해석적 항등식이 성립하고, 그러면 $C$ 가 $J$ 의 $r$ 차원 부분군 안에 들어가 종수 조건에 어긋난다. ∎

## Coleman 의 상한

**정리.** $p\gt 2g$ 가 좋은 환원 소수이고 $r\lt g$ 이면

$$
\char35{}C(\mathbb Q)\le\char35{}C(\mathbb F_p)+2g-2
$$

이다.[^2]

$V$ 에서 $0$ 이 아닌 $\omega$ 를 잡으면 $C(\mathbb Q)$ 의 점은 모두 $\int\omega=0$ 의 해다. 잔차 원판 하나에서 이 적분은 $t$ 의 멱급수이고, Newton 다각형이 그 원판 안의 영점 개수를 $1$ 에 그 원판에서의 $\omega$ 의 영점 차수를 더한 값으로 누른다. $p\gt 2g$ 조건이 이 누름에 쓰인다. 원판마다 $1$ 을 더하면 $\char35{}C(\mathbb F_p)$ 이고 영점 차수를 모두 더하면 $2g-2$ 다. ∎

## 계수 조건의 한계

$r\ge g$ 이면 $J(\mathbb Q)$ 의 닫음이 $J(\mathbb Q_p)$ 를 다 덮을 수 있어 차원을 세는 논법이 끊긴다. 이때는 $C$ 대신 덮개 곡선으로 옮겨 계수를 낮추거나, 적분을 반복해 얻는 이중 Coleman 적분으로 조건을 $r\lt g+s-1$ 로 바꾼다. $s$ 는 $J$ 의 Néron–Severi 군의 계수다.[^3]

# 활용

- **유리점의 결정.** 상한이 이미 찾은 점의 개수와 같으면 목록이 완결된다. 종수 $2$ 곡선에서 계수가 $0$ 이나 $1$ 인 경우가 이 방법으로 계산된다.
- **Fermat 형 방정식.** 지수가 고정된 일반화 Fermat 방정식이 종수 $2$ 이상 곡선을 주고, 그 곡선에 Chabauty 방법을 적용해 정수해를 전부 결정한다.
- **분할 Cartan 모듈러 곡선.** 이중 Coleman 적분을 쓴 이차 Chabauty 로 $X\_{\mathrm{s}}^{+}(13)$ 의 유리점이 결정되었고, 이것이 [모듈러 곡선](modular-curves.md)의 유리점 분류에서 남아 있던 경우 가운데 하나다.[^3]
- **계수가 큰 경우의 우회.** [Selmer 군](selmer-groups.md)의 계산으로 계수 상한을 얻은 뒤 그 값이 $g$ 보다 작은지 먼저 확인한다. 이 단계가 방법의 적용 가능 여부를 가른다.

[^1]: C. Chabauty, "Sur les points rationnels des courbes algébriques de genre supérieur à l'unité", *C. R. Acad. Sci. Paris* **212** (1941).
[^2]: R. Coleman, "Effective Chabauty", *Duke Math. J.* **52** (1985).
[^3]: J. Balakrishnan, N. Dogra, J. Müller, J. Tuitman, J. Vonk, "Explicit Chabauty–Kim for the split Cartan modular curve of level 13", *Ann. of Math.* **189** (2019).

# 연관 문서

## 선수지식

- [Jacobi 다양체](jacobian-variety.md)
- [$p$ 진수](p-adic-numbers.md)

## 더 알아보기

- [Coleman 적분](coleman-integration.md)

#number_theory #algebra #complex_analysis
