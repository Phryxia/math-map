# Yamabe 문제

# 개요

**Yamabe 문제(Yamabe problem)** 는 Riemann 다양체의 거리를 점마다 다른 배율로 늘이거나 줄여, 스칼라 곡률을 어디서나 같게 만들 수 있는지 묻는 문제다. 곡면에서는 계량에 $e^{2f}$ 를 곱하면 Gauss 곡률이 $e^{-2f}(K-\Delta f)$ 로 바뀌므로, 이 값이 상수가 되는 함수 $f$ 를 찾으면 된다. $3$ 차원 이상에서도 같은 물음이 비선형 타원형 방정식 하나로 바뀌고, 그 방정식의 해가 언제나 존재함이 1984 년에 증명되었다.

# 직관

Yamabe 문제는 $n\ge 3$ 차원 콤팩트 Riemann 다양체 $(M,g)$ 가 주어졌을 때, $g$ 에 양의 함수를 곱한 계량 가운데 스칼라 곡률이 상수인 것이 존재하는지 묻는 문제다. 그런 계량은 언제나 존재하고, 증명은 Yamabe, Trudinger, Aubin, Schoen 의 연구로 1984 년에 완결되었다.

문제는 임계 Sobolev 지수를 가진 비선형 타원형 방정식 하나로 바뀐다. 지수가 임계여서 최소화열이 한 점으로 몰릴 수 있고, 몰리지 않음을 보이는 마지막 경우에 [양의 질량 정리](positive-mass-theorem.md)가 쓰인다.

곡면에서는 어떤 계량이든 양의 함수 $e^{2f}$ 를 곱해 Gauss 곡률이 상수인 계량으로 바꿀 수 있다. 계량 $e^{2f}g$ 의 Gauss 곡률은 $e^{-2f}(K-\Delta f)$ 이므로, 이 값이 상수가 되는 $f$ 를 찾는 것은 $f$ 에 대한 방정식 하나를 푸는 것이다.

$n\ge 3$ 차원에서 곡률을 상수로 맞추는 대상을 고른다. 계량에 함수를 곱하는 방법은 함수 하나만큼의 자유도를 주므로, 상수로 맞출 수 있는 것도 함수 하나인 스칼라 곡률이다. 곱하는 함수를 $u^{4/(n-2)}$ 꼴로 쓰면 바뀐 계량의 스칼라 곡률이 $u$ 의 이계 도함수와 $u$ 의 거듭제곱으로 적힌다.

곡면의 방정식과 달리 이 방정식의 거듭제곱 지수는 Sobolev 매장이 콤팩트성을 잃는 경계값이다. 단위구면에서 한 점을 향해 확대하는 등각변환은 스칼라 곡률이 상수인 계량을 같은 성질의 계량으로 보내면서 곱하는 함수를 그 점 근처로 몰리게 한다. 그래서 최소화로 해를 찾으면 최소화열이 이런 식으로 한 점에 몰려 극한이 사라질 수 있다.

# 정의

$(M,g)$ 를 $n\ge 3$ 차원 콤팩트 Riemann 다양체, $R$ 을 스칼라 곡률, $\Delta$ 를 Laplace–Beltrami 작용소라 한다. 양의 함수 $u$ 로 $\tilde g=u^{4/(n-2)}g$ 를 놓으면

$$
\tilde R=u^{-\frac{n+2}{n-2}}\bigl(-a\Delta u+Ru\bigr),\qquad a=\frac{4(n-1)}{n-2}
$$

이다. 따라서 $\tilde R$ 이 상수 $\lambda$ 인 것은 $u$ 가 **Yamabe 방정식**

$$
-a\Delta u+Ru=\lambda u^{p-1},\qquad p=\frac{2n}{n-2}
$$

을 만족하는 것과 같다. $p$ 는 [Sobolev 공간](sobolev-spaces.md)의 매장 $W^{1,2}\hookrightarrow L^p$ 가 성립하는 가장 큰 지수다.

Yamabe 방정식은 다음 범함수의 임계점 방정식이다.

$$
Q(u)=\frac{\int\_M\bigl(a\vert\nabla u\vert^2+Ru^2\bigr)dV}{\bigl(\int\_M u^p\thinspace dV\bigr)^{2/p}}
$$

$Q$ 의 하한 $Y(M,\lbrack g\rbrack)=\inf\_{u\gt 0}Q(u)$ 를 **Yamabe 불변량(Yamabe invariant)** 이라 한다. $g$ 에 양의 함수를 곱해도 $Y$ 는 바뀌지 않는다.

