# Donaldson 불변량

# 개요

**Donaldson 불변량(Donaldson invariant)** 은 매끄러운 $4$ 다양체에 순간자 모듈라이 공간의 교차수로 붙이는 수들이다. 두 매끄러운 $4$ 다양체가 위상적으로 같아서 구멍의 개수와 곡면끼리 만나는 횟수가 모두 일치해도, 매끄러운 구조까지 같은지는 이 정보로 가를 수 없다. 다양체 위에서 곡률 방정식을 풀어 그 해들의 공간에서 교차수를 세면, 그 수가 다른 두 다양체는 미분동형이 아니다.

# 직관

[Freedman 정리](freedman-theorem.md)는 닫힌 단연결 $4$ 차원 위상다양체를 [교차형식](intersection-form.md)으로 분류한다. 그러면 교차형식이 같은 두 매끄러운 $4$ 다양체는 미분동형인가. 호몰로지와 교차형식은 둘에서 같으므로 이 물음에 답을 주지 않는다.

그래서 다양체의 미분기하 자료로 수를 만든다. $X$ 위의 [주다발](principal-bundles.md)을 하나 고정하고 그 접속 가운데 곡률의 자기쌍대 부분이 영인 것들을 모아 게이지 변환으로 나눈다. 이 모듈라이 공간은 [Riemann 계량](riemannian-metrics.md)을 써서 정의되므로 계량에 의존해 보이지만, 두 계량을 잇는 경로가 두 모듈라이 공간 사이의 [코보디즘](cobordism.md)을 주므로 모듈라이에서 읽은 교차수는 계량과 무관하다. 그 수가 매끄러운 구조의 불변량이다.

# 정의

## 반자기쌍대 접속

$X$ 를 닫힌 유향 Riemann $4$ 다양체, $P\to X$ 를 $\mathrm{SU}(2)$ 주다발이라 한다. $2$ 형식의 공간은 Hodge 별작용소(Hodge star operator) $\star$ 의 고윳값 $+1$ 과 $-1$ 에 따라 자기쌍대(self-dual) 부분 $\Omega^+$ 와 반자기쌍대(anti-self-dual) 부분 $\Omega^-$ 로 갈린다. $\mathbb R^4$ 에서 $\star(dx_1\wedge dx_2)=dx_3\wedge dx_4$ 이므로 $dx_1\wedge dx_2+dx_3\wedge dx_4$ 는 자기쌍대이고 $dx_1\wedge dx_2-dx_3\wedge dx_4$ 는 반자기쌍대다.

[접속](connection.md) $A$ 의 곡률 $F_A$ 도 $F_A=F_A^++F_A^-$ 로 갈린다. 조건

$$
F_A^+=0
$$

을 만족하는 접속을 **반자기쌍대 접속(anti-self-dual connection)** 또는 **순간자(instanton)** 라 한다. $S^4$ 의 표준 계량에서 $k=1$ 인 순간자는 곡률이 한 점 근처에 모인 접속으로, 중심점 하나와 퍼진 정도를 나타내는 양수 하나로 정해진다.

## 순간자 모듈라이 공간

**순간자 모듈라이 공간(instanton moduli space)** $\mathcal M_k$ 는 $P$ 의 두 번째 Chern 수(second Chern number)가 $k$ 일 때 반자기쌍대 접속 전체를 게이지 변환군(gauge group)으로 나눈 공간이다. 일반적 계량에서 $\mathcal M_k$ 는 가약 접속(reducible connection)의 상을 뺀 부분이 매끄러운 다양체이고 그 차원은

$$
\dim\mathcal M_k=8k-3\big(1-b_1(X)+b_2^+(X)\big)
$$

이다. 여기서 $b_2^+$ 는 교차형식의 양의 고윳값 개수다.

$S^4$ 에서는 $b_1=b_2^+=0$ 이므로 $\dim\mathcal M_1=8-3=5$ 이고, $\mathcal M_1$ 은 앞의 중심점 $4$ 개 좌표와 퍼진 정도 $1$ 개로 매개되는 열린 $5$ 차원 공이다. $K3$ 곡면(K3 surface)에서는 $b_1=0$, $b_2^+=3$ 이므로 $\dim\mathcal M_k=8k-12$ 다.

## Donaldson 불변량

$\Sigma\in H_2(X;\mathbb Z)$ 마다 $\mathcal M_k$ 의 $2$ 차 코호몰로지류 $\mu(\Sigma)$ 가 대응한다. $d=\dim\mathcal M_k/2$ 일 때

$$
D_X(\Sigma_1,\dots,\Sigma_d)=\big\langle\mu(\Sigma_1)\cdots\mu(\Sigma_d),\lbrack\mathcal M_k\rbrack\big\rangle
$$

이 **Donaldson 불변량**이다. $K3$ 곡면에서 $k=2$ 이면 $\dim\mathcal M_2=4$ 이고 $d=2$ 이므로, $D_X$ 는 $2$ 차 호몰로지류 두 개를 받는 함수다.

# 성질

## 계량 무관성

