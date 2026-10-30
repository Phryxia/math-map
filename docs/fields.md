# 체

# 개요

**체(field)** 는 더하기, 빼기, 곱하기, 그리고 $0$ 이 아닌 원소로 나누기를 늘 할 수 있는 수 체계다. 정수 안에서는 $2x=1$ 이 풀리지 않지만, 유리수에서는 $x=1/2$ 로 풀리고 $7$ 로 나눈 나머지끼리 계산하면 $2\cdot4=8$ 이 $1$ 과 같아 $x=4$ 로 풀린다. 체는 나눗셈이 늘 되는 구조를 모아, 일차방정식과 [행렬](matrices.md) 계산을 어느 수 체계에서든 같은 절차로 푼다.

# 직관

정수 안에서는 $2x=1$ 을 풀 수 없다. $2$ 로 나누는 연산이 정수 안에 없기 때문이다. 유리수로 가면 $x=1/2$ 이고, $0$ 이 아닌 어느 유리수로도 나눌 수 있다.

$7$ 로 나눈 나머지 $0,1,\dots,6$ 끼리 더하고 곱하는 계산에서도 나눌 수 있다. 곱해서 나머지가 $1$ 이 되는 짝을 찾으면 $1\cdot1$, $2\cdot4$, $3\cdot5$, $6\cdot6$ 이고, $0$ 이 아닌 나머지는 모두 짝이 있다. $a$ 로 나누는 것은 $a$ 의 짝을 곱하는 것이다. $2x=1$ 은 양변에 $4$ 를 곱해 $x=4$ 로 풀리고, $3x=2$ 는 양변에 $5$ 를 곱해 $x=10$, 곧 나머지 $3$ 으로 풀린다.

$6$ 으로 나눈 나머지에서는 $2$ 의 짝이 없다. $2$ 에 $0,1,\dots,5$ 를 곱하면 나머지가 $0,2,4,0,2,4$ 이고 $1$ 이 나오지 않는다. $2\cdot3$ 의 나머지가 $0$ 이므로 $0$ 이 아닌 두 수의 곱이 $0$ 이 되기도 한다.

유리수, 실수, [복소수](complex-numbers.md), $7$ 로 나눈 나머지는 크기가 다르지만 $0$ 이 아닌 수로 늘 나눌 수 있다는 점이 같다. 크기 비교나 극한은 쓰지 않으므로, 일차방정식을 푸는 계산은 이 넷에서 같은 절차로 진행된다.

# 정의

**체(field)** 는 $1\ne 0$ 이고 $0$ 이 아닌 모든 원소가 곱셈에 대한 역원을 가지는 가환 [환](rings.md)이다.

$$
1\neq 0,\qquad \forall a\in F\setminus\lbrace 0\rbrace\ \ \exists\thinspace a^{-1}\in F:\ a\cdot a^{-1}=1
$$

$\mathbb Q$, $\mathbb R$, $\mathbb C$ 는 체다. $7$ 로 나눈 나머지의 환 $\mathbb{Z}/7\mathbb{Z}$ 는 직관 절의 짝 $2^{-1}=4$, $3^{-1}=5$, $6^{-1}=6$ 이 있으므로 체이고 $\mathbb{F}\_7$ 로 쓴다. $\mathbb Z$ 와 $\mathbb{Z}/6\mathbb{Z}$ 는 $2$ 의 역원이 없으므로 체가 아니다. 체 $F$ 의 곱셈 가역원 전체를 **곱셈군(multiplicative group)** 이라 하고 $F^{\times}$ 로 쓴다. $\mathbb{F}\_7^{\times}=\lbrace 1,2,3,4,5,6\rbrace$ 이다.

체 $F$ 의 **표수(characteristic)** 는 $1$ 을 반복해서 더해 $0$ 을 만드는 최소 횟수다. 그런 횟수가 없으면 표수를 0 으로 정의한다. $n\cdot 1$ 은 $1$ 을 $n$ 번 더한 것을 뜻한다.

$$
\mathrm{char}F=\begin{cases}\min\lbrace\thinspace n\ge 1: n\cdot 1_F=0\thinspace\rbrace & \text{그런 } n \text{이 존재할 때}\cr 0 & \text{그렇지 않을 때}\end{cases}
$$

