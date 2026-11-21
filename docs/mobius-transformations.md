# Möbius 변환

# 개요

**Möbius 변환(Möbius transformation)** 은 [복소수](complex-numbers.md) $z$ 를 $(az+b)/(cz+d)$ 로 보내는 변환이다. 원점을 지나는 원 $\vert z-1\vert=1$ 위의 점 $z$ 를 $1/z$ 로 옮기면 상은 전부 세로 직선 $\mathrm{Re}\thinspace w=1/2$ 위에 놓인다. 원과 직선이 섞인 그림을 다루기 쉬운 그림으로 바꿀 때 이런 변환이 필요하다. 네 계수를 $2\times 2$ [행렬](matrices.md)로 적으면 변환의 합성이 행렬 곱이 되므로, 어느 점을 어디로 보낼지를 행렬 계산으로 정한다.

# 직관

원 $\vert z-1\vert=1$ 위의 점 $2$, $1+i$, $1-i$ 를 $1/z$ 로 옮기면 $1/2$, $(1-i)/2$, $(1+i)/2$ 가 나온다. 세 상의 실수부가 모두 $1/2$ 이다.

원 위의 모든 점에서 이것이 성립한다. $\vert z-1\vert^2=1$ 을 전개하면 $z\bar z=z+\bar z$ 이고, 양변을 $z\bar z$ 로 나누면 다음이 나온다.

$$
1=\frac1{\bar z}+\frac1z=2\thinspace\mathrm{Re}\frac1z
$$

원 위의 점 $0$ 만은 $1/z$ 의 값이 없다. $z$ 가 원을 따라 $0$ 에 다가가면 $1/z$ 는 직선을 따라 한없이 멀어진다. 그래서 평면에 무한원점 $\infty$ 를 하나 더하고 $1/0=\infty$ 로 두면, 원 전체가 직선과 $\infty$ 를 합친 것으로 옮겨진다.

$c\ne 0$ 이면 $(az+b)/(cz+d)$ 는 다음 세 변환을 차례로 한 것이다. $z$ 에 $d/c$ 를 더하고, 역수를 취하고, $(bc-ad)/c^2$ 를 곱하고 $a/c$ 를 더한다.

$$
\frac{az+b}{cz+d}=\frac ac+\frac{bc-ad}{c^2}\cdot\frac{1}{z+d/c}
$$

평행이동과 상수배는 원을 원으로, 직선을 직선으로 옮긴다. 역수도 위 계산과 같은 방법으로 원과 직선을 원과 직선으로 옮긴다. 그러므로 $(az+b)/(cz+d)$ 꼴의 변환은 모두 원과 직선을 원과 직선으로 옮긴다.

# 정의

## Riemann 구면

복소평면에 점 $\infty$ 를 하나 더한 집합 $\widehat{\mathbb C}=\mathbb C\cup\lbrace\infty\rbrace$ 를 **Riemann 구면(Riemann sphere)** 이라 한다. 직관 절에서 $1/0=\infty$ 로 둔 점이 이 $\infty$ 다.

## Möbius 변환

복소수 $a,b,c,d$ 가 $ad-bc\ne 0$ 을 만족할 때 다음 사상 $T:\widehat{\mathbb C}\to\widehat{\mathbb C}$ 를 Möbius 변환이라 한다.

$$
T(z)=\frac{az+b}{cz+d}
$$

$c\ne 0$ 이면 $T(-d/c)=\infty$, $T(\infty)=a/c$ 로 두고, $c=0$ 이면 $T(\infty)=\infty$ 로 둔다. 직관 절의 $1/z$ 는 $a=d=0$, $b=c=1$ 이고 $ad-bc=-1$ 이다. $ad-bc=0$ 이면 분자가 분모의 상수배여서 $T$ 가 상수이므로 제외한다.

## 일반화된 원

평면의 원, 또는 평면의 직선에 $\infty$ 를 더한 집합을 **일반화된 원(generalized circle)** 이라 한다. 직관 절에서 원 $\vert z-1\vert=1$ 은 일반화된 원 $\lbrace\mathrm{Re}\thinspace w=1/2\rbrace\cup\lbrace\infty\rbrace$ 로 옮겨졌다.

## 복비

서로 다른 네 점 $z\_1,z\_2,z\_3,z\_4\in\widehat{\mathbb C}$ 의 **복비(cross-ratio)** 는 다음이다. $\infty$ 가 들어가면 그 점이 든 두 인수를 지운다.

$$
(z\_1,z\_2;z\_3,z\_4)=\frac{(z\_1-z\_3)(z\_2-z\_4)}{(z\_1-z\_4)(z\_2-z\_3)}
$$

직관 절 원 위의 네 점 $2$, $0$, $1+i$, $1-i$ 의 복비는 다음과 같고 실수다.

$$
(2,0;1+i,1-i)=\frac{(1-i)(-1+i)}{(1+i)(-1-i)}=\frac{2i}{-2i}=-1
$$

# 성질

## 행렬과 합성

첫 행이 $(a,b)$, 둘째 행이 $(c,d)$ 인 행렬 $A$ 가 정하는 Möbius 변환을 $T\_A$ 라 하자. 모든 가역 행렬 $A$, $B$ 에 대해 $T\_A\circ T\_B=T\_{AB}$ 다. $T\_B(z)=(pz+q)/(rz+s)$ 를 $T\_A$ 에 넣고 분모와 분자에 $rz+s$ 를 곱하면, 계수가 $AB$ 의 성분으로 나온다.

$T\_A$ 의 역변환은 $T\_{A^{-1}}$ 이고 역시 Möbius 변환이다. 그러므로 Möbius 변환 전체는 합성에 대해 [군](groups.md)이다. $T\_A=T\_B$ 는 $B$ 가 $A$ 의 $0$ 이 아닌 상수배일 때뿐이므로, 이 군은 가역 행렬의 군을 상수배 행렬로 나눈 몫군 $\mathrm{PGL}\_2(\mathbb C)$ 와 동형이다. $A$ 를 $\sqrt{ad-bc}$ 로 나누면 $\det A=1$ 로 맞출 수 있으므로 $\mathrm{PSL}\_2(\mathbb C)$ 와도 동형이다.

## 일반화된 원의 보존

Möbius 변환은 일반화된 원을 일반화된 원으로 옮긴다. 직관 절의 분해대로 평행이동, 상수배, 역수의 합성이므로 역수 $1/z$ 만 확인하면 된다. 일반화된 원은 실수 $\alpha$, $\gamma$ 와 복소수 $\beta$ 로 다음과 같이 적힌다. $\alpha=0$ 이면 직선이다.

$$
\alpha z\bar z+\beta z+\bar\beta\bar z+\gamma=0
$$

$w=1/z$ 를 넣고 $w\bar w$ 를 곱하면 다음이 나오므로 상도 같은 꼴이다.

$$
\gamma w\bar w+\bar\beta w+\beta\bar w+\alpha=0
$$

직관 절의 원은 $\alpha=1$, $\beta=-1$, $\gamma=0$ 이고 상은 $\gamma=0$ 인 직선이다.

## 세 점 정리

서로 다른 세 점 $z\_2,z\_3,z\_4$ 를 각각 $1,0,\infty$ 로 보내는 Möbius 변환은 다음 하나뿐이다.

$$
S(z)=(z,z\_2;z\_3,z\_4)=\frac{(z-z\_3)(z\_2-z\_4)}{(z-z\_4)(z\_2-z\_3)}
$$

증명의 요지. 존재는 식에 세 점을 넣어 확인한다. $T$ 가 $0,1,\infty$ 를 고정하면 $T(\infty)=\infty$ 에서 $c=0$, $T(0)=0$ 에서 $b=0$, $T(1)=1$ 에서 $a=d$ 이므로 $T$ 는 항등이다. $S$ 와 $S'$ 가 둘 다 조건을 만족하면 $S'\circ S^{-1}$ 가 $0,1,\infty$ 를 고정하므로 $S'=S$ 다. 따라서 서로 다른 세 점을 서로 다른 세 점으로 보내는 Möbius 변환도 하나뿐이다.

## 복비의 불변성

Möbius 변환 $T$ 는 복비를 보존한다.

$$
(Tz\_1,Tz\_2;Tz\_3,Tz\_4)=(z\_1,z\_2;z\_3,z\_4)
$$

$z\mapsto (Tz,Tz\_2;Tz\_3,Tz\_4)$ 와 $z\mapsto(z,z\_2;z\_3,z\_4)$ 는 둘 다 $z\_2,z\_3,z\_4$ 를 $1,0,\infty$ 로 보내는 Möbius 변환이므로 세 점 정리에 따라 같다.

서로 다른 네 점이 한 일반화된 원 위에 있는 것은 복비가 실수인 것과 동치다. $S$ 는 $z\_2,z\_3,z\_4$ 를 지나는 일반화된 원을 $1,0,\infty$ 를 지나는 일반화된 원, 곧 실수축과 $\infty$ 로 보내고, 복비는 $S(z\_1)$ 이다. 직관 절 원 위의 네 점의 복비가 $-1$ 로 실수였던 것이 그 예다.

