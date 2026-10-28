# 로그 계수 추측

# 개요

**로그 계수 추측(log-rank conjecture)** 은 두 사람이 나눠 가진 입력으로 함숫값을 계산할 때 주고받아야 하는 비트 수가, 함숫값을 적은 행렬의 계수만으로 다항식 범위 안에서 정해진다는 추측이다. Alice 가 $x$, Bob 이 $y$ 를 갖고 $f(x,y)\in\lbrace 0,1\rbrace$ 를 행 $x$, 열 $y$ 에 적은 행렬을 $M_f$ 라 하면, 주고받는 비트 수 $D(f)$ 는 $\log_2\mathrm{rank}\thinspace M_f$ 이상이다. 추측의 진술은 반대로 $D(f)$ 가 $(\log\mathrm{rank}\thinspace M_f)^{c}$ 이하라는 것이고, 성립하면 [통신 복잡도](communication-complexity.md)가 행렬의 계수 하나로 정해진다.

# 직관

로그 계수 추측은 두 사람이 함수 $f(x,y)$ 를 계산하는 결정적 통신 복잡도 $D(f)$ 가 통신 행렬 $M_f$ 의 계수의 로그의 다항식 이하라는 추측이다. L. Lovász 와 M. Saks 가 1988 년에 내놓았다[^1].

통신 복잡도의 계수 하한 $D(f)\ge\log_2\mathrm{rank}\thinspace M_f$ 가 반대 방향으로도 다항식 범위 안에서 성립하는지 묻는다. 성립하면 결정적 통신 복잡도가 행렬의 계수 하나로 다항식 범위 안에서 정해진다.

Alice 가 $x$ 를, Bob 이 $y$ 를 갖고, $M_f$ 는 행 $x$, 열 $y$ 에 $f(x,y)\in\lbrace 0,1\rbrace$ 를 적은 행렬이다. 계수 하한으로 $D(f)$ 는 $\log_2\mathrm{rank}\thinspace M_f$ 이상이다. 위로는 얼마인지 계수만 보고 규칙을 짜 본다.

$M_f$ 의 실수 위 계수를 $r$ 이라 한다. 일차독립인 열 $r$ 개를 고르면 나머지 열은 이 열들의 일차결합이므로, 한 행은 이 $r$ 개 열에서의 성분으로 정해진다. 그 성분은 $0$ 아니면 $1$ 이므로 서로 다른 행은 $2^r$ 개 이하다. Alice 가 자기 행이 그 가운데 몇 번째인지 $r$ 비트로 보내면, Bob 은 그 행의 $y$ 열 성분을 읽어 1 비트로 답을 알린다. 그래서 $D(f)\le r+1$ 이다.

하한은 $\log_2 r$ 이고 상한은 $r+1$ 이어서 둘 사이가 지수만큼 벌어진다. 동등 함수에서는 $M_f$ 가 단위행렬이라 $r=2^n$ 이고 $D=n+1$ 이므로 하한 쪽이 맞다. 로그 계수 추측은 모든 함수에서 $D(f)$ 가 $\log_2 r$ 의 거듭제곱 이하라는 진술이다.

# 정의

불 함수 $f:X\times Y\to\lbrace 0,1\rbrace$ 의 통신 행렬 $M_f$ 의 실수체 위 계수를 $\mathrm{rank}(f)$ 로 쓴다. **로그 계수 추측** 은 모든 $f$ 에 대해

$$
D(f)\le\left(\log_2\mathrm{rank}(f)\right)^{c}+c
$$

를 만족하는 상수 $c$ 가 존재한다는 진술이다. 뒤의 $+c$ 는 계수가 $1$ 인 함수를 위한 것이다.

계수는 실수체 위에서 잰다. 내적 함수 $\mathrm{IP}(x,y)=\sum_i x_iy_i \bmod 2$ 의 통신 행렬은 $\mathbb F_2$ 위에서 $x^{\mathsf T}y$ 꼴이라 계수가 $n$ 이하인데, 실수 위 계수는 $2^n-1$ 이상이고 $D(\mathrm{IP})\ge n$ 이다. $\mathbb F_2$ 위의 계수로 바꾼 진술은 이 함수에서 거짓이다.

# 성질

## 단색 직사각형과의 동치

정리(Nisan–Wigderson). 로그 계수 추측은 다음과 동치다. 상수 $c$ 가 존재해, 계수가 $r$ 인 모든 0-1 행렬에 성분 수가 전체의 $2^{-(\log_2 r)^c}$ 배 이상인 단색 직사각형이 존재한다[^2].

