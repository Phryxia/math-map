# 역수학

# 개요

**역수학(reverse mathematics)** 은 수학의 정리를 증명하는 데 어떤 공리가 필요한지 정하는 연구다. [실수](real-numbers.md)의 유계 수열이 수렴하는 부분열을 갖는다는 정리를 증명하려면, 구간을 반씩 자르며 수열의 항이 무한히 많은 쪽을 고를 때마다 무한에 대한 물음에 답해야 한다. 역수학은 [2차 산술](second-order-arithmetic.md)의 약한 체계 위에서 정리로부터 공리가 증명되는지를 보아, 이 정리가 산술적 내포 공리(arithmetical comprehension axiom)와 동치임을 보인다.

# 직관

실수의 유계 수열이 수렴하는 부분열을 갖는다는 [Bolzano–Weierstrass 정리](bolzano-weierstrass.md)를 증명하려면 무엇이 있어야 하는지 묻는다. 수열 $\langle x_n\rangle$ 이 $\lbrack 0,1\rbrack$ 에 있을 때 구간을 반으로 자르고 수열의 항을 무한히 많이 담은 쪽을 고르기를 되풀이하면 구간이 한 점으로 줄고 그 점이 부분열의 극한이다. 매 단계에서 판정하는 것은 "이 반쪽 구간에 $x_n$ 이 들어가는 $n$ 이 무한히 많은가" 이고, 이 물음에는 $\forall N \exists n \gt N$ 꼴의 한정사(quantifier, 양화사)가 들어 있다. 이런 한정사가 들어 있는 논리식이 정의하는 집합이 존재한다고 인정해야 구간의 열을 만들 수 있고, 그 존재를 공리로 내놓은 것이 산술적 내포 공리다.

거꾸로 계산 가능한 집합만 인정하는 약한 체계 위에서 Bolzano–Weierstrass 를 가정하고, 단사 함수 $f$ 를 하나 잡아 $2^{-f(n)}$ 의 부분합들을 수열로 놓는다. 이 수열의 수렴하는 부분열의 극한을 2진 전개로 쓰면 $f$ 의 치역이 나온다. 치역은 존재 한정사 하나로 정의되는 집합이므로, 정리로부터 산술적 내포가 증명된다. 공리에서 정리로 가는 평소 방향의 반대쪽, 곧 정리에서 공리로 가는 증명을 함께 보므로 이 연구를 역수학이라 한다.

# 정의

## 2차 산술

2차 산술의 언어는 자연수를 가리키는 수 변수와 자연수 집합을 가리키는 집합 변수를 함께 갖는다. 항은 $0$, $1$, $+$, $\cdot$ 로 만들고, 원자식은 $s=t$, $s \lt t$, $s \in X$ 다.

논리식 $\varphi$ 의 모든 한정사가 수 변수에만 걸리면 $\varphi$ 를 **산술적(arithmetical)** 이라 한다. "$n$ 은 짝수다" 를 적은 $\exists m\thinspace(n=m+m)$ 은 산술적이고, 직관 절의 "$x_n$ 이 반쪽 구간에 들어가는 $n$ 이 무한히 많다" 도 $\forall N\exists n\gt N$ 꼴의 산술적 논리식이다. 유계 한정사만 있는 논리식 앞에 수 변수의 존재 한정사 하나를 붙인 꼴을 $\Sigma^0_1$, 전칭 한정사 하나를 붙인 꼴을 $\Pi^0_1$ 이라 하고, 두 꼴로 모두 쓸 수 있는 논리식을 $\Delta^0_1$ 이라 한다. $\Delta^0_1$ 논리식이 정의하는 집합은 계산 가능한 집합이다. 집합 변수에 걸린 존재 한정사 하나로 시작하고 나머지가 산술적인 논리식은 $\Sigma^1_1$, 전칭 한정사 하나로 시작하면 $\Pi^1_1$ 이다.

**내포 도식(comprehension scheme)** 은 논리식이 정의하는 집합의 존재를 주장한다.

$$
\exists X \thinspace \forall n \thinspace \bigl(n \in X \leftrightarrow \varphi(n)\bigr)
$$

$\varphi$ 를 어떤 모임으로 제한하는가가 체계를 가른다. 전체 2차 산술 $\mathrm{Z}\_2$ 는 제한을 두지 않는다. $\varphi(n)$ 이 $\exists m\thinspace(n=m+m)$ 이면 이 사례는 짝수 집합의 존재를 주장하고, $\varphi$ 가 $\Delta^0_1$ 이므로 아래 표의 모든 체계에서 성립한다. 직관 절의 무한히 많은 $n$ 에 관한 논리식의 사례는 산술적 내포부터 성립한다.

## 다섯 체계

| 체계 | 내포의 범위 | 이름의 뜻 |
| --- | --- | --- |
| $\mathrm{RCA}\_0$ | $\Delta^0_1$ 논리식 | 재귀적 내포(recursive comprehension) |
| $\mathrm{WKL}\_0$ | $\mathrm{RCA}\_0$ 에 [약한 König 보조정리](weak-konig-lemma.md) | 약한 König(weak König) |
| $\mathrm{ACA}\_0$ | 산술적 논리식 | 산술적 내포(arithmetical comprehension) |
| $\mathrm{ATR}\_0$ | 산술적 내포의 초한 반복 | 산술적 초한 재귀(arithmetical transfinite recursion) |
| $\Pi^1_1\text{-}\mathrm{CA}\_0$ | $\Pi^1_1$ 논리식 | $\Pi^1_1$ 내포 |

아래 첨자 $0$ 은 귀납 공리를 $\Sigma^0_1$ 논리식으로 제한했다는 표시다. 약한 König 보조정리는 $\lbrace 0,1\rbrace$ 위의 무한 나무가 무한 경로를 갖는다는 진술이다.