$b_2^+(X)\gt 1$ 이면 $D_X$ 의 값은 계량에 의존하지 않고, 방향을 보존하는 미분동형의 불변량이다. 두 계량을 잇는 경로를 따라 모듈라이 공간을 모으면 코보디즘이 되고, $b_2^+\gt 1$ 이면 일반적인 경로가 가약 접속을 만나지 않는다.

순간자는 Yang–Mills 작용(Yang–Mills functional) $\int_X\vert F_A\vert^2$ 의 최솟값을 준다. 이 작용은 [Yang–Mills 이론](yang-mills-theory.md)의 작용이고, 그 값은 $8\pi^2k$ 이상이며 등호가 $F_A^+=0$ 에서 성립한다.

## 대각화 정리

$X$ 가 닫힌 단연결 매끄러운 $4$ 다양체이고 교차형식이 음정부호이면 그 형식은 정수 기저에서 $-1$ 의 대각행렬이다. 이것이 Donaldson 대각화 정리(Donaldson's diagonalization theorem)다.[^1]

$b_1=0$ 이고 $b_2^+=0$ 이므로 $k=1$ 에서 $\dim\mathcal M_1=5$ 다. 이 공간은 콤팩트하지 않아 두 종류의 끝을 갖는다. 곡률이 한 점에 집중되는 끝에서 $X$ 자신이 나타나고, 접속이 두 선다발로 갈리는 자리마다 특이점이 하나씩 생기며 그 개수는 자기교차수 $-1$ 인 류의 쌍 $\pm e$ 의 개수다. 두 끝을 떼면 $X$ 와 특이점 근방의 복소사영평면 여러 개 사이의 코보디즘이 남고, 부호수를 세면 자기교차수 $-1$ 인 류 $e_1,\dots,e_{b_2}$ 가 직교기저임이 나온다. 방향을 뒤집으면 양정부호 형식이 항등행렬로 대각화되는 진술이 된다.

이 정리와 Freedman 정리를 합치면 매끄러운 구조를 갖지 않는 위상 $4$ 다양체가 나온다. $E_8$ 을 교차형식으로 갖는 위상다양체가 Freedman 정리로 존재하고, $E_8$ 은 정부호이면서 대각행렬이 아니므로 그 다양체에는 매끄러운 구조가 없다.

## 소실 정리

$X=X_1\char35 X_2$ 이고 $b_2^+(X_1)\gt 0$, $b_2^+(X_2)\gt 0$ 이면 $X$ 의 Donaldson 불변량이 모두 영이다. 이것이 Donaldson 소실 정리(vanishing theorem)다.[^1]

연결합의 목에서 계량을 늘이면 모듈라이의 기여가 사라진다. 따라서 Donaldson 불변량이 영이 아닌 다양체는 그런 연결합으로 쪼개지지 않는다. 대수곡면이 그런 예이고, 불변량의 비소실이 쪼개지지 않음의 증명 도구가 된다.

## 미분동형이 아닌 위상동형 짝

Freedman 정리로 위상동형인 두 매끄러운 다양체에서 Donaldson 불변량이 다르면 미분동형이 아니다. Dolgachev 곡면(Dolgachev surface)들과 유리곡면(rational surface)의 짝이 그 예이며, 교차형식만으로는 가려지지 않는 차이를 불변량이 가른다.

## Seiberg–Witten 불변량과의 관계

반자기쌍대 방정식의 모듈라이는 콤팩트하지 않아 끝의 분석이 필요하다. [Seiberg–Witten 이론](seiberg-witten-theory.md)의 방정식은 모듈라이 공간이 콤팩트하므로 끝의 분석이 필요 없고, 대각화 정리와 소실 정리가 Seiberg–Witten 불변량으로도 증명된다. 두 불변량을 생성함수의 등식으로 잇는 진술이 Witten 추측(Witten's conjecture)이다.

# 활용

- 매끄러운 $4$ 다양체의 교차형식으로 가능한 정부호 형식은 대각형뿐이다. 교차형식의 분류에서 위상다양체와 매끄러운 다양체가 이 조건으로 갈린다.
- $\mathbb R^4$ 에 표준 구조와 미분동형이 아닌 매끄러운 구조가 있고, 이것을 이색 $\mathbb R^4$(exotic $\mathbb R^4$)라 한다. 대각화 정리로 어떤 콤팩트 조각이 매끄럽게 매장될 수 없음을 보이고, Freedman 정리로 위상적 매장을 만들어 둘을 대비한다.
- 복소대수곡면을 매끄러운 $4$ 다양체로 볼 때 불변량이 복소구조의 자료를 담는다. 소실 정리가 곡면이 연결합으로 쪼개지지 않음을 준다.
- $X$ 를 $3$ 다양체를 따라 둘로 자르면 불변량이 두 조각의 상대 불변량으로 적힌다. 그 상대 불변량을 다루는 이론이 [순간자 Floer 호몰로지](instanton-floer-homology.md)다.

[^1]: S. K. Donaldson, P. B. Kronheimer, *The Geometry of Four-Manifolds*, Oxford University Press (1990). 대각화 정리가 제 8 장, 불변량의 정의와 소실 정리가 제 9 장이다.

# 연관 문서

## 선수지식

- [교차형식](intersection-form.md)
- [Yang–Mills 이론](yang-mills-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology #algebraic_topology
