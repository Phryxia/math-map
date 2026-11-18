# CCZ 동치

# 개요

**CCZ 동치(Carlet–Charpin–Zinoviev equivalence)** 는 두 함수 $\mathbb F_2^n\to\mathbb F_2^n$ 의 그래프가 아핀 변환 하나로 서로 옮겨지는 관계다. 3 비트 표 $x^3$ 을 입력 칸과 출력 칸을 바꾸어 읽으면 역함수 $x^5$ 의 표가 되고, 두 표는 [차분 공격](differential-cryptanalysis.md)과 [선형 공격](linear-cryptanalysis.md)에 대해 같은 강도를 갖는다. CCZ 동치는 이렇게 공격 강도를 바꾸지 않는 표의 변형을 모두 모은 관계이고, [APN 함수](apn-functions.md)(almost perfect nonlinear function)를 분류할 때 같은 것으로 셀 함수를 정한다.

# 직관

APN 함수 문서의 $\mathbb F_8$ 에서 $F(x)=x^3$ 의 표와, 그 표의 두 줄을 바꾼 표를 놓는다. $3\cdot 5=15\equiv 1\pmod 7$ 이므로 바꾼 표는 $G(y)=y^5$ 이다.

| x    | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| F(x) | 000 | 001 | 011 | 100 | 101 | 110 | 111 | 010 |

| y    | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| G(y) | 000 | 001 | 111 | 010 | 011 | 100 | 101 | 110 |

두 표는 같은 점 $(x,F(x))$ 여덟 개를 담고, 좌표의 순서만 다르다. $F$ 에서 입력 차 $a$ 가 출력 차 $b$ 로 가는 쌍은 $G$ 에서 입력 차 $b$ 가 출력 차 $a$ 로 가는 쌍이다. 그래서 $F$ 의 차분 표를 뒤집은 것이 $G$ 의 차분 표이고, 가장 큰 값은 둘 다 $2$ 다.

선형 근사도 같다. $a\cdot x=b\cdot F(x)$ 가 성립하는 $x$ 의 수는 $b\cdot y=a\cdot G(y)$ 가 성립하는 $y$ 의 수와 같다. 두 표는 공격자에게 같은 표다. 좌표를 바꾸는 것 말고도 점 여덟 개를 6 비트 공간에서 아핀 변환으로 옮겨 다시 어떤 함수의 표가 되면, 같은 이유로 공격 강도가 같다.

# 정의

$F:\mathbb F_2^n\to\mathbb F_2^n$ 의 **그래프(graph)** 는 $\Gamma_F=\lbrace(x,F(x)):x\in\mathbb F_2^n\rbrace\subseteq\mathbb F_2^{2n}$ 이다. $\mathbb F_2^{2n}$ 의 아핀 치환 $\mathcal L$ 이 존재해 $\mathcal L(\Gamma_F)=\Gamma_G$ 이면 $F$ 와 $G$ 가 **CCZ 동치** 라 한다[^1]. 직관 절에서 $\mathcal L(x,y)=(y,x)$ 가 $\Gamma_F$ 를 $\Gamma_G$ 로 보낸다.

$\mathbb F_2^n$ 의 아핀 치환 $A_1$, $A_2$ 와 아핀 사상 $A_3$ 에 대해 $G=A_1\circ F\circ A_2+A_3$ 이면 $F$ 와 $G$ 가 **EA 동치(extended affine equivalence)** 라 한다. $A_3=0$ 이면 **아핀 동치(affine equivalence)** 다. EA 동치는 CCZ 동치다. 다음 $\mathcal L$ 이 $\Gamma_F$ 를 $\Gamma_G$ 로 보낸다.

$$
\mathcal L(x,y)=\bigl(A_2^{-1}(x),\thinspace A_1(y)+A_3(A_2^{-1}(x))\bigr)
$$

# 성질

## 차분 표와 Walsh 계수의 보존

CCZ 동치인 두 함수의 차분 표는 같은 값들을 담는다. $\delta_F(a,b)$ 는 $\Gamma_F$ 의 두 점의 차가 $(a,b)$ 인 순서쌍의 수다. $\mathcal L$ 의 선형 부분을 $L$ 이라 하면 $\mathcal L(u)+\mathcal L(v)=L(u+v)$ 이므로, 차가 $(a,b)$ 인 쌍은 차가 $L(a,b)$ 인 쌍으로 옮겨진다. 따라서 $\delta_G(L(a,b))=\delta_F(a,b)$ 이고, 차분 균일성과 APN 성질이 보존된다.

Walsh 계수는 $W_F(a,b)=\sum_{(x,y)\in\Gamma_F}(-1)^{a\cdot x+b\cdot y}$ 로 그래프 위의 합이다. 그래프를 $\mathcal L$ 로 옮기면 $(a,b)$ 가 $L$ 의 수반 사상의 역으로 옮겨지고 부호만 바뀐다. 따라서 $\vert W\vert$ 값의 모임이 보존되고, 선형 공격의 최대 편향과 거의 굽은 함수(almost bent function)의 성질이 보존된다.

## 대수적 차수

EA 동치는 차수가 $2$ 이상인 함수의 대수적 차수(algebraic degree)를 보존한다. CCZ 동치는 보존하지 않는다.

$\mathbb F_{32}$ 에서 $x^3$ 의 역함수는 $3\cdot 21=63\equiv 1\pmod{31}$ 이므로 $x^{21}$ 이다. 지수의 이진 표기에서 $1$ 의 개수가 차수이므로 $x^3$ 은 차수 $2$, $x^{21}=x^{10101_2}$ 은 차수 $3$ 이다. 두 함수는 CCZ 동치이지만 EA 동치가 아니다.

## 역함수보다 넓은 관계

치환 $F$ 와 그 역함수는 늘 CCZ 동치다. EA 동치와 역함수를 거듭 써서 얻을 수 없는 CCZ 동치도 있다. Budaghyan, Carlet, Pott 는 Gold 함수 $x^{2^i+1}$ 과 CCZ 동치이지만 Gold 함수나 그 역함수와 EA 동치가 아닌 APN 함수를 만들었다[^2].

# 활용

- APN 함수의 분류. 새 APN 함수를 찾았다고 할 때는 알려진 함수들과 CCZ 동치가 아님을 보인다. 차분 표의 값 분포, Walsh 계수 절댓값의 분포 같은 CCZ 불변량이 다르면 동치가 아니다.
- 6 비트 APN 치환. 치환이 아닌 APN 함수 하나의 CCZ 동치류 안에서 치환인 함수를 찾아, 짝수 $n=6$ 의 APN 치환이 처음 얻어졌다[^3].
- S-상자 설계. 한 CCZ 동치류에서 차분 강도와 선형 강도는 같으므로, 그 안에서 치환이면서 회로가 작거나 대수적 차수가 높은 표를 고른다.

[^1]: C. Carlet, P. Charpin, V. Zinoviev, "Codes, bent functions and permutations suitable for DES-like cryptosystems", *Des. Codes Cryptogr.* 15 (1998), 125–156.
[^2]: L. Budaghyan, C. Carlet, A. Pott, "New classes of almost bent and almost perfect nonlinear polynomials", *IEEE Trans. Inform. Theory* 52 (2006), 1141–1152.
[^3]: K. A. Browning, J. F. Dillon, M. T. McQuistan, A. J. Wolfe, "An APN permutation in dimension six", *Finite Fields: Theory and Applications*, Contemporary Mathematics 518, American Mathematical Society, 2010, 33–42.

# 연관 문서

## 선수지식

- [APN 함수](apn-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #combinatorics #field_theory
