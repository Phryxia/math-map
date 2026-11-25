# Cremona 군

# 개요

**Cremona 군(Cremona group)** 은 사영평면에서 자신으로 가는 쌍유리 사상들이 합성으로 이루는 군이다. 아핀 좌표로 $(x,y)\mapsto(1/x,1/y)$ 인 사상은 두 번 하면 항등이고 거의 모든 점에서 정의되지만, 직선을 직선으로 보내는 사영변환이 아니다.

일차식의 사상 밖에 어떤 쌍유리 사상이 있는지 물으면, Cremona 군은 그 답을 이 사상 하나와 사영변환들로 모은다. 모든 원소가 이 둘을 합성해 나오고, 각 원소는 점의 부풀림과 곡선의 수축으로 분해된다.

# 직관

동차좌표로 쓰면 위 사상은 다음과 같다.

$$
\sigma(x:y:z)=(yz:xz:xy)
$$

세 좌표점 $(1:0:0)$, $(0:1:0)$, $(0:0:1)$ 에서는 세 성분이 모두 $0$ 이라 $\sigma$ 가 정의되지 않는다. 직선 $x=0$ 위의 점 $(0:y:z)$ 는 $(yz:0:0)=(1:0:0)$ 으로 가므로, $\sigma$ 는 좌표 직선 하나를 점 하나로 찌그러뜨린다.

세 좌표점을 [부풀림](blow-ups.md)하면 예외 곡선 $E\_1$, $E\_2$, $E\_3$ 이 생긴다. 직선 $x=0$ 은 두 좌표점 $(0:1:0)$, $(0:0:1)$ 을 지나므로 고유 변환의 류가 $H-E\_2-E\_3$ 이고 자기교차수가 $1-2=-1$ 이다. 부풀린 곡면에서 $\sigma$ 는 정칙사상이 되고 $E\_i$ 와 세 좌표 직선의 고유 변환을 맞바꾼다. 세 고유 변환을 수축하면 다시 사영평면이 나온다.

# 정의

체 $k$ 위의 사영평면의 쌍유리 자기사상 전체가 합성으로 이루는 군을 $\mathrm{Cr}\_2(k)$ 라 하고 **Cremona 군** 이라 한다. 원소 $\varphi$ 는 공통인수가 없는 같은 차수 $d$ 의 동차다항식 셋으로 $\varphi=(f\_0:f\_1:f\_2)$ 라 적히고, $d$ 를 $\varphi$ 의 **차수(degree)** 라 한다.

차수 $1$ 인 원소는 사영변환이고 $\mathrm{PGL}\_3(k)$ 를 이룬다. 직관 절의 $\sigma$ 는 차수 $2$ 이고 **표준 이차 변환(standard quadratic transformation)** 이라 한다.

$\varphi$ 가 정의되지 않는 점들을 밑점이라 한다. 일반적인 직선의 $\varphi^{-1}$ 에 의한 상은 차수 $d$ 의 곡선이고, 밑점 $p\_i$ 를 중복도 $m\_i$ 로 지난다. $\sigma$ 에서는 $d=2$ 이고 세 좌표점을 각각 중복도 $1$ 로 지나는 원뿔곡선이다.

# 성질

## Noether 방정식

차수 $d$, 밑점 중복도 $m\_i$ 는 다음을 만족한다[^1].

$$
\sum_i m_i=3d-3,\qquad \sum_i m_i^2=d^2-1
$$

둘째 식은 두 일반 직선의 상이 밑점 밖에서 한 점에서만 만나는 것에서, 첫째 식은 상이 유리곡선이어서 [딸림 공식](adjunction-formula.md)의 산술 종수가 밑점에서 모두 소진되는 것에서 나온다. $\sigma$ 는 $3=3$, $3=3$ 이다.

## 부풀림과 수축으로의 분해

곡면의 쌍유리 사상은 점의 부풀림과 (−1) 곡선의 수축을 합성한 것이므로, $\mathrm{Cr}\_2$ 의 원소도 이렇게 분해된다. 직관 절의 $\sigma$ 는 세 점의 부풀림 다음에 세 곡선의 수축이다.

## Noether–Castelnuovo 정리

정리(Noether–Castelnuovo 정리, Noether–Castelnuovo theorem). 대수적으로 닫힌 체 $k$ 에서 $\mathrm{Cr}\_2(k)$ 는 $\mathrm{PGL}\_3(k)$ 와 $\sigma$ 로 생성된다[^1].

Noether 는 $d\gt 1$ 이면 중복도가 가장 큰 세 밑점이 $m\_1+m\_2+m\_3\gt d$ 를 만족한다는 부등식을 세우고, 그 세 점에서 $\sigma$ 를 합성하면 차수가 $2d-m\_1-m\_2-m\_3\lt d$ 로 줄어든다고 보았다. 세 점이 서로 다른 점이 아닐 수 있어 이 논법에 빈자리가 있었고, Castelnuovo 가 1901 년에 증명을 완성했다[^1].

## 군의 크기

$(x,y)\mapsto(x,\thinspace y+p(x))$ 는 다항식 $p$ 마다 Cremona 군의 원소이고, 차수가 $\deg p$ 와 함께 한없이 커진다. 그래서 $\mathrm{Cr}\_2$ 는 유한차원 대수군이 아니다. 이런 꼴처럼 $x$ 좌표의 직선 모임을 보존하는 원소들을 de Jonquières 변환(de Jonquières transformation)이라 한다.

# 활용

- 곡면의 쌍유리 기하. [Castelnuovo 유리성 판정법](castelnuovo-rationality-criterion.md)으로 유리곡면이 된 곡면은 사영평면과의 쌍유리 사상이 Cremona 군의 원소만큼의 자유도를 갖는다.
- del Pezzo 곡면의 대칭. 세 점을 부풀린 [del Pezzo 곡면](del-pezzo-surfaces.md)의 (−1) 곡선 여섯은 육각형을 이루고, $\sigma$ 는 이 육각형을 $E\_i\leftrightarrow$ 좌표 직선으로 돌린다. 여섯 점과 여덟 점의 경우에는 Weyl 군 $W(E\_6)$, $W(E\_8)$ 의 원소가 Cremona 변환으로 실현된다.
- 동역학. 거듭제곱의 차수가 자라는 비율 $\lambda=\lim\_n(\deg\varphi^n)^{1/n}$ 을 동역학적 차수라 하고, $\log\lambda$ 가 위상 엔트로피의 상한이다. $\sigma$ 와 사영변환을 합성한 원소 가운데 $\lambda\gt 1$ 인 것이 있다.

[^1]: M. Alberich-Carramiñana, *Geometry of the Plane Cremona Maps*, Lecture Notes in Mathematics 1769, Springer, 2002, Chapters 2 과 8.

# 연관 문서

## 선수지식

- [부풀림](blow-ups.md)
- [딸림 공식](adjunction-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis #group_theory
