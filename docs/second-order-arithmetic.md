# 2차 산술

# 개요

2차 산술은 자연수를 가리키는 변수와 자연수 집합을 가리키는 변수를 함께 쓰는 1차 이론이다. 집합 변수가 있으면 실수와 연속함수를 자연수 집합으로 코딩할 수 있고, 해석학의 정리를 산술의 언어로 진술할 수 있다. 어떤 논리식에 대해 집합의 존재를 인정하는지가 체계를 가르고, 그 눈금으로 정리의 세기를 재는 것이 [역수학](reverse-mathematics.md)이다.

# 직관

[Peano 공리](peano-axioms.md)의 1차 언어로는 유계 증가 수열의 수렴을 말할 수 없다. 수열은 자연수에서 유리수로 가는 함수이고, 그 수렴은 실수 하나의 존재를 주장한다. 자연수만 가리키는 변수로는 실수를 가리킬 방법이 없다.

실수를 자연수 집합으로 바꿔 쓴다. 유리수를 $q_0,q_1,q_2,\dots$ 로 줄 세우고 실수 $x$ 를 $x$ 로 수렴하는 유리수열의 지표 집합으로 나타낸다. 연속함수는 유리수 구간의 쌍이 이루는 집합으로 나타낸다. 이렇게 두면 "유계 증가 수열이 수렴한다" 는 "어떤 자연수 집합이 존재한다" 가 된다.

집합의 존재를 어디까지 인정하는지가 남는다. 논리식 $\varphi(n)$ 마다 $\lbrace n:\varphi(n)\rbrace$ 이 있다고 하면 강한 체계가 되고, $\varphi$ 를 계산 가능한 것으로 제한하면 약한 체계가 된다. 같은 정리가 어떤 제한 아래에서 증명되는지가 그 정리의 세기다.

# 정의

## 언어

$L_2$ 는 수 변수 $m,n,\dots$ 와 집합 변수 $X,Y,\dots$ 를 가지며, 기호는 $0$ , $1$ , $+$ , $\cdot$ , $\lt$ , $\in$ 이다. 항은 수 항뿐이고 집합 변수는 항을 만들지 않는다. 원자 논리식은 $s=t$ , $s\lt t$ , $s\in X$ 다.

논리식에서 집합 변수에 붙는 양화사의 개수로 계층을 매긴다. 집합 양화사가 없는 논리식이 **산술적 논리식**이고, 집합 양화사가 $k$ 번 교대하면 $\Sigma^1_k$ 또는 $\Pi^1_k$ 다. 이 눈금이 [해석적 계층](analytical-hierarchy.md)의 눈금과 같다.

## 내포 공리꼴

논리식 $\varphi(n)$ 에 대해

$$
\exists X\thickspace\forall n\thinspace(n\in X\leftrightarrow\varphi(n))
$$

을 $\varphi$ 의 **내포 공리**라 한다. $\varphi$ 에 $X$ 가 자유롭게 나타나지 않아야 한다. 논리식 부류 $\Gamma$ 의 모든 논리식에 대한 내포 공리를 $\Gamma$ 내포라 한다.

**완전 2차 산술** $Z_2$ 는 Peano 공리에 모든 $L_2$ 논리식의 내포와 집합에 대한 귀납법을 더한 체계다.

## 부분체계

내포를 제한해 얻는 다섯 체계가 역수학의 눈금이다.

| 체계 | 내포의 제한 |
| --- | --- |
| $\mathrm{RCA}\_0$ | 계산 가능한 정의, 곧 $\Delta^0_1$ 내포와 $\Sigma^0_1$ 귀납법 |
| $\mathrm{WKL}\_0$ | $\mathrm{RCA}\_0$ 에 [약한 König 보조정리](weak-konig-lemma.md)를 더한 것 |
| $\mathrm{ACA}\_0$ | 산술적 논리식의 내포 |
| $\mathrm{ATR}\_0$ | 산술적 논리식을 계산 가능한 정렬순서에 따라 초한 반복 |
| $\Pi^1_1\text{-}\mathrm{CA}\_0$ | $\Pi^1_1$ 논리식의 내포 |

