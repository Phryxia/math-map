# 선형 공격

# 개요

**선형 공격(linear cryptanalysis)** 은 블록 암호의 평문 비트, 암호문 비트, 키 비트 사이에 $\frac12$ 과 다른 확률로 성립하는 일차식을 찾아, 평문과 암호문의 쌍을 많이 모아 키 비트를 알아내는 공격이다. 3 비트를 바꾸는 작은 표에서 입력의 맨 앞 비트와 출력의 맨 뒤 비트가 여덟 경우 가운데 여섯에서 같으면, 이 표를 쓰는 암호는 평문과 암호문만 보고 키의 한 비트를 $3/4$ 의 확률로 맞히는 식을 준다. 선형 공격은 이런 식들을 라운드마다 이어 붙여 전체 암호의 일차 근사를 만들고, 쌍들에서 다수결로 키 비트를 정한다.

# 직관

3 비트 값 $x$ 를 다음 표 $S$ 로 바꾼다. 비트는 $x=x_2x_1x_0$ 처럼 맨 앞이 $x_2$ 다.

| x    | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| S(x) | 001 | 000 | 010 | 100 | 011 | 110 | 101 | 111 |

입력의 맨 앞 비트 $x_2$ 와 출력의 맨 뒤 비트 $y_0$ 을 견주면 $x=000$ 과 $x=101$ 에서만 다르고 나머지 여섯에서 같다. 무작위 입력에서 $x_2=y_0$ 이 확률 $3/4$ 로 성립한다.

이 표로 평문 $p$ 를 비밀키 $k$ 와 비트마다 배타적 논리합한 뒤 바꾸는 암호 $c=S(p\oplus k)$ 를 만든다. 입력이 $p\oplus k$ 이므로 $p_2\oplus k_2=c_0$ 이 확률 $3/4$ 로 성립하고, 옮기면 다음이다.

$$
k_2=p_2\oplus c_0\qquad(\text{확률 }3/4)
$$

$k=101$ 이면 평문 여덟 개 가운데 $p=000$ 과 $p=101$ 을 뺀 여섯에서 $p_2\oplus c_0=1$ 이 나온다. 평문과 암호문의 쌍을 여럿 모아 $p_2\oplus c_0$ 의 다수결을 내면 $k_2=1$ 이 나온다. 키를 모르고 평문과 암호문만 본 공격자가 키의 한 비트를 얻었다.

# 정의

$n$ 비트 값 $x$ 와 $a\in\lbrace 0,1\rbrace^n$ 에 대해 $a\cdot x=a_1x_1\oplus\cdots\oplus a_nx_n$ 이라 쓰고, $a$ 를 **마스크(mask)** 라 한다. 함수 $S:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^m$ 의 입력 마스크 $a$ 와 출력 마스크 $b$ 에 대한 **선형 근사(linear approximation)** 는 식 $a\cdot x=b\cdot S(x)$ 이고, 그 **편향(bias)** 은 다음이다.

$$
\varepsilon(a,b)=\Pr_x\bigl\lbrack a\cdot x=b\cdot S(x)\bigr\rbrack-\frac12
$$

직관 절에서 $a=100$, $b=001$ 이고 $\varepsilon=3/4-1/2=1/4$ 다. 모든 $(a,b)$ 의 편향을 모은 표를 **선형 근사표(linear approximation table)** 라 한다.

블록 암호 $E_k$ 에 대해 평문 마스크 $\alpha$, 암호문 마스크 $\beta$, 키 마스크 $\kappa$ 로 된 식 $\alpha\cdot p\oplus\beta\cdot E_k(p)=\kappa\cdot k$ 가 편향 $\varepsilon\ne 0$ 으로 성립하면, 알려진 평문 $N$ 개로 좌변의 다수결을 내 $\kappa\cdot k$ 를 정하는 절차를 **선형 공격** 이라 한다[^1].

# 성질

## Walsh 계수와 편향

