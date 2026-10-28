# Karatsuba 곱셈

# 개요

**Karatsuba 곱셈(Karatsuba multiplication)** 은 두 정수를 반으로 나눠 작은 곱 세 번과 덧셈, 뺄셈으로 곱을 구하는 분할 정복(divide and conquer) 알고리즘이다. $12\times 34$ 를 십의 자리와 일의 자리로 나눠 계산하면 $1\cdot 3$, $1\cdot 4$, $2\cdot 3$, $2\cdot 4$ 의 곱 네 번이 필요하고, 자릿수가 두 배가 될 때마다 곱의 횟수가 네 배가 된다. Karatsuba 곱셈은 가운데 두 곱의 합을 $(1+2)(3+4)$ 에서 나머지 두 곱을 빼서 얻어, 곱 세 번으로 계산 시간을 $n^{\log_2 3}$ 규모로 줄인다.

# 직관

$n$ 자리 정수 두 개의 곱에 걸리는 실행 시간은 $\Theta(n^{\log_2 3})$ 이고 $\log_2 3\approx 1.585$ 다. A. Karatsuba 가 1960 년에 찾아 1962 년에 Ofman 과 함께 발표했고, 곱셈에 $n^2$ 에 비례하는 연산이 필요하다는 Kolmogorov 의 추측을 반박했다[^1][^2]. 실행 시간은 [마스터 정리](master-theorem.md)의 첫째 경우로 나온다.

$12\times 34$ 를 손으로 곱하면 한 자리 곱 $1\cdot 3$, $1\cdot 4$, $2\cdot 3$, $2\cdot 4$ 네 번을 한다. $n$ 자리 수를 앞 절반과 뒤 절반으로 나눠도 같아서, 절반 자리 곱 네 번과 자리 맞춰 더하기가 든다. 실행 시간은 $T(n)=4T(n/2)+\Theta(n)$ 이고 $\Theta(n^2)$ 이다. 나누기만으로는 빨라지지 않는다.

곱 네 개 가운데 $1\cdot 3$ 과 $2\cdot 4$ 는 따로 쓰이지만 $1\cdot 4$ 와 $2\cdot 3$ 은 합 $1\cdot 4+2\cdot 3$ 으로만 쓰인다. 합만 있으면 되므로 $(1+2)(3+4)=21$ 을 한 번 곱하고 이미 구한 $1\cdot 3=3$ 과 $2\cdot 4=8$ 을 빼면 $21-3-8=10$ 이 그 합이다. 곱은 $3\cdot 100+10\cdot 10+8=408$ 이다.

한 자리 곱이 세 번으로 줄었다. 절반 자리 곱에서도 같은 일을 되풀이하면 $T(n)=3T(n/2)+\Theta(n)$ 이고, 나눌 때마다 곱의 수가 네 배가 아니라 세 배로 는다.

# 정의

## 알고리즘

밑을 $B$ 라 하고 $x$, $y$ 를 $B^m$ 에서 자른다.

$$
x=x_1B^m+x_0,\qquad y=y_1B^m+y_0,\qquad 0\le x_0,y_0\lt B^m
$$

세 곱을 재귀로 구한다.

$$
z_2=x_1y_1,\qquad z_0=x_0y_0,\qquad z_1=(x_1+x_0)(y_1+y_0)-z_2-z_0
$$

그러면 $z_1=x_1y_0+x_0y_1$ 이고 곱은 다음과 같다.

$$
xy=z_2B^{2m}+z_1B^m+z_0
$$

$m$ 은 두 수의 자릿수 $n$ 의 절반 $\lfloor n/2\rfloor$ 로 잡는다. 자릿수가 정해진 값보다 작으면 학교에서 배우는 곱셈으로 곱한다.

```typescript
function karatsuba(x: bigint, y: bigint): bigint {
  if (x < 10n || y < 10n) return x * y;
  const n = Math.max(x.toString().length, y.toString().length);
  const m = Math.floor(n / 2);
  const B = 10n ** BigInt(m);
  const x1 = x / B;
  const x0 = x % B;
  const y1 = y / B;
  const y0 = y % B;
  const z2 = karatsuba(x1, y1);
  const z0 = karatsuba(x0, y0);
  const z1 = karatsuba(x1 + x0, y1 + y0) - z2 - z0;
  return z2 * B * B + z1 * B + z0;
}
```

## 다항식으로 본 Karatsuba 곱셈

