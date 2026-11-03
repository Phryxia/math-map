# Hindman 정리

# 개요

**Hindman 정리(Hindman's theorem)** 는 자연수를 유한 개 색으로 칠하면 어떤 무한집합의 유한합이 전부 한 색이 되는 집합이 있다는 정리다. 자연수를 빨강과 파랑으로 칠하면 $x$, $y$, $x+y$ 가 같은 색인 세 수는 늘 찾을 수 있지만, 무한히 많은 수를 골라 그중 몇 개를 더한 값이 모두 같은 색이기를 바라면 수를 하나 고를 때마다 맞춰야 할 합이 두 배로 늘어난다. Hindman 정리는 이 선택들을 한꺼번에 맞추는 대상을 $\beta\mathbb N$ 의 덧셈 반군에서 멱등 초필터로 잡아 증명된다.

# 직관

[Ramsey 이론](ramsey-theory.md)의 Schur 정리(Schur's theorem)는 $\mathbb N$ 을 유한 개 색으로 칠하면 $x+y=z$ 이고 세 수의 색이 같은 삼짝을 준다. 같은 요구를 세 수가 아니라 무한집합 $B$ 에 걸어 $B$ 의 원소를 유한 개 골라 더한 값이 모두 같은 색이기를 바란다고 하자.

Schur 정리를 반복해 쌓아 보면 막힌다. 첫 삼짝 $\lbrace x,y,x+y\rbrace$ 를 얻고 그 색의 집합 안에서 Schur 정리를 다시 쓰면 둘째 삼짝이 나오지만, 두 삼짝의 원소를 섞어 더한 값의 색은 아무 조건도 받지 않았다. $n$ 원소 집합의 유한합은 $2^n-1$ 개이므로 원소를 하나 더할 때마다 새로 걸리는 조건이 그만큼 늘고, 유한 번의 선택으로는 끝나지 않는다.

무한히 많은 조건을 한꺼번에 받는 대상을 먼저 만든다. 색의 집합 하나를 고르는 대신 "큰 집합" 들의 모음을 고르고, 그 모음이 유한 교집합에 닫히고 모든 집합과 그 여집합 가운데 하나를 담도록 한다. 이것이 $\mathbb N$ 위의 초필터이고 Stone–Čech 콤팩트화 $\beta\mathbb N$ 의 점이다.

초필터끼리의 덧셈을 정의하면 $\beta\mathbb N$ 이 반군이 되고, 콤팩트성이 $p+p=p$ 인 초필터의 존재를 준다. $A$ 가 그 $p$ 에 들면 $p+p=p$ 가 "$A$ 로 옮겨 가는 이동값들의 집합도 $p$ 에 든다" 는 조건을 주므로, 원소를 하나씩 뽑을 때마다 다음 선택지가 여전히 $p$ 에 남는다. 선택이 무한히 이어지고 뽑은 원소들의 유한합이 모두 $A$ 에 들어간다.

# 정의

## 유한합 집합

무한집합 $B=\lbrace b_1\lt b_2\lt \dots\rbrace\subseteq\mathbb N$ 의 **유한합 집합(finite sums set)** 은

$$
\mathrm{FS}(B)=\Bigl\lbrace\textstyle\sum_{i\in F}b_i:F\subseteq\mathbb N\thinspace\text{이 유한, }F\ne\varnothing\Bigr\rbrace
$$

이다. $B=\lbrace 1,2,4,8,\dots\rbrace$ 이면 양의 정수는 모두 $2$ 의 서로 다른 거듭제곱의 합으로 한 번 쓰이므로 $\mathrm{FS}(B)=\mathbb N$ 이다. $B$ 를 $4$ 의 거듭제곱 $\lbrace 1,4,16,\dots\rbrace$ 로 잡으면 $\mathrm{FS}(B)$ 는 $4$ 진법 숫자가 $0$ 과 $1$ 뿐인 수 $1,4,5,16,17,20,21,\dots$ 이다.

## Hindman 정리

Hindman 정리는 다음 진술이다. $\mathbb N$ 을 유한 개 색으로 칠하면 무한집합 $B$ 로 $\mathrm{FS}(B)$ 의 모든 원소가 같은 색인 것이 있다. N. Hindman 이 1974 년에 증명했다[^1]. 홀수와 짝수로 칠하면 $B=\lbrace 2,4,8,\dots\rbrace$ 의 유한합이 모두 짝수다.

## 초필터

$\mathbb N$ 의 부분집합들의 모음 $p$ 가 공집합을 담지 않고, 유한 교집합과 상위집합에 닫히며, 모든 $A\subseteq\mathbb N$ 에 대해 $A$ 와 그 여집합 가운데 하나를 담으면 $p$ 를 **초필터(ultrafilter)** 라 한다. $n\in\mathbb N$ 마다 $e(n)=\lbrace A:n\in A\rbrace$ 는 초필터이고, 이 꼴을 **주 초필터(principal ultrafilter)** 라 한다. 초필터 전체가 [Stone–Čech 콤팩트화](stone-cech-compactification.md) $\beta\mathbb N$ 이고, $\overline{e(A)}$ 는 $A$ 를 담는 초필터 전체로 기저 열린집합이다.

## 초필터의 덧셈

$p,q$ 가 $\mathbb N$ 위의 초필터일 때 $p+q$ 를

$$
A\in p+q\iff\lbrace n\in\mathbb N:A-n\in q\rbrace\in p
$$

로 정의한다. 여기서 $A-n=\lbrace m\in\mathbb N:m+n\in A\rbrace$ 다. $p+q$ 도 초필터이다. 주 초필터에서는 $A\in e(m)+e(n)$ 이 $A-m\in e(n)$, 곧 $m+n\in A$ 와 같으므로 $e(m)+e(n)=e(m+n)$ 이다. 초필터 $p$ 가 $p+p=p$ 이면 **멱등(idempotent)** 이라 한다. $e(n)+e(n)=e(2n)$ 이므로 주 초필터는 멱등이 아니다.

# 성질

## 오른쪽 위상 반군 구조

반군 위의 위상에서 각 $p$ 에 대해 $q\mapsto q+p$ 가 연속이면 오른쪽 위상 반군(right topological semigroup)이라 한다. $(\beta\mathbb N,+)$ 는 결합적이고, 각 $p$ 에 대해 $q\mapsto q+p$ 가 연속이다. 결합성은 정의를 두 번 풀어 양쪽이 같은 조건이 됨을 보인다. 연속성은 $\beta\mathbb N$ 의 기저 열린집합 $\overline{e(A)}$ 의 되끌기가 $\overline{e(\lbrace n:A-n\in p\rbrace)}$ 라는 계산에서 나온다. 덧셈은 가환이 아니다.

## Ellis 의 멱등원 정리

정리(Ellis 의 멱등원 정리, Ellis's idempotent theorem). 콤팩트 Hausdorff 오른쪽 위상 반군에는 $p+p=p$ 인 원소가 있다.

증명의 요지. [Zorn 보조정리](axiom-of-choice.md)로 극소 닫힌 부분반군 $T$ 를 잡는다. $p\in T$ 에 대해 $T+p$ 는 연속사상의 상이므로 콤팩트이고 닫힌 부분반군이며 $T$ 에 포함되므로, 극소성으로 $T+p=T$ 다. 그러면 $S=\lbrace q\in T:q+p=p\rbrace$ 는 공집합이 아니고 닫힌 부분반군이며 $T$ 에 포함되므로 $S=T$ 다. $p\in T=S$ 이므로 $p+p=p$ 다.

## 멱등 초필터에서의 재귀

보조정리. $p$ 가 멱등이고 $A\in p$ 이면 $A^\star=\lbrace n\in A:A-n\in p\rbrace$ 가 $p$ 에 들고, $n\in A^\star$ 이면 $A^\star\cap(A^\star-n)$ 도 $p$ 에 든다.

$A\in p=p+p$ 가 곧 $\lbrace n:A-n\in p\rbrace\in p$ 이므로 그 집합과 $A$ 의 교집합인 $A^\star$ 가 $p$ 에 든다. 둘째 진술은 $A-n\in p$ 에 첫 진술을 다시 적용한 것이다.

## Hindman 정리의 증명

증명의 요지. Ellis 의 정리로 멱등 초필터 $p$ 를 잡는다. 색의 집합들이 $\mathbb N$ 을 유한 분할하고 초필터는 유한 분할의 조각 가운데 정확히 하나를 담으므로, 그 조각 $A$ 를 고른다. 보조정리로 $A^\star\in p$ 이고 초필터의 원소는 공집합이 아니므로 $b_1\in A^\star$ 를 뽑는다. $A_1=A^\star\cap(A^\star-b_1)$ 이 $p$ 에 들고, 여기서 $b_2\in A_1^\star$ 를 뽑고 $A_2=A_1^\star\cap(A_1^\star-b_2)$ 로 간다. 이 재귀가 주는 $B=\lbrace b_1,b_2,\dots\rbrace$ 에 대해 $\mathrm{FS}(B)\subseteq A$ 이므로 유한합이 모두 $A$ 의 색이다.

## Schur 정리와의 관계

Schur 정리는 Hindman 정리의 따름정리다. $B$ 의 두 원소 $b_1,b_2$ 에 대해 $b_1,b_2,b_1+b_2$ 가 모두 $\mathrm{FS}(B)$ 에 들므로 단색 Schur 삼짝이 된다. 역으로 Hindman 정리는 Schur 정리보다 강한 진술이며, 색칠마다 유한합이 닫힌 무한집합을 요구한다.

# 활용

- 분할 정칙성(partition regularity). 유한합 집합이 분할 정칙 집합족의 기본 예다. Schur 정리와 [Rado 정리](rado-theorem.md)가 선형 방정식계에 대해 묻는 것을 Hindman 정리는 무한 생성집합에 대해 답한다.
- IP 집합. 어떤 무한집합의 유한합 집합을 담는 집합을 IP 집합(infinite-dimensional parallelepiped)이라 하고, 이 집합족에서의 되돌이(recurrence)가 [van der Waerden 정리](van-der-waerden-theorem.md)의 동역학 증명에 쓰인다.
- 초필터 대수. $\beta\mathbb N$ 의 멱등원과 극소 왼쪽 아이디얼(minimal left ideal)의 구조를 조합론에 쓰는 방법이 이 증명에서 나왔다. 멱등원의 극소성을 더 요구하면 중심 집합(central set)에 대한 정리들이 따라온다.

[^1]: N. Hindman, "Finite sums from sequences within cells of a partition of N", Journal of Combinatorial Theory, Series A 17 (1974), 1–11.

# 연관 문서

## 선수지식

- [Ramsey 이론](ramsey-theory.md)
- [Stone–Čech 콤팩트화](stone-cech-compactification.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #topology #set_theory
