# Hilbert 공간

# 개요

Hilbert 공간은 내적이 주어져 있고, 그 내적이 만드는 거리에 대해 완비인 벡터 공간이다. 즉 [내적 공간](inner-product-spaces.md)과 [완비성](completeness.md)을 한 자리에 모은 구조다.

이 두 조건만으로 유한차원 유클리드 공간의 기하가 거의 전부 무한차원으로 옮겨온다. 직교, 정사영, 피타고라스 정리, 좌표(정규직교기저)와 좌표의 길이 보존(Parseval)이 모두 성립한다. 무한차원 [벡터 공간](vector-spaces.md) 가운데 이런 대접을 받는 것은 사실상 Hilbert 공간뿐이며, 그래서 [Fourier 급수](fourier-series.md), 편미분방정식, 양자역학, 통계적 추정이 모두 같은 언어로 서술된다.

핵심 정리는 세 개다. 닫힌 볼록집합으로의 최근접점 정리, 그로부터 따라오는 직교분해 정리, 그리고 연속 선형범함수를 벡터로 바꿔 주는 Riesz 표현 정리다.

# 직관

유한차원에서 부분공간 위로 내린 수선의 발을 계산할 때는 각도(내적)와 최소값이 실제로 달성된다는 사실을 함께 쓴다. 유한차원에서는 후자가 [콤팩트성](compactness.md)에서 따라오지만, 무한차원 단위공은 콤팩트가 아니므로 따로 증명해야 한다.

완비성이 그 자리를 메운다. 거리의 하한에 다가가는 점렬을 잡으면, 평행사변형 법칙이 그 점렬을 Cauchy 수열로 만들고, 완비성이 극한의 존재를 보장한다. "내적 + 완비"라는 정의는 이 한 가지 논증을 돌리기 위한 최소 조건이라고 봐도 된다.

완비가 아닌 내적 공간에서는 이 논증이 깨진다. 예를 들어 구간 위의 [연속함수](continuity.md) 전체에 적분 내적을 주면 내적 공간이지만 완비가 아니고, 닫힌 볼록집합에 최근접점이 없는 예가 생긴다. 이때 [Lebesgue 적분](lebesgue-integral.md)으로 공간을 완비화한 것이 바로 제곱적분가능 함수 공간이다.

# 정의

## 내적 공간과 노름

복소수체 위의 벡터 공간 $H$ 에 대해, 사상 $(x,y)\mapsto\langle x,y\rangle$ 가 첫 변수에 대해 선형이고, 켤레대칭이며, 양의 정부호일 때 내적이라 한다. 유도 노름은 다음과 같다.

$$
\Vert x\Vert = \sqrt{\langle x, x\rangle}.
$$

Cauchy–Schwarz 부등식과 그로부터 나오는 삼각부등식이 성립한다.

$$
|\langle x, y\rangle| \le \Vert x\Vert\thinspace\Vert y\Vert,\qquad \Vert x+y\Vert \le \Vert x\Vert + \Vert y\Vert.
$$

따라서 내적 공간은 $d(x,y)=\lVert x-y\rVert$ 로 [거리 공간](metric-spaces.md)이 된다.

## Hilbert 공간

내적 공간 $H$ 가 유도 거리에 대해 완비이면, 즉 모든 Cauchy 수열이 $H$ 안에서 수렴하면 $H$ 를 Hilbert 공간이라 한다.[^1]

## 대표적인 예

- 유한차원: $\mathbb C^n$ 에 표준 내적. 모든 유한차원 내적 공간은 자동으로 완비다.
- 수열 공간 $\ell^2$ : 제곱합이 유한한 복소수열 전체.

$$
\ell^2 = \Big\lbrace (x_n)\_{n\ge 1} : \sum_{n=1}^{\infty} |x_n|^2 \lt\infty \Big\rbrace,\qquad \langle x, y\rangle = \sum_{n=1}^{\infty} x_n \overline{y_n}.
$$

- 함수 공간 $L^2(\mu)$ : [측도](measure.md) 공간 위에서 제곱적분가능한 [가측함수](measurable-functions.md)를 거의 어디서나 같음으로 동일시한 공간.

$$
L^2(\mu) = \Big\lbrace f : \int |f|^2 \thinspace d\mu \lt\infty \Big\rbrace,\qquad \langle f, g\rangle = \int f \overline{g}\thinspace d\mu.
$$

$L^2$ 의 완비성이 Riesz–Fischer 정리이며, 이것이 [단조 수렴 정리](monotone-convergence.md)·[지배 수렴 정리](dominated-convergence.md) 계열 도구가 필요한 이유다.

## 직교성과 정규직교계