$X(t)=x_1t+x_0$, $Y(t)=y_1t+y_0$ 이라 하면 $x=X(B^m)$, $y=Y(B^m)$ 이다. 곱 $P(t)=X(t)Y(t)=z_2t^2+z_1t+z_0$ 는 이차 다항식이므로 세 값으로 정해진다. Karatsuba 곱셈은 $P(0)=x_0y_0$, $P(1)=(x_1+x_0)(y_1+y_0)$, 최고차 계수 $z_2=x_1y_1$ 세 값을 곱으로 구하고 계수를 되찾는다. 계수를 되찾는 단계가 [다항식 보간](polynomial-interpolation.md)이고, 마지막 값은 $t=\infty$ 에서의 값으로 센다.

# 성질

## 실행 시간

정리. Karatsuba 곱셈은 $n$ 자리 정수 두 개를 $O(n^{\log_2 3})$ 번의 한 자리 연산으로 곱한다[^1][^3].

증명의 요지. $x_1+x_0$ 와 $y_1+y_0$ 은 자리가 $m+1$ 개까지이므로 $T(n)\le 3T(\lceil n/2\rceil+1)+cn$ 이다. 덧셈, 뺄셈, 자리 이동은 $O(n)$ 이다. $+1$ 은 차수를 바꾸지 않고, $a=3$, $b=2$, $f(n)=O(n)=O(n^{\log_2 3-\varepsilon})$ 이므로 마스터 정리의 첫째 경우에서 $T(n)=\Theta(n^{\log_2 3})$ 이다.

곱은 세 번이 되었지만 덧셈과 뺄셈이 늘었으므로, 자릿수가 작을 때는 학교 곱셈이 더 빠르다. 그래서 실제 구현은 자릿수가 수십 자리 아래로 내려가면 학교 곱셈으로 바꾼다[^3].

## Toom–Cook 곱셈

**Toom–Cook 곱셈(Toom–Cook multiplication)** 은 수를 $k$ 조각으로 나눠 다항식 $X(t)$, $Y(t)$ 의 차수를 $k-1$ 로 두고, 곱 $P(t)$ 를 $2k-1$ 개의 점에서의 값으로 구한 뒤 보간한다[^4][^5]. 점에서의 값은 $n/k$ 자리 곱 $2k-1$ 번이고, 값을 구하는 계산과 보간은 고정된 계수의 덧셈과 상수 나눗셈이므로 $O(n)$ 이다. 따라서 다음이 성립한다.

$$
T(n)=(2k-1)T(n/k)+O(n)=\Theta\left(n^{\log_k(2k-1)}\right)
$$

$k=2$ 이고 점이 $0$, $1$, $\infty$ 이면 Karatsuba 곱셈이다. $k=3$ 이면 지수가 $\log_3 5\approx 1.465$ 다. $k$ 를 키우면 지수는 $1$ 에 다가가지만 보간의 상수가 커진다.

# 활용

- 큰 정수의 곱셈. 수백 자리에서 수천 자리 사이의 곱에 Karatsuba 곱셈과 Toom–Cook 곱셈을 쓰고, 그보다 큰 수에는 [고속 Fourier 변환](fft.md)에 기반한 [Schönhage–Strassen 알고리즘](schonhage-strassen.md) 같은 곱셈을 쓴다[^3]. [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 모듈러 거듭제곱이 이 범위의 곱을 되풀이한다.
- 다항식의 곱셈. 정의 절의 다항식 꼴에서 $t$ 를 $B^m$ 에 대입하지 않으면 차수 $n$ 인 다항식 두 개를 $O(n^{\log_2 3})$ 번의 계수 연산으로 곱한다. 계수는 어느 환의 원소여도 된다.
- [마스터 정리](master-theorem.md)의 첫째 경우의 예. 곱의 수 $a=3$ 이 나누는 비율 $b=2$ 의 제곱보다 작아 지수가 $2$ 아래로 내려간다.

[^1]: A. Karatsuba, Yu. Ofman, "Multiplication of many-digital numbers by automatic computers", Doklady Akad. Nauk SSSR 145 (1962), 293–294.
[^2]: A. A. Karatsuba, "The complexity of computations", Proceedings of the Steklov Institute of Mathematics 211 (1995), 169–183.
[^3]: D. E. Knuth, *The Art of Computer Programming, Vol. 2: Seminumerical Algorithms*, 3rd ed., Addison-Wesley, 1997, §4.3.3.
[^4]: A. L. Toom, "The complexity of a scheme of functional elements realizing the multiplication of integers", Soviet Mathematics Doklady 3 (1963), 714–716.
[^5]: S. A. Cook, *On the minimum computation time of functions*, PhD thesis, Harvard University, 1966.

# 연관 문서

## 선수지식

- [마스터 정리](master-theorem.md)

## 더 알아보기

- [Schönhage–Strassen 알고리즘](schonhage-strassen.md)

#algorithms #complexity #algebra
