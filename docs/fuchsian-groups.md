# Fuchs 군

# 개요

**Fuchs 군(Fuchsian group)** 은 [쌍곡평면](hyperbolic-plane.md)의 방향 보존 등거리변환 가운데 서로 일정 거리 이상 떨어진 것들로 이루어진 군이다. $z\mapsto 2z$ 가 생성하는 군으로 쌍곡평면을 나누면 고리 모양 곡면이 되지만, $z\mapsto 2z$ 와 $z\mapsto 3z$ 가 함께 생성하는 군으로 나누면 한 점의 상들이 한 직선 위에 빽빽하게 모여 곡면이 되지 않는다. Fuchs 군은 몫이 곡면이 되는 군을 가려내는 조건이고, 이 조건이 있으면 몫 곡면의 넓이를 군의 생성원과 관계에서 계산한다.

# 직관

$g(z)=2z$ 는 실계수 [Möbius 변환](mobius-transformations.md)이므로 쌍곡평면의 등거리변환이다. $i$ 의 상은 $\dots,i/2,i,2i,4i,\dots$ 이고 이웃한 두 상의 쌍곡 거리는 $\ln 2$ 다. 영역 $\lbrace 1\le\vert z\vert\lt 2\rbrace$ 가 모든 점의 상을 정확히 하나씩 담고, 두 경계 반원을 $g$ 로 붙이면 고리가 나온다.

$h(z)=3z$ 를 더하면 $i$ 의 상은 $2^a3^bi$ 꼴이다. $\ln 3/\ln 2$ 가 무리수이므로 $a\ln 2+b\ln 3$ 은 $0$ 에 얼마든지 가까워지고, 상들은 허수축 위에 빽빽하다. $i$ 의 아무리 작은 근방에도 다른 상이 들어오므로 몫에서 $i$ 의 근방이 원판처럼 생기지 않는다. 두 경우를 가른 것은 항등이 아닌 원소가 $i$ 를 일정 거리 이상 옮기는지였다.

# 정의

## Fuchs 군

$\mathrm{PSL}\_2(\mathbb R)$ 에 행렬 성분으로 위상을 준다. **Fuchs 군** 은 $\mathrm{PSL}\_2(\mathbb R)$ 의 이산 부분군, 곧 항등원의 어떤 근방이 항등원 말고 다른 원소를 담지 않는 부분군이다. 직관 절의 $\langle g\rangle$ 은 Fuchs 군이고, $\langle g,h\rangle$ 은 $\mathrm{diag}(\sqrt{2^a3^b},\thinspace 1/\sqrt{2^a3^b})$ 꼴의 원소가 항등원에 얼마든지 가까워 Fuchs 군이 아니다. [모듈러 군](modular-group.md)은 성분이 정수라 이산이므로 Fuchs 군이다.

## 기본 영역

Fuchs 군 $\Gamma$ 의 **기본 영역(fundamental domain)** 은 $\mathbb H$ 의 닫힌 영역 $F$ 로, $\Gamma$ 의 원소로 옮긴 복사본들이 $\mathbb H$ 를 덮고 서로 다른 두 복사본의 내부가 겹치지 않는 것이다. 직관 절의 영역의 닫힘 $\lbrace 1\le\vert z\vert\le 2\rbrace$ 가 $\langle g\rangle$ 의 기본 영역이다. 넓이가 유한한 기본 영역이 있으면 $\Gamma$ 의 **공부피(covolume)** 를 그 넓이로 정한다. 기본 영역에 따라 값이 바뀌지 않는다.

# 성질

## 이산성과 고유 불연속성

$\mathrm{PSL}\_2(\mathbb R)$ 의 부분군 $\Gamma$ 가 Fuchs 군인 것은, $\mathbb H$ 의 모든 콤팩트 집합 $K$ 에 대해 $gK\cap K\ne\varnothing$ 인 $g\in\Gamma$ 가 유한 개인 것과 동치다[^1]. 뒤의 조건을 작용이 **고유 불연속(properly discontinuous)** 이라 한다. 이 조건에서 몫 $\Gamma\backslash\mathbb H$ 의 각 점은 원판이나 원판을 유한 회전군으로 나눈 꼴의 근방을 갖는다.

