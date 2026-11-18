# 차분 공격

# 개요

**차분 공격(differential cryptanalysis)** 은 차가 정해진 평문 쌍을 블록 암호에 넣고, 그 차가 라운드를 지나며 특정한 차로 번지는 확률이 고르지 않다는 점을 써서 키를 찾는 공격이다. 3 비트 표 하나와 키 두 개로 된 작은 암호에서, 차가 $001$ 인 평문 쌍 두 개의 암호문만 보면 마지막 키의 후보가 여덟 개에서 하나로 줄어든다. 차분 공격은 키를 배타적 논리합으로 섞는 연산이 차를 바꾸지 않는다는 사실로 키를 비켜 가고, 남는 비선형 표의 차 분포로 키 후보를 거른다.

# 직관

[APN 함수](apn-functions.md)(almost perfect nonlinear function) 문서의 3 비트 표 $S(x)=x^3$ 을 쓴다.

| x    | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| S(x) | 000 | 001 | 011 | 100 | 101 | 110 | 111 | 010 |

비밀키 $k_0$, $k_1$ 로 암호 $c=S(p\oplus k_0)\oplus k_1$ 을 만든다. $\oplus$ 는 비트별 배타적 논리합이다. 두 평문 $p$, $p'$ 의 차가 $p\oplus p'=001$ 이면 표에 들어가는 두 값의 차도 $(p\oplus k_0)\oplus(p'\oplus k_0)=001$ 이다. 키 $k_0$ 은 차에서 지워진다.

공격자는 $k_1$ 을 하나 짐작하고, 두 암호문에 짐작한 $k_1$ 을 배타적 논리합한 뒤 표를 거꾸로 읽는다. 짐작이 맞으면 거꾸로 읽은 두 값의 차가 $001$ 이어야 한다. 실제 키가 $k_0=110$, $k_1=011$ 일 때 평문 쌍 $(000,001)$ 의 암호문은 $(100,001)$ 이다. 여덟 가지 짐작 가운데 이 조건을 통과하는 것은 $011$ 과 $110$ 둘이다.

평문 쌍 $(010,011)$ 의 암호문은 $(110,101)$ 이고, 통과하는 짐작은 $000$ 과 $011$ 이다. 두 쌍을 함께 통과하는 짐작은 $011$ 하나이고, 이것이 $k_1$ 이다. 이 표에서는 입력 차 $001$ 로 같은 출력 차를 내는 입력이 늘 두 개여서, 한 쌍마다 후보가 둘씩 남는다.

# 정의

$S:\mathbb F_2^n\to\mathbb F_2^n$ 에 대해 입력 차 $a$ 가 출력 차 $b$ 로 가는 **차분(differential)** $a\to b$ 의 확률은 다음이다.

$$
\Pr\lbrack a\to b\rbrack=\frac{\delta_S(a,b)}{2^n},\qquad \delta_S(a,b)=\char35{}\lbrace x:S(x\oplus a)\oplus S(x)=b\rbrace
$$

직관 절의 표에서 $a=001$ 이면 $b=001,111,011,101$ 의 확률이 각각 $2/8=1/4$ 이다.

라운드 함수를 여러 번 거치는 암호에서 라운드마다의 차 $a_0\to a_1\to\cdots\to a_r$ 을 **차분 특성(differential characteristic)** 이라 한다. 그 확률은 라운드마다 확률의 곱으로 어림한다.

**차분 공격** 은 확률 $p$ 인 차분 특성이 $r-1$ 라운드에 대해 있을 때 다음을 하는 절차다[^1].

1. 차가 $a_0$ 인 평문 쌍을 약 $c/p$ 개 골라 암호화한다.
2. 마지막 라운드 키의 후보마다 마지막 라운드를 거꾸로 계산해 차가 $a_{r-1}$ 인 쌍의 수를 센다.
3. 그 수가 가장 큰 후보를 마지막 라운드 키로 고른다.

# 성질

## 키와 차의 분리

키를 배타적 논리합으로 더하는 연산은 차를 바꾸지 않는다. 그래서 각 라운드의 차분 확률은 그 라운드 키와 무관하고 비선형 표의 $\delta_S$ 로만 정해진다. 라운드 키가 독립이고 균등하다고 놓으면 라운드마다의 차는 [Markov 연쇄](markov-chains.md)를 이루고, 차분 특성의 확률이 라운드 확률의 곱이 된다(Lai–Massey–Murphy 의 Markov 암호, Markov cipher)[^2].

## 표의 차분 균일성

표 하나의 가장 큰 차분 확률은 $\delta_S/2^n$ 이다. $\delta_S$ 는 짝수이므로 가장 작은 값은 $2$ 이고, 이를 달성하는 표가 APN 함수다. 직관 절의 표는 APN 이어서 $0$ 이 아닌 모든 입력 차에서 가장 큰 확률이 $1/4$ 이다. 표 $r$ 개를 차례로 거치는 특성의 확률은 많아야 $(\delta_S/2^n)^r$ 이다.

## 필요한 평문 쌍의 수

확률 $p$ 인 특성을 따르는 쌍은 평균적으로 $1/p$ 쌍 가운데 하나다. 마지막 라운드 키의 맞는 후보는 이 쌍들에서 꾸준히 점수를 얻고 틀린 후보는 무작위로 점수를 얻으므로, 쌍이 $c/p$ 개쯤이면 맞는 후보가 드러난다. [선형 공격](linear-cryptanalysis.md)이 알려진 평문 $\varepsilon^{-2}$ 개를 쓰는 것과 달리 차분 공격은 평문을 골라야 한다.

# 활용

- 데이터 암호화 표준의 해독. Biham 과 Shamir 는 데이터 암호화 표준(Data Encryption Standard, DES)의 16 라운드 전체를 고른 평문 $2^{47}$ 개로 공격했다[^1]. DES 의 S-상자는 이 공격을 알고 설계되어 있었다는 사실이 뒤에 공개되었다[^3].
- AES(Advanced Encryption Standard)의 설계. AES 의 S-상자는 $\delta_S=4$ 여서 표 하나의 가장 큰 확률이 $2^{-6}$ 이다. 연속한 4 라운드에서 차에 관여하는 표가 25 개 이상이 되게 해, 특성의 확률을 $2^{-150}$ 이하로 만든다[^4].
- 변형 공격. 확률 $0$ 인 차분으로 키 후보를 지우는 불가능 차분 공격(impossible differential attack), 차의 일부 비트만 따라가는 절단 차분 공격(truncated differential attack)이 같은 틀에서 나온다.
- 해시 함수의 충돌. MD5(Message-Digest algorithm 5)와 SHA-1(Secure Hash Algorithm 1)의 충돌은 메시지 블록 쌍의 차가 압축 함수를 지나 $0$ 으로 사라지는 차분 경로를 찾아 만들었다.

[^1]: E. Biham, A. Shamir, *Differential Cryptanalysis of the Data Encryption Standard*, Springer, 1993.
[^2]: X. Lai, J. L. Massey, S. Murphy, "Markov ciphers and differential cryptanalysis", *EUROCRYPT '91*, LNCS 547, Springer, 1991, 17–38.
[^3]: D. Coppersmith, "The Data Encryption Standard (DES) and its strength against attacks", *IBM J. Res. Dev.* 38 (1994), 243–250.
[^4]: J. Daemen, V. Rijmen, *The Design of Rijndael*, Springer, 2002, Chapter 9.

# 연관 문서

## 선수지식

- [APN 함수](apn-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #combinatorics #field_theory