기저 체계는 $\mathrm{RCA}\_0$ 다. 이 체계 안에서 실수는 유리수의 Cauchy 수열로, [연속함수](continuity.md)는 유리 근방 사이의 대응 부호로 표현한다.

# 성질

## 기저 체계에서 증명되는 정리

$\mathrm{RCA}\_0$ 에서 [중간값 정리](intermediate-value-theorem.md), 가산체의 대수적 폐포의 존재, 완비 가분 거리공간의 [Baire 범주 정리](baire-category.md)가 증명된다.

중간값 정리의 증명은 이분법이지만 Bolzano–Weierstrass 와 달리 무한히 많은 항에 대한 물음이 필요 없다. 어느 유리수 중점에서 $f$ 의 값이 $0$ 이면 그 점이 답이다. 그렇지 않으면 중점마다 $f$ 의 값이 $0$ 이 아니므로 유리수 근사를 충분히 정밀하게 잡아 부호를 판정할 수 있다. 판정이 계산 가능하므로 $\Delta^0_1$ 내포로 충분하다.

## 동치 정리

$\mathrm{RCA}\_0$ 위에서 다음이 서로 동치다.[^1]

- 약한 König 보조정리
- 닫힌 유계 구간의 [Heine–Borel 콤팩트성](heine-borel.md)
- $\lbrack 0,1\rbrack$ 위 연속함수가 최댓값을 갖는다
- $\lbrack 0,1\rbrack$ 위 연속함수가 [균등연속](uniform-continuity.md)이다
- [1차 논리](first-order-logic.md)의 Gödel 완전성 정리(completeness theorem)
- 가산 가환환이 [소 아이디얼](prime-ideals.md)을 갖는다

$\mathrm{RCA}\_0$ 위에서 다음도 서로 동치다.

- 산술적 내포
- 유계 단조 실수열이 수렴한다
- Bolzano–Weierstrass 정리
- 가산 벡터공간이 기저를 갖는다
- 가산 [그래프](graphs.md)의 König 보조정리

$\mathrm{ATR}\_0$ 은 가산 정렬순서 둘이 항상 비교 가능하다는 진술과 동치이고, [Σ¹₁ 경계 정리](sigma11-boundedness.md)와도 동치다. $\Pi^1_1\text{-}\mathrm{CA}\_0$ 은 가산 Abel 군이 나눌 수 있는 부분과 축소된 부분으로 쪼개진다는 진술과 동치다.

## 역방향 증명

동치 증명은 두 방향이다. 순방향은 통상의 증명이고, 역방향 증명(reversal)이 역수학의 이름이 가리키는 쪽이다.

역방향 증명의 표준 수법은 계산 불가능한 집합을 정리의 대상으로 부호화하는 것이다. 산술적 내포를 증명할 때는 단사 함수의 치역을, 약한 König 보조정리를 증명할 때는 서로 분리할 수 없는 두 재귀적 열거 가능 집합을 쓴다. 정리가 주는 대상에서 그 집합을 읽어 내면 내포 공리가 증명된다.

## 모형과 독립성

$\mathrm{RCA}\_0$ 의 집합 변수 범위를 계산 가능한 집합 전체로 잡으면 모형이 되고, $\mathrm{ACA}\_0$ 의 모형은 되지 않는다. [정지 문제](halting-problem.md)의 해가 계산 가능하지 않으므로 산술적 내포가 성립하지 않는다.

$\mathrm{WKL}\_0$ 은 계산 가능한 집합만으로는 모형을 얻지 못하지만 저차 기저 정리(low basis theorem)로 모형이 구성되고, 그 모형이 $\mathrm{ACA}\_0$ 의 모형이 아니므로 두 체계가 다르다. 이 분리는 [계산 가능성](computability.md)의 튜링 차수(Turing degree) 계산으로 증명된다.

# 활용

- 정리의 증명 강도에 순서를 준다. 어느 정리가 $\mathrm{WKL}\_0$ 에 놓이는지 $\mathrm{ACA}\_0$ 에 놓이는지가 그 정리가 쓰는 비구성적 단계의 세기를 알려주는 값이다.
- 구성적 증명의 한계를 정한다. $\mathrm{RCA}\_0$ 에서 증명되는 정리는 계산 가능한 입력에 대해 계산 가능한 출력을 주고, [직관주의](intuitionism.md)가 인정하는 증명과 가까운 자리에 있다.
- Hilbert 프로그램의 부분적 수행을 뒷받침한다. $\mathrm{WKL}\_0$ 은 원시재귀 산술(primitive recursive arithmetic)에 대해 보존적이므로, 이 체계에서 증명되는 $\Pi^0_2$ 진술은 유한적 방법으로도 증명된다. [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)의 유한적 관점을 이 결과가 뒷받침한다.
- [Ramsey 이론](ramsey-theory.md)의 정리들이 다섯 체계 어디에도 놓이지 않는 사례를 준다. 쌍에 대한 무한 Ramsey 정리는 $\mathrm{ACA}\_0$ 보다 약하고 $\mathrm{WKL}\_0$ 과 비교 불가능하다.

[^1]: Stephen G. Simpson, *Subsystems of Second Order Arithmetic*, 2nd ed., Cambridge University Press (2009). 다섯 체계의 정의와 동치 목록, 모형 구성이 이 책의 전개다.

# 연관 문서

## 선수지식

- [계산 가능성](computability.md)
- [2차 산술](second-order-arithmetic.md)

## 더 알아보기

- [약한 König 보조정리](weak-konig-lemma.md)

#logic #foundations #computation
