# Krein–Milman 정리

# 개요

Krein–Milman 정리는 국소볼록 공간의 콤팩트 [볼록](convexity.md)집합이 그 극점들의 닫힌 볼록껍질과 같다는 정리다. 극점은 집합 안의 두 점을 잇는 선분의 내부로는 적히지 않는 점이다.

증명은 [Hahn–Banach 정리](hahn-banach-theorem.md)의 분리정리를 쓴다. 콤팩트 볼록집합 위의 연속 선형범함수의 최대가 극점에서 나므로, 유한차원 볼록다면체의 꼭짓점이 하는 일을 무한차원에서도 극점이 한다.

# 직관

$\lbrace 1,\dots,n\rbrace$ 위의 확률분포 전체는 좌표가 음이 아니고 합이 $1$ 인 벡터의 집합이다. 이 집합의 꼭짓점은 한 점에 질량을 모두 준 분포 $n$ 개이고, 나머지 분포는 그 $n$ 개의 볼록조합이다. 선형함수의 최대를 찾으려면 꼭짓점 $n$ 개만 비교하면 된다.

콤팩트 거리공간 $K$ 위의 확률측도 전체로 넘어가면 점질량이 무한히 많다. 점질량들의 볼록조합은 유한 개의 점에 질량이 몰린 측도뿐이므로, $\lbrack 0,1\rbrack$ 위의 Lebesgue 측도는 그 조합에 들지 않는다. 그런데 $\lbrack 0,1\rbrack$ 을 $n$ 등분하고 각 구간에서 점 $x\_k$ 를 하나씩 뽑아 질량 $1/n$ 을 주면, 연속함수 $f$ 에 대한 적분이 Riemann 합 $\frac1n\sum\_k f(x\_k)$ 이고 이것이 $\int f\thinspace dx$ 로 수렴한다. 유한조합의 열이 [약하게 수렴](weak-convergence.md)해 Lebesgue 측도를 준다.

유한조합만으로는 모자라고 그 극한까지 넣으면 닿는다. 그래서 볼록껍질 대신 닫힌 볼록껍질을 재구성의 목표로 삼는다. 남은 것은 극점이 점질량뿐이라는 것과, 닫힌 볼록껍질이 집합 전체라는 것을 확인하는 일이다.

# 정의

## 극점

볼록집합 $K$ 의 점 $x$ 가 **극점**이라는 것은 다음이 성립하는 것이다.

$$
x=ty+(1-t)z,\thinspace y,z\in K,\thinspace 0\lt t\lt 1\thinspace\Longrightarrow\thinspace y=z=x
$$

$K$ 의 극점 전체를 $\mathrm{ext}\thinspace K$ 로 쓴다.

## 면

$K$ 의 공집합이 아닌 볼록 부분집합 $F$ 가 **면**이라는 것은, $ty+(1-t)z\in F$ 와 $y,z\in K$ 와 $0\lt t\lt 1$ 에서 $y,z\in F$ 가 따라오는 것이다. 한 점으로 된 면이 극점이다.

## 닫힌 볼록껍질

집합 $A$ 의 **닫힌 볼록껍질** $\overline{\mathrm{co}}\thinspace A$ 는 $A$ 를 포함하는 닫힌 볼록집합 가운데 가장 작은 것이다. $A$ 의 유한 볼록조합 전체의 폐포와 같다.

# 성질

## Krein–Milman 정리

$X$ 가 국소볼록 Hausdorff 위상벡터공간이고 $K\subseteq X$ 가 콤팩트 볼록집합이면 $K=\overline{\mathrm{co}}\thinspace(\mathrm{ext}\thinspace K)$ 다.[^1]

증명의 요지는 두 단계다. 첫째로 $K$ 의 공집합이 아닌 닫힌 면이 극점을 포함한다. 닫힌 면들을 포함관계로 정렬하면 사슬의 교집합이 콤팩트성으로 공집합이 아니고 다시 닫힌 면이므로, Zorn 보조정리가 극소 닫힌 면 $F$ 를 준다. $F$ 에 두 점이 있으면 분리정리가 그 둘에서 값이 다른 연속 선형범함수 $f$ 를 주고, $f$ 가 $F$ 에서 최대가 되는 점들의 집합이 $F$ 보다 작은 닫힌 면이어서 극소성에 어긋난다. 따라서 $F$ 는 한 점이고 그 점이 극점이다.