$\mathbb{F}\_7$ 에서 $1$ 을 일곱 번 더하면 나머지가 $0$ 이므로 $\mathrm{char}\thinspace\mathbb{F}\_7=7$ 이다. $\mathbb Q$ 에서는 $1$ 을 몇 번 더해도 양수이므로 $\mathrm{char}\thinspace\mathbb{Q}=0$ 이다.

**부분체(subfield)** 는 $F$ 의 부분집합이면서 $F$ 의 연산으로 체가 되는 것이다. $F$ 의 **소체(prime subfield)** 는 $F$ 에 포함된 모든 부분체의 교집합, 곧 $1$ 을 포함하는 가장 작은 부분체다. $\mathbb Q$ 는 $\mathbb R$ 의 부분체이고, $\mathbb R$ 의 모든 부분체는 $1$ 을 포함하므로 정수와 그 몫을 포함한다. 그래서 $\mathbb R$ 의 소체는 $\mathbb Q$ 다. $\mathbb{F}\_7$ 의 부분체는 $1$ 을 더해서 나오는 $0,\dots,6$ 을 모두 포함하므로 소체는 $\mathbb{F}\_7$ 자신이다.

**체 준동형(field homomorphism)** 은 체 $F$ 에서 체 $K$ 로 가는 환 준동형 가운데 $1$ 을 $1$ 로 보내는 것이다. 포함 $\mathbb Q\to\mathbb R$ 과 복소수의 켤레 $a+bi\mapsto a-bi$ 가 체 준동형이다.

# 성질

## 곱셈군

가환환이 체인 것은 곱셈 가역원 전체가 $0$ 이 아닌 원소 전체와 일치하는 것과 동치다.

$
F^{\times}=F\setminus\lbrace 0\rbrace
$

## 표수

체의 표수는 0 이거나 소수다.

$n\cdot 1=0$ 인 최소의 $n$ 이 합성수 $n=ab$ ( $1\lt a,b\lt n$ )라면 $(a\cdot 1)(b\cdot 1)=n\cdot 1=0$ 이 되어 체에서 영인수가 생기므로 모순이다. 체는 정역이므로 표수는 0이거나 소수다[^1].

## 소체

체의 소체는 $\mathbb{Q}$ 또는 $\mathbb{F}\_p$ 와 동형이다.

환 준동형 $\varphi:\mathbb{Z}\to F$ , $\varphi(n)=n\cdot 1$ 을 잡는다. 상 $\varphi(\mathbb{Z})$ 를 포함하는 최소 부분체가 소체다. 표수가 소수 $p$ 이면 커널이 $p\mathbb{Z}$ 이므로 제1동형정리로 $\mathbb{Z}/p\mathbb{Z}$ 와 동형인 부분체를 얻고, 이는 이미 체이므로 소체다. 표수가 0이면 $\varphi$ 가 단사이므로 $\varphi$ 를 분수로 확장한 $\mathbb{Q}\to F$ 가 단사 체 준동형이 되고, 그 상이 소체다[^1].

$$
\mathrm{char}F=p \Rightarrow \text{소체}\cong\mathbb{F}\_p=\mathbb{Z}/p\mathbb{Z},\qquad \mathrm{char}F=0 \Rightarrow \text{소체}\cong\mathbb{Q}
$$

따라서 모든 체는 $\mathbb{Q}$ 또는 어떤 $\mathbb{F}\_p$ 의 [확대체](field-extensions.md)다. $\mathbb{F}\_p$ 의 연산은 [정수의 합동](modular-arithmetic.md)에서 $p$ 가 [소수](primes.md)일 때의 나머지 연산이다.

## 아이디얼과 준동형

체 $F$ 의 [아이디얼](ideals-quotient-rings.md)은 $0$ 과 $F$ 뿐이다. $0$ 이 아닌 원소 $a$ 를 포함하는 아이디얼은 $a$ 의 역원을 곱해 $1$ 을 포함하므로 $F$ 전체가 된다. 그 결과 체에서 나가는 $0$ 이 아닌 환 준동형은 모두 단사다. 커널이 아이디얼이고 $1$ 을 $1$ 로 보내므로 커널이 $F$ 전체일 수 없기 때문이다.

