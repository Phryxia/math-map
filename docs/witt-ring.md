# Witt 환

# 개요

체 $K$ 위의 비퇴화 이차형식을 쌍곡형식을 법으로 모으면 환이 된다. 덧셈은 직교합, 곱셈은 텐서곱이고, 이 환을 $K$ 의 **Witt 환** $W(K)$ 라 한다.

차원이 다른 형식을 한 대상 안에서 비교할 수 있게 되므로, 체마다 분류 목록을 적는 대신 환 하나의 구조를 보는 것으로 이차형식의 분류가 바뀐다. 차원을 $2$ 로 나눈 나머지가 정하는 아이디얼의 거듭제곱이 여과를 만들고, 그 여과의 층이 Galois 코호몰로지와 일치한다.

# 직관

$\mathbb R$ 위의 비퇴화 [이차형식](quadratic-forms.md)은 대각화한 뒤의 양수 개수 $r$ 과 음수 개수 $s$ 로 분류된다. 두 형식을 변수를 따로 두고 더하면 $(r,s)$ 가 더해지므로 분류에 덧셈이 있다. 차원이 다른 두 형식은 이 덧셈으로 묶이지 않는다.

$x^2-y^2$ 을 더해 본다. 부호수는 $(r+1,s+1)$ 이 되어 양쪽이 함께 늘고 차 $r-s$ 는 그대로다. 이 형식을 몇 번 더하든 $r-s$ 가 바뀌지 않으니, $r-s$ 만 보면 차원이 다른 형식도 한 수로 비교된다.

일반 체에서 $x^2-y^2$ 에 해당하는 것이 쌍곡평면이다. 형식 하나에서 쌍곡평면을 떼어낸 나머지가 떼는 방법에 상관없이 같다는 것이 Witt 의 소거 정리이고, 따라서 모든 형식이 쌍곡평면을 품지 않는 형식 하나와 쌍곡평면 여럿의 합으로 유일하게 쪼개진다.

쌍곡평면 쪽을 버리고 남은 부분만 기억한다. 두 형식을 더한 뒤 다시 쌍곡평면을 버리는 연산이 닫혀 있고, 텐서곱이 곱셈이 된다. $K=\mathbb R$ 이면 남는 것이 $r-s$ 하나이고 이 환은 $\mathbb Z$ 다.

# 정의

$\mathrm{char}\thinspace K\ne2$ 라 한다. 대각형식 $a_1x_1^2+\cdots+a_nx_n^2$ 을 $\langle a_1,\dots,a_n\rangle$ 으로 적고, 직교합을 $\perp$ 로 적는다.

## 쌍곡평면과 Witt 분해

$\mathbb H=\langle 1,-1\rangle$ 을 **쌍곡평면**이라 한다. $q(x)=0$ 인 $x\ne0$ 이 없는 형식을 **비등방**이라 한다.

**정리(Witt 분해).** 모든 비퇴화 형식 $q$ 는

$$
q\cong q_{\mathrm{an}}\perp m\mathbb H
$$

로 쓰이고, 비등방 형식 $q_{\mathrm{an}}$ 과 정수 $m\ge0$ 이 유일하게 정해진다.

**정리(Witt 소거).** $q_1\perp q\cong q_2\perp q$ 이면 $q_1\cong q_2$ 다.

## Witt 환

비퇴화 형식의 동형류에서 $q\sim q'$ 를 $q_{\mathrm{an}}\cong q'\_{\mathrm{an}}$ 으로 정의한다. 이 동치류의 집합에 $\perp$ 를 덧셈, $\otimes$ 를 곱셈으로 주면 가환환이 되고, 이것이 $W(K)$ 다.

항등원은 $\langle 1\rangle$ 이고 영원소는 쌍곡형식 $m\mathbb H$ 의 류다. $\langle a\rangle\otimes\langle b\rangle=\langle ab\rangle$ 이고 $-\langle a\rangle=\langle -a\rangle$ 이다. $\langle a\rangle$ 은 $a$ 의 제곱류에만 의존하므로 $W(K)$ 는 $K^{\times}/(K^{\times})^{2}$ 의 원소들로 생성된다.

## Pfister 형식

$a_1,\dots,a_n\in K^{\times}$ 에 대해

$$
\langle\langle a_1,\dots,a_n\rangle\rangle=\bigotimes_{i=1}^{n}\big(\langle 1\rangle\perp\langle -a_i\rangle\big)
$$

를 $n$ 겹 **Pfister 형식**이라 한다. 차원은 $2^{n}$ 이다.

# 성질

## 기본 아이디얼과 여과

차원을 $2$ 로 나눈 나머지를 보내는 사상 $W(K)\to\mathbb Z/2$ 는 환 준동형이고, 그 핵 $I=I(K)$ 를 **기본 아이디얼**이라 한다. $I$ 는 짝수 차원 형식의 류로 이루어진다.

거듭제곱 $I\supseteq I^2\supseteq I^3\supseteq\cdots$ 의 처음 두 층이 고전적 불변량이다.

