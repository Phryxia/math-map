# MacWilliams 항등식

# 개요

**MacWilliams 항등식(MacWilliams identity)** 은 선형부호의 부호어 무게 분포로부터 그 쌍대 부호의 무게 분포를 계산하는 공식이다. 길이 $7$ 의 Hamming 부호는 부호어가 $16$ 개라 무게를 하나씩 세기 번거롭지만, 그 쌍대 부호는 부호어가 $8$ 개이고 $0$ 이 아닌 것의 무게가 모두 $4$ 다. 두 부호의 무게 분포를 다항식 하나로 묶고 변수에 $x+y$, $x-y$ 를 넣으면 한쪽에서 다른 쪽이 나온다.

# 직관

[오류정정부호](error-correcting-codes.md) 문서의 $\lbrack 7,4,3\rbrack$ Hamming 부호 $C$ 는 패리티 검사[행렬](matrices.md)

$$
H=\begin{pmatrix}1&0&1&0&1&0&1\cr 0&1&1&0&0&1&1\cr 0&0&0&1&1&1&1\end{pmatrix}
$$

의 핵이다. $H$ 의 행이 생성하는 $8$ 개의 벡터가 쌍대 부호 $C^\perp$ 이다. $C^\perp$ 의 $0$ 이 아닌 벡터는 $H$ 의 열, 곧 $0$ 이 아닌 세 비트 벡터 일곱 개에 $0$ 이 아닌 일차식 하나를 계산한 값이고, 그런 일차식은 일곱 개 가운데 네 개에서 $1$ 이다. 그래서 $C^\perp$ 는 무게 $0$ 이 하나, 무게 $4$ 가 일곱 개다.

무게 분포를 다항식 $W\_{C^\perp}(x,y)=x^7+7x^3y^4$ 로 적는다. 각 부호어가 $x^{7-\mathrm{wt}}y^{\mathrm{wt}}$ 를 하나씩 더한다. 이 식의 $x$ 를 $x+y$ 로, $y$ 를 $x-y$ 로 바꾸고 $\lvert C^\perp\rvert=8$ 로 나누면

$$
\frac18\Bigl((x+y)^7+7(x+y)^3(x-y)^4\Bigr)=x^7+7x^4y^3+7x^3y^4+y^7
$$

이다. 이것이 $C$ 의 무게 분포다. $C$ 는 무게 $3$ 과 $4$ 의 부호어가 일곱 개씩, 무게 $7$ 이 하나다.

# 정의

길이 $n$ 의 이진 선형부호 $C$ 의 무게 열거다항식(weight enumerator)은

$$
W_C(x,y)=\sum\_{c\in C}x^{n-\mathrm{wt}(c)}y^{\mathrm{wt}(c)}=\sum\_{i=0}^{n}A_ix^{n-i}y^i
$$

이다. $A_i$ 는 무게 $i$ 인 부호어의 수다. $C$ 의 쌍대 부호(dual code)는 $C^\perp=\lbrace u\in\mathbb F_2^n : u\cdot c=0\ (c\in C)\rbrace$ 다. 직관 절의 $C^\perp$ 는 $W\_{C^\perp}=x^7+7x^3y^4$ 다.

**MacWilliams 항등식** 은 다음 식이다[^1].

$$
W\_{C^\perp}(x,y)=\frac{1}{\lvert C\rvert}W_C(x+y,\thinspace x-y)
$$

# 성질

## 증명

[함수](functions.md) $f:\mathbb F_2^n\to\mathbb R\lbrack x,y\rbrack$ 와 그 변환 $\hat f(u)=\sum_v(-1)^{u\cdot v}f(v)$ 에 대해

$$
\sum\_{u\in C^\perp}f(u)=\frac{1}{\lvert C\rvert}\sum\_{c\in C}\hat f(c)
$$

