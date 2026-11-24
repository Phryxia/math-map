# Choquet 정리

# 개요

**Choquet 정리(Choquet's theorem)** 는 콤팩트 볼록집합의 점마다, 그 점을 무게중심으로 갖고 극점 위에 놓인 확률측도가 있다는 정리다. 정사각형의 중심은 네 꼭짓점에 질량 $1/4$ 씩을 두어 얻을 수 있고, $\lbrack 0,1\rbrack$ 위의 균등분포는 점질량 $\delta_x$ 들을 $x$ 에 대해 고르게 섞어 얻는다. 둘째 경우는 점질량 유한 개의 볼록조합이 아니어서 [Krein–Milman 정리](krein-milman.md)는 "볼록조합의 극한" 이라고만 말한다. Choquet 정리는 그 극한을 극점 위의 측도 하나로 적어, 각 극점을 얼마만큼 섞었는지를 보이게 한다.

# 직관

$\lbrack 0,1\rbrack$ 위의 확률측도 전체를 $K$ 로 둔다. $K$ 의 극점은 점질량 $\delta_x$ 이다. 균등분포 $\lambda$ 를 점질량들로 나타내려면, 연속함수 $f$ 에 대해 다음이 성립하게 섞으면 된다.

$$
\int f\thinspace d\lambda=\int_0^1\Big(\int f\thinspace d\delta_x\Big)\thinspace dx=\int_0^1f(x)\thinspace dx
$$

섞는 비율은 극점 집합 $\lbrace\delta_x\rbrace$ 위의 측도이고, 이 예에서는 $\lambda$ 자신이다. $K$ 의 어느 원소 $\mu$ 도 같은 방법으로 $\delta_x$ 들을 $\mu$ 의 비율로 섞은 것이다.

정사각형에서는 섞는 비율이 하나로 정해지지 않는다. 중심 $(1/2,1/2)$ 은 $(0,0)$ 과 $(1,1)$ 을 반씩 섞어도, $(1,0)$ 과 $(0,1)$ 을 반씩 섞어도 나온다. 삼각형에서는 점마다 세 꼭짓점의 비율이 하나다.

# 정의

$K$ 가 국소볼록 공간 $E$ 의 콤팩트 볼록 부분집합이고 $\mu$ 가 $K$ 위의 확률측도일 때, 모든 연속 선형범함수 $\ell$ 에 대해 다음을 만족하는 점 $x\in K$ 를 $\mu$ 의 **무게중심(barycenter)** 이라 한다.

$$
\ell(x)=\int_K\ell\thinspace d\mu
$$

이때 $\mu$ 가 $x$ 를 **나타낸다(represents)** 고 한다. 직관 절에서 정사각형의 네 꼭짓점에 $1/4$ 씩 둔 측도와 두 대각 꼭짓점에 $1/2$ 씩 둔 측도는 둘 다 중심을 나타낸다.

$K$ 의 모든 점이 극점 위에 놓인 확률측도로 유일하게 나타나는 경우 $K$ 를 **Choquet 단체(Choquet simplex)** 라 한다. 삼각형과 직관 절의 확률측도 집합은 Choquet 단체이고 정사각형은 아니다.

# 성질

## Choquet 정리

$K$ 가 거리화 가능한 콤팩트 볼록집합이면 $\mathrm{ext}\thinspace K$ 는 $G\_\delta$ 집합이고, $K$ 의 모든 점 $x$ 에 대해 $x$ 를 나타내고 $\mu(\mathrm{ext}\thinspace K)=1$ 인 확률측도 $\mu$ 가 있다.[^1]

증명의 요지. 조밀한 연속 선형범함수의 열 $\ell_n$ 으로 $f=\sum 2^{-n}\ell_n^2$ 을 만들면 $f$ 는 $K$ 위에서 연속이고 순볼록이다. $f$ 보다 크거나 같은 연속 오목함수들의 하한을 $\bar f$ 로 두면, $f=\bar f$ 인 점은 모두 극점이다. $x$ 를 나타내는 측도 가운데 $\int f\thinspace d\mu$ 가 가장 큰 것을 [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)와 약 별 콤팩트성으로 잡으면, 그 측도는 $f=\bar f$ 인 집합 위에 놓인다.

## 거리화 불가능한 경우

$K$ 가 거리화 가능하지 않으면 $\mathrm{ext}\thinspace K$ 가 Borel 집합이 아닐 수 있다. Bishop 과 de Leeuw 는 이때에도 $\mathrm{ext}\thinspace K$ 와 만나지 않는 모든 Baire 집합에서 $0$ 인 확률측도로 $x$ 가 나타남을 보였다.[^2] 이것을 Choquet–Bishop–de Leeuw 정리(Choquet–Bishop–de Leeuw theorem)라 한다.

## 유일성

$K$ 가 Choquet 단체인 것은, $K$ 를 높이 $1$ 에 놓고 원점에서 그은 원뿔이 그 순서에 대해 격자가 되는 것과 동치다.[^3] 이것을 Choquet–Meyer 정리(Choquet–Meyer theorem)라 한다. 정사각형의 원뿔에서는 두 원소의 최소 상계가 없는 쌍이 있다.

$\mathrm{ext}\thinspace K$ 가 닫힌 Choquet 단체를 Bauer 단체(Bauer simplex)라 하고, Bauer 단체는 콤팩트 Hausdorff 공간 위의 확률측도 전체와 아핀 동형이다. 직관 절의 $K$ 가 그 예다.

## Krein–Milman 정리와의 관계

$\mu$ 가 $x$ 를 나타내면 $x$ 는 $\mathrm{supp}\thinspace\mu$ 의 닫힌 볼록껍질에 든다. 그래서 Choquet 정리에서 $x\in\overline{\mathrm{co}}\thinspace(\mathrm{ext}\thinspace K)$ 가 나오고, 거리화 가능한 경우의 Krein–Milman 정리가 따라 나온다.

# 활용

- [완전 단조 함수](completely-monotone-functions.md). $f(0)=1$ 인 완전 단조 함수 전체는 볼록집합이고 극점이 $e^{-tx}$ 이다. 각 함수가 $e^{-tx}$ 들을 섞은 [Laplace 변환](laplace-transform.md)이라는 Bernstein 정리가 이 집합에서의 Choquet 표현이다.
- [de Finetti 정리](de-finetti-theorem.md). 교환 가능한 확률측도 전체의 극점은 독립 동일 분포이고, 교환 가능한 열이 독립 동일 분포 열의 혼합이라는 정리가 Choquet 표현이며 유일하다.
- 에르고딕 분해(ergodic decomposition). 사상 $T$ 의 불변 확률측도 전체는 Choquet 단체이고 극점은 에르고딕 측도이므로, 불변 측도마다 에르고딕 측도들의 유일한 혼합으로 적힌다.
- 양의 정부호 함수. 국소 콤팩트 아벨 군 위에서 $\varphi(0)=1$ 인 연속 양의 정부호 함수 전체의 극점은 지표이고, 그 Choquet 표현이 Bochner 정리(Bochner's theorem)다.

[^1]: G. Choquet, "Unicité des représentations intégrales au moyen de points extrémaux dans les cônes convexes réticulés", *Comptes Rendus de l'Académie des Sciences* 243, 1956, pp. 555–557.
[^2]: E. Bishop, K. de Leeuw, "The representations of linear functionals by measures on sets of extreme points", *Annales de l'Institut Fourier* 9, 1959, pp. 305–331.
[^3]: R. R. Phelps, *Lectures on Choquet's Theorem*, 2nd ed., Lecture Notes in Mathematics 1757, Springer, 2001, Chapters 3, 10.

# 연관 문서

## 선수지식

- [Krein–Milman 정리](krein-milman.md)
- [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #measure_theory #probability
