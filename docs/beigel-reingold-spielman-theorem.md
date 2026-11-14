# Beigel–Reingold–Spielman 정리

# 개요

**Beigel–Reingold–Spielman 정리(Beigel–Reingold–Spielman theorem)** 는 [PP](probabilistic-polynomial-time.md)에 속하는 두 언어의 교집합이 다시 PP 에 속한다는 정리다. 두 문제를 각각 과반 투표로 판정하는 기계가 있을 때, 두 투표가 모두 찬성인지를 투표 하나로 판정하려면 두 득표 차의 부호를 한 수의 부호로 합쳐야 한다. 이 정리는 부호 함수를 유리함수로 근사하고 분모를 곱해 없애, 두 부호의 논리곱을 하나의 차이 함수의 부호로 만든다.

# 직관

언어 $L_1,L_2$ 에 차이 함수 $f_1,f_2$ 가 있어 $x\in L_j\iff f_j(x)\gt 0$ 이라 하자. $x\in L_1\cap L_2$ 는 두 수가 모두 양수라는 것이다. 곱 $f_1f_2$ 는 둘 다 음수일 때도 양수이고, $\min(f_1,f_2)$ 는 차이 함수의 부류 GapP 가 닫혀 있는 덧셈과 곱셈으로 바로 적을 방법이 없다.

부호 함수를 덧셈과 곱셈으로 근사하면 된다. $f_j$ 의 크기는 $2^m$ 까지 갈 수 있으므로 다항식으로 근사하면 차수가 지수적으로 커진다. 그래서 다음 다항식으로 유리함수를 만든다.

$$
P(z)=\prod_{i=1}^m(z-2^i)^2,\qquad R(z)=\frac{P(-z)-P(z)}{P(-z)+P(z)}
$$

$m=3$ 이면 $P(3)=1\cdot 1\cdot 25=25$ 이고 $P(-3)=25\cdot 49\cdot 121=148225$ 이므로 $R(3)\approx 0.9997$ 이다. $P(1)=441$, $P(-1)=18225$ 이므로 $R(1)\approx 0.95$ 이다. 양수에서 $R$ 은 $1$ 에 가깝고, $R(-z)=-R(z)$ 이므로 음수에서는 $-1$ 에 가깝다.

# 정의

PP 는 다항시간 확률 기계가 정답을 확률 $1/2$ 보다 크게 내는 언어의 부류이고, $L\in\mathrm{PP}$ 는 $x\in L\iff g(x)\gt 0$ 인 GapP 함수 $g$ 가 있는 것과 동치다. PP 가 **교집합에 닫혀 있다(closed under intersection)** 는 것은 $L_1,L_2\in\mathrm{PP}$ 이면 $L_1\cap L_2\in\mathrm{PP}$ 라는 것이다.

정리[^1]. PP 는 교집합과 합집합에 닫혀 있다.

PP 는 여집합에 닫혀 있으므로 합집합의 닫힘은 $L_1\cup L_2$ 의 여집합이 두 여집합의 교집합이라는 데서 교집합의 닫힘으로 바뀐다.

# 성질

## 부호 근사

$1\le z\le 2^m$ 이면 $R(z)\ge 4/5$ 이고 $-2^m\le z\le -1$ 이면 $R(z)\le -4/5$ 다.

증명의 요지. $1\le z\le 2^m$ 이면 $2^{i-1}\le z\le 2^i$ 인 $i\le m$ 이 있고, 그 인수는 $\vert z-2^i\vert/(z+2^i)\le 1/3$ 을 만족한다. 다른 인수는 $\vert z-2^j\vert/(z+2^j)\lt 1$ 이므로 $P(z)/P(-z)\le 1/9$ 이고, $R(z)\ge(1-1/9)/(1+1/9)=4/5$ 다. 음수 쪽은 $R$ 이 홀함수라는 데서 나온다.

분자와 분모의 차수가 $2m$ 이므로, 크기가 $2^m$ 까지인 정수의 부호를 차수가 $m$ 에 비례하는 유리함수로 상수 오차 안에서 근사한다.

## 증명

$f_j$ 를 $2f_j-1$ 로 바꾸면 부호가 그대로이고 값이 $0$ 이 아니므로 $1\le\vert f_j\vert\le 2^m$ 이라 해도 된다. $m$ 은 입력 길이의 다항식이다. $N_j=P(-f_j)-P(f_j)$, $D_j=P(-f_j)+P(f_j)$ 로 두면 $D_j\gt 0$ 이다.

부호 근사에서 $R(f_1)+R(f_2)-1$ 은 두 수가 모두 양수이면 $3/5$ 이상이고, 하나라도 음수이면 $-4/5$ 이하다. 이 값에 양수 $D_1D_2$ 를 곱한 다음 함수는 같은 부호를 갖는다.

$$
g=N_1D_2+N_2D_1-D_1D_2
$$

GapP 는 덧셈, 뺄셈, 다항식 개 인수의 곱에 닫혀 있다. $P(\pm f_j)$ 는 GapP 함수 $\pm f_j-2^i$ 의 $2m$ 개 곱이므로 GapP 함수이고, $g$ 도 GapP 함수다. $x\in L_1\cap L_2\iff g(x)\gt 0$ 이므로 $L_1\cap L_2\in\mathrm{PP}$ 다.

## 진리표 환원

교집합의 닫힘을 상수 번 되풀이하면 상수 개의 PP 언어의 논리곱이 PP 에 속한다. L. Fortnow 와 N. Reingold 는 유리함수 근사를 더 써서, PP 질문을 다항식 개 한꺼번에 묻고 그 답으로 판정하는 진리표 환원(truth-table reduction)에도 PP 가 닫혀 있음을 보였다[^2].

# 활용

- [후선택 양자 계산](postselected-quantum-computation.md). S. Aaronson 은 $\mathrm{PostBQP}=\mathrm{PP}$ 를 보이고, 후선택 회로 둘을 나란히 돌리는 것으로 교집합 닫힘의 다른 증명을 주었다[^3].

[^1]: R. Beigel, N. Reingold, D. Spielman, "PP is closed under intersection", Journal of Computer and System Sciences 50 (1995), 191–202.
[^2]: L. Fortnow, N. Reingold, "PP is closed under truth-table reductions", Information and Computation 124 (1996), 1–6.
[^3]: S. Aaronson, "Quantum computing, postselection, and probabilistic polynomial-time", Proceedings of the Royal Society A 461 (2005), 3473–3482.

# 연관 문서

## 선수지식

- [PP](probabilistic-polynomial-time.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation
