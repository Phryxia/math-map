# Horner 법

# 개요

**Horner 법(Horner's method)** 은 다항식의 값을 곱셈과 덧셈을 번갈아 하며 계산하는 방법이다. $p(x)=2x^3-6x^2+2x-1$ 에 $x=3$ 을 넣을 때 항마다 거듭제곱을 따로 구하면 곱셈이 여섯 번 든다. Horner 법은 $x$ 를 거듭 묶어 $((2\cdot3-6)\cdot3+2)\cdot3-1=5$ 로 계산해, 차수 $n$ 인 다항식의 값을 곱셈 $n$ 번과 덧셈 $n$ 번으로 얻는다.

# 직관

$p(3)$ 을 정의대로 계산하면 $2\cdot3\cdot3\cdot3$ 에 곱셈 세 번, $6\cdot3\cdot3$ 에 두 번, $2\cdot3$ 에 한 번이 들어 모두 여섯 번이다. 차수가 $n$ 이면 $n(n+1)/2$ 번이다. $3^2=9$ 와 $3^3=27$ 을 차례로 만들어 다시 쓰면 거듭제곱에 두 번, 계수 곱에 세 번이 들어 다섯 번이다.

거듭제곱을 만드는 곱셈과 계수를 곱하는 곱셈이 따로 있어서 횟수가 줄지 않는다. 그래서 두 곱셈을 하나로 합친다. $x$ 가 들어 있는 항에서 $x$ 를 묶어 내면 $p(x)=(2x^2-6x+2)x-1$ 이고, 괄호 안에서 다시 묶으면 $p(x)=((2x-6)x+2)x-1$ 이다.

이 식을 안쪽부터 계산하면 $2$ 에서 시작해 $2\cdot3-6=0$, $0\cdot3+2=2$, $2\cdot3-1=5$ 다. 한 단계마다 지금까지의 값에 $3$ 을 곱하고 다음 계수를 더하므로 곱셈은 세 번이다. 이 계산 순서가 Horner 법이다.

# 정의

## Horner 반복

차수 $n$ 인 다항식 $p$ 를 다음과 같이 둔다.

$$
p(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0
$$

수 $c$ 에 대해 Horner 법은 다음 점화식이다.

$$
b_n=a_n,\qquad b_k=a_k+c\thinspace b_{k+1}\quad(k=n-1,\dots,0)
$$

마지막 값 $b_0$ 이 $p(c)$ 다. 개요의 예에서 $a_3,a_2,a_1,a_0=2,-6,2,-1$ 이고 $c=3$ 이면 $b_3,b_2,b_1,b_0=2,0,2,5$ 다.

```javascript
// 계수 a[0..n] (a[n] 이 최고차항) 인 다항식의 c 에서의 값
function horner(a, c) {
  let b = a[a.length - 1];
  for (let k = a.length - 2; k >= 0; k--) b = a[k] + c * b;
  return b;
}
```

## 조립제법

Horner 반복의 중간값 $b_n,\dots,b_1$ 을 계수로 하는 다항식을 다음과 같이 둔다.

$$
q(x)=b_nx^{n-1}+b_{n-1}x^{n-2}+\cdots+b_2x+b_1
$$

이 $q$ 와 $b_0$ 을 $p$ 를 $x-c$ 로 나눈 몫과 나머지로 읽는 계산을 **조립제법(synthetic division)** 이라 한다. 개요의 예에서 $q(x)=2x^2+2$ 이고 다음이 성립한다.

$$
2x^3-6x^2+2x-1=(x-3)(2x^2+2)+5
$$

# 성질

## 몫과 나머지

정리. $p(x)=(x-c)\thinspace q(x)+b_0$ 이고 $b_0=p(c)$ 다.

증명의 요지. $k\ge1$ 에서 $(x-c)q(x)$ 의 $x^k$ 계수는 $b_k-c\thinspace b_{k+1}$ 이고($b_{n+1}=0$ 으로 둔다), 점화식으로 이것은 $a_k$ 다. 상수항은 $-c\thinspace b_1$ 이므로 $b_0$ 을 더하면 $b_0-c\thinspace b_1=a_0$ 이다. $x=c$ 를 넣으면 $p(c)=b_0$ 이고, 이는 [다항식환](polynomial-rings.md)의 나머지 정리 $f(x)=(x-a)q(x)+f(a)$ 를 계산으로 실현한 것이다.

## 도함수와 Taylor 계수

$p(x)=(x-c)q(x)+p(c)$ 를 미분하면 $p'(c)=q(c)$ 다. 그래서 $q$ 에 Horner 법을 한 번 더 쓰면 $p'(c)$ 가 나온다. 개요의 예에서 $q(3)=2\cdot9+2=20$ 이고 $p'(x)=6x^2-12x+2$ 에서도 $p'(3)=20$ 이다.

같은 나눗셈을 몫에 되풀이하면 나머지들이 차례로 $p(c)$, $p'(c)$, $p''(c)/2!$, $\dots$ 이다. 이것들은 $p(x+c)$ 의 계수이므로, 곱셈 $n(n+1)/2$ 번으로 다항식을 $x$ 방향으로 $c$ 만큼 옮길 수 있다.

## 연산 횟수의 최적성

계수를 미리 알지 못하는 일반 다항식의 값을 덧셈, 뺄셈, 곱셈, 나눗셈으로 계산하는 모든 방법은 덧셈과 뺄셈이 $n$ 번 이상, 곱셈과 나눗셈이 $n$ 번 이상 필요하다. 덧셈 쪽은 Belaga 가, 곱셈 쪽은 Pan 이 증명했다.[^1] 따라서 Horner 법은 두 횟수에서 모두 최적이다.

같은 다항식에 여러 값을 넣는 경우에는 계수를 미리 변환해 두는 방법(preconditioning)으로 곱셈을 약 $n/2$ 번으로 줄일 수 있다.[^1] 변환 비용은 한 번만 든다.

## 반올림 오차

부동소수점에서 단위 반올림이 $u$ 일 때, Horner 법으로 계산한 값 $\hat p(c)$ 는 계수를 조금 바꾼 다항식의 정확한 값이다.[^2]

$$
\hat p(c)=\sum_{i=0}^na_i(1+\theta_i)c^i,\qquad\lvert\theta_i\rvert\le\gamma_{2n}=\frac{2nu}{1-2nu}
$$

이로부터 오차는 다음으로 묶인다.

$$
\lvert\hat p(c)-p(c)\rvert\le\gamma_{2n}\sum_{i=0}^n\lvert a_i\rvert\lvert c\rvert^i
$$

오른쪽의 합이 $\lvert p(c)\rvert$ 보다 훨씬 크면, 곧 근 근처에서 항들이 서로 지워지면 상대오차가 커진다.

# 활용

- 자릿수 문자열을 수로 바꾸는 계산. 이진수 $1011$ 은 계수 $1,0,1,1$ 인 다항식의 $x=2$ 에서의 값이고, 중간값이 $1$, $2$, $5$, $11$ 이다. 한 글자씩 읽으며 앞의 값에 밑을 곱하고 다음 자릿수를 더한다.
- [Rabin–Karp 알고리즘](rabin-karp.md)의 문자열 해시는 글자를 계수로 하는 다항식의 값을 법 $p$ 로 Horner 법으로 계산한다.
- [Goertzel 알고리즘](goertzel-algorithm.md)은 [이산 Fourier 변환](fourier.md)의 계수 하나를 단위근 $r$ 에서의 다항식 값으로 보고 Horner 점화식으로 계산한다.
- 다항식의 근을 [Newton 법](newton-method.md)으로 구할 때 $p(c)$ 와 $p'(c)$ 를 두 번의 Horner 법으로 얻고, 근 $r$ 을 찾은 뒤에는 조립제법의 몫 $q$ 로 차수를 하나 낮춰 다음 근을 찾는다.
- [Chebyshev 다항식](chebyshev-polynomials.md)의 급수는 세 항 점화식을 거꾸로 돌리는 Clenshaw 알고리즘(Clenshaw algorithm)으로 계산한다. 점화식을 $p_{k+1}(x)=x\thinspace p_k(x)$ 로 두어 단항식 기저를 쓰면 Clenshaw 알고리즘은 Horner 법과 같다.
- 병렬 계산에서는 Horner 법의 각 단계가 앞 단계를 기다리므로, 차수 $3$ 이면 $a_0+a_1x$ 와 $a_2+a_3x$ 를 동시에 계산한 뒤 뒤의 것에 $x^2$ 을 곱해 더하는 Estrin 방법(Estrin's scheme)을 쓴다.

[^1]: D. E. Knuth, The Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd ed., Addison-Wesley (1997), §4.6.4.
[^2]: N. J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., SIAM (2002), §5.1.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)

## 더 알아보기

- [Laguerre 법](laguerre-method.md)
- [Goertzel 알고리즘](goertzel-algorithm.md)

#algorithms #algebra #analysis
