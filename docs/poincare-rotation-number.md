# Poincaré 회전수

# 개요

**Poincaré 회전수(Poincaré rotation number)** 는 원을 돌리는 사상을 여러 번 적용했을 때 한 번에 평균 몇 바퀴 도는지를 나타내는 수다. 시계 바늘을 매번 정확히 $0.3$ 바퀴 돌리면 답은 $0.3$ 이지만, 바늘이 있는 자리에 따라 조금 더 또는 덜 돌리면 한 번에 도는 양이 자리마다 다르다. 회전수는 이런 사상을 $n$ 번 적용한 누적 회전량을 $n$ 으로 나눈 극한으로 정하고, 이 값이 유리수인지 [무리수](irrational-numbers.md)인지로 점이 제자리로 돌아오는 궤도가 있는지를 가른다.

# 직관

Poincaré 회전수는 원의 방향 보존 위상동형사상이 한 번 적용될 때 원을 평균 몇 바퀴 도는지 재는 수다. Poincaré 가 1885 년에 도입했다.[^1]

회전수가 유리수이면 주기 궤도가 있고, 무리수이면 궤도의 순서가 같은 각의 회전의 궤도와 같다. 무리수 회전의 궤도가 원 위에 고르게 퍼진다는 것은 [에르고딕 정리](ergodic-theorem.md)의 예다. 정의에는 원을 실직선으로 펴는 [덮개공간](covering-spaces.md)의 올림을 쓴다.

원을 둘레가 $1$ 인 구간 $\lbrack 0,1)$ 의 양 끝을 붙인 것으로 본다. 회전 $x\mapsto x+\alpha$ 는 한 번에 $\alpha$ 바퀴를 돈다. $f(x)=x+\alpha+\frac{\varepsilon}{2\pi}\sin 2\pi x$ 는 $\vert\varepsilon\vert\lt 1$ 이면 점의 순서를 지키며 원을 돌리지만, 점마다 움직이는 양 $\alpha+\frac{\varepsilon}{2\pi}\sin 2\pi x$ 가 다르다. 한 번에 몇 바퀴 도는지를 한 수로 말할 수 없으므로 많이 적용한 뒤의 평균을 잰다.

원 위에서는 $0.3$ 과 $1.3$ 이 같은 점이라 이동량을 더할 수 없다. 그래서 같은 식 $F(x)=x+\alpha+\frac{\varepsilon}{2\pi}\sin 2\pi x$ 를 실직선 위의 함수로 보고 $F^n(x)-x$ 를 잰다. 이 값을 $n$ 으로 나눈 평균이 $n\to\infty$ 에서 수렴하고, 그 극한은 시작점 $x$ 에 따라 바뀌지 않는다. $F$ 는 증가함수이고 $F(x+1)=F(x)+1$ 이므로, $0\le y-x\lt 1$ 이면 $F^n(x)\le F^n(y)\lt F^n(x)+1$ 이어서 두 점의 누적 이동량이 $1$ 이상 벌어지지 않는다.

# 정의

## 올림

$S^1=\mathbb R/\mathbb Z$ 의 방향 보존 위상동형사상 $f$ 에 대해, 증가하는 연속함수 $F\colon\mathbb R\to\mathbb R$ 가 $F(x+1)=F(x)+1$ 이고 $F(x)\bmod 1=f(x\bmod 1)$ 을 만족하면 $F$ 를 $f$ 의 **올림(lift)** 이라 한다. 두 올림은 정수 상수만큼 다르다.

## 회전수

올림 $F$ 의 **회전수(rotation number)** 는

$$
\rho(F)=\lim_{n\to\infty}\frac{F^n(x)-x}{n}
$$

이다. 극한은 존재하고 $x$ 와 무관하다. $f$ 의 회전수는 $\rho(f)=\rho(F)\bmod 1$ 이고 올림의 선택과 무관하다. 회전 $R_\alpha(x)=x+\alpha$ 는 $\rho(R_\alpha)=\alpha\bmod 1$ 이다.