증명의 요지. 비용 $D$ 인 규칙은 $M_f$ 를 $2^D$ 개 이하의 단색 직사각형으로 나누므로 가장 큰 것이 전체의 $2^{-D}$ 배 이상이다. 거꾸로, 단색 직사각형 $A\times B$ 를 왼쪽 위에 놓고 $M_f$ 를 $\begin{pmatrix}R&P\cr Q&S\end{pmatrix}$ 로 나눈다. $R$ 이 $0$ 으로 차 있으면 $\mathrm{rank}\thinspace P+\mathrm{rank}\thinspace Q\le r$ 이고, $1$ 로 차 있으면 모든 성분이 $1$ 인 행렬을 빼서 같은 논법으로 $r+3$ 이하다. $P$ 의 계수가 작으면 Alice 가 $x\in A$ 인지 1 비트로 알린다. 그러면 남은 행렬은 $(R\ P)$ 여서 계수가 대략 절반이 되거나, $(Q\ S)$ 여서 직사각형 $A\times B$ 가 빠진다. $Q$ 쪽이 작으면 Bob 이 같은 일을 한다. 이 재귀가 만드는 규칙 나무의 잎을 세면 비용이 $\log_2 r$ 의 다항식 이하다.

## 알려진 상한

- 직관 절의 규칙으로 $D(f)\le\mathrm{rank}(f)+1$ 이다.
- S. Lovett 가 $D(f)=O\left(\sqrt{\mathrm{rank}(f)}\thinspace\log\mathrm{rank}(f)\right)$ 를 증명했다[^3].
- B. Sudakov 와 I. Tomon 이 로그 인수를 없애 $D(f)=O\left(\sqrt{\mathrm{rank}(f)}\right)$ 를 증명했다[^4].

## 지수의 하한

정리(Kushilevitz, Nisan–Wigderson). 함수족 $f_n$ 이 존재해 $D(f_n)=\Omega(n)$ 이고 $\log_2\mathrm{rank}(f_n)=O(n^{\log_6 3}\log n)$ 이다[^2]. 따라서 추측의 지수 $c$ 는 $\log_3 6\approx 1.63$ 보다 작을 수 없다.

구성의 요지. 불 함수 $g:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 를 실수 계수 다중선형 다항식 $g(z)=\sum_S c_S\prod_{i\in S}z_i$ 로 쓰고, 좌표별 논리곱 $x\wedge y$ 로 $f(x,y)=g(x\wedge y)$ 를 놓는다. 그러면

$$
f(x,y)=\sum_S c_S\Bigl(\prod_{i\in S}x_i\Bigr)\Bigl(\prod_{i\in S}y_i\Bigr)
$$

이고 항마다 계수가 $1$ 인 행렬이므로 $\mathrm{rank}(f)$ 는 $g$ 의 항의 수 이하다. E. Kushilevitz 의 함수는 차수가 $3$ 인 6 변수 함수를 $k$ 번 거듭 합성한 것이다. $n=6^k$ 변수에서 차수가 $3^k=n^{\log_6 3}$ 이므로 항의 수는 $n^{n^{\log_6 3}}$ 이하다.

## 근사 계수 추측의 반례

행렬 $M$ 의 **근사 계수(approximate rank)** 는 모든 성분이 $M$ 의 성분과 $1/3$ 이하로 차이 나는 실행렬 가운데 가장 작은 계수다. 무작위 통신 복잡도 $R(f)$ 가 근사 계수의 로그의 다항식 이하라는 진술을 로그 근사 계수 추측(log-approximate-rank conjecture)이라 한다. A. Chattopadhyay, N. S. Mande, S. Sherif 가 이 진술을 만족하지 않는 함수족을 구성했다[^5].

# 활용

- XOR(exclusive or) 함수의 통신 비용. $f(x,y)=g(x\oplus y)$ 이면 $g(x\oplus y)=\sum_S\hat g(S)\chi_S(x)\chi_S(y)$ 이므로 통신 행렬이 지표(character) $\chi_S$ 를 늘어놓은 행렬로 대각화되고, $\mathrm{rank}(f)$ 는 $g$ 의 $0$ 이 아닌 Fourier 계수의 개수와 같다. 그래서 XOR 함수에 대한 로그 계수 추측은 [부울 함수의 Fourier 해석](boolean-fourier.md)에서 Fourier 계수의 개수의 로그로 통신 비용을 묶는 문제가 된다.
- 통신 복잡도의 하한 증명. 계수 하한은 행렬의 계수만 계산하면 되는 하한이고, 추측이 성립하면 결정적 통신 복잡도의 하한은 다항식 범위 안에서 전부 계수 하한으로 얻어진다.

[^1]: L. Lovász, M. Saks, "Lattices, Möbius functions and communication complexity", Proceedings of the 29th IEEE Symposium on Foundations of Computer Science (1988), 81–90.
[^2]: N. Nisan, A. Wigderson, "On rank vs. communication complexity", Combinatorica 15 (1995), 557–565.
[^3]: S. Lovett, "Communication is bounded by root of rank", Journal of the ACM 63 (2016), Article 1.
[^4]: B. Sudakov, I. Tomon, "Matrix discrepancy and the log-rank conjecture" (2023).
[^5]: A. Chattopadhyay, N. S. Mande, S. Sherif, "The log-approximate-rank conjecture is false", Journal of the ACM 67 (2020), Article 23.

# 연관 문서

## 선수지식

- [통신 복잡도](communication-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #linear_algebra #combinatorics
