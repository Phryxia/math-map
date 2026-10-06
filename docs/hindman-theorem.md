# Hindman 정리

# 개요

Hindman 정리는 자연수를 유한 개 색으로 칠하면 어떤 무한집합의 유한합이 전부 한 색이 되는 집합이 있다는 정리다. 증명은 $\beta\mathbb N$ 의 덧셈 반군에서 멱등 초필터를 잡는 것으로, 유한 조합론의 논법이 닿지 않는 자리를 위상으로 넘는다.

# 직관

[Ramsey 이론](ramsey-theory.md)의 Schur 정리는 $\mathbb N$ 을 유한 개 색으로 칠하면 $x+y=z$ 이고 세 수의 색이 같은 삼짝을 준다. 같은 요구를 세 수가 아니라 무한집합 $B$ 에 걸어 $B$ 의 원소를 유한 개 골라 더한 값이 모두 같은 색이기를 바란다고 하자.

Schur 정리를 반복해 쌓아 보면 막힌다. 첫 삼짝 $\lbrace x,y,x+y\rbrace$ 를 얻고 그 색의 집합 안에서 Schur 정리를 다시 쓰면 둘째 삼짝이 나오지만, 두 삼짝의 원소를 섞어 더한 값의 색은 아무 조건도 받지 않았다. $n$ 원소 집합의 유한합은 $2^n-1$ 개이므로 원소를 하나 더할 때마다 새로 걸리는 조건이 그만큼 늘고, 유한 번의 선택으로는 끝나지 않는다.

무한히 많은 조건을 한꺼번에 받는 대상을 먼저 만든다. 색의 집합 하나를 고르는 대신 "큰 집합" 들의 모음을 고르고, 그 모음이 유한 교집합에 닫히고 모든 집합과 그 여집합 가운데 하나를 담도록 한다. 이것이 $\mathbb N$ 위의 초필터이고 [Stone–Čech 콤팩트화](stone-cech-compactification.md) $\beta\mathbb N$ 의 점이다.

초필터끼리의 덧셈을 정의하면 $\beta\mathbb N$ 이 반군이 되고, 콤팩트성이 $p+p=p$ 인 초필터의 존재를 준다. $A$ 가 그 $p$ 에 들면 $p+p=p$ 가 "$A$ 로 옮겨 가는 이동값들의 집합도 $p$ 에 든다" 는 조건을 주므로, 원소를 하나씩 뽑을 때마다 다음 선택지가 여전히 $p$ 에 남는다. 선택이 무한히 이어지고 뽑은 원소들의 유한합이 모두 $A$ 에 들어간다.

# 정의

## 유한합 집합

무한집합 $B=\lbrace b_1\lt b_2\lt \dots\rbrace\subseteq\mathbb N$ 의 **유한합 집합**은

$$
\mathrm{FS}(B)=\Bigl\lbrace\textstyle\sum_{i\in F}b_i:F\subseteq\mathbb N\ \text{이 유한, }F\ne\varnothing\Bigr\rbrace
$$

이다. 여기서 $\mathrm{FS}$ 는 finite sums 를 줄인 것이다.

## Hindman 정리

**정리.** $\mathbb N$ 을 유한 개 색으로 칠하면 무한집합 $B$ 로 $\mathrm{FS}(B)$ 의 모든 원소가 같은 색인 것이 있다.

## 초필터의 덧셈

$p,q$ 가 $\mathbb N$ 위의 초필터일 때 $p+q$ 를

$$
A\in p+q\iff\lbrace n\in\mathbb N:A-n\in q\rbrace\in p
$$

로 정의한다. 여기서 $A-n=\lbrace m\in\mathbb N:m+n\in A\rbrace$ 다. $p+q$ 도 초필터이고, 주 초필터끼리의 덧셈은 $\mathbb N$ 의 덧셈과 같다.

# 성질

## 오른쪽 위상 반군 구조

