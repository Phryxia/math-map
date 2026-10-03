# Tychonoff 정리

# 개요

Tychonoff 정리는 [콤팩트](compactness.md) 공간들의 임의의 곱이 곱위상에서 콤팩트하다는 정리다. 좌표의 개수에 제한이 없어 비가산 개의 좌표를 가진 함수공간에도 적용된다.

ZF(선택공리를 뺀 Zermelo–Fraenkel) 안에서 이 정리는 [선택공리](axiom-of-choice.md)와 동치다. 콤팩트 Hausdorff 공간의 곱으로 제한한 판본은 그보다 약한 초필터 보조정리와 동치다.

# 직관

$\lbrack 0,1\rbrack^{\mathbb N}$ 의 점은 $\lbrack 0,1\rbrack$ 의 수열이다. 이 공간의 점열 $x^{(1)},x^{(2)},\dots$ 에서 수렴하는 부분열을 뽑는다. 첫 좌표만 모으면 $\lbrack 0,1\rbrack$ 의 유계 수열이므로 Bolzano–Weierstrass 정리로 수렴하는 부분열이 있다([수열의 극한](limits.md)). 그 부분열에서 둘째 좌표를 모아 다시 부분열을 뽑고, 그 안에서 셋째 좌표를 뽑는다. $k$ 번째 부분열의 $k$ 번째 항을 모으면 모든 좌표에서 수렴하는 부분열이 된다. 좌표를 $1,2,3,\dots$ 으로 줄 세울 수 있어서 이 뽑기가 끝났다.

좌표 집합을 $\mathbb N$ 대신 $\lbrack 0,1\rbrack$ 로 바꾸면 좌표를 줄 세울 수 없어 좌표마다 차례로 뽑는 과정이 끝나지 않는다. 이 공간에는 수렴하는 부분열이 없는 점열도 있다. 그래서 부분열 대신 열린 덮개로 콤팩트성을 보인다. 덮개를 쓰면 좌표를 차례로 밟는 과정이 없어지고 좌표마다 점을 하나씩 고르는 일만 남는데, 그 고르기가 선택공리다.

# 정의

## 곱위상

$\lbrace X_i\rbrace\_{i\in I}$ 를 위상 공간들의 족이라 하고 $X=\prod\_{i\in I}X_i$ 를 곱집합, $\pi_i:X\to X_i$ 를 $i$ 번째 좌표를 주는 사영이라 한다. **곱위상**은 모든 $\pi_i$ 를 연속으로 만드는 가장 거친 위상이고

$$
\mathcal S=\lbrace \pi_i^{-1}(U)\thinspace :\thinspace i\in I,\thinspace U \text{ 는 } X_i \text{ 의 열린집합}\rbrace
$$

를 부분기저로 갖는다. 곱위상의 열린집합은 $\mathcal S$ 의 원소를 유한 개 교집합한 것들의 합집합이다. 유한 개 좌표만 제약하는 집합이 기저가 되는 점이 상자위상과 다르고, Tychonoff 정리는 곱위상에서만 성립한다.

## 정리

$$
\text{각 } X_i \text{ 가 콤팩트이면 } \prod\_{i\in I}X_i \text{ 도 콤팩트다.}
$$

# 성질

## 부분기저를 쓴 증명

**Alexander 부분기저 보조정리.** 부분기저 $\mathcal S$ 의 원소들로 된 모든 덮개가 유한 부분덮개를 가지면 그 공간은 콤팩트다.

**증명의 요지.** 곱공간의 부분기저 원소는 $\pi_i^{-1}(U)$ 꼴이다. 이런 집합들의 덮개 $\mathcal U$ 가 유한 부분덮개를 갖지 않는다고 하고, 각 $i$ 에 대해

$$
\mathcal U_i=\lbrace U\thinspace :\thinspace \pi_i^{-1}(U)\in\mathcal U\rbrace
$$

를 둔다. $\mathcal U_i$ 는 $X_i$ 를 덮지 못한다. 덮는다면 $X_i$ 가 콤팩트하므로 유한 개 $U^1,\dots,U^m$ 이 $X_i$ 를 덮고, 그 원상 $\pi_i^{-1}(U^1),\dots,\pi_i^{-1}(U^m)$ 이 곱공간을 덮어 가정에 어긋난다. 그러므로 각 $i$ 마다 $\mathcal U_i$ 의 어느 원소에도 들어가지 않는 점 $x_i\in X_i$ 가 있다. 선택공리로 그런 $x_i$ 를 한꺼번에 고르면 $x=(x_i)\_{i\in I}$ 는 $\mathcal U$ 의 어느 원소에도 들어가지 않아 $\mathcal U$ 가 덮개라는 것에 어긋난다.

극대 필터를 써도 같은 증명이 된다. 유한 교집합 성질을 갖는 닫힌집합족을 극대 필터로 확장하고 각 좌표에서 수렴점을 고르는 쪽이며, 극대 필터의 존재가 고르기의 자리다.

## 선택공리와의 동치