# 성질

## 콤팩트성의 상실

Rellich–Kondrachov 정리는 $q\lt p$ 일 때 $W^{1,2}\hookrightarrow L^q$ 가 콤팩트라는 것이고, $q=p$ 에서는 콤팩트가 아니다. 그래서 $Q$ 의 최소화열이 $W^{1,2}$ 에서 유계여도 $L^p$ 에서 수렴하는 부분열이 없을 수 있고, [변분법의 직접법](direct-method.md)이 바로 적용되지 않는다.

## Aubin 의 판정

**정리(Trudinger, Aubin).** 모든 $(M,g)$ 에서 $Y(M,\lbrack g\rbrack)\le Y(S^n)$ 이고, 부등호가 엄격하면 $Q$ 의 최소점이 존재하며 그것이 Yamabe 방정식의 매끄러운 양의 해다[^1].

여기서 $Y(S^n)=n(n-1)\thinspace\mathrm{vol}(S^n)^{2/n}$ 은 단위구면의 Yamabe 불변량이다. 최소화열이 한 점으로 몰리면 그 점 근처를 확대한 극한이 구면의 해와 같은 모양이 되어 $Q$ 의 값이 $Y(S^n)$ 이상이 된다. 그래서 $Y$ 가 $Y(S^n)$ 보다 작으면 몰릴 수 없다.

Aubin 은 $n\ge 6$ 이고 $M$ 이 국소적으로 등각 평탄하지 않으면 한 점의 Weyl 곡률이 $0$ 이 아님을 써서 $Q(u)\lt Y(S^n)$ 인 시험함수를 만들었다[^2].

## Schoen 의 완결

남은 경우는 $n=3,4,5$ 이거나 $M$ 이 국소적으로 등각 평탄한 경우다. Schoen 은 한 점 $p$ 에서 작용소 $-a\Delta+R$ 의 [Green 함수](greens-function.md) $G\_p$ 로 계량 $G\_p^{4/(n-2)}g$ 를 만들었다. 이 계량은 $M\setminus\lbrace p\rbrace$ 위에서 스칼라 곡률이 $0$ 이고 점근적으로 평탄하다. 그 질량이 양의 질량 정리로 양수이고, 질량이 $G\_p$ 의 전개에서 상수항으로 나타나므로 이것으로 $Q(u)\lt Y(S^n)$ 인 시험함수가 만들어진다. $M$ 이 구면과 등각이면 처음부터 해가 있다[^3].

# 활용

- **스칼라 곡률의 부호에 따른 분류.** $Y(M,\lbrack g\rbrack)$ 의 부호가 등각류 안에서 스칼라 곡률이 양, $0$, 음인 상수인 계량 가운데 어느 것이 있는지를 정한다. 그래서 어떤 다양체가 양의 스칼라 곡률 계량을 허용하는지는 Yamabe 불변량이 양인 등각류가 있는지와 같다.
- **곡면의 균일화와의 대응.** $2$ 차원에서 같은 문제는 모든 곡면의 계량이 상수 곡률 계량과 등각이라는 균일화 정리이고, [공간형](space-forms.md)의 곡면 분류가 그 결과를 쓴다.
- **임계 지수 문제의 본보기.** 몰림(bubbling)을 분석하고 에너지 문턱 아래에서 콤팩트성을 되찾는 방법이 조화사상, Yang–Mills 방정식 같은 다른 임계 변분 문제에 쓰인다.

[^1]: N. S. Trudinger, "Remarks concerning the conformal deformation of Riemannian structures on compact manifolds", *Annali della Scuola Normale Superiore di Pisa* 22 (1968), 265–274. T. Aubin, "Équations différentielles non linéaires et problème de Yamabe concernant la courbure scalaire", *Journal de Mathématiques Pures et Appliquées* 55 (1976), 269–296.
[^2]: J. M. Lee, T. H. Parker, "The Yamabe problem", *Bulletin of the American Mathematical Society* 17 (1987), 37–91. 문제 전체와 Aubin, Schoen 의 시험함수.
[^3]: R. Schoen, "Conformal deformation of a Riemannian metric to constant scalar curvature", *Journal of Differential Geometry* 20 (1984), 479–495.

# 연관 문서

## 선수지식

- [양의 질량 정리](positive-mass-theorem.md)
- [Sobolev 공간](sobolev-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis
