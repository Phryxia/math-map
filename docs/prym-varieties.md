# Prym 다양체

# 개요

**Prym 다양체(Prym variety)** 는 곡면의 이중 덮개에서 아래 곡면에서 오지 않는 부분만 떼어 낸 아벨 다양체다. 구멍 셋을 한 줄로 늘어놓은 곡면을 가운데 구멍을 지나는 축으로 반 바퀴 돌리면 곡면이 자기 자신에 겹치고, 돌림으로 같아지는 점끼리 묶은 곡면은 구멍이 둘이다. 위 곡면의 [Jacobi 다양체](jacobian-variety.md)는 차원이 $3$ 이고 그 가운데 $2$ 차원은 아래 곡면의 것이므로, 돌림이 부호를 바꾸는 나머지 $1$ 차원이 남는다.

Prym 다양체는 이 나머지를 모아, 곡선의 Jacobi 다양체만으로는 닿지 않는 주편극 [아벨 다양체](abelian-varieties.md)를 곡선의 자료로 다룬다.

# 직관

종수 $3$ 의 곡면 $\tilde C$ 가 고정점 없는 대합 $\sigma$ 를 갖고, 몫 $C=\tilde C/\sigma$ 가 종수 $2$ 라 한다. 정칙 미분 공간 $H^0(\tilde C,\Omega^1)$ 은 $3$ 차원이고 $\sigma$ 가 그 위에 작용한다. $\sigma^2$ 가 항등이므로 공간은 $\sigma$ 가 $+1$ 로 작용하는 부분과 $-1$ 로 작용하는 부분으로 갈라진다.

$+1$ 부분은 $C$ 위의 정칙 미분을 끌어올린 것이다. $\sigma$ 로 변하지 않는 미분은 $C$ 로 내려가고, 덮개가 분기하지 않으므로 내려간 미분도 정칙이다. 그래서 $+1$ 부분은 $2$ 차원이고 $-1$ 부분은 $1$ 차원이다.

Jacobi 다양체 $J(\tilde C)$ 도 같은 방식으로 나뉜다. $J(C)$ 를 끌어올린 $2$ 차원 부분과, $\sigma$ 가 $-1$ 로 작용하는 $1$ 차원 부분이다. 뒤의 것이 [타원곡선](elliptic-curves.md)이고, 이 타원곡선이 이 덮개의 Prym 다양체다.

# 정의

## 이중 덮개와 노름 사상

$C$ 를 종수 $g\ge 2$ 의 곡선, $\pi:\tilde C\to C$ 를 분기하지 않는 연결 이중 덮개, $\sigma$ 를 그 덮개 변환이라 한다. [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)으로 $2g(\tilde C)-2=2(2g-2)$ 이므로 $\tilde C$ 의 종수는 $2g-1$ 이다. 이런 덮개는 $J(C)$ 의 $0$ 이 아닌 $2$ 등분점 $\eta$ 와 일대일로 대응한다.

divisor 를 아래로 밀어 보내는 사상 $\sum n_iP_i\mapsto\sum n_i\pi(P_i)$ 이 군 준동형 $\mathrm{Nm}:J(\tilde C)\to J(C)$ 를 준다. 이것을 **노름 사상(norm map)** 이라 한다. 끌어올림 $\pi^\ast:J(C)\to J(\tilde C)$ 와는 $\mathrm{Nm}\circ\pi^\ast=2$, $\pi^\ast\circ\mathrm{Nm}=1+\sigma$ 의 관계가 있다.

## Prym 다양체

덮개 $\pi$ 의 Prym 다양체는 노름 사상의 핵에서 $0$ 을 포함하는 연결성분이다.

$$
P(\tilde C/C)=(\ker\mathrm{Nm})^0=(1-\sigma)J(\tilde C)
$$

$\mathrm{Nm}$ 이 전사이므로 $\dim P=(2g-1)-g=g-1$ 이다. 직관 절의 덮개는 $g=2$ 인 경우이고 $P$ 가 $1$ 차원이다.

## Prym 사상

$0$ 이 아닌 $2$ 등분점 $\eta$ 를 갖춘 종수 $g$ 곡선의 쌍 $(C,\eta)$ 의 모듈라이 공간을 $\mathcal R_g$ 라 한다. $\mathcal R_g$ 는 [곡선의 모듈라이 공간](moduli-of-curves.md) $\mathcal M_g$ 위의 유한 덮개이므로 차원이 $3g-3$ 이다. 쌍에 그 Prym 다양체를 대응시키는 사상 $\mathcal P_g:\mathcal R_g\to\mathcal A_{g-1}$ 을 **Prym 사상(Prym map)** 이라 한다.

