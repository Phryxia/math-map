# Ricci 솔리톤

# 개요

[Ricci 흐름](ricci-flow.md)은 유한 시간에 곡률이 발산하며 끊긴다. 특이점의 모양을 보려면 곡률이 커지는 자리를 확대해 극한을 잡는다.

Ricci 솔리톤은 그 확대에 대해 변하지 않는 해다. 계량이 흐름을 따라 크기 변환과 미분동형사상으로만 움직이고, 특이점을 확대한 극한이 이 꼴로 나타난다.

# 직관

둥근 구에서 흐름은 $g(t)=\bigl(r_0^2-2(n-1)t\bigr)g_1$ 이고 $T=r_0^2/2(n-1)$ 에서 끊긴다. 특이점 근처를 배율 $\lambda$ 로 확대한다. 곡률이 $\lambda$ 배 커지는 자리를 보는 것이므로 길이를 $\lambda$ 배, 시간을 $\lambda$ 배로 늘려 잰다.

$$
g\_\lambda(s)=\lambda\thinspace g(T+s/\lambda)
$$

오른쪽을 계산하면 $r_0^2-2(n-1)T=0$ 이므로 다음이 나온다.

$$
g\_\lambda(s)=\lambda\cdot\Bigl(-2(n-1)\frac{s}{\lambda}\Bigr)g_1=-2(n-1)\thinspace s\thinspace g_1\qquad(s\lt 0)
$$

배율 $\lambda$ 가 식에서 사라졌다. 어떤 배율로 확대해도 같은 해가 나오므로 확대열의 극한이 둥근 구 자신이다.

확대에 변하지 않는 해를 식으로 적는다. 크기를 $\sigma(t)$ 배 하고 미분동형사상 $\varphi_t$ 로 옮긴 것이 흐름의 해라고 두면 $g(t)=\sigma(t)\thinspace\varphi_t^\ast g_0$ 다. $\varphi_t$ 의 생성 벡터장을 $X$ 라 하고 $t=0$ 에서 양변을 미분하면 왼쪽은 $\sigma'(0)g_0+\mathcal L\_Xg_0$ 이고, 오른쪽은 $\mathrm{Ric}$ 이 크기 변환에 변하지 않으므로 $-2\mathrm{Ric}(g_0)$ 이다. 두 식을 맞추면 시간이 사라진 방정식 하나가 남는다.

# 정의

## Ricci 솔리톤

Riemann 다양체 $(M,g)$ 와 벡터장 $X$, 상수 $\lambda$ 가 다음을 만족하면 **Ricci 솔리톤**이라 한다.

$$
\mathrm{Ric}(g)+\tfrac12\mathcal L\_Xg=\lambda g
$$

$\mathcal L\_X$ 는 $X$ 를 따른 [Lie 미분](lie-derivative.md)이다. $\lambda\gt 0$ 이면 **수축 솔리톤**, $\lambda=0$ 이면 **정상 솔리톤**, $\lambda\lt 0$ 이면 **확장 솔리톤**이라 한다.

## 경사 솔리톤

$X=\nabla f$ 인 솔리톤을 **경사 Ricci 솔리톤**이라 하고, 이때 방정식이 함수 하나에 대한 식이 된다.

$$
\mathrm{Ric}(g)+\nabla^2f=\lambda g
$$

$f$ 를 **퍼텐셜 함수**라 한다. $X=0$ 인 솔리톤은 $\mathrm{Ric}=\lambda g$ 이므로 Einstein 계량이고, Einstein 계량은 모든 솔리톤 유형의 특수한 경우다.

# 성질

## 자기상사해

$(g_0,X,\lambda)$ 가 Ricci 솔리톤이면 $X$ 가 생성하는 미분동형사상 $\varphi_t$ 로 다음이 Ricci 흐름의 해다.

$$
g(t)=(1-2\lambda t)\thinspace\varphi_t^\ast g_0
$$

수축 솔리톤은 $t=1/2\lambda$ 에서 끊기고, 정상 솔리톤은 모든 시간에 존재하며, 확장 솔리톤은 영원히 퍼진다. 거꾸로 흐름의 해가 크기 변환과 미분동형사상으로만 변하면 각 시각의 계량이 솔리톤 방정식을 만족한다.

## 콤팩트 솔리톤