존재의 증명은 $a_n=F^n(0)$ 이 $a_m+a_n-1\lt a_{m+n}\lt a_m+a_n+1$ 을 만족한다는 데서 나온다. $a_n+1$ 은 부분가법성(subadditivity)을 만족하므로 [Fekete 보조정리](fekete-lemma.md)로 $a_n/n$ 이 수렴한다. 직관 절의 부등식으로 극한이 $x$ 에 무관하다.

# 성질

## 공액 불변성

방향 보존 위상동형사상 $h$ 에 대해 $\rho(h\circ f\circ h^{-1})=\rho(f)$ 다. 따라서 회전수는 위상 공액의 불변량이다. $f\mapsto\rho(f)$ 는 $C^0$ 위상에서 연속이다.

## Poincaré 분류

> **정리 (Poincaré).** $\rho(f)=p/q$ 가 기약분수인 유리수인 것과 $f$ 가 주기 $q$ 인 궤도를 갖는 것은 동치다. 이때 모든 주기 궤도의 주기는 $q$ 다.

> **정리 (Poincaré).** $\rho(f)=\alpha$ 가 무리수이면, 단조 증가하고 연속이며 차수가 $1$ 인 사상 $h\colon S^1\to S^1$ 이 존재해 $h\circ f=R_\alpha\circ h$ 를 만족한다. $f$ 의 궤도 하나가 원 위에서 조밀하면 $h$ 는 위상동형사상이고 $f$ 는 $R_\alpha$ 와 위상 공액이다.

증명의 요지. 무리수 $\alpha$ 에서는 한 궤도 $f^n(x_0)$ 의 원 위 순서가 $n\alpha\bmod 1$ 의 순서와 같다. $h(f^n(x_0))=n\alpha\bmod 1$ 로 정하면 순서를 지키는 함수가 되고, 그 폐포로 연장하면 $h$ 가 나온다.

## 유일 에르고딕성

$\rho(f)$ 가 무리수이면 $f$ 를 보존하는 확률측도 $\mu$ 가 하나뿐이고 $\rho(F)=\int\_0^1(F(x)-x)\thinspace d\mu(x)$ 다. 측도가 하나뿐인 변환을 **유일 에르고딕(uniquely ergodic)** 이라 한다. 직관 절의 평균 이동량은 이 측도에 대한 공간평균이다.

## Denjoy 정리

> **정리 (Denjoy 1932).** $f$ 가 $C^1$ 미분동형사상이고 $\log f'$ 이 유계변동이며 $\rho(f)$ 가 무리수이면, $f$ 는 $R_{\rho(f)}$ 와 위상 공액이다.[^2]

$C^2$ 미분동형사상은 조건을 만족한다. 증명의 요지는 궤도가 조밀하지 않을 때 생기는 **방황 구간(wandering interval)**, 곧 상들이 서로 겹치지 않는 구간 $I$ 를 배제하는 것이다. 겹치지 않으므로 길이 $\vert f^n(I)\vert$ 의 합이 $1$ 이하인데, 유계변동 조건이 $(f^n)'$ 의 비를 유계로 묶어, $\rho(f)$ 의 [연분수](continued-fractions.md) 수렴분 분모 $n=q_k$ 에서 $\vert f^n(I)\vert+\vert f^{-n}(I)\vert$ 가 $0$ 으로 가지 못하게 한다.

Denjoy 는 $C^1$ 미분동형사상 가운데 회전수가 무리수이고 방황 구간을 갖는 예도 만들었다. $R_\alpha$ 의 한 궤도의 각 점에 길이의 합이 유한한 구간을 끼워 넣어 만든다. 따라서 $C^1$ 에서는 정리가 성립하지 않는다.

## 매끄러운 공액