$S$ 의 출력 마스크 $b$ 를 고정한 부울 함수 $f_b(x)=b\cdot S(x)$ 의 Walsh 계수(Walsh coefficient) $W_{f_b}(a)$ 는 근사가 맞는 $x$ 마다 $+1$, 틀린 $x$ 마다 $-1$ 을 더한 값이다. 따라서 $\varepsilon(a,b)=W_{f_b}(a)/2^{n+1}$ 이다. 따라서 가장 큰 편향은 [굽은 함수](bent-functions.md) 문서의 비선형성(nonlinearity) $\mathrm{NL}(f_b)$ 로 정해진다.

$$
\max_{a}\vert\varepsilon(a,b)\vert=\frac12-\frac{\mathrm{NL}(f_b)}{2^n}
$$

비선형성의 상한에서 $n$ 비트 함수의 최대 편향은 $2^{-n/2-1}$ 보다 작아질 수 없다. 직관 절의 $S$ 는 $n=3$ 이고, $0$ 이 아닌 모든 $(a,b)$ 에서 $\vert\varepsilon\vert$ 가 $0$ 이나 $1/4$ 다.

## 쌓기 보조정리

$X_1,\dots,X_t$ 가 독립인 이진 확률변수이고 $\Pr\lbrack X_i=0\rbrack=\frac12+\varepsilon_i$ 이면 다음이 성립한다(쌓기 보조정리, piling-up lemma)[^1].

$$
\Pr\lbrack X_1\oplus\cdots\oplus X_t=0\rbrack=\frac12+2^{t-1}\prod_{i=1}^t\varepsilon_i
$$

$(-1)^{X_i}$ 의 기댓값이 $2\varepsilon_i$ 이고, 독립이면 곱의 기댓값이 기댓값의 곱이라 나온다. 라운드마다의 근사를 마스크가 맞물리게 이어 붙이면 각 라운드의 편향을 이 식으로 곱해 전체 근사의 편향을 얻는다. 편향 $1/4$ 인 근사 두 개를 이으면 편향은 $2\cdot\frac14\cdot\frac14=\frac18$ 이다.

## 필요한 평문의 수

편향 $\varepsilon$ 인 식에서 다수결이 맞을 확률을 일정 수준 이상으로 하려면 알려진 평문이 $N\approx c\thinspace\varepsilon^{-2}$ 개 필요하다. 상수 $c$ 는 원하는 성공 확률로 정해진다. 편향이 절반으로 줄면 필요한 평문은 네 배가 된다. 라운드가 늘수록 쌓기 보조정리로 편향이 곱해져 작아지므로, 충분히 많은 라운드는 이 공격을 막는다.

# 활용

- 데이터 암호화 표준의 해독. Matsui 는 데이터 암호화 표준(Data Encryption Standard, DES)의 14 라운드 선형 근사와 마지막 라운드 키를 추측하는 방법으로, 알려진 평문 $2^{43}$ 개로 16 라운드 DES 의 키를 찾았다[^2].
- S-상자 설계. 블록 암호의 S-상자는 선형 근사표의 최대 편향이 작게 고른다. [APN 함수](apn-functions.md)(almost perfect nonlinear)와 굽은 함수가 비선형성이 큰 후보다.
- 넓은 자취 전략(wide trail strategy). AES(Advanced Encryption Standard)는 확산 층이 연속한 4 라운드에서 근사에 관여하는 S-상자를 25 개 이상으로 만들어, 쌓기 보조정리로 곱한 편향이 평문 공간보다 훨씬 작게 설계되었다[^3].
- [차분 공격](differential-cryptanalysis.md)과의 짝. 차분 공격은 입력 차이가 출력 차이로 번지는 확률을 쓴다. 두 공격의 표는 같은 Walsh 변환으로 이어지고, 블록 암호는 두 공격을 함께 막도록 설계한다.

[^1]: M. Matsui, "Linear cryptanalysis method for DES cipher", *EUROCRYPT '93*, LNCS 765, Springer, 1994, 386–397.
[^2]: M. Matsui, "The first experimental cryptanalysis of the Data Encryption Standard", *CRYPTO '94*, LNCS 839, Springer, 1994, 1–11.
[^3]: J. Daemen, V. Rijmen, *The Design of Rijndael*, Springer, 2002, Chapter 9.

# 연관 문서

## 선수지식

- [굽은 함수](bent-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #combinatorics #information_theory