$$
I/I^2\cong K^{\times}/(K^{\times})^{2},\qquad I^2/I^3\cong\mathrm{Br}\_2(K)
$$

앞의 동형은 판별식이, 뒤의 동형은 Hasse–Witt 불변량이 준다. $I^{n}$ 은 $n$ 겹 Pfister 형식들로 가법적으로 생성된다.[^1]

## Milnor 추측

여과의 모든 층이 Galois 코호몰로지와 같다는 것이 Milnor 의 추측이고, Voevodsky 가 증명했다.[^2]

$$
I^{n}/I^{n+1}\cong H^{n}\big(K,\mathbb Z/2\big)
$$

$n=0,1,2$ 는 차원, 판별식, Hasse–Witt 불변량이고 그 위는 이들의 고차 유사물이다. 같은 논문의 또 다른 동형이 Milnor $K$ 군 $K^{M}\_n(K)/2$ 를 같은 코호몰로지와 맺는다.

## Pfister 형식의 등방성

**정리(Pfister).** Pfister 형식이 등방이면 쌍곡이다.

$\langle\langle a\rangle\rangle=\langle 1,-a\rangle$ 이 등방인 것은 $a$ 가 $K$ 에서 제곱인 것과 같고, 그때 이 형식은 $\mathbb H$ 다. 일반 $n$ 에서는 Pfister 형식이 표현하는 $0$ 이 아닌 값들이 군을 이룬다는 성질로 귀납한다.

## 구체적인 Witt 환

| $K$ | $W(K)$ | 완전 불변량 |
| --- | --- | --- |
| $\mathbb C$ | $\mathbb Z/2$ | 차원을 $2$ 로 나눈 나머지 |
| $\mathbb R$ | $\mathbb Z$ | 부호수 $r-s$ |
| $\mathbb F_q$, $q\equiv1\thinspace(4)$ | $\mathbb F_2\lbrack C_2\rbrack$ | 차원 나머지와 판별식 |
| $\mathbb F_q$, $q\equiv3\thinspace(4)$ | $\mathbb Z/4$ | 차원 나머지와 판별식 |
| $\mathbb Q_p$ | 위수 16 의 환 | 차원, 판별식, Hasse 불변량 |

유한체에서는 비등방 형식의 차원이 $2$ 를 넘지 못하므로 $W(\mathbb F_q)$ 의 위수가 $4$ 다.

## 비틀림과 순서

$K$ 에 순서가 하나라도 있으면(형식적 실체) 그 순서마다 부호수 준동형 $W(K)\to\mathbb Z$ 가 있다.

**정리(Pfister 의 국소-전역 원리).** $W(K)$ 의 원소가 비틀림인 것과 모든 순서에서 부호수가 $0$ 인 것이 동치다.

형식적 실체가 아닌 체에서는 순서가 없으므로 $W(K)$ 가 전부 비틀림이고, 비틀림 부분군의 위수는 언제나 $2$ 의 거듭제곱이다. 소아이디얼의 집합에 Zariski 위상을 주면 $K$ 의 순서 공간이 나온다.

# 활용

- **수체 위의 분류.** $\mathbb Q$ 위의 형식은 차원, 판별식, Hasse 불변량, 부호수로 결정된다. $W(\mathbb Q)\to W(\mathbb R)\times\prod_p W(\mathbb Q_p)$ 가 단사라는 것이 Hasse–Minkowski 정리의 Witt 환 판본이고, 단사성의 증명에 [Brauer 군](brauer-groups.md)의 불변량 사상이 쓰인다.
- **대수적 $K$ 이론.** Milnor 추측이 $I^{n}/I^{n+1}$, $K^{M}\_n(K)/2$, $H^{n}(K,\mathbb Z/2)$ 세 쪽을 맺으므로 이차형식의 계산이 $K$ 이론의 계산으로 옮겨진다.
- **수술 이론.** 다양체의 수술 장애가 기본군의 군환 위 이차형식의 Witt 군에 값을 갖는다. 짝수 차원의 장애군이 그 Witt 군이다.
- **실대수기하.** $W(K)$ 의 소아이디얼 스펙트럼이 $K$ 의 순서 공간과 맺어지므로, 실닫힌체 위의 반대수집합을 다루는 데 쓰인다.

[^1]: T. Y. Lam, *Introduction to Quadratic Forms over Fields*, Graduate Studies in Mathematics 67, American Mathematical Society, 2005. Witt 분해와 소거는 1 장, 기본 아이디얼과 Pfister 형식은 2 장과 10 장이다.
[^2]: V. Voevodsky, "Motivic cohomology with $\mathbb Z/2$ coefficients", Publ. Math. IHÉS 98 (2003), 59–104. $I^n/I^{n+1}$ 쪽 진술은 D. Orlov, A. Vishik, V. Voevodsky, "An exact sequence for $K^M_*/2$ with applications to quadratic forms", Ann. of Math. 165 (2007), 1–13.

# 연관 문서

## 선수지식

- [이차형식](quadratic-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #number_theory #field_theory
