# Morera 정리

# 개요

**Morera 정리(Morera's theorem)** 는 연속인 복소함수를 모든 삼각형의 둘레를 따라 적분한 값이 $0$ 이면 그 함수가 정칙이라는 정리다. 함수 $F(z)=\int_0^1 e^{-zt^2}\thinspace dt$ 는 적분을 닫힌 꼴로 계산할 수 없어서 차분몫의 극한을 직접 구하기 어렵다. 이 정리를 쓰면 미분 대신 삼각형 둘레의 적분을 보면 되고, 적분 순서를 바꾸는 것만으로 $F$ 가 정칙임이 나온다.

# 직관

$F(z)=\int_0^1 e^{-zt^2}\thinspace dt$ 가 [정칙함수](holomorphic-functions.md)인지 묻는다. 정의대로라면 다음 차분몫의 극한을 구해야 한다.

$$
\frac{F(z+h)-F(z)}{h}=\int_0^1\frac{e^{-(z+h)t^2}-e^{-zt^2}}{h}\thinspace dt
$$

극한과 적분의 순서를 바꾸려면 $h$ 와 $t$ 에 함께 걸린 피적분함수를 따로 추정해야 한다.

정칙함수를 삼각형 둘레를 따라 적분하면 $0$ 이 나온다. $F$ 의 삼각형 둘레 적분은 적분 두 개를 겹친 것이므로 순서를 바꿀 수 있다.

$$
\oint_{\partial T}F(z)\thinspace dz=\int_0^1\left(\oint_{\partial T}e^{-zt^2}\thinspace dz\right)dt=\int_0^1 0\thinspace dt=0
$$

$t$ 를 고정하면 $e^{-zt^2}$ 은 $z$ 의 정칙함수이므로 안쪽 적분이 $0$ 이다. 피적분함수가 삼각형 둘레와 구간 $\lbrack 0,1\rbrack$ 의 곱 위에서 연속이므로 순서를 바꿀 수 있다.

남은 물음은 삼각형 둘레 적분이 전부 $0$ 인 연속함수가 정칙인가이다. Morera 정리가 그렇다고 답하므로 $F$ 는 복소평면 전체에서 정칙이다.

# 정의

## 삼각형 둘레 적분

꼭짓점이 $a,b,c$ 인 닫힌 삼각형 $T$ 는 세 변과 그 안쪽을 합한 집합이다. $f$ 의 **삼각형 둘레 적분(integral over the boundary of a triangle)** 은 세 변을 차례로 따라가는 경로 적분의 합이다.

$$
\oint_{\partial T}f(z)\thinspace dz=\int_{\lbrack a,b\rbrack}f(z)\thinspace dz+\int_{\lbrack b,c\rbrack}f(z)\thinspace dz+\int_{\lbrack c,a\rbrack}f(z)\thinspace dz
$$

선분 $\lbrack a,b\rbrack$ 위의 적분은 경로 $\gamma(s)=a+s(b-a)$, $0\le s\le 1$ 를 따라 정의된 경로 적분이다.

꼭짓점이 $0,1,i$ 인 삼각형에서 $f(z)=\bar z$ 를 적분하면 세 변에서 차례로 $1/2$, $i$, $-1/2$ 이 나와 합이 $i$ 다. 같은 삼각형에서 $z^2$ 의 둘레 적분은 $0$ 이다.

## Morera 정리

$U$ 를 복소평면의 열린집합, $f:U\to\mathbb C$ 를 [연속함수](continuity.md)로 둔다. $U$ 에 포함되는 모든 닫힌 삼각형 $T$ 에서 다음이 성립하면 $f$ 는 $U$ 에서 정칙이다[^1].

$$
\oint_{\partial T}f(z)\thinspace dz=0
$$

직관 절의 $F$ 는 $U=\mathbb C$ 에서 이 조건을 만족한다. $\bar z$ 는 연속이지만 위 삼각형에서 둘레 적분이 $i$ 이므로 조건을 만족하지 않는다.

# 성질

## 증명의 요지

정칙성은 각 점의 근방에서 정해지므로 $U$ 에 포함되는 열린 원판 $D$ 하나에서 보이면 된다. $D$ 의 중심 $z_0$ 에서 출발하는 선분 적분으로 $F(z)=\int_{\lbrack z_0,z\rbrack}f(w)\thinspace dw$ 를 정의한다. $z$ 와 $z+h$ 가 $D$ 에 있으면 꼭짓점이 $z_0$, $z$, $z+h$ 인 삼각형이 $D$ 에 포함되므로 가정에서 다음이 나온다.

$$
F(z+h)-F(z)=\int_{\lbrack z,z+h\rbrack}f(w)\thinspace dw
$$

상수 $f(z)$ 를 같은 선분에서 적분하면 $hf(z)$ 이므로 다음 부등식이 성립한다.

$$
\left\lvert\frac{F(z+h)-F(z)}{h}-f(z)\right\rvert\le\max_{w\in\lbrack z,z+h\rbrack}\lvert f(w)-f(z)\rvert
$$

$f$ 가 연속이므로 $h\to 0$ 에서 우변이 $0$ 으로 가고 $F'=f$ 다. $F$ 는 $D$ 에서 정칙이고, 정칙함수는 Cauchy 적분 공식(Cauchy integral formula)으로 무한 번 미분가능하므로 $f=F'$ 도 정칙이다.

## 정칙성의 적분 판정

열린집합 $U$ 에서 연속인 $f$ 에 대해 다음 둘은 동치다.

1. $f$ 가 $U$ 에서 정칙이다.
2. $U$ 에 포함되는 모든 닫힌 삼각형에서 $f$ 의 둘레 적분이 $0$ 이다.

1 에서 2 는 Cauchy–Goursat 정리(Cauchy–Goursat theorem)를 삼각형에 쓴 것이고, 2 에서 1 이 Morera 정리다. 정칙성을 미분 없이 적분만으로 판정할 수 있으므로, 극한이나 적분으로 정의된 함수에서 적분과 극한의 순서만 바꾸면 정칙성이 나온다.

## 연속성 가정

연속성을 빼면 결론이 성립하지 않는다. $f(0)=1$ 이고 나머지 점에서 $f(z)=0$ 인 함수를 본다. 경로 위의 한 점에서 값을 바꿔도 [Riemann 적분](riemann-integral.md)은 바뀌지 않으므로 이 함수의 삼각형 둘레 적분은 모두 $0$ 이다. 그러나 이 함수는 원점에서 연속이 아니므로 정칙이 아니다.

# 활용

## Weierstrass 수렴 정리

함수열 $f_n$ 이 $U$ 의 모든 콤팩트 부분집합 위에서 $f$ 로 [균등수렴](uniform-convergence.md)하는 것을 **국소 균등수렴(locally uniform convergence)** 이라 한다. **Weierstrass 수렴 정리(Weierstrass convergence theorem)** 는 정칙함수열의 국소 균등수렴 극한이 정칙이라는 정리다[^1].

증명은 Morera 정리 하나로 끝난다. 균등수렴 극한이므로 $f$ 는 연속이다. 닫힌 삼각형 $T$ 는 [콤팩트](compactness.md)이므로 그 둘레에서 $f_n\to f$ 가 균등수렴하고, 적분과 극한을 바꾸면 다음이 나온다.

$$
\oint_{\partial T}f(z)\thinspace dz=\lim_{n\to\infty}\oint_{\partial T}f_n(z)\thinspace dz=0
$$

도함수열 $f_n'$ 도 $f'$ 로 국소 균등수렴한다. Cauchy 적분 공식이 도함수를 원 둘레의 적분으로 쓰므로 그 적분에 극한을 넣으면 된다.

- [Riemann zeta 함수](riemann-zeta.md) $\zeta(z)=\sum_{n\ge 1}n^{-z}$ 는 $\mathrm{Re}\thinspace z\gt 1$ 에서 정칙이다. 부분합은 정칙이고, $\mathrm{Re}\thinspace z\ge\sigma\gt 1$ 에서 $\lvert n^{-z}\rvert\le n^{-\sigma}$ 이므로 Weierstrass M 판정법으로 균등수렴한다.
- [Hurwitz 정리](hurwitz-theorem.md)는 극한 $f$ 가 정칙이고 $f_n'\to f'$ 라는 이 정리의 결론 위에서 영점의 개수를 극한으로 옮긴다. [Montel 정리](montel-theorem.md)도 뽑은 부분열의 극한이 정칙이라는 데 이 정리를 쓴다.

## 매개변수 적분

직관 절의 논법은 일반적으로 성립한다. $\phi(z,t)$ 가 $U\times\lbrack a,b\rbrack$ 에서 연속이고 $t$ 마다 $z$ 의 정칙함수이면 다음 함수는 $U$ 에서 정칙이다[^1].

$$
G(z)=\int_a^b\phi(z,t)\thinspace dt
$$

삼각형 둘레 적분과 $t$ 에 대한 적분의 순서를 바꾸면 안쪽 적분이 $0$ 이 되어 Morera 정리의 조건이 성립한다. 적분 구간이 무한이면 유한 구간의 적분으로 근사하고 Weierstrass 수렴 정리를 쓴다. [감마 함수](gamma-function.md) $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\thinspace dt$ 가 $\mathrm{Re}\thinspace z\gt 0$ 에서 정칙이라는 것을 $\int_{1/n}^{n}$ 의 극한으로 이렇게 보인다.

## Schwarz 반사 원리

$U$ 가 실축에 대해 대칭인 열린집합이고 $U^+$ 가 $U$ 의 상반평면 부분이라 하자. $f$ 가 $U^+$ 에서 정칙이고, $U^+$ 와 실축 부분 $U\cap\mathbb R$ 의 합집합에서 연속이며, $U\cap\mathbb R$ 에서 실숫값을 가지면 다음 $g$ 는 $U$ 에서 정칙이다. 이것이 **Schwarz 반사 원리(Schwarz reflection principle)** 다[^1].

$$
g(z)=\begin{cases}f(z)&\mathrm{Im}\thinspace z\ge 0\cr\overline{f(\bar z)}&\mathrm{Im}\thinspace z\lt 0\end{cases}
$$

$f$ 가 실축에서 실숫값이므로 두 식이 실축에서 맞물려 $g$ 는 연속이다. 상반평면이나 하반평면 안의 삼각형에서는 $g$ 가 정칙이므로 둘레 적분이 $0$ 이다. 실축에 닿는 삼각형은 실축으로 잘라 조각마다 실축에서 조금 떨어진 삼각형으로 근사하고, 연속성으로 극한을 취하면 둘레 적분이 $0$ 이다. Morera 정리로 $g$ 는 정칙이다.

[^1]: E. M. Stein, R. Shakarchi, Complex Analysis, Princeton University Press, 2003, 2장 5절.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [균등수렴](uniform-convergence.md)

## 더 알아보기

- [Hurwitz 정리](hurwitz-theorem.md)

#complex_analysis #analysis #theorem