이름의 약어는 재귀적 내포 공리(recursive comprehension axiom, RCA), 약한 König 보조정리(weak König's lemma, WKL), 산술적 내포 공리(arithmetical comprehension axiom, ACA), 산술적 초한 재귀(arithmetical transfinite recursion, ATR), 내포 공리(comprehension axiom, CA)에서 왔다. 아래 첨자 $0$ 은 귀납법을 $\Sigma^0_1$ 논리식으로 제한했다는 표시다.

# 성질

## $\omega$ 모형

$L_2$ 의 모형은 수 부분과 집합 부분의 쌍이다. 수 부분이 표준 자연수 $\mathbb N$ 인 모형을 $\omega$ 모형이라 하고, 이때 모형은 집합족 $\mathcal S\subseteq\mathcal P(\mathbb N)$ 하나로 정해진다.

계산 가능한 집합 전체는 $\mathrm{RCA}\_0$ 의 $\omega$ 모형이고, 산술적 집합 전체는 $\mathrm{ACA}\_0$ 의 $\omega$ 모형이며, [초산술적 계층](hyperarithmetical-hierarchy.md)의 집합 전체는 $\mathrm{ATR}\_0$ 보다 약한 체계의 모형을 준다. 어떤 정리가 $\mathrm{RCA}\_0$ 에서 증명되지 않음을 보이는 표준 수법은 그 정리가 거짓인 $\omega$ 모형을 만드는 것이다.

## 보존성

$\mathrm{RCA}\_0$ 는 1차 산술의 부분체계 $\mathrm{I}\Sigma^0_1$ 에 대해 $\Pi^0_2$ 문장을 보존한다. 곧 $\mathrm{RCA}\_0$ 에서 증명되는 $\Pi^0_2$ 문장은 $\mathrm{I}\Sigma^0_1$ 에서도 증명된다.[^1] $\mathrm{WKL}\_0$ 도 같은 보존성을 가지며, 이 사실이 $\mathrm{WKL}\_0$ 에서 증명된 정리에 원시재귀적 내용이 있음을 준다.

## 계층과의 대응

$\Sigma^0_k$ 논리식의 내포는 [산술적 계층](arithmetical-hierarchy.md)의 $\Sigma^0_k$ 집합의 존재와 같고, $\Sigma^1_k$ 내포는 해석적 계층의 대응 단계와 같다. 체계의 세기를 논리식 부류로 재는 것과 집합을 정의 가능성으로 재는 것이 같은 눈금이라는 뜻이다.

# 활용

- 역수학은 정리를 $L_2$ 문장으로 옮기고 위 다섯 체계 가운데 어느 것과 $\mathrm{RCA}\_0$ 위에서 동치인지 찾는다. 유계 증가 수열의 수렴과 Bolzano–Weierstrass 정리는 $\mathrm{ACA}\_0$ 와 동치이고, Heine–Borel 정리와 [Brouwer 고정점 정리](brouwer-fixed-point.md)는 $\mathrm{WKL}\_0$ 과 동치다.
- [약한 König 보조정리](weak-konig-lemma.md)의 자리가 $\mathrm{WKL}\_0$ 이고, 그 체계가 콤팩트성을 쓰는 정리들을 모은다.
- 해석적 계층의 $\Pi^1_1$ 단계가 $\Pi^1_1\text{-}\mathrm{CA}\_0$ 의 내포를 정하고, 그 위에서 정렬순서의 비교와 귀납적 정의가 형식화된다.

[^1]: S. G. Simpson, *Subsystems of Second Order Arithmetic*, 2판, Cambridge University Press (2009), 9.1절과 9.2절. $\mathrm{RCA}\_0$ 와 $\mathrm{WKL}\_0$ 의 $\Pi^0_2$ 보존성.

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)
- [Peano 공리](peano-axioms.md)

## 더 알아보기

- [해석적 계층](analytical-hierarchy.md)
- [역수학](reverse-mathematics.md)

#logic #foundations #computation