$\langle x,y\rangle=0$ 이면 $x$ 와 $y$ 는 직교한다. 서로 직교하고 각각의 노름이 1인 집합을 정규직교계라 한다. 부분집합 $S$ 에 대한 직교여공간은 다음과 같다.

$$
S^{\perp} = \lbrace x \in H : \langle x, s\rangle = 0 \ \ \forall s \in S \rbrace.
$$

직교여공간은 항상 닫힌 부분공간이다. 내적이 각 변수에 대해 연속이기 때문이다.

## 평행사변형 법칙

내적에서 유도된 노름은 반드시 다음을 만족한다.

$$
\Vert x+y\Vert^2 + \Vert x-y\Vert^2 = 2\Vert x\Vert^2 + 2\Vert y\Vert^2.
$$

역도 참이다(Jordan–von Neumann). 이 등식을 만족하는 노름 공간은 편극 항등식으로 내적을 복원할 수 있다. 그러므로 [Banach 공간](banach-spaces.md) 가운데 Hilbert 공간은 "평행사변형 법칙을 만족하는 것"으로 정확히 특징지어진다.

# 성질

## 최근접점 정리

$\mathbb C$ 가 Hilbert 공간 $H$ 의 공집합이 아닌 닫힌 [볼록](convexity.md)집합이면, 임의의 $x$ 에 대해 거리를 최소화하는 점이 유일하게 존재한다.

$$
\exists ! \thinspace p \in C : \ \Vert x - p\Vert = \inf_{c \in C} \Vert x - c\Vert =: d.
$$

증명 스케치. $\lVert x-c_n\rVert\to d$ 인 점렬을 잡고 평행사변형 법칙을 $x-c_n$ , $x-c_m$ 에 적용하면

$$
\Vert c_n - c_m\Vert^2 = 2\Vert x-c_n\Vert^2 + 2\Vert x-c_m\Vert^2 - 4\Big\Vert x - \tfrac{c_n+c_m}{2}\Big\Vert^2 \le 2\Vert x-c_n\Vert^2 + 2\Vert x-c_m\Vert^2 - 4d^2
$$

를 얻는다. 볼록성으로 중점이 $\mathbb C$ 에 있어 마지막 항을 $d^2$ 이상으로 눌렀다. 우변이 0으로 가므로 점렬은 Cauchy이고, 완비성과 $\mathbb C$ 의 닫힘으로 극한이 $\mathbb C$ 안에 있다. 유일성도 같은 부등식에서 나온다. 볼록성과 완비성 둘 중 하나만 빠져도 결론은 거짓이다.

## 정사영 정리와 직교분해

$M$ 이 닫힌 부분공간이면 최근접점 사상 $P_M$ 은 선형이고, 다음이 성립한다.

$$
x = P_M x + (x - P_M x),\qquad P_M x \in M,\quad x - P_M x \in M^{\perp}.
$$

따라서 $H$ 는 직합으로 분해된다.

$$
H = M \oplus M^{\perp},\qquad (M^{\perp})^{\perp} = M.
$$

$P_M$ 은 멱등이고 자기수반이며 노름이 1 이하인 [선형사상](linear-maps.md)이다. 최근접점의 특징화는 "잔차가 $M$ 에 직교한다"는 정규방정식이며, 이는 통계의 최소제곱과 동일한 진술이다.

## Riesz 표현 정리

$f$ 가 $H$ 위의 연속 선형범함수이면, 다음을 만족하는 $y$ 가 유일하게 존재한다.[^2]

$$
f(x) = \langle x, y\rangle \quad (\forall x \in H),\qquad \Vert f\Vert = \Vert y\Vert.
$$

증명 스케치. $f=0$ 이면 $y=0$ . 아니면 핵 $N=\ker f$ 는 닫힌 진부분공간이므로 직교분해에 의해 $N^\perp$ 에 단위벡터 $z$ 가 있다. 임의의 $x$ 에 대해 $f(x)z-f(z)x$ 가 $N$ 에 속함을 확인하면 $y=\overline{f(z)}\thinspace z$ 가 답이다.

이 정리는 Hilbert 공간이 자기 자신의 쌍대공간과 (켤레선형으로) 동일함을 뜻한다. 약형식 편미분방정식의 해의 존재(Lax–Milgram), 확률론의 [조건부 기댓값](conditional-expectation.md) 구성, [Radon–Nikodym 정리](radon-nikodym.md)의 von Neumann 식 증명이 모두 이 정리를 쓴다.

## Bessel 부등식과 Parseval 등식

$(e_n)$ 이 정규직교계이고 $c_n=\langle x,e_n\rangle$ 이면, 유한 부분합이 정사영이므로 피타고라스 정리에서 Bessel 부등식이 나온다.

$$
\sum_{n} |\langle x, e_n\rangle|^2 \le \Vert x\Vert^2 .
$$

