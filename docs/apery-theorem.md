# Apéry 정리

# 개요

**Apéry 정리(Apéry's theorem)** 는 세제곱의 역수를 모두 더한 수 $\zeta(3)$ 이 분수가 아니라는 정리다. 이 수는 다음과 같다.

$$
\zeta(3)=1+\frac18+\frac1{27}+\frac1{64}+\cdots=1.2020569\cdots
$$

소수점 아래를 아무리 길게 계산해도 그 수가 분수인지는 정해지지 않는다. Apéry 는 분모가 비교적 느리게 커지면서 $\zeta(3)$ 에 아주 빠르게 다가가는 분수 $6/5$, $351/292$, $62531/52020$, $\dots$ 을 만들고, $\zeta(3)$ 이 분수라면 이렇게 가까운 근사가 있을 수 없다는 것으로 답했다.

# 직관

$\zeta(3)$ 을 분수 $p/q$ 로 놓고 모순을 찾는다. 처음 세 항의 합은 $S_3=1+1/8+1/27=251/216$ 이고, 분모 $216$ 은 $1,2,3$ 의 최소공배수 $6$ 의 세제곱이다. 그러면 $216q(\zeta(3)-S_3)=216p-251q$ 가 양의 정수다. 이 정수가 $1$ 보다 작으면 모순인데, $\zeta(3)-S_3$ 이 약 $0.040$ 이므로 값은 $8.64q$ 이고 모순이 생기지 않는다.

항을 더 더해도 같다. 열 항까지 더하면 $\zeta(3)-S_{10}$ 은 약 $0.0045$ 로 줄지만, 분모가 $1,\dots,10$ 의 최소공배수 $2520$ 의 세제곱이 되어 같은 정수가 약 $7.2\times 10^7\thinspace q$ 로 커진다. 남은 합은 $1/(2n^2)$ 꼴로 천천히 줄고 분모는 지수적으로 커지므로, 부분합으로는 어느 $n$ 에서도 $1$ 보다 작은 양의 정수가 나오지 않는다.

필요한 것은 분모가 커지는 것보다 오차가 더 빨리 줄어드는 분수열이다. Apéry 가 만든 분수열 $a_n/b_n$ 은 다음과 같다.

| n | bₙ | aₙ | ζ(3) − aₙ/bₙ |
| --- | --- | --- | --- |
| 1 | $5$ | $6$ | $2.1\times 10^{-3}$ |
| 2 | $73$ | $351/4$ | $2.1\times 10^{-6}$ |
| 3 | $1445$ | $62531/36$ | $2.0\times 10^{-9}$ |
| 4 | $33001$ | $39669.08\cdots$ | $1.8\times 10^{-12}$ |

$n$ 이 하나 늘 때 오차는 약 $1/1000$ 배가 되고 $b_n$ 은 약 $30$ 배가 된다. $a_n$ 의 분모까지 없애려면 $a_n$ 과 $b_n$ 에 $2d_n^3$ 을 곱하는데, 여기서 $d_n$ 은 $1,\dots,n$ 의 최소공배수다. 이렇게 얻은 정수 $q_n=2d_n^3b_n$ 과 $p_n=2d_n^3a_n$ 에서 $q_n\zeta(3)-p_n$ 을 계산하면 $n=1,2,3,4$ 에서 $0.0206$, $0.0025$, $0.0012$, $0.0002$ 로 줄어든다.

$\zeta(3)=p/q$ 이면 $q(q_n\zeta(3)-p_n)=q_np-p_nq$ 는 정수다. 이 정수는 $0$ 이 아니고 $n$ 이 커지면 $0$ 으로 가므로, 어느 $n$ 에서 $0$ 과 $1$ 사이의 정수가 되어 모순이다.

# 정의

음이 아닌 정수 $n$ 에 대해 다음 수를 **Apéry 수(Apéry number)** 라 한다.

$$
b_n=\sum_{k=0}^{n}\binom nk^2\binom{n+k}k^2
$$

$b_0=1$, $b_1=1+4=5$, $b_2=1+36+36=73$, $b_3=1445$ 이다. 직관 절의 표에서 분모로 쓰인 수열이다.

분자 쪽 수열은 같은 계수에 $\zeta(3)$ 의 부분합을 보정한 값 $c_{n,k}$ 를 곱해 더한 것이다.

$$
a_n=\sum_{k=0}^{n}\binom nk^2\binom{n+k}k^2c_{n,k}
$$

$$
c_{n,k}=\sum_{m=1}^{n}\frac1{m^3}+\sum_{m=1}^{k}\frac{(-1)^{m-1}}{2m^3\binom nm\binom{n+m}m}
$$

$n=1$ 이면 $c_{1,0}=1$, $c_{1,1}=1+1/4=5/4$ 이므로 $a_1=1\cdot 1+4\cdot\tfrac54=6$ 이다.

두 수열은 같은 점화식을 만족한다.

$$
n^3u_n-(34n^3-51n^2+27n-5)\thinspace u_{n-1}+(n-1)^3u_{n-2}=0\qquad(n\ge 2)
$$

초기값은 $b_0=1$, $b_1=5$ 와 $a_0=0$, $a_1=6$ 이다. $n=2$ 에서 괄호 안의 계수는 $117$ 이므로 $8b_2=117\cdot 5-1$ 에서 $b_2=73$, $8a_2=117\cdot 6$ 에서 $a_2=351/4$ 이 나온다.

Apéry 정리는 $\zeta(3)$ 이 [무리수](irrational-numbers.md)라는 진술이다.[^1] $\zeta(3)$ 은 [Riemann zeta 함수](riemann-zeta.md)의 $s=3$ 에서의 값이다.

# 성질

## 무리성 판정법

실수 $x$ 와 정수열 $p_n$, $q_n$ 이 $q_nx-p_n\ne 0$ 과 $q_nx-p_n\to 0$ 을 만족하면 $x$ 는 무리수다.

증명의 요지. $x=p/q$ 이면 $q(q_nx-p_n)=q_np-p_nq$ 는 $0$ 이 아닌 정수이므로 $\vert q_nx-p_n\vert\ge 1/q$ 이다. 이것은 $q_nx-p_n\to 0$ 과 어긋난다.

## 연속한 근사의 차

연속한 두 근사의 차는 다음과 같다.

$$
\frac{a_n}{b_n}-\frac{a_{n-1}}{b_{n-1}}=\frac{6}{n^3\thinspace b_nb_{n-1}}
$$

증명의 요지. $w_n=a_nb_{n-1}-a_{n-1}b_n$ 으로 둔다. $a$ 의 점화식에 $b_{n-1}$ 을, $b$ 의 점화식에 $a_{n-1}$ 을 곱해 빼면 가운데 항이 지워져 $n^3w_n=(n-1)^3w_{n-1}$ 이 된다. 따라서 $n^3w_n=w_1=6$ 이다. $n=2$ 이면 $351/292-6/5=3/1460=6/(8\cdot 73\cdot 5)$ 이다.

$a_n/b_n\to\zeta(3)$ 이므로 다음 급수가 나온다.[^2]

$$
\zeta(3)=\sum_{n=1}^{\infty}\frac{6}{n^3\thinspace b_{n-1}b_n}
$$

오차 $\zeta(3)-a_n/b_n$ 은 이 급수의 $n$ 번째 항 뒤의 합이고 양수다.

## 증가율

점화식을 $n^3$ 으로 나누고 $n\to\infty$ 로 보내면 특성다항식 $x^2-34x+1$ 이 나온다. 그 근은 $17\pm 12\sqrt 2$ 이고, 큰 근을 $\alpha$ 로 둔다.

$$
\alpha=17+12\sqrt 2=(1+\sqrt 2)^4\approx 33.97
$$

$b_n$ 은 $\alpha^n$ 의 규모로 커지고, 위 급수의 꼬리에서 $b_n\zeta(3)-a_n$ 은 $\alpha^{-n}$ 의 규모로 줄어든다. 직관 절의 표에서 $b_n$ 이 약 $30$ 배씩, 오차 $\zeta(3)-a_n/b_n$ 이 약 $\alpha^{-2}\approx 1/1154$ 배씩 변한 것이 이 비율이다.

## 분모의 정수성

$2d_n^3a_n$ 은 정수다. $c_{n,k}$ 의 첫째 합은 분모가 $d_n^3$ 을 나누고, 둘째 합의 각 항에 이항계수 $\binom nk^2\binom{n+k}k^2$ 을 곱한 값은 분모가 $2d_n^3$ 을 나눈다는 것을 Apéry 가 보였다.[^2] $n=3$ 이면 $2\cdot 216\cdot 62531/36=750372$ 다.

## ζ(3) 의 무리성

$p_n=2d_n^3a_n$, $q_n=2d_n^3b_n$ 으로 두면 둘 다 정수이고 $q_n\zeta(3)-p_n=2d_n^3(b_n\zeta(3)-a_n)$ 은 양수다.

[소수 정리](prime-number-theorem.md)는 $\ln d_n=\psi(n)$ 이 $n$ 에 점근한다는 것과 같으므로 $d_n^3$ 은 $e^{3n(1+o(1))}$ 의 규모다. 따라서 $q_n\zeta(3)-p_n$ 은 $(e^3/\alpha)^{n(1+o(1))}$ 의 규모이고, $e^3\approx 20.09$ 가 $\alpha\approx 33.97$ 보다 작으므로 $0$ 으로 간다. 무리성 판정법에서 $\zeta(3)$ 은 무리수다.

## Beukers 적분

$b_n\zeta(3)-a_n$ 은 다음 적분으로 쓰인다.[^3]

$$
\begin{aligned}
&\int_0^1\int_0^1\int_0^1\frac{\big(x(1-x)\thinspace y(1-y)\thinspace w(1-w)\big)^n}{\big(1-(1-xy)w\big)^{n+1}}\thinspace dx\thinspace dy\thinspace dw \cr
&\qquad=2\big(b_n\zeta(3)-a_n\big)
\end{aligned}
$$

$n=0$ 이면 $w$ 로 먼저 적분해 $\int_0^1\int_0^1\frac{-\ln(xy)}{1-xy}\thinspace dx\thinspace dy$ 가 되고, 피적분함수를 등비급수로 펼쳐 항별로 적분하면 $2\zeta(3)$ 이 나온다.

정육면체 위에서 다음 최댓값이 성립한다.

$$
\max\frac{x(1-x)\thinspace y(1-y)\thinspace w(1-w)}{1-(1-xy)w}=(\sqrt 2-1)^4=\frac1\alpha
$$

그러므로 적분은 양수이고 $2\zeta(3)\thinspace\alpha^{-n}$ 이하다. 이 상계가 증가율 절의 $\alpha^{-n}$ 을 점화식 없이 준다.

## 근사 지수

같은 분수열에서 $\zeta(3)$ 의 [근사 지수](diophantine-approximation.md)의 상한이 나온다.

$$
\mu(\zeta(3))\le 1+\frac{\ln\alpha+3}{\ln\alpha-3}\approx 13.42
$$

분모 $q_n$ 이 $(e^3\alpha)^n$ 규모로 커지고 $q_n\zeta(3)-p_n$ 이 $(e^3/\alpha)^n$ 규모로 줄어든다는 두 지수를 비교해 얻는다.[^2] Rhin 과 Viola 는 다른 적분을 써서 상한을 $5.513891$ 로 낮췄다.[^4]

## ζ(2) 의 경우

같은 방법이 $\zeta(2)=\pi^2/6$ 의 무리성도 준다. 분모 수열은 다음과 같다.

$$
\beta_n=\sum_{k=0}^{n}\binom nk^2\binom{n+k}k
$$

이 수열은 다음 점화식을 만족하고 $1$, $3$, $19$, $147$ 로 이어진다.

$$
n^2u_n-(11n^2-11n+3)\thinspace u_{n-1}-(n-1)^2u_{n-2}=0
$$

특성근은 $(11+5\sqrt 5)/2\approx 11.09$ 이고, 이 값이 $d_n^2$ 의 증가율 $e^2\approx 7.39$ 보다 크다.[^1]

## 홀수 zeta 값

$\zeta(5)$, $\zeta(7)$, $\dots$ 각각에 대해 Apéry 의 방법이 그대로 옮겨지지는 않는다. Ball 과 Rivoal 은 $1,\zeta(3),\zeta(5),\dots,\zeta(a)$ 가 유리수 위에서 생성하는 벡터 공간의 차원이 $a\to\infty$ 일 때 적어도 $\ln a$ 에 비례해 커진다는 것을 보였고, 따라서 홀수 zeta 값 가운데 무리수가 무한히 많다.[^5] Zudilin 은 $\zeta(5)$, $\zeta(7)$, $\zeta(9)$, $\zeta(11)$ 가운데 적어도 하나가 무리수라는 것을 보였다.[^6]

# 활용

- [Diophantine 근사](diophantine-approximation.md). 무리성 판정법은 근사 지수 정의에 쓰인 부등식 $\vert x-p/q\vert\lt q^{-\mu}$ 의 특별한 경우다. 근사 분수열의 분모와 오차의 증가율을 비교하는 방법이 $\pi$, $\ln 2$, $\zeta(3)$ 의 근사 지수 상한을 주는 표준 절차다.
- [다중 zeta 값](multiple-zeta-values.md). 무게 $3$ 의 다중 zeta 값은 $\zeta(3)$ 과 $\zeta(2,1)$ 이고 두 값이 같으므로, Apéry 정리는 무게 $3$ 의 다중 zeta 값이 모두 무리수라는 진술이기도 하다.
- [모듈러 형식](modular-forms.md). Beukers 는 Apéry 수의 생성함수를 합동 부분군 Γ₁(6) 에 대한 모듈러 형식으로 적어 점화식과 합동식을 다시 유도했다.[^7]
- 수치 계산. Apéry 의 증명에 쓰인 다음 급수는 항이 하나 늘 때 오차가 약 $1/4$ 배가 되어 원래 급수보다 빨리 수렴한다.

$$
\zeta(3)=\frac52\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^3\binom{2n}n}
$$

