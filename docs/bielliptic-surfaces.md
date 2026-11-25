# 쌍타원 곡면

# 개요

**쌍타원 곡면(bielliptic surface)** 은 두 타원곡선의 곱을, 한쪽에서는 평행이동이고 다른 쪽에서는 평행이동이 아닌 유한군으로 나눈 곡면이다. 타원곡선 둘의 곱 $E\times F$ 위에서 $(x,y)\mapsto(x+a,-y)$ 로 점을 짝지어 묶으면 새 곡면 $S$ 가 생긴다.

$S$ 의 표준다발은 자명하지 않지만 두 번 곱하면 자명해진다. [Kodaira 차원](kodaira-dimension.md)이 $0$ 인 곡면 가운데 정칙 $1$ 형식이 하나뿐인 것을 찾으면 이 곡면이 나오고, 묶는 군의 꼴은 일곱 가지이며 표준다발의 위수는 $2$, $3$, $4$, $6$ 이다.

# 직관

$E$ 와 $F$ 를 타원곡선이라 하고 $a$ 를 $E$ 의 위수 $2$ 인 점이라 한다. 사상 $\sigma(x,y)=(x+a,-y)$ 는 두 번 하면 항등이고, $x+a\ne x$ 이므로 고정점이 없다. $E\times F$ 의 점을 $\sigma$ 로 짝지어 묶은 몫 $S$ 는 매끄러운 곡면이다.

$E\times F$ 의 정칙 $1$ 형식은 $dx$, $dy$ 이고 정칙 $2$ 형식은 $dx\wedge dy$ 다. $\sigma$ 는 $dx$ 를 그대로 두고 $dy$ 를 $-dy$ 로 보내므로, $S$ 로 내려가는 $1$ 형식은 $dx$ 하나이고 $dx\wedge dy$ 는 부호가 바뀌어 내려가지 않는다. 그래서 $S$ 의 $q$ 는 $1$, $p_g$ 는 $0$ 이다.

$(dx\wedge dy)^{\otimes 2}$ 는 $\sigma$ 에 불변이므로 $S$ 로 내려가고 어디서도 $0$ 이 아니다. 표준다발 $K_S$ 는 자명하지 않지만 $2K_S$ 는 자명하다. 곱 $E\times F$ 가 $q=2$, $p_g=1$ 인 아벨 곡면인 것과 다르다.

# 정의

**쌍타원 곡면** 은 다음 꼴의 곡면이다[^1].

$$
S=(E\times F)/G
$$

$E$, $F$ 는 타원곡선이고, $G$ 는 $E$ 의 평행이동들로 이루어진 유한군이며, $G$ 는 $F$ 에 충실하게 작용하고 $F/G\cong\mathbb P^1$ 이다. $G$ 는 $E\times F$ 에 대각으로 작용한다.

$G$ 가 $E$ 에서 평행이동이므로 고정점이 없고, 따라서 $G$ 는 $E\times F$ 에 자유롭게 작용해 $S$ 는 매끄럽다. 직관 절의 곡면은 $G=\mathbb Z/2$ 가 $E$ 에서 $a$ 만큼 평행이동하고 $F$ 에서 $y\mapsto -y$ 로 작용한 것이다. $F$ 를 $y\mapsto -y$ 로 묶은 몫은 사영직선이다.

# 성질

## 두 올 구조

두 성분으로의 사영이 $S$ 에서 두 사상을 준다.

$$
\Phi:S\to E/G,\qquad \Psi:S\to F/G\cong\mathbb P^1
$$

$\Phi$ 의 올은 모두 $F$ 와 동형이고, $E/G$ 는 타원곡선이다. $\Psi$ 의 일반적인 올은 $E$ 이고, $G$ 의 원소가 고정하는 $F$ 의 점 위에서는 $E/(\text{안정자})$ 를 여러 번 센 다중 올이 된다. 직관 절의 예에서 $y\mapsto -y$ 의 고정점은 $F$ 의 위수 $2$ 인 점 넷이므로, $\Psi$ 는 다중도 $2$ 인 올을 넷 갖는 [타원 곡면](elliptic-surfaces.md)이다.

## 불변량

쌍타원 곡면은 $q=1$, $p_g=0$ 이고, 위상적 Euler 표수는 $e(E\times F)/\lvert G\rvert=0$ 이다[^1]. Betti 수는 $b\_1=2$, $b\_2=2$ 다.

[Noether 공식](noether-formula.md)으로 확인한다. $K_S$ 가 수치적으로 $0$ 이므로 $K^2=0$ 이고 $(K^2+e)/12=0$ 이다. 이것은 $1-q+p_g=1-1+0$ 과 같다.

