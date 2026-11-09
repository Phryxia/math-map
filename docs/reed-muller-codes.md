# Reed–Muller 부호

# 개요

**Reed–Muller 부호(Reed–Muller code)** 는 이진 변수 $m$ 개의 차수가 낮은 다항식을 $2^m$ 개의 점 전부에서 계산한 값을 부호어로 쓰는 [오류정정부호](error-correcting-codes.md)다. 4 비트 메시지를 8 비트로 늘려 보낼 때, 메시지로 일차식 $a_0+a_1x_1+a_2x_2+a_3x_3$ 을 정하고 $x\in\mathbb F_2^3$ 여덟 점에서의 값을 보내면 서로 다른 두 부호어가 네 자리에서 다르다. 비트 하나가 틀려도 각 계수를 네 번의 다수결로 읽어 메시지를 복원한다.

# 직관

메시지 $(a_0,a_1,a_2,a_3)$ 로 $\mathbb F_2$ 위의 함수 $f(x)=a_0+a_1x_1+a_2x_2+a_3x_3$ 를 정하고, 점 $x=(x_1,x_2,x_3)$ 을 $000,100,010,110,001,101,011,111$ 순서로 놓아 여덟 값을 보낸다. 서로 다른 두 메시지의 함수의 차는 $0$ 이 아닌 일차식이다. 상수 $1$ 이면 여덟 점 모두에서 $1$ 이고, 그 밖의 일차식은 여덟 점 가운데 정확히 네 점에서 $1$ 이다. 그래서 두 부호어는 네 자리 이상에서 다르다.

$f(x)$ 와 $f(x+e_1)$ 을 더하면 $a_1$ 이다. $e_1=(1,0,0)$ 이다. 여덟 점은 $x$ 와 $x+e_1$ 의 쌍 넷으로 나뉘므로 $a_1$ 을 계산하는 식이 서로 다른 자리를 쓰는 네 개가 있다.

메시지 $(0,1,1,0)$ 의 부호어는 $f=x_1+x_2$ 의 값 $01100110$ 이다. 셋째 자리가 뒤집혀 $01000110$ 을 받았다고 하자. 쌍 (첫째, 둘째), (셋째, 넷째), (다섯째, 여섯째), (일곱째, 여덟째) 의 합은 $1,0,1,1$ 이고, 틀린 자리가 들어간 쌍 하나만 어긋나 다수결이 $a_1=1$ 이다. 같은 방법으로 $a_2=1$, $a_3=0$ 이 나오고, 받은 값에서 $x_1+x_2$ 를 빼면 $00100000$ 이라 다수결로 $a_0=0$ 이다.

차수를 $1$ 에서 $r$ 로 올리면 더 긴 메시지를 실을 수 있고, 같은 다수결이 차수 $r$ 의 계수부터 차례로 계산된다.

# 정의

$\mathbb F_2[x_1,\dots,x_m]$ 의 다항식에서 $x_i^2=x_i$ 로 줄인 다항식, 곧 각 변수의 지수가 $0$ 또는 $1$ 인 다항식만 쓴다. $0\le r\le m$ 에 대해

$$
\mathrm{RM}(r,m)=\bigl\lbrace\bigl(f(x)\bigr)\_{x\in\mathbb F_2^m}:\deg f\le r\bigr\rbrace\subseteq\mathbb F_2^{2^m}
$$

을 차수 $r$, 길이 $2^m$ 의 **Reed–Muller 부호** 라 한다[^1][^2]. 차수 $r$ 이하의 단항식이 기저이므로 선형부호(linear code)이고 차원은

$$
k=\sum_{i=0}^{r}\binom mi
$$

다. 직관 절의 부호는 $\mathrm{RM}(1,3)$ 이고 $k=1+3=4$ 다.

# 성질

## 최소거리

$\mathrm{RM}(r,m)$ 의 최소거리는 $2^{m-r}$ 이다. 그래서 $\mathrm{RM}(r,m)$ 은 $\lbrack 2^m,\ \sum_{i\le r}\binom mi,\ 2^{m-r}\rbrack\_2$ 부호다.

증명의 요지. $f=g+x_mh$ 로 쓰고 $g$, $h$ 를 $x_1,\dots,x\_{m-1}$ 의 다항식으로 두면 $\deg g\le r$, $\deg h\le r-1$ 이다. $x_m=0$ 인 절반의 값은 $u=g$ 의 값이고 $x_m=1$ 인 절반은 $u+v$, $v=h$ 의 값이다. 그래서

$$
\mathrm{RM}(r,m)=\lbrace(u,\thinspace u+v):u\in\mathrm{RM}(r,m-1),\ v\in\mathrm{RM}(r-1,m-1)\rbrace
$$

이다. 이 꼴을 Plotkin 구성(Plotkin construction)이라 한다. $v=0$ 이면 무게가 $2w(u)$, $v\ne 0$ 이면 $w(u)+w(u+v)\ge w(v)$ 이므로 $m$ 에 대한 귀납법으로 무게가 $2^{m-r}$ 이상이다. 단항식 $x_1x_2\cdots x_r$ 은 $x_1=\cdots=x_r=1$ 인 $2^{m-r}$ 개 점에서만 $1$ 이라 등호가 성립한다.

