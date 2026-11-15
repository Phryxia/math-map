# Fatou 보조정리

# 개요

**Fatou 보조정리(Fatou's lemma)** 는 음이 아닌 함수열에서 극한 함수의 적분이 적분값들의 극한보다 클 수 없다는 정리다. $(0,1\rbrack$ 위에서 구간 $(0,1/n)$ 에서만 값이 $n$ 이고 나머지에서 $0$ 인 함수 $f_n$ 은 점마다 $0$ 으로 가지만 적분은 늘 $1$ 이어서, 극한과 적분의 순서를 바꾸면 값이 달라진다. Fatou 보조정리는 이런 열에서도 극한 함수의 적분 쪽이 작다는 부등식 하나는 언제나 남는다는 것을 보인다.

# 직관

$(0,1\rbrack$ 에서 $f_n=n\thinspace\mathbf 1_{(0,1/n)}$ 을 본다. 각 점 $x$ 에서 $n$ 이 $1/x$ 를 넘으면 $f_n(x)=0$ 이므로 점마다 $0$ 으로 간다. 그런데 높이 $n$, 폭 $1/n$ 인 직사각형의 넓이는 늘 $1$ 이어서 $\int f_n=1$ 이다. 극한 함수의 적분은 $0$ 이고 적분값의 극한은 $1$ 이다.

넓이 $1$ 은 매 단계 $0$ 쪽으로 좁혀 들어가다가 극한에서 사라진다. 점마다 값이 결국 $0$ 이 되므로 극한 함수는 그 넓이를 하나도 갖지 못한다. 함수가 음이 아니면 극한 함수가 가진 넓이는 뒤쪽의 $f_n$ 들이 모두 가지고 있으므로, 극한 함수의 넓이가 적분값들보다 커지는 일은 생기지 않는다.

이 생각을 계산으로 옮긴다. $g_n(x)=\inf_{k\ge n}f_k(x)$ 로 두면 $g_n$ 은 $n$ 이 커질수록 커지고 $g_n\le f_n$ 이다. 증가하는 음이 아닌 열이므로 [단조 수렴 정리](monotone-convergence.md)로 $\int\lim g_n=\lim\int g_n$ 이고, 오른쪽은 $\int f_n$ 들의 극한을 넘지 못한다. 이 예에서는 모든 $x$ 에서 어느 $k$ 부터 $f_k(x)=0$ 이므로 $g_n=0$ 이고, 부등식은 $0\le 1$ 이다.

# 정의

## 진술

[측도](measure.md) 공간 $(X,\Sigma,\mu)$ 에서 $f_n:X\to\lbrack 0,\infty\rbrack$ 가 [가측함수](measurable-functions.md)열이면 다음이 성립한다. 양변에 $\infty$ 도 허용한다.

$$
\int_X\liminf_{n\to\infty}f_n\thinspace d\mu\le\liminf_{n\to\infty}\int_X f_n\thinspace d\mu
$$

$\liminf$ 는 [상극한과 하극한](limits.md)의 하극한이다. 왼쪽은 점마다 하극한을 취한 함수의 적분이고, 오른쪽은 적분값 수열의 하극한이다. 하극한은 수렴하지 않는 열에도 정의되므로 $f_n$ 이 수렴한다는 가정이 필요 없다.

직관 절의 $f_n=n\thinspace\mathbf 1_{(0,1/n)}$ 에서 $\liminf f_n=0$ 이고 $\liminf\int f_n=1$ 이므로 진술은 $0\le 1$ 이다.

# 성질

## 증명

$g_n=\inf_{k\ge n}f_k$ 로 둔다. $g_n$ 은 가측이고 $0\le g_1\le g_2\le\cdots$ 이며, 하극한의 정의로 $\lim g_n=\liminf f_n$ 이다. 단조 수렴 정리에서 다음이 나온다.

$$
\int_X\liminf_n f_n\thinspace d\mu=\lim_{n\to\infty}\int_X g_n\thinspace d\mu
$$

$k\ge n$ 이면 $g_n\le f_k$ 이므로 $\int g_n\le\inf_{k\ge n}\int f_k$ 다. $n\to\infty$ 로 보내면 오른쪽이 $\liminf\int f_n$ 이 되어 부등식이 나온다.[^1]

## 등호가 성립하지 않는 경우

직관 절의 열은 넓이가 한 점 쪽으로 몰려 사라지는 경우다. 넓이가 무한히 먼 곳으로 달아나도 같다. $\mathbb R$ 위의 $f_n=\mathbf 1_{\lbrack n,n+1\rbrack}$ 은 점마다 $0$ 으로 가고 적분은 늘 $1$ 이다.

열이 수렴하지 않으면 하극한이 넓이를 잃는다. $\lbrack 0,1\rbrack$ 에서 $f_n$ 이 $n$ 이 홀수일 때 $\mathbf 1_{\lbrack 0,1/2\rbrack}$, 짝수일 때 $\mathbf 1_{(1/2,1\rbrack}$ 이면 모든 점에서 $\liminf f_n=0$ 이고 $\int f_n=1/2$ 이다.

## 음이 아니라는 가정

가정을 빼면 부등식이 깨진다. $(0,1\rbrack$ 에서 $f_n=-n\thinspace\mathbf 1_{(0,1/n)}$ 은 $\liminf f_n=0$ 이므로 왼쪽이 $0$ 이고, 오른쪽은 $-1$ 이다. 가정은 $f_n\ge -h$ 인 적분 가능한 $h$ 가 있다는 것으로 약하게 할 수 있다. $f_n+h\ge 0$ 에 적용한 뒤 양변에서 유한한 $\int h$ 를 뺀다.

## 역 Fatou 보조정리

적분 가능한 $h$ 가 있어 모든 $n$ 에서 $f_n\le h$ 이면 $h-f_n\ge 0$ 에 Fatou 보조정리를 적용해 다음을 얻는다. 이것을 **역 Fatou 보조정리(reverse Fatou lemma)** 라 한다.

$$
\limsup_{n\to\infty}\int_X f_n\thinspace d\mu\le\int_X\limsup_{n\to\infty}f_n\thinspace d\mu
$$

## 확률에서의 꼴

[확률변수](random-variables.md) $X_n\ge 0$ 에 대해 $\mathbb E\lbrack\liminf X_n\rbrack\le\liminf\mathbb E\lbrack X_n\rbrack$ 이다. 특히 $X_n\to X$ 가 거의 확실히 성립하고 $\sup_n\mathbb E\lbrack X_n\rbrack\lt\infty$ 이면 $X$ 의 기댓값도 유한하다.

# 활용

- [지배 수렴 정리](dominated-convergence.md)의 증명. 지배함수 $G$ 에 대해 $G+f_n\ge 0$ 과 $G-f_n\ge 0$ 에 이 정리를 적용하면 적분값의 하극한과 상극한이 둘 다 $\int f$ 로 조여진다.
- 극한의 적분 가능성. 열이 거의 모든 점에서 수렴하고 적분값이 유계이면 극한 함수가 적분 가능하다. [Martingale](martingales.md) 수렴 정리에서 극한의 적분 가능성, [균등적분가능성](uniform-integrability.md)의 Vitali 수렴 정리에서 극한 $f$ 의 적분 가능성을 이것으로 얻는다.
- 노름의 하반연속성. $f_n\to f$ 가 거의 모든 점에서 성립하면 $\lvert f_n\rvert^p$ 에 적용해 $\Vert f\Vert\_p\le\liminf\Vert f_n\Vert\_p$ 를 얻는다. [Lᵖ 공간](lp-spaces.md)의 완비성 증명에서 Cauchy 열의 극한이 $L^p$ 에 속함을 이것으로 보인다.
- 분포 수렴에서의 적률. [Skorokhod 표현 정리](skorokhod-representation.md)로 거의 확실한 수렴으로 옮긴 뒤 적용하면 $\mathbb E\lbrack X^2\rbrack\le\liminf\mathbb E\lbrack X_n^2\rbrack$ 가 나온다.

[^1]: Gerald B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed., Wiley, 1999, Lemma 2.18(Fatou's lemma)와 그 증명.

# 연관 문서

## 선수지식

- [단조 수렴 정리](monotone-convergence.md)

## 더 알아보기

- [지배 수렴 정리](dominated-convergence.md)

#measure_theory #analysis #probability #theorem