[^1]: R. Apéry, "Irrationalité de ζ(2) et ζ(3)", *Astérisque* 61, 1979, pp. 11–13.
[^2]: A. van der Poorten, "A proof that Euler missed... Apéry's proof of the irrationality of ζ(3)", *The Mathematical Intelligencer* 1, 1979, pp. 195–203.
[^3]: F. Beukers, "A note on the irrationality of ζ(2) and ζ(3)", *Bulletin of the London Mathematical Society* 11, 1979, pp. 268–272.
[^4]: G. Rhin, C. Viola, "The group structure for ζ(3)", *Acta Arithmetica* 97, 2001, pp. 269–293.
[^5]: K. Ball, T. Rivoal, "Irrationalité d'une infinité de valeurs de la fonction zêta aux entiers impairs", *Inventiones Mathematicae* 146, 2001, pp. 193–207.
[^6]: W. Zudilin, "One of the numbers ζ(5), ζ(7), ζ(9), ζ(11) is irrational", *Russian Mathematical Surveys* 56, 2001, pp. 774–776.
[^7]: F. Beukers, "Irrationality proofs using modular forms", *Astérisque* 147–148, 1987, pp. 271–283.

# 연관 문서

## 선수지식

- [무리수](irrational-numbers.md)
- [Riemann zeta 함수](riemann-zeta.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
