# 선택공리의 약한 형태

# 개요

**선택공리의 약한 형태(weak forms of the axiom of choice)** 는 선택함수를 요구하는 범위를 줄인 공리다. 점 $x$ 가 [실수](real-numbers.md) 집합 $A$ 의 극한점일 때 $A$ 의 수열로 $x$ 에 다가가려면, $n$ 마다 $x$ 와의 거리가 $1/n$ 미만인 $A$ 의 점을 하나씩 고른다. 고르는 일은 셀 수 있는 횟수이고, 모든 집합마다 원소를 고르는 [선택공리](axiom-of-choice.md) 전체는 쓰지 않는다. 이 약한 공리들은 정리마다 실제로 필요한 선택의 범위를 정해, 그 정리가 어느 공리에서 증명되는지를 가른다.

# 직관

개요의 극한점 $x$ 와 집합 $A$ 에서, $n$ 번째에 고를 점은 집합 $A_n=\lbrace a\in A:\vert a-x\vert\lt 1/n\rbrace$ 에 있다. $x$ 가 극한점이므로 $A_n$ 은 모두 비어 있지 않다. 어느 원소를 고를지 정하는 규칙이 없으면 $n$ 마다 하나씩 고르는 일을 셀 수 있는 횟수만큼 해야 한다. 고를 곳 $A_1,A_2,\dots$ 은 고르기 전에 이미 다 정해져 있다.

다른 경우가 있다. 실수의 부분집합 $S$ 가 있고 $S$ 의 어느 원소에도 그보다 작은 $S$ 의 원소가 있다고 하자. $S$ 에서 끝없이 줄어드는 수열을 뽑으려면 $x_0\in S$ 를 고르고, $x_0$ 보다 작은 $S$ 의 원소 $x_1$ 을 고르고, $x_1$ 보다 작은 원소 $x_2$ 를 고른다. 여기서는 $n$ 번째에 고를 곳이 $n-1$ 번째에 고른 것에 따라 정해진다.

두 경우 모두 선택은 셀 수 있는 횟수이고, 실수의 모든 부분집합마다 원소를 고르는 선택함수는 쓰지 않는다. 미리 정해진 가산 족에서 고르는 것을 보장하는 공리가 가산 선택이고, 앞 결과를 보고 다음을 고르는 것을 보장하는 공리가 종속 선택이다.

# 정의

선택공리(axiom of choice, AC)를 뺀 Zermelo–Fraenkel 집합론(Zermelo–Fraenkel set theory, ZF) 위에서 다음 세 공리를 정의한다.

**가산 선택(countable choice)** 은 공집합이 아닌 집합의 가산 족 $\lbrace A_n\rbrace\_{n\in\mathbb N}$ 에 대해 모든 $n$ 에서 $f(n)\in A_n$ 인 $f$ 가 있다는 공리이고, $\mathrm{AC}\_\omega$ 로 쓴다. 직관 절의 $A_n=\lbrace a\in A:\vert a-x\vert\lt 1/n\rbrace$ 에 이 공리를 쓰면 $f(n)\in A_n$ 이 $x$ 로 수렴한다.

**종속 선택(dependent choice, DC)** 은 공집합이 아닌 $X$ 와 관계 $R\subseteq X\times X$ 가 모든 $x$ 에 대해 $xRy$ 인 $y$ 를 가지면, 모든 $n$ 에서 $x_nRx_{n+1}$ 인 수열이 있다는 공리다. 직관 절의 $S$ 에서 $xRy$ 를 $y\lt x$ 로 두면 이 공리가 끝없이 줄어드는 수열 $x_0\gt x_1\gt\cdots$ 를 준다.

집합 $X$ 위의 [필터](filters-and-nets.md) 가운데 극대인 것을 초필터(ultrafilter)라 한다. **초필터 보조정리(ultrafilter lemma, UL)** 는 집합 위의 모든 필터가 어떤 초필터에 포함된다는 공리다. $\mathbb N$ 에서 여집합이 유한인 집합 전체는 필터이고, UL 은 이 필터를 포함하는 초필터를 준다. 그 초필터는 어느 한 점 $m$ 을 포함하는 집합 전체 $\lbrace B:m\in B\rbrace$ 와 다르다. 이 한 점 초필터는 선택 없이 정의된다.