둘째로 $C=\overline{\mathrm{co}}\thinspace(\mathrm{ext}\thinspace K)$ 가 $K$ 와 같다. $C\subseteq K$ 는 $K$ 가 닫힌 볼록집합이므로 성립한다. $x\_0\in K\setminus C$ 가 있으면 분리정리가 $f(x\_0)\gt \sup\_{y\in C}f(y)$ 인 연속 선형범함수 $f$ 를 준다. $f$ 가 $K$ 에서 최대가 되는 점들의 집합은 닫힌 면이므로 극점 하나를 포함하고, 그 극점은 $C$ 에 들어 있으면서 $f$ 값이 $f(x\_0)$ 이상이다. 두 부등식이 어긋난다.

## 극점에서 나는 최대

콤팩트 볼록집합 위의 연속 선형범함수는 극점에서 최대를 얻는다. 최대가 되는 점들의 집합이 닫힌 면이고 닫힌 면이 극점을 포함하기 때문이다. 선형계획법에서 최적해를 꼭짓점에서 찾는 것이 유한차원 판본이다.

## Milman 역정리

$K$ 가 콤팩트 볼록집합이고 닫힌집합 $A\subseteq K$ 가 $\overline{\mathrm{co}}\thinspace A=K$ 를 만족하면 $\mathrm{ext}\thinspace K\subseteq A$ 다. 재구성에 쓸 수 있는 닫힌집합 가운데 극점 집합의 폐포가 가장 작다.

## 극점이 없는 단위구

$L^1\lbrack 0,1\rbrack$ 의 닫힌 단위구에는 극점이 없다. $\Vert f\Vert\_1=1$ 인 $f$ 에 대해 $\int\_0^c\vert f\vert=1/2$ 인 $c$ 를 잡고 $f$ 를 $\lbrack 0,c\rbrack$ 과 $\lbrack c,1\rbrack$ 에서 각각 두 배로 키운 두 함수를 만들면, 둘 다 단위구에 들고 그 중점이 $f$ 다. 따라서 $L^1\lbrack 0,1\rbrack$ 은 어떤 노름공간의 쌍대공간과도 등거리 동형이 아니다. 쌍대공간의 단위구는 [Banach–Alaoglu 정리](banach-alaoglu.md)로 약 $\ast$ 콤팩트하고 Krein–Milman 정리가 극점의 존재를 주기 때문이다.

## 극점의 꼴

- $\mathbb R^n$ 의 볼록다면체에서 극점은 꼭짓점이고 유한 개다.
- 콤팩트 거리공간 $K$ 위의 확률측도 전체에서 극점은 점질량이다.
- Hilbert 공간의 닫힌 단위구에서 극점은 노름이 $1$ 인 벡터 전체다.
- $C\lbrack 0,1\rbrack$ 의 닫힌 단위구에서 극점은 값이 $\pm1$ 뿐인 연속함수, 곧 상수 $\pm1$ 둘이다.

# 활용

- [Banach–Alaoglu 정리](banach-alaoglu.md)가 주는 약 $\ast$ 콤팩트성과 합쳐 쌍대 단위구를 극점들로 재구성한다. $L^1$ 이 쌍대공간이 아니라는 판정이 이 조합에서 나온다.
- 측도보존변환의 불변측도 전체는 볼록이고 약 $\ast$ 콤팩트하며, 그 극점이 에르고딕 측도다. [Birkhoff 에르고딕 정리](ergodic-theorem.md)의 시간평균이 상수인 경우가 극점에 해당한다.
- [선형계획법](linear-programming.md)의 단체법은 극점을 따라 움직인다. 극점에서 최대가 난다는 성질이 그 탐색의 근거다.
- Choquet 정리는 극점 집합 위의 확률측도로 콤팩트 볼록집합의 점을 적분 표현한다. Krein–Milman 정리의 닫힌 볼록껍질 표현을 적분으로 바꾼 것이다.

[^1]: M. Krein and D. Milman, "On extreme points of regular convex sets", *Studia Mathematica* 9 (1940), 133–138.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [Hahn–Banach 정리](hahn-banach-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #optimization #measure_theory #theorem