$(\beta\mathbb N,+)$ 는 결합적이고, 각 $p$ 에 대해 $q\mapsto q+p$ 가 연속이다. 결합성은 정의를 두 번 풀어 양쪽이 같은 조건이 됨을 보인다. 연속성은 $\beta\mathbb N$ 의 기저 열린집합 $\overline{e(A)}$ 의 되끌기가 $\overline{e(\lbrace n:A-n\in p\rbrace)}$ 라는 계산에서 나온다. 덧셈은 가환이 아니다.

## Ellis 의 멱등원 정리

**정리.** 콤팩트 Hausdorff 오른쪽 위상 반군에는 $p+p=p$ 인 원소가 있다.

증명의 요지. Zorn 보조정리로 극소 닫힌 부분반군 $T$ 를 잡는다. $p\in T$ 에 대해 $T+p$ 는 연속사상의 상이므로 콤팩트이고 닫힌 부분반군이며 $T$ 에 포함되므로, 극소성으로 $T+p=T$ 다. 그러면 $S=\lbrace q\in T:q+p=p\rbrace$ 는 공집합이 아니고 닫힌 부분반군이며 $T$ 에 포함되므로 $S=T$ 다. $p\in T=S$ 이므로 $p+p=p$ 다.

## 멱등 초필터에서의 재귀

**보조정리.** $p$ 가 멱등이고 $A\in p$ 이면 $A^\star=\lbrace n\in A:A-n\in p\rbrace$ 가 $p$ 에 들고, $n\in A^\star$ 이면 $A^\star\cap(A^\star-n)$ 도 $p$ 에 든다.

$A\in p=p+p$ 가 곧 $\lbrace n:A-n\in p\rbrace\in p$ 이므로 그 집합과 $A$ 의 교집합인 $A^\star$ 가 $p$ 에 든다. 둘째 진술은 $A-n\in p$ 에 첫 진술을 다시 적용한 것이다.

## Hindman 정리의 증명

증명의 요지. Ellis 의 정리로 멱등 초필터 $p$ 를 잡는다. 색의 집합들이 $\mathbb N$ 을 유한 분할하고 초필터는 유한 분할의 조각 가운데 정확히 하나를 담으므로, 그 조각 $A$ 를 고른다. 보조정리로 $A^\star\in p$ 이고 초필터의 원소는 공집합이 아니므로 $b_1\in A^\star$ 를 뽑는다. $A_1=A^\star\cap(A^\star-b_1)$ 이 $p$ 에 들고, 여기서 $b_2\in A_1^\star$ 를 뽑고 $A_2=A_1^\star\cap(A_1^\star-b_2)$ 로 간다. 이 재귀가 주는 $B=\lbrace b_1,b_2,\dots\rbrace$ 에 대해 $\mathrm{FS}(B)\subseteq A$ 이므로 유한합이 모두 $A$ 의 색이다.

## Schur 정리와의 관계

Schur 정리는 Hindman 정리의 따름정리다. $B$ 의 두 원소 $b_1,b_2$ 에 대해 $b_1,b_2,b_1+b_2$ 가 모두 $\mathrm{FS}(B)$ 에 들므로 단색 Schur 삼짝이 된다. 역으로 Hindman 정리는 Schur 정리보다 강한 진술이며, 색칠마다 유한합이 닫힌 무한집합을 요구한다.

# 활용

- **분할 정칙성.** 유한합 집합이 분할 정칙 집합족의 기본 예다. [Ramsey 이론](ramsey-theory.md)의 Schur 정리와 Rado 정리가 선형 방정식계에 대해 묻는 것을 Hindman 정리는 무한 생성집합에 대해 답한다.
- **IP 집합.** 어떤 무한집합의 유한합 집합을 담는 집합을 IP 집합(infinite-dimensional parallelepiped)이라 하고, 이 집합족에서의 되돌이가 van der Waerden 정리의 동역학 증명에 쓰인다.
- **초필터 대수.** $\beta\mathbb N$ 의 멱등원과 극소 왼쪽 아이디얼의 구조를 조합론에 쓰는 방법이 이 증명에서 나왔다. 멱등원의 극소성을 더 요구하면 중심 집합에 대한 정리들이 따라온다.

# 연관 문서

## 선수지식

- [Ramsey 이론](ramsey-theory.md)
- [Stone–Čech 콤팩트화](stone-cech-compactification.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #topology #set_theory