가 성립한다. 우변을 전개하면 $\sum_vf(v)\sum\_{c\in C}(-1)^{c\cdot v}$ 이고, 안쪽 합은 $v\in C^\perp$ 이면 $\lvert C\rvert$, 아니면 $0$ 이다. 이 등식은 [부울 함수의 Fourier 해석](boolean-fourier.md)의 지표 직교성에서 나오는 [Poisson 합 공식](poisson-summation.md)의 유한판이다. $f(v)=x^{n-\mathrm{wt}(v)}y^{\mathrm{wt}(v)}$ 로 두면 $f$ 가 좌표별 곱이어서

$$
\hat f(c)=\prod\_{j=1}^{n}\bigl(x+(-1)^{c_j}y\bigr)=(x+y)^{n-\mathrm{wt}(c)}(x-y)^{\mathrm{wt}(c)}
$$

이고, 두 식을 합치면 항등식이다[^1].

## 계수의 식

$C^\perp$ 의 무게 분포를 $B_k$ 라 하면

$$
B_k=\frac{1}{\lvert C\rvert}\sum\_{i=0}^{n}A_iK_k(i)
$$

다. $K_k$ 는 [Delsarte 선형계획 상한](delsarte-lp-bound.md) 문서의 Krawtchouk 다항식이다. 선형부호에서는 거리 분포가 무게 분포와 같으므로, Delsarte 의 부등식 $\sum_iA_iK_k(i)\ge 0$ 은 $B_k\ge 0$ 과 같다.

## q 진 판본

$\mathbb F_q$ 위의 선형부호에서는

$$
W\_{C^\perp}(x,y)=\frac{1}{\lvert C\rvert}W_C\bigl(x+(q-1)y,\thinspace x-y\bigr)
$$

이다[^1]. 이진 경우의 $\pm 1$ 대신 덧셈 지표를 쓰면 같은 증명이 된다.

## 자기쌍대 부호

$C=C^\perp$ 인 부호를 자기쌍대(self-dual)라 한다. 자기쌍대 부호의 무게 열거다항식은 변환 $(x,y)\mapsto\bigl(\frac{x+y}{\sqrt2},\frac{x-y}{\sqrt2}\bigr)$ 에서 변하지 않는다. 직관 절의 Hamming 부호에 전체 패리티 비트를 붙인 $\lbrack 8,4,4\rbrack$ 부호는 자기쌍대이고 $W=x^8+14x^4y^4+y^8$ 이다. 모든 부호어의 무게가 $4$ 의 배수인 자기쌍대 이진 부호의 무게 열거다항식은 $x^8+14x^4y^4+y^8$ 과 $x^4y^4(x^4-y^4)^4$ 의 다항식이다. 이를 Gleason 정리(Gleason's theorem)라 한다[^1].

# 활용

- 무게 분포의 계산. 차원이 큰 부호의 무게 분포를 차원이 작은 쌍대 부호에서 얻는다. 직관 절의 Hamming 부호와 그 쌍대 부호가 그 예이고, [Reed–Muller 부호](reed-muller-codes.md)와 [BCH 부호](bch-codes.md)(Bose–Chaudhuri–Hocquenghem code)의 무게 분포 계산에도 쓴다.
- 자기쌍대 부호의 분류. Gleason 정리로 무게 열거다항식의 꼴이 정해지므로, 최소 거리의 상한과 [Golay 부호](golay-codes.md)의 유일성 같은 분류 결과가 나온다.
- [격자](lattices.md). [theta 급수](theta-series.md) 문서의 대응에서 부호의 무게 열거다항식이 격자의 theta 급수로 가고, MacWilliams 항등식이 쌍대 격자의 theta 변환식으로 간다.

[^1]: F. J. MacWilliams, N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977. 5 장과 19 장.

# 연관 문서

## 선수지식

- [오류정정부호](error-correcting-codes.md)
- [부울 함수의 Fourier 해석](boolean-fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #combinatorics #linear_algebra