UL 과 동치인 공리가 [Boole 대수](boolean-algebras.md)의 모든 진 아이디얼이 소 아이디얼에 포함된다는 Boole 소 아이디얼 정리(Boolean prime ideal theorem, BPI)다.

# 성질

## 함의 사슬

$$
\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}\_\omega,\qquad \mathrm{AC}\Rightarrow\mathrm{UL}
$$

AC 가 셋을 모두 함의하고, DC 가 $\mathrm{AC}\_\omega$ 를 함의한다. 역은 모두 성립하지 않는다. $\mathrm{AC}\_\omega$ 는 DC 를 함의하지 않고, UL 은 AC 를 함의하지 않는다.[^1] UL 과 DC 사이에는 함의가 양쪽 다 없다. UL 은 가산 족에서조차 선택함수를 주지 않으므로 $\mathrm{AC}\_\omega$ 를 함의하지 않는다.

## 각 세기로 증명되는 정리

| 세기 | 정리 |
| --- | --- |
| $\mathrm{AC}\_\omega$ | 가산 개 영집합의 합집합이 영집합, 가산 족의 가산 합집합이 가산, 극한점으로 수렴하는 수열의 존재 |
| DC | [Baire 범주 정리](baire-category.md), 최솟값 없는 부분집합이 있는 순서의 무한 감소열 |
| UL | Hausdorff 공간의 [Tychonoff 정리](tychonoff-theorem.md), [Hahn–Banach 정리](hahn-banach-theorem.md), 모든 체의 대수적 폐포의 존재 |
| AC | Zorn 보조정리, 모든 벡터공간의 기저, [Vitali 집합](vitali-set.md)과 [Banach–Tarski 분해](banach-tarski.md) |

Baire 범주 정리의 증명은 앞 단계의 공 안에서 다음 공을 고르므로 DC 를 쓴다. Hahn–Banach 정리는 UL 보다 약한 세기이고 ZF 만으로는 증명되지 않는다.

## Solovay 모형

AC 를 부정하면 모든 실수 집합이 Lebesgue 가측인 모형을 만들 수 있다. 그 모형은 DC 를 만족하므로 수열을 고르는 해석학의 논법을 그대로 쓸 수 있고, 그 안에서는 Vitali 집합이 존재하지 않는다. 구성에 도달 불가능 기수(inaccessible cardinal)의 존재를 쓴다.[^1]

# 활용

- 측도론의 기본 사실. [측도](measure.md)의 가산 가법성에서 따라오는 계산 가운데 영집합의 가산 합집합을 다루는 것은 $\mathrm{AC}\_\omega$ 로 충분하다. [Vitali 집합](vitali-set.md)의 구성은 완전한 AC 를 쓴다.
- 함수해석의 쌍대성. [Banach 공간](banach-spaces.md)의 Hahn–Banach 정리로 세우는 쌍대공간의 비자명성이 UL 세기에 놓인다. 분리가능 공간으로 제한하면 ZF 에서 증명된다.
- 곱공간의 콤팩트성. Tychonoff 정리의 일반 판은 AC 와 동치이고, Hausdorff 로 제한한 판은 UL 과 동치다. [분리공리](separation-axioms.md)가 그 제한을 쓴다.

[^1]: UL 이 AC 를 함의하지 않음은 J. D. Halpern, "The independence of the axiom of choice from the Boolean prime ideal theorem", *Fundamenta Mathematicae* 55 (1964), 57–66. 함의 사슬의 나머지 비함의와 Solovay 모형은 T. J. Jech, *The Axiom of Choice* (1973) 의 2장과 8장, R. M. Solovay, "A model of set theory in which every set of reals is Lebesgue measurable", *Annals of Mathematics* 92 (1970), 1–56.

# 연관 문서

## 선수지식

- [선택공리](axiom-of-choice.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #foundations #measure_theory
