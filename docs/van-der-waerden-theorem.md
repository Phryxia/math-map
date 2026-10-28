# van der Waerden 정리

# 개요

**van der Waerden 정리(van der Waerden's theorem)** 는 정수를 몇 가지 색으로 칠하면, 어떻게 칠해도 같은 색의 등차수열이 원하는 길이만큼 생긴다는 정리다. $1$ 부터 $8$ 까지는 빨강과 파랑으로 $R,R,B,B,R,R,B,B$ 로 칠해 세 수짜리 단색 등차수열을 피할 수 있지만, $1$ 부터 $9$ 까지는 어떻게 칠해도 피하지 못한다. 이 정리는 색의 수 $r$ 와 수열의 길이 $k$ 마다 이런 경계 $W(r,k)$ 가 존재함을 보이고, 그 경계는 더 짧은 수열의 경계로부터 귀납적으로 구해진다.

# 직관

van der Waerden 정리는 양의 정수 $r$ 과 $k$ 마다 수 $W(r,k)$ 가 존재해, $\lbrace 1,\dots,W(r,k)\rbrace$ 를 $r$ 가지 색으로 어떻게 칠해도 길이 $k$ 인 단색 등차수열이 생긴다는 정리다. B. L. van der Waerden 이 1927 년에 증명했다[^1]. 그런 수 가운데 가장 작은 것을 van der Waerden 수(van der Waerden number)라 하고 같은 기호 $W(r,k)$ 로 쓴다.

[Ramsey 이론](ramsey-theory.md)의 정리 가운데 정수의 덧셈 구조에 대한 첫 결과다. 칠하는 대상이 그래프의 간선이 아니라 정수이고, 찾는 구조가 완전그래프가 아니라 등차수열이다.

$1$ 부터 $8$ 까지를 빨강과 파랑으로 $R,R,B,B,R,R,B,B$ 로 칠하면 세 수짜리 단색 등차수열이 없다. 빨강 $\lbrace 1,2,5,6\rbrace$ 에서 두 수를 고르면 그 둘과 등차수열을 이루는 나머지 한 수가 $3,4,7,8,9,10,11$ 가운데 하나이거나 $1$ 보다 작아서 빨강이 아니고, 파랑 $\lbrace 3,4,7,8\rbrace$ 도 같다. $1$ 부터 $9$ 까지는 어떻게 칠해도 세 수짜리 단색 등차수열이 생기므로 $W(2,3)=9$ 다.

수가 커지면 경우를 다 따질 수 없다. 대신 수를 다섯 개씩 묶어 블록으로 보고, 블록 하나가 칠해지는 방법이 $2^5=32$ 가지뿐이라는 것을 쓴다. 블록이 $33$ 개 있으면 같은 무늬로 칠해진 두 블록이 있고, 두 블록 안의 같은 자리들이 블록 단위의 등차수열을 이룬다. 한 블록 안에서 찾은 짧은 등차수열과 블록들 사이의 등차수열을 겹쳐 길이 $3$ 을 만드는 것이 아래 증명이다.

# 정의

$r$ 색칠은 함수 $c:\lbrace 1,\dots,N\rbrace\to\lbrace 1,\dots,r\rbrace$ 다. 길이 $k$ 인 등차수열 $a,a+d,\dots,a+(k-1)d$ ($d\ge 1$) 의 모든 항에서 $c$ 의 값이 같으면 단색이라 한다.

$W(r,k)$ 는 $\lbrace 1,\dots,N\rbrace$ 의 모든 $r$ 색칠에 길이 $k$ 인 단색 등차수열이 있는 가장 작은 $N$ 이다. van der Waerden 정리는 이 $N$ 이 존재한다는 진술이다.

# 성질

## 길이 3 의 증명

$\lbrace 1,\dots,325\rbrace$ 의 두 색칠에는 길이 $3$ 인 단색 등차수열이 있다. $325$ 를 다섯 개씩 $65$ 개의 블록 $B_1,\dots,B_{65}$ 로 나눈다.

블록마다 칠하는 방법이 $32$ 가지이므로 $B_1,\dots,B_{33}$ 가운데 같은 무늬인 $B_i$, $B_j$ ($i\lt j$) 가 있다. $B_i$ 의 앞 세 자리 가운데 두 자리가 같은 색이므로, 자리 $p$ 와 $p+e$ ($e\in\lbrace 1,2\rbrace$) 가 빨강이라 하자. 자리 $p+2e$ 가 빨강이면 $B_i$ 안에서 끝난다. 파랑이면 $B_{2j-i}$ (번호가 $65$ 이하) 의 자리 $p+2e$ 를 본다. 빨강이면 $B_i$ 의 자리 $p$, $B_j$ 의 자리 $p+e$, $B_{2j-i}$ 의 자리 $p+2e$ 가 빨강 등차수열이고, 파랑이면 세 블록의 자리 $p+2e$ 가 파랑 등차수열이다.

일반의 $k$ 와 $r$ 은 같은 생각을 $k$ 에 대한 귀납법으로 쌓아 증명한다. 블록을 블록으로 다시 묶는 단계가 거듭되므로 이 증명이 주는 $W(r,k)$ 의 상한은 Ackermann 함수처럼 자란다.

## 상한과 하한

S. Shelah 는 $W(r,k)$ 가 원시재귀 함수로 위에서 눌린다는 것을 증명했다[^2]. W. T. Gowers 는 [Szemerédi 정리](szemeredi-theorem.md)의 새 증명에서

$$
W(r,k)\le 2^{2^{r^{2^{2^{k+9}}}}}
$$

을 얻었다[^3]. 하한으로는 E. R. Berlekamp 가 소수 $p$ 에 대해 $W(2,p+1)\ge p\thinspace 2^p$ 를 [유한체](finite-fields.md) 위의 원시 다항식으로 칠해 증명했다[^4].

알려진 값은 $W(2,3)=9$, $W(2,4)=35$, $W(2,5)=178$, $W(2,6)=1132$, $W(3,3)=27$ 이다[^5].

## 밀도판

Szemerédi 정리는 양의 정수의 부분집합 $A$ 가 $\limsup_{N\to\infty}\lvert A\cap\lbrace 1,\dots,N\rbrace\rvert/N\gt 0$ 을 만족하면 $A$ 가 모든 길이의 등차수열을 포함한다는 정리다[^6]. $r$ 색칠에서 가장 자주 쓰인 색의 집합은 이 조건을 만족하므로 van der Waerden 정리가 따름정리로 나온다. 길이 $3$ 의 경우는 K. F. Roth 가 먼저 증명했다.

## Hales–Jewett 정리

[Hales–Jewett 정리](hales-jewett-theorem.md)는 $n$ 이 충분히 크면 $\lbrace 1,\dots,k\rbrace^n$ 의 모든 $r$ 색칠에 단색인 조합적 직선이 있다는 정리다[^7]. 조합적 직선은 몇몇 좌표가 같은 변수 $x$ 이고 나머지 좌표가 고정된 단어에 $x=1,\dots,k$ 를 넣은 $k$ 개의 점이다. 단어 $(a_1,\dots,a_n)$ 을 정수 $a_1+\cdots+a_n$ 으로 보내면 조합적 직선이 길이 $k$ 인 등차수열로 가므로 van der Waerden 정리가 나온다.

# 활용

- 동역학적 증명. H. Furstenberg 는 측도 보존 변환의 [다중 되돌이 정리](furstenberg-multiple-recurrence.md)로 Szemerédi 정리를 증명했고, 같은 방법이 van der Waerden 정리와 그 다항식 판본을 준다[^8].
- 소수 안의 등차수열([Green–Tao 정리](green-tao-theorem.md)). B. Green 과 T. Tao 는 소수 집합이 모든 길이의 등차수열을 포함한다는 것을 Szemerédi 정리의 상대판으로 증명했다[^9].

[^1]: B. L. van der Waerden, "Beweis einer Baudetschen Vermutung", Nieuw Archief voor Wiskunde 15 (1927), 212–216.
[^2]: S. Shelah, "Primitive recursive bounds for van der Waerden numbers", Journal of the American Mathematical Society 1 (1988), 683–697.
[^3]: W. T. Gowers, "A new proof of Szemerédi's theorem", Geometric and Functional Analysis 11 (2001), 465–588.
[^4]: E. R. Berlekamp, "A construction for partitions which avoid long arithmetic progressions", Canadian Mathematical Bulletin 11 (1968), 409–414.
[^5]: M. Kouril, J. L. Paul, "The van der Waerden number W(2,6) is 1132", Experimental Mathematics 17 (2008), 53–61.
[^6]: E. Szemerédi, "On sets of integers containing no k elements in arithmetic progression", Acta Arithmetica 27 (1975), 199–245.
[^7]: A. W. Hales, R. I. Jewett, "Regularity and positional games", Transactions of the American Mathematical Society 106 (1963), 222–229.
[^8]: H. Furstenberg, "Ergodic behavior of diagonal measures and a theorem of Szemerédi on arithmetic progressions", Journal d'Analyse Mathématique 31 (1977), 204–256.
[^9]: B. Green, T. Tao, "The primes contain arbitrarily long arithmetic progressions", Annals of Mathematics 167 (2008), 481–547.

# 연관 문서

## 선수지식

- [Ramsey 이론](ramsey-theory.md)

## 더 알아보기

- [Hales–Jewett 정리](hales-jewett-theorem.md)
- [Szemerédi 정리](szemeredi-theorem.md)
- [Rado 정리](rado-theorem.md)

#combinatorics #number_theory