특히 계수열은 $\ell^2$ 에 속한다. 정규직교계가 완비(그 생성이 조밀, 동치로 $\lbrace e_n\rbrace^\perp=\lbrace 0\rbrace$ )이면 정규직교기저라 하고, 이때 부등식이 등식이 된다.

$$
x = \sum_{n} \langle x, e_n\rangle e_n,\qquad \Vert x\Vert^2 = \sum_{n} |\langle x, e_n\rangle|^2 .
$$

두 번째 식이 Parseval 등식이다. 급수는 순서에 무관하게(무조건) 수렴하며, 부분합이 Cauchy임은 계수의 제곱합이 수렴한다는 사실과 완비성에서 나온다. 여기서 "기저"는 유한 선형결합을 뜻하는 Hamel 기저가 아니라 수렴하는 무한급수를 허용한 Schauder 식 기저임에 주의한다.

## 분리가능 Hilbert 공간의 분류

모든 Hilbert 공간은 정규직교기저를 가진다(Zorn 보조정리를 쓰는 [선택공리](axiom-of-choice.md) 논증). 기저의 농도는 잘 정의되며 그것이 유일한 동형 불변량이다. 특히 $H$ 가 분리가능(가산 조밀부분집합 보유)하고 무한차원이면 기저가 가산이고, 좌표 사상

$$
U : H \to \ell^2,\qquad U x = \big(\langle x, e_n\rangle\big)\_{n \ge 1}
$$

은 전단사 선형사상이며 내적을 보존한다(유니터리). 즉 무한차원 분리가능 Hilbert 공간은 동형을 무시하면 $\ell^2$ 하나뿐이다. $L^2([0,1])$ 과 $\ell^2$ 를 잇는 동형은 Fourier 계수 사상이다.

## 유한차원과 다른 점

- 단위공은 노름 위상에서 콤팩트가 아니다(무한 정규직교계는 서로 거리가 루트 2로 일정하다).
- 유계가 아닌 조밀하게 정의된 연산자(미분 연산자 등)가 등장한다.
- 부분공간이 닫혀 있지 않을 수 있으며, 닫히지 않은 부분공간에는 정사영 정리가 적용되지 않는다.
- [스펙트럼 정리](spectral-theorem.md)는 유계 자기수반 연산자에 대해서도 성립하지만, [고윳값과 고유벡터](eigenvalues.md)가 존재하지 않고 연속 스펙트럼만 있는 경우가 생긴다.

# 활용

## 최소제곱과 조건부 기댓값

설계행렬의 열이 생성하는 부분공간으로의 정사영이 최소제곱해다. 확률론에서는 $L^2(P)$ 안에서 부분 시그마대수에 대한 가측함수들이 이루는 닫힌 부분공간으로의 정사영이 조건부 기댓값이며, 이것이 [Markov 연쇄](markov-chains.md)나 마팅게일 이론의 출발점이 된다. [특이값 분해](singular-value-decomposition.md)의 최적 저계수 근사도 같은 정사영 논리다.

## 조화해석

$L^2$ 의 삼각함수계는 정규직교기저이고, 이때의 계수 전개가 [Fourier 급수](fourier-series.md)다. 유한 순환군 위에서 같은 일을 하면 [이산 Fourier 변환](fourier.md)이 된다. Parseval 등식은 두 경우 모두 에너지 보존으로 읽힌다.

## 양자역학

상태는 단위벡터, 관측량은 자기수반 연산자, 측정 확률은 정규직교기저로의 전개계수의 제곱이다. Parseval 등식이 확률의 총합이 1이라는 진술이 된다.

## 재생핵 Hilbert 공간

점 평가 범함수가 연속인 함수 공간에서는 Riesz 표현 정리가 각 점마다 대표 벡터를 주고, 그것이 커널 함수다. 커널 기법과 [Gauss 과정](gaussian-processes.md) 회귀가 이 구조 위에서 돌아간다. 정사영 정리가 곧 정규화된 회귀의 해가 유한 차원 문제로 줄어든다는 표현자 정리로 나타난다.

[^1]: Wikipedia, "Hilbert space", https://en.wikipedia.org/wiki/Hilbert_space
[^2]: Wikipedia, "Riesz representation theorem", https://en.wikipedia.org/wiki/Riesz_representation_theorem

# 연관 문서

## 선수지식

- [내적 공간](inner-product-spaces.md)
- [완비성](completeness.md)
- [함수해석 개관](functional-analysis-overview.md)

## 더 알아보기

- [Fourier 급수](fourier-series.md)
- [유계 작용소](bounded-operators.md)
- [Peter–Weyl 정리](peter-weyl.md)
- [구면조화함수](spherical-harmonics.md)

#functional_analysis #analysis #linear_algebra #probability
