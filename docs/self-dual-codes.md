# 자기쌍대 부호

# 개요

**자기쌍대 부호(self-dual code)** 는 쌍대 부호가 자기 자신과 같은 선형부호다. 길이 $8$ 의 확장 Hamming 부호(extended Hamming code)는 부호어 $16$ 개의 무게가 $0$ 하나, $4$ 열넷, $8$ 하나이고, 서로 다른 두 부호어는 언제나 짝수 개의 자리에서 함께 $1$ 이다. 같은 길이에서 최소 거리를 더 키울 수 있는지 알려면 가능한 무게 분포를 전부 알아야 한다.

자기쌍대 부호의 무게 분포는 [MacWilliams 항등식](macwilliams-identity.md)에서 변하지 않아야 하므로, 무게 열거다항식이 고정된 두 다항식의 다항식으로 제한된다. 이 제한에서 최소 거리의 상한이 계산된다.

# 직관

길이 $8$ 의 확장 Hamming 부호의 무게 열거다항식은 $W=x^8+14x^4y^4+y^8$ 이다. MacWilliams 항등식에 넣으면 부호어 수 $16$ 으로 나눈 결과가 $W$ 자신으로 돌아온다.

$$
\frac1{16}\Bigl((x+y)^8+14(x+y)^4(x-y)^4+(x-y)^8\Bigr)=x^8+14x^4y^4+y^8
$$

$x^6y^2$ 의 계수는 $(x+y)^8+(x-y)^8$ 에서 $56$, $14(x^2-y^2)^4$ 에서 $-56$ 이 나와 지워진다. 쌍대 부호의 무게 분포가 같은 부호다.

이 부호의 무게는 모두 $4$ 의 배수다. 그래서 $W$ 는 $y$ 를 $iy$ 로 바꿔도 변하지 않는다. 길이 $8$ 의 다항식 가운데 이 두 바꾸기에서 모두 변하지 않고 $x^8$ 의 계수가 $1$ 인 것은 $W$ 하나뿐이다. 그래서 무게가 모두 $4$ 의 배수인 길이 $8$ 의 자기쌍대 부호는 무게 분포가 이것과 같고, 최소 거리는 $4$ 를 넘지 못한다.

# 정의

## 자기쌍대 부호

길이 $n$ 의 이진 선형부호 $C$ 가 $C=C^\perp$ 를 만족하면 **자기쌍대 부호** 라 한다. 이때 $\dim C=n/2$ 이다. 직관 절의 부호는 길이 $8$, 차원 $4$ 다.

부호어 $c$ 는 자기 자신과 직교하므로 $c\cdot c=\mathrm{wt}(c)$ 가 법 $2$ 로 $0$ 이고, 모든 부호어의 무게가 짝수다. 무게가 모두 $4$ 의 배수이면 **II 형(Type II)**, 그렇지 않으면 **I 형(Type I)** 이라 한다. 직관 절의 부호는 II 형이고, 길이 $2$ 의 부호 $\lbrace 00,11\rbrace$ 는 I 형이다.

## 두 변환

복소수 $2\times2$ 행렬 두 개를 다음과 같이 둔다.

$$
\sigma=\frac1{\sqrt2}\begin{pmatrix}1&1\cr 1&-1\end{pmatrix},\qquad
\tau=\begin{pmatrix}1&0\cr 0&i\end{pmatrix}
$$

$\sigma$ 는 $(x,y)$ 를 $\bigl((x+y)/\sqrt2,(x-y)/\sqrt2\bigr)$ 로 보낸다. $W_C$ 는 $n$ 차 동차식이고 $\vert C\vert=2^{n/2}$ 이므로, MacWilliams 항등식은 자기쌍대 부호에서 $W_C\circ\sigma=W_C$ 와 같다. II 형 부호에서는 $W_C\circ\tau=W_C$ 도 성립한다. $\sigma$ 와 $\tau$ 가 생성하는 행렬군 $G$ 의 원소는 $192$ 개다[^1].

# 성질

## Gleason 정리

