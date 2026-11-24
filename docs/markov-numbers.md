# Markov 수

# 개요

**Markov 수(Markov number)** 는 방정식 $x^2+y^2+z^2=3xyz$ 의 양의 정수해에 나타나는 수 $1, 2, 5, 13, 29, 34, \dots$ 이다. 이 수들은 무리수를 분수로 근사할 때 오차가 얼마나 작아질 수 있는지를 묻다가 나온다. 황금비는 분모 $q$ 인 분수로 근사한 오차에 $q^2$ 을 곱한 값이 $1/\sqrt 5\approx 0.447$ 에 가까이 머물러 가장 근사하기 어렵고, 그다음 $\sqrt 2$ 는 $1/\sqrt 8\approx 0.354$ 에 머문다.

이 값들을 차례로 나열하면 각 값이 Markov 수 $m$ 하나로 $1/\sqrt{9-4/m^2}$ 처럼 정해지고, 근사하기 어려운 수의 순위가 Markov 수의 순서와 같아진다.

# 직관

황금비 $\varphi=(1+\sqrt 5)/2$ 에 분모 $q$ 를 곱하고 가장 가까운 정수까지의 거리를 잰다. $q=5$ 이면 $5\varphi=8.0902$ 이고 거리는 $0.0902$ 이다. 이 거리에 $q$ 를 곱한 값 $q\Vert q\varphi\Vert$ 가 분수 $p/q$ 의 오차에 $q^2$ 을 곱한 값과 같다. $q=5,8,13,21$ 에서 이 값은 $0.4508$, $0.4458$, $0.4477$, $0.4470$ 이고 $1/\sqrt 5=0.4472$ 로 다가간다.

$\sqrt 2$ 로 같은 계산을 하면 $q=5,12,29,70$ 에서 $0.3553$, $0.3532$, $0.3536$, $0.3535$ 이고 $1/\sqrt 8=0.3536$ 로 다가간다. 값이 작을수록 근사가 잘 되는 수이므로 $\sqrt 2$ 는 황금비보다 근사하기 쉽다.

모든 무리수에서 이 값이 무한히 많은 $q$ 에 대해 $1/\sqrt 5$ 보다 작아진다는 것이 Hurwitz 근사 정리(Hurwitz's approximation theorem)이고, 황금비가 이 상수를 더 줄일 수 없게 만든다. 황금비와 꼴이 같은 수를 빼면 상수가 $1/\sqrt 8$ 로 내려가고, 그 경계를 만드는 수가 $\sqrt 2$ 다. 이것까지 빼면 상수는 $5/\sqrt{221}\approx 0.3363$ 으로 내려간다.

$\sqrt 5$, $\sqrt 8$, $\sqrt{221}/5$ 는 $\sqrt{9-4/m^2}$ 에 $m=1,2,5$ 를 넣은 값이다. $1$, $2$, $5$ 는 $x^2+y^2+z^2=3xyz$ 의 해 $(1,1,1)$, $(1,1,2)$, $(1,2,5)$ 에서 가장 큰 수다.

# 정의

## Markov 방정식

다음 방정식을 **Markov 방정식(Markov equation)** 이라 한다.

$$
x^2+y^2+z^2=3xyz
$$

양의 정수해 $(x,y,z)$ 를 **Markov 세 쌍(Markov triple)** 이라 하고, Markov 세 쌍에 나타나는 수를 Markov 수라 한다. $(1,2,5)$ 는 $1+4+25=30=3\cdot 1\cdot 2\cdot 5$ 이므로 Markov 세 쌍이다.

## Lagrange 값

무리수 $\alpha$ 의 **Lagrange 값(Lagrange value)** 은 다음 값이다.

$$
L(\alpha)=\limsup_{q\to\infty}\frac{1}{q\Vert q\alpha\Vert}
$$

$\Vert x\Vert$ 는 $x$ 와 가장 가까운 정수의 거리다. 곧 $c\lt L(\alpha)$ 이면 $\vert\alpha-p/q\vert\lt 1/(cq^2)$ 인 분수가 무한히 많고, $c\gt L(\alpha)$ 이면 유한 개다. 직관 절의 계산이 $L(\varphi)=\sqrt 5$, $L(\sqrt 2)=\sqrt 8$ 이다.

유한한 Lagrange 값 전체의 집합을 **Lagrange 스펙트럼(Lagrange spectrum)** 이라 한다. $L(\alpha)$ 가 유한한 것은 $\alpha$ 가 [Diophantine 근사](diophantine-approximation.md)의 나쁘게 근사되는 수인 것과 동치다.

# 성질

## 연분수로 쓴 Lagrange 값

$\alpha=\lbrack a_0;a_1,a_2,\dots\rbrack$ 이면 다음이 성립한다.

$$
L(\alpha)=\limsup_{k\to\infty}\Big(\lbrack a_{k+1};a_{k+2},\dots\rbrack+\lbrack 0;a_k,a_{k-1},\dots,a_1\rbrack\Big)
$$

증명의 요지. [연분수](continued-fractions.md)의 수렴분 $p_k/q_k$ 에서 $q_k\vert q_k\alpha-p_k\vert$ 의 역수가 괄호 안의 두 연분수의 합이 되고, 수렴분이 아닌 분수는 $L$ 에 기여하지 않는다. 몫이 모두 $1$ 이면 괄호 안은 $\varphi+1/\varphi=\sqrt 5$ 로, 모두 $2$ 이면 $(1+\sqrt 2)+(\sqrt 2-1)=\sqrt 8$ 로 간다.

$L(\alpha)$ 는 연분수의 꼬리로만 정해지므로, 연분수가 어느 자리부터 같아지는 두 수는 Lagrange 값이 같다. 직관 절의 "꼴이 같은 수" 는 이 뜻이다.

## Markov 나무

$(a,b,c)$ 가 Markov 세 쌍이면 $(a,b,3ab-c)$ 도 Markov 세 쌍이다. $z$ 에 대한 이차방정식 $z^2-3ab\thinspace z+a^2+b^2=0$ 의 두 근의 합이 $3ab$ 이기 때문이다.

$(1,1,1)$ 에서 시작해 세 수 가운데 하나를 이렇게 바꾸는 일을 되풀이하면 다음 세 쌍이 차례로 나온다.

$$
\begin{aligned}
&(1,1,2)\to(1,2,5)\to(1,5,13),\quad(2,5,29) \cr
&(1,5,13)\to(1,13,34),\quad(5,13,194) \cr
&(2,5,29)\to(2,29,169),\quad(5,29,433)
\end{aligned}
$$

모든 Markov 세 쌍은 이 과정으로 $(1,1,1)$ 에서 얻어진다. 증명의 요지. 세 수가 다르고 $c$ 가 가장 크면 $c'=3ab-c=(a^2+b^2)/c$ 가 $c$ 보다 작으므로, 가장 큰 수를 바꾸면 합이 줄어든다. 합이 무한히 줄 수 없으므로 같은 수가 있는 세 쌍 $(1,1,1)$ 이나 $(1,1,2)$ 에 닿는다.

Markov 수를 작은 것부터 쓰면 1, 2, 5, 13, 29, 34, 89, 169, 194, 233, 433 으로 이어진다. $(1,F_{2n-1},F_{2n+1})$ 꼴의 세 쌍이 있어 홀수 번째 [Fibonacci 수](fibonacci-numbers.md)는 모두 Markov 수다.

## Markov 정리

Lagrange 스펙트럼에서 $3$ 보다 작은 부분은 다음 집합과 같다.[^1]

$$
\begin{aligned}
&\left\lbrace\sqrt{9-\frac{4}{m^2}}\thinspace\middle\vert\thinspace m\text{ 은 Markov 수}\right\rbrace \cr
&\qquad=\left\lbrace\sqrt 5,\thinspace\sqrt 8,\thinspace\frac{\sqrt{221}}{5},\thinspace\frac{\sqrt{1517}}{13},\thinspace\dots\right\rbrace
\end{aligned}
$$

이 값들은 $3$ 으로만 모인다. Markov 수 $m$ 에 대응하는 $\alpha$ 는 이차 무리수이고 연분수의 순환 마디가 정해져 있다. $m=1,2,5,13$ 의 마디는 $(1)$, $(2)$, $(2,2,1,1)$, $(2,2,1,1,1,1)$ 이다.

증명의 요지. $L(\alpha)\lt 3$ 이면 연분수의 몫이 결국 $1$ 과 $2$ 뿐이고, $1$ 과 $2$ 의 덩어리가 놓이는 방식이 강하게 제한된다. 허용되는 배열이 Markov 나무의 가지와 일대일로 대응하고, 각 배열의 Lagrange 값을 계산하면 $\sqrt{9-4/m^2}$ 이 나온다.[^2]

## Hall 반직선

Lagrange 스펙트럼은 어떤 수 이상의 실수를 전부 포함한다. Hall 이 1947 년에 이것을 보였고, 이 반직선을 **Hall 반직선(Hall's ray)** 이라 한다.[^3] Freiman 은 반직선이 시작하는 가장 작은 수가 $4.5278\cdots$ 임을 보였다.[^4] $3$ 과 이 수 사이에서는 스펙트럼이 틈이 있는 복잡한 집합이다.

## 유일성 추측

Frobenius 의 **유일성 추측(uniqueness conjecture)** 은 Markov 수 $m$ 마다 $m$ 을 가장 큰 수로 갖는 Markov 세 쌍이 순서를 무시하고 하나뿐이라는 추측이다. 이 추측이 맞으면 Markov 정리의 각 값 $\sqrt{9-4/m^2}$ 에 대응하는 연분수 마디가 하나로 정해진다.

# 활용

- [연분수](continued-fractions.md). Lagrange 값은 연분수 몫의 꼬리로 계산되고, Markov 정리는 몫이 $1$ 과 $2$ 뿐인 연분수의 분류다.
- [Diophantine 근사](diophantine-approximation.md). 나쁘게 근사되는 수 가운데 가장 나쁜 것들의 순위를 Markov 수가 정한다.
- [이차형식](quadratic-forms.md). 판별식 $D$ 인 실이차형식이 $0$ 이 아닌 정수점에서 갖는 절댓값의 하한을 $\sqrt D$ 로 나눈 값의 역수가 Markov 스펙트럼(Markov spectrum)을 이룬다. $3$ 보다 작은 부분은 Lagrange 스펙트럼과 같고, Markov 이차형식이 그 값을 준다.[^2]

[^1]: A. Markoff, "Sur les formes quadratiques binaires indéfinies", *Mathematische Annalen* 15, 1879, pp. 381–406; 17, 1880, pp. 379–399.
[^2]: T. W. Cusick, M. E. Flahive, *The Markoff and Lagrange Spectra*, American Mathematical Society, 1989, Chapters 1–2.
[^3]: M. Hall, "On the sum and product of continued fractions", *Annals of Mathematics* 48, 1947, pp. 966–993.
[^4]: G. A. Freiman, "Diophantine approximation and geometry of numbers (The Markoff spectrum)", Kalininskii Gosudarstvennyi Universitet, 1975.

# 연관 문서

## 선수지식

- [Diophantine 근사](diophantine-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