## 몫체

가환환 $R$ 과 진아이디얼 $M$ 에 대해 다음이 성립한다[^2].

$$
M \text{이 극대 아이디얼} \iff R/M \text{가 체}
$$

이는 체를 만드는 표준적인 방법이다. $\mathbb{Z}$ 의 [극대 아이디얼](prime-ideals.md) $(p)$ 에서 $\mathbb{F}\_p$ 를, 체 $k$ 위 다항식환의 극대 아이디얼에서 체의 확대를 얻는다. 반면 $(0)$ 은 $\mathbb{Z}$ 에서 소 아이디얼이지만 극대가 아니므로 $\mathbb{Z}$ 는 체가 아니다.

## 유한체의 위수

유한체의 위수는 반드시 소수의 거듭제곱이다. 각 위수마다 체는 동형을 무시하면 하나뿐이다. 원소 6개인 체는 없다. 증명은 [유한체](finite-fields.md)에 있다.

## 반례

- 정수환 $\mathbb{Z}$ 는 정역이지만 $2$ 가 가역이 아니므로 체가 아니다.
- $\mathbb{Z}/6\mathbb{Z}$ 는 $2\cdot 3=0$ 이므로 정역조차 아니다. 반면 $\mathbb{Z}/5\mathbb{Z}$ 는 체다.
- 2차 정사각행렬 전체에는 가역이 아닌 $0$ 아닌 행렬이 있고 가환도 아니다. 나눗셈이 가능하지만 비가환인 구조를 나눗셈환(division ring)이라 한다. 사원수체(quaternion)가 그 예다.

# 활용

## 선형대수의 계수

[벡터 공간](vector-spaces.md)과 [선형사상](linear-maps.md)은 계수가 체일 때 정의된다. 체에서 나눗셈이 가능하다는 성질이 [Gauss 소거법](gaussian-elimination.md)의 피벗 나눗셈, 기저의 존재, 차원의 유일성을 보장한다. 계수를 $\mathbb{Z}$ 로 바꾸면 기저가 없는 유한생성 가군(예: $\mathbb{Z}/2\mathbb{Z}$ )이 생긴다.

## Frobenius 사상

표수 $p$ 인 체에서는 $p$ 제곱 사상이 체 준동형이다. 이항계수 $p!/(k!(p-k)!)$ 가 $0\lt k\lt p$ 에서 $p$ 로 나누어지기 때문이다.

$$
(x+y)^p=x^p+y^p \quad\text{in } \mathrm{char}p
$$

이 사상을 Frobenius 자기준동형(Frobenius endomorphism)이라 한다. 유한체의 구조 정리와 [Galois 이론](galois-theory.md)의 증명에 이 사상을 쓴다. 표수 0 에서는 이 항등식이 성립하지 않고, 분리성(separability)의 판정도 두 표수에서 달라진다.

## 다항식과 확대

체 위의 [다항식환](polynomial-rings.md)은 나눗셈 정리를 가지므로 [유클리드 정역](euclidean-domains.md)이 된다. 기약다항식으로 몫을 취하면 더 큰 체가 나오고, 이 과정을 반복해 대수방정식의 해를 담는 체를 구성한다.

[^1]: Dummit, Math 5111 Lecture #5, "Subfields and Simple Extensions" — 표수가 0 또는 소수임과 소체가 $\mathbb{Q}$ 또는 $\mathbb{F}\_p$ 와 동형임의 증명. https://dummit.cos.northeastern.edu/teaching_fa20_5111/5111_lecture_05_subfields_simple_extensions.pdf
[^2]: MIT OpenCourseWare 18.703, Lecture 18 "Prime and Maximal Ideals", Theorem 18.8. https://ocw.mit.edu/courses/18-703-modern-algebra-spring-2013/247dc7bcf731827674f4a2338f929a7a_MIT18_703S13_pra_l_18.pdf

# 연관 문서

## 선수지식

- [환](rings.md)
- [소 아이디얼](prime-ideals.md)

## 더 알아보기

- [다항식환](polynomial-rings.md)
- [체의 확대](field-extensions.md)
- [나눗셈 대수](division-algebras.md)

#field_theory #algebra
