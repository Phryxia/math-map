# L'Hôpital 법칙

# 개요

**L'Hôpital 법칙(L'Hôpital's rule)** 은 분자와 분모가 함께 $0$ 으로 가는 분수의 극한을, 분자와 분모를 각각 미분한 분수의 극한으로 구하는 방법이다. $x\to 0$ 일 때 $(1-\cos x)/x^2$ 에 $x=0$ 을 넣으면 $0/0$ 이 되어 값이 나오지 않는다. L'Hôpital 법칙은 이 분수를 $\sin x/(2x)$ 로, 다시 $\cos x/2$ 로 바꾸어 극한 $1/2$ 을 얻는다.

# 직관

$x$ 가 $0$ 에서 조금 움직이는 동안 분자 $f(x)=1-\cos x$ 와 분모 $g(x)=x^2$ 이 각각 얼마나 늘었는지 비교한다. 둘 다 $0$ 에서 출발하므로 $f(x)/g(x)$ 는 두 증가량의 비다.

[평균값 정리](mean-value-theorem.md)는 한 함수의 증가량을 어느 중간점의 변화율로 바꾼다. 두 함수를 함께 다루는 Cauchy 평균값 정리(Cauchy's mean value theorem)를 쓰면 $0$ 과 $x$ 사이의 어떤 $\xi$ 에서 다음이 성립한다.

$$
\frac{1-\cos x}{x^2}=\frac{\sin\xi}{2\xi}
$$

$x\to 0$ 이면 $\xi$ 도 $0$ 으로 가므로, 원래 극한은 $\sin\xi/(2\xi)$ 의 극한과 같다. 이것도 $0/0$ 이므로 같은 일을 한 번 더 하면 $0$ 과 $\xi$ 사이의 $\eta$ 에서 $\sin\xi/(2\xi)=\cos\eta/2$ 이고, $\eta\to 0$ 에서 $\cos\eta/2\to 1/2$ 이다.

# 정의

L'Hôpital 법칙은 다음 정리다. $a$ 를 포함하는 열린 구간에서 $a$ 를 뺀 곳에서 $f$ 와 $g$ 가 미분 가능하고 $g'(x)\ne 0$ 이라 한다. $\lim_{x\to a}f(x)=\lim_{x\to a}g(x)=0$ 이고 $\lim_{x\to a}f'(x)/g'(x)=L$ 이면 다음이 성립한다.

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=L
$$

$L$ 은 실수이거나 $\pm\infty$ 다. 한쪽 극한 $x\to a^+$, 그리고 $a=\pm\infty$ 에서도 같은 결론이 성립한다[^1].

직관 절의 $f(x)=1-\cos x$, $g(x)=x^2$ 에서 $f'(x)/g'(x)=\sin x/(2x)$ 다. 이 분수에 법칙을 한 번 더 쓰면 $\cos x/2\to 1/2$ 이므로 $L=1/2$ 이다.

# 성질

## 증명

$f(a)=g(a)=0$ 으로 두면 $f$ 와 $g$ 가 $a$ 에서 연속이 된다. $a\lt x$ 인 $x$ 에서 $\lbrack a,x\rbrack$ 에 Cauchy 평균값 정리를 쓰면 다음을 만족하는 $\xi\in(a,x)$ 가 존재한다.

$$
\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(\xi)}{g'(\xi)}
$$

$g'\ne 0$ 이므로 Rolle 정리로 $g(x)\ne g(a)$ 이고 분모가 $0$ 이 아니다. $x\to a^+$ 이면 $\xi\to a^+$ 이므로 우변이 $L$ 로 간다. $x\lt a$ 쪽도 같다.

## 무한대 꼴

$\lim\_{x\to a}\vert g(x)\vert=\infty$ 이면 $f$ 의 극한에 조건이 없어도 같은 결론이 성립한다. $x\to\infty$ 에서 다음이 그 예다.

$$
\lim_{x\to\infty}\frac{\log x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=0
$$

$x^k/e^x$ 에 법칙을 $k$ 번 쓰면 $k!/e^x\to 0$ 이다. 그래서 $x\to\infty$ 에서 $\log x$ 는 어떤 $x^\varepsilon$ 보다도 느리게, $x^k$ 는 $e^x$ 보다 느리게 자란다.

## 다른 꼴의 환원

$0\cdot\infty$ 꼴은 분수로 바꾼다. $x\to 0^+$ 에서 다음이 나온다.

$$
x\log x=\frac{\log x}{1/x},\qquad \lim_{x\to 0^+}\frac{1/x}{-1/x^2}=\lim_{x\to 0^+}(-x)=0
$$

$1^\infty$ 꼴은 로그를 취한다. $x\log(1+1/x)$ 를 $\log(1+1/x)/(1/x)$ 로 쓰고 $t=1/x\to 0^+$ 에서 $\log(1+t)/t\to 1$ 이므로 $(1+1/x)^x\to e$ 다.

## 역의 실패

$f/g$ 의 극한이 있어도 $f'/g'$ 의 극한은 없을 수 있다. $f(x)=x+\sin x$, $g(x)=x$ 이면 $x\to\infty$ 에서 $f(x)/g(x)=1+\sin x/x\to 1$ 이다. 그러나 $f'(x)/g'(x)=1+\cos x$ 는 $0$ 과 $2$ 사이를 오가서 극한이 없다. 법칙은 $f'/g'$ 의 극한이 있을 때만 결론을 준다.

## Taylor 전개와의 관계

$f$ 와 $g$ 가 $a$ 에서 [멱급수](power-series.md)로 전개되고 $f(x)=c_m(x-a)^m+\cdots$, $g(x)=d_m(x-a)^m+\cdots$ 이며 $d_m\ne 0$ 이면 $f/g\to c_m/d_m$ 이다. 법칙을 $m$ 번 쓴 결과와 같다. 직관 절의 예에서 $1-\cos x=x^2/2-\cdots$ 이므로 $c_2/d_2=1/2$ 이다.

# 활용

- [Fejér 핵](fejer-kernel.md)의 $t=0$ 에서의 값. $\sin((N+1)t/2)/\sin(t/2)$ 는 $t=0$ 에서 $0/0$ 이고, 법칙으로 극한이 $N+1$ 이다. 핵이 $t=0$ 에서 연속이 되도록 그 값을 준다.
- [Weyl 지표 공식](weyl-character-formula.md)에서 차원 공식을 얻는 극한. 지표를 한 변수 $t$ 로 특수화하면 분자와 분모가 $t=0$ 에서 함께 사라지고, 법칙을 양근의 개수만큼 써서 표현의 차원이 나온다.
- 증가 속도의 비교. 무한대 꼴 절의 $\log x$, $x^k$, $e^x$ 의 순서가 알고리즘 실행 시간을 비교하는 점근 표기(asymptotic notation)에서 쓰인다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 5.13.

# 연관 문서

## 선수지식

- [평균값 정리](mean-value-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation
