# 완비성

# 개요

수렴의 정의는 극한 $p$ 를 미리 지정해야 쓸 수 있다. 해석학에서는 근삿값의 열을 먼저 만들고 그 극한의 존재를 증명해야 하는 일이 잦다. Cauchy 조건은 극한을 언급하지 않고 항들끼리 가까워진다는 것만 요구한다. Cauchy 수열이 항상 수렴하는 공간이 완비 공간이고, 정의에는 [거리 공간](metric-spaces.md)의 언어만 필요하다.

# 직관

## 빠진 극한

$(0,1]$ 에서 $x_n=1/n$ 은 항들끼리 한없이 가까워지지만 극한 $0$ 이 공간에 없다. 유리수에서 $\sqrt{2}$ 의 소수 전개를 자른 수열도 같다. 완비성은 이렇게 빠진 극한이 없다는 성질이다.

## 거리 의존성

$\mathbb{R}$ 과 $(0,1)$ 은 위상동형이지만 하나만 완비다. $\mathbb{R}$ 에 $d'(x,y)=|\arctan x-\arctan y|$ 를 주면 열린집합은 그대로인데 수열 $1,2,3,\ldots$ 가 Cauchy 이면서 극한을 갖지 않는다. 완비성은 위상 개념이 아니라 거리 개념이다.

## 존재 논증의 형태

완비성을 쓰는 논증은 근삿값을 만드는 절차를 정하고, 항들 사이 거리가 줄어든다는 추정을 얻고, 완비성으로 극한을 꺼내고, 그 극한이 원하는 방정식을 만족함을 확인한다. [Banach 부동점 정리](banach-fixed-point.md)가 이 절차를 정리 하나로 묶은 것이다.

# 정의

## Cauchy 수열

거리 공간 $(X,d)$ 의 수열 $x_n$ 이 다음을 만족하면 **Cauchy 수열**이다.

$$
\forall\varepsilon\gt 0\thickspace\exists N\in\mathbb N\thickspace\forall m,n\ge N:\ d(x_m,x_n)\lt\varepsilon
$$

수렴의 정의와 달리 극한 후보가 등장하지 않고 뒤쪽 항들끼리의 거리만 제한된다.

이웃한 항의 거리가 $0$ 으로 가는 조건 $d(x_n,x_{n+1})\to 0$ 은 이보다 약하다. $x_n=\sqrt{n}$ 과 $x_n=\sum_{k\le n}1/k$ 에서 이웃 간격은 $0$ 으로 가지만 멀리 떨어진 두 항의 거리는 얼마든지 커진다. 조건은 $m,n\ge N$ 인 모든 쌍에 대한 것이다.

## 완비 거리 공간

$X$ 안의 모든 Cauchy 수열이 $X$ 의 원소로 수렴하면 $X$ 는 **완비 거리 공간**이다. 완비인 노름공간을 Banach 공간, 완비인 내적공간을 [Hilbert 공간](hilbert-spaces.md)이라 한다.

# 성질

## 수렴 수열의 Cauchy 성

극한을 $p$ 라 하고 $m,n\ge N$ 에서 두 항을 모두 $p$ 로부터 $\varepsilon/2$ 이내로 잡으면

$$
d(x_m,x_n)\le d(x_m,p)+d(p,x_n)\lt\varepsilon
$$

이다. 역은 공간에 달려 있고, 역이 항상 성립하는 공간이 완비 공간이다.

## Cauchy 수열의 기본 성질

- Cauchy 수열은 유계다. $\varepsilon=1$ 로 잡으면 $N$ 번째 이후 항이 $x_N$ 의 반지름 $1$ 공에 들어가고, 앞의 유한 개를 더해도 유계다.
- Cauchy 수열이 수렴하는 부분수열을 가지면 전체가 그 극한으로 수렴한다. 콤팩트 거리 공간이 완비인 것이 이 성질의 따름이다.

## 완비인 공간과 아닌 공간

| 공간 | 완비 여부 |
|---|---|
| $\mathbb{R}$ , $\mathbb{C}$ , $\mathbb{R}^n$ | 완비 |
| $\mathbb{Q}$ | 아님 |
| $(0,1]$ | 아님 |
| sup 거리를 준 $C\lbrack a,b\rbrack$ | 완비 |
| 거리 $\int \lvert f-g \rvert$ 를 준 $C\lbrack a,b\rbrack$ | 아님 |
| $L^1(\mu)$ , $L^2(\mu)$ | 완비 |

$\mathbb{R}$ 의 완비성은 상한 공리와 동치다. $C\lbrack a,b\rbrack$ 는 sup 거리에서 [균등수렴](uniform-convergence.md) 극한이 연속이라 완비이고, 적분 거리에서는 연속함수열이 불연속 함수로 수렴할 수 있어 완비가 아니다. 그 빠진 극한을 채운 것이 [Lebesgue 적분](lebesgue-integral.md)으로 만든 $L^1$ 이다.

## 닫힌 부분집합과 완비성

완비 공간의 부분집합이 완비인 것과 닫힌 것은 동치다. 닫혀 있으면 부분집합의 Cauchy 수열이 전체 공간에서 수렴하고 그 극한이 부분집합에 남는다. 역으로 완비인 부분집합의 폐포에 있는 점은 그 부분집합의 수렴열의 극한이므로 이미 부분집합에 속한다.

## 완비성과 유계성

$\mathbb{R}$ 은 완비지만 유계가 아니고, $(0,1]$ 은 유계지만 완비가 아니다. 거리 공간에서 콤팩트인 것과 완비이면서 전유계인 것이 동치이며, 이 분해가 [콤팩트성](compactness.md)의 표준적인 다룸이다.

## 완비화

임의의 거리 공간 $X$ 는 완비 공간 $\bar X$ 안에 조밀하게 매장할 수 있고, 그런 $\bar X$ 는 등거리동형을 무시하면 유일하다. 구성은 Cauchy 수열들의 집합을 차가 $0$ 으로 가는 동치관계로 나누는 것이다.

유리수에서 실수를 만드는 Cantor 의 구성이 이 절차의 특수한 경우다. $p$ 진수, 함수공간의 완비화, 대수적 대상의 형식적 완비화가 같은 기법이다.

# 활용

- 완비 공간 위의 축약사상이 유일한 부동점을 가진다는 [Banach 부동점 정리](banach-fixed-point.md)에서 Picard–Lindelöf 정리, 음함수 정리, 수치 반복법의 수렴이 따라온다.
- $L^2$ 의 완비성이 Riesz–Fischer 정리를 준다. 제곱합 가능한 Fourier 계수가 실제 함수의 계수가 된다. 절대수렴하는 급수가 수렴한다는 성질은 노름공간에서 완비성과 동치다.
- 같은 집합에 준 두 거리가 위상동치여도 완비성은 서로 옮아가지 않고, 강동치일 때만 옮아간다. 반복법의 수렴을 논할 때 어떤 거리에서 Cauchy 인지 명시해야 한다.[^1]

[^1]: Jiří Lebl, *Basic Analysis*, Completeness and compactness, Remark 7.4.16. 완비성이 거리에 의존하며 위상적 성질이 아님을 보이는 arctan 거리의 예. https://www.jirka.org/ra/html/sec_metcompact.html

# 연관 문서

## 선수지식

- [거리 공간](metric-spaces.md)
- [해석학 개관](analysis-overview.md)

## 더 알아보기

- [축약사상 고정점 정리](banach-fixed-point.md)
- [Hilbert 공간](hilbert-spaces.md)
- [Banach 공간](banach-spaces.md)
- [p 진수와 부치](p-adic-numbers.md)

#analysis #topology
