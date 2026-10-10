# VC 차원

# 개요

VC(Vapnik–Chervonenkis) 차원은 가설족이 표본 위에서 만들 수 있는 값 패턴이 모든 패턴에 닿는 가장 큰 표본 크기다. 이 수가 유한한 $d$ 이면 표본 크기 $n$ 의 패턴 개수가 $n^d$ 꼴로 묶이고, 무한하면 모든 $n$ 에서 $2^n$ 개가 나온다.

패턴 개수가 다항식인지 지수인지가 일반화 경계의 수렴을 가른다. VC 차원은 그 갈림을 수 하나로 재고, 표본과 분포에 의존하지 않는다.

# 직관

가설족이 무한히 많은 함수를 담고 있어도 표본 위의 값 패턴만 세면 일반화 경계가 나온다. [Rademacher 복잡도](rademacher-complexity.md)에서 문턱 분류기족의 패턴이 $n+1$ 개였고 경계에 $\sqrt{\log(n+1)/n}$ 이 들어갔다. 가설족마다 이 개수를 세야 하는가.

두 극단을 센다. 문턱족은 $n+1$ 개다. 표본점의 부분집합마다 가설을 하나 두는 족은 각 점에서 $0$ 과 $1$ 을 따로 정할 수 있어 $2^n$ 개다. 경계의 $\sqrt{\log(\text{패턴 개수})/n}$ 은 첫 경우 $0$ 으로 가고 둘째 경우 $\sqrt{\log 2}$ 에 머문다. 둘째 족에서는 훈련 자료에서 오차가 $0$ 인 가설을 늘 찾을 수 있고 새 자료에 대해 아무 말도 하지 못한다.

패턴 개수가 다항식과 지수 사이에 놓이는 경우는 없다. 개수가 $2^n$ 에 닿는 표본 크기의 최대값이 $d$ 로 유한하면 그보다 큰 모든 $n$ 에서 개수가 $\sum_{i\le d}\binom{n}{i}$ 이하다. $n$ 마다 개수를 세는 대신 $2^n$ 에 닿는 마지막 $n$ 하나만 찾으면 된다.

문턱족에서 그 수는 $1$ 이다. 점 하나 $x_1$ 에서는 문턱을 $x_1$ 보다 크게 잡아 $0$ 을, 작게 잡아 $1$ 을 만든다. 점 두 개 $x_1\lt x_2$ 에서는 $x_1$ 에서 $1$ 이고 $x_2$ 에서 $0$ 인 패턴을 만들 수 없다. 문턱을 $x_1$ 아래로 내리면 두 점이 모두 $1$ 이 된다. 그러므로 $d=1$ 이고 패턴 개수는 $n+1$ 로 다항식이다.

# 정의

## 부서짐과 성장함수

$\mathcal H$ 가 집합 $\mathcal X$ 에서 $\lbrace 0,1\rbrace$ 로 가는 함수족이고 $C=\lbrace x_1,\dots,x_m\rbrace\subset\mathcal X$ 일 때, $\mathcal H$ 를 $C$ 로 제한한 패턴 집합을

$$\mathcal H\_C = \lbrace (h(x_1),\dots,h(x_m)) : h\in\mathcal H\rbrace$$

이라 한다. $\mathcal H\_C$ 의 크기가 $2^m$ 이면 $\mathcal H$ 가 $C$ 를 **부순다**고 한다. 크기 $n$ 인 집합에서 나오는 패턴 개수의 최대값

$$\Pi\_{\mathcal H}(n) = \max\_{\vert C\vert = n}\vert\mathcal H\_C\vert$$

이 **성장함수**다.

## VC 차원

$\mathcal H$ 의 **VC 차원** $\mathrm{VCdim}(\mathcal H)$ 는 $\mathcal H$ 가 부수는 집합의 크기의 최대값이다.

$$\mathrm{VCdim}(\mathcal H) = \max\lbrace n : \Pi\_{\mathcal H}(n) = 2^n\rbrace$$

모든 $n$ 에서 $\Pi\_{\mathcal H}(n)=2^n$ 이면 VC 차원은 무한이다. 정의는 크기 $d$ 인 집합 하나가 부서지는 것만 요구하고, 크기 $d$ 인 모든 집합이 부서지는 것은 요구하지 않는다.

## 예

| 가설족 | VC 차원 |
| --- | --- |
| $\mathbb R$ 의 문턱 $1\lbrack x\ge t\rbrack$ | $1$ |
| $\mathbb R$ 의 구간 지시함수 | $2$ |
| $\mathbb R^p$ 의 반공간 $1\lbrack\langle w,x\rangle\ge b\rbrack$ | $p+1$ |
| $\mathbb R^2$ 의 축평행 직사각형 | $4$ |
| $\mathbb R^2$ 의 볼록집합 | 무한 |
| 유한 가설족 $\mathcal H$ | $\log\_2\vert\mathcal H\vert$ 이하 |

원 위의 점 $n$ 개에서는 어느 부분집합의 볼록껍질도 나머지 점을 품지 않는다. 그러므로 평면의 볼록집합족은 모든 크기의 집합을 부순다.

# 성질

## Sauer–Shelah 보조정리

**정리.** $\mathrm{VCdim}(\mathcal H)=d$ 이면 모든 $n$ 에 대해

$$\Pi\_{\mathcal H}(n)\le\sum_{i=0}^{d}\binom{n}{i}$$

이고, $n\ge d$ 에서 우변은 $(en/d)^d$ 이하다.

증명의 요지는 $n$ 과 $d$ 에 대한 이중 귀납법이다. 표본점 $x_n$ 을 떼고 패턴 집합을 두 부분으로 가른다. 앞 $n-1$ 좌표가 같은 패턴이 두 개 있는 경우와 하나뿐인 경우다. 전자의 개수를 세는 족은 VC 차원이 $d-1$ 이하이고, 후자는 $n-1$ 개 좌표에서의 성장함수로 묶인다. 두 귀납 가정을 더하면 이항계수의 Pascal 관계가 그대로 나온다.

## 다항식과 지수의 이분법

$d$ 가 유한하면 성장함수는 $n\ge d$ 에서 $n^d$ 꼴로 묶이고, $d$ 가 무한하면 모든 $n$ 에서 $2^n$ 이다. $n^{d}$ 와 $2^n$ 사이의 증가 속도는 성장함수가 가질 수 없다.

## Rademacher 복잡도의 상한

성장함수가 패턴 집합의 크기이므로 Massart 유한류 보조정리를 패턴 벡터들에 적용한다. 패턴 벡터의 성분이 $0$ 또는 $1$ 이라 노름이 $\sqrt n$ 이하이고 개수가 $\Pi\_{\mathcal H}(n)$ 이므로

$$\hat{\mathfrak R}\_S(\mathcal H)\le\sqrt{\frac{2\log\Pi\_{\mathcal H}(n)}{n}}\le\sqrt{\frac{2d\log(en/d)}{n}}$$

이 상한은 표본이 어디에 놓였는지 쓰지 않는다. 표본의 분포를 쓰는 $\hat{\mathfrak R}\_S$ 자체는 더 작을 수 있다.

## VC 부등식

**정리.** 확률 $1-\delta$ 로 모든 $h\in\mathcal H$ 에 대해

$$\vert E\lbrack h\rbrack - \hat E\_S\lbrack h\rbrack\vert\le\sqrt{\frac{8d\log(2en/d)+8\log(4/\delta)}{n}}$$

좌변의 상한이 가설족 전체에서 동시에 성립하므로, 경험 오차를 최소화하는 가설의 실제 오차가 족 안 최소 오차에서 이 양만큼만 떨어진다. 표본 크기가 $d/\varepsilon^2$ 의 상수배면 오차가 $\varepsilon$ 이하다.

## 표본 복잡도의 하한

VC 차원 $d$ 인 족에서 오차 $\varepsilon$ 을 보장하는 데 표본 $\Omega(d/\varepsilon^2)$ 개가 필요하다. 증명은 부서지는 집합 $C$ 의 점 $d$ 개에 확률을 고르게 주고 각 점의 표지를 동전으로 정하는 분포를 쓴다. 표본에 들어오지 않은 점의 표지는 어떤 알고리즘도 알 수 없고, $\mathcal H$ 가 $C$ 를 부수므로 그 점들에서 틀리는 가설과 맞히는 가설이 족 안에 함께 있다.

## 합성에서의 증가

VC 차원 $d_1, d_2$ 인 두 족의 합집합과 교집합은 VC 차원이 $O(d_1+d_2)$ 이고, 매개변수 $p$ 개를 가진 선형 임계 함수를 $L$ 개 합성한 족은 $O(pL\log(pL))$ 이다. 매개변수 개수에 로그 인자만 붙으므로, 매개변수가 많은 모형에서 이 경계는 표본 크기보다 커진다.

# 활용

## PAC 학습 가능성

분포를 가정하지 않고 경험 오차 최소화가 작동하는지는 VC 차원으로 판정된다. 유한 VC 차원과 분포 비의존 균등수렴, 그리고 불가지 PAC(probably approximately correct) 학습 가능성이 서로 동치다. 유한 가설족에서 $\log\vert\mathcal H\vert$ 가 하던 역할을 무한 가설족에서 $d$ 가 맡는다.

## 경험 분포의 수렴

실수 위의 분포함수를 재는 족은 문턱족이므로 VC 차원이 $1$ 이다. VC 부등식을 그 족에 적용하면 경험 분포함수가 참 분포함수로 균등하게 수렴하고, 이 수렴이 Glivenko–Cantelli 정리다. [큰 수의 법칙](law-of-large-numbers.md)이 점마다 주는 수렴을 모든 점에서 동시에 성립시킨다.

## 범위 공간과 $\varepsilon$-근사

집합족의 VC 차원이 유한하면 점 집합에서 크기 $O((d/\varepsilon^2)\log(1/\varepsilon))$ 인 부분집합을 뽑아, 족의 모든 집합에 대해 비율의 오차가 $\varepsilon$ 이하가 되게 할 수 있다. 이산기하와 근사 알고리즘에서 자료를 줄이는 데 쓴다.

## 모형이론의 NIP

[모형이론](model-theory.md)에서 공식 $\varphi(x;y)$ 가 정의하는 집합족의 VC 차원이 유한한 것이 독립 성질 없음(not the independence property, NIP)이다. [안정 이론](stable-theories.md)의 분기 조건을 재는 수와 같은 조합 구조가 여기서 나온다.

# 연관 문서

## 선수지식

- [Rademacher 복잡도](rademacher-complexity.md)

## 더 알아보기

- [Glivenko–Cantelli 정리](glivenko-cantelli.md)

#machine_learning #combinatorics #probability #statistics