Tychonoff 정리에서 선택공리가 따라 나온다[^1]. $\lbrace A_i\rbrace\_{i\in I}$ 를 공집합이 아닌 집합들의 족이라 하고, 정초성으로 $A_i\notin A_i$ 이므로 $p_i=A_i$ 를 새 점으로 붙여 $Y_i=A_i\cup\lbrace p_i\rbrace$ 라 한다. $Y_i$ 에 네 집합

$$
\lbrace\thinspace\varnothing,\thinspace \lbrace p_i\rbrace,\thinspace A_i,\thinspace Y_i\thinspace\rbrace
$$

을 위상으로 준다. 열린집합이 유한 개이므로 $Y_i$ 는 콤팩트하고 $A_i$ 는 닫힌집합이다. Tychonoff 정리로 $Y=\prod\_{i\in I}Y_i$ 가 콤팩트하다.

닫힌집합 $\pi_i^{-1}(A_i)$ 들은 유한 교집합 성질을 갖는다. 좌표 $i_1,\dots,i_n$ 을 유한 개 뽑으면 그 좌표에서는 $A_{i_k}$ 의 원소를 유한 번 고르고 나머지 좌표에서는 $p_i$ 를 두면 되기 때문이다. 콤팩트성의 유한 교집합 성질로

$$
\bigcap\_{i\in I}\pi_i^{-1}(A_i)=\prod\_{i\in I}A_i\neq\varnothing
$$

이고, 이 곱의 원소가 선택함수다. 반대 방향은 앞의 증명이 선택공리를 썼으므로 두 진술이 ZF 안에서 동치다.

## Hausdorff 판본의 강도

콤팩트 Hausdorff 공간의 곱으로 제한한 Tychonoff 정리는 모든 필터가 초필터로 확장된다는 초필터 보조정리와 ZF 안에서 동치다[^2]. 초필터 보조정리는 [부울 대수](boolean-algebras.md)의 소 아이디얼 정리와 동치이고, 선택공리를 함의하지 않는다[^2].

## 점열 콤팩트성의 비보존

$\lbrace 0,1\rbrace^{\lbrack 0,1\rbrack}$ 은 Tychonoff 정리로 콤팩트하지만 점열 콤팩트가 아니다. $x\in\lbrack 0,1\rbrack$ 의 이진 전개를 $0.b_1b_2b_3\dots$ 라 하고 $f_n(x)=b_n$ 으로 두면, 어떤 부분열 $n_1\lt n_2\lt\cdots$ 을 잡아도 $b_{n_k}$ 가 $k$ 의 홀짝을 따르는 $x$ 가 있어서 $f_{n_k}(x)$ 가 수렴하지 않는다. 콤팩트성은 임의 곱에서 유지되지만 점열 콤팩트성은 가산 곱까지만 유지된다.

# 활용

- **Banach–Alaoglu 정리.** [Banach 공간](banach-spaces.md) $X$ 의 쌍대공간 단위구가 약 $\ast$ 위상에서 콤팩트하다는 정리다. 그 단위구를 $\prod\_{x\in X}\lbrace c\in\mathbb C\thinspace :\thinspace \vert c\vert\le\Vert x\Vert\rbrace$ 의 닫힌 부분집합으로 보고 Tychonoff 정리를 쓴다.
- **Stone–Čech 콤팩트화.** 완전정칙 공간을 $\lbrack 0,1\rbrack$ 값 연속함수들의 곱에 심고 닫힘을 취하는 구성이다([분리공리](separation-axioms.md)). 그 곱의 콤팩트성이 Tychonoff 정리다.
- **1차 논리의 콤팩트성 정리.** [1차 논리](first-order-logic.md)의 문장들에 진리값을 주는 배정 전체가 $\lbrace 0,1\rbrace$ 의 곱이고, 각 문장이 정하는 닫힌집합족의 유한 교집합 성질에서 유한 만족 가능성이 전체 만족 가능성으로 올라간다.
- **유한에서 무한으로의 색칠 확장.** 모든 유한 부분그래프가 $k$ 색칠 가능한 그래프는 전체가 $k$ 색칠 가능하다(de Bruijn–Erdős 정리). $\lbrace 1,\dots,k\rbrace^V$ 의 콤팩트성에서 나온다([그래프 색칠](graph-coloring.md)).
- **Haar 측도의 존재.** 콤팩트 집합을 작은 열린집합의 평행이동으로 덮는 개수의 비가 유계 구간들의 곱에 들어가고, 그 곱의 콤팩트성으로 극한을 하나 잡는다([Haar 측도](haar-measure.md)).

[^1]: Tychonoff's theorem, Wikipedia. Kelley 의 1950 년 논증으로 Tychonoff 정리에서 선택공리를 끌어낸다. https://en.wikipedia.org/wiki/Tychonoff%27s_theorem
[^2]: Paul Howard, Jean E. Rubin, *Consequences of the Axiom of Choice*, American Mathematical Society, 1998. 형태 14 (초필터 보조정리)와 형태 1 (선택공리)의 비교, 콤팩트 Hausdorff 곱 판본의 동치, Halpern–Lévy 모형에서 초필터 보조정리가 선택공리를 함의하지 않음.

# 연관 문서

## 선수지식

- [콤팩트성](compactness.md)
- [선택공리](axiom-of-choice.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #set_theory #foundations #functional_analysis