## 원소의 종류

Möbius 변환의 대각합 분류에서 실계수 변환은 타원형, 포물형, 쌍곡형 가운데 하나다. Fuchs 군의 타원형 원소는 유한 위수다. 회전각이 $\pi$ 의 무리수배이면 그 거듭제곱이 항등원에 얼마든지 가까워져 이산성에 어긋난다. 직관 절의 $g$ 는 쌍곡형이고, 모듈러 군의 $T$ 는 포물형, $S$ 는 위수 $2$ 인 타원형이다.

## 넓이 공식

공부피가 유한한 Fuchs 군 $\Gamma$ 의 몫이 종수 $g$ 인 곡면이고, 위수 $m\_1,\dots,m\_r$ 인 타원형 고정점과 첨점 $s$ 개를 가지면 공부피는 다음이다.

$$
\mathrm{Area}(\Gamma\backslash\mathbb H)=2\pi\left(2g-2+s+\sum\_{i=1}^r\left(1-\frac1{m\_i}\right)\right)
$$

모듈러 군은 $g=0$ 이고 위수 $2$, $3$ 인 고정점과 첨점 $1$ 개를 가지며, [삼각군](triangle-groups.md) $\Delta(2,3,7)$ 은 $g=0$ 이고 위수 $2$, $3$, $7$ 인 고정점을 가진다. 두 공부피는 다음과 같고, 앞의 것은 모듈러 군 문서의 넓이와 같다.

$$
2\pi\left(-2+1+\frac12+\frac23\right)=\frac\pi3,\qquad 2\pi\left(-2+\frac12+\frac23+\frac67\right)=\frac{\pi}{21}
$$

괄호 안이 양수가 되는 값 가운데 가장 작은 것이 $1/42$ 이므로, 공부피가 유한한 Fuchs 군의 공부피는 $\pi/21$ 이상이다[^1].

## 닫힌 곡면

꼬임이 없고 몫이 콤팩트한 Fuchs 군의 몫은 종수 $g\ge 2$ 인 닫힌 곡면이고 넓이는 $4\pi(g-1)$ 이다. 거꾸로 종수 $g\ge 2$ 인 닫힌 곡면은 모두 이렇게 얻어지며, 그 Fuchs 군은 곡면의 기본군과 동형이다. 쌍곡평면에서 내각이 모두 $\pi/4$ 인 정팔각형의 마주 보는 변을 붙이는 변환들이 종수 $2$ 곡면의 Fuchs 군을 생성한다는 것은 [Poincaré 다각형 정리](poincare-polygon-theorem.md)로 증명된다.

# 활용

- [Teichmüller 공간](teichmuller-space.md): 종수 $g$ 곡면의 쌍곡 구조는 기본군을 Fuchs 군으로 보내는 표현의 켤레류로 적히고, 그 공간이 Teichmüller 공간이다.
- [Selberg 대각합 공식](selberg-trace-formula.md): 공부피가 유한한 Fuchs 군의 몫 위에서 Laplace 고윳값의 합을 쌍곡형 원소의 켤레류, 곧 닫힌 측지선의 길이로 적는다.
- [격자 부분군](lattice-subgroups.md): 공부피가 유한한 Fuchs 군은 $\mathrm{PSL}\_2(\mathbb R)$ 의 격자 부분군이다.
- [Klein 사차곡선](klein-quartic.md): 공부피 $\pi/21$ 인 $\Delta(2,3,7)$ 의 지수 $168$ 인 꼬임 없는 정규부분군의 몫이고, 넓이는 $168\pi/21=8\pi=4\pi(3-1)$ 이다.

[^1]: S. Katok, *Fuchsian Groups*, University of Chicago Press, 1992, Ch. 2 와 Ch. 4.

# 연관 문서

## 선수지식

- [쌍곡평면](hyperbolic-plane.md)
- [군 작용](group-actions.md)

## 더 알아보기

- [Poincaré 다각형 정리](poincare-polygon-theorem.md)

#differential_geometry #group_theory #complex_analysis