## 특수한 경우와 쌍대

- $\mathrm{RM}(0,m)$ 은 길이 $2^m$ 의 반복 부호, $\mathrm{RM}(m,m)$ 은 $\mathbb F_2^{2^m}$ 전체다.
- $\mathrm{RM}(m-1,m)$ 은 무게가 짝수인 벡터 전체다.
- $\mathrm{RM}(m-2,m)$ 은 Hamming 부호에 전체 패리티 비트 하나를 붙인 $\lbrack 2^m,\ 2^m-m-1,\ 4\rbrack$ 확장 Hamming 부호(extended Hamming code)다. $m=3$ 이면 $\mathrm{RM}(1,3)$ 과 같다.
- 쌍대 부호는 $\mathrm{RM}(r,m)^\perp=\mathrm{RM}(m-r-1,m)$ 이다[^1]. 차수의 합이 $m-1$ 이하인 두 단항식의 곱은 $x_1\cdots x_m$ 이 아니고, 모든 변수를 다 쓰지 않은 단항식은 짝수 개의 점에서 $1$ 이라 내적이 $0$ 이다. 차원을 더하면 $2^m$ 이다.

## 일차 부호와 Hadamard 행렬

$\mathrm{RM}(1,m)$ 은 $\lbrack 2^m,\ m+1,\ 2^{m-1}\rbrack$ 부호다. 일차식 $a\cdot x$ 의 값 $(-1)^{a\cdot x}$ 를 늘어놓은 벡터가 Sylvester 구성 $H_2\otimes\cdots\otimes H_2$ 의 행이므로, $\mathrm{RM}(1,m)$ 의 부호어는 [Hadamard 행렬](hadamard-matrices.md) $H\_{2^m}$ 과 $-H\_{2^m}$ 의 행에서 $1$ 을 $0$ 으로, $-1$ 을 $1$ 로 바꾼 것이다. 받은 벡터 $y$ 를 $\pm 1$ 로 바꾼 $(-1)^y$ 에 $H\_{2^m}$ 을 곱하면 각 일차식과 맞는 자리 수에서 틀린 자리 수를 뺀 값이 한꺼번에 나온다. 절댓값이 가장 큰 성분을 고르는 것이 최대 우도 복호이고, Walsh–Hadamard 변환으로 $O(m2^m)$ 번의 덧셈으로 계산된다.

## 다수결 복호

$\mathrm{RM}(r,m)$ 에서 차수 $r$ 인 단항식 $x_S=\prod_{i\in S}x_i$ 의 계수는, $S$ 의 변수를 움직이고 나머지 변수를 고정한 $2^r$ 개 점의 값을 더한 것이다. 나머지 변수를 고정하는 방법이 $2^{m-r}$ 가지이고 서로 다른 자리를 쓴다. 틀린 자리가 $2^{m-r-1}$ 개 미만이면 이 $2^{m-r}$ 개 계산 가운데 과반이 맞으므로 다수결로 계수가 나온다.

차수 $r$ 의 항을 빼고 같은 일을 차수 $r-1$ 에서 되풀이한다. 이것이 Reed 의 복호법이다[^2]. 직관 절이 $r=1$, $m=3$ 인 경우다.

# 활용

- 화성 탐사선 Mariner 9 의 사진 전송. 6 비트 화소 값을 $\mathrm{RM}(1,5)$, 곧 $\lbrack 32,6,16\rbrack$ 부호로 보내 32 비트 가운데 7 비트까지의 오류를 정정했다.
- [양자 오류정정부호](quantum-error-correction.md). 고전 Reed–Muller 부호와 그 쌍대로 CSS 부호(Calderbank–Shor–Steane code)를 만든다. 양자 Reed–Muller 부호가 [마법 상태 정제](magic-state-distillation.md)에 쓰인다.
- [부울 함수의 Fourier 해석](boolean-fourier.md). 함수 $f:\mathbb F_2^m\to\mathbb F_2$ 가 $\mathrm{RM}(1,m)$ 의 부호어와 이루는 거리의 최솟값이 비선형성(nonlinearity)이고, Walsh 계수의 최댓값으로 계산된다. 비선형성이 가장 큰 함수가 [굽은 함수](bent-functions.md)다. 암호의 S-상자(S-box) 설계가 이 값을 크게 잡는다.

[^1]: F. J. MacWilliams, N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977. 13 장과 14 장.
[^2]: I. S. Reed, "A class of multiple-error-correcting codes and the decoding scheme", *Transactions of the IRE Professional Group on Information Theory* 4 (1954), 38–49.

# 연관 문서

## 선수지식

- [오류정정부호](error-correcting-codes.md)
- [Hadamard 행렬](hadamard-matrices.md)

## 더 알아보기

- [굽은 함수](bent-functions.md)

#information_theory #combinatorics #field_theory #algorithms