## 고정점과 분류

항등이 아닌 Möbius 변환의 고정점은 $cz^2+(d-a)z-b=0$ 의 근이므로 $\widehat{\mathbb C}$ 에 하나나 둘이다. $\det A=1$ 로 맞추면 대각합 $\mathrm{tr}\thinspace A=a+d$ 는 부호를 빼고 정해지고, 켤레 $STS^{-1}$ 를 취해도 변하지 않는다. 항등이 아닌 변환은 $(\mathrm{tr}\thinspace A)^2$ 으로 다음 넷으로 나뉜다[^1].

| 종류 | 조건 | 켤레로 바꾼 꼴 | 예 |
| --- | --- | --- | --- |
| 포물형(parabolic) | $(\mathrm{tr}\thinspace A)^2=4$ | $z\mapsto z+1$ | $z+1$ |
| 타원형(elliptic) | $0\le(\mathrm{tr}\thinspace A)^2\lt 4$ | $z\mapsto e^{i\theta}z$ | $iz$, 대각합 제곱 $2$ |
| 쌍곡형(hyperbolic) | $(\mathrm{tr}\thinspace A)^2\gt 4$ | $z\mapsto kz$, $k\gt 0$ | $2z$, 대각합 제곱 $9/2$ |
| 사항형(loxodromic) | $(\mathrm{tr}\thinspace A)^2\notin\lbrack 0,\infty)$ | $z\mapsto kz$, $k\notin\mathbb R$ | $2iz$ |

포물형은 고정점이 $\infty$ 하나이고, 나머지 셋은 고정점이 둘이다. 고정점이 둘이면 그 둘을 $0$, $\infty$ 로 보내는 켤레를 취해 $z\mapsto kz$ 꼴이 되고, $k+1/k+2=(\mathrm{tr}\thinspace A)^2$ 에서 $k$ 의 위치가 종류를 정한다.

## Cayley 변환

**Cayley 변환(Cayley transform)** $C(z)=(z-i)/(z+i)$ 는 상반평면 $\lbrace\mathrm{Im}\thinspace z\gt 0\rbrace$ 을 단위원판 $\lbrace\vert w\vert\lt 1\rbrace$ 으로 옮긴다. $\vert z-i\vert\lt\vert z+i\vert$ 는 $z$ 가 $-i$ 보다 $i$ 에 가깝다는 것이고, 이것은 $\mathrm{Im}\thinspace z\gt 0$ 과 동치다. 실수축은 $1$ 을 뺀 단위원으로, $\infty$ 는 $1$ 로 간다.

# 활용

- [등각사상](conformal-mapping.md): Riemann 구면에서 자기 자신으로 가는 전단사 등각사상은 정확히 Möbius 변환이다. 단위원판의 자기동형 $e^{i\theta}(z-a)/(1-\bar az)$ 와 상반평면을 원판으로 펴는 Cayley 변환이 이 문서의 계산을 쓴다.
- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md): 원판의 쌍곡 거리를 보존하는 정칙 자기사상이 원판을 보존하는 Möbius 변환뿐이라는 등호 조건에 쓴다.
- [모듈러 형식](modular-forms.md): $\mathrm{SL}\_2(\mathbb Z)$ 가 상반평면에 Möbius 변환으로 작용하고, 모듈러 형식은 이 작용에 대한 변환 규칙으로 정의된다.
- [쌍곡 3차원 다양체](hyperbolic-3-manifolds.md): $\mathrm{PSL}\_2(\mathbb C)$ 가 쌍곡 3차원 공간의 방향 보존 등거리변환군이고, 그 경계 $\widehat{\mathbb C}$ 에는 Möbius 변환으로 작용한다. 위 표의 네 종류가 등거리변환의 종류와 대응한다.
- [연분수](continued-fractions.md): 연분수 $\lbrack a\_0;a\_1,\dots,a\_n\rbrack$ 은 $z\mapsto a\_k+1/z$ 를 차례로 합성한 값이고, 첫 행이 $(a\_k,1)$, 둘째 행이 $(1,0)$ 인 행렬들의 곱이 근사분수의 분자와 분모를 준다.

[^1]: L. V. Ahlfors, *Complex Analysis*, 3rd ed., McGraw-Hill, 1979, Ch. 3 §3.

# 연관 문서

## 선수지식

- [복소수](complex-numbers.md)
- [행렬](matrices.md)

## 더 알아보기

- [등각사상](conformal-mapping.md)
- [쌍곡평면](hyperbolic-plane.md)
- [Ptolemy 부등식](ptolemy-inequality.md)

#complex_analysis #group_theory #linear_algebra
