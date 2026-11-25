# Albanese 다양체

# 개요

**Albanese 다양체(Albanese variety)** 는 콤팩트 Kähler 다양체의 정칙 $1$ 형식들을 적분해 얻는 복소 원환면이고, 그 적분이 다양체에서 원환면으로 가는 사상을 준다. [쌍타원 곡면](bielliptic-surfaces.md)처럼 정칙 $1$ 형식이 하나뿐인 곡면이 있으면, 그 곡면에서 타원곡선으로 가는 사상이 어디서 오는지 물을 수 있다.

Albanese 다양체는 정칙 $1$ 형식의 적분값을 좌표로 써서 이런 사상을 만든다. 다양체에서 복소 원환면으로 가는 정칙사상은 모두 이 사상을 거친다.

# 직관

쌍타원 곡면 $S=(E\times F)/\langle\sigma\rangle$, $\sigma(x,y)=(x+a,-y)$ 의 정칙 $1$ 형식은 $dx$ 하나다. 점 $s\_0$ 을 고정하고 $s$ 에 $\int_{s\_0}^{s}dx$ 를 대응시키면 값이 적분 경로에 따라 달라진다. 두 경로의 차이는 닫힌 경로 $\gamma$ 위의 적분 $\int_\gamma dx$ 이고, 이런 값들은 $\mathbb C$ 안의 격자 $\Lambda$ 를 이룬다.

그래서 $s\mapsto\int_{s\_0}^{s}dx \bmod \Lambda$ 는 $S$ 에서 타원곡선 $\mathbb C/\Lambda$ 로 가는 잘 정의된 사상이다. $E\times F$ 위에서 $dx$ 의 적분은 첫 좌표 $x$ 이고 $\sigma$ 는 $x$ 를 $a$ 만큼 옮기므로, 이 사상은 $S$ 를 $E/\langle a\rangle$ 로 보내는 첫째 사영과 같다.

곡선에서 같은 일을 하면 정칙 $1$ 형식 $g$ 개의 적분이 곡선을 $\mathbb C^g$ 를 주기로 나눈 원환면으로 보내고, 이것이 [Jacobi 다양체](jacobian-variety.md)와 Abel–Jacobi 사상이다.

# 정의

$X$ 를 콤팩트 [Kähler 다양체](kahler-manifolds.md), $q=\dim H^0(X,\Omega^1)$ 이라 한다. 닫힌 경로 $\gamma$ 에 선형범함수 $\omega\mapsto\int_\gamma\omega$ 를 대응시키면 $H\_1(X,\mathbb Z)\to H^0(X,\Omega^1)^\vee$ 가 생기고, 그 상은 격자다. **Albanese 다양체** 는 다음 $q$ 차원 복소 원환면이다[^1].

$$
\mathrm{Alb}(X)=H^0(X,\Omega^1)^\vee/H_1(X,\mathbb Z)
$$

기준점 $x\_0$ 을 고르면 **Albanese 사상(Albanese map)** $\mathrm{alb}:X\to\mathrm{Alb}(X)$ 은 $x$ 를 범함수 $\omega\mapsto\int_{x\_0}^{x}\omega$ 의 류로 보내는 사상이다. 직관 절에서 $q=1$ 이고 $\mathrm{Alb}(S)=E/\langle a\rangle$ 이다.

상이 격자인 것은 [Hodge 이론](hodge-theory.md)에서 나온다. $H^1(X,\mathbb C)=H^{1,0}\oplus\overline{H^{1,0}}$ 이므로 $b\_1=2q$ 이고, 계수 $2q$ 인 $H\_1(X,\mathbb Z)$ 의 자유 부분이 실수 $2q$ 차원 공간에 퍼진다.

# 성질

## 보편 성질

$T$ 가 복소 원환면이고 $f:X\to T$ 가 $f(x\_0)=0$ 인 정칙사상이면, 원환면의 준동형 $h:\mathrm{Alb}(X)\to T$ 가 하나만 있어 $f=h\circ\mathrm{alb}$ 다[^1]. $f$ 로 $T$ 의 불변 $1$ 형식을 당기면 $X$ 의 정칙 $1$ 형식이 되고, 그 대응의 쌍대가 $h$ 다.

## Picard 다양체와의 쌍대

$X$ 가 사영 다양체이면 $\mathrm{Alb}(X)$ 는 [아벨 다양체](abelian-varieties.md)이고, [Lefschetz (1,1) 정리](lefschetz-1-1-theorem.md)의 $\mathrm{Pic}^0(X)=H^1(X,\mathcal O)/H^1(X,\mathbb Z)$ 와 쌍대 아벨 다양체다. 곡선에서는 둘 다 Jacobi 다양체이고 주편극으로 자기 자신과 쌍대다.

## 예

| 다양체 | q | Albanese 다양체 | Albanese 사상 |
| --- | --- | --- | --- |
| 종수 g 곡선 | g | Jacobi 다양체 | Abel–Jacobi 사상, g ≥ 1 이면 매장 |
| 아벨 다양체 A | dim A | A | 항등사상 |
| 곡선 C 위의 선직곡면 | g(C) | Jac(C) | 밑곡선으로의 사영과 Abel–Jacobi 의 합성 |
| 쌍타원 곡면 | 1 | 타원곡선 E/G | 첫째 올 구조 |
| [K3 곡면](k3-surfaces.md), [Enriques 곡면](enriques-surfaces.md) | 0 | 한 점 | 상수 |

[선직곡면](ruled-surfaces.md)의 올인 사영직선은 정칙 $1$ 형식이 없으므로 Albanese 사상이 올을 한 점으로 보내고, 밑곡선을 거친다.

# 활용

- 곡면의 분류. $q\ge 1$ 인 곡면은 Albanese 사상으로 곡선이나 원환면 위에 놓인다. 쌍타원 곡면과 선직곡면의 올 구조가 이렇게 정해진다.
- 유리점. [Chabauty–Kim 방법](chabauty-kim.md)의 단일값 Albanese 사상은 Albanese 사상을 기본군의 더 깊은 몫으로 넓힌 것이다.
- 조화 형식. 콤팩트 Riemann 다양체에서 조화 $1$ 형식을 적분해 실수 원환면으로 가는 사상을 만드는 방법이 Hodge 이론에 있고, Albanese 사상은 그 복소 판본이다.

[^1]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 2, Section 6.

# 연관 문서

## 선수지식

- [Jacobi 다양체](jacobian-variety.md)
- [Kähler 다양체](kahler-manifolds.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #differential_geometry