## Bagnera–de Franchis 분류

$G$ 와 $F$ 위의 작용은 다음 일곱 꼴뿐이다(Bagnera–de Franchis 분류, Bagnera–de Franchis classification)[^1]. $F$ 의 좌표를 $y$ 로 적고, $i$ 와 $\omega=e^{2\pi i/3}$ 은 $F$ 가 그만큼의 회전을 허용할 때만 쓴다.

| 꼴 | 군 | F 위의 생성원 | K 의 위수 |
| --- | --- | --- | --- |
| 1 | $\mathbb Z/2$ | $y\mapsto -y$ | 2 |
| 2 | $\mathbb Z/2\times\mathbb Z/2$ | $y\mapsto -y$, $y\mapsto y+\varepsilon$ | 2 |
| 3 | $\mathbb Z/4$ | $y\mapsto iy$ | 4 |
| 4 | $\mathbb Z/4\times\mathbb Z/2$ | $y\mapsto iy$, $y\mapsto y+(1+i)/2$ | 4 |
| 5 | $\mathbb Z/3$ | $y\mapsto\omega y$ | 3 |
| 6 | $\mathbb Z/3\times\mathbb Z/3$ | $y\mapsto\omega y$, $y\mapsto y+(1-\omega)/3$ | 3 |
| 7 | $\mathbb Z/6$ | $y\mapsto -\omega y$ | 6 |

$\varepsilon$ 는 $F$ 의 위수 $2$ 인 점이다. 둘째 생성원은 $F$ 에서 평행이동이고, 첫째 생성원의 고정점들을 서로 옮긴다. $K_S$ 의 위수는 첫째 생성원이 $dy$ 에 곱하는 수의 위수와 같다.

증명의 요지. $F/G\cong\mathbb P^1$ 이려면 $G$ 의 어떤 원소가 $F$ 에서 고정점을 가져야 하고, 타원곡선의 자기동형 가운데 고정점이 있는 것은 위수 $2,3,4,6$ 의 회전이다. $G$ 는 $E$ 의 평행이동들로 이루어져 가환이므로, $F$ 위의 평행이동 $y\mapsto y+t$ 는 회전 $\rho$ 와 가환해야 하고 $\rho(t)=t$ 다. 그래서 회전의 고정점만큼의 평행이동만 남는다.

## Kodaira 차원 0 곡면 사이의 자리

Kodaira 차원이 $0$ 인 극소 곡면은 다음 넷이다[^2].

| 곡면 | q | p_g | K 의 위수 |
| --- | --- | --- | --- |
| [K3 곡면](k3-surfaces.md) | 0 | 1 | 1 |
| [Enriques 곡면](enriques-surfaces.md) | 0 | 0 | 2 |
| [아벨 다양체](abelian-varieties.md)인 곡면 | 2 | 1 | 1 |
| 쌍타원 곡면 | 1 | 0 | 2, 3, 4, 6 |

$q$ 와 $p_g$ 의 쌍이 넷을 가른다. 쌍타원 곡면은 $E\times F$ 를 덮개로 갖는 유한 몫이고, Enriques 곡면이 K3 곡면의 몫인 것과 같은 관계다.

# 활용

- 곡면의 분류. Kodaira 차원 $0$ 인 곡면의 목록을 완성하는 마지막 종류이고, Enriques–Kodaira 분류의 표에서 $q=1$ 인 칸을 채운다.
- 산술. Skorobogatov 는 쌍타원 곡면에서 Brauer–Manin 장애로 설명되지 않는 [Hasse 원리](hasse-principle.md)의 실패를 만들었다. 이 내용은 [Brauer 군](brauer-groups.md)의 활용 절에 있다.
- 다중 올의 예. 타원 곡면의 표준다발 공식에서 직관 절의 $\Psi$ 는 밑곡선 $\mathbb P^1$ 에서 올 $-2$ 개, 다중도 $2$ 인 올 넷에서 올 $4\cdot\tfrac12=2$ 개를 받아 $K_S$ 가 수치적으로 $0$ 이 된다.

[^1]: A. Beauville, *Complex Algebraic Surfaces*, 2nd ed., London Mathematical Society Student Texts 34, Cambridge University Press, 1996, Chapter VI, List VI.20.

[^2]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter VI.

# 연관 문서

## 선수지식

- [Kodaira 차원](kodaira-dimension.md)
- [아벨 다양체](abelian-varieties.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #number_theory