# 성질

## 주편극

Mumford 정리(Mumford's theorem). $J(\tilde C)$ 의 theta divisor $\tilde\Theta$ 를 $P$ 에 제한하면 어떤 주편극 $\Xi$ 의 두 배와 대수적으로 동치다[^1].

$$
\tilde\Theta\vert\_P\equiv 2\thinspace\Xi
$$

직관 절의 경우 $P$ 는 $3$ 차원 $J(\tilde C)$ 안의 타원곡선이고, $\tilde\Theta$ 와의 교차수가 $2$ 다. 타원곡선의 주편극은 점 하나이므로 제한된 편극은 그 두 배다.

## 차원 비교

$\mathcal R_g$ 와 $\mathcal A_{g-1}$ 의 차원은 다음과 같다.

| 종수 | Prym 쌍의 수 | 아벨 다양체의 수 |
| ---- | ------------ | ---------------- |
| $4$  | $9$          | $6$              |
| $5$  | $12$         | $10$             |
| $6$  | $15$         | $15$             |
| $7$  | $18$         | $21$             |

$g\le 6$ 이면 Prym 다양체와 그 극한이 $\mathcal A_{g-1}$ 전체를 채운다[^2]. 곡선의 Jacobi 다양체는 차원 $3$ 까지만 $\mathcal A_g$ 를 채우므로, Prym 다양체로는 차원 $4$ 와 $5$ 의 주편극 아벨 다양체도 곡선에서 만들 수 있다. $g=6$ 에서 $\mathcal P_6$ 은 차수 $27$ 의 유한 사상이다[^3]. $g\ge 7$ 이면 $\mathcal P_g$ 는 일반적인 점에서 단사다[^4].

## Wirtinger 덮개

$C_0$ 를 노드 하나를 가진 종수 $g$ 의 곡선, $N$ 을 그 정규화(normalization)라 한다. $N$ 의 복사본 둘을 노드 위의 두 점에서 엇갈려 붙이면 $C_0$ 위의 이중 덮개가 생기고, 그 Prym 다양체가 $J(N)$ 이다. 이 덮개를 Wirtinger 덮개(Wirtinger cover)라 한다. 따라서 $\mathcal A_{g-1}$ 안에서 Jacobi 궤적은 Prym 궤적의 닫힘에 포함된다.

# 활용

- [Schottky 문제](schottky-problem.md). Beauville 은 Prym 다양체로 차원 $4$ 의 주편극 아벨 다양체를 다루어, theta divisor 가 특이한 것은 Jacobi 궤적의 닫힘에 있거나 짝인 $2$ 등분점에서 theta divisor 가 특이한 것뿐임을 보였다[^2].
- 삼차 삼중체(cubic threefold)의 무리성. 삼차 삼중체의 중간 Jacobi 다양체(intermediate Jacobian)는 평면 오차곡선 위 이중 덮개의 Prym 다양체다. Clemens 와 Griffiths 는 그 theta divisor 의 특이점이 고립점 하나라는 것으로부터 이 $5$ 차원 아벨 다양체가 곡선의 Jacobi 다양체들의 곱이 아님을 보이고, 삼차 삼중체가 유리 다양체가 아님을 증명했다[^5].

[^1]: D. Mumford, "Prym Varieties I", Contributions to Analysis, Academic Press (1974), 325–350.

[^2]: A. Beauville, "Prym Varieties and the Schottky Problem", Inventiones Mathematicae **41** (1977), 149–196.

[^3]: R. Donagi and R. Smith, "The Structure of the Prym Map", Acta Mathematica **146** (1981), 25–102.

[^4]: R. Friedman and R. Smith, "The Generic Torelli Theorem for the Prym Map", Inventiones Mathematicae **67** (1982), 473–490.

[^5]: C. H. Clemens and P. A. Griffiths, "The Intermediate Jacobian of the Cubic Threefold", Annals of Mathematics **95** (1972), 281–356.

# 연관 문서

## 선수지식

- [Jacobi 다양체](jacobian-variety.md)
- [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #algebraic_topology