콤팩트 다양체 위의 Ricci 솔리톤은 경사 솔리톤이다[^1]. 콤팩트 정상 솔리톤은 $\mathrm{Ric}=0$ 이고 콤팩트 확장 솔리톤은 Einstein 계량이다.

증명의 요지. 두 경우 모두 솔리톤 방정식의 대각합을 취해 얻은 식을 다양체 전체에서 적분한다. 정상 솔리톤에서는 $\Delta f=-R$ 과 $R+\vert\nabla f\vert^2$ 가 상수라는 항등식이 나오고, 적분이 $\int\vert\nabla f\vert^2=0$ 을 주어 $f$ 가 상수가 된다. 확장 솔리톤에서는 $R$ 의 최솟값에 대한 최대원리가 같은 결론을 준다. 수축의 경우 이 논법이 통하지 않고, Einstein 이 아닌 콤팩트 수축 솔리톤이 4 차원에서 존재한다[^2].

## 엔트로피의 임계점

Perelman 의 $\mathcal W$ 엔트로피는 Ricci 흐름을 따라 비감소이고, 그 값이 변하지 않는 계량이 수축 경사 솔리톤이다[^3]. 이 성질 때문에 특이점을 확대한 극한이 솔리톤으로 나온다. 확대열은 곡률이 균등하게 유계인 쪽으로 잡고, 비국소 붕괴 정리가 그 열의 콤팩트성을 준다.

## 알려진 예

| 솔리톤 | 유형 | 비고 |
| --- | --- | --- |
| 둥근 구면 $S^n$ | 수축 | $X=0$, Einstein |
| 원통 $S^{n-1}\times\mathbb R$ | 수축 | 축 방향으로 $X=0$, 목 특이점의 모형 |
| Gauss 솔리톤 $\mathbb R^n$ | 수축, 확장 | 평탄한 계량과 $f=\lambda\vert x\vert^2/2$ |
| 담배 솔리톤 | 정상 | $\mathbb R^2$ 에 $g=(dx^2+dy^2)/(1+x^2+y^2)$, 곡률이 원점에서 최대이고 무한에서 $0$ |
| Bryant 솔리톤 | 정상 | $n\ge 3$ 의 회전대칭 해, 거리 $\rho$ 에서 곡률이 $\rho^{-1}$ 크기 |

담배 솔리톤은 2 차원에서만 있고, 3 차원 이상의 정상 솔리톤 가운데 회전대칭인 것이 Bryant 솔리톤이다.

# 활용

- **특이점의 분류.** 3 차원 Ricci 흐름의 특이점을 확대하면 둥근 구면, 원통, Bryant 솔리톤 가운데 하나가 나온다. [기하화 정리](geometrization.md)의 수술이 이 목록을 써서 어디를 자르고 무엇을 붙일지 정한다.
- **수술의 기준.** 곡률이 임계값을 넘은 자리의 모양을 원통 솔리톤과 비교해 목을 찾고, 그 자리를 잘라 둥근 모자를 붙인다. 붙인 뒤의 계량이 다시 흐름의 가정을 만족하는지를 솔리톤 모형과의 근접성으로 판정한다.
- **Kähler 다양체의 표준 계량.** Kähler 계량에 솔리톤 방정식을 쓰면 복소구조와 맞는 해가 나오고, Kähler–Einstein 계량이 없는 Fano 다양체에서 그 자리를 Kähler–Ricci 솔리톤이 맡는다.
- **극한의 존재 판정.** 흐름의 장시간 거동을 볼 때 확대 극한이 솔리톤이라는 것이 곡률 추정을 기하 조건으로 바꾼다. 평균곡률 흐름에서도 자기상사해가 같은 자리를 맡는다.

[^1]: Grisha Perelman, "The entropy formula for the Ricci flow and its geometric applications", arXiv:math/0211159, 2002, §1.1 의 따름정리.

[^2]: Huai-Dong Cao, "Existence of gradient Kähler–Ricci solitons", in *Elliptic and Parabolic Methods in Geometry*, A K Peters, 1996, 1–16. Koiso 가 같은 시기에 독립적으로 구성했다.

[^3]: Grisha Perelman, 위 논문 §3. 수술을 포함한 증명의 정리된 서술은 John Morgan, Gang Tian, *Ricci Flow and the Poincaré Conjecture*, American Mathematical Society, 2007 이다.

# 연관 문서

## 선수지식

- [Ricci 흐름](ricci-flow.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #topology
