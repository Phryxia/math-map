# Castelnuovo 유리성 판정법

# 개요

**Castelnuovo 유리성 판정법(Castelnuovo's rationality criterion)** 은 매끄러운 사영 곡면이 사영평면과 쌍유리 동치인지를 정칙 형식의 개수 두 개로 판정하는 정리다. 곡선은 정칙 미분이 하나도 없으면 사영직선과 같은데, 곡면에서는 정칙 $1$ 형식과 정칙 $2$ 형식이 모두 없어도 사영평면과 다른 [Enriques 곡면](enriques-surfaces.md)이 있다.

Castelnuovo 판정법은 정칙 $2$ 형식 대신 $2$ 형식 두 개를 곱한 대상의 개수 $P_2$ 를 보면 이 구별이 정확해진다고 답한다.

# 직관

곡선에서는 Lüroth 정리(Lüroth's theorem)와 종수로 판정이 끝난다. 종수 $0$ 곡선은 사영직선과 같고, 사영직선이 곡선 위로 가는 사상이 있으면 정칙 미분을 당겨 보아 그 곡선의 종수도 $0$ 이다.

곡면에서 같은 판정을 세우려고 정칙 $1$ 형식의 공간의 차원 $q$ 와 정칙 $2$ 형식의 공간의 차원 $p_g$ 를 본다. 사영평면은 $q=p_g=0$ 이다. 그러나 Enriques 곡면도 $q=p_g=0$ 이고, $2$ 형식 두 개의 곱으로 된 대상은 어디서도 $0$ 이 되지 않는 것이 하나 있어 $P_2=1$ 이다. 사영평면은 표준다발이 $\mathcal O(-3)$ 이라 $P_2=0$ 이므로, $P_2$ 가 두 곡면을 가른다.

# 정의

매끄러운 사영 곡면 $X$ 가 사영평면과 쌍유리 동치일 때 $X$ 를 **유리곡면(rational surface)** 이라 한다. $q(X)=h^0(\Omega^1\_X)$ 는 정칙 $1$ 형식의 공간의 차원이고, $P_2(X)$ 는 [Kodaira 차원](kodaira-dimension.md) 문서의 다중종수 $h^0(K_X^{\otimes 2})$ 다.

사영평면에서 $X$ 로 가는 지배적인 유리사상이 있으면 $X$ 를 **단유리(unirational)** 곡면이라 한다.

# 성질

## 판정법

정리. 복소수 위의 매끄러운 사영 곡면 $X$ 가 유리곡면일 필요충분조건은 $q(X)=P_2(X)=0$ 이다[^1].

유리곡면이면 $q$ 와 $P_2$ 는 쌍유리 불변량이므로 사영평면의 값 $0$ 과 같다.

거꾸로의 방향을 곡면 분류로 확인하면 다음과 같다. Kodaira 차원이 $0$ 이상인 극소 곡면 가운데 $q=0$ 인 것은 [K3 곡면](k3-surfaces.md), Enriques 곡면, Kodaira 차원 $1$ 이나 $2$ 의 곡면이고 모두 $P_2\ge 1$ 이다. 그러므로 $q=P_2=0$ 이면 Kodaira 차원이 $-\infty$ 이고, $X$ 는 종수 $q=0$ 인 곡선 위의 [선직곡면](ruled-surfaces.md), 곧 유리곡면이다. Castelnuovo 의 원래 증명은 분류를 쓰지 않고, 거꾸로 분류의 출발점이 되었다.

## 단유리 곡면

따름정리. 복소수 위의 단유리 곡면은 유리곡면이다.

증명의 요지. 지배적인 유리사상 $\mathbb{CP}^2\dashrightarrow X$ 로 $X$ 의 정칙 $1$ 형식과 $K_X^{\otimes 2}$ 의 단면을 당기면, 사영평면 위의 같은 종류의 대상이 되고 당기는 사상은 단사다. 사영평면에는 그런 것이 없으므로 $q(X)=P_2(X)=0$ 이고, 판정법으로 $X$ 는 유리곡면이다.

## 두 조건의 예

- $q=0$ 이지만 $P_2\ne 0$ 인 예. Enriques 곡면은 $q=p_g=0$, $P_2=1$ 이다.
- $P_2=0$ 이지만 $q\ne 0$ 인 예. 종수 $1$ 곡선과 사영직선의 곱은 Kodaira 차원이 $-\infty$ 라 모든 $P_m$ 이 $0$ 이지만 $q=1$ 이고, 유리곡면이 아니다.

# 활용

- 곡면의 분류. Kodaira 차원이 $-\infty$ 인 곡면이 유리곡면이거나 선직곡면이라는 Enriques 정리의 증명에 이 판정법을 쓴다.
- Lüroth 문제. 단유리이면 유리인가라는 물음이 곡면에서는 긍정이다. $3$ 차원에서는 삼차 삼중체(cubic threefold)가 단유리이지만 유리가 아니다. [Prym 다양체](prym-varieties.md)로 만든 중간 Jacobi 다양체가 그 증명에 쓰인다.
- 표수 $p$ 에서는 따름정리가 성립하지 않는다. 비분리 사상으로 단유리인 Zariski 곡면(Zariski surface) 가운데 유리곡면이 아닌 것이 있다.

[^1]: A. Beauville, *Complex Algebraic Surfaces*, 2nd ed., London Mathematical Society Student Texts 34, Cambridge University Press, 1996, Chapter V.

# 연관 문서

## 선수지식

- [Kodaira 차원](kodaira-dimension.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis
