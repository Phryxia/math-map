# 선택공리의 약한 형태

# 개요

선택공리의 약한 형태는 선택함수를 요구하는 범위를 줄인 공리다. [선택공리](axiom-of-choice.md)(axiom of choice, AC)는 임의의 집합족에서 선택함수를 주지만, 해석학과 위상수학의 정리 대부분은 가산 개의 선택이나 극대 필터의 존재만으로 증명된다. 이 약한 공리들은 **ZF**(Zermelo–Fraenkel 집합론) 위에서 서로 강도가 다르고, 어느 정리가 어느 세기를 쓰는지가 그 정리의 구성적 성격을 가른다.

# 직관

유계인 실수열이 수렴하는 부분열을 갖는다는 것을 증명할 때 선택이 얼마나 쓰이는지 센다.

수열이 $\lbrack 0,1\rbrack$ 에 있다고 하자. 구간을 반으로 잘라 수열의 항이 무한히 많이 든 쪽을 고르고, 그 안에서 아직 쓰지 않은 항 하나를 뽑는다. 다시 반으로 잘라 같은 일을 한다. 뽑은 항들이 수렴하는 부분열이다. 뽑는 일은 단계마다 한 번이고 단계는 가산 개다.

완전한 AC 는 쓰이지 않았다. AC 는 실수의 모든 부분집합마다 원소를 하나씩 고르는 선택함수를 요구하는데, 여기서는 가산 개의 선택만 했다.

그런데 이 가산 개의 선택은 미리 주어진 집합족에서 하는 것이 아니다. $n$ 번째 단계에 고르는 구간이 $n-1$ 번째 결과에 달려 있어서, 집합족 자체가 선택을 해 나가며 정해진다. 미리 나열된 가산 족에서 고르는 것과 앞 결과를 보고 다음을 고르는 것이 다른 공리이고, 전자가 가산 선택, 후자가 종속 선택이다.

더 강한 쪽은 선택함수 대신 극대 원소를 요구한다. 모든 필터가 초필터로 확장된다는 진술이 그것이고, 거기서는 가산 개가 아닌 선택이 필요하지만 AC 전체보다는 약하다.

# 정의

$\mathbb N$ 으로 첨자를 붙인 족에서 고르는 것을 **가산 선택**(countable choice, $\mathrm{AC}\_\omega$), 관계를 따라가며 고르는 것을 **종속 선택**(dependent choice, DC), 필터의 확장을 주는 것을 **초필터 보조정리**(ultrafilter lemma, UL)라 한다.

- $\mathrm{AC}\_\omega$: 공집합이 아닌 집합의 가산 족 $\lbrace A\_n\rbrace\_{n\in\mathbb N}$ 에 대해 모든 $n$ 에서 $f(n)\in A\_n$ 인 $f$ 가 있다.
- DC: 공집합이 아닌 $X$ 와 관계 $R\subseteq X\times X$ 가 모든 $x$ 에 대해 $xRy$ 인 $y$ 를 가지면, 모든 $n$ 에서 $x\_nRx\_{n+1}$ 인 수열이 있다.
- UL: 집합 위의 모든 필터는 초필터에 포함된다. 동치인 형태가 **부울 소 아이디얼 정리**(Boolean prime ideal theorem, BPI)로, 부울 대수의 모든 진 아이디얼이 소 아이디얼에 포함된다는 진술이다.

# 성질

## 함의 사슬

$$
\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}\_\omega,\qquad \mathrm{AC}\Rightarrow\mathrm{UL}
$$

AC 가 셋을 모두 함의하고, DC 가 $\mathrm{AC}\_\omega$ 를 함의한다. 역은 모두 성립하지 않는다. $\mathrm{AC}\_\omega$ 는 DC 를 함의하지 않고, UL 은 AC 를 함의하지 않는다.[^1] UL 과 DC 사이에는 함의가 양쪽 다 없다. UL 은 가산 족에서조차 선택함수를 주지 않으므로 $\mathrm{AC}\_\omega$ 를 함의하지 않는다.

## 각 세기로 증명되는 정리

| 세기 | 정리 |
| --- | --- |
| $\mathrm{AC}\_\omega$ | 가산 개 영집합의 합집합이 영집합, 가산 족의 가산 합집합이 가산 |
| DC | 유계 수열의 수렴 부분열, Baire 범주 정리 |
| UL | Hausdorff 공간의 Tychonoff 정리, Hahn–Banach 정리, 모든 체의 대수적 폐포의 유일성 |
| AC | Zorn 보조정리, 모든 벡터공간의 기저, Vitali 집합과 Banach–Tarski 분해 |

[Baire 범주 정리](baire-category.md)가 DC 를 쓰는 것은 중첩된 공을 고르는 단계가 앞 단계에 달려 있기 때문이다. [Hahn–Banach 정리](hahn-banach-theorem.md)는 UL 보다 약간 약한 세기이고 ZF 만으로는 증명되지 않는다.

## Solovay 모형

AC 를 부정하면 모든 실수 집합이 Lebesgue 가측인 모형을 만들 수 있다. 그 모형은 DC 를 만족하므로 해석학의 수렴 논법이 그대로 살아 있고, 그 안에서는 [Vitali 집합](vitali-set.md)이 존재하지 않는다. 구성에 도달 불가능 기수의 존재를 쓴다.[^1]

# 활용

- **측도론의 기본 사실.** [측도](measure.md)의 가산 가법성에서 따라오는 계산 가운데 영집합의 가산 합집합을 다루는 것은 $\mathrm{AC}\_\omega$ 로 충분하다. [Vitali 집합](vitali-set.md)의 구성은 완전한 AC 를 쓴다.
- **함수해석의 쌍대성.** [Banach 공간](banach-spaces.md)의 Hahn–Banach 정리로 세우는 쌍대공간의 비자명성이 UL 세기에 놓인다. 분리가능 공간으로 제한하면 $\mathrm{AC}\_\omega$ 로 내려간다.
- **곱공간의 콤팩트성.** [Tychonoff 정리](tychonoff-theorem.md)의 일반 판은 AC 와 동치이고, Hausdorff 로 제한한 판은 UL 과 동치다. [분리공리](separation-axioms.md)가 그 제한을 쓴다.

[^1]: UL 이 AC 를 함의하지 않음은 J. D. Halpern, "The independence of the axiom of choice from the Boolean prime ideal theorem", *Fundamenta Mathematicae* 55 (1964), 57–66. 함의 사슬의 나머지 비함의와 Solovay 모형은 T. J. Jech, *The Axiom of Choice* (1973) 의 2장과 8장, R. M. Solovay, "A model of set theory in which every set of reals is Lebesgue measurable", *Annals of Mathematics* 92 (1970), 1–56.

# 연관 문서

## 선수지식

- [선택공리](axiom-of-choice.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #foundations #measure_theory