II 형 자기쌍대 부호의 무게 열거다항식은 다음 두 다항식의 다항식이다. 이것이 Gleason 정리(Gleason's theorem)다[^2].

$$
\begin{aligned}
g_8&=x^8+14x^4y^4+y^8\cr
g\_{24}&=x^4y^4(x^4-y^4)^4
\end{aligned}
$$

$g_8$ 은 직관 절의 부호의 것이다. 두 식의 차수가 $8$ 과 $24$ 이므로 II 형 부호의 길이는 $8$ 의 배수다.

I 형을 포함한 자기쌍대 부호 전체에서는 $\tau$ 대신 $y\mapsto -y$ 에서의 불변성을 쓰고, 무게 열거다항식은 $x^2+y^2$ 와 $x^2y^2(x^2-y^2)^2$ 의 다항식이다[^2]. 길이 $2$ 의 $\lbrace 00,11\rbrace$ 은 $x^2+y^2$ 이다.

## Molien 정리

유한 행렬군 $G$ 가 다항식에 작용할 때, 차수 $d$ 의 불변 다항식이 이루는 공간의 차원 $a_d$ 는 다음 식으로 계산된다. 이것이 Molien 정리(Molien's theorem)다[^1].

$$
\sum_{d\ge 0}a_d\lambda^d=\frac1{\vert G\vert}\sum_{g\in G}\frac1{\det(I-\lambda g)}
$$

$\sigma,\tau$ 가 생성하는 $G$ 에서 우변은 $1/\bigl((1-\lambda^8)(1-\lambda^{24})\bigr)$ 이다. 이 급수의 $\lambda^d$ 계수는 $8i+24j=d$ 인 음 아닌 정수 쌍 $(i,j)$ 의 수와 같다.

$g_8$ 과 $g\_{24}$ 는 $G$ 의 불변식이고, 단항식 $g_8^ig\_{24}^j$ 들은 일차독립이다. 차수 $d$ 에서 이런 단항식의 수가 $a_d$ 와 같으므로 이 단항식들이 불변 다항식 공간의 기저다. Gleason 정리의 증명의 요지가 이것이다.

## 길이 24 와 Golay 부호

길이 $24$ 의 II 형 부호의 무게 열거다항식은 $g_8^3+a\thinspace g\_{24}$ 꼴이다. $g_8^3$ 의 $x^{20}y^4$ 계수는 $42$, $g\_{24}$ 의 계수는 $1$ 이므로 무게 $4$ 인 부호어가 없으려면 $a=-42$ 다. 그러면 다음이 나온다.

$$
W=x^{24}+759x^{16}y^8+2576x^{12}y^{12}+759x^8y^{16}+y^{24}
$$

확장 [Golay 부호](golay-codes.md)가 이 무게 분포를 가진다. 길이 $24$ 에서 최소 거리 $8$ 인 II 형 부호의 무게 분포는 이것 하나다.

## 극값 부호

길이 $n$ 의 II 형 부호의 최소 거리 $d$ 는 다음을 만족한다[^3].

$$
d\le 4\left\lfloor\frac n{24}\right\rfloor+4
$$

등호가 성립하는 부호를 극값 부호(extremal code)라 한다. 증명의 요지. Gleason 정리로 $W$ 를 $g_8^{n/8-3j}g\_{24}^j$ 의 일차결합으로 쓰면 미지 계수가 $\lfloor n/24\rfloor+1$ 개다. 무게 $4,8,\dots,4\lfloor n/24\rfloor$ 의 계수를 $0$ 으로 두면 계수가 모두 정해지고, 그 결과에서 다음 무게의 계수가 양수다. 직관 절의 길이 $8$ 부호($d=4$)와 Golay 부호($d=8$)가 극값 부호다.

# 활용

- [격자](lattices.md). II 형 부호 $C$ 에서 $\lbrace v\in\mathbb Z^n: v\bmod 2\in C\rbrace$ 를 $\sqrt2$ 로 나눈 격자는 짝수 유니모듈러 격자다. 직관 절의 부호에서 $E_8$ 격자가 나오고, 무게 열거다항식에 대한 Gleason 정리는 [theta 급수](theta-series.md)가 [Eisenstein 급수](eisenstein-series.md) $E_4$ 와 판별식 $\Delta$ 의 다항식이라는 사실에 대응한다.
- 부호의 분류. 극값 부호의 무게 분포가 하나로 정해지므로, 길이 $24$ 의 II 형 극값 부호가 Golay 부호뿐이라는 것 같은 유일성 증명이 무게 분포에서 시작한다.
- 설계. Assmus–Mattson 정리(Assmus–Mattson theorem)로 극값 II 형 부호의 한 무게의 부호어 전체가 [조합적 설계](block-designs.md)를 이룬다. Golay 부호의 무게 $8$ 부호어 $759$ 개가 Steiner 계 $S(5,8,24)$ 의 블록이다.

[^1]: F. J. MacWilliams, N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland (1977), 19 장.
[^2]: A. M. Gleason, Weight polynomials of self-dual codes and the MacWilliams identities, in *Actes du Congrès International des Mathématiciens* (Nice, 1970), Vol. 3, Gauthier-Villars (1971), 211–215.
[^3]: C. L. Mallows, N. J. A. Sloane, An upper bound for self-dual codes, *Inform. Control* **22** (1973), 188–200.

# 연관 문서

## 선수지식

- [MacWilliams 항등식](macwilliams-identity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #combinatorics #algebra