Denjoy 정리의 공액 $h$ 는 위상동형사상일 뿐이다. $h$ 가 매끄러운지는 회전수의 [Diophantine 근사](diophantine-approximation.md) 성질에 달려 있다.

> **정리 (Herman 1979, Yoccoz 1984).** $f$ 가 $C^\infty$ 미분동형사상이고 $\rho(f)$ 가 Diophantine 수이면 $f$ 는 $R_{\rho(f)}$ 와 $C^\infty$ 공액이다.[^3]

Herman 은 측도가 $1$ 인 Diophantine 수의 집합에서, Yoccoz 는 모든 Diophantine 수에서 증명했다. Arnold 는 1961 년에 회전에 가까운 해석적 미분동형사상에서 같은 결론을 얻었다. 공액 방정식의 Fourier 계수에 $e^{2\pi ik\rho}-1$ 꼴의 작은 분모가 나오고, [Siegel 선형화 정리](siegel-linearization.md)와 같은 방식으로 다룬다.

# 활용

## 모드 고정

족 $f\_{a,b}(x)=x+a+\frac{b}{2\pi}\sin 2\pi x$ 에서 $0\lt b\lt 1$ 을 고정하면 $a\mapsto\rho(f\_{a,b})$ 는 연속이고 단조 증가한다. 각 유리수 $p/q$ 에서 $\rho=p/q$ 인 $a$ 의 집합은 내부가 있는 구간이고, $(a,b)$ 평면에서 이 구간들이 이루는 영역을 **Arnold 혀(Arnold tongue)** 라 한다. 주기적으로 밀리는 진동자가 외부 진동수에 맞춰 고정되는 현상이 이 구간이다.

## 원판과 환의 회전 영역

Herman 은 같은 논문에서 해석적 미분동형사상의 해석적 공액도 다뤘고, 이것으로 [Fatou 성분의 분류](fatou-components.md)의 Herman 환이 존재함을 보였다. 단위원을 보존하는 Blaschke 곱 $f(z)=e^{2\pi it}z^2(z-a)/(1-\bar az)$ 는 $\vert a\vert$ 가 크면 원 위에서 해석적 미분동형사상이다. 그 회전수가 Diophantine 수가 되도록 $t$ 를 고르면 원 위의 해석적 공액이 원을 포함하는 환으로 연장되고, 그 환이 Herman 환 안에 들어간다.

## 토러스 위의 흐름

2 차원 토러스 위의 방향장의 흐름에서 닫힌 곡선 하나를 가로지르는 첫 귀환 사상은 원 위상동형사상이다. 흐름이 $C^2$ 이고 평형점이 없으며 첫 귀환 사상의 회전수가 무리수이면, Denjoy 정리로 모든 궤도가 토러스에서 조밀하다. Poincaré 가 회전수를 도입한 것이 이 문제다.

[^1]: H. Poincaré, "Sur les courbes définies par les équations différentielles (quatrième partie)", *Journal de Mathématiques Pures et Appliquées* (4) 1 (1885), 167–244. 이 문서의 정리 전체의 서술은 A. Katok, B. Hasselblatt, *Introduction to the Modern Theory of Dynamical Systems*, Cambridge University Press (1995), 11–12 장.

[^2]: A. Denjoy, "Sur les courbes définies par les équations différentielles à la surface du tore", *Journal de Mathématiques Pures et Appliquées* (9) 11 (1932), 333–375.

[^3]: M. R. Herman, "Sur la conjugaison différentiable des difféomorphismes du cercle à des rotations", *Publications Mathématiques de l'IHÉS* 49 (1979), 5–233. J.-C. Yoccoz, "Conjugaison différentiable des difféomorphismes du cercle dont le nombre de rotation vérifie une condition diophantienne", *Annales Scientifiques de l'École Normale Supérieure* (4) 17 (1984), 333–359.

# 연관 문서

## 선수지식

- [덮개공간](covering-spaces.md)
- [에르고딕 정리](ergodic-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology #measure_theory #number_theory
