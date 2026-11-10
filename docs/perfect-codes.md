# 완전 부호

# 개요

**완전 부호(perfect code)** 는 부호어마다 그린 반지름 $e$ 의 Hamming 공이 서로 겹치지 않으면서 공간 전체를 덮는 부호다. 길이 $90$ 의 이진 문자열에서 두 자리 오류를 고치는 부호를 찾는다고 하자. 반지름 $2$ 인 공의 크기는 $1+90+4005=4096=2^{12}$ 이므로, 부호어 $2^{78}$ 개의 공이 $2^{90}$ 개의 문자열을 정확히 채울 수 있어 보인다.

개수만 맞는 것으로는 부호가 있다는 보장이 없다. Lloyd 정리는 이런 부호가 있으려면 [Krawtchouk 다항식](krawtchouk-polynomials.md)으로 만든 다항식이 정수 근을 가져야 한다는 조건을 주고, 길이 $90$ 은 이 조건에서 탈락한다.

# 직관

두 자리 오류를 고치는 길이 $n$ 의 부호가 완전하면, 공의 크기 $1+n+\binom n2$ 이 $2$ 의 거듭제곱이어야 한다. $n=5$ 에서 $16$, $n=90$ 에서 $4096$ 이 된다.

$n=5$ 에서는 $00000$ 과 $11111$ 두 부호어가 실제로 완전 부호다. 두 공은 $1$ 이 두 개 이하인 문자열과 세 개 이상인 문자열이고, $16+16=32$ 로 공간을 채운다.

Lloyd 정리의 조건은 다음 식에 정수 $x$ 가 해로 있는지다. 증명은 성질 절에 있다.

$$
(n-2x+1)^2=n-1
$$

$n=5$ 이면 우변이 $4$ 이고 $x=2,4$ 가 해다. $n=90$ 이면 우변이 $89$ 이고 $89$ 는 제곱수가 아니므로 해가 없다. 그래서 길이 $90$ 의 두 오류 정정 완전 부호는 없다.

# 정의

## 완전 부호

길이 $n$ 의 $q$ 진 부호 $C$ 와 정수 $e\ge 1$ 에 대해, 모든 문자열이 어떤 부호어와 Hamming 거리 $e$ 이하이고 그런 부호어가 하나뿐이면 $C$ 를 $e$-완전 부호라 한다. 이는 [오류정정부호](error-correcting-codes.md) 문서의 Hamming 한계(Hamming bound)를 등호로 만족하는 것과 같다.

$$
\vert C\vert\sum_{i=0}^{e}\binom ni(q-1)^i=q^n
$$

길이 $2^r-1$ 의 이진 Hamming 부호는 $1$-완전 부호이고, [Golay 부호](golay-codes.md) $\lbrack 23,12,7\rbrack$ 은 $3$-완전 부호다. 부호어가 하나뿐인 부호, 공간 전체, 길이가 홀수인 이진 반복 부호를 자명한 완전 부호라 한다. 직관 절의 $\lbrace 00000,11111\rbrace$ 이 반복 부호다.

## Lloyd 다항식

이진 길이 $n$ 의 Krawtchouk 다항식 $K_j(x)$ 로 $e$ 차 다항식을 다음과 같이 정한다.

$$
L_e(x)=\sum_{j=0}^{e}K_j(x)
$$

이 다항식을 Lloyd 다항식(Lloyd polynomial)이라 한다. $K_0=1$, $K_1(x)=n-2x$, $K_2(x)=\bigl((n-2x)^2-n\bigr)/2$ 이므로 $L_2(x)=\bigl((n-2x+1)^2+1-n\bigr)/2$ 다. $L_2(x)=0$ 이 직관 절의 식이다.

# 성질

## Lloyd 정리

이진 $e$-완전 부호가 길이 $n$ 에서 있으면 $L_e(x)$ 는 $\lbrace 1,2,\dots,n\rbrace$ 안에 서로 다른 근 $e$ 개를 가진다. 이것이 Lloyd 정리(Lloyd's theorem)다[^1].

증명의 요지. $C$ 의 지시함수와 반지름 $e$ 인 공 $B$ 의 지시함수의 합성곱은 상수 $1$ 이다. [부울 함수의 Fourier 해석](boolean-fourier.md)으로 변환하면, $0$ 이 아닌 모든 $u$ 에서 $\widehat{1_C}(u)\thinspace\widehat{1_B}(u)=0$ 이다. $\widehat{1_B}(u)$ 는 $u$ 의 무게 $w$ 에서의 값 $L_e(w)$ 다. 그래서 $\widehat{1_C}(u)\ne 0$ 인 $u$ 의 무게는 모두 $L_e$ 의 근이고, 그런 무게가 적어도 $e$ 개임을 보이면 정리가 나온다.

$e=1$ 이면 $L_1(x)=n+1-2x$ 이고 근이 정수이려면 $n$ 이 홀수여야 한다. Hamming 상한에서 $n+1$ 이 $2$ 의 거듭제곱이어야 하므로 $n=2^r-1$ 이고, Hamming 부호가 이 길이를 모두 채운다.

## 분류

$q$ 가 소수의 거듭제곱이면, 자명하지 않은 $q$ 진 완전 부호는 Hamming 부호와 같은 매개변수를 갖는 $1$-완전 부호, 이진 Golay 부호 $\lbrack 23,12,7\rbrack$, 삼진 Golay 부호 $\lbrack 11,6,5\rbrack$ 뿐이다. Tietäväinen 과 van Lint 가 Lloyd 정리를 써서 증명했다[^2][^3]. Hamming 부호와 매개변수만 같고 선형이 아닌 $1$-완전 부호는 많다.

# 활용

- 부호의 존재 판정. 직관 절의 길이 $90$ 처럼 개수 조건을 만족하는 매개변수가 Lloyd 정리로 탈락한다. Golay 는 처음 길이 $90$ 을 개수 조건으로 찾았고, 그런 부호가 없다는 것을 부호어를 세는 논증으로 보였다[^1].
- [연관 체계](association-schemes.md). Lloyd 정리는 거리 정칙 그래프 위의 완전 부호로 넓혀지고, 이때 Krawtchouk 다항식 자리에 그 체계의 고윳값 다항식이 들어간다.

[^1]: F. J. MacWilliams, N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland (1977), 6 장.
[^2]: A. Tietäväinen, On the nonexistence of perfect codes over finite fields, *SIAM J. Appl. Math.* **24** (1973), 88–96.
[^3]: J. H. van Lint, Nonexistence theorems for perfect error-correcting codes, in *Computers in Algebra and Number Theory*, SIAM-AMS Proc. **4** (1971), 89–95.

# 연관 문서

## 선수지식

- [Golay 부호](golay-codes.md)
- [Krawtchouk 다항식](krawtchouk-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #combinatorics
